import { DataTableSection } from "../../../sections/DataTableSection";
import { Users } from "lucide-react";

// Define the Supervisor data type
interface Supervisor {
  id: number;
  supervisorName: string;
  supervisorCode: string;
  email: string;
  phone: string;
  city: string;
  accountStatus: {
    active: boolean;
    text: string;
  };
}

// Sample columns configuration - you can modify this based on your needs
// Note: Columns are defined in reverse order because the Table component reverses them for RTL
const supervisorColumns = [
  {
    key: "actions",
    priority: "high" as const,
  },
  {
    key: "accountStatus",
    label: "حالة الحساب",
    priority: "high" as const,
  },
  {
    key: "city",
    label: "المدينة",
    priority: "high" as const,
  },
  {
    key: "email",
    label: "البريد الإلكتروني",
    priority: "medium" as const,
  },
  {
    key: "phone",
    label: "رقم الهاتف",
    priority: "medium" as const,
  },
  {
    key: "supervisorName",
    label: "اسم المشرف",
    priority: "high" as const,
  },
  {
    key: "supervisorCode",
    label: "كود المشرف",
    priority: "high" as const,
  },
];

// Mock data fetching function - replace with real API call
const fetchSupervisors = async (): Promise<Supervisor[]> => {
  // Replace this with your actual data
  return [
    {
      id: 1,
      accountStatus: { active: true, text: "مفعل" },
      city: "جدة",
      email: "fatima.ali@petrolife.com",
      phone: "0507654321",
      supervisorName: "فاطمة علي",
      supervisorCode: "SUP001",
    },
    {
      id: 2,
      accountStatus: { active: true, text: "مفعل" },
      city: "الرياض",
      email: "mohammed.ahmed@petrolife.com",
      phone: "0501234567",
      supervisorName: "محمد أحمد",
      supervisorCode: "SUP002",
    },
    {
      id: 3,
      accountStatus: { active: false, text: "معطل" },
      city: "الدمام",
      email: "sara.hassan@petrolife.com",
      phone: "0503456789",
      supervisorName: "سارة حسن",
      supervisorCode: "SUP003",
    },
    {
      id: 4,
      accountStatus: { active: true, text: "مفعل" },
      city: "مكة المكرمة",
      email: "khalid.omar@petrolife.com",
      phone: "0509876543",
      supervisorName: "خالد عمر",
      supervisorCode: "SUP004",
    },
    {
      id: 5,
      accountStatus: { active: true, text: "مفعل" },
      city: "المدينة المنورة",
      email: "noura.salem@petrolife.com",
      phone: "0556789012",
      supervisorName: "نورة سالم",
      supervisorCode: "SUP005",
    },
    {
      id: 6,
      accountStatus: { active: true, text: "مفعل" },
      city: "الطائف",
      email: "abdullah.fahad@petrolife.com",
      phone: "0558901234",
      supervisorName: "عبدالله فهد",
      supervisorCode: "SUP006",
    },
    {
      id: 7,
      accountStatus: { active: false, text: "معطل" },
      city: "الخبر",
      email: "maha.nasser@petrolife.com",
      phone: "0502345678",
      supervisorName: "مها ناصر",
      supervisorCode: "SUP007",
    },
    {
      id: 8,
      accountStatus: { active: true, text: "مفعل" },
      city: "أبها",
      email: "yousef.zaid@petrolife.com",
      phone: "0554567890",
      supervisorName: "يوسف زيد",
      supervisorCode: "SUP008",
    },
    {
      id: 9,
      accountStatus: { active: true, text: "مفعل" },
      city: "تبوك",
      email: "layla.khalid@petrolife.com",
      phone: "0506789012",
      supervisorName: "ليلى خالد",
      supervisorCode: "SUP009",
    },
    {
      id: 10,
      accountStatus: { active: true, text: "مفعل" },
      city: "بريدة",
      email: "ibrahim.saeed@petrolife.com",
      phone: "0557890123",
      supervisorName: "إبراهيم سعيد",
      supervisorCode: "SUP010",
    },
    {
      id: 11,
      accountStatus: { active: false, text: "معطل" },
      city: "حائل",
      email: "amal.abdullah@petrolife.com",
      phone: "0508901234",
      supervisorName: "أمل عبدالله",
      supervisorCode: "SUP011",
    },
  ];
};

// Handle status toggle
const handleToggleStatus = (id: number) => {
  console.log(`Toggle status for supervisor with id: ${id}`);
  // Add your status toggle logic here
};

export const Supervisors = () => {
  return (
    <DataTableSection<Supervisor>
      title="قائمة المشرفين"
      entityName="مشرف"
      entityNamePlural="مشرفين"
      icon={Users}
      columns={supervisorColumns}
      fetchData={fetchSupervisors}
      onToggleStatus={handleToggleStatus}
      addNewRoute="/supervisors/add"
      viewDetailsRoute={(id) => `/supervisors/${id}`}
      loadingMessage="جاري تحميل بيانات المشرفين..."
      itemsPerPage={10}
      showTimeFilter={false}
      showAddButton={true}
    />
  );
};
