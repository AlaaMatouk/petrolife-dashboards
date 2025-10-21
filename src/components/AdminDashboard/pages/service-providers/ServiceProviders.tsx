import { DataTableSection } from "../../../sections/DataTableSection";
import { Truck } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Define the ServiceProvider data type
export interface ServiceProvider {
  id: number;
  clientCode: string;
  providerName: string;
  type: string;
  phone: string;
  email: string;
  stations: number;
  sales: string;
  accountStatus: { active: boolean; text: string };
  logo?: string;
}

// Sample columns configuration - you can modify this based on your needs
// Note: Columns are defined in reverse order because the Table component reverses them for RTL
const serviceProviderColumns = [
  {
    key: "actions",
    priority: "high" as const,
  },
  {
    key: "accountStatus",
    label: "حاله الحساب",
    priority: "high" as const,
  },
  {
    key: "sales",
    label: "المبيعات",
    priority: "high" as const,
  },
  {
    key: "stations",
    label: "المحطات",
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
    key: "type",
    label: "نوع المزود",
    priority: "medium" as const,
  },
  {
    key: "providerName",
    label: "اسم مزود الخدمة",
    priority: "high" as const,
  },
  {
    key: "clientCode",
    label: "كود العميل",
    priority: "high" as const,
  },
];

// Mock data - exported for use in other components
export const mockServiceProvidersData: ServiceProvider[] = [
  {
    id: 1,
    clientCode: "SP001",
    providerName: "مركز التوزيع الأول",
    type: "مزود توزيع",
    phone: "0501234567",
    email: "info@distribution1.com",
    stations: 15,
    sales: "30",
    accountStatus: { active: true, text: "مفعل" },
  },
  {
    id: 2,
    clientCode: "SP002",
    providerName: "مركز التوزيع الثاني",
    type: "مزود توزيع",
    phone: "0507654321",
    email: "contact@distribution2.com",
    stations: 12,
    sales: "30",
    accountStatus: { active: true, text: "مفعل" },
  },
  {
    id: 3,
    clientCode: "SP003",
    providerName: "مركز الصيانة المتقدم",
    type: "مزود صيانة",
    phone: "0503456789",
    email: "info@maintenance.com",
    stations: 8,
    sales: "30",
    accountStatus: { active: true, text: "مفعل" },
  },
  {
    id: 4,
    clientCode: "SP004",
    providerName: "مركز النقل السريع",
    type: "مزود نقل",
    phone: "0509876543",
    email: "contact@transport.com",
    stations: 20,
    sales: "30",
    accountStatus: { active: true, text: "مفعل" },
  },
  {
    id: 5,
    clientCode: "SP005",
    providerName: "مركز التوزيع الشرقي",
    type: "مزود توزيع",
    phone: "0556789012",
    email: "info@eastern.com",
    stations: 10,
    sales: "30",
    accountStatus: { active: false, text: "معلق" },
  },
  {
    id: 6,
    clientCode: "SP006",
    providerName: "مركز الخدمات اللوجستية",
    type: "مزود لوجستي",
    phone: "0558901234",
    email: "contact@logistics.com",
    stations: 18,
    sales: "30",
    accountStatus: { active: true, text: "مفعل" },
  },
  {
    id: 7,
    clientCode: "SP007",
    providerName: "مركز التوزيع الغربي",
    type: "مزود توزيع",
    phone: "0502345678",
    email: "info@western.com",
    stations: 14,
    sales: "30",
    accountStatus: { active: true, text: "مفعل" },
  },
  {
    id: 8,
    clientCode: "SP008",
    providerName: "مركز الصيانة الشاملة",
    type: "مزود صيانة",
    phone: "0554567890",
    email: "contact@fullmaintenance.com",
    stations: 6,
    sales: "30",
    accountStatus: { active: true, text: "مفعل" },
  },
  {
    id: 9,
    clientCode: "SP009",
    providerName: "مركز التوزيع الشمالي",
    type: "مزود توزيع",
    phone: "0506789012",
    email: "info@northern.com",
    stations: 11,
    sales: "30",
    accountStatus: { active: false, text: "معلق" },
  },
  {
    id: 10,
    clientCode: "SP010",
    providerName: "مركز النقل المتخصص",
    type: "مزود نقل",
    phone: "0557890123",
    email: "contact@specialized.com",
    stations: 16,
    sales: "30",
    accountStatus: { active: true, text: "مفعل" },
  },
  {
    id: 11,
    clientCode: "SP011",
    providerName: "مركز التوزيع المركزي",
    type: "مزود توزيع",
    phone: "0508901234",
    email: "info@central.com",
    stations: 22,
    sales: "30",
    accountStatus: { active: true, text: "مفعل" },
  },
  {
    id: 12,
    clientCode: "SP012",
    providerName: "مركز الخدمات الصناعية",
    type: "مزود صناعي",
    phone: "0559012345",
    email: "contact@industrial.com",
    stations: 9,
    sales: "30",
    accountStatus: { active: true, text: "مفعل" },
  },
];

// Fetch service providers data - replace with actual Firestore fetch when ready
const fetchServiceProviders = async (): Promise<ServiceProvider[]> => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500));
  return mockServiceProvidersData;
};

// Handle status toggle
const handleToggleStatus = (id: number) => {
  console.log(`Toggle status for service provider with id: ${id}`);
  // Add your status toggle logic here
};

export const ServiceProviders = () => {
  const navigate = useNavigate();

  // Calculate count of pending join requests (معلق status)
  const pendingCount = mockServiceProvidersData.filter(
    (provider) => !provider.accountStatus.active
  ).length;

  const handleJoinRequestsClick = () => {
    navigate("/service-providers/add");
  };

  return (
    <DataTableSection<ServiceProvider>
      title="مزودي الخدمة"
      entityName="مزود الخدمة"
      entityNamePlural="مزودي الخدمة"
      icon={Truck}
      columns={serviceProviderColumns}
      fetchData={fetchServiceProviders}
      onToggleStatus={handleToggleStatus}
      addNewRoute="/service-providers/add"
      viewDetailsRoute={(id) => `/service-providers/${id}`}
      loadingMessage="جاري تحميل بيانات مزودي الخدمة"
      itemsPerPage={10}
      showTimeFilter={false}
      showAddButton={true}
      customFilterButton={{
        label: "سجل طلبات الانضمام",
        count: pendingCount,
        onClick: handleJoinRequestsClick,
      }}
    />
  );
};

