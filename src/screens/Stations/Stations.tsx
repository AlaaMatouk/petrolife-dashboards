import { DataTableSection } from "../../components/shared/DataTableSection";
import { serviceDistributerNavigationMenuData, userInfo, stationsData } from "../../constants/data";
import { LayoutSimple } from "../../components/shared/Layout/LayoutSimple";
import { Fuel } from "lucide-react";

// Station interface
interface Station {
  id: number;
  stationCode: string;
  stationName: string;
  location: string;
  city: string;
  phone: string;
  emailAddress: string;
  managerName: string;
  fuelTypes: string[];
  workersCount: number;
  accountStatus: { active: boolean; text: string };
}

export const Stations = (): JSX.Element => {
  // Define columns for stations table
  const stationColumns = [
    {
      key: "actions",
      label: "",
      width: "w-16 min-w-[60px]",
      priority: "high"
    },
    {
      key: "accountStatus",
      label: "حالة الحساب",
      width: "flex-1 grow min-w-[120px]",
      priority: "high"
    },
    {
      key: "workersCount",
      label: "عدد العمال",
      width: "flex-1 grow min-w-[100px]",
      priority: "medium",
      render: (value: number) => (
        <div className="text-center">
          <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
            {value}
          </span>
        </div>
      )
    },
    {
      key: "fuelTypes",
      label: "أنواع الوقود",
      width: "flex-1 grow min-w-[150px]",
      priority: "low",
      render: (value: string[]) => (
        <div className="flex flex-wrap gap-1 justify-center">
          {value.map((fuel, index) => (
            <span key={index} className="px-2 py-0.5 bg-green-50 text-green-700 rounded text-xs">
              {fuel}
            </span>
          ))}
        </div>
      )
    },
    {
      key: "managerName",
      label: "مدير المحطة",
      width: "flex-1 grow min-w-[120px]",
      priority: "medium"
    },
    {
      key: "city",
      label: "المدينة",
      width: "flex-1 grow min-w-[100px]",
      priority: "medium"
    },
    {
      key: "emailAddress",
      label: "البريد الإلكتروني",
      width: "flex-1 grow min-w-[180px]",
      priority: "low"
    },
    {
      key: "phone",
      label: "رقم الهاتف",
      width: "flex-1 grow min-w-[120px]",
      priority: "low"
    },
    {
      key: "stationName",
      label: "اسم المحطة",
      width: "flex-1 grow min-w-[150px]",
      priority: "high"
    },
    {
      key: "stationCode",
      label: "كود المحطة",
      width: "flex-1 grow min-w-[100px]",
      priority: "high"
    }
  ];

  // Fetch data function for stations
  const fetchStationsData = async (): Promise<Station[]> => {
    // TODO: Replace with actual API call when ready
    return Promise.resolve(stationsData as Station[]);
  };

  // Handle status toggle
  const handleToggleStatus = (stationId: number) => {
    console.log(`Toggle status for station ${stationId}`);
    // TODO: Implement actual status toggle API call
  };

  return (
    <LayoutSimple
      headerProps={{
        title: "محطات الوقود",
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
        <DataTableSection<Station>
          title="محطات الوقود"
          entityName="المحطة"
          entityNamePlural="المحطات"
          icon={Fuel}
          columns={stationColumns}
          fetchData={fetchStationsData}
          onToggleStatus={handleToggleStatus}
          addNewRoute="/addstation"
          viewDetailsRoute={(id) => `/station/${id}`}
          loadingMessage="جاري تحميل بيانات المحطات..."
          errorMessage="فشل في تحميل بيانات المحطات. استخدام البيانات التجريبية."
        />
      </div>
    </LayoutSimple>
  );
};

