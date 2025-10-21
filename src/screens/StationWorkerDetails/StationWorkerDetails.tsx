import { LayoutSimple } from '../../components/shared/Layout/LayoutSimple'
import { serviceDistributerNavigationMenuData, userInfo } from '../../constants/data'
import { UserRound, Calendar } from 'lucide-react'
import { InfoDisplay } from '../../components/sections/InfoDisplay'
import { DataTableSection } from '../../components/sections/DataTableSection'

// Worker Record interface
interface WorkerRecord {
  id: number;
  transactionNumber: string;
  stationName: string;
  clientName: string;
  fuelType: string;
  totalLiters: string;
  totalPrice: string;
  creationDate: string;
}

function StationWorkerDetails() {
  // Mock worker data - replace with actual data fetching
  const workerData = {
    name: "محمد أحمد",
    email: "hesham@gmail.com",
    phone: "+96625458236",
    city: "الرياض",
    address: "12 ش الصالحين ، الرياض",
    image: "hsgndkmmcjhd.jpg",
    employeeId: "2153684"
  };

  // Define the fields configuration for station worker
  // Order: Right to left as shown in the screenshot
  const workerFields = [
    // Row 1: Right to left
    {
      key: 'name',
      label: 'اسم العامل',
      type: 'text' as const,
      span: 2 as const

    },
    {
      key: 'email',
      label: 'البريد الالكتروني',
      type: 'email' as const,
      span: 2 as const

    },
    {
      key: 'phone',
      label: 'رقم الهاتف',
      type: 'phone' as const,
      span: 2 as const

    },
    // Row 2: Right to left
    {
      key: 'city',
      label: 'المدينة',
      type: 'text' as const,
      span: 2 as const

    },
    {
      key: 'address',
      label: 'العنوان',
      type: 'address' as const,
      span: 2 as const

    },
    {
      key: 'image',
      label: 'صورة العامل',
      type: 'image' as const,
      span: 2 as const

    },
    // Row 3: Right to left (الرقم الوظيفي should be on the right)
    {
      key: 'employeeId',
      label: 'الرقم الوظيفي',
      type: 'text' as const,
      span: 2 as const

    }
  ];

  const handleEdit = () => {
    // TODO: Implement edit functionality
    console.log("Edit worker data");
  };

  // Mock worker records data - replace with actual data fetching
  const workerRecordsData: WorkerRecord[] = [
    {
      id: 1,
      transactionNumber: "TXN001",
      stationName: "محطة الرياض الرئيسية",
      clientName: "أحمد محمد",
      fuelType: "بنزين 95",
      totalLiters: "50",
      totalPrice: "125.50",
      creationDate: "2024-01-15"
    },
    {
      id: 2,
      transactionNumber: "TXN002",
      stationName: "محطة جدة الشمالية",
      clientName: "سارة أحمد",
      fuelType: "ديزل",
      totalLiters: "75",
      totalPrice: "187.25",
      creationDate: "2024-01-14"
    },
    {
      id: 3,
      transactionNumber: "TXN003",
      stationName: "محطة الرياض الجنوبية",
      clientName: "محمد علي",
      fuelType: "بنزين 91",
      totalLiters: "30",
      totalPrice: "75.00",
      creationDate: "2024-01-13"
    },
    {
      id: 4,
      transactionNumber: "TXN004",
      stationName: "محطة الرياض الجنوبية",
      clientName: "محمد علي",
      fuelType: "بنزين 91",
      totalLiters: "30",
      totalPrice: "75.00",
      creationDate: "2024-01-13"
    },
    {
      id: 5,
      transactionNumber: "TXN005",
      stationName: "محطة الرياض الجنوبية",
      clientName: "محمد علي",
      fuelType: "بنزين 91",
      totalLiters: "30",
      totalPrice: "75.00",
      creationDate: "2024-01-13"
    },
    {
      id: 6,
      transactionNumber: "TXN006",
      stationName: "محطة الرياض الجنوبية",
      clientName: "محمد علي",
      fuelType: "بنزين 91",
      totalLiters: "30",
      totalPrice: "75.00",
      creationDate: "2024-01-13"
    },
    {
      id: 7,
      transactionNumber: "TXN007",
      stationName: "محطة الرياض الجنوبية",
      clientName: "محمد علي",
      fuelType: "بنزين 91",
      totalLiters: "30",
      totalPrice: "75.00",
      creationDate: "2024-01-13"
    },
    {
      id: 8,
      transactionNumber: "TXN008",
      stationName: "محطة الرياض الجنوبية",
      clientName: "محمد علي",
      fuelType: "بنزين 91",
      totalLiters: "30",
      totalPrice: "75.00",
      creationDate: "2024-01-13"
    }
  ];

  // Define columns for worker records table
  const workerRecordColumns = [
    {
      key: "actions",
      label: "",
      width: "w-16 min-w-[60px]",
      priority: "high"
    },
    {
      key: "creationDate",
      label: "تاريخ الانشاء",
      width: "flex-1 grow min-w-[120px]",
      priority: "medium"
    },
    {
      key: "totalPrice",
      label: "السعر الكلي (رس)",
      width: "flex-1 grow min-w-[120px]",
      priority: "high"
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
      width: "flex-1 grow min-w-[120px]",
      priority: "high"
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
      width: "flex-1 grow min-w-[150px]",
      priority: "high"
    },
    {
      key: "transactionNumber",
      label: "رقم المعاملة",
      width: "flex-1 grow min-w-[120px]",
      priority: "high"
    }
  ];

  // Fetch data function for worker records
  const fetchWorkerRecordsData = async (): Promise<WorkerRecord[]> => {
    // TODO: Replace with actual API call when ready
    return Promise.resolve(workerRecordsData);
  };

  // Handle status toggle (if needed)
  const handleToggleStatus = (recordId: number) => {
    console.log(`Toggle status for worker record ${recordId}`);
    // TODO: Implement actual status toggle API call
  };

  return (
    <LayoutSimple
      headerProps={{
        title: "عمال المحطات / محمد أحمد ",
        titleIconSrc:<img src="/src/assets/imgs/icons/user-group.svg" />
        ,
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
          data={workerData}
          title="معلومات العامل"
          titleIcon={<UserRound className="w-5 h-5 text-gray-500" />}
          fields={workerFields}
          onEdit={handleEdit}
          showEditButton={true}
          editButtonText="تعديل البيانات"
          showBackButton={true}
        />
        
        <DataTableSection<WorkerRecord>
          title="سجل العامل"
          entityName="سجل العامل"
          entityNamePlural="سجلات العامل"
          icon={Calendar}
          columns={workerRecordColumns}
          fetchData={fetchWorkerRecordsData}
          onToggleStatus={handleToggleStatus}
          // addNewRoute not provided to hide add button
          viewDetailsRoute={(id) => `/worker-record/${id}`}
          loadingMessage="جاري تحميل بيانات سجل العامل..."
          errorMessage="فشل في تحميل بيانات سجل العامل."
          itemsPerPage={5}
          showTimeFilter={true}
          showExportButton={false} // Hide export button
          showAddButton={false} // Hide add button
        />
      </div>
    </LayoutSimple>
  )
}

export default StationWorkerDetails