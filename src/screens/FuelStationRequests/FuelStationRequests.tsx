import { LayoutSimple } from '../../components/shared/Layout/LayoutSimple'
import { serviceDistributerNavigationMenuData, userInfo, fuelStationRequestsData } from '../../constants/data'
import { Fuel } from 'lucide-react'
import { DataTableSection } from '../../components/sections/DataTableSection'

// Fuel Station Request interface
interface FuelStationRequest {
  id: number;
  transactionNumber: string;
  stationName: string;
  clientName: string;
  workerName: string;
  fuelType: string;
  totalLiters: string;
  creationDate: string;
}

function FuelStationRequests() {
  // Define columns for fuel station requests table
  const fuelStationRequestColumns = [
    {
      key: "actions",
      label: "",
      width: "w-16 min-w-[60px]",
      priority: "high"
    },
    {
      key: "creationDate",
      label: "تاريخ الانشاء",
      width: "flex-1 grow min-w-[150px]",
      priority: "medium"
    },
    {
      key: "totalLiters",
      label: "اجمالي اللترات",
      width: "flex-1 grow min-w-[120px]",
      priority: "high"
    },
    {
      key: "fuelType",
      label: "نوع الوقود",
      width: "flex-1 grow min-w-[150px]",
      priority: "high"
    },
    {
      key: "workerName",
      label: "اسم العامل",
      width: "flex-1 grow min-w-[120px]",
      priority: "medium"
    },
    {
      key: "clientName",
      label: "اسم العميل",
      width: "flex-1 grow min-w-[120px]",
      priority: "medium"
    },
    {
      key: "stationName",
      label: "اسم المحطة",
      width: "flex-1 grow min-w-[100px]",
      priority: "high"
    },
    {
      key: "transactionNumber",
      label: "رقم المعاملة",
      width: "flex-1 grow min-w-[100px]",
      priority: "high"
    }
  ];

  // Fetch data function for fuel station requests
  const fetchFuelStationRequestsData = async (): Promise<FuelStationRequest[]> => {
    // TODO: Replace with actual API call when ready
    return Promise.resolve(fuelStationRequestsData as FuelStationRequest[]);
  };

  // Handle status toggle (if needed)
  const handleToggleStatus = (requestId: number) => {
    console.log(`Toggle status for fuel station request ${requestId}`);
    // TODO: Implement actual status toggle API call
  };

  return (
    <LayoutSimple 
      headerProps={{
        title: "طلبات محطات الوقود",
        titleIconSrc: <Fuel className="w-5 h-5 text-gray-500" />,
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
        <DataTableSection<FuelStationRequest>
          title="طلبات محطات الوقود"
          entityName="طلب محطة الوقود"
          entityNamePlural="طلبات محطات الوقود"
          icon={Fuel}
          columns={fuelStationRequestColumns}
          fetchData={fetchFuelStationRequestsData}
          onToggleStatus={handleToggleStatus}
          addNewRoute="/add-fuel-station-request"
          viewDetailsRoute={(id) => `/fuel-station-request/${id}`}
          loadingMessage="جاري تحميل بيانات طلبات محطات الوقود..."
          errorMessage="فشل في تحميل بيانات طلبات محطات الوقود. استخدام البيانات التجريبية."
          itemsPerPage={5}
          showTimeFilter={true}
        />
      </div>
    </LayoutSimple>
  )
}

export default FuelStationRequests