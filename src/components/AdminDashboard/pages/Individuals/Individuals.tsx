import { DataTableSection } from "../../../sections/DataTableSection";
import { Users } from "lucide-react";

/**
 * @typedef {Object} Individual
 * @property {number} id
 * @property {string} individualName
 * @property {string} individualCode
 * @property {number} cars
 * @property {number} drivers
 * @property {string} subscriptions
 * @property {string} email
 * @property {string} phone
 * @property {string} city
 * @property {{active: boolean, text: string}} accountStatus
 *
 */

// Sample columns configuration - you can modify this based on your needs
// Note: Columns are defined in reverse order because the Table component reverses them for RTL
const individualColumns = [
  {
    key: "actions",
    priority: "high",
  },
  {
    key: "accountStatus",
    label: "حالة الحساب",
    priority: "high",
  },
  {
    key: "city",
    label: "المدينة",
    priority: "high",
  },
  {
    key: "email",
    label: "البريد الإلكتروني",
    priority: "medium",
  },
  {
    key: "phone",
    label: "رقم الهاتف",
    priority: "medium",
  },
  {
    key: "individualName",
    label: "اسم العميل",
    priority: "high",
  },
  {
    key: "individualCode",
    label: "كود العميل",
    priority: "high",
  },
];

// Mock data - exported for use in other components
export const mockIndividualsData = [
  {
    id: 1,
    subscriptions: "كلاسيك",
    drivers: 2,
    cars: 3,
    city: "جدة",
    email: "ahmed.ali@email.com",
    phone: "0507654321",
    individualName: "أحمد علي محمد",
    individualCode: "IND001",
    accountStatus: { active: true, text: "مفعل" },
  },
  {
    id: 2,
    subscriptions: "بريميوم",
    drivers: 5,
    cars: 6,
    city: "الرياض",
    email: "mohammed.hassan@email.com",
    phone: "0501234567",
    individualName: "محمد حسن عبدالله",
    individualCode: "IND002",
    accountStatus: { active: true, text: "مفعل" },
  },
  {
    id: 3,
    subscriptions: "كلاسيك",
    drivers: 3,
    cars: 4,
    city: "الدمام",
    email: "salem.omar@email.com",
    phone: "0503456789",
    individualName: "سالم عمر خالد",
    individualCode: "IND003",
    accountStatus: { active: false, text: "معطل" },
  },
  {
    id: 4,
    subscriptions: "بريميوم بلس",
    drivers: 8,
    cars: 10,
    city: "مكة المكرمة",
    email: "abdullah.fahad@email.com",
    phone: "0509876543",
    individualName: "عبدالله فهد سعود",
    individualCode: "IND004",
    accountStatus: { active: true, text: "مفعل" },
  },
  {
    id: 5,
    subscriptions: "كلاسيك",
    drivers: 1,
    cars: 2,
    city: "المدينة المنورة",
    email: "khaled.ibrahim@email.com",
    phone: "0556789012",
    individualName: "خالد إبراهيم أحمد",
    individualCode: "IND005",
    accountStatus: { active: true, text: "مفعل" },
  },
  {
    id: 6,
    subscriptions: "بريميوم",
    drivers: 4,
    cars: 5,
    city: "الطائف",
    email: "faisal.nasser@email.com",
    phone: "0558901234",
    individualName: "فيصل ناصر عبدالعزيز",
    individualCode: "IND006",
    accountStatus: { active: false, text: "معطل" },
  },
  {
    id: 7,
    subscriptions: "كلاسيك",
    drivers: 2,
    cars: 3,
    city: "الخبر",
    email: "sultan.rashid@email.com",
    phone: "0502345678",
    individualName: "سلطان راشد محمد",
    individualCode: "IND007",
    accountStatus: { active: true, text: "مفعل" },
  },
  {
    id: 8,
    subscriptions: "بريميوم بلس",
    drivers: 6,
    cars: 8,
    city: "أبها",
    email: "turki.saeed@email.com",
    phone: "0554567890",
    individualName: "تركي سعيد عبدالله",
    individualCode: "IND008",
    accountStatus: { active: true, text: "مفعل" },
  },
  {
    id: 9,
    subscriptions: "بريميوم",
    drivers: 3,
    cars: 4,
    city: "تبوك",
    email: "nawaf.abdullah@email.com",
    phone: "0506789012",
    individualName: "نواف عبدالله فهد",
    individualCode: "IND009",
    accountStatus: { active: false, text: "معطل" },
  },
  {
    id: 10,
    subscriptions: "كلاسيك",
    drivers: 2,
    cars: 2,
    city: "بريدة",
    email: "yazeed.khalid@email.com",
    phone: "0557890123",
    individualName: "يزيد خالد سلطان",
    individualCode: "IND010",
    accountStatus: { active: true, text: "مفعل" },
  },
];

// Mock data fetching function - replace with real API call
const fetchIndividuals = async () => {
  return mockIndividualsData;
};

// Handle status toggle
const handleToggleStatus = (id: number) => {
  console.log(`Toggle status for individual with id: ${id}`);
  // Add your status toggle logic here
};

export const Individuals = () => {
  return (
    <DataTableSection
      title="قائمة الأفراد"
      entityName="فرد"
      entityNamePlural="أفراد"
      icon={Users}
      columns={individualColumns}
      fetchData={fetchIndividuals}
      onToggleStatus={handleToggleStatus}
      addNewRoute="/individuals/add"
      viewDetailsRoute={(id) => `/individuals/${id}`}
      loadingMessage="جاري تحميل بيانات الأفراد..."
      itemsPerPage={10}
      showTimeFilter={false}
      showAddButton={true}
    />
  );
};
