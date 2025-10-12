import { collection, getDocs, query, QuerySnapshot, DocumentData, addDoc, serverTimestamp, doc, getDoc, updateDoc, arrayUnion, where } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db, auth, storage } from '../config/firebase';

/**
 * Fetch companies-drivers data from Firestore
 * @returns Promise with the companies-drivers data
 */
export const fetchCompaniesDrivers = async () => {
  try {
    // console.log('Fetching companies-drivers data from Firestore...');
    
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
    
    // console.log('Companies-Drivers Data (All):');
    // console.log('======================');
    // console.log(`Total documents: ${companiesDriversData.length}`);
    // console.log('Data:', companiesDriversData);
    // console.table(companiesDriversData);
    
    // Get current user
    const currentUser = auth.currentUser;
    
    if (currentUser) {
      const userEmail = currentUser.email;
      const userId = currentUser.uid;
      
      // console.log('\nCurrent User Info:');
      // console.log('==================');
      // console.log('Email:', userEmail);
      // console.log('UID:', userId);
      
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
      
      // console.log('\nFiltered Companies-Drivers Data:');
      // console.log('=================================');
      // console.log(`Total filtered documents: ${filteredDrivers.length}`);
      // console.log('Filtered Data:', filteredDrivers);
      // console.table(filteredDrivers);
      
      return filteredDrivers;
    } else {
      // console.log('\nNo user is currently logged in. Returning all data.');
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
    // console.log(`Fetching data from collection: ${collectionName}...`);
    
    const collectionRef = collection(db, collectionName);
    const querySnapshot: QuerySnapshot<DocumentData> = await getDocs(collectionRef);
    
    const data: any[] = [];
    
    querySnapshot.forEach((doc) => {
      data.push({
        id: doc.id,
        ...doc.data()
      });
    });
    
    // console.log(`${collectionName} Data:`, data);
    
    return data;
  } catch (error) {
    console.error(`Error fetching ${collectionName} data:`, error);
    throw error;
  }
};

/**
 * Fetch companies-drivers-transfer data from Firestore
 * Filtered by current user's company email (createdUser.email)
 * @returns Promise with the companies-drivers-transfer data filtered by current company
 */
export const fetchCompaniesDriversTransfer = async () => {
  try {
    // console.log('\n🔄 ========================================');
    // console.log('📊 FETCHING COMPANIES-DRIVERS-TRANSFER DATA');
    // console.log('========================================');
    // console.log('Fetching data from companies-drivers-transfer collection...\n');
    
    const companiesDriversTransferRef = collection(db, 'companies-drivers-transfer');
    const q = query(companiesDriversTransferRef);
    const querySnapshot: QuerySnapshot<DocumentData> = await getDocs(q);
    
    const allTransferData: any[] = [];
    
    querySnapshot.forEach((doc) => {
      allTransferData.push({
        id: doc.id,
        ...doc.data()
      });
    });
    
    // console.log('✅ DATA FETCHED SUCCESSFULLY!');
    // console.log('========================================');
    // console.log(`📌 Total Documents Found: ${allTransferData.length}`);
    // console.log('========================================\n');
    
    // Get current user
    const currentUser = auth.currentUser;
    
    if (!currentUser) {
      // console.log('⚠️ No user is currently logged in. Returning all data.');
      return allTransferData;
    }
    
    const userEmail = currentUser.email;
    const userId = currentUser.uid;
    
    // console.log('ℹ️ CURRENT USER INFO:');
    // console.log('========================================');
    // console.log('Email:', userEmail);
    // console.log('UID:', userId);
    // console.log('========================================\n');
    
    // if (allTransferData.length > 0) {
    //   console.log('📋 SAMPLE DOCUMENT STRUCTURE:');
    //   console.log('========================================');
    //   console.dir(allTransferData[0], { depth: null, colors: true });
    //   console.log('========================================\n');
    //   
    //   console.log('📊 ALL DOCUMENTS - CREATED USER EMAILS:');
    //   console.log('========================================');
    //   console.table(allTransferData.map(doc => ({
    //     id: doc.id,
    //     'createdUser.email': doc.createdUser?.email || 'N/A',
    //     'createdUser.brandName': doc.createdUser?.brandName || 'N/A',
    //   })));
    //   console.log('========================================\n');
    // }
    
    // Filter transfers where createdUser.email matches current user's email
    const filteredTransfers = allTransferData.filter((transfer) => {
      const createdUserEmail = transfer.createdUser?.email;
      
      // Check if createdUser.email matches current user's email
      const emailMatch = createdUserEmail && 
        userEmail && 
        createdUserEmail.toLowerCase() === userEmail.toLowerCase();
      
      return emailMatch;
    });
    
    // console.log('✅ FILTERED COMPANIES-DRIVERS-TRANSFER DATA:');
    // console.log('========================================');
    // console.log(`📌 Total Transfers for ${userEmail}:`, filteredTransfers.length);
    // console.log('========================================\n');
    
    // if (filteredTransfers.length === 0) {
    //   console.log('⚠️ NO MATCHING TRANSFERS FOUND!');
    //   console.log('========================================');
    //   console.log('Debugging Info:');
    //   console.log('- Looking for createdUser.email =', userEmail);
    //   console.log('\n📋 All createdUser.email values in collection:');
    //   const uniqueEmails = [...new Set(allTransferData.map(t => t.createdUser?.email).filter(Boolean))];
    //   console.log(uniqueEmails);
    //   console.log('========================================\n');
    // } else {
    //   console.log('📋 FILTERED TRANSFER DATA:');
    //   console.log('========================================');
    //   console.dir(filteredTransfers, { depth: null, colors: true });
    //   console.log('\n📊 FILTERED TABLE VIEW:');
    //   console.table(filteredTransfers.map(doc => ({
    //     id: doc.id,
    //     'createdUser.email': doc.createdUser?.email,
    //     'createdUser.brandName': doc.createdUser?.brandName,
    //     'createdUser.balance': doc.createdUser?.balance,
    //   })));
    //   console.log('========================================\n');
    // }
    
    return filteredTransfers;
  } catch (error) {
    console.error('❌ Error fetching companies-drivers-transfer data:', error);
    throw error;
  }
};

/**
 * Fetch orders data from Firestore orders collection
 * Filtered by companyUid matching current user's UID or email
 * Enriched with driver data from companies-drivers collection
 * @returns Promise with filtered and enriched orders data
 */
export const fetchOrders = async () => {
  try {
    console.log('\n🔄 ========================================');
    console.log('📊 FETCHING ORDERS DATA');
    console.log('========================================');
    
    const ordersRef = collection(db, 'orders');
    const q = query(ordersRef);
    const querySnapshot: QuerySnapshot<DocumentData> = await getDocs(q);
    
    const allOrdersData: any[] = [];
    
    querySnapshot.forEach((doc) => {
      allOrdersData.push({
        id: doc.id,
        ...doc.data()
      });
    });
    
    console.log('✅ DATA FETCHED SUCCESSFULLY!');
    console.log(`📌 Total Documents Found: ${allOrdersData.length}`);
    
    // Get current user
    const currentUser = auth.currentUser;
    
    if (!currentUser) {
      console.log('⚠️ No user is currently logged in. Returning all data.');
      return allOrdersData;
    }
    
    const userEmail = currentUser.email;
    const userId = currentUser.uid;
    
    console.log('ℹ️ CURRENT USER INFO:');
    console.log('Email:', userEmail);
    console.log('UID:', userId);
    
    // Filter orders where companyUid matches current user's UID or email
    const filteredOrders = allOrdersData.filter((order) => {
      const companyUid = order.companyUid;
      
      // Check if companyUid matches UID
      const uidMatch = companyUid && 
        userId && 
        companyUid === userId;
      
      // Check if companyUid matches email
      const emailMatch = companyUid && 
        userEmail && 
        companyUid.toLowerCase() === userEmail.toLowerCase();
      
      return uidMatch || emailMatch;
    });
    
    console.log('✅ FILTERED ORDERS DATA:');
    console.log(`📌 Total Orders for ${userEmail}:`, filteredOrders.length);
    
    if (filteredOrders.length > 0) {
      console.log('\n📋 Sample Filtered Order:');
      console.log('Address Check:');
      console.log('- city:', filteredOrders[0].city);
      console.log('- city.name:', filteredOrders[0].city?.name);
      console.log('- city.name.ar:', filteredOrders[0].city?.name?.ar);
      console.log('- city.name.en:', filteredOrders[0].city?.name?.en);
      console.log('- address field:', filteredOrders[0].address);
    }
    
    // Enrich orders with driver data
    const enrichedOrders = await Promise.all(
      filteredOrders.map(async (order) => {
        let driverPhone = '-';
        let driverName = '-';
        
        // Get driver email from assignedDriver
        const driverEmail = order.assignedDriver?.email;
        
        if (driverEmail) {
          try {
            // Fetch driver data from companies-drivers by email
            const driversRef = collection(db, 'companies-drivers');
            const driverQuery = query(driversRef, where('email', '==', driverEmail));
            const driverSnapshot = await getDocs(driverQuery);
            
            if (!driverSnapshot.empty) {
              const driverData = driverSnapshot.docs[0].data();
              driverPhone = driverData.phoneNumber || driverData.phone || '-';
              driverName = driverData.name || '-';
            }
          } catch (err) {
            console.error('Error fetching driver data for order:', order.id, err);
          }
        }
        
        return {
          ...order,
          enrichedDriverPhone: driverPhone,
          enrichedDriverName: driverName,
        };
      })
    );
    
    // console.log('✅ ENRICHED ORDERS DATA:');
    // console.log('📊 Total enriched orders:', enrichedOrders.length);
    
    return enrichedOrders;
  } catch (error) {
    console.error('❌ Error fetching orders data:', error);
    throw error;
  }
};

/**
 * Create a new delivery order in Firestore
 * @param orderData - Order form data
 * @returns Promise with the created order document
 */
export const createDeliveryOrder = async (orderData: {
  location?: string | null;
  recipientName?: string | null;
  phone?: string | null;
  fuelType: string;
  quantity: number;
  fuelCost: number;
  deliveryFees: number;
  totalCost: number;
}) => {
  try {
    const currentUser = auth.currentUser;

    if (!currentUser) {
      throw new Error('No user is currently logged in');
    }

    // Prepare the order document - save exactly as submitted, even if null
    const orderDocument = {
      // Form fields - save as-is, even if null
      location: orderData.location || null,
      recipientName: orderData.recipientName || null,
      phone: orderData.phone || null,
      
      // Fuel details
      fuelType: orderData.fuelType,
      totalLitre: orderData.quantity,
      
      // Costs
      fuelCost: orderData.fuelCost,
      deliveryFees: orderData.deliveryFees,
      totalPrice: orderData.totalCost,
      
      // Status - always "in progress" for new orders
      status: 'in progress',
      
      // Company info
      companyUid: currentUser.uid,
      createdUserId: currentUser.uid,
      
      // Timestamps
      orderDate: serverTimestamp(),
      createdDate: serverTimestamp(),
      
      // Reference ID
      refId: Date.now().toString(),
    };

    // Add to Firestore
    const ordersRef = collection(db, 'orders');
    const docRef = await addDoc(ordersRef, orderDocument);

    return {
      id: docRef.id,
      ...orderDocument
    };
  } catch (error) {
    console.error('Error creating delivery order:', error);
    throw error;
  }
};

/**
 * Calculate fuel statistics from orders
 * Groups orders by fuel type and calculates total litres and cost
 */
export const calculateFuelStatistics = (orders: any[]): {
  fuelTypes: Array<{ type: string; totalLitres: number; totalCost: number; color: string }>;
  totalLitres: number;
  totalCost: number;
} => {
  // Initialize the three fuel types with zero values
  const fuelTypeMap = new Map<string, { totalLitres: number; totalCost: number }>([
    ['ديزل', { totalLitres: 0, totalCost: 0 }],
    ['بنزين 91', { totalLitres: 0, totalCost: 0 }],
    ['بنزين 95', { totalLitres: 0, totalCost: 0 }],
  ]);

  // Color mapping for fuel types
  const colorMap: { [key: string]: string } = {
    'ديزل': 'text-color-mode-text-icons-t-orange',
    'بنزين 91': 'text-color-mode-text-icons-t-green',
    'بنزين 95': 'text-color-mode-text-icons-t-red',
  };

  orders.forEach((order) => {
    // Extract fuel type with multiple fallbacks
    let fuelType = '';
    
    if (order.selectedOption?.name?.ar) {
      fuelType = order.selectedOption.name.ar;
    } else if (order.selectedOption?.name?.en) {
      fuelType = order.selectedOption.name.en;
    } else if (order.selectedOption?.label) {
      fuelType = order.selectedOption.label;
    } else if (order.selectedOption?.title?.ar) {
      fuelType = order.selectedOption.title.ar;
    } else if (order.selectedOption?.title?.en) {
      fuelType = order.selectedOption.title.en;
    } else if (order.service?.title?.ar) {
      fuelType = order.service.title.ar;
    } else if (order.service?.title?.en) {
      fuelType = order.service.title.en;
    }
    
    // Extract litres and cost
    const litres = order.totalLitre || 0;
    const cost = order.totalPrice || 0;

    // Map fuel type to one of our three categories
    let mappedFuelType = '';
    if (fuelType.includes('ديزل') || fuelType.includes('Diesel') || fuelType.includes('ديزل')) {
      mappedFuelType = 'ديزل';
    } else if (fuelType.includes('91') || fuelType.includes('91')) {
      mappedFuelType = 'بنزين 91';
    } else if (fuelType.includes('95') || fuelType.includes('95')) {
      mappedFuelType = 'بنزين 95';
    }

    // Add to the mapped fuel type
    if (mappedFuelType && fuelTypeMap.has(mappedFuelType)) {
      const current = fuelTypeMap.get(mappedFuelType)!;
      current.totalLitres += litres;
      current.totalCost += cost;
    }
  });

  // Convert map to array - always show all three types
  const fuelTypes = [
    {
      type: 'ديزل',
      totalLitres: fuelTypeMap.get('ديزل')?.totalLitres || 0,
      totalCost: fuelTypeMap.get('ديزل')?.totalCost || 0,
      color: colorMap['ديزل'],
    },
    {
      type: 'بنزين 91',
      totalLitres: fuelTypeMap.get('بنزين 91')?.totalLitres || 0,
      totalCost: fuelTypeMap.get('بنزين 91')?.totalCost || 0,
      color: colorMap['بنزين 91'],
    },
    {
      type: 'بنزين 95',
      totalLitres: fuelTypeMap.get('بنزين 95')?.totalLitres || 0,
      totalCost: fuelTypeMap.get('بنزين 95')?.totalCost || 0,
      color: colorMap['بنزين 95'],
    },
  ];

  // Calculate overall totals
  const totalLitres = fuelTypes.reduce((sum, fuel) => sum + fuel.totalLitres, 0);
  const totalCost = fuelTypes.reduce((sum, fuel) => sum + fuel.totalCost, 0);

  return { fuelTypes, totalLitres, totalCost };
};

/**
 * Calculate car wash statistics grouped by car size
 * @param orders - Array of orders
 * @returns Object with car wash totals by size
 */
export const calculateCarWashStatistics = (orders: any[]): {
  sizes: Array<{ name: string; count: number; totalCost: number }>;
  totalOrders: number;
  totalCost: number;
} => {
  // Initialize size categories in Arabic
  const sizeMap: { [key: string]: { count: number; totalCost: number } } = {
    'صغيرة': { count: 0, totalCost: 0 },
    'متوسطة': { count: 0, totalCost: 0 },
    'كبيرة': { count: 0, totalCost: 0 },
    'VIP': { count: 0, totalCost: 0 },
  };

  // Filter car wash orders
  const carWashOrders = orders.filter(order => {
    const checkCategory = (value: any): boolean => {
      if (!value) return false;
      const str = typeof value === 'string' ? value : '';
      return str.includes('عمليات غسيل السيارات') || 
             str.includes('غسيل سيارة') ||
             str.includes('غسيل خارجي') ||
             str.includes('غسيل') ||
             str.includes('Car Wash') ||
             str.includes('Car wash') ||
             str.includes('Exterior wash') ||
             str.includes('washing') ||
             str.toLowerCase().includes('wash');
    };

    return checkCategory(order.category?.ar) ||
           checkCategory(order.category?.en) ||
           checkCategory(order.service?.category?.ar) ||
           checkCategory(order.service?.category?.en) ||
           checkCategory(order.service?.title?.ar) ||
           checkCategory(order.service?.title?.en) ||
           checkCategory(order.selectedOption?.category?.name?.ar) ||
           checkCategory(order.selectedOption?.category?.name?.en) ||
           checkCategory(order.selectedOption?.category?.ar) ||
           checkCategory(order.selectedOption?.category?.en) ||
           checkCategory(order.selectedOption?.title?.ar) ||
           checkCategory(order.selectedOption?.title?.en) ||
           checkCategory(order.selectedOption?.label) ||
           checkCategory(order.type) ||
           checkCategory(order.orderType);
  });

  console.log('\n🔍 DEBUG: Car Wash Orders Filtering');
  console.log('Total orders received:', orders.length);
  console.log('Car wash orders found:', carWashOrders.length);
  
  if (carWashOrders.length > 0) {
    console.log('\n📋 First car wash order structure:');
    console.dir(carWashOrders[0], { depth: 3 });
  }

  // Process each car wash order
  carWashOrders.forEach((order, index) => {
    console.log(`\n--- Processing Car Wash Order ${index + 1} ---`);
    console.log('Order ID:', order.refId || order.id);
    console.log('Total Price:', order.totalPrice);
    console.log('Service Title:', order.service?.title);
    console.log('Selected Option Category:', order.selectedOption?.category?.name);
    
    // Get car size from car.size
    let carSize = order.car?.size;

    console.log('car.size:', carSize);

    // Normalize car size to match our categories
    if (carSize) {
      const originalSize = carSize;
      carSize = String(carSize).toLowerCase().trim();
      let mappedSize = '';
      
      // Check for small (صغيرة)
      if (carSize === 'small' || carSize === 'صغيرة' || carSize.includes('صغير')) {
        mappedSize = 'صغيرة';
      } 
      // Check for medium/middle (متوسطة)
      else if (carSize === 'medium' || carSize === 'middle' || carSize === 'متوسطة' || carSize.includes('متوسط')) {
        mappedSize = 'متوسطة';
      } 
      // Check for large/big (كبيرة)
      else if (carSize === 'large' || carSize === 'big' || carSize === 'كبيرة' || carSize.includes('كبير')) {
        mappedSize = 'كبيرة';
      } 
      // Check for VIP
      else if (carSize === 'vip' || carSize.toUpperCase() === 'VIP') {
        mappedSize = 'VIP';
      }

      if (mappedSize && sizeMap[mappedSize]) {
        const price = order.totalPrice || 0;
        sizeMap[mappedSize].count += 1;
        sizeMap[mappedSize].totalCost += price;
        console.log(`✅ SUCCESS: Mapped "${originalSize}" → "${mappedSize}" | Price: ${price} ر.س`);
      } else {
        console.log(`❌ FAILED: Could not map size "${originalSize}" (normalized: "${carSize}")`);
      }
    } else {
      console.log('⚠️ WARNING: No car.size found for this order');
    }
  });

  // Convert to array format
  const sizes = Object.entries(sizeMap).map(([name, data]) => ({
    name,
    count: data.count,
    totalCost: data.totalCost,
  }));

  const totalOrders = carWashOrders.length;
  const totalCost = sizes.reduce((sum, size) => sum + size.totalCost, 0);

  console.log('\n🚗 Car Wash Statistics:');
  console.log('========================');
  console.log('Total Orders:', totalOrders);
  console.log('Total Cost:', totalCost);
  console.log('By Size:');
  sizes.forEach(size => {
    console.log(`  ${size.name}: ${size.count} orders, ${size.totalCost} ر.س`);
  });
  console.log('========================\n');

  return { sizes, totalOrders, totalCost };
};

/**
 * Fetch and filter orders by car wash category
 * Prints filtered orders to console in their raw Firestore format
 */
export const fetchCarWashOrders = async (): Promise<any[]> => {
  try {
    const orders = await fetchOrders();
    
    // Filter orders where category contains car wash keywords
    const carWashOrders = orders.filter(order => {
      // Check all possible category field paths
      const checkCategory = (value: any): boolean => {
        if (!value) return false;
        const str = typeof value === 'string' ? value : '';
        return str.includes('عمليات غسيل السيارات') || 
               str.includes('غسيل سيارة') ||
               str.includes('غسيل') ||
               str.includes('Car Wash') ||
               str.includes('washing') ||
               str.toLowerCase().includes('wash');
      };

      return checkCategory(order.category?.ar) ||
             checkCategory(order.category?.en) ||
             checkCategory(order.service?.category?.ar) ||
             checkCategory(order.service?.category?.en) ||
             checkCategory(order.service?.title?.ar) ||
             checkCategory(order.service?.title?.en) ||
             checkCategory(order.selectedOption?.category?.ar) ||
             checkCategory(order.selectedOption?.category?.en) ||
             checkCategory(order.selectedOption?.title?.ar) ||
             checkCategory(order.selectedOption?.title?.en) ||
             checkCategory(order.selectedOption?.label) ||
             checkCategory(order.type) ||
             checkCategory(order.orderType);
    });

    console.log('\n🚗 ========================================');
    console.log('CAR WASH ORDERS');
    console.log('========================================');
    console.log('Total Car Wash Orders Found:', carWashOrders.length);
    console.log('========================================\n');
    
    if (carWashOrders.length > 0) {
      console.log('📋 Car Wash Orders Array:');
      console.log(JSON.stringify(carWashOrders, null, 2));
      console.log('\n📦 Car Wash Orders (Full Objects):');
      carWashOrders.forEach((order, index) => {
        console.log(`\n--- Order ${index + 1} ---`);
        console.dir(order, { depth: null });
      });
    } else {
      console.log('❌ No car wash orders found in current company orders.');
      console.log('\n🔍 Debugging - All available categories in orders:');
      const allCategories = new Set<string>();
      orders.forEach(order => {
        if (order.category?.ar) allCategories.add(`category.ar: ${order.category.ar}`);
        if (order.category?.en) allCategories.add(`category.en: ${order.category.en}`);
        if (order.service?.category?.ar) allCategories.add(`service.category.ar: ${order.service.category.ar}`);
        if (order.service?.category?.en) allCategories.add(`service.category.en: ${order.service.category.en}`);
        if (order.service?.title?.ar) allCategories.add(`service.title.ar: ${order.service.title.ar}`);
        if (order.service?.title?.en) allCategories.add(`service.title.en: ${order.service.title.en}`);
        if (order.selectedOption?.category?.ar) allCategories.add(`selectedOption.category.ar: ${order.selectedOption.category.ar}`);
        if (order.selectedOption?.category?.en) allCategories.add(`selectedOption.category.en: ${order.selectedOption.category.en}`);
        if (order.selectedOption?.title?.ar) allCategories.add(`selectedOption.title.ar: ${order.selectedOption.title.ar}`);
        if (order.selectedOption?.title?.en) allCategories.add(`selectedOption.title.en: ${order.selectedOption.title.en}`);
        if (order.selectedOption?.label) allCategories.add(`selectedOption.label: ${order.selectedOption.label}`);
      });
      console.log('Available categories:');
      Array.from(allCategories).forEach(cat => console.log('  -', cat));
    }

    return carWashOrders;
  } catch (error) {
    console.error('❌ Error fetching car wash orders:', error);
    return [];
  }
};

/**
 * Fetch all products from Firestore
 * @returns Promise with products data
 */
export const fetchProducts = async (): Promise<any[]> => {
  try {
    // console.log('Fetching products from Firestore...');
    
    const productsCollection = collection(db, 'products');
    const productsSnapshot = await getDocs(productsCollection);
    
    const products = productsSnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

    // console.log('Fetched products:', products.length);
    return products;
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
};

/**
 * Fetch companies-wallets-requests data from Firestore
 * Filtered by requestedUser.email matching current user's email
 * Uses requestedUser.balance as old balance
 * @returns Promise with filtered wallet requests data
 */
export const fetchWalletChargeRequests = async () => {
  try {
    // console.log('\n🔄 Fetching companies-wallets-requests...');
    
    const requestsRef = collection(db, 'companies-wallets-requests');
    const q = query(requestsRef);
    const querySnapshot: QuerySnapshot<DocumentData> = await getDocs(q);
    
    const allRequestsData: any[] = [];
    
    querySnapshot.forEach((doc) => {
      allRequestsData.push({
        id: doc.id,
        ...doc.data()
      });
    });
    
    // console.log('✅ Total requests found:', allRequestsData.length);
    
    // Get current user
    const currentUser = auth.currentUser;
    
    if (!currentUser) {
      // console.log('⚠️ No user logged in. Returning all data.');
      return allRequestsData;
    }
    
    const userEmail = currentUser.email;
    
    // Filter requests where requestedUser.email matches current user's email
    const filteredRequests = allRequestsData.filter((request) => {
      const requestedUserEmail = request.requestedUser?.email;
      
      const emailMatch = requestedUserEmail && 
        userEmail && 
        requestedUserEmail.toLowerCase() === userEmail.toLowerCase();
      
      return emailMatch;
    });
    
    // console.log('✅ Filtered requests:', filteredRequests.length);
    
    // Add oldBalance from requestedUser.balance
    const enrichedRequests = filteredRequests.map((request) => ({
      ...request,
      oldBalance: request.requestedUser?.balance || 0,
    }));
    
    // console.log('✅ Requests with balance:', enrichedRequests.length);
    
    return enrichedRequests;
  } catch (error) {
    console.error('❌ Error fetching wallet charge requests:', error);
    throw error;
  }
};

/**
 * Fetch current company data from Firestore companies collection
 * @returns Promise with the current company data
 */
export const fetchCurrentCompany = async () => {
  try {
    const currentUser = auth.currentUser;

    if (!currentUser) {
      // console.log('No user is currently logged in.');
      return null;
    }

    // console.log('\n🏢 ========================================');
    // console.log('📊 FETCHING CURRENT COMPANY DATA');
    // console.log('========================================');
    // console.log('👤 Current User Email:', currentUser.email);
    // console.log('🆔 Current User UID:', currentUser.uid);
    // console.log('========================================\n');

    const companiesRef = collection(db, 'companies');
    
    // Try to find company by UID first
    const qByUid = query(companiesRef, where('uid', '==', currentUser.uid));
    let querySnapshot = await getDocs(qByUid);
    
    // If not found by UID, try by email
    if (querySnapshot.empty && currentUser.email) {
      // console.log('No company found by UID, trying email...');
      const qByEmail = query(companiesRef, where('email', '==', currentUser.email));
      querySnapshot = await getDocs(qByEmail);
    }
    
    // If still not found, try by createdUserId
    if (querySnapshot.empty && currentUser.email) {
      // console.log('No company found by email, trying createdUserId...');
      const qByCreatedUserId = query(companiesRef, where('createdUserId', '==', currentUser.email));
      querySnapshot = await getDocs(qByCreatedUserId);
    }

    if (querySnapshot.empty) {
      // console.log('❌ No company document found for this user.');
      return null;
    }

    // Get the first matching document
    const companyDoc = querySnapshot.docs[0];
    const companyData = {
      id: companyDoc.id,
      ...companyDoc.data()
    };

    // console.log('\n✅ CURRENT COMPANY DATA FOUND:');
    // console.log('========================================');
    // console.log('🏢 Company ID:', companyData.id);
    // console.log('📧 Email:', companyData.email);
    // console.log('🏭 Brand Name:', companyData.brandName || companyData.name);
    // console.log('📞 Phone:', companyData.phoneNumber);
    // console.log('💰 Balance:', companyData.balance);
    // console.log('✅ Active:', companyData.isActive);
    // console.log('========================================');
    
    // console.log('\n📋 COMPLETE COMPANY DATA (All Fields):');
    // console.log('========================================');
    // console.dir(companyData, { depth: null, colors: true });
    // console.log('========================================\n');

    // Print specific important fields
    // console.log('🔑 KEY COMPANY INFORMATION:');
    // console.log('========================================');
    // console.log('Name:', companyData.name);
    // console.log('Brand Name:', companyData.brandName);
    // console.log('Email:', companyData.email);
    // console.log('Phone Number:', companyData.phoneNumber);
    // console.log('Balance:', companyData.balance);
    // console.log('Address:', companyData.address);
    // console.log('Location:', companyData.location);
    // console.log('Commercial Registration Number:', companyData.commercialRegistrationNumber);
    // console.log('VAT Number:', companyData.vatNumber);
    // console.log('Is Active:', companyData.isActive);
    // console.log('Status:', companyData.status);
    // console.log('========================================\n');

    // Print nested objects separately for clarity
    // if (companyData.formattedLocation) {
    //   console.log('📍 FORMATTED LOCATION:');
    //   console.log('========================================');
    //   console.dir(companyData.formattedLocation, { depth: null, colors: true });
    //   console.log('========================================\n');
    // }

    // if (companyData.selectedSubscription) {
    //   console.log('📦 SELECTED SUBSCRIPTION:');
    //   console.log('========================================');
    //   console.dir(companyData.selectedSubscription, { depth: null, colors: true });
    //   console.log('========================================\n');
    // }

    // if (companyData.tokens && companyData.tokens.length > 0) {
    //   console.log('🔐 DEVICE TOKENS:');
    //   console.log('========================================');
    //   console.log('Total Tokens:', companyData.tokens.length);
    //   companyData.tokens.forEach((token: any, index: number) => {
    //     console.log(`\nToken ${index + 1}:`);
    //     console.log('  Device Type:', token.deviceType);
    //     console.log('  App Version:', token.appVersion);
    //     console.log('  Last Updated:', token.lastUpdated);
    //   });
    //   console.log('========================================\n');
    // }

    // Print file URLs
    // console.log('📎 COMPANY FILES & DOCUMENTS:');
    // console.log('========================================');
    // console.log('Logo:', companyData.logo);
    // console.log('Address File:', companyData.addressFile);
    // console.log('Commercial Registration:', companyData.commercialRegistration);
    // console.log('Tax Certificate:', companyData.taxCertificate);
    // console.log('========================================\n');

    return companyData;
  } catch (error) {
    console.error('❌ Error fetching current company:', error);
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

    // console.log('Adding new driver to Firestore...');
    // console.log('Current user:', currentUser.email, currentUser.uid);
    // console.log('Driver data:', driverData);

    // Upload files to Firebase Storage if they are File objects
    let imageUrl = '';
    let licenseUrl = '';

    if (driverData.driverImage && driverData.driverImage instanceof File) {
      const timestamp = Date.now();
      const imagePath = `companies-drivers/${timestamp}${driverData.driverImage.name}`;
      imageUrl = await uploadFileToStorage(driverData.driverImage, imagePath);
      // console.log('Driver image uploaded:', imageUrl);
    }

    if (driverData.driverLicense && driverData.driverLicense instanceof File) {
      const timestamp = Date.now();
      const licensePath = `companies-drivers/${timestamp}${driverData.driverLicense.name}`;
      licenseUrl = await uploadFileToStorage(driverData.driverLicense, licensePath);
      // console.log('Driver license uploaded:', licenseUrl);
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

    // console.log('Prepared driver document:', driverDocument);

    // Add to Firestore
    const companiesDriversRef = collection(db, 'companies-drivers');
    const docRef = await addDoc(companiesDriversRef, driverDocument);

    // console.log('Driver added successfully with ID:', docRef.id);

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
    // console.log('Fetching driver by ID:', driverId);
    
    const driverDocRef = doc(db, 'companies-drivers', driverId);
    const driverDoc = await getDoc(driverDocRef);
    
    if (!driverDoc.exists()) {
      throw new Error('Driver not found');
    }
    
    const driverData = {
      id: driverDoc.id,
      ...driverDoc.data()
    };
    
    // console.log('Driver data fetched:', driverData);
    
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
      // console.log('No driver IDs provided');
      return [];
    }

    // console.log('Fetching drivers by IDs:', driverIds);
    
    const driverPromises = driverIds.map(id => fetchDriverById(id).catch(err => {
      console.error(`Error fetching driver ${id}:`, err);
      return null;
    }));
    const drivers = await Promise.all(driverPromises);
    
    // Filter out null values (failed fetches)
    const validDrivers = drivers.filter(driver => driver !== null);
    
    // console.log('Fetched drivers:', validDrivers);
    
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

    // console.log('Adding driver to car...');
    // console.log('Driver ID:', driverId);
    // console.log('Car ID:', carId);
    // console.log('Car data:', carData);

    // Update the car document - add driver ID to driverIds array
    const carDocRef = doc(db, 'companies-cars', carId);
    await updateDoc(carDocRef, {
      driverIds: arrayUnion(driverId)
    });
    // console.log('Car updated: Added driver to driverIds array');

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
    // console.log('Driver updated: Added car data to driver document');

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

    // console.log('Adding new car to Firestore...');
    // console.log('Current user:', currentUser.email, currentUser.uid);
    // console.log('Car data:', carData);

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

    // console.log('Prepared car document:', carDocument);

    // Add to Firestore
    const companiesCarsRef = collection(db, 'companies-cars');
    const docRef = await addDoc(companiesCarsRef, carDocument);

    // console.log('Car added successfully with ID:', docRef.id);

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
    // console.log('Fetching car by ID:', carId);
    
    const carDocRef = doc(db, 'companies-cars', carId);
    const carDoc = await getDoc(carDocRef);
    
    if (!carDoc.exists()) {
      throw new Error('Car not found');
    }
    
    const carData = {
      id: carDoc.id,
      ...carDoc.data()
    };
    
    // console.log('Car data fetched:', carData);
    
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
    // console.log('Fetching companies-cars data from Firestore...');
    
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
    
    // console.log('Companies-Cars Data (All):');
    // console.log('======================');
    // console.log(`Total documents: ${companiesCarsData.length}`);
    // console.log('Data:', companiesCarsData);
    // console.table(companiesCarsData);
    
    // Get current user
    const currentUser = auth.currentUser;
    
    if (currentUser) {
      const userEmail = currentUser.email;
      const userId = currentUser.uid;
      
      // console.log('\nCurrent User Info:');
      // console.log('==================');
      // console.log('Email:', userEmail);
      // console.log('UID:', userId);
      
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
      
      // console.log('\nFiltered Companies-Cars Data:');
      // console.log('=================================');
      // console.log(`Total filtered documents: ${filteredCars.length}`);
      // console.log('Filtered Data:', filteredCars);
      // console.table(filteredCars);
      
      return filteredCars;
    } else {
      // console.log('\nNo user is currently logged in. Returning all data.');
      return companiesCarsData;
    }
  } catch (error) {
    console.error('Error fetching companies-cars data:', error);
    throw error;
  }
};
