import { useEffect, useState, useCallback } from 'react';
import { useDrivers, useCars, useTransactions, useAuth } from './useGlobalState';
import { driversData, carData, transactionData, userInfo } from '../constants/data';

// Convert mock data to match our interfaces
const convertDriversData = (mockData: any[]) => {
  return mockData.map((driver, index) => ({
    id: driver.id || index + 1,
    driverCode: driver.driverCode || "21A254",
    driverName: driver.driverName || "أحمد محمد",
    phone: driver.phone || "00965284358",
    address: driver.address || "12 ش المنيل ، مصر",
    fuelType: driver.fuelType || "بنزين 91",
    financialValue: driver.financialValue || "1600 / 1400",
    carNumber: driver.carNumber || "2145224",
    carCategory: driver.carCategory || { text: "صغيرة", icon: "/img/component-4-11.svg" },
    accountStatus: driver.accountStatus || { active: true, text: "مفعل" },
  }));
};

const convertCarsData = (mockData: any[]) => {
  return mockData.map((car, index) => ({
    id: car.id || index + 1,
    carNumber: car.carNumber || "21A254",
    carName: car.carName || "سيارة الطلبات",
    brand: car.brand || "تيوتا",
    model: car.model || "كرولا",
    year: car.year || "2020",
    fuelType: car.fuelType || "بنزين 91",
    category: car.category || { name: "صغيرة", icon: "/img/component-4-8.svg" },
    drivers: car.drivers || [{
      name: "محمد، مراد",
      avatar1: "/img/ellipse-17.svg",
      avatar2: "/img/ellipse-18.svg",
    }],
  }));
};

const convertTransactionsData = (mockData: any[]) => {
  return mockData.map((transaction, index) => ({
    id: transaction.id || `TXN${index + 1}`,
    type: transaction.type || "وقود 91",
    driver: transaction.driver || "أحمد محمد",
    date: transaction.date || "21 فبراير 2025 - 5:05 ص",
    amount: transaction.amount || 20,
    cumulative: transaction.cumulative || 200,
  }));
};

export const useDataInitialization = () => {
  const { drivers, setDrivers } = useDrivers();
  const { cars, setCars } = useCars();
  const { transactions, setTransactions } = useTransactions();
  const { login } = useAuth();
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    // Only run once when component mounts
    if (!isInitialized) {
      // Initialize drivers data
      if (drivers.length === 0) {
        const convertedDrivers = convertDriversData(driversData);
        setDrivers(convertedDrivers);
      }

      // Initialize cars data
      if (cars.length === 0) {
        const convertedCars = convertCarsData(carData);
        setCars(convertedCars);
      }

      // Initialize transactions data
      if (transactions.length === 0) {
        const convertedTransactions = convertTransactionsData(transactionData);
        setTransactions(convertedTransactions);
      }

      // Initialize user data
      const user = {
        id: "1",
        name: userInfo.name,
        email: userInfo.email,
        avatar: userInfo.avatar,
        role: "admin" as const,
      };
      login(user);

      setIsInitialized(true);
    }
  }, []); // Empty dependency array - only run once

  return {
    isInitialized: drivers.length > 0 && cars.length > 0 && transactions.length > 0,
  };
};
