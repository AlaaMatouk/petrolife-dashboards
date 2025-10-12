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
  SERVICE_DISTRIBUTER_DASHBOARD: '/servicedistributer',
  STATION_WORKERS: '/stationworkers',
  STATIONS: '/stations',

  // Admin Dashboard
  ADMIN_DASHBOARD: '/admin-dashboard',
  
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
