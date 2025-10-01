import { Routes, Route } from 'react-router-dom';
import { ROUTES } from '../constants/routes';

// Import all screen components
import { Drivers } from '../screens/Drivers';
import { Cars } from '../screens/Cars';
import { FinancialReports } from '../screens/FinancialReports';
import { WalletReports } from '../screens/WalletReports';
import { Dashboard } from '../components/Dashboard';
import { Wallet } from '../screens/Wallet/Wallet';
import { AddDriver } from '../screens/AddDriver/AddDriver';
import { DriverDetails } from '../screens/DriverDetails/DriverDetails';
import { AddNewCar } from '../screens/AddNewCar/AddNewCar';
import { CarDetails } from '../screens/CarDetails/CarDetails';
import { MoneyRefundRequests } from '../screens/MoneyRefundRequests/MoneyRefundRequests';
import { WalletChargeRequests } from '../screens/ChargeRequests/WalletChargeRequests';
import { ChargeWallet } from '../screens/ChargeWallet';
import { PerolifeStationLocations } from '../screens/PerolifeStationLocations/perolifestationlocations';
import { StoreScreen } from '../screens/Store';
import { SubscriptionsScreen } from '../screens/Subscriptions';
import { DeliveryFuelRequests } from '../screens/DeliveryFuelRequests';
import { CreateDeliveryRequest } from '../screens/CreateDeliveryRequest';
import LoginAndRegister from '../screens/Login And Register/LoginAndRegister';

// 404 Component
const NotFound = () => (
  <div className="flex items-center justify-center h-screen">
    <div className="text-center">
      <h1 className="text-4xl font-bold text-gray-700 mb-4">404</h1>
      <p className="text-gray-500 text-lg">الصفحة غير موجودة</p>
    </div>
  </div>
);

// App Router using regular React Router
export const AppRouter = () => {
  return (
    <Routes>
      {/* Main Dashboard */}
      <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
      
      {/* Authentication */}
      <Route path={ROUTES.LOGIN} element={<LoginAndRegister />} />
      
      {/* Resource Management */}
      <Route path={ROUTES.DRIVERS} element={<Drivers />} />
      <Route path={ROUTES.ADD_DRIVER} element={<AddDriver />} />
      <Route path={ROUTES.DRIVER_DETAILS} element={<DriverDetails />} />
      <Route path={ROUTES.CARS} element={<Cars />} />
      <Route path={ROUTES.ADD_CAR} element={<AddNewCar />} />
      <Route path={ROUTES.CAR_DETAILS} element={<CarDetails />} />
      
      {/* Wallet and Financial */}
      <Route path={ROUTES.WALLET} element={<Wallet />} />
      <Route path={ROUTES.CHARGE_WALLET} element={<ChargeWallet />} />
      <Route path={ROUTES.FINANCIAL_REPORTS} element={<FinancialReports />} />
      <Route path={ROUTES.WALLET_REPORTS} element={<WalletReports />} />
      
      {/* Operations */}
      <Route path={ROUTES.FUEL_DELIVERY} element={<DeliveryFuelRequests />} />
      <Route path={ROUTES.CREATE_DELIVERY_REQUEST} element={<CreateDeliveryRequest />} />
      <Route path={ROUTES.REFUND_REQUESTS} element={<MoneyRefundRequests />} />
      <Route path={ROUTES.CHARGE_REQUESTS} element={<WalletChargeRequests />} />
      <Route path={ROUTES.PEROLIFE_STATION_LOCATIONS} element={<PerolifeStationLocations />} />
      
      {/* Store and Subscriptions */}
      <Route path={ROUTES.STORE} element={<StoreScreen />} />
      <Route path={ROUTES.SUBSCRIPTIONS} element={<SubscriptionsScreen />} />
      
      {/* Settings */}
      <Route path={ROUTES.SETTINGS} element={<NotFound />} />
      
      {/* 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};