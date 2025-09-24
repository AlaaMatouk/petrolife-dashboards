import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Layout } from '../components/shared';
import { navigationMenuData, userInfo } from '../constants/data';
import { ROUTES } from '../constants/routes';
import { UserRound, Car, Wallet, BarChart3, MapPin, CreditCard, FileText, Settings } from 'lucide-react';

// Import all screen components
import { Drivers } from '../screens/Drivers';
import { Cars } from '../screens/Cars';
import { Wallet as WalletScreen } from '../screens/Wallet';
import { FinancialReports } from '../screens/FinancialReports';
import { WalletReports } from '../screens/WalletReports';
import { DeliveryFuelRequests } from '../screens/DeliveryFuelRequests';
import { PerolifeStationLocations } from '../screens/PerolifeStationLocations';
import { UsedStations } from '../screens/UsedStations';
import { MoneyRefundRequests } from '../screens/MoneyRefundRequests';
import { ChargeRequests } from '../screens/ChargeRequests';
import { AddDriver } from '../screens/AddDriver';
import { AddNewCar } from '../screens/AddNewCar';
import { DriverDetails } from '../screens/DriverDetails';
import { Settings } from '../screens/Settings';
import { LoginAndRegister } from '../screens/Login And Register/LoginAndRegister';

// Dashboard component for the main dashboard page
const Dashboard = () => {
  return (
    <Layout
      headerProps={{
        title: "لوحة التحكم",
        titleIconSrc: <BarChart3 className="w-5 h-5 text-gray-500" />,
        showSearch: true,
        searchProps: {
          onSearch: (query) => console.log("Search:", query),
        },
      }}
      sidebarProps={{
        sections: navigationMenuData.sections,
        topItems: navigationMenuData.topItems,
        bottomItems: navigationMenuData.bottomItems,
        userInfo: userInfo,
      }}
    >
      <div className="flex flex-col items-center justify-center h-96 text-center">
        <h1 className="text-3xl font-bold text-gray-700 mb-4">مرحباً بك في لوحة التحكم</h1>
        <p className="text-gray-500 text-lg">اختر قسم من القائمة الجانبية للبدء</p>
      </div>
    </Layout>
  );
};

// Create the router configuration
export const router = createBrowserRouter([
  {
    path: ROUTES.DASHBOARD,
    element: <Dashboard />,
  },
  {
    path: ROUTES.DRIVERS,
    element: <Drivers />,
  },
  {
    path: ROUTES.ADD_DRIVER,
    element: <AddDriver />,
  },
  {
    path: ROUTES.DRIVER_DETAILS,
    element: <DriverDetails />,
  },
  {
    path: ROUTES.CARS,
    element: <Cars />,
  },
  {
    path: ROUTES.ADD_CAR,
    element: <AddNewCar />,
  },
  {
    path: ROUTES.WALLET,
    element: <WalletScreen />,
  },
  {
    path: ROUTES.FINANCIAL_REPORTS,
    element: <FinancialReports />,
  },
  {
    path: ROUTES.WALLET_REPORTS,
    element: <WalletReports />,
  },
  {
    path: ROUTES.FUEL_DELIVERY,
    element: <DeliveryFuelRequests />,
  },
  {
    path: ROUTES.STATIONS,
    element: <PerolifeStationLocations />,
  },
  {
    path: ROUTES.USED_STATIONS,
    element: <UsedStations />,
  },
  {
    path: ROUTES.REFUND_REQUESTS,
    element: <MoneyRefundRequests />,
  },
  {
    path: ROUTES.CHARGE_REQUESTS,
    element: <ChargeRequests />,
  },
  {
    path: ROUTES.LOGIN,
    element: <LoginAndRegister />,
  },
  {
    path: ROUTES.SETTINGS,
    element: <Settings />,
  },
  // Catch-all route for 404
  {
    path: "*",
    element: (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-700 mb-4">404</h1>
          <p className="text-gray-500 text-lg">الصفحة غير موجودة</p>
        </div>
      </div>
    ),
  },
]);

// Router Provider component
export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
