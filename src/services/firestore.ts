import {
  collection,
  getDocs,
  query,
  QuerySnapshot,
  DocumentData,
  addDoc,
  serverTimestamp,
  doc,
  getDoc,
  updateDoc,
  arrayUnion,
  where,
  orderBy,
} from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, auth, storage } from "../config/firebase";

/**
 * Normalize car size to standard Arabic format
 * Converts English (small/middle/big) and Arabic variations to standard Arabic
 * @param size - Car size in any format
 * @returns Normalized Arabic car size
 */
export const normalizeCarSize = (size: any): string => {
  if (!size) return "-";

  const sizeStr = String(size).toLowerCase().trim();

  // Small (صغيرة)
  if (sizeStr === "small" || sizeStr === "صغيرة" || sizeStr.includes("صغير")) {
    return "صغيرة";
  }

  // Medium/Middle (متوسطة)
  if (
    sizeStr === "medium" ||
    sizeStr === "middle" ||
    sizeStr === "متوسطة" ||
    sizeStr.includes("متوسط")
  ) {
    return "متوسطة";
  }

  // Large/Big (كبيرة)
  if (
    sizeStr === "large" ||
    sizeStr === "big" ||
    sizeStr === "كبيرة" ||
    sizeStr.includes("كبير")
  ) {
    return "كبيرة";
  }

  // VIP
  if (sizeStr === "vip" || sizeStr.includes("vip")) {
    return "VIP";
  }

  // Return original if no match
  return size;
};

/**
 * Fetch companies-drivers data from Firestore
 * @returns Promise with the companies-drivers data
 */
export const fetchCompaniesDrivers = async () => {
  try {
    // console.log('Fetching companies-drivers data from Firestore...');

    const companiesDriversRef = collection(db, "companies-drivers");
    const q = query(companiesDriversRef, orderBy("createdDate", "desc"));
    const querySnapshot: QuerySnapshot<DocumentData> = await getDocs(q);

    const companiesDriversData: any[] = [];

    querySnapshot.forEach((doc) => {
      companiesDriversData.push({
        id: doc.id,
        ...doc.data(),
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
        const createdUserIdMatch =
          driver.createdUserId &&
          userEmail &&
          driver.createdUserId.toLowerCase().includes(userEmail.toLowerCase());

        const companyUidMatch =
          driver.companyUid && userId && driver.companyUid === userId;

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
    console.error("Error fetching companies-drivers data:", error);
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
    const q = query(collectionRef, orderBy("createdDate", "desc"));
    const querySnapshot: QuerySnapshot<DocumentData> = await getDocs(q);

    const data: any[] = [];

    querySnapshot.forEach((doc) => {
      data.push({
        id: doc.id,
        ...doc.data(),
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

    const companiesDriversTransferRef = collection(
      db,
      "companies-drivers-transfer"
    );
    const q = query(
      companiesDriversTransferRef,
      orderBy("createdDate", "desc")
    );
    const querySnapshot: QuerySnapshot<DocumentData> = await getDocs(q);

    const allTransferData: any[] = [];

    querySnapshot.forEach((doc) => {
      allTransferData.push({
        id: doc.id,
        ...doc.data(),
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
      const emailMatch =
        createdUserEmail &&
        userEmail &&
        createdUserEmail.toLowerCase() === userEmail.toLowerCase();

      return emailMatch;
    });

    console.log("✅ FILTERED COMPANIES-DRIVERS-TRANSFER DATA:");
    console.log("========================================");
    console.log(
      `📌 Total Transfers for ${userEmail}:`,
      filteredTransfers.length
    );
    console.log("========================================\n");

    if (filteredTransfers.length === 0) {
      console.log("⚠️ NO MATCHING TRANSFERS FOUND!");
      console.log("========================================");
      console.log("Debugging Info:");
      console.log("- Looking for createdUser.email =", userEmail);
      console.log("\n📋 All createdUser.email values in collection:");
      const uniqueEmails = [
        ...new Set(
          allTransferData.map((t) => t.createdUser?.email).filter(Boolean)
        ),
      ];
      console.log(uniqueEmails);
      console.log("========================================\n");
    } else {
      console.log("📋 FILTERED TRANSFER DATA:");
      console.log("========================================");
      console.dir(filteredTransfers, { depth: null, colors: true });
      console.log("\n📊 FILTERED TABLE VIEW:");
      console.table(
        filteredTransfers.map((doc) => ({
          id: doc.id,
          "createdUser.email": doc.createdUser?.email,
          "createdUser.brandName": doc.createdUser?.brandName,
          "createdUser.balance": doc.createdUser?.balance,
        }))
      );
      console.log("========================================\n");
    }

    return filteredTransfers;
  } catch (error) {
    console.error("❌ Error fetching companies-drivers-transfer data:", error);
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
    console.log("\n🔄 ========================================");
    console.log("📊 FETCHING ORDERS DATA");
    console.log("========================================");

    const ordersRef = collection(db, "orders");
    const q = query(ordersRef, orderBy("orderDate", "desc"));
    const querySnapshot: QuerySnapshot<DocumentData> = await getDocs(q);

    const allOrdersData: any[] = [];

    querySnapshot.forEach((doc) => {
      allOrdersData.push({
        id: doc.id,
        ...doc.data(),
      });
    });

    console.log("✅ DATA FETCHED SUCCESSFULLY!");
    console.log(`📌 Total Documents Found: ${allOrdersData.length}`);

    // Get current user
    const currentUser = auth.currentUser;

    if (!currentUser) {
      console.log("⚠️ No user is currently logged in. Returning all data.");
      return allOrdersData;
    }

    const userEmail = currentUser.email;
    const userId = currentUser.uid;

    console.log("ℹ️ CURRENT USER INFO:");
    console.log("Email:", userEmail);
    console.log("UID:", userId);

    // Filter orders where companyUid matches current user's UID or email
    const filteredOrders = allOrdersData.filter((order) => {
      const companyUid = order.companyUid;

      // Check if companyUid matches UID
      const uidMatch = companyUid && userId && companyUid === userId;

      // Check if companyUid matches email
      const emailMatch =
        companyUid &&
        userEmail &&
        companyUid.toLowerCase() === userEmail.toLowerCase();

      return uidMatch || emailMatch;
    });

    console.log("✅ FILTERED ORDERS DATA:");
    console.log(`📌 Total Orders for ${userEmail}:`, filteredOrders.length);

    if (filteredOrders.length > 0) {
      console.log("\n📋 Sample Filtered Order:");
      console.log("Address Check:");
      console.log("- city:", filteredOrders[0].city);
      console.log("- city.name:", filteredOrders[0].city?.name);
      console.log("- city.name.ar:", filteredOrders[0].city?.name?.ar);
      console.log("- city.name.en:", filteredOrders[0].city?.name?.en);
      console.log("- address field:", filteredOrders[0].address);
    }

    // Enrich orders with driver data
    const enrichedOrders = await Promise.all(
      filteredOrders.map(async (order) => {
        let driverPhone = "-";
        let driverName = "-";

        // Get driver email from assignedDriver
        const driverEmail = order.assignedDriver?.email;

        if (driverEmail) {
          try {
            // Fetch driver data from companies-drivers by email
            const driversRef = collection(db, "companies-drivers");
            const driverQuery = query(
              driversRef,
              where("email", "==", driverEmail)
            );
            const driverSnapshot = await getDocs(driverQuery);

            if (!driverSnapshot.empty) {
              const driverData = driverSnapshot.docs[0].data();
              driverPhone = driverData.phoneNumber || driverData.phone || "-";
              driverName = driverData.name || "-";
            }
          } catch (err) {
            console.error(
              "Error fetching driver data for order:",
              order.id,
              err
            );
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
    console.error("❌ Error fetching orders data:", error);
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
      throw new Error("No user is currently logged in");
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

      // Selected option - maps to product/fuel type
      selectedOption: {
        name: {
          ar: orderData.fuelType,
          en:
            orderData.fuelType === "بنزين 91"
              ? "Gasoline 91"
              : orderData.fuelType === "بنزين 95"
              ? "Gasoline 95"
              : orderData.fuelType === "ديزل"
              ? "Diesel"
              : orderData.fuelType,
        },
      },

      // Service type - identifies this as a Fuel Delivery order
      service: {
        title: {
          ar: "توصيل الوقود",
          en: "Fuel Delivery",
        },
        desc: {
          ar: "عند الطلب وفي أي وقت وفي أي مكان",
          en: "On-demand, anytime anywhere.",
        },
      },

      // Costs
      fuelCost: orderData.fuelCost,
      deliveryFees: orderData.deliveryFees,
      totalPrice: orderData.totalCost,

      // Status - always "in progress" for new orders
      status: "in progress",

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
    const ordersRef = collection(db, "orders");
    const docRef = await addDoc(ordersRef, orderDocument);

    return {
      id: docRef.id,
      ...orderDocument,
    };
  } catch (error) {
    console.error("Error creating delivery order:", error);
    throw error;
  }
};

/**
 * Calculate fuel statistics from orders
 * Groups orders by fuel type and calculates total litres and cost
 */
export const calculateFuelStatistics = (
  orders: any[]
): {
  fuelTypes: Array<{
    type: string;
    totalLitres: number;
    totalCost: number;
    color: string;
  }>;
  totalLitres: number;
  totalCost: number;
} => {
  // Initialize the three fuel types with zero values
  const fuelTypeMap = new Map<
    string,
    { totalLitres: number; totalCost: number }
  >([
    ["ديزل", { totalLitres: 0, totalCost: 0 }],
    ["بنزين 91", { totalLitres: 0, totalCost: 0 }],
    ["بنزين 95", { totalLitres: 0, totalCost: 0 }],
  ]);

  // Color mapping for fuel types
  const colorMap: { [key: string]: string } = {
    ديزل: "text-color-mode-text-icons-t-orange",
    "بنزين 91": "text-color-mode-text-icons-t-green",
    "بنزين 95": "text-color-mode-text-icons-t-red",
  };

  orders.forEach((order) => {
    // Extract fuel type with multiple fallbacks
    let fuelType = "";

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
    let mappedFuelType = "";
    if (
      fuelType.includes("ديزل") ||
      fuelType.includes("Diesel") ||
      fuelType.includes("ديزل")
    ) {
      mappedFuelType = "ديزل";
    } else if (fuelType.includes("91") || fuelType.includes("91")) {
      mappedFuelType = "بنزين 91";
    } else if (fuelType.includes("95") || fuelType.includes("95")) {
      mappedFuelType = "بنزين 95";
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
      type: "ديزل",
      totalLitres: fuelTypeMap.get("ديزل")?.totalLitres || 0,
      totalCost: fuelTypeMap.get("ديزل")?.totalCost || 0,
      color: colorMap["ديزل"],
    },
    {
      type: "بنزين 91",
      totalLitres: fuelTypeMap.get("بنزين 91")?.totalLitres || 0,
      totalCost: fuelTypeMap.get("بنزين 91")?.totalCost || 0,
      color: colorMap["بنزين 91"],
    },
    {
      type: "بنزين 95",
      totalLitres: fuelTypeMap.get("بنزين 95")?.totalLitres || 0,
      totalCost: fuelTypeMap.get("بنزين 95")?.totalCost || 0,
      color: colorMap["بنزين 95"],
    },
  ];

  // Calculate overall totals
  const totalLitres = fuelTypes.reduce(
    (sum, fuel) => sum + fuel.totalLitres,
    0
  );
  const totalCost = fuelTypes.reduce((sum, fuel) => sum + fuel.totalCost, 0);

  return { fuelTypes, totalLitres, totalCost };
};

/**
 * Calculate car wash statistics grouped by car size
 * @param orders - Array of orders
 * @returns Object with car wash totals by size
 */
export const calculateCarWashStatistics = (
  orders: any[]
): {
  sizes: Array<{ name: string; count: number; totalCost: number }>;
  totalOrders: number;
  totalCost: number;
} => {
  // Initialize size categories in Arabic
  const sizeMap: { [key: string]: { count: number; totalCost: number } } = {
    صغيرة: { count: 0, totalCost: 0 },
    متوسطة: { count: 0, totalCost: 0 },
    كبيرة: { count: 0, totalCost: 0 },
    VIP: { count: 0, totalCost: 0 },
  };

  // Filter car wash orders
  const carWashOrders = orders.filter((order) => {
    const checkCategory = (value: any): boolean => {
      if (!value) return false;
      const str = typeof value === "string" ? value : "";
      return (
        str.includes("عمليات غسيل السيارات") ||
        str.includes("غسيل سيارة") ||
        str.includes("غسيل خارجي") ||
        str.includes("غسيل") ||
        str.includes("Car Wash") ||
        str.includes("Car wash") ||
        str.includes("Exterior wash") ||
        str.includes("washing") ||
        str.toLowerCase().includes("wash")
      );
    };

    return (
      checkCategory(order.category?.ar) ||
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
      checkCategory(order.orderType)
    );
  });

  console.log("\n🔍 DEBUG: Car Wash Orders Filtering");
  console.log("Total orders received:", orders.length);
  console.log("Car wash orders found:", carWashOrders.length);

  if (carWashOrders.length > 0) {
    console.log("\n📋 First car wash order structure:");
    console.dir(carWashOrders[0], { depth: 3 });
  }

  // Process each car wash order
  carWashOrders.forEach((order, index) => {
    console.log(`\n--- Processing Car Wash Order ${index + 1} ---`);
    console.log("Order ID:", order.refId || order.id);
    console.log("Total Price:", order.totalPrice);
    console.log("Service Title:", order.service?.title);
    console.log(
      "Selected Option Category:",
      order.selectedOption?.category?.name
    );

    // Get car size from car.size
    let carSize = order.car?.size;

    console.log("car.size:", carSize);

    // Normalize car size to match our categories
    if (carSize) {
      const originalSize = carSize;
      carSize = String(carSize).toLowerCase().trim();
      let mappedSize = "";

      // Check for small (صغيرة)
      if (
        carSize === "small" ||
        carSize === "صغيرة" ||
        carSize.includes("صغير")
      ) {
        mappedSize = "صغيرة";
      }
      // Check for medium/middle (متوسطة)
      else if (
        carSize === "medium" ||
        carSize === "middle" ||
        carSize === "متوسطة" ||
        carSize.includes("متوسط")
      ) {
        mappedSize = "متوسطة";
      }
      // Check for large/big (كبيرة)
      else if (
        carSize === "large" ||
        carSize === "big" ||
        carSize === "كبيرة" ||
        carSize.includes("كبير")
      ) {
        mappedSize = "كبيرة";
      }
      // Check for VIP
      else if (carSize === "vip" || carSize.toUpperCase() === "VIP") {
        mappedSize = "VIP";
      }

      if (mappedSize && sizeMap[mappedSize]) {
        const price = order.totalPrice || 0;
        sizeMap[mappedSize].count += 1;
        sizeMap[mappedSize].totalCost += price;
        console.log(
          `✅ SUCCESS: Mapped "${originalSize}" → "${mappedSize}" | Price: ${price} ر.س`
        );
      } else {
        console.log(
          `❌ FAILED: Could not map size "${originalSize}" (normalized: "${carSize}")`
        );
      }
    } else {
      console.log("⚠️ WARNING: No car.size found for this order");
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

  console.log("\n🚗 Car Wash Statistics:");
  console.log("========================");
  console.log("Total Orders:", totalOrders);
  console.log("Total Cost:", totalCost);
  console.log("By Size:");
  sizes.forEach((size) => {
    console.log(`  ${size.name}: ${size.count} orders, ${size.totalCost} ر.س`);
  });
  console.log("========================\n");

  return { sizes, totalOrders, totalCost };
};

/**
 * Calculate oil change statistics from filtered orders
 * Filters orders by oil service names and sums total litres
 * @param orders - Array of order documents
 * @returns Object with total litres of oil
 */
export const calculateOilChangeStatistics = (
  orders: any[]
): { totalLitres: number } => {
  console.log("\n🛢️ ========================================");
  console.log("CALCULATING OIL CHANGE STATISTICS");
  console.log("========================================");
  console.log("Total orders to process:", orders.length);

  // Filter orders where service or category matches oil change keywords
  const oilOrders = orders.filter((order) => {
    // Check all possible service/category field paths for oil keywords
    const checkOilService = (value: any): boolean => {
      if (!value) return false;
      const str = typeof value === "string" ? value : "";
      return (
        str.includes("زيت بترولايف") ||
        str.includes("Petrolife Oil") ||
        str.includes("زيت محرك موبيل") ||
        str.includes("Mobil motor oil") ||
        str.toLowerCase().includes("oil") ||
        str.includes("زيت")
      );
    };

    return (
      checkOilService(order.service?.title?.ar) ||
      checkOilService(order.service?.title?.en) ||
      checkOilService(order.service?.name?.ar) ||
      checkOilService(order.service?.name?.en) ||
      checkOilService(order.category?.ar) ||
      checkOilService(order.category?.en) ||
      checkOilService(order.selectedOption?.title?.ar) ||
      checkOilService(order.selectedOption?.title?.en) ||
      checkOilService(order.selectedOption?.name?.ar) ||
      checkOilService(order.selectedOption?.name?.en) ||
      checkOilService(order.selectedOption?.label)
    );
  });

  console.log("Oil orders found:", oilOrders.length);

  // Log sample oil orders for debugging
  if (oilOrders.length > 0) {
    console.log("\n📋 Sample Oil Orders (first 3):");
    oilOrders.slice(0, 3).forEach((order, index) => {
      console.log(`\nOil Order ${index + 1}:`);
      console.log("  Service Title AR:", order.service?.title?.ar);
      console.log("  Service Title EN:", order.service?.title?.en);
      console.log("  Total Litre:", order.totalLitre);
      console.log("  Quantity:", order.quantity);
      console.log("  Cart Items:", order.cartItems?.[0]?.quantity);
    });
  }

  // Sum total litres from oil orders
  let totalLitres = 0;

  oilOrders.forEach((order) => {
    // Try different field paths for quantity/litres
    const litres =
      order.totalLitre || order.quantity || order.cartItems?.[0]?.quantity || 0;

    totalLitres += parseFloat(litres) || 0;
  });

  console.log("\n🛢️ Oil Change Statistics:");
  console.log("========================");
  console.log("Total Oil Orders:", oilOrders.length);
  console.log("Total Litres:", totalLitres);
  console.log("========================\n");

  return { totalLitres };
};

/**
 * Calculate battery change statistics from filtered orders
 * Filters orders by battery service names and groups by car size
 * @param orders - Array of order documents
 * @returns Object with battery orders grouped by car size
 */
export const calculateBatteryChangeStatistics = (
  orders: any[]
): {
  sizes: Array<{ name: string; count: number }>;
  totalOrders: number;
} => {
  console.log("\n🔋 ========================================");
  console.log("CALCULATING BATTERY CHANGE STATISTICS");
  console.log("========================================");
  console.log("Total orders to process:", orders.length);

  // Filter orders where service or category matches battery keywords
  const batteryOrders = orders.filter((order) => {
    // Check all possible service/category field paths for battery keywords
    const checkBatteryService = (value: any): boolean => {
      if (!value) return false;
      const str = typeof value === "string" ? value : "";
      return (
        str.includes("تغيير وفحص البطارية") ||
        str.includes("Change and check the Battery") ||
        str.includes("تغيير البطارية") ||
        str.includes("Change the battery") ||
        str.includes("بريميوم بطارية") ||
        str.includes("Premium Battrey") ||
        str.includes("بوش") ||
        str.includes("Bosch") ||
        str.includes("AGM بطارية") ||
        str.includes("AGM Battrey") ||
        str.includes("ايه سي ديلكو") ||
        str.includes("ACDelco") ||
        str.includes("بطارية قياسي") ||
        str.includes("Standard Battrey") ||
        str.includes("فارتا") ||
        str.includes("Varta") ||
        str.toLowerCase().includes("battery") ||
        str.includes("بطارية")
      );
    };

    return (
      checkBatteryService(order.service?.title?.ar) ||
      checkBatteryService(order.service?.title?.en) ||
      checkBatteryService(order.service?.name?.ar) ||
      checkBatteryService(order.service?.name?.en) ||
      checkBatteryService(order.category?.ar) ||
      checkBatteryService(order.category?.en) ||
      checkBatteryService(order.selectedOption?.title?.ar) ||
      checkBatteryService(order.selectedOption?.title?.en) ||
      checkBatteryService(order.selectedOption?.name?.ar) ||
      checkBatteryService(order.selectedOption?.name?.en) ||
      checkBatteryService(order.selectedOption?.label)
    );
  });

  console.log("Battery orders found:", batteryOrders.length);

  // Log sample battery orders for debugging
  if (batteryOrders.length > 0) {
    console.log("\n📋 Sample Battery Orders (first 3):");
    batteryOrders.slice(0, 3).forEach((order, index) => {
      console.log(`\nBattery Order ${index + 1}:`);
      console.log("  Service Title AR:", order.service?.title?.ar);
      console.log("  Service Title EN:", order.service?.title?.en);
      console.log("  Car Size:", order.car?.size);
      console.log("  Order Size:", order.size);
    });
  }

  // Group by car size
  const sizeMap: Record<string, number> = {
    صغيرة: 0,
    متوسطة: 0,
    كبيرة: 0,
    VIP: 0,
  };

  batteryOrders.forEach((order) => {
    // Extract car size from multiple possible paths
    let carSize = order.car?.size || order.size || "";

    if (carSize) {
      console.log(`Processing order - Raw car size: "${carSize}"`);

      // Use normalizeCarSize helper function
      const normalizedSize = normalizeCarSize(carSize);

      // Increment count for normalized size
      if (sizeMap.hasOwnProperty(normalizedSize)) {
        sizeMap[normalizedSize]++;
        console.log("  → Mapped to:", normalizedSize);
      } else {
        console.log(`  ⚠️ Unknown size format: "${carSize}"`);
      }
    } else {
      console.log("⚠️ WARNING: No car.size found for this battery order");
    }
  });

  // Convert to array format
  const sizes = Object.entries(sizeMap).map(([name, count]) => ({
    name,
    count,
  }));

  const totalOrders = batteryOrders.length;

  console.log("\n🔋 Battery Change Statistics:");
  console.log("========================");
  console.log("Total Orders:", totalOrders);
  console.log("By Size:");
  sizes.forEach((size) => {
    console.log(`  ${size.name}: ${size.count} orders`);
  });
  console.log("========================\n");

  return { sizes, totalOrders };
};

/**
 * Calculate tire change statistics
 * Filters orders by tire service names and groups by car size
 * @param orders - Array of orders to process
 * @returns Object with sizes array and total tire change count
 */
export const calculateTireChangeStatistics = (
  orders: any[]
): {
  sizes: Array<{ name: string; count: number }>;
  totalOrders: number;
} => {
  // console.log('\n🚗 ========================================');
  // console.log('CALCULATING TIRE CHANGE STATISTICS');
  // console.log('========================================');
  // console.log('Total orders to process:', orders.length);

  // Filter orders where service or category matches tire keywords
  const tireOrders = orders.filter((order) => {
    // Check all possible service/category field paths for tire keywords
    const checkTireService = (value: any): boolean => {
      if (!value) return false;
      const str = typeof value === "string" ? value : "";
      return (
        str.includes("تغيير الإطارات") ||
        str.includes("Tire Change") ||
        str.includes("تغيير إطار") ||
        str.includes("Change Tire") ||
        str.includes("إطارات") ||
        str.includes("Tires") ||
        str.toLowerCase().includes("tire") ||
        str.toLowerCase().includes("tyre")
      );
    };

    return (
      checkTireService(order.service?.title?.ar) ||
      checkTireService(order.service?.title?.en) ||
      checkTireService(order.service?.name?.ar) ||
      checkTireService(order.service?.name?.en) ||
      checkTireService(order.category?.ar) ||
      checkTireService(order.category?.en) ||
      checkTireService(order.selectedOption?.title?.ar) ||
      checkTireService(order.selectedOption?.title?.en) ||
      checkTireService(order.selectedOption?.name?.ar) ||
      checkTireService(order.selectedOption?.name?.en) ||
      checkTireService(order.selectedOption?.label)
    );
  });

  // console.log('Tire change orders found:', tireOrders.length);

  // Group by car size
  const sizeMap: Record<string, number> = {
    صغيرة: 0,
    متوسطة: 0,
    كبيرة: 0,
    VIP: 0,
  };

  tireOrders.forEach((order) => {
    // Extract car size from multiple possible paths
    let carSize = order.car?.size || order.size || "";

    if (carSize) {
      // Use normalizeCarSize helper function
      const normalizedSize = normalizeCarSize(carSize);

      // Increment count for normalized size
      if (sizeMap.hasOwnProperty(normalizedSize)) {
        sizeMap[normalizedSize]++;
      }
    }
  });

  // Convert to array format
  const sizes = Object.entries(sizeMap).map(([name, count]) => ({
    name,
    count,
  }));

  const totalOrders = tireOrders.length;

  // console.log('\n🚗 Tire Change Statistics:');
  // console.log('========================');
  // console.log('Total Orders:', totalOrders);
  // console.log('By Size:');
  // sizes.forEach(size => {
  //   console.log(`  ${size.name}: ${size.count} orders`);
  // });
  // console.log('========================\n');

  return { sizes, totalOrders };
};

/**
 * Calculate battery replacement statistics
 * Filters orders by battery replacement keywords and calculates cost and counts
 * @param orders - Array of orders to process
 * @returns Object with total cost, replaced count, and requested count
 */
export const calculateBatteryReplacementStatistics = (
  orders: any[]
): {
  totalCost: number;
  replacedCount: number;
  requestedCount: number;
} => {
  // console.log('\n🔋 ========================================');
  // console.log('CALCULATING BATTERY REPLACEMENT STATISTICS');
  // console.log('========================================');
  // console.log('Total orders to process:', orders.length);

  // Filter orders where service or category matches battery keywords
  const batteryOrders = orders.filter((order) => {
    // Check all possible service/category field paths for battery keywords
    const checkBatteryService = (value: any): boolean => {
      if (!value) return false;
      const str = typeof value === "string" ? value : "";
      return (
        str.includes("تغيير وفحص البطارية") ||
        str.includes("Change and check the Battery") ||
        str.includes("تغيير البطارية") ||
        str.includes("Change the battery") ||
        str.includes("بريميوم بطارية") ||
        str.includes("Premium Battrey") ||
        str.includes("بوش") ||
        str.includes("Bosch") ||
        str.includes("AGM بطارية") ||
        str.includes("AGM Battrey") ||
        str.includes("ايه سي ديلكو") ||
        str.includes("ACDelco") ||
        str.includes("بطارية قياسي") ||
        str.includes("Standard Battrey") ||
        str.includes("فارتا") ||
        str.includes("Varta") ||
        str.includes("استبدال البطارية") ||
        str.includes("Battery Replacement") ||
        str.toLowerCase().includes("battery") ||
        str.includes("بطارية")
      );
    };

    return (
      checkBatteryService(order.service?.title?.ar) ||
      checkBatteryService(order.service?.title?.en) ||
      checkBatteryService(order.service?.name?.ar) ||
      checkBatteryService(order.service?.name?.en) ||
      checkBatteryService(order.category?.ar) ||
      checkBatteryService(order.category?.en) ||
      checkBatteryService(order.selectedOption?.title?.ar) ||
      checkBatteryService(order.selectedOption?.title?.en) ||
      checkBatteryService(order.selectedOption?.name?.ar) ||
      checkBatteryService(order.selectedOption?.name?.en) ||
      checkBatteryService(order.selectedOption?.label)
    );
  });

  // console.log('Battery replacement orders found:', batteryOrders.length);

  // Calculate statistics
  let totalCost = 0;
  let replacedCount = 0;
  let requestedCount = batteryOrders.length;

  batteryOrders.forEach((order) => {
    // Calculate total cost
    const orderCost = parseFloat(
      order.totalCost || order.total || order.price || 0
    );
    totalCost += orderCost;

    // Count replaced batteries (status = done or completed)
    const status = order.status?.toLowerCase() || "";
    if (status === "done" || status === "completed" || status === "مكتمل") {
      replacedCount++;
    }
  });

  // console.log('\n🔋 Battery Replacement Statistics:');
  // console.log('========================');
  // console.log('Total Cost:', totalCost);
  // console.log('Replaced Count:', replacedCount);
  // console.log('Requested Count:', requestedCount);
  // console.log('========================\n');

  return { totalCost, replacedCount, requestedCount };
};

/**
 * Calculate driver statistics (active vs inactive)
 * Fetches companies-drivers and counts by isActive status
 * @returns Object with active and inactive driver counts
 */
export const calculateDriverStatistics = async (): Promise<{
  active: number;
  inactive: number;
  total: number;
}> => {
  try {
    console.log("\n👥 ========================================");
    console.log("CALCULATING DRIVER STATISTICS");
    console.log("========================================");

    // Fetch companies-drivers data (already filtered by current user)
    const drivers = await fetchCompaniesDrivers();

    console.log("Total drivers for current company:", drivers.length);

    // Count active and inactive drivers
    let activeCount = 0;
    let inactiveCount = 0;

    drivers.forEach((driver) => {
      const isActive = driver.isActive === true || driver.isActive === "true";

      if (isActive) {
        activeCount++;
      } else {
        inactiveCount++;
      }

      // Debug logging for first 3 drivers
      if (activeCount + inactiveCount <= 3) {
        console.log(`\nDriver ${activeCount + inactiveCount}:`);
        console.log("  Name:", driver.name);
        console.log("  isActive:", driver.isActive);
        console.log("  Status:", isActive ? "Active" : "Inactive");
      }
    });

    console.log("\n👥 Driver Statistics:");
    console.log("========================");
    console.log("Active Drivers:", activeCount);
    console.log("Inactive Drivers:", inactiveCount);
    console.log("Total Drivers:", drivers.length);
    console.log("========================\n");

    return {
      active: activeCount,
      inactive: inactiveCount,
      total: drivers.length,
    };
  } catch (error) {
    console.error("Error calculating driver statistics:", error);
    return { active: 0, inactive: 0, total: 0 };
  }
};

/**
 * Calculate car statistics grouped by size
 * Fetches companies-cars and counts by size/category
 * @returns Object with cars grouped by size and total count
 */
export const calculateCarStatistics = async (): Promise<{
  sizes: Array<{ name: string; count: number }>;
  total: number;
}> => {
  try {
    console.log("\n🚗 ========================================");
    console.log("CALCULATING CAR STATISTICS");
    console.log("========================================");

    // Fetch companies-cars data (already filtered by current user)
    const cars = await fetchCompaniesCars();

    console.log("Total cars for current company:", cars.length);

    // Initialize size map
    const sizeMap: Record<string, number> = {
      صغيرة: 0,
      متوسطة: 0,
      كبيرة: 0,
      VIP: 0,
    };

    // Count cars by size
    cars.forEach((car, index) => {
      // Extract car size from multiple possible paths
      let carSize = car.size || car.category?.name || car.category || "";

      if (carSize) {
        // Debug logging for first 3 cars
        if (index < 3) {
          console.log(`\nCar ${index + 1}:`);
          console.log("  Name:", car.name);
          console.log("  Plate Number:", car.plateNumber);
          console.log("  Raw Size:", carSize);
        }

        // Use normalizeCarSize helper function
        const normalizedSize = normalizeCarSize(carSize);

        // Increment count for normalized size
        if (sizeMap.hasOwnProperty(normalizedSize)) {
          sizeMap[normalizedSize]++;
          if (index < 3) console.log("  → Mapped to:", normalizedSize);
        } else {
          if (index < 3) console.log(`  ⚠️ Unknown size format: "${carSize}"`);
        }
      } else {
        if (index < 3) console.log("⚠️ WARNING: No size found for this car");
      }
    });

    // Convert to array format
    const sizes = Object.entries(sizeMap).map(([name, count]) => ({
      name,
      count,
    }));

    console.log("\n🚗 Car Statistics:");
    console.log("========================");
    console.log("Total Cars:", cars.length);
    console.log("By Size:");
    sizes.forEach((size) => {
      console.log(`  ${size.name}: ${size.count} cars`);
    });
    console.log("========================\n");

    return {
      sizes,
      total: cars.length,
    };
  } catch (error) {
    console.error("Error calculating car statistics:", error);
    return { sizes: [], total: 0 };
  }
};

/**
 * Calculate order statistics (completed vs cancelled)
 * Counts orders by status from filtered orders
 * @param orders - Array of order documents
 * @returns Object with completed and cancelled order counts
 */
export const calculateOrderStatistics = (
  orders: any[]
): {
  completed: number;
  cancelled: number;
  total: number;
} => {
  console.log("\n📊 ========================================");
  console.log("CALCULATING ORDER STATISTICS");
  console.log("========================================");
  console.log("Total orders to process:", orders.length);

  // Count completed and cancelled orders
  let completedCount = 0;
  let cancelledCount = 0;

  orders.forEach((order, index) => {
    const status = order.status?.toLowerCase().trim() || "";

    // Debug logging for first 5 orders
    if (index < 5) {
      console.log(`\nOrder ${index + 1}:`);
      console.log("  ID:", order.id);
      console.log("  Status:", order.status);
      console.log("  Status (normalized):", status);
    }

    // Check for completed status variations
    if (
      status === "completed" ||
      status === "done" ||
      status === "delivered" ||
      status === "مكتمل" ||
      status === "تم التوصيل"
    ) {
      completedCount++;
      if (index < 5) console.log("  → Counted as: Completed");
    }
    // Check for cancelled status variations
    else if (
      status === "cancelled" ||
      status === "canceled" ||
      status === "rejected" ||
      status === "ملغي" ||
      status === "مرفوض"
    ) {
      cancelledCount++;
      if (index < 5) console.log("  → Counted as: Cancelled");
    } else {
      if (index < 5) console.log("  → Status:", status || "unknown");
    }
  });

  console.log("\n📊 Order Statistics:");
  console.log("========================");
  console.log("Completed Orders:", completedCount);
  console.log("Cancelled Orders:", cancelledCount);
  console.log("Other Orders:", orders.length - completedCount - cancelledCount);
  console.log("Total Orders:", orders.length);
  console.log("========================\n");

  return {
    completed: completedCount,
    cancelled: cancelledCount,
    total: orders.length,
  };
};

/**
 * Fetch and filter orders by car wash category
 * Prints filtered orders to console in their raw Firestore format
 */
export const fetchCarWashOrders = async (): Promise<any[]> => {
  try {
    const orders = await fetchOrders();

    // Filter orders where category contains car wash keywords
    const carWashOrders = orders.filter((order) => {
      // Check all possible category field paths
      const checkCategory = (value: any): boolean => {
        if (!value) return false;
        const str = typeof value === "string" ? value : "";
        return (
          str.includes("عمليات غسيل السيارات") ||
          str.includes("غسيل سيارة") ||
          str.includes("غسيل") ||
          str.includes("Car Wash") ||
          str.includes("washing") ||
          str.toLowerCase().includes("wash")
        );
      };

      return (
        checkCategory(order.category?.ar) ||
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
        checkCategory(order.orderType)
      );
    });

    console.log("\n🚗 ========================================");
    console.log("CAR WASH ORDERS");
    console.log("========================================");
    console.log("Total Car Wash Orders Found:", carWashOrders.length);
    console.log("========================================\n");

    if (carWashOrders.length > 0) {
      console.log("📋 Car Wash Orders Array:");
      console.log(JSON.stringify(carWashOrders, null, 2));
      console.log("\n📦 Car Wash Orders (Full Objects):");
      carWashOrders.forEach((order, index) => {
        console.log(`\n--- Order ${index + 1} ---`);
        console.dir(order, { depth: null });
      });
    } else {
      console.log("❌ No car wash orders found in current company orders.");
      console.log("\n🔍 Debugging - All available categories in orders:");
      const allCategories = new Set<string>();
      orders.forEach((order) => {
        if (order.category?.ar)
          allCategories.add(`category.ar: ${order.category.ar}`);
        if (order.category?.en)
          allCategories.add(`category.en: ${order.category.en}`);
        if (order.service?.category?.ar)
          allCategories.add(
            `service.category.ar: ${order.service.category.ar}`
          );
        if (order.service?.category?.en)
          allCategories.add(
            `service.category.en: ${order.service.category.en}`
          );
        if (order.service?.title?.ar)
          allCategories.add(`service.title.ar: ${order.service.title.ar}`);
        if (order.service?.title?.en)
          allCategories.add(`service.title.en: ${order.service.title.en}`);
        if (order.selectedOption?.category?.ar)
          allCategories.add(
            `selectedOption.category.ar: ${order.selectedOption.category.ar}`
          );
        if (order.selectedOption?.category?.en)
          allCategories.add(
            `selectedOption.category.en: ${order.selectedOption.category.en}`
          );
        if (order.selectedOption?.title?.ar)
          allCategories.add(
            `selectedOption.title.ar: ${order.selectedOption.title.ar}`
          );
        if (order.selectedOption?.title?.en)
          allCategories.add(
            `selectedOption.title.en: ${order.selectedOption.title.en}`
          );
        if (order.selectedOption?.label)
          allCategories.add(
            `selectedOption.label: ${order.selectedOption.label}`
          );
      });
      console.log("Available categories:");
      Array.from(allCategories).forEach((cat) => console.log("  -", cat));
    }

    return carWashOrders;
  } catch (error) {
    console.error("❌ Error fetching car wash orders:", error);
    return [];
  }
};

/**
 * Fetch car stations and calculate total liters consumed from orders
 * @returns Promise with car stations data enriched with consumption info
 */
export const fetchCarStationsWithConsumption = async (): Promise<any[]> => {
  try {
    const user = auth.currentUser;
    if (!user) {
      console.error("No authenticated user");
      return [];
    }

    // Step 1: Fetch all car stations
    const carStationsCollection = collection(db, "carstations");
    const carStationsSnapshot = await getDocs(carStationsCollection);

    const carStations = carStationsSnapshot.docs.map((doc) => {
      const data = doc.data();
      return {
        id: doc.id,
        stationCode: data.id || data.placeId || doc.id,
        city:
          data.formattedLocation?.address?.city ||
          data.address?.city ||
          data.city ||
          "N/A",
        company: data.name || data.email || "N/A",
        status: data.status || data.isActive ? "active" : "inactive",
        email: data.email || "",
        totalLitersConsumed: 0,
        ...data,
      };
    });

    console.log("\n🏢 Car Stations fetched:", carStations.length);

    // Debug: Show first 3 stations
    console.log("\n📍 Sample Car Stations:");
    carStations.slice(0, 3).forEach((station, i) => {
      console.log(`Station ${i + 1}:`, {
        city: station.city,
        company: station.company,
        email: station.email,
      });
    });

    // Step 2: Fetch orders filtered by current user
    const orders = await fetchOrders();
    console.log("\n📦 Orders fetched for current user:", orders.length);

    // Debug: Show first 3 orders
    if (orders.length > 0) {
      console.log("\n📍 Sample Orders:");
      orders.slice(0, 3).forEach((order, i) => {
        console.log(`Order ${i + 1}:`, {
          id: order.id || order.refId,
          carStationEmail:
            order.carStation?.email || order.stationEmail || "NO EMAIL",
          totalLitre: order.totalLitre,
          quantity: order.quantity,
        });
      });
    }

    // Step 3: Match orders to stations and calculate consumption
    let matchedCount = 0;
    let unmatchedCount = 0;

    orders.forEach((order, index) => {
      const orderStationEmail = order.carStation?.email || order.stationEmail;

      if (orderStationEmail) {
        // Find matching station
        const station = carStations.find((s) => s.email === orderStationEmail);

        if (station) {
          // Calculate fuel quantity from order
          const quantity =
            order.totalLitre ||
            order.quantity ||
            order.selectedOption?.quantity ||
            0;

          station.totalLitersConsumed += quantity;
          matchedCount++;

          if (index < 5) {
            console.log(
              `✅ Order ${index + 1} matched to "${station.company}" (${
                station.city
              }) - Added ${quantity}L`
            );
          }
        } else {
          unmatchedCount++;
          if (index < 5) {
            console.log(
              `⚠️ Order ${
                index + 1
              } - No station found with email: ${orderStationEmail}`
            );
          }
        }
      } else {
        unmatchedCount++;
        if (index < 5) {
          console.log(`⚠️ Order ${index + 1} - No carStation.email in order`);
        }
      }
    });

    console.log("\n🔗 MATCHING SUMMARY:");
    console.log("===================");
    console.log(`Total orders: ${orders.length}`);
    console.log(`Matched to stations: ${matchedCount}`);
    console.log(`Unmatched: ${unmatchedCount}`);
    console.log("===================\n");

    // Log summary
    console.log("\n📊 Car Stations Summary:");
    console.log("========================");
    carStations.forEach((station) => {
      if (station.totalLitersConsumed > 0) {
        console.log(
          `${station.company} (${station.city}): ${station.totalLitersConsumed}L`
        );
      }
    });
    console.log("========================\n");

    return carStations;
  } catch (error) {
    console.error("Error fetching car stations with consumption:", error);
    return [];
  }
};

/**
 * Fetch orders and transform them for financial reports
 * @returns Promise with formatted financial report data
 */
export const fetchFinancialReportData = async (): Promise<any[]> => {
  try {
    const orders = await fetchOrders();

    console.log("\n📊 Processing Financial Report Data");
    console.log("===================================");
    console.log("Total orders:", orders.length);

    // Transform each order to financial report format
    const reportData = orders.map((order, index) => {
      // Extract city from document.carStation.address
      const city =
        order.document?.carStation?.address ||
        order.carStation?.address ||
        order.city?.name ||
        "-";

      // Extract station name from carStation.name
      const stationName = order.carStation?.name || "-";

      // Extract date from createdDate
      const date = order.createdDate || order.orderDate || null;

      // Extract operation number from document.refId
      const operationNumber =
        order.document?.refId || order.refId || order.id || "-";

      // Extract quantity from cartItems[0].quantity
      const quantity =
        order.cartItems?.[0]?.quantity ||
        order.totalLitre ||
        order.quantity ||
        0;

      // Extract product name from cartItems[0].name.ar
      const productName =
        order.cartItems?.[0]?.name?.ar ||
        order.cartItems?.[0]?.name?.en ||
        order.selectedOption?.name?.ar ||
        order.selectedOption?.name?.en ||
        order.selectedOption?.title?.ar ||
        order.selectedOption?.title?.en ||
        "-";

      // Extract product number from cartItems[0].onyxProductId
      const productNumber =
        order.cartItems?.[0]?.onyxProductId ||
        order.selectedOption?.onyxProductId ||
        "-";

      // Extract product type from service name (نوع المنتج)
      const productType =
        order.service?.title?.ar ||
        order.service?.title?.en ||
        order.service?.name?.ar ||
        order.service?.name?.en ||
        order.cartItems?.[0]?.category?.majorTypeEnum ||
        order.selectedOption?.category?.majorTypeEnum ||
        "-";

      // Extract driver name from assignedDriver.name
      const driverName =
        order.assignedDriver?.name || order.enrichedDriverName || "-";

      // Extract driver code from assignedDriver.id
      const driverCode =
        order.assignedDriver?.id ||
        order.assignedDriver?.email ||
        order.assignedDriver?.uId ||
        "-";

      if (index < 3) {
        console.log(`\n--- Order ${index + 1} ---`);
        console.log("City:", city);
        console.log("Station Name:", stationName);
        console.log("Date:", date);
        console.log("Operation Number:", operationNumber);
        console.log("Quantity:", quantity);
        console.log("Product Name:", productName);
        console.log("Product Number:", productNumber);
        console.log("Product Type:", productType);
        console.log("Driver Name:", driverName);
        console.log("Driver Code:", driverCode);
      }

      return {
        city,
        stationName,
        date,
        operationNumber,
        quantity,
        productName,
        productNumber,
        productType,
        driverName,
        driverCode,
        // Keep original order data for reference
        originalOrder: order,
      };
    });

    console.log("\n✅ Financial report data processed:", reportData.length);
    console.log("===================================\n");

    return reportData;
  } catch (error) {
    console.error("Error fetching financial report data:", error);
    return [];
  }
};

/**
 * Calculate fuel consumption by cities from car stations data
 * Uses fetchCarStationsWithConsumption() which calculates consumption from orders
 * Groups stations by city and sums consumption
 * @returns Promise with array of cities and their fuel consumption
 */
export const calculateFuelConsumptionByCities = async () => {
  try {
    console.log("\n🏙️ ========================================");
    console.log("📊 CALCULATING FUEL CONSUMPTION BY CITIES");
    console.log("📍 Using fetchCarStationsWithConsumption()");
    console.log("========================================\n");

    // Fetch car stations WITH consumption calculated from orders
    // This function matches orders to stations and calculates totalLitersConsumed
    const stations = await fetchCarStationsWithConsumption();

    if (!stations || stations.length === 0) {
      console.log("⚠️ No stations found");
      return [];
    }

    console.log(`📦 Total stations fetched: ${stations.length}`);

    // Debug: Log first 5 stations to see what we got
    console.log("\n📋 SAMPLE STATIONS WITH CONSUMPTION:");
    console.log("====================================");
    stations.slice(0, 5).forEach((station, index) => {
      console.log(`Station ${index + 1}:`, {
        city: station.city,
        company: station.company,
        totalLitersConsumed: station.totalLitersConsumed,
      });
    });
    console.log("====================================\n");

    // Group stations by city and sum consumption
    const cityConsumption: Record<
      string,
      {
        name: string;
        totalLitres: number;
        stationCount: number;
      }
    > = {};

    let processedCount = 0;
    let skippedNoCityCount = 0;
    let skippedNoConsumptionCount = 0;

    stations.forEach((station, index) => {
      // Extract city from station (already extracted by fetchCarStationsWithConsumption)
      const cityName = station.city;

      // Extract consumption (already calculated by fetchCarStationsWithConsumption)
      const consumption = station.totalLitersConsumed || 0;

      // Only process stations with valid city and consumption
      if (!cityName || cityName === "N/A") {
        skippedNoCityCount++;
        if (index < 10) {
          console.log(
            `⚠️ Station ${index + 1} (${
              station.company
            }) skipped - No valid city`
          );
        }
      } else if (consumption <= 0) {
        skippedNoConsumptionCount++;
        if (index < 10) {
          console.log(
            `⚠️ Station ${index + 1} (${
              station.company
            }) skipped - No consumption (City: ${cityName})`
          );
        }
      } else {
        // Valid station - add to city totals
        processedCount++;

        if (index < 10) {
          console.log(
            `✅ Station ${index + 1} (${
              station.company
            }) processed - City: ${cityName}, Litres: ${consumption}`
          );
        }

        if (!cityConsumption[cityName]) {
          cityConsumption[cityName] = {
            name: cityName,
            totalLitres: 0,
            stationCount: 0,
          };
        }

        cityConsumption[cityName].totalLitres += consumption;
        cityConsumption[cityName].stationCount += 1;
      }
    });

    console.log("\n📊 PROCESSING SUMMARY:");
    console.log("====================");
    console.log(`Total stations: ${stations.length}`);
    console.log(`Processed: ${processedCount}`);
    console.log(`Skipped (no city): ${skippedNoCityCount}`);
    console.log(`Skipped (no consumption): ${skippedNoConsumptionCount}`);
    console.log("====================\n");

    // Convert to array and sort by consumption (highest first)
    const citiesArray = Object.values(cityConsumption)
      .sort((a, b) => b.totalLitres - a.totalLitres)
      .map((city) => ({
        name: city.name,
        consumption: Math.round(city.totalLitres * 100) / 100, // Round to 2 decimal places
        stationCount: city.stationCount,
      }));

    console.log("\n✅ FUEL CONSUMPTION BY CITIES:");
    console.log("========================================");
    console.table(citiesArray);
    console.log(`📍 Total cities: ${citiesArray.length}`);
    console.log("========================================\n");

    return citiesArray;
  } catch (error) {
    console.error("❌ Error calculating fuel consumption by cities:", error);
    return [];
  }
};

/**
 * Fetch subscriptions for current user and calculate expiry dates
 * @returns Promise with subscription data including expiry dates
 */
export const fetchUserSubscriptions = async (): Promise<any[]> => {
  try {
    const user = auth.currentUser;
    if (!user) {
      console.error("No authenticated user");
      return [];
    }

    console.log("\n📋 Fetching User Subscriptions");
    console.log("==============================");
    console.log("Current User UID:", user.uid);

    // First, get the current company
    const company = await fetchCurrentCompany();
    if (!company) {
      console.error("No company found for current user");
      return [];
    }

    console.log("Current Company ID:", company.id);
    console.log("Current User Email:", user.email);
    console.log("Current Company Email:", company.email);

    // Fetch subscriptions from subscriptions-payment collection
    const subscriptionsCollection = collection(db, "subscriptions-payment");

    // Query by company email
    const companyEmail = company.email;
    if (!companyEmail) {
      console.error("No company email found");
      return [];
    }

    console.log(
      "Fetching subscriptions-payment filtered by company email:",
      companyEmail
    );

    // Query by company.email (nested field)
    const q = query(
      subscriptionsCollection,
      where("company.email", "==", companyEmail),
      orderBy("createdDate", "desc")
    );
    const subscriptionsSnapshot = await getDocs(q);

    console.log(
      "Total subscriptions found (filtered by company.email):",
      subscriptionsSnapshot.docs.length
    );

    // If we found subscriptions, log the first one's structure to help debug
    if (subscriptionsSnapshot.docs.length > 0) {
      console.log("\n🔍 First subscription document structure:");
      console.log("Document ID:", subscriptionsSnapshot.docs[0].id);
      console.log(
        "Available fields:",
        Object.keys(subscriptionsSnapshot.docs[0].data())
      );
      console.log("Full document data:", subscriptionsSnapshot.docs[0].data());
    } else {
      console.log(
        "\n❌ No documents found in subscriptions-payment collection"
      );
      console.log("Please check:");
      console.log("1. Does the subscriptions-payment collection exist?");
      console.log("2. Do documents have email field matching:", company.email);
      console.log("3. Check Firebase Console for actual field names");
    }

    // Transform each subscription
    const subscriptions = subscriptionsSnapshot.docs.map((doc, index) => {
      const data = doc.data();

      // Extract fields from the document structure
      const selectedSubscription = data.selectedSubscription || {};
      const planName =
        selectedSubscription.title?.ar ||
        selectedSubscription.title?.en ||
        "N/A";
      const price = selectedSubscription.price || 0;
      const subscriptionStartDate =
        data.subscriptionStartDate || data.createdDate;
      const subscriptionEndDate = data.subscriptionEndDate;
      const periodValueInDays = selectedSubscription.periodValueInDays || 30;
      const isPaid = data.isPaid !== undefined ? data.isPaid : true;

      // Format dates as DD/MM/YYYY
      const formatDate = (date: any): string => {
        if (!date) return "N/A";
        try {
          const dateObj = date.toDate ? date.toDate() : new Date(date);
          const day = String(dateObj.getDate()).padStart(2, "0");
          const month = String(dateObj.getMonth() + 1).padStart(2, "0");
          const year = dateObj.getFullYear();
          return `${day}/${month}/${year}`;
        } catch (error) {
          return "N/A";
        }
      };

      const createdDateFormatted = formatDate(subscriptionStartDate);
      const expiryDateFormatted = formatDate(subscriptionEndDate);

      if (index < 3) {
        console.log(`\n--- Subscription ${index + 1} ---`);
        console.log("Plan Name:", planName);
        console.log("Price:", price);
        console.log("Start Date:", createdDateFormatted);
        console.log("End Date:", expiryDateFormatted);
        console.log("Period (days):", periodValueInDays);
        console.log("Is Paid:", isPaid);
      }

      return {
        id: doc.id,
        planName,
        price,
        createdDate: createdDateFormatted,
        expiryDate: expiryDateFormatted,
        periodValueInDays,
        isPaid,
        // Keep original data for reference
        originalData: data,
      };
    });

    // If still no subscriptions found, check if they're stored in the company document itself
    if (subscriptions.length === 0) {
      console.log(
        "\n⚠️ No subscriptions found in subscriptions-payment collection"
      );
      console.log(
        "Checking if subscriptions are stored in company document..."
      );

      if (
        company.subscriptionsHistory &&
        Array.isArray(company.subscriptionsHistory)
      ) {
        console.log(
          "Found subscriptionsHistory in company document:",
          company.subscriptionsHistory.length
        );
        // Return the subscriptions from company document
        return company.subscriptionsHistory.map((sub: any, index: number) => ({
          id: sub.id || `company-sub-${index}`,
          planName: sub.planName || sub.title?.ar || sub.title?.en || "N/A",
          price: sub.price || 0,
          createdDate: sub.createdDate || "N/A",
          expiryDate: sub.expiryDate || "N/A",
          periodValueInDays: sub.periodValueInDays || 30,
          originalData: sub,
        }));
      }

      console.log("⚠️ No subscriptions found in company document either");
      console.log("Please check:");
      console.log("1. Are subscriptions being created in the database?");
      console.log("2. What is the correct field name to query by?");
      console.log(
        "3. Check Firebase Console to see subscription documents structure"
      );
    }

    console.log("\n✅ Subscriptions processed:", subscriptions.length);
    console.log("==============================\n");

    return subscriptions;
  } catch (error) {
    console.error("Error fetching user subscriptions:", error);
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

    const productsCollection = collection(db, "products");
    const q = query(productsCollection, orderBy("createdDate", "desc"));
    const productsSnapshot = await getDocs(q);

    const products = productsSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    // console.log('Fetched products:', products.length);
    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

/**
 * Fetch all services from Firestore
 * @returns Promise with services data
 */
export const fetchServices = async (): Promise<any[]> => {
  try {
    console.log("📋 Fetching services from Firestore...");

    const servicesCollection = collection(db, "services");
    const q = query(servicesCollection, orderBy("createdDate", "desc"));
    const servicesSnapshot = await getDocs(q);

    const services = servicesSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    console.log("✅ Fetched services:", services.length);
    return services;
  } catch (error) {
    console.error("❌ Error fetching services:", error);
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

    const requestsRef = collection(db, "companies-wallets-requests");
    const q = query(requestsRef, orderBy("createdDate", "desc"));
    const querySnapshot: QuerySnapshot<DocumentData> = await getDocs(q);

    const allRequestsData: any[] = [];

    querySnapshot.forEach((doc) => {
      allRequestsData.push({
        id: doc.id,
        ...doc.data(),
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

      const emailMatch =
        requestedUserEmail &&
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
    console.error("❌ Error fetching wallet charge requests:", error);
    throw error;
  }
};

/**
 * Fetch current company data from Firestore companies collection
 * @returns Promise with the current company data
 */
export const fetchCurrentCompany = async (): Promise<any> => {
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

    const companiesRef = collection(db, "companies");

    // Try to find company by UID first
    const qByUid = query(companiesRef, where("uid", "==", currentUser.uid));
    let querySnapshot = await getDocs(qByUid);

    // If not found by UID, try by email
    if (querySnapshot.empty && currentUser.email) {
      // console.log('No company found by UID, trying email...');
      const qByEmail = query(
        companiesRef,
        where("email", "==", currentUser.email)
      );
      querySnapshot = await getDocs(qByEmail);
    }

    // If still not found, try by createdUserId
    if (querySnapshot.empty && currentUser.email) {
      // console.log('No company found by email, trying createdUserId...');
      const qByCreatedUserId = query(
        companiesRef,
        where("createdUserId", "==", currentUser.email)
      );
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
      ...companyDoc.data(),
    } as any;

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
    console.error("❌ Error fetching current company:", error);
    throw error;
  }
};

/**
 * Fetch ALL clients from Firestore (for admin dashboard)
 * @returns Promise with all clients data
 */
export const fetchAllClients = async (): Promise<any[]> => {
  try {
    console.log("\n👥 Fetching ALL clients data from Firestore...");

    const clientsRef = collection(db, "clients");
    const q = query(clientsRef, orderBy("createdDate", "desc"));
    const querySnapshot = await getDocs(q);

    const clientsData: any[] = [];

    querySnapshot.forEach((doc) => {
      clientsData.push({
        id: doc.id,
        ...doc.data(),
      });
    });

    console.log(`✅ Fetched ${clientsData.length} clients`);
    return clientsData;
  } catch (error) {
    console.error("❌ Error fetching all clients:", error);
    throw error;
  }
};

/**
 * Calculate total wallet balance from all clients
 * @returns Promise with total balance sum
 */
export const getTotalClientsBalance = async (): Promise<number> => {
  try {
    const clients = await fetchAllClients();

    const totalBalance = clients.reduce((sum, client) => {
      const balance = parseFloat(client.balance) || 0;
      return sum + balance;
    }, 0);

    console.log(`💰 Total clients wallet balance: ${totalBalance.toFixed(2)}`);
    return totalBalance;
  } catch (error) {
    console.error("❌ Error calculating total clients balance:", error);
    return 0;
  }
};

/**
 * Fetch ALL orders from Firestore (for admin dashboard - no filtering)
 * @returns Promise with all orders data
 */
export const fetchAllOrders = async (): Promise<any[]> => {
  try {
    console.log("\n📦 Fetching ALL orders data from Firestore...");

    const ordersRef = collection(db, "orders");
    const q = query(ordersRef, orderBy("orderDate", "desc"));
    const querySnapshot = await getDocs(q);

    const allOrdersData: any[] = [];

    querySnapshot.forEach((doc) => {
      allOrdersData.push({
        id: doc.id,
        ...doc.data(),
      });
    });

    console.log(`✅ Fetched ${allOrdersData.length} orders`);
    return allOrdersData;
  } catch (error) {
    console.error("❌ Error fetching all orders:", error);
    throw error;
  }
};

/**
 * Calculate total fuel liter usage by type from all orders
 * @returns Promise with fuel usage breakdown
 */
export const getTotalFuelUsageByType = async (): Promise<{
  diesel: number;
  gasoline95: number;
  gasoline91: number;
  total: number;
}> => {
  try {
    const orders = await fetchAllOrders();

    let dieselTotal = 0;
    let gasoline95Total = 0;
    let gasoline91Total = 0;

    orders.forEach((order) => {
      // Derive fuel type using same fallbacks as companies dashboard
      let fuelType = "";
      if (order?.selectedOption?.name?.ar)
        fuelType = order.selectedOption.name.ar;
      else if (order?.selectedOption?.name?.en)
        fuelType = order.selectedOption.name.en;
      else if (order?.selectedOption?.label)
        fuelType = order.selectedOption.label;
      else if (order?.selectedOption?.title?.ar)
        fuelType = order.selectedOption.title.ar;
      else if (order?.selectedOption?.title?.en)
        fuelType = order.selectedOption.title.en;
      else if (order?.service?.title?.ar) fuelType = order.service.title.ar;
      else if (order?.service?.title?.en) fuelType = order.service.title.en;
      else if (order?.fuelType) fuelType = order.fuelType;
      else if (order?.productType) fuelType = order.productType;

      // Derive litres from multiple possible fields
      const rawLitres =
        order?.totalLitre ??
        (order as any)?.totalLiter ??
        order?.quantity ??
        order?.selectedOption?.quantity ??
        order?.liters ??
        0;
      const liters = parseFloat(String(rawLitres)) || 0;

      const normalizedType = String(fuelType).toLowerCase().trim();

      if (
        normalizedType.includes("ديزل") ||
        normalizedType.includes("diesel")
      ) {
        dieselTotal += liters;
      } else if (
        normalizedType.includes("95") ||
        normalizedType.includes("بنزين 95") ||
        normalizedType.includes("gasoline 95")
      ) {
        gasoline95Total += liters;
      } else if (
        normalizedType.includes("91") ||
        normalizedType.includes("بنزين 91") ||
        normalizedType.includes("gasoline 91")
      ) {
        gasoline91Total += liters;
      }
    });

    const total = dieselTotal + gasoline95Total + gasoline91Total;

    return {
      diesel: dieselTotal,
      gasoline95: gasoline95Total,
      gasoline91: gasoline91Total,
      total: total,
    };
  } catch (error) {
    console.error("❌ Error calculating fuel usage:", error);
    return {
      diesel: 0,
      gasoline95: 0,
      gasoline91: 0,
      total: 0,
    };
  }
};

/**
 * Calculate total fuel cost by type from all orders
 * Uses same logic as companies dashboard calculateFuelStatistics but without filtering
 * @returns Promise with fuel cost breakdown
 */
export const getTotalFuelCostByType = async (): Promise<{
  diesel: number;
  gasoline95: number;
  gasoline91: number;
  total: number;
}> => {
  try {
    const orders = await fetchAllOrders();

    let dieselCost = 0;
    let gasoline95Cost = 0;
    let gasoline91Cost = 0;

    orders.forEach((order) => {
      // Derive fuel type using same fallbacks as companies dashboard
      let fuelType = "";
      if (order?.selectedOption?.name?.ar)
        fuelType = order.selectedOption.name.ar;
      else if (order?.selectedOption?.name?.en)
        fuelType = order.selectedOption.name.en;
      else if (order?.selectedOption?.label)
        fuelType = order.selectedOption.label;
      else if (order?.selectedOption?.title?.ar)
        fuelType = order.selectedOption.title.ar;
      else if (order?.selectedOption?.title?.en)
        fuelType = order.selectedOption.title.en;
      else if (order?.service?.title?.ar) fuelType = order.service.title.ar;
      else if (order?.service?.title?.en) fuelType = order.service.title.en;
      else if (order?.fuelType) fuelType = order.fuelType;
      else if (order?.productType) fuelType = order.productType;

      // Derive cost from multiple possible fields
      const rawCost =
        order?.totalPrice ??
        order?.totalCost ??
        order?.total ??
        order?.price ??
        order?.fuelCost ??
        order?.cost ??
        0;
      const cost = parseFloat(String(rawCost)) || 0;

      const normalizedType = String(fuelType).toLowerCase().trim();

      if (
        normalizedType.includes("ديزل") ||
        normalizedType.includes("diesel")
      ) {
        dieselCost += cost;
      } else if (
        normalizedType.includes("95") ||
        normalizedType.includes("بنزين 95") ||
        normalizedType.includes("gasoline 95")
      ) {
        gasoline95Cost += cost;
      } else if (
        normalizedType.includes("91") ||
        normalizedType.includes("بنزين 91") ||
        normalizedType.includes("gasoline 91")
      ) {
        gasoline91Cost += cost;
      }
    });

    const total = dieselCost + gasoline95Cost + gasoline91Cost;

    return {
      diesel: dieselCost,
      gasoline95: gasoline95Cost,
      gasoline91: gasoline91Cost,
      total: total,
    };
  } catch (error) {
    console.error("❌ Error calculating fuel cost:", error);
    return {
      diesel: 0,
      gasoline95: 0,
      gasoline91: 0,
      total: 0,
    };
  }
};

/**
 * Calculate companies count by type
 * @returns Promise with companies breakdown
 */
export const getCompaniesCountByType = async (): Promise<{
  direct: number;
  viaRepresentatives: number;
  total: number;
}> => {
  try {
    console.log("\n🏢 COMPANIES COUNT CALCULATION");
    console.log("====================================");

    // Fetch both collections in parallel
    const [companiesSnapshot, stationsCompanySnapshot] = await Promise.all([
      getDocs(collection(db, "companies")),
      getDocs(collection(db, "stationscompany")),
    ]);

    // Count direct accounts (from companies collection)
    const directCount = companiesSnapshot.size;

    // Count via representatives (from stationscompany collection)
    const viaRepresentativesCount = stationsCompanySnapshot.size;

    const total = directCount + viaRepresentativesCount;

    console.log(`📱 حسابات مباشرة (Direct): ${directCount}`);
    console.log(
      `👥 حسابات بواسطة المناديب (Via Representatives): ${viaRepresentativesCount}`
    );
    console.log(`📊 الاجمالي (Total): ${total}`);
    console.log("====================================\n");

    return {
      direct: directCount,
      viaRepresentatives: viaRepresentativesCount,
      total: total,
    };
  } catch (error) {
    console.error("❌ Error calculating companies count:", error);
    return {
      direct: 0,
      viaRepresentatives: 0,
      total: 0,
    };
  }
};

/**
 * Fetch supervisors from users collection
 * Filters users where isAdmin === true OR isSuperAdmin === true
 * @returns Promise with array of supervisor data
 */
export const fetchSupervisorsFromUsers = async (): Promise<any[]> => {
  try {
    console.log("\n👔 FETCHING SUPERVISORS FROM USERS COLLECTION");
    console.log("====================================");

    const usersRef = collection(db, "users");
    const q = query(usersRef, orderBy("createdDate", "desc"));
    const querySnapshot = await getDocs(q);

    const supervisors: any[] = [];

    querySnapshot.forEach((doc) => {
      const data = doc.data();

      // Filter by isAdmin or isSuperAdmin
      if (data.isAdmin === true || data.isSuperAdmin === true) {
        supervisors.push({
          id: doc.id,
          supervisorCode: data.uid || data.id || doc.id || "-",
          supervisorName: data.name || data.fullName || data.displayName || "-",
          phone: data.phoneNumber || data.phone || "-",
          email: data.email || "-",
          city: data.city || data.location || "-",
          accountStatus: {
            active: data.isActive === true,
            text: data.isActive === true ? "مفعل" : "معطل",
          },
          // Keep original data for reference
          ...data,
        });
      }
    });

    console.log(`✅ Found ${supervisors.length} supervisors/admins`);
    console.log("====================================\n");

    return supervisors;
  } catch (error) {
    console.error("❌ Error fetching supervisors:", error);
    throw error;
  }
};

/**
 * Fetch all companies with enriched data (cars and drivers count)
 * @returns Promise with array of companies with counts
 */
export const fetchAllCompaniesWithCounts = async (): Promise<any[]> => {
  try {
    console.log("\n🏢 FETCHING ALL COMPANIES WITH COUNTS");
    console.log("====================================");

    // Fetch companies, cars, and drivers in parallel
    const [companiesSnapshot, carsSnapshot, driversSnapshot] =
      await Promise.all([
        getDocs(
          query(collection(db, "companies"), orderBy("createdDate", "desc"))
        ),
        getDocs(collection(db, "companies-cars")),
        getDocs(collection(db, "companies-drivers")),
      ]);

    console.log(`📦 Total companies: ${companiesSnapshot.size}`);
    console.log(`🚗 Total cars in DB: ${carsSnapshot.size}`);
    console.log(`👤 Total drivers in DB: ${driversSnapshot.size}`);

    // Build companies array with enriched data
    const companies: any[] = [];

    companiesSnapshot.forEach((companyDoc) => {
      const companyData = companyDoc.data();
      const companyEmail = companyData.email || "";

      // Count cars for this company (filter by email)
      let carsCount = 0;
      carsSnapshot.forEach((carDoc) => {
        const carData = carDoc.data();
        const carEmail =
          carData.email || carData.companyEmail || carData.createdUserId || "";
        if (
          carEmail &&
          companyEmail &&
          carEmail.toLowerCase() === companyEmail.toLowerCase()
        ) {
          carsCount++;
        }
      });

      // Count drivers for this company (filter by createdUserId matching company email)
      let driversCount = 0;
      driversSnapshot.forEach((driverDoc) => {
        const driverData = driverDoc.data();
        const driverCompanyEmail =
          driverData.createdUserId ||
          driverData.email ||
          driverData.companyEmail ||
          "";
        if (
          driverCompanyEmail &&
          companyEmail &&
          driverCompanyEmail.toLowerCase() === companyEmail.toLowerCase()
        ) {
          driversCount++;
        }
      });

      // Extract subscription title (handle object with ar/en keys)
      let subscriptionTitle = "-";
      if (companyData.selectedSubscription?.title) {
        const title = companyData.selectedSubscription.title;
        if (typeof title === "string") {
          subscriptionTitle = title;
        } else if (typeof title === "object" && title.ar) {
          subscriptionTitle = title.ar;
        } else if (typeof title === "object" && title.en) {
          subscriptionTitle = title.en;
        }
      }

      // Extract city (handle object with ar/en keys)
      let cityName = "-";
      const cityData =
        companyData.formattedLocation?.address?.city || companyData.city;
      if (cityData) {
        if (typeof cityData === "string") {
          cityName = cityData;
        } else if (typeof cityData === "object" && cityData.ar) {
          cityName = cityData.ar;
        } else if (typeof cityData === "object" && cityData.en) {
          cityName = cityData.en;
        }
      }

      companies.push({
        id: companyDoc.id,
        companyCode: companyData.id || companyDoc.id || "-",
        companyName: companyData.name || companyData.brandName || "-",
        phone: companyData.phoneNumber || companyData.phone || "-",
        email: companyData.email || "-",
        city: cityName,
        cars: carsCount,
        drivers: driversCount,
        subscriptions: subscriptionTitle,
      });
    });

    console.log(`✅ Processed ${companies.length} companies with counts`);
    console.log("====================================\n");

    return companies;
  } catch (error) {
    console.error("❌ Error fetching companies with counts:", error);
    throw error;
  }
};

/**
 * Calculate total users count by type from all collections
 * @returns Promise with users breakdown
 */
export const getTotalUsersByType = async (): Promise<{
  supervisors: number;
  companies: number;
  individuals: number;
  serviceProviders: number;
}> => {
  try {
    console.log("\n👥 USERS COUNT CALCULATION");
    console.log("====================================");

    // Fetch all collections in parallel
    const [
      usersSnapshot,
      companiesSnapshot,
      clientsSnapshot,
      stationsCompanySnapshot,
    ] = await Promise.all([
      getDocs(collection(db, "users")),
      getDocs(collection(db, "companies")),
      getDocs(collection(db, "clients")),
      getDocs(collection(db, "stationscompany")),
    ]);

    // Count supervisors/admins (users where isAdmin === true OR isSuperAdmin === true)
    let supervisorsCount = 0;
    usersSnapshot.forEach((doc) => {
      const data = doc.data();
      if (data.isAdmin === true || data.isSuperAdmin === true) {
        supervisorsCount++;
      }
    });

    // Count companies
    const companiesCount = companiesSnapshot.size;

    // Count individuals/clients
    const individualsCount = clientsSnapshot.size;

    // Count service providers
    const serviceProvidersCount = stationsCompanySnapshot.size;

    console.log(`👔 مشرفين (Supervisors): ${supervisorsCount}`);
    console.log(`🏢 شركات (Companies): ${companiesCount}`);
    console.log(`👤 افراد (Individuals): ${individualsCount}`);
    console.log(
      `🏪 مزودي الخدمة (Service Providers): ${serviceProvidersCount}`
    );
    console.log("====================================\n");

    return {
      supervisors: supervisorsCount,
      companies: companiesCount,
      individuals: individualsCount,
      serviceProviders: serviceProvidersCount,
    };
  } catch (error) {
    console.error("❌ Error calculating users count:", error);
    return {
      supervisors: 0,
      companies: 0,
      individuals: 0,
      serviceProviders: 0,
    };
  }
};

/**
 * Calculate car wash operations by car size from all orders
 * Uses same logic as companies dashboard calculateCarWashStatistics but without filtering by company
 * @returns Promise with car wash operations breakdown
 */
export const getCarWashOperationsBySize = async (): Promise<{
  small: number;
  medium: number;
  large: number;
  vip: number;
}> => {
  try {
    const orders = await fetchAllOrders();

    console.log("\n🚗 CAR WASH OPERATIONS CALCULATION");
    console.log("====================================");
    console.log(`📦 Total orders: ${orders.length}`);

    // Filter car wash orders using same logic as companies dashboard
    const checkCategory = (value: any): boolean => {
      if (!value) return false;
      const str = typeof value === "string" ? value : "";
      return (
        str.includes("عمليات غسيل السيارات") ||
        str.includes("غسيل سيارة") ||
        str.includes("غسيل خارجي") ||
        str.includes("غسيل") ||
        str.includes("تنظيف السيارة من الداخل والخارج") ||
        str.includes("تنظيف السيارة") ||
        str.includes("Car Wash") ||
        str.includes("Car wash") ||
        str.includes("Exterior wash") ||
        str.includes("Exterior & Interior car cleanning") ||
        str.includes("car cleanning") ||
        str.includes("washing") ||
        str.toLowerCase().includes("wash") ||
        str.toLowerCase().includes("clean")
      );
    };

    const carWashOrders = orders.filter(
      (order) =>
        checkCategory(order.category?.ar) ||
        checkCategory(order.category?.en) ||
        checkCategory(order.service?.category?.ar) ||
        checkCategory(order.service?.category?.en) ||
        checkCategory(order.service?.title?.ar) ||
        checkCategory(order.service?.title?.en) ||
        checkCategory(order.service?.desc?.ar) ||
        checkCategory(order.service?.desc?.en) ||
        checkCategory(order.selectedOption?.category?.name?.ar) ||
        checkCategory(order.selectedOption?.category?.name?.en) ||
        checkCategory(order.selectedOption?.category?.ar) ||
        checkCategory(order.selectedOption?.category?.en) ||
        checkCategory(order.selectedOption?.title?.ar) ||
        checkCategory(order.selectedOption?.title?.en) ||
        checkCategory(order.selectedOption?.label) ||
        checkCategory(order.type) ||
        checkCategory(order.orderType)
    );

    console.log(`🧼 Car wash orders found: ${carWashOrders.length}`);

    if (carWashOrders.length > 0) {
      console.log("\n📋 First 3 car wash orders:");
      carWashOrders.slice(0, 3).forEach((order, idx) => {
        console.log(`  Order ${idx + 1}:`, {
          id: order.id || order.refId,
          carSize: order.car?.size,
          category:
            order.category ||
            order.service?.category?.ar ||
            order.service?.title?.ar,
        });
      });
    }

    // Group by car size
    let smallCount = 0;
    let mediumCount = 0;
    let largeCount = 0;
    let vipCount = 0;

    carWashOrders.forEach((order) => {
      const carSize = order.car?.size;

      if (carSize) {
        const normalizedSize = String(carSize).toLowerCase().trim();

        if (
          normalizedSize === "small" ||
          normalizedSize === "صغيرة" ||
          normalizedSize.includes("صغير")
        ) {
          smallCount++;
        } else if (
          normalizedSize === "medium" ||
          normalizedSize === "middle" ||
          normalizedSize === "متوسطة" ||
          normalizedSize.includes("متوسط")
        ) {
          mediumCount++;
        } else if (
          normalizedSize === "large" ||
          normalizedSize === "big" ||
          normalizedSize === "كبيرة" ||
          normalizedSize.includes("كبير")
        ) {
          largeCount++;
        } else if (
          normalizedSize === "vip" ||
          normalizedSize.toUpperCase() === "VIP"
        ) {
          vipCount++;
        }
      }
    });

    console.log("\n📊 Car Wash by Size:");
    console.log(`  صغيرة (small): ${smallCount}`);
    console.log(`  متوسطة (medium): ${mediumCount}`);
    console.log(`  كبيرة (large): ${largeCount}`);
    console.log(`  VIP: ${vipCount}`);
    console.log("====================================\n");

    return {
      small: smallCount,
      medium: mediumCount,
      large: largeCount,
      vip: vipCount,
    };
  } catch (error) {
    console.error("❌ Error calculating car wash operations:", error);
    return {
      small: 0,
      medium: 0,
      large: 0,
      vip: 0,
    };
  }
};

// ==================== HELPER FUNCTIONS ====================

/**
 * Upload a file to Firebase Storage
 * @param file - File to upload
 * @param path - Storage path
 * @returns Promise with download URL
 */
const uploadFileToStorage = async (
  file: File,
  path: string
): Promise<string> => {
  const storageRef = ref(storage, path);
  await uploadBytes(storageRef, file);
  const downloadURL = await getDownloadURL(storageRef);
  return downloadURL;
};

/**
 * Convert Arabic city name to city object with ID and bilingual names
 */
const getCityObject = (
  cityNameAr: string
): { id: number; name: { ar: string; en: string } } => {
  const cityMap: { [key: string]: { id: number; en: string } } = {
    الرياض: { id: 1, en: "Riyadh" },
    جدة: { id: 2, en: "Jeddah" },
    "مكة المكرمة": { id: 3, en: "Makkah" },
    "المدينة المنورة": { id: 4, en: "Madinah" },
    الدمام: { id: 5, en: "Dammam" },
    الخبر: { id: 6, en: "Khobar" },
    الظهران: { id: 7, en: "Dhahran" },
    الطائف: { id: 8, en: "Taif" },
    بريدة: { id: 9, en: "Buraidah" },
    تبوك: { id: 10, en: "Tabuk" },
  };

  const cityData = cityMap[cityNameAr] || { id: 0, en: cityNameAr };

  return {
    id: cityData.id,
    name: {
      ar: cityNameAr,
      en: cityData.en,
    },
  };
};

/**
 * Convert Arabic weekday to bilingual object
 */
const getDayObject = (dayAr: string): { ar: string; en: string } => {
  const dayMap: { [key: string]: string } = {
    السبت: "Saturday",
    الأحد: "Sunday",
    الإثنين: "Monday",
    الثلاثاء: "Tuesday",
    الأربعاء: "Wednesday",
    الخميس: "Thursday",
    الجمعة: "Friday",
  };

  return {
    ar: dayAr,
    en: dayMap[dayAr] || dayAr,
  };
};

/**
 * Convert Arabic plate letters to English
 */
const convertPlateLettersToEnglish = (arabicLetters: string): string => {
  const letterMap: { [key: string]: string } = {
    أ: "A",
    ب: "B",
    ج: "J",
    د: "D",
    ه: "H",
    و: "W",
    ز: "Z",
    ح: "H",
    خ: "KH",
    ر: "R",
    س: "S",
    ش: "SH",
    ص: "S",
    ض: "D",
    ط: "T",
    ع: "E",
    غ: "G",
    ف: "F",
    ق: "Q",
    ك: "K",
    ل: "L",
    م: "M",
    ن: "N",
    ي: "Y",
    ء: "A",
  };

  return arabicLetters
    .split("")
    .map((char) => {
      if (char === " ") return " ";
      return letterMap[char] || char;
    })
    .join("");
};

/**
 * Convert Arabic car size to English code
 */
const convertCarSizeToEnglish = (sizeAr: string): string => {
  const sizeMap: { [key: string]: string } = {
    صغيرة: "small",
    متوسطة: "medium",
    كبيرة: "large",
    VIP: "vip",
  };

  return sizeMap[sizeAr] || "small";
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
      throw new Error("No user is currently logged in");
    }

    // console.log('Adding new driver to Firestore...');
    // console.log('Current user:', currentUser.email, currentUser.uid);
    // console.log('Driver data:', driverData);

    // Upload files to Firebase Storage if they are File objects
    let imageUrl = "";
    let licenseUrl = "";

    if (driverData.driverImage && driverData.driverImage instanceof File) {
      const timestamp = Date.now();
      const imagePath = `companies-drivers/${timestamp}${driverData.driverImage.name}`;
      imageUrl = await uploadFileToStorage(driverData.driverImage, imagePath);
      // console.log('Driver image uploaded:', imageUrl);
    }

    if (driverData.driverLicense && driverData.driverLicense instanceof File) {
      const timestamp = Date.now();
      const licensePath = `companies-drivers/${timestamp}${driverData.driverLicense.name}`;
      licenseUrl = await uploadFileToStorage(
        driverData.driverLicense,
        licensePath
      );
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
      image: imageUrl || "",
      licenceAttachment: licenseUrl || "",

      // Plate number
      plateNumber: {
        ar: `${driverData.plateNumber} ${driverData.plateLetters}`,
        en: `${driverData.plateNumber} ${convertPlateLettersToEnglish(
          driverData.plateLetters
        )}`,
      },

      // Car size
      size: convertCarSizeToEnglish(driverData.vehicleCategory),

      // Plan details
      plan: {
        carSize: convertCarSizeToEnglish(driverData.vehicleCategory),
        dailyTrans: driverData.driverAmount,
        exceptionDays: driverData.selectedDays.map((day) => getDayObject(day)),
        createdDate: Date.now(),
        createdUserId: currentUser.email || "",
      },

      // Financial
      balance: parseInt(driverData.driverAmount) || 0,

      // Status
      isActive: true,

      // System fields
      createdDate: serverTimestamp(),
      createdUserId: currentUser.email || "",
      companyUid: currentUser.uid, // Current user's UID

      // Empty arrays for future use
      driverIds: [],

      // Additional info (if needed)
      vehicleStatus: driverData.vehicleStatus,
    };

    // console.log('Prepared driver document:', driverDocument);

    // Add to Firestore
    const companiesDriversRef = collection(db, "companies-drivers");
    const docRef = await addDoc(companiesDriversRef, driverDocument);

    // console.log('Driver added successfully with ID:', docRef.id);

    return {
      id: docRef.id,
      ...driverDocument,
    };
  } catch (error) {
    console.error("Error adding driver to Firestore:", error);
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

    const driverDocRef = doc(db, "companies-drivers", driverId);
    const driverDoc = await getDoc(driverDocRef);

    if (!driverDoc.exists()) {
      throw new Error("Driver not found");
    }

    const driverData = {
      id: driverDoc.id,
      ...driverDoc.data(),
    };

    // console.log('Driver data fetched:', driverData);

    return driverData;
  } catch (error) {
    console.error("Error fetching driver by ID:", error);
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

    const driverPromises = driverIds.map((id) =>
      fetchDriverById(id).catch((err) => {
        console.error(`Error fetching driver ${id}:`, err);
        return null;
      })
    );
    const drivers = await Promise.all(driverPromises);

    // Filter out null values (failed fetches)
    const validDrivers = drivers.filter((driver) => driver !== null);

    // console.log('Fetched drivers:', validDrivers);

    return validDrivers;
  } catch (error) {
    console.error("Error fetching drivers by IDs:", error);
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
export const addDriverToCar = async (
  driverId: string,
  carId: string,
  carData: any
) => {
  try {
    const currentUser = auth.currentUser;

    if (!currentUser) {
      throw new Error("No user is currently logged in");
    }

    // console.log('Adding driver to car...');
    // console.log('Driver ID:', driverId);
    // console.log('Car ID:', carId);
    // console.log('Car data:', carData);

    // Update the car document - add driver ID to driverIds array
    const carDocRef = doc(db, "companies-cars", carId);
    await updateDoc(carDocRef, {
      driverIds: arrayUnion(driverId),
    });
    // console.log('Car updated: Added driver to driverIds array');

    // Update the driver document - add car data
    const driverDocRef = doc(db, "companies-drivers", driverId);
    await updateDoc(driverDocRef, {
      car: {
        id: carId,
        name: carData.name || "",
        plateNumber: carData.plateNumber || {},
        carModel: carData.carModel || {},
        carType: carData.carType || {},
        fuelType: carData.fuelType || "",
        size: carData.size || carData.plan?.carSize || "",
      },
    });
    // console.log('Driver updated: Added car data to driver document');

    return {
      success: true,
      driverId,
      carId,
    };
  } catch (error) {
    console.error("Error adding driver to car:", error);
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
      throw new Error("No user is currently logged in");
    }

    // console.log('Adding new car to Firestore...');
    // console.log('Current user:', currentUser.email, currentUser.uid);
    // console.log('Car data:', carData);

    // Convert fuel type to code
    const fuelTypeMap: { [key: string]: string } = {
      "بنزين 91": "fuel91",
      "بنزين 95": "fuel95",
      ديزل: "diesel",
    };

    // Convert car type to size code
    const carSizeMap: { [key: string]: string } = {
      صغيرة: "small",
      متوسطة: "medium",
      كبيرة: "large",
      Vip: "vip",
      VIP: "vip",
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
        en: `${carData.plateNumbers} ${convertPlateLettersToEnglish(
          carData.plateLetters
        )}`,
      },

      // Car Model (Brand)
      carModel: {
        name: {
          ar: carData.brand,
          en: carData.brand,
        },
        createdUserId: currentUser.email || "",
        createdDate: serverTimestamp(),
      },

      // Car Type (Model + Year)
      carType: {
        name: {
          ar: carData.model,
          en: carData.model,
        },
        year: carData.year,
        createdUserId: currentUser.email || "",
        createdDate: serverTimestamp(),
      },

      // Fuel type
      fuelType: fuelTypeMap[carData.fuelType] || "fuel95",

      // Car size
      size: carSizeMap[carData.carType] || "small",

      // Plan details
      plan: {
        carSize: carSizeMap[carData.carType] || "small",
        createdDate: Date.now(),
        createdUserId: currentUser.email || "",
      },

      // Car condition/status
      vehicleStatus: carData.carCondition,

      // System fields
      createdDate: serverTimestamp(),
      createdUserId: currentUser.email || "",
      companyUid: currentUser.uid, // Current user's UID

      // Empty arrays for future use
      driverIds: [],

      // Balance/financial
      balance: 0,
    };

    // console.log('Prepared car document:', carDocument);

    // Add to Firestore
    const companiesCarsRef = collection(db, "companies-cars");
    const docRef = await addDoc(companiesCarsRef, carDocument);

    // console.log('Car added successfully with ID:', docRef.id);

    return {
      id: docRef.id,
      ...carDocument,
    };
  } catch (error) {
    console.error("Error adding car to Firestore:", error);
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

    const carDocRef = doc(db, "companies-cars", carId);
    const carDoc = await getDoc(carDocRef);

    if (!carDoc.exists()) {
      throw new Error("Car not found");
    }

    const carData = {
      id: carDoc.id,
      ...carDoc.data(),
    };

    // console.log('Car data fetched:', carData);

    return carData;
  } catch (error) {
    console.error("Error fetching car by ID:", error);
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

    const companiesCarsRef = collection(db, "companies-cars");
    const q = query(companiesCarsRef, orderBy("createdDate", "desc"));
    const querySnapshot: QuerySnapshot<DocumentData> = await getDocs(q);

    const companiesCarsData: any[] = [];

    querySnapshot.forEach((doc) => {
      companiesCarsData.push({
        id: doc.id,
        ...doc.data(),
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
        const createdUserIdMatch =
          car.createdUserId &&
          userEmail &&
          car.createdUserId.toLowerCase().includes(userEmail.toLowerCase());

        const companyUidMatch =
          car.companyUid && userId && car.companyUid === userId;

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
    console.error("Error fetching companies-cars data:", error);
    throw error;
  }
};

/**
 * Fetch notifications from Firestore notifications collection
 * Filtered by current company ID in the companies array
 * @returns Promise with filtered notifications data
 */
export const fetchNotifications = async () => {
  try {
    console.log("🔔 Fetching notifications from Firestore...");

    // Get current user
    const currentUser = auth.currentUser;

    if (!currentUser) {
      console.log("❌ No user is currently logged in.");
      return [];
    }

    // First, get the current company data
    const companyData = await fetchCurrentCompany();

    if (!companyData || !companyData.id) {
      console.log("❌ No company found for current user.");
      return [];
    }

    const companyId = companyData.id;
    console.log("✅ Current Company ID:", companyId);

    // Fetch all notifications
    const notificationsRef = collection(db, "notifications");
    const q = query(notificationsRef, orderBy("createdDate", "desc"));
    const querySnapshot: QuerySnapshot<DocumentData> = await getDocs(q);

    const allNotifications: any[] = [];
    querySnapshot.forEach((doc) => {
      allNotifications.push({
        id: doc.id,
        ...doc.data(),
      });
    });

    console.log(
      "📋 Total notifications in collection:",
      allNotifications.length
    );

    // Filter notifications where companies array contains current company ID
    const filteredNotifications = allNotifications.filter((notification) => {
      const companies = notification.companies || [];
      const isForCompany = companies.includes(companyId);

      if (isForCompany) {
        console.log("✅ Notification matched for company:", {
          id: notification.id,
          body: notification.body?.substring(0, 50),
          createdDate: notification.createdDate,
        });
      }

      return isForCompany;
    });

    console.log(
      "✅ Filtered notifications for current company:",
      filteredNotifications.length
    );

    // Sort by createdDate (most recent first)
    filteredNotifications.sort((a, b) => {
      const dateA = a.createdDate?.toDate?.() || new Date(a.createdDate || 0);
      const dateB = b.createdDate?.toDate?.() || new Date(b.createdDate || 0);
      return dateB.getTime() - dateA.getTime();
    });

    return filteredNotifications;
  } catch (error) {
    console.error("❌ Error fetching notifications:", error);
    throw error;
  }
};

/**
 * Fetch a single supervisor by ID from mock data
 * @param supervisorId - Supervisor ID
 * @returns Promise with the supervisor data
 */
export const fetchSupervisorById = async (supervisorId: string) => {
  try {
    console.log("Fetching supervisor by ID:", supervisorId);

    // Fetch the specific user document from Firestore
    const userDocRef = doc(db, "users", supervisorId);
    const userDoc = await getDoc(userDocRef);

    if (!userDoc.exists()) {
      throw new Error("Supervisor not found");
    }

    const data = userDoc.data();

    // Verify user is admin or super admin
    if (data.isAdmin !== true && data.isSuperAdmin !== true) {
      throw new Error("User is not a supervisor/admin");
    }

    const supervisor = {
      id: userDoc.id,
      supervisorCode: data.uid || data.id || userDoc.id || "-",
      supervisorName: data.name || data.fullName || data.displayName || "-",
      phone: data.phoneNumber || data.phone || "-",
      email: data.email || "-",
      city: data.city || data.location || "-",
      accountStatus: {
        active: data.isActive === true,
        text: data.isActive === true ? "مفعل" : "معطل",
      },
      ...data,
    };

    console.log("Supervisor data fetched:", supervisor);

    return supervisor;
  } catch (error) {
    console.error("Error fetching supervisor by ID:", error);
    throw error;
  }
};

/**
 * Fetch a company by its ID
 * @param companyId - The ID of the company to fetch
 * @returns Promise with the company data
 */
export const fetchCompanyById = async (companyId: string) => {
  try {
    console.log("Fetching company by ID:", companyId);

    // Fetch the specific company document from Firestore
    const companyDocRef = doc(db, "companies", companyId);
    const companyDoc = await getDoc(companyDocRef);

    if (!companyDoc.exists()) {
      throw new Error("Company not found");
    }

    const companyData = companyDoc.data();
    const companyEmail = companyData.email || "";

    // Fetch cars and drivers for this company in parallel
    const [carsSnapshot, driversSnapshot] = await Promise.all([
      getDocs(collection(db, "companies-cars")),
      getDocs(collection(db, "companies-drivers")),
    ]);

    // Count cars for this company
    let carsCount = 0;
    carsSnapshot.forEach((carDoc) => {
      const carData = carDoc.data();
      const carEmail =
        carData.email || carData.companyEmail || carData.createdUserId || "";
      if (
        carEmail &&
        companyEmail &&
        carEmail.toLowerCase() === companyEmail.toLowerCase()
      ) {
        carsCount++;
      }
    });

    // Count drivers for this company (filter by createdUserId matching company email)
    let driversCount = 0;
    driversSnapshot.forEach((driverDoc) => {
      const driverData = driverDoc.data();
      const driverCompanyEmail =
        driverData.createdUserId ||
        driverData.email ||
        driverData.companyEmail ||
        "";
      if (
        driverCompanyEmail &&
        companyEmail &&
        driverCompanyEmail.toLowerCase() === companyEmail.toLowerCase()
      ) {
        driversCount++;
      }
    });

    // Extract subscription title (handle object with ar/en keys)
    let subscriptionTitle = "-";
    if (companyData.selectedSubscription?.title) {
      const title = companyData.selectedSubscription.title;
      if (typeof title === "string") {
        subscriptionTitle = title;
      } else if (typeof title === "object" && title.ar) {
        subscriptionTitle = title.ar;
      } else if (typeof title === "object" && title.en) {
        subscriptionTitle = title.en;
      }
    }

    // Extract city (handle object with ar/en keys)
    let cityName = "-";
    const cityData =
      companyData.formattedLocation?.address?.city || companyData.city;
    if (cityData) {
      if (typeof cityData === "string") {
        cityName = cityData;
      } else if (typeof cityData === "object" && cityData.ar) {
        cityName = cityData.ar;
      } else if (typeof cityData === "object" && cityData.en) {
        cityName = cityData.en;
      }
    }

    const company = {
      id: companyDoc.id,
      companyCode: companyData.id || companyDoc.id || "-",
      companyName: companyData.name || companyData.brandName || "-",
      phone: companyData.phoneNumber || companyData.phone || "-",
      email: companyData.email || "-",
      city: cityName,
      cars: carsCount,
      drivers: driversCount,
      subscriptions: subscriptionTitle,
    };

    console.log("Company data fetched:", company);

    return company;
  } catch (error) {
    console.error("Error fetching company by ID:", error);
    throw error;
  }
};

/**
 * Interface for fuel station data
 */
export interface FuelStation {
  id: string;
  stationName: string;
  cityName: string;
  latitude: number;
  longitude: number;
  formattedLocation?: {
    name?: string;
    lat?: number;
    lng?: number;
    address?: {
      city?: string;
    };
  };
}

/**
 * Fetch fuel stations from Firestore (carstations collection)
 * @returns Promise with array of fuel stations
 */
export const fetchFuelStations = async (): Promise<FuelStation[]> => {
  try {
    console.log("📍 Fetching fuel stations from Firestore (carstations)...");

    const carStationsRef = collection(db, "carstations");
    const q = query(carStationsRef, orderBy("createdDate", "desc"));
    const querySnapshot: QuerySnapshot<DocumentData> = await getDocs(q);

    const fuelStations: FuelStation[] = [];

    querySnapshot.forEach((doc) => {
      const data = doc.data();

      // Extract location data from formattedLocation or direct fields
      const formattedLocation = data.formattedLocation || {};
      const stationName =
        data.name || data.email || formattedLocation.name || "Unknown Station";
      const cityName =
        formattedLocation.address?.city ||
        data.address?.city ||
        data.city ||
        "Unknown City";
      const latitude = formattedLocation.lat || data.latitude || 0;
      const longitude = formattedLocation.lng || data.longitude || 0;

      console.log(`Station ${doc.id}:`, {
        name: stationName,
        city: cityName,
        lat: latitude,
        lng: longitude,
        hasFormattedLocation: !!data.formattedLocation,
      });

      // Only add stations with valid coordinates
      if (latitude !== 0 && longitude !== 0) {
        fuelStations.push({
          id: doc.id,
          stationName,
          cityName,
          latitude,
          longitude,
          formattedLocation: data.formattedLocation,
        });
      }
    });

    console.log(
      `✅ Fetched ${fuelStations.length} fuel stations with valid coordinates from carstations collection`
    );

    return fuelStations;
  } catch (error) {
    console.error("❌ Error fetching fuel stations:", error);
    throw error;
  }
};

/**
 * Fetch invoices data from Firestore
 * Filtered by current user's company
 * @returns Promise with array of invoice data
 */
export const fetchInvoices = async (): Promise<any[]> => {
  try {
    console.log("📄 Fetching invoices from Firestore...");

    const currentUser = auth.currentUser;

    if (!currentUser) {
      console.log("❌ No user is currently logged in.");
      return [];
    }

    // Fetch invoices collection
    const invoicesRef = collection(db, "invoices");
    const q = query(invoicesRef, orderBy("createdDate", "desc"));
    const querySnapshot: QuerySnapshot<DocumentData> = await getDocs(q);

    const allInvoices: any[] = [];

    querySnapshot.forEach((doc) => {
      allInvoices.push({
        id: doc.id,
        ...doc.data(),
      });
    });

    console.log("📋 Total invoices found:", allInvoices.length);

    // Filter invoices by current user's company
    const userEmail = currentUser.email;
    const userId = currentUser.uid;

    const filteredInvoices = allInvoices.filter((invoice) => {
      const companyUid = invoice.companyUid || invoice.createdUserId;

      // Check if companyUid matches UID or email
      const uidMatch = companyUid && userId && companyUid === userId;
      const emailMatch =
        companyUid &&
        userEmail &&
        companyUid.toLowerCase() === userEmail.toLowerCase();

      return uidMatch || emailMatch;
    });

    console.log(
      "✅ Filtered invoices for current company:",
      filteredInvoices.length
    );

    // Transform invoices to standard format
    const transformedInvoices = filteredInvoices.map((invoice) => {
      // Format date
      const formatDate = (date: any): string => {
        if (!date) return "غير محدد";
        try {
          const dateObj = date.toDate ? date.toDate() : new Date(date);
          const day = String(dateObj.getDate()).padStart(2, "0");
          const month = String(dateObj.getMonth() + 1).padStart(2, "0");
          const year = dateObj.getFullYear();
          const hours = String(dateObj.getHours()).padStart(2, "0");
          const minutes = String(dateObj.getMinutes()).padStart(2, "0");
          const ampm = hours >= 12 ? "م" : "ص";
          const displayHours = hours % 12 || 12;

          const monthNames = [
            "يناير",
            "فبراير",
            "مارس",
            "أبريل",
            "مايو",
            "يونيو",
            "يوليو",
            "أغسطس",
            "سبتمبر",
            "أكتوبر",
            "نوفمبر",
            "ديسمبر",
          ];

          return `${day} ${
            monthNames[dateObj.getMonth()]
          } ${year} - ${displayHours}:${minutes} ${ampm}`;
        } catch (error) {
          return "غير محدد";
        }
      };

      return {
        id: invoice.id,
        invoiceCode:
          invoice.invoiceCode ||
          invoice.code ||
          `INV-${invoice.id.substring(0, 6).toUpperCase()}`,
        clientName: invoice.clientName || invoice.companyName || "غير محدد",
        clientType: invoice.clientType || "شركات",
        date: formatDate(invoice.createdDate || invoice.invoiceDate),
        invoiceNumber: invoice.invoiceNumber || invoice.number || invoice.id,
        amount: invoice.amount || invoice.totalAmount || 0,
        rawDate: invoice.createdDate || invoice.invoiceDate,
      };
    });

    console.log("✅ Invoices transformed:", transformedInvoices.length);

    return transformedInvoices;
  } catch (error) {
    console.error("❌ Error fetching invoices:", error);
    throw error;
  }
};
