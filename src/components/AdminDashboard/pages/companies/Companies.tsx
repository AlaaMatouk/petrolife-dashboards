import { DataTableSection } from "../../../sections/DataTableSection";
import { Building2 } from "lucide-react";
import { fetchAllCompaniesWithCounts } from "../../../../services/firestore";

// Define the Company data type
export interface Company {
  id: string;
  companyName: string;
  companyCode: string;
  cars: number;
  drivers: number;
  subscriptions: string;
  email: string;
  phone: string;
  city: string;
}

// Sample columns configuration - you can modify this based on your needs
// Note: Columns are defined in reverse order because the Table component reverses them for RTL
const companyColumns = [
  {
    key: "actions",
    priority: "high" as const,
  },
  {
    key: "subscriptions",
    label: "الاشتراكات",
    priority: "high" as const,
  },
  {
    key: "drivers",
    label: "السائقين",
    priority: "high" as const,
  },
  {
    key: "cars",
    label: "السيارات",
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
    key: "companyName",
    label: "اسم الشركة",
    priority: "high" as const,
  },
  {
    key: "companyCode",
    label: "كود الشركة",
    priority: "high" as const,
  },
];

// Mock data - exported for use in other components
export const mockCompaniesData: Company[] = [
  {
    id: 1,
    subscriptions: "كلاسيك",
    drivers: 14,
    cars: 14,
    city: "جدة",
    email: "contact@techcorp.com",
    phone: "0507654321",
    companyName: "شركة التقنية المتقدمة",
    companyCode: "COMP001",
  },
  {
    id: 2,
    subscriptions: "بريميوم",
    drivers: 28,
    cars: 32,
    city: "الرياض",
    email: "info@petroservices.com",
    phone: "0501234567",
    companyName: "شركة الخدمات البترولية",
    companyCode: "COMP002",
  },
  {
    id: 3,
    subscriptions: "كلاسيك",
    drivers: 18,
    cars: 20,
    city: "الدمام",
    email: "contact@logistics.com",
    phone: "0503456789",
    companyName: "شركة اللوجستيات الوطنية",
    companyCode: "COMP003",
  },
  {
    id: 4,
    subscriptions: "بريميوم بلس",
    drivers: 45,
    cars: 50,
    city: "مكة المكرمة",
    email: "info@transport.com",
    phone: "0509876543",
    companyName: "شركة النقل السريع",
    companyCode: "COMP004",
  },
  {
    id: 5,
    subscriptions: "كلاسيك",
    drivers: 12,
    cars: 15,
    city: "المدينة المنورة",
    email: "contact@energy.com",
    phone: "0556789012",
    companyName: "شركة الطاقة المتجددة",
    companyCode: "COMP005",
  },
  {
    id: 6,
    subscriptions: "بريميوم",
    drivers: 35,
    cars: 38,
    city: "الطائف",
    email: "info@industrial.com",
    phone: "0558901234",
    companyName: "شركة الصناعات الثقيلة",
    companyCode: "COMP006",
  },
  {
    id: 7,
    subscriptions: "كلاسيك",
    drivers: 22,
    cars: 25,
    city: "الخبر",
    email: "contact@trading.com",
    phone: "0502345678",
    companyName: "شركة التجارة العالمية",
    companyCode: "COMP007",
  },
  {
    id: 8,
    subscriptions: "بريميوم بلس",
    drivers: 52,
    cars: 58,
    city: "أبها",
    email: "info@construction.com",
    phone: "0554567890",
    companyName: "شركة المقاولات والإنشاءات",
    companyCode: "COMP008",
  },
  {
    id: 9,
    subscriptions: "بريميوم",
    drivers: 30,
    cars: 33,
    city: "تبوك",
    email: "contact@mining.com",
    phone: "0506789012",
    companyName: "شركة التعدين والمحاجر",
    companyCode: "COMP009",
  },
  {
    id: 10,
    subscriptions: "كلاسيك",
    drivers: 16,
    cars: 18,
    city: "بريدة",
    email: "info@agricultural.com",
    phone: "0557890123",
    companyName: "شركة الزراعة الحديثة",
    companyCode: "COMP010",
  },
  {
    id: 11,
    subscriptions: "بريميوم",
    drivers: 25,
    cars: 28,
    city: "حائل",
    email: "contact@distribution.com",
    phone: "0508901234",
    companyName: "شركة التوزيع والتسويق",
    companyCode: "COMP011",
  },
  {
    id: 12,
    subscriptions: "بريميوم بلس",
    drivers: 48,
    cars: 55,
    city: "الجبيل",
    email: "info@chemical.com",
    phone: "0559012345",
    companyName: "شركة الصناعات الكيميائية",
    companyCode: "COMP012",
  },
  {
    id: 13,
    subscriptions: "كلاسيك",
    drivers: 10,
    cars: 12,
    city: "ينبع",
    email: "contact@maritime.com",
    phone: "0501234789",
    companyName: "شركة الشحن البحري",
    companyCode: "COMP013",
  },
];

// Fetch real companies data from Firestore with counts
const fetchCompanies = async (): Promise<Company[]> => {
  return await fetchAllCompaniesWithCounts();
};

// Handle status toggle
const handleToggleStatus = (id: string) => {
  console.log(`Toggle status for company with id: ${id}`);
  // Add your status toggle logic here
};

export const Companies = () => {
  return (
    <DataTableSection<Company>
      title="قائمة الشركات"
      entityName="شركة"
      entityNamePlural="شركات"
      icon={Building2}
      columns={companyColumns}
      fetchData={fetchCompanies}
      onToggleStatus={handleToggleStatus}
      addNewRoute="/companies/add"
      viewDetailsRoute={(id) => `/companies/${id}`}
      loadingMessage="جاري تحميل بيانات الشركات..."
      itemsPerPage={10}
      showTimeFilter={false}
      showAddButton={true}
    />
  );
};
