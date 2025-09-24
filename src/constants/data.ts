import { ROUTES } from './routes';

// Navigation Menu Data
export const navigationMenuData = {
  topItems: [
    {
      id: "dashboard",
      label: "لوحة التحكم",
      icon: "/img/side-icons-1.svg",
      isActive: false,
      hasBackground: false,
      href: ROUTES.DASHBOARD,
    },
    {
      id: "wallet",
      label: "محفظــــــــــــتي",
      icon: "/img/side-icons-6.svg",
      hasBackground: false,
      href: ROUTES.WALLET,
    },
  ],
  sections: [
    {
      title: "المــــــــــــــــــــــــــــــوارد",
      items: [
        {
          id: "drivers",
          label: "الســـــــــــائقين",
          icon: "/img/side-icons-3.svg",
          hasBackground: false,
          href: ROUTES.DRIVERS,
        },
        {
          id: "cars",
          label: "السيـــــــــــــارات",
          icon: "/img/side-icons-4.svg",
          href: ROUTES.CARS,
        },
      ],
    },
    {
      title: "التقاريــــــــــــــــــــــــــــــر",
      items: [
        {
          id: "sales-report",
          label: "تقرير المبيعات",
          icon: "/img/side-icons-5.svg",
          href: ROUTES.FINANCIAL_REPORTS,
        },
        {
          id: "wallet-report",
          label: "تقرير المحفظة",
          icon: "/img/side-icons-6.svg",
          href: ROUTES.WALLET_REPORTS,
        },
      ],
    },
  ],
  bottomItems: [
    {
      id: "fuel-delivery",
      label: "طلبات توصيل الوقود",
      icon: "/img/side-icons-7.svg",
      href: ROUTES.FUEL_DELIVERY,
    },
    {
      id: "stations",
      label: "محطات البترول",
      icon: "/img/side-icons-8.svg",
      href: ROUTES.STATIONS,
    },
    {
      id: "used-stations",
      label: "المحطات المستخدمة",
      icon: "/img/side-icons-9.svg",
      href: ROUTES.USED_STATIONS,
    },
    {
      id: "refund-requests",
      label: "طلبات الاسترداد",
      icon: "/img/side-icons-10.svg",
      href: ROUTES.REFUND_REQUESTS,
    },
    {
      id: "charge-requests",
      label: "طلبات الشحن",
      icon: "/img/side-icons-11.svg",
      href: ROUTES.CHARGE_REQUESTS,
    },
    {
      id: "settings",
      label: "الإعدادات العامـــــة",
      icon: "/img/side-icons-12.svg",
      href: ROUTES.SETTINGS,
    },
  ],
};

// User Information
export const userInfo = {
  name: "الشركة المتحدة العالمية",
  email: "hesham@gmail.com",
  avatar: "/img/image-2.png",
};

// Transaction Data
export const transactionData = [
  {
    id: "21A254",
    type: "وقود 91",
    driver: "أحمد محمد",
    date: "21 فبراير 2025 - 5:05 ص",
    amount: 20,
    cumulative: 200,
  },
  {
    id: "21A254",
    type: "منتج",
    driver: "--",
    date: "21 فبراير 2025 - 5:05 ص",
    amount: 20,
    cumulative: 180,
  },
  {
    id: "21A254",
    type: "وقود 91",
    driver: "أحمد محمد",
    date: "21 فبراير 2025 - 5:05 ص",
    amount: 20,
    cumulative: 160,
  },
  {
    id: "21A254",
    type: "وقود 91",
    driver: "أحمد محمد",
    date: "21 فبراير 2025 - 5:05 ص",
    amount: 20,
    cumulative: 140,
  },
  {
    id: "21A254",
    type: "وقود 91",
    driver: "أحمد محمد",
    date: "21 فبراير 2025 - 5:05 ص",
    amount: 20,
    cumulative: 120,
  },
  {
    id: "21A254",
    type: "وقود 91",
    driver: "أحمد محمد",
    date: "21 فبراير 2025 - 5:05 ص",
    amount: 20,
    cumulative: 100,
  },
  {
    id: "21A254",
    type: "وقود 91",
    driver: "أحمد محمد",
    date: "21 فبراير 2025 - 5:05 ص",
    amount: 20,
    cumulative: 80,
  },
  {
    id: "21A254",
    type: "وقود 91",
    driver: "أحمد محمد",
    date: "21 فبراير 2025 - 5:05 ص",
    amount: 20,
    cumulative: 60,
  },
  {
    id: "21A254",
    type: "وقود 91",
    driver: "أحمد محمد",
    date: "21 فبراير 2025 - 5:05 ص",
    amount: 20,
    cumulative: 40,
  },
  {
    id: "21A254",
    type: "وقود 91",
    driver: "أحمد محمد",
    date: "21 فبراير 2025 - 5:05 ص",
    amount: 20,
    cumulative: 20,
  },
];

// Wallet Reports Transaction Data
export const walletReportsTransactionData = [
  {
    id: "21A254",
    operationName: "تحويل بنكي",
    operationType: "تغذية محفظة",
    date: "21 فبراير 2025 - 5:05 ص",
    balance: "21536",
    debit: "",
  },
  {
    id: "21A254",
    operationName: "وقود",
    operationType: "فاتورة",
    date: "21 فبراير 2025 - 5:05 ص",
    balance: "21536",
    debit: "",
  },
  {
    id: "21A254",
    operationName: "اشتراك مركبات",
    operationType: "استرداد",
    date: "21 فبراير 2025 - 5:05 ص",
    balance: "21536",
    debit: "20",
  },
  {
    id: "21A254",
    operationName: "استرداد",
    operationType: "تغذية محفظة",
    date: "21 فبراير 2025 - 5:05 ص",
    balance: "21536",
    debit: "20",
  },
  {
    id: "21A254",
    operationName: "تحويل بنكي",
    operationType: "تغذية محفظة",
    date: "21 فبراير 2025 - 5:05 ص",
    balance: "21536",
    debit: "20",
  },
  {
    id: "21A254",
    operationName: "تحويل بنكي",
    operationType: "تغذية محفظة",
    date: "21 فبراير 2025 - 5:05 ص",
    balance: "21536",
    debit: "20",
  },
  {
    id: "21A254",
    operationName: "تحويل بنكي",
    operationType: "تغذية محفظة",
    date: "21 فبراير 2025 - 5:05 ص",
    balance: "21536",
    debit: "20",
  },
  {
    id: "21A254",
    operationName: "تحويل بنكي",
    operationType: "تغذية محفظة",
    date: "21 فبراير 2025 - 5:05 ص",
    balance: "21536",
    debit: "20",
  },
  {
    id: "21A254",
    operationName: "تحويل بنكي",
    operationType: "تغذية محفظة",
    date: "21 فبراير 2025 - 5:05 ص",
    balance: "21536",
    debit: "20",
  },
  {
    id: "21A254",
    operationName: "تحويل بنكي",
    operationType: "تغذية محفظة",
    date: "21 فبراير 2025 - 5:05 ص",
    balance: "21536",
    debit: "20",
  },
];

// Car Data
// Drivers Data
export const driversData = [
  {
    id: 1,
    driverCode: "21A254",
    driverName: "أحمد محمد",
    phone: "00965284358",
    address: "12 ش المنيل ، مصر",
    fuelType: "بنزين 91",
    financialValue: "1600 / 1400",
    carNumber: "2145224",
    carCategory: { text: "صغيرة", icon: "/img/component-4-11.svg" },
    accountStatus: { active: true, text: "مفعل" },
  },
  {
    id: 2,
    driverCode: "21A255",
    driverName: "محمد أحمد",
    phone: "00965284359",
    address: "15 ش المعادي ، مصر",
    fuelType: "بنزين 91",
    financialValue: "1600 / 1000",
    carNumber: "2145225",
    carCategory: { text: "كبيرة", icon: "/img/component-4-4.svg" },
    accountStatus: { active: true, text: "مفعل" },
  },
  {
    id: 3,
    driverCode: "21A256",
    driverName: "علي حسن",
    phone: "00965284360",
    address: "20 ش الزمالك ، مصر",
    fuelType: "بنزين 91",
    financialValue: "1600 / 1400",
    carNumber: "2145226",
    carCategory: { text: "متوسطة", icon: "/img/component-4-5.svg" },
    accountStatus: { active: true, text: "مفعل" },
  },
  {
    id: 4,
    driverCode: "21A257",
    driverName: "حسن علي",
    phone: "00965284361",
    address: "25 ش المهندسين ، مصر",
    fuelType: "بنزين 91",
    financialValue: "-- / 1400",
    carNumber: "2145227",
    carCategory: { text: "VIP", icon: "/img/component-4-6.svg" },
    accountStatus: { active: true, text: "مفعل" },
  },
  {
    id: 5,
    driverCode: "21A258",
    driverName: "محمود سعد",
    phone: "00965284362",
    address: "30 ش الدقي ، مصر",
    fuelType: "بنزين 91",
    financialValue: "1600 / 1400",
    carNumber: "2145228",
    carCategory: { text: "صغيرة", icon: "/img/component-4-11.svg" },
    accountStatus: { active: true, text: "مفعل" },
  },
  {
    id: 6,
    driverCode: "21A259",
    driverName: "سعد محمود",
    phone: "00965284363",
    address: "35 ش العجوزة ، مصر",
    fuelType: "بنزين 91",
    financialValue: "1600 / 1400",
    carNumber: "--",
    carCategory: { text: "--", icon: null },
    accountStatus: { active: true, text: "مفعل" },
  },
  {
    id: 7,
    driverCode: "21A260",
    driverName: "يوسف إبراهيم",
    phone: "00965284364",
    address: "40 ش المقطم ، مصر",
    fuelType: "بنزين 91",
    financialValue: "1600 / 1400",
    carNumber: "2145229",
    carCategory: { text: "صغيرة", icon: "/img/component-4-11.svg" },
    accountStatus: { active: true, text: "مفعل" },
  },
  {
    id: 8,
    driverCode: "21A261",
    driverName: "إبراهيم يوسف",
    phone: "00965284365",
    address: "45 ش النزهة ، مصر",
    fuelType: "بنزين 91",
    financialValue: "1600 / 1400",
    carNumber: "2145230",
    carCategory: { text: "صغيرة", icon: "/img/component-4-11.svg" },
    accountStatus: { active: false, text: "معطل" },
  },
  {
    id: 9,
    driverCode: "21A262",
    driverName: "خالد عبدالله",
    phone: "00965284366",
    address: "50 ش التجمع ، مصر",
    fuelType: "بنزين 91",
    financialValue: "1600 / 1400",
    carNumber: "2145231",
    carCategory: { text: "صغيرة", icon: "/img/component-4-11.svg" },
    accountStatus: { active: false, text: "معطل" },
  },
  {
    id: 10,
    driverCode: "21A263",
    driverName: "عبدالله خالد",
    phone: "00965284367",
    address: "55 ش الشروق ، مصر",
    fuelType: "بنزين 91",
    financialValue: "1600 / 1400",
    carNumber: "2145232",
    carCategory: { text: "صغيرة", icon: "/img/component-4-11.svg" },
    accountStatus: { active: false, text: "معطل" },
  },
];

export const carData = [
  {
    id: 1,
    carNumber: "21A254",
    carName: "سيارة الطلبات",
    brand: "تيوتا",
    model: "كرولا",
    year: "2020",
    fuelType: "بنزين 91",
    category: { name: "صغيرة", icon: "/img/component-4-8.svg" },
    drivers: [
      {
        name: "محمد، مراد",
        avatar1: "/img/ellipse-17.svg",
        avatar2: "/img/ellipse-18.svg",
      },
    ],
  },
  {
    id: 2,
    carNumber: "21A254",
    carName: "سيارة الطلبات",
    brand: "تيوتا",
    model: "كرولا",
    year: "2020",
    fuelType: "بنزين 91",
    category: { name: "كبيرة", icon: "/img/component-4-1.svg" },
    drivers: [
      {
        name: "محمد، مراد، عبدالك..",
        avatar1: "/img/ellipse-17-1.svg",
        avatar2: "/img/ellipse-18-1.svg",
        avatar3: "/img/ellipse-19.svg",
      },
    ],
  },
  {
    id: 3,
    carNumber: "21A254",
    carName: "سيارة الطلبات",
    brand: "تيوتا",
    model: "كرولا",
    year: "2020",
    fuelType: "بنزين 91",
    category: { name: "متوسطة", icon: "/img/component-4-2.svg" },
    drivers: [{ name: "محمد", avatar1: "/img/ellipse-17-2.svg" }],
  },
  {
    id: 4,
    carNumber: "21A254",
    carName: "سيارة الطلبات",
    brand: "تيوتا",
    model: "كرولا",
    year: "2020",
    fuelType: "بنزين 91",
    category: { name: "VIP", icon: "/img/component-4-3.svg" },
    drivers: [
      {
        name: "محمد، مراد",
        avatar1: "/img/ellipse-17-3.svg",
        avatar2: "/img/ellipse-18-2.svg",
      },
    ],
  },
  {
    id: 5,
    carNumber: "21A254",
    carName: "سيارة الطلبات",
    brand: "تيوتا",
    model: "كرولا",
    year: "2020",
    fuelType: "بنزين 91",
    category: { name: "صغيرة", icon: "/img/component-4-8.svg" },
    drivers: [
      {
        name: "محمد، مراد",
        avatar1: "/img/ellipse-17-4.svg",
        avatar2: "/img/ellipse-18-3.svg",
      },
    ],
  },
  {
    id: 6,
    carNumber: "21A254",
    carName: "سيارة الطلبات",
    brand: "تيوتا",
    model: "كرولا",
    year: "2020",
    fuelType: "بنزين 91",
    category: null,
    drivers: [
      {
        name: "محمد، مراد",
        avatar1: "/img/ellipse-17-5.svg",
        avatar2: "/img/ellipse-18-4.svg",
      },
    ],
  },
  {
    id: 7,
    carNumber: "21A254",
    carName: "سيارة الطلبات",
    brand: "تيوتا",
    model: "كرولا",
    year: "2020",
    fuelType: "بنزين 91",
    category: { name: "صغيرة", icon: "/img/component-4-8.svg" },
    drivers: [
      {
        name: "محمد، مراد",
        avatar1: "/img/ellipse-17-6.svg",
        avatar2: "/img/ellipse-18-5.svg",
      },
    ],
  },
  {
    id: 8,
    carNumber: "21A254",
    carName: "سيارة الطلبات",
    brand: "تيوتا",
    model: "كرولا",
    year: "2020",
    fuelType: "بنزين 91",
    category: { name: "صغيرة", icon: "/img/component-4-8.svg" },
    drivers: [
      {
        name: "محمد، مراد",
        avatar1: "/img/ellipse-17-7.svg",
        avatar2: "/img/ellipse-18-6.svg",
      },
    ],
  },
  {
    id: 9,
    carNumber: "21A254",
    carName: "سيارة الطلبات",
    brand: "تيوتا",
    model: "كرولا",
    year: "2020",
    fuelType: "بنزين 91",
    category: { name: "صغيرة", icon: "/img/component-4-8.svg" },
    drivers: [
      {
        name: "محمد، مراد",
        avatar1: "/img/ellipse-17-8.svg",
        avatar2: "/img/ellipse-18-7.svg",
      },
    ],
  },
  {
    id: 10,
    carNumber: "21A254",
    carName: "سيارة الطلبات",
    brand: "تيوتا",
    model: "كرولا",
    year: "2020",
    fuelType: "بنزين 91",
    category: { name: "صغيرة", icon: "/img/component-4-8.svg" },
    drivers: [
      {
        name: "محمد، مراد",
        avatar1: "/img/ellipse-17-9.svg",
        avatar2: "/img/ellipse-18-8.svg",
      },
    ],
  },
];

// Financial Reports Data
export const financialReportsData = [
  {
    city: "الرياض",
    stationName: "محطة الصالح",
    date: "21 فبراير 2025 - 5:05 ص",
    operationNumber: "21536",
    quantity: "20",
    productName: "بنزين 91",
    productNumber: "21536",
    productType: "وقود",
    driverName: "أحمد محمد",
    driverCode: "21A254",
  },
  {
    city: "الرياض",
    stationName: "محطة الصالح",
    date: "21 فبراير 2025 - 5:05 ص",
    operationNumber: "21536",
    quantity: "20",
    productName: "بنزين 91",
    productNumber: "21536",
    productType: "وقود",
    driverName: "أحمد محمد",
    driverCode: "21A254",
  },
  {
    city: "الرياض",
    stationName: "محطة الصالح",
    date: "21 فبراير 2025 - 5:05 ص",
    operationNumber: "21536",
    quantity: "20",
    productName: "بنزين 91",
    productNumber: "21536",
    productType: "وقود",
    driverName: "أحمد محمد",
    driverCode: "21A254",
  },
  {
    city: "الرياض",
    stationName: "محطة الصالح",
    date: "21 فبراير 2025 - 5:05 ص",
    operationNumber: "21536",
    quantity: "20",
    productName: "بنزين 91",
    productNumber: "21536",
    productType: "وقود",
    driverName: "أحمد محمد",
    driverCode: "21A254",
  },
  {
    city: "الرياض",
    stationName: "محطة الصالح",
    date: "21 فبراير 2025 - 5:05 ص",
    operationNumber: "21536",
    quantity: "20",
    productName: "بنزين 91",
    productNumber: "21536",
    productType: "وقود",
    driverName: "أحمد محمد",
    driverCode: "21A254",
  },
  {
    city: "الرياض",
    stationName: "محطة الصالح",
    date: "21 فبراير 2025 - 5:05 ص",
    operationNumber: "21536",
    quantity: "20",
    productName: "بنزين 91",
    productNumber: "21536",
    productType: "وقود",
    driverName: "أحمد محمد",
    driverCode: "21A254",
  },
  {
    city: "الرياض",
    stationName: "محطة الصالح",
    date: "21 فبراير 2025 - 5:05 ص",
    operationNumber: "21536",
    quantity: "20",
    productName: "بنزين 91",
    productNumber: "21536",
    productType: "وقود",
    driverName: "أحمد محمد",
    driverCode: "21A254",
  },
  {
    city: "الرياض",
    stationName: "محطة الصالح",
    date: "21 فبراير 2025 - 5:05 ص",
    operationNumber: "21536",
    quantity: "20",
    productName: "بنزين 91",
    productNumber: "21536",
    productType: "وقود",
    driverName: "أحمد محمد",
    driverCode: "21A254",
  },
  {
    city: "الرياض",
    stationName: "محطة الصالح",
    date: "21 فبراير 2025 - 5:05 ص",
    operationNumber: "21536",
    quantity: "20",
    productName: "بنزين 91",
    productNumber: "21536",
    productType: "وقود",
    driverName: "أحمد محمد",
    driverCode: "21A254",
  },
  {
    city: "الرياض",
    stationName: "محطة الصالح",
    date: "21 فبراير 2025 - 5:05 ص",
    operationNumber: "21536",
    quantity: "20",
    productName: "بنزين 91",
    productNumber: "21536",
    productType: "وقود",
    driverName: "أحمد محمد",
    driverCode: "21A254",
  },
];

// Client Data
export const clientData = {
  phone: "00966254523658",
  commercialRecord: "GDHGD2543",
  clientName: "الشركة المتحدة العالمية",
  city: "الرياض",
  taxNumber: "245863564",
  clientCode: "21546354",
};

// User Data for Wallet Reports
export const userDataColumns = [
  {
    fields: [
      { label: "رقم الهاتف", value: "00966254523658" },
      { label: "المدينة", value: "الرياض" },
    ],
  },
  {
    fields: [
      { label: "السجل التجاري", value: "GDHGD2543" },
      { label: "الرقم الضريبي", value: "245863564" },
    ],
  },
  {
    fields: [
      { label: "اسم العميل", value: "الشركة المتحدة العالمية" },
      { label: "كود العميل", value: "21546354" },
    ],
  },
];

// Filter Options
export const filterOptions = {
  timePeriod: [{ label: "الكل", value: "all", icon: "/img/side-icons-2.svg" }],
  operationName: [
    { label: "الكل", value: "all", icon: "/img/side-icons-5.svg" },
  ],
  operationType: [
    { label: "الكل", value: "all", icon: "/img/side-icons-4.svg" },
  ],
  reportType: [
    { label: "تحليلي", value: "analytical", icon: "/img/side-icons-5.svg" },
  ],
};

// Financial Reports Filter Options
export const financialReportsFilterOptions = [
  { label: "الفترة الزمنية", value: "الكل", icon: "/img/side-icons-16.svg" },
  {
    label: "كود الســـــــــائق",
    value: "الكل",
    icon: "/img/side-icons-17.svg",
  },
  {
    label: "المديــــــــــــنة",
    value: "الكل",
    icon: "/img/side-icons-18.svg",
  },
  { label: "نوع المنتج", value: "الكل", icon: "/img/side-icons-19.svg" },
  { label: "نوع التقرير", value: "تحليلي", icon: "/img/side-icons-20.svg" },
];

// Fuel Data
export const fuelData = [
  {
    type: "ديزل",
    amount: "185 .L",
    color: "text-color-mode-text-icons-t-orange",
  },
  {
    type: "بنزين 95",
    amount: "548 .L",
    color: "text-color-mode-text-icons-t-red",
  },
  {
    type: "بنزين 91",
    amount: "845 .L",
    color: "text-color-mode-text-icons-t-green",
  },
];

// Time Filters
export const timeFilters = [
  "اخر اسبوع",
  "اخر 30 يوم",
  "اخر 6 شهور",
  "اخر 12 شهر",
];

// Navigation Icons
export const navigationIcons = [
  {
    id: 1,
    src: "/img/component-1.svg",
    alt: "Component",
  },
  {
    id: 2,
    src: "/img/component-1-1.svg",
    alt: "Component",
  },
  {
    id: 3,
    vectors: [
      {
        src: "/img/vector.svg",
        alt: "Vector",
        className: "absolute w-2.5 h-2.5 top-1 left-1",
      },
      {
        src: "/img/vector-1.svg",
        alt: "Vector",
        className: "absolute w-[18px] h-[18px] top-0 left-0",
      },
    ],
  },
  { id: 4, text: "En" },
];
