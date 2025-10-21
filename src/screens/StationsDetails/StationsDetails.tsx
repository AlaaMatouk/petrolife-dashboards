import { LayoutSimple } from '../../components/shared/Layout'
import { serviceDistributerNavigationMenuData, userInfo } from '../../constants/data'
import { Eye, UserRound } from 'lucide-react'
import { InfoDisplay } from '../../components/sections/InfoDisplay'
import { DataTableSection } from '../../components/sections/DataTableSection'
import ConsumptionSection from '../../components/sections/ConsumptionSection'

// Station Worker interface
interface StationWorker {
  id: number;
  workerCode: string;
  workerName: string;
  phone: string;
  email: string;
  accountStatus: { active: boolean; text: string };
}

export const StationsDetails = () => {
  // Mock station data - replace with actual data fetching
  const stationData = {
    name: "محطة الرياض",
    email: "Riad@gmail.com",
    phone: "23652368422536",
    address: "12 شارع الوفاء العام، متفرع من ميدان النهضة ، محور الأحرار، مدينة الرياض",
    location: "hdiemsjksjiwomxnsjwlsjkaoskdjdkje",
    secretNumber: "1257863",
    products: "بنزين 91 (15ر.س / لتر) - بنزين 95 (20 ر.س / لتر) - ديزل (10ر.س / لتر)"
  };

  // Define the fields configuration for station
  // Using CSS Grid with 6 columns for flexible layouts
  // Order: Right to left as shown in the screenshot
  const stationFields = [
    // Row 1: 3 fields, each taking 2 columns (1/3 width each) - Right to left
    {
      key: 'phone',
      label: 'رقم الهاتف',
      type: 'phone' as const,
      span: 2 as const
    },
    {
      key: 'email',
      label: 'البريد الالكتروني',
      type: 'email' as const,
      span: 2 as const
    },
    {
      key: 'name',
      label: 'اسم المحطة',
      type: 'text' as const,
      span: 2 as const
    },
    // Row 2: Full width (6 columns)
    {
      key: 'address',
      label: 'العنوان',
      type: 'address' as const,
      span: 6 as const
    },
    // Row 3: Full width (6 columns)
    {
      key: 'location',
      label: 'الموقع',
      type: 'text' as const,
      span: 6 as const
    },
    // Row 4: 2 fields, each taking 3 columns (1/2 width each) - Right to left
    {
      key: 'products',
      label: 'منتجات المحطة',
      type: 'text' as const,
      span: 3 as const
    },
    {
      key: 'secretNumber',
      label: 'الرقم السري',
      type: 'text' as const,
      span: 3 as const
    }
  ];

  const handleEdit = () => {
    // TODO: Implement edit functionality
    console.log("Edit station data");
  };

  // Mock station workers data - replace with actual data fetching
  const stationWorkersData: StationWorker[] = [
    {
      id: 1,
      workerCode: "21A254",
      workerName: "أحمد محمد",
      phone: "00965284358",
      email: "ahmedmohamed@gmail.com",
      accountStatus: { active: true, text: "مفعل" }
    },
    {
      id: 2,
      workerCode: "21A254",
      workerName: "أحمد محمد",
      phone: "00965284358",
      email: "ahmedmohamed@gmail.com",
      accountStatus: { active: true, text: "مفعل" }
    },
    {
      id: 3,
      workerCode: "21A254",
      workerName: "أحمد محمد",
      phone: "00965284358",
      email: "ahmedmohamed@gmail.com",
      accountStatus: { active: true, text: "مفعل" }
    },
    {
      id: 4,
      workerCode: "21A254",
      workerName: "أحمد محمد",
      phone: "00965284358",
      email: "ahmedmohamed@gmail.com",
      accountStatus: { active: false, text: "معطل" }
    },
    {
      id: 5,
      workerCode: "21A254",
      workerName: "أحمد محمد",
      phone: "00965284358",
      email: "ahmedmohamed@gmail.com",
      accountStatus: { active: false, text: "معطل" }
    },
    {
      id: 6,
      workerCode: "21A254",
      workerName: "أحمد محمد",
      phone: "00965284358",
      email: "ahmedmohamed@gmail.com",
      accountStatus: { active: true, text: "مفعل" }
    },
    {
      id: 7,
      workerCode: "21A254",
      workerName: "أحمد محمد",
      phone: "00965284358",
      email: "ahmedmohamed@gmail.com",
      accountStatus: { active: true, text: "مفعل" }
    },
    {
      id: 8,
      workerCode: "21A254",
      workerName: "أحمد محمد",
      phone: "00965284358",
      email: "ahmedmohamed@gmail.com",
      accountStatus: { active: true, text: "مفعل" }
    },
    {
      id: 9,
      workerCode: "21A254",
      workerName: "أحمد محمد",
      phone: "00965284358",
      email: "ahmedmohamed@gmail.com",
      accountStatus: { active: false, text: "معطل" }
    },
    {
      id: 10,
      workerCode: "21A254",
      workerName: "أحمد محمد",
      phone: "00965284358",
      email: "ahmedmohamed@gmail.com",
      accountStatus: { active: false, text: "معطل" }
    }
  ];

  // Define columns for station workers table
  const stationWorkerColumns = [
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
      key: "email",
      label: "البريد الألكتروني",
      width: "flex-1 grow min-w-[150px]",
      priority: "low"
    },
    {
      key: "phone",
      label: "رقم الهاتف",
      width: "flex-1 grow min-w-[120px]",
      priority: "medium"
    },
    {
      key: "workerName",
      label: "اسم العامل",
      width: "flex-1 grow min-w-[120px]",
      priority: "high"
    },
    {
      key: "workerCode",
      label: "كود العامل",
      width: "flex-1 grow min-w-[100px]",
      priority: "high"
    }
  ];

  // Fetch data function for station workers
  const fetchStationWorkersData = async (): Promise<StationWorker[]> => {
    // TODO: Replace with actual API call when ready
    return Promise.resolve(stationWorkersData);
  };

  // Handle status toggle
  const handleToggleStatus = (workerId: number) => {
    console.log(`Toggle status for worker ${workerId}`);
    // TODO: Implement actual status toggle API call
  };

  return (
    <LayoutSimple
      headerProps={{
        title: "المحطات / محطة الرياض",
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
          data={stationData}
          title="معلومات المحطة"
          titleIcon={<Eye className="w-5 h-5 text-gray-500" />}
          fields={stationFields}
          onEdit={handleEdit}
          showEditButton={true}
          editButtonText="تعديل البيانات"
          showBackButton={true}
        />
        <ConsumptionSection />
        
        <DataTableSection<StationWorker>
          title="عمال المحطة"
          entityName="عامل المحطة"
          entityNamePlural="عمال المحطة"
          icon={UserRound}
          columns={stationWorkerColumns}
          fetchData={fetchStationWorkersData}
          onToggleStatus={handleToggleStatus}
          addNewRoute="/add-station-worker"
          viewDetailsRoute={(id) => `/service-distributer-station-worker/${id}`}
          loadingMessage="جاري تحميل بيانات عمال المحطة..."
          errorMessage="فشل في تحميل بيانات عمال المحطة. استخدام البيانات التجريبية."
          itemsPerPage={5}
          showTimeFilter={false}
        />
      </div>
    </LayoutSimple>
  )
}