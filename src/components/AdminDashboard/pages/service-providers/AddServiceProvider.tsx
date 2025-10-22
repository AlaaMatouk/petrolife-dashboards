import { FileText } from "lucide-react";
import { DataTableSection } from "../../../sections/DataTableSection/DataTableSection";
import { ROUTES } from "../../../../constants/routes";

interface RegistrationRequest {
  id: number;
  requestNumber: string;
  providerName: string;
  email: string;
  phone: string;
  address: string;
  providerType: string;
}

// Mock data for registration requests
const mockRegistrationRequests: RegistrationRequest[] = [
  {
    id: 1,
    requestNumber: "5",
    providerName: "شركة النقل السريع",
    email: "fast@transport.com",
    phone: "0501234567",
    address: "الرياض، حي الملز، شارع الملك فهد",
    providerType: "توزيع الوقود",
  },
  {
    id: 2,
    requestNumber: "3",
    providerName: "مؤسسة الصيانة المتقدمة",
    email: "advanced@maintenance.com",
    phone: "0507654321",
    address: "جدة، حي الروضة، شارع فلسطين",
    providerType: "صيانة المحطات",
  },
  {
    id: 3,
    requestNumber: "7",
    providerName: "شركة اللوجستيات الحديثة",
    email: "modern@logistics.com",
    phone: "0551234567",
    address: "الدمام، حي الفيصلية، طريق الملك فهد",
    providerType: "خدمات لوجستية",
  },
  {
    id: 4,
    requestNumber: "4",
    providerName: "مؤسسة النقل المتخصص",
    email: "specialized@transport.com",
    phone: "0541234567",
    address: "مكة المكرمة، حي العزيزية، شارع إبراهيم الخليل",
    providerType: "نقل الوقود",
  },
  {
    id: 5,
    requestNumber: "6",
    providerName: "شركة الخدمات الصناعية",
    email: "industrial@services.com",
    phone: "0561234567",
    address: "المدينة المنورة، حي العزيزية، طريق الملك عبدالله",
    providerType: "خدمات صناعية",
  },
  {
    id: 6,
    requestNumber: "8",
    providerName: "شركة التوزيع الذكي",
    email: "smart@distribution.com",
    phone: "0551112233",
    address: "الخبر، حي الثقبة، شارع الأمير تركي",
    providerType: "توزيع الوقود",
  },
  {
    id: 7,
    requestNumber: "2",
    providerName: "مؤسسة النقل المتطور",
    email: "advanced@transport.com",
    phone: "0544445566",
    address: "الطائف، حي الوسام، طريق الملك فيصل",
    providerType: "نقل متخصص",
  },
  {
    id: 8,
    requestNumber: "9",
    providerName: "شركة الصيانة الشاملة",
    email: "complete@maintenance.com",
    phone: "0567778899",
    address: "أبها، حي المنسك، شارع الملك فهد",
    providerType: "صيانة شاملة",
  },
  {
    id: 9,
    requestNumber: "5",
    providerName: "مؤسسة اللوجستيات المتقدمة",
    email: "logistics@advanced.com",
    phone: "0533334444",
    address: "تبوك، حي السليمانية، طريق الملك خالد",
    providerType: "خدمات لوجستية",
  },
  {
    id: 10,
    requestNumber: "10",
    providerName: "شركة النقل السريع المحدودة",
    email: "express@transport.com",
    phone: "0522223333",
    address: "بريدة، حي الإسكان، شارع الملك عبدالعزيز",
    providerType: "نقل الوقود",
  },
  {
    id: 11,
    requestNumber: "4",
    providerName: "مؤسسة الخدمات المتكاملة",
    email: "integrated@services.com",
    phone: "0555556666",
    address: "حائل، حي الزهرة، طريق الملك فهد",
    providerType: "خدمات صناعية",
  },
  {
    id: 12,
    requestNumber: "6",
    providerName: "شركة التوزيع الوطنية",
    email: "national@distribution.com",
    phone: "0544447777",
    address: "الجبيل، حي الدانة، شارع الخليج",
    providerType: "توزيع الوقود",
  },
];

// Table columns definition
const columns = [
  {
    key: "actions",
    priority: "high",
  },
  {
    key: "requestNumber",
    label: "المحطات",
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
    key: "address",
    label: "العنوان",
    priority: "medium",
  },
  {
    key: "providerType",
    label: "نوع المزود",
    priority: "high",
  },
  {
    key: "providerName",
    label: "اسم مزود الخدمة",
    priority: "high",
  },
];

// Fetch function
const fetchRegistrationRequests = async (): Promise<RegistrationRequest[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockRegistrationRequests);
    }, 500);
  });
};

export const AddServiceProvider = () => {
  return (
    <div className="w-full">
      <DataTableSection<RegistrationRequest>
        title="سجل طلبات الانضمام"
        entityName="مزود"
        entityNamePlural="مزودين"
        icon={FileText}
        columns={columns}
        fetchData={fetchRegistrationRequests}
        addNewRoute={ROUTES.ADD_SERVICE_PROVIDER}
        viewDetailsRoute={(id) => `/service-providers/${id}`}
        loadingMessage="جاري تحميل مزودي الخدمة..."
        errorMessage="فشل في تحميل مزودي الخدمة"
        itemsPerPage={10}
        showAddButton={false}
        customActionButtons={true}
      />
    </div>
  );
};
