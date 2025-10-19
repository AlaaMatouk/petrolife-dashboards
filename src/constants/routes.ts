// Route constants for the application
export const ROUTES = {
  // Main routes
  LOGIN: '/',
  DASHBOARD: '/dashboard',
  
  // Resource management
  DRIVERS: '/drivers',
  ADD_DRIVER: '/adddriver',
  DRIVER_DETAILS: '/driver/:id',
  CARS: '/cars',
  ADD_CAR: '/addcar',
  CAR_DETAILS: '/car/:id',
  
  // Wallet and financial
  WALLET: '/wallet',
  CHARGE_WALLET: '/chargewallet',
  TRANSFER_MONEY: '/transfermoney',
  FINANCIAL_REPORTS: '/financialreports',
  WALLET_REPORTS: '/walletreports',
  
  // Operations
  FUEL_DELIVERY: '/fuel-delivery',
  CREATE_DELIVERY_REQUEST: '/create-delivery-request',
  USED_STATIONS: '/used-stations',
  REFUND_REQUESTS: '/moneyrefundrequests',
  CHARGE_REQUESTS: '/walletchargerequests',
  PEROLIFE_STATION_LOCATIONS: '/perolifestationlocations',
  
  // Store and Subscriptions
  STORE: '/store',
  SUBSCRIPTIONS: '/subscriptions',
  
  // Settings
  SETTINGS: '/settings',

  // Service Distributer Dashboard
  SERVICE_DISTRIBUTER_DASHBOARD: '/service-distributer',
  STATION_WORKERS: '/service-distributer-station-workers',
  STATION_WORKER_DETAILS: '/service-distributer-station-worker/:id',
  STATIONS: '/service-distributer-stations',
  FUEL_STATION_REQUESTS: '/fuel-station-requests',
  SERVICE_DISTRIBUTER_FINANCIAL_REPORTS: '/service-distributer-financial-reports',
  SERVICE_DISTRIBUTER_STATION_LOCATIONS: '/service-distributer-station-locations',
  SERVICE_DISTRIBUTER_INVOICES: '/service-distributer-invoices',

  // Admin Dashboard
  ADMIN_DASHBOARD: '/admin-dashboard',
  SUPERVISORS: '/supervisors',
  COMPANIES: '/companies',
  PEOPLE: '/people',
  SERVICE_PROVIDERS: '/serviceproviders',
  PETROLIFE_DRIVERS: '/petrolife-drivers',
  PETROLIFE_REPRESENTATIVES: '/petrolife-representatives',
  PETROLIFE_CARS: '/petrolife-cars',
  PETROLIFE_PRODUCTS: '/petrolife-products',
  PETROLIFE_COUPONS: '/petrolife-coupons',
  WALLET_REQUESTS: '/wallet-requests',
  FUEL_DELIVERY_REQUESTS: '/fuel-delivery-requests',
  ADMIN_FINANCIAL_REPORTS: '/admin-financial-reports',
  ADMIN_INVOICE_REPORTS: '/admin-invoice-reports',
  ADMIN_SERVICE_PROVIDER_REPORTS: '/admin-service-provider-reports',
  ADMIN_REPRESENTATIVE_REPORTS: '/admin-representative-reports',
  ADMIN_WALLET_REPORTS: '/admin-wallet-reports',
  ADMIN_COUNTRIES: '/admin-countries',
  ADMIN_CARS: '/admin-cars',
  ADMIN_CATEGORIES: '/admin-categories',
  APPLICATION_SERVICES: '/application-services',
  DEFAULT_ACCOUNTS: '/default-accounts',
  ADVERTISEMENTS: '/advertisements',
  SPECIAL_NOTIFICATIONS: '/special-notifications',
  ADMIN_SUBSCRIPTIONS: '/admin-subscriptions',
  ADMIN_COMMUNICATION_POLICIES: '/admin-communication-policies',
  FAQ: '/faq',
  CUSTOMER_MESSAGES: '/customer-messages',
} as const;

// Helper function to generate dynamic routes
export const generateRoute = (route: string, params: Record<string, string | number>) => {
  let generatedRoute = route;
  Object.entries(params).forEach(([key, value]) => {
    generatedRoute = generatedRoute.replace(`:${key}`, String(value));
  });
  return generatedRoute;
};

// Helper function to check if a route matches the current path
export const isRouteMatch = (route: string, currentPath: string) => {
  // Convert route pattern to regex
  const pattern = route.replace(/:\w+/g, '[^/]+');
  const regex = new RegExp(`^${pattern}$`);
  return regex.test(currentPath);
};
