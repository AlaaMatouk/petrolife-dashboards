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
  SERVICE_DISTRIBUTER_DASHBOARD: '/service-distributer',
  STATION_WORKERS: '/service-distributer-station-workers',
  STATION_WORKER_DETAILS: '/service-distributer-station-worker/:id',
  STATIONS: '/service-distributer-stations',
  FUEL_STATION_REQUESTS: '/fuel-station-requests',
  SERVICE_DISTRIBUTER_FINANCIAL_REPORTS: '/service-distributer-financial-reports',
  SERVICE_DISTRIBUTER_STATION_LOCATIONS: '/service-distributer-station-locations',
  SERVICE_DISTRIBUTER_INVOICES: '/service-distributer-invoices'

  
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
