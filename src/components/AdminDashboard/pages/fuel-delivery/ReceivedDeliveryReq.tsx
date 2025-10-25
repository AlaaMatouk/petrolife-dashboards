import { DataTableSection } from "../../../sections/DataTableSection";
import { Truck } from "lucide-react";

type ReceivedDeliveryRequest = {
  id: number;
  requestNumber: string;
  driverType: string;
  fuelType: string;
  quantity: string;
  deliveryAddress: string;
  requestDate: string;
};

const columns = [
  { key: "actions", priority: "high" as const },
  { key: "requestDate", label: "تاريخ الطلب", priority: "high" as const },
  { key: "deliveryAddress", label: "عنوان التوصيل", priority: "medium" as const },
  { key: "quantity", label: "الكمية المطلوبة (لتر)", priority: "high" as const },
  { key: "driverType", label: "نوع الموقع", priority: "high" as const },
  { key: "fuelType", label: "نوع الوقود", priority: "high" as const },
  { key: "requestNumber", label: "رقم الطلب", priority: "high" as const },
];

const fetchReceivedDeliveryRequests = async (): Promise<ReceivedDeliveryRequest[]> => {
  // Mock data for received delivery requests
  return [
    {
      id: 1,
      requestNumber: "RD-1001",
      driverType: "محطة وقود",
      fuelType: "بنزين 91",
      quantity: "50",
      deliveryAddress: "الرياض - حي النرجس",
      requestDate: "2025-01-15",
    },
    {
      id: 2,
      requestNumber: "RD-1002",
      driverType: "محطة وقود",
      fuelType: "ديزل",
      quantity: "100",
      deliveryAddress: "جدة - حي الزهراء",
      requestDate: "2025-01-14",
    },
    {
      id: 3,
      requestNumber: "RD-1003",
      driverType: "محطة وقود",
      fuelType: "بنزين 95",
      quantity: "75",
      deliveryAddress: "الدمام - حي الفيصلية",
      requestDate: "2025-01-13",
    },
    {
      id: 4,
      requestNumber: "RD-1004",
      driverType: "محطة وقود",
      fuelType: "بنزين 91",
      quantity: "30",
      deliveryAddress: "الرياض - حي الملز",
      requestDate: "2025-01-12",
    },
    {
      id: 5,
      requestNumber: "RD-1005",
      driverType: "محطة وقود",
      fuelType: "ديزل",
      quantity: "200",
      deliveryAddress: "الرياض - حي العليا",
      requestDate: "2025-01-11",
    },
    {
      id: 6,
      requestNumber: "RD-1006",
      driverType: "محطة وقود",
      fuelType: "بنزين 95",
      quantity: "60",
      deliveryAddress: "الخبر - حي الشاطئ",
      requestDate: "2025-01-10",
    },
    {
      id: 7,
      requestNumber: "RD-1007",
      driverType: "محطة وقود",
      fuelType: "بنزين 91",
      quantity: "40",
      deliveryAddress: "الطائف - حي الهدا",
      requestDate: "2025-01-09",
    },
    {
      id: 8,
      requestNumber: "RD-1008",
      driverType: "محطة وقود",
      fuelType: "ديزل",
      quantity: "150",
      deliveryAddress: "الرياض - حي الياسمين",
      requestDate: "2025-01-08",
    },
    {
      id: 9,
      requestNumber: "RD-1009",
      driverType: "محطة وقود",
      fuelType: "بنزين 95",
      quantity: "80",
      deliveryAddress: "مكة - حي العزيزية",
      requestDate: "2025-01-07",
    },
    {
      id: 10,
      requestNumber: "RD-1010",
      driverType: "محطة وقود",
      fuelType: "بنزين 91",
      quantity: "120",
      deliveryAddress: "الرياض - حي النهضة",
      requestDate: "2025-01-06",
    },
  ];
};

export const ReceivedDeliveryReq = () => {
  return (
    <DataTableSection<ReceivedDeliveryRequest>
      title="طلبات التوصيل المستلمة"
      entityName="طلب التوصيل المستلم"
      entityNamePlural="طلبات التوصيل المستلمة"
      icon={Truck}
      columns={columns}
      fetchData={fetchReceivedDeliveryRequests}
      addNewRoute="/fuel-delivery-requests/received-delivery-requests"
      viewDetailsRoute={(id) => `/fuel-delivery-requests/received-delivery-requests/${id}`}
      loadingMessage="جاري تحميل طلبات التوصيل المستلمة..."
      itemsPerPage={10}
      showTimeFilter={false}
      showAddButton={false}
    />
  );
};

export default ReceivedDeliveryReq;
