import React, { useEffect } from "react";
import { VehicleStatsSection } from "./components/VehicleStatsSection";
import { ActionButtons } from "./components/ActionButtons";
import { DriversCount } from "./components/DriversCount";
import { TableHeader } from "./components/TableHeader";
import { DriverRow, Driver } from "./components/DriverRow";
import { Pagination } from "./components/Pagination";
import { useDrivers } from "../../../../hooks/useGlobalState";
import { driversData as mockDriversData } from "../../../../constants/data";

// Mock data - in a real app, this would come from an API
const vehicleStats = [
  {
    title: "سائقي السيارات ال VIP",
    count: "3",
    icon: "/img/component-4.svg",
  },
  {
    title: "سائقي السيارات الكبيرة",
    count: "10",
    icon: "/img/component-4-1.svg",
  },
  {
    title: "سائقي السيارات المتوسطة",
    count: "12",
    icon: "/img/component-5.svg",
  },
  {
    title: "سائقي السيارات الصغيرة",
    count: "20",
    icon: "/img/component-4-2.svg",
  },
];

// Convert mock data to match our Driver interface
const convertMockDataToDrivers = (mockData: any[]): Driver[] => {
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

const tableColumns = [
  { label: "حالة الحساب", width: "w-[111px]", icon: "/img/side-icons-28.svg" },
  { label: "تصنيف السيارة", width: "w-[129px]", icon: "/img/side-icons-28.svg" },
  { label: "رقم السيارة", width: "w-24" },
  { label: "القيمة المالية (ر.س)", width: "w-[136px]" },
  { label: "نوع الوقود", width: "w-[86px]" },
  { label: "العنوان", width: "w-[155px]" },
  { label: "رقم الهاتف", width: "w-[117px]" },
  { label: "اسم السائق", width: "w-[101px]" },
  { label: "كود السائق", width: "w-[86px]" },
];

export const DataTableSection = (): JSX.Element => {
  const { 
    drivers, 
    pagination, 
    setDrivers, 
    setCurrentPage 
  } = useDrivers();

  // Initialize drivers data on component mount
  useEffect(() => {
    if (drivers.length === 0) {
      const convertedDrivers = convertMockDataToDrivers(mockDriversData);
      setDrivers(convertedDrivers);
    }
  }, [drivers.length, setDrivers]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="flex flex-col items-end gap-5 animate-fade-in">
      {/* Vehicle Stats Section */}
      <VehicleStatsSection stats={vehicleStats} />

      {/* Data Table Section */}
      <div className="flex flex-col items-start gap-5 relative self-stretch flex-[0_0_auto]">
        <div className="flex flex-col items-start gap-[var(--corner-radius-extra-large)] pt-[var(--corner-radius-large)] pr-[var(--corner-radius-large)] pb-[var(--corner-radius-large)] pl-[var(--corner-radius-large)] relative self-stretch w-full flex-[0_0_auto] bg-color-mode-surface-bg-screen rounded-[var(--corner-radius-large)] border-[0.3px] border-solid border-color-mode-text-icons-t-placeholder">
          {/* Table Header Actions */}
          <div className="flex flex-col items-end gap-[var(--corner-radius-extra-large)] relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
              <ActionButtons />
              <DriversCount count={drivers.length} />
            </div>
          </div>

          {/* Table Content */}
          <div className="flex flex-col items-start gap-7 relative self-stretch w-full flex-[0_0_auto]">
            {/* Table Header */}
            <div className="flex flex-col items-end gap-[var(--corner-radius-large)] relative self-stretch w-full flex-[0_0_auto]">
              <TableHeader columns={tableColumns} />

              {/* Table Rows */}
              <div className="flex flex-col items-end gap-0 relative self-stretch w-full flex-[0_0_auto]">
                {drivers.map((driver) => (
                  <DriverRow key={driver.id} driver={driver} />
                ))}
              </div>
            </div>

            {/* Pagination */}
            <Pagination 
              currentPage={pagination.currentPage}
              totalPages={pagination.totalPages}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
