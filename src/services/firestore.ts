import { collection, getDocs, query, QuerySnapshot, DocumentData, addDoc, serverTimestamp, doc, getDoc, updateDoc, arrayUnion } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db, auth, storage } from '../config/firebase';

/**
 * Fetch companies-drivers data from Firestore
 * @returns Promise with the companies-drivers data
 */
export const fetchCompaniesDrivers = async () => {
  try {
    console.log('Fetching companies-drivers data from Firestore...');
    
    const companiesDriversRef = collection(db, 'companies-drivers');
    const q = query(companiesDriversRef);
    const querySnapshot: QuerySnapshot<DocumentData> = await getDocs(q);
    
    const companiesDriversData: any[] = [];
    
    querySnapshot.forEach((doc) => {
      companiesDriversData.push({
        id: doc.id,
        ...doc.data()
      });
    });
    
    console.log('Companies-Drivers Data (All):');
    console.log('======================');
    console.log(`Total documents: ${companiesDriversData.length}`);
    console.log('Data:', companiesDriversData);
    console.table(companiesDriversData);
    
    // Get current user
    const currentUser = auth.currentUser;
    
    if (currentUser) {
      const userEmail = currentUser.email;
      const userId = currentUser.uid;
      
      console.log('\nCurrent User Info:');
      console.log('==================');
      console.log('Email:', userEmail);
      console.log('UID:', userId);
      
      // Filter drivers where createdUserId contains user email OR companyUid equals user id
      const filteredDrivers = companiesDriversData.filter((driver) => {
        const createdUserIdMatch = driver.createdUserId && 
          userEmail && 
          driver.createdUserId.toLowerCase().includes(userEmail.toLowerCase());
        
        const companyUidMatch = driver.companyUid && 
          userId && 
          driver.companyUid === userId;
        
        return createdUserIdMatch || companyUidMatch;
      });
      
      console.log('\nFiltered Companies-Drivers Data:');
      console.log('=================================');
      console.log(`Total filtered documents: ${filteredDrivers.length}`);
      console.log('Filtered Data:', filteredDrivers);
      console.table(filteredDrivers);
      
      return filteredDrivers;
    } else {
      console.log('\nNo user is currently logged in. Returning all data.');
      return companiesDriversData;
    }
  } catch (error) {
    console.error('Error fetching companies-drivers data:', error);
    throw error;
  }
};

/**
 * Fetch all data from a specific collection
 * @param collectionName - Name of the collection to fetch
 * @returns Promise with the collection data
 */
export const fetchCollection = async (collectionName: string) => {
  try {
    console.log(`Fetching data from collection: ${collectionName}...`);
    
    const collectionRef = collection(db, collectionName);
    const querySnapshot: QuerySnapshot<DocumentData> = await getDocs(collectionRef);
    
    const data: any[] = [];
    
    querySnapshot.forEach((doc) => {
      data.push({
        id: doc.id,
        ...doc.data()
      });
    });
    
    console.log(`${collectionName} Data:`, data);
    
    return data;
  } catch (error) {
    console.error(`Error fetching ${collectionName} data:`, error);
    throw error;
  }
};

// ==================== HELPER FUNCTIONS ====================

/**
 * Upload a file to Firebase Storage
 * @param file - File to upload
 * @param path - Storage path
 * @returns Promise with download URL
 */
const uploadFileToStorage = async (file: File, path: string): Promise<string> => {
  const storageRef = ref(storage, path);
  await uploadBytes(storageRef, file);
  const downloadURL = await getDownloadURL(storageRef);
  return downloadURL;
};

/**
 * Convert Arabic city name to city object with ID and bilingual names
 */
const getCityObject = (cityNameAr: string): { id: number; name: { ar: string; en: string } } => {
  const cityMap: { [key: string]: { id: number; en: string } } = {
    'الرياض': { id: 1, en: 'Riyadh' },
    'جدة': { id: 2, en: 'Jeddah' },
    'مكة المكرمة': { id: 3, en: 'Makkah' },
    'المدينة المنورة': { id: 4, en: 'Madinah' },
    'الدمام': { id: 5, en: 'Dammam' },
    'الخبر': { id: 6, en: 'Khobar' },
    'الظهران': { id: 7, en: 'Dhahran' },
    'الطائف': { id: 8, en: 'Taif' },
    'بريدة': { id: 9, en: 'Buraidah' },
    'تبوك': { id: 10, en: 'Tabuk' },
  };

  const cityData = cityMap[cityNameAr] || { id: 0, en: cityNameAr };
  
  return {
    id: cityData.id,
    name: {
      ar: cityNameAr,
      en: cityData.en
    }
  };
};

/**
 * Convert Arabic weekday to bilingual object
 */
const getDayObject = (dayAr: string): { ar: string; en: string } => {
  const dayMap: { [key: string]: string } = {
    'السبت': 'Saturday',
    'الأحد': 'Sunday',
    'الإثنين': 'Monday',
    'الثلاثاء': 'Tuesday',
    'الأربعاء': 'Wednesday',
    'الخميس': 'Thursday',
    'الجمعة': 'Friday',
  };

  return {
    ar: dayAr,
    en: dayMap[dayAr] || dayAr
  };
};

/**
 * Convert Arabic plate letters to English
 */
const convertPlateLettersToEnglish = (arabicLetters: string): string => {
  const letterMap: { [key: string]: string } = {
    'أ': 'A', 'ب': 'B', 'ج': 'J', 'د': 'D', 'ه': 'H',
    'و': 'W', 'ز': 'Z', 'ح': 'H', 'خ': 'KH', 'ر': 'R',
    'س': 'S', 'ش': 'SH', 'ص': 'S', 'ض': 'D', 'ط': 'T',
    'ع': 'E', 'غ': 'G', 'ف': 'F', 'ق': 'Q', 'ك': 'K',
    'ل': 'L', 'م': 'M', 'ن': 'N', 'ي': 'Y', 'ء': 'A'
  };

  return arabicLetters.split('').map(char => {
    if (char === ' ') return ' ';
    return letterMap[char] || char;
  }).join('');
};

/**
 * Convert Arabic car size to English code
 */
const convertCarSizeToEnglish = (sizeAr: string): string => {
  const sizeMap: { [key: string]: string } = {
    'صغيرة': 'small',
    'متوسطة': 'medium',
    'كبيرة': 'large',
    'VIP': 'vip',
  };

  return sizeMap[sizeAr] || 'small';
};

// ==================== ADD DRIVER FUNCTION ====================

export interface AddDriverData {
  phone: string;
  email: string;
  driverName: string;
  driverImage?: File | string;
  address: string;
  city: string;
  selectedDays: string[];
  vehicleStatus: string;
  driverAmount: string;
  driverLicense?: File | string;
  plateLetters: string;
  plateNumber: string;
  vehicleCategory: string;
}

/**
 * Add a new driver to Firestore companies-drivers collection
 * @param driverData - Driver form data
 * @returns Promise with the created driver document
 */
export const addCompanyDriver = async (driverData: AddDriverData) => {
  try {
    const currentUser = auth.currentUser;

    if (!currentUser) {
      throw new Error('No user is currently logged in');
    }

    console.log('Adding new driver to Firestore...');
    console.log('Current user:', currentUser.email, currentUser.uid);
    console.log('Driver data:', driverData);

    // Upload files to Firebase Storage if they are File objects
    let imageUrl = '';
    let licenseUrl = '';

    if (driverData.driverImage && driverData.driverImage instanceof File) {
      const timestamp = Date.now();
      const imagePath = `companies-drivers/${timestamp}${driverData.driverImage.name}`;
      imageUrl = await uploadFileToStorage(driverData.driverImage, imagePath);
      console.log('Driver image uploaded:', imageUrl);
    }

    if (driverData.driverLicense && driverData.driverLicense instanceof File) {
      const timestamp = Date.now();
      const licensePath = `companies-drivers/${timestamp}${driverData.driverLicense.name}`;
      licenseUrl = await uploadFileToStorage(driverData.driverLicense, licensePath);
      console.log('Driver license uploaded:', licenseUrl);
    }

    // Prepare the driver document
    const driverDocument = {
      // Basic info
      name: driverData.driverName,
      email: driverData.email,
      phone: driverData.phone,
      location: driverData.address, // العنوان mapped to location
      
      // City object
      city: getCityObject(driverData.city),
      
      // Images
      image: imageUrl || '',
      licenceAttachment: licenseUrl || '',
      
      // Plate number
      plateNumber: {
        ar: `${driverData.plateNumber} ${driverData.plateLetters}`,
        en: `${driverData.plateNumber} ${convertPlateLettersToEnglish(driverData.plateLetters)}`
      },
      
      // Car size
      size: convertCarSizeToEnglish(driverData.vehicleCategory),
      
      // Plan details
      plan: {
        carSize: convertCarSizeToEnglish(driverData.vehicleCategory),
        dailyTrans: driverData.driverAmount,
        exceptionDays: driverData.selectedDays.map(day => getDayObject(day)),
        createdDate: Date.now(),
        createdUserId: currentUser.email || '',
      },
      
      // Financial
      balance: parseInt(driverData.driverAmount) || 0,
      
      // Status
      isActive: true,
      
      // System fields
      createdDate: serverTimestamp(),
      createdUserId: currentUser.email || '',
      companyUid: currentUser.uid, // Current user's UID
      
      // Empty arrays for future use
      driverIds: [],
      
      // Additional info (if needed)
      vehicleStatus: driverData.vehicleStatus,
    };

    console.log('Prepared driver document:', driverDocument);

    // Add to Firestore
    const companiesDriversRef = collection(db, 'companies-drivers');
    const docRef = await addDoc(companiesDriversRef, driverDocument);

    console.log('Driver added successfully with ID:', docRef.id);

    return {
      id: docRef.id,
      ...driverDocument
    };
  } catch (error) {
    console.error('Error adding driver to Firestore:', error);
    throw error;
  }
};

/**
 * Fetch a single driver by ID from Firestore
 * @param driverId - Driver document ID
 * @returns Promise with the driver data
 */
export const fetchDriverById = async (driverId: string) => {
  try {
    console.log('Fetching driver by ID:', driverId);
    
    const driverDocRef = doc(db, 'companies-drivers', driverId);
    const driverDoc = await getDoc(driverDocRef);
    
    if (!driverDoc.exists()) {
      throw new Error('Driver not found');
    }
    
    const driverData = {
      id: driverDoc.id,
      ...driverDoc.data()
    };
    
    console.log('Driver data fetched:', driverData);
    
    return driverData;
  } catch (error) {
    console.error('Error fetching driver by ID:', error);
    throw error;
  }
};

/**
 * Fetch multiple drivers by their IDs
 * @param driverIds - Array of driver document IDs
 * @returns Promise with array of driver data
 */
export const fetchDriversByIds = async (driverIds: string[]) => {
  try {
    if (!driverIds || driverIds.length === 0) {
      console.log('No driver IDs provided');
      return [];
    }

    console.log('Fetching drivers by IDs:', driverIds);
    
    const driverPromises = driverIds.map(id => fetchDriverById(id).catch(err => {
      console.error(`Error fetching driver ${id}:`, err);
      return null;
    }));
    const drivers = await Promise.all(driverPromises);
    
    // Filter out null values (failed fetches)
    const validDrivers = drivers.filter(driver => driver !== null);
    
    console.log('Fetched drivers:', validDrivers);
    
    return validDrivers;
  } catch (error) {
    console.error('Error fetching drivers by IDs:', error);
    throw error;
  }
};

/**
 * Add a driver to a car (creates bidirectional link)
 * @param driverId - Driver document ID
 * @param carId - Car document ID
 * @param carData - Car data to store in driver document
 * @returns Promise with update result
 */
export const addDriverToCar = async (driverId: string, carId: string, carData: any) => {
  try {
    const currentUser = auth.currentUser;

    if (!currentUser) {
      throw new Error('No user is currently logged in');
    }

    console.log('Adding driver to car...');
    console.log('Driver ID:', driverId);
    console.log('Car ID:', carId);
    console.log('Car data:', carData);

    // Update the car document - add driver ID to driverIds array
    const carDocRef = doc(db, 'companies-cars', carId);
    await updateDoc(carDocRef, {
      driverIds: arrayUnion(driverId)
    });
    console.log('Car updated: Added driver to driverIds array');

    // Update the driver document - add car data
    const driverDocRef = doc(db, 'companies-drivers', driverId);
    await updateDoc(driverDocRef, {
      car: {
        id: carId,
        name: carData.name || '',
        plateNumber: carData.plateNumber || {},
        carModel: carData.carModel || {},
        carType: carData.carType || {},
        fuelType: carData.fuelType || '',
        size: carData.size || carData.plan?.carSize || '',
      }
    });
    console.log('Driver updated: Added car data to driver document');

    return {
      success: true,
      driverId,
      carId
    };
  } catch (error) {
    console.error('Error adding driver to car:', error);
    throw error;
  }
};

// ==================== ADD CAR FUNCTION ====================

export interface AddCarData {
  carName: string;
  fuelType: string;
  carType: string;
  city: string;
  year: string;
  model: string;
  brand: string;
  plateLetters: string;
  plateNumbers: string;
  carCondition: string;
}

/**
 * Add a new car to Firestore companies-cars collection
 * @param carData - Car form data
 * @returns Promise with the created car document
 */
export const addCompanyCar = async (carData: AddCarData) => {
  try {
    const currentUser = auth.currentUser;

    if (!currentUser) {
      throw new Error('No user is currently logged in');
    }

    console.log('Adding new car to Firestore...');
    console.log('Current user:', currentUser.email, currentUser.uid);
    console.log('Car data:', carData);

    // Convert fuel type to code
    const fuelTypeMap: { [key: string]: string } = {
      'بنزين 91': 'fuel91',
      'بنزين 95': 'fuel95',
      'ديزل': 'diesel',
    };

    // Convert car type to size code
    const carSizeMap: { [key: string]: string } = {
      'صغيرة': 'small',
      'متوسطة': 'medium',
      'كبيرة': 'large',
      'Vip': 'vip',
      'VIP': 'vip',
    };

    // Prepare the car document
    const carDocument = {
      // Basic info
      name: carData.carName,
      
      // City object
      city: getCityObject(carData.city),
      
      // Plate number
      plateNumber: {
        ar: `${carData.plateNumbers} ${carData.plateLetters}`,
        en: `${carData.plateNumbers} ${convertPlateLettersToEnglish(carData.plateLetters)}`
      },
      
      // Car Model (Brand)
      carModel: {
        name: {
          ar: carData.brand,
          en: carData.brand
        },
        createdUserId: currentUser.email || '',
        createdDate: serverTimestamp(),
      },
      
      // Car Type (Model + Year)
      carType: {
        name: {
          ar: carData.model,
          en: carData.model
        },
        year: carData.year,
        createdUserId: currentUser.email || '',
        createdDate: serverTimestamp(),
      },
      
      // Fuel type
      fuelType: fuelTypeMap[carData.fuelType] || 'fuel95',
      
      // Car size
      size: carSizeMap[carData.carType] || 'small',
      
      // Plan details
      plan: {
        carSize: carSizeMap[carData.carType] || 'small',
        createdDate: Date.now(),
        createdUserId: currentUser.email || '',
      },
      
      // Car condition/status
      vehicleStatus: carData.carCondition,
      
      // System fields
      createdDate: serverTimestamp(),
      createdUserId: currentUser.email || '',
      companyUid: currentUser.uid, // Current user's UID
      
      // Empty arrays for future use
      driverIds: [],
      
      // Balance/financial
      balance: 0,
    };

    console.log('Prepared car document:', carDocument);

    // Add to Firestore
    const companiesCarsRef = collection(db, 'companies-cars');
    const docRef = await addDoc(companiesCarsRef, carDocument);

    console.log('Car added successfully with ID:', docRef.id);

    return {
      id: docRef.id,
      ...carDocument
    };
  } catch (error) {
    console.error('Error adding car to Firestore:', error);
    throw error;
  }
};

/**
 * Fetch a single car by ID from Firestore
 * @param carId - Car document ID
 * @returns Promise with the car data
 */
export const fetchCarById = async (carId: string) => {
  try {
    console.log('Fetching car by ID:', carId);
    
    const carDocRef = doc(db, 'companies-cars', carId);
    const carDoc = await getDoc(carDocRef);
    
    if (!carDoc.exists()) {
      throw new Error('Car not found');
    }
    
    const carData = {
      id: carDoc.id,
      ...carDoc.data()
    };
    
    console.log('Car data fetched:', carData);
    
    return carData;
  } catch (error) {
    console.error('Error fetching car by ID:', error);
    throw error;
  }
};

/**
 * Fetch companies-cars data from Firestore
 * @returns Promise with the companies-cars data
 */
export const fetchCompaniesCars = async () => {
  try {
    console.log('Fetching companies-cars data from Firestore...');
    
    const companiesCarsRef = collection(db, 'companies-cars');
    const q = query(companiesCarsRef);
    const querySnapshot: QuerySnapshot<DocumentData> = await getDocs(q);
    
    const companiesCarsData: any[] = [];
    
    querySnapshot.forEach((doc) => {
      companiesCarsData.push({
        id: doc.id,
        ...doc.data()
      });
    });
    
    console.log('Companies-Cars Data (All):');
    console.log('======================');
    console.log(`Total documents: ${companiesCarsData.length}`);
    console.log('Data:', companiesCarsData);
    console.table(companiesCarsData);
    
    // Get current user
    const currentUser = auth.currentUser;
    
    if (currentUser) {
      const userEmail = currentUser.email;
      const userId = currentUser.uid;
      
      console.log('\nCurrent User Info:');
      console.log('==================');
      console.log('Email:', userEmail);
      console.log('UID:', userId);
      
      // Filter cars where createdUserId contains user email OR companyUid equals user id
      const filteredCars = companiesCarsData.filter((car) => {
        const createdUserIdMatch = car.createdUserId && 
          userEmail && 
          car.createdUserId.toLowerCase().includes(userEmail.toLowerCase());
        
        const companyUidMatch = car.companyUid && 
          userId && 
          car.companyUid === userId;
        
        return createdUserIdMatch || companyUidMatch;
      });
      
      console.log('\nFiltered Companies-Cars Data:');
      console.log('=================================');
      console.log(`Total filtered documents: ${filteredCars.length}`);
      console.log('Filtered Data:', filteredCars);
      console.table(filteredCars);
      
      return filteredCars;
    } else {
      console.log('\nNo user is currently logged in. Returning all data.');
      return companiesCarsData;
    }
  } catch (error) {
    console.error('Error fetching companies-cars data:', error);
    throw error;
  }
};
