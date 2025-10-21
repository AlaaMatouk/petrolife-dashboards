import React from 'react'
import { serviceDistributerNavigationMenuData, userInfo } from '../../constants/data'
import { LayoutSimple } from '../../components/shared/Layout/LayoutSimple'
import { Eye, Car } from 'lucide-react'
import { InfoDisplay } from '../../components/sections/InfoDisplay'

export function FuelStationRequestsDetails() {
  // Mock fuel station request data - replace with actual data fetching
  const fuelRequestData = {
    transactionNumber: "214523625",
    stationName: "محطة الرياض",
    customerName: "محمد علي",
    workerName: "خالد عبدالله",
    fuelType: "ديزل",
    totalLiters: "15",
    totalPrice: "95",
    orderDate: "21 فبراير 2025 - 5:05 ص"
  };

  // Mock vehicle data - replace with actual data fetching
  const vehicleData = {
    vehicleNumber: "214523625",
    driverName: "محمد علي",
    vehicleType: "صغيرة",
    vehicleMake: "تيوتا",
    vehicleModel: "كرولا",
    manufactureYear: "2020"
  };

  // Define the fields configuration for fuel request
  // Using CSS Grid with 6 columns for flexible layouts
  // Order: Right to left as shown in the screenshot
  const fuelRequestFields = [
    // Row 1: 3 fields, each taking 2 columns (1/3 width each) - Right to left
    {
      key: 'customerName',
      label: 'اسم العميل',
      type: 'text' as const,
      span: 2 as const
    },
    {
      key: 'stationName',
      label: 'اسم المحطة',
      type: 'text' as const,
      span: 2 as const
    },
    {
      key: 'transactionNumber',
      label: 'رقم المعاملة',
      type: 'text' as const,
      span: 2 as const
    },
    // Row 2: 3 fields, each taking 2 columns (1/3 width each) - Right to left
    {
      key: 'totalLiters',
      label: 'اجمالي اللترات',
      type: 'text' as const,
      span: 2 as const
    },
    {
      key: 'fuelType',
      label: 'نوع الوقود',
      type: 'text' as const,
      span: 2 as const
    },
    {
      key: 'workerName',
      label: 'اسم العامل',
      type: 'text' as const,
      span: 2 as const
    },
    // Row 3: 2 fields, each taking 2 columns - Right to left
    {
      key: 'orderDate',
      label: 'تاريخ الطلب',
      type: 'text' as const,
      span: 2 as const
    },
    {
      key: 'totalPrice',
      label: 'السعر الكلي (ر.س)',
      type: 'text' as const,
      span: 2 as const
    }
  ];

  // Define the fields configuration for vehicle information
  // Using CSS Grid with 6 columns for flexible layouts
  // Order: Right to left as shown in the screenshot
  const vehicleFields = [
    // Row 1: 3 fields, each taking 2 columns (1/3 width each) - Right to left
    {
      key: 'vehicleType',
      label: 'نوع المركبة',
      type: 'text' as const,
      span: 2 as const
    },
    {
      key: 'driverName',
      label: 'اسم السائق',
      type: 'text' as const,
      span: 2 as const
    },
    {
      key: 'vehicleNumber',
      label: 'رقم المركبة',
      type: 'text' as const,
      span: 2 as const
    },
    // Row 2: 3 fields, each taking 2 columns (1/3 width each) - Right to left
    {
      key: 'manufactureYear',
      label: 'سنة الاصدار',
      type: 'text' as const,
      span: 2 as const
    },
    {
      key: 'vehicleModel',
      label: 'طراز المركبة',
      type: 'text' as const,
      span: 2 as const
    },
    {
      key: 'vehicleMake',
      label: 'ماركة المركبة',
      type: 'text' as const,
      span: 2 as const
    }
  ];

  const handleEdit = () => {
    // TODO: Implement edit functionality
    console.log("Edit fuel request data");
  };

  const handleVehicleEdit = () => {
    // TODO: Implement edit functionality
    console.log("Edit vehicle data");
  };

  return (
    <LayoutSimple
      headerProps={{
        title: "طلبات محطات الوقود / معاملة 2152368 ",
        titleIconSrc: <Eye className="w-5 h-5 text-gray-500" />,
        showSearch: true,
        searchProps: {
          onSearch: (query) => console.log("Search:", query),
        },
      }}
      sidebarProps={{
        sections: serviceDistributerNavigationMenuData.sections,
        topItems: serviceDistributerNavigationMenuData.topItems,
        bottomItems: serviceDistributerNavigationMenuData.bottomItems,
        userInfo: userInfo,       
      }}
    >
      <div className="flex flex-col w-full items-start gap-5">
        <InfoDisplay
          data={fuelRequestData}
          title="معلومات الطلب"
          titleIcon={<Eye className="w-5 h-5 text-gray-500" />}
          fields={fuelRequestFields}
          onEdit={handleEdit}
          showEditButton={true}
          editButtonText="تعديل البيانات"
          showBackButton={true}
        />

        <InfoDisplay
          data={vehicleData}
          title="معلومات المركبة"
          titleIcon={<Car className="w-5 h-5 text-gray-500" />}
          fields={vehicleFields}
          onEdit={handleVehicleEdit}
          showEditButton={true}
          editButtonText="تعديل البيانات"
          showBackButton={false}
        />
      </div>


    </LayoutSimple>
  )
}

