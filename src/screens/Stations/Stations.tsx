import { DataTableSection } from "../../components/sections/DataTableSection";
import { serviceDistributerNavigationMenuData, userInfo, stationsData } from "../../constants/data";
import { LayoutSimple } from "../../components/shared/Layout/LayoutSimple";
import { Fuel } from "lucide-react";

// Station interface
interface Station {
  id: number;
  stationCode: string;
  stationName: string;
  address: string;
  phone: string;
  fuelTypes: string[];
  stationStatus: { active: boolean; text: string };
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
      key: "stationStatus", 
      label: "حالة المحطة",
      width: "flex-1 grow min-w-[120px]",
      priority: "high"
    },
    {
      key: "fuelTypes",
      label: "نوع الوقود",
      width: "flex-1 grow min-w-[150px]",
      priority: "low",
      render: (value: string[]) => (
        <div className="text-center">
          {value.join(', ')}
        </div>
      )
    },
    {
      key: "address",
      label: "العنوان",
      width: "flex-1 grow min-w-[100px]",
      priority: "medium"
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
    // Transform the data to match the new Station interface
    return Promise.resolve(
      stationsData.map((station) => ({
        id: station.id,
        stationCode: station.stationCode,
        stationName: station.stationName,
        address: station.location,
        phone: station.phone,
        fuelTypes: station.fuelTypes,
        stationStatus: station.accountStatus,
      }))
    );
  };

  // Handle status toggle
  const handleToggleStatus = (stationId: number) => {
    console.log(`Toggle status for station ${stationId}`);
    // TODO: Implement actual status toggle API call
  };

  return (
    <LayoutSimple
      headerProps={{
        title: "المحطات",
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
          title="المحطات"
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
          itemsPerPage={5}
        />
      </div>
    </LayoutSimple>
  );
};

