import { DataTableSection } from "../../../sections/DataTableSection";
import { Wallet } from "lucide-react";

type WalletRequest = {
  id: number;
  requestNumber: string;
  clientName: string;
  orderType: string;
  oldBalance: string;
  addedBalance: string;
  requestDate: string;
  status: string;
  responsible: string;
};

const columns = [
  { key: "actions", priority: "high" as const },
  { key: "responsible", label: "المسؤول", priority: "high" as const },
  { key: "status", label: "حالة الطلب", priority: "high" as const },
  { key: "requestDate", label: "تاريخ الانشاء", priority: "high" as const },
  { key: "addedBalance", label: "الرصيد المضاف", priority: "high" as const },
  { key: "oldBalance", label: "الرصيد القديم", priority: "high" as const },
  { key: "orderType", label: "نوع الشحن", priority: "high" as const },
  { key: "clientName", label: "العميل", priority: "high" as const },
  { key: "requestNumber", label: "رقم العملية", priority: "high" as const },
];

const fetchWalletRequests = async (): Promise<WalletRequest[]> => {
  // Mock data for now
  return [
    {
      id: 1,
      requestNumber: "WR-1001",
      clientName: "شركة الأفق",
      orderType: "شحن مباشر",
      oldBalance: "1,500 ر.س",
      addedBalance: "2,500 ر.س",
      requestDate: "2025-01-15",
      status: "مكتمل",
      responsible: "أحمد محمد",
    },
    {
      id: 2,
      requestNumber: "WR-1002",
      clientName: "محمد أحمد",
      orderType: "شحن بنكي",
      oldBalance: "800 ر.س",
      addedBalance: "1,200 ر.س",
      requestDate: "2025-01-14",
      status: "قيد المراجعة",
      responsible: "سارة أحمد",
    },
    {
      id: 3,
      requestNumber: "WR-1003",
      clientName: "مؤسسة الرواد",
      orderType: "شحن مباشر",
      oldBalance: "2,000 ر.س",
      addedBalance: "3,000 ر.س",
      requestDate: "2025-01-13",
      status: "مرفوض",
      responsible: "خالد السعد",
    },
    {
      id: 4,
      requestNumber: "WR-1004",
      clientName: "عبدالله القحطاني",
      orderType: "شحن بنكي",
      oldBalance: "500 ر.س",
      addedBalance: "1,500 ر.س",
      requestDate: "2025-01-12",
      status: "مكتمل",
      responsible: "نورا العتيبي",
    },
    {
      id: 5,
      requestNumber: "WR-1005",
      clientName: "شركة النخيل",
      orderType: "شحن مباشر",
      oldBalance: "3,200 ر.س",
      addedBalance: "5,000 ر.س",
      requestDate: "2025-01-11",
      status: "قيد المراجعة",
      responsible: "فهد المطيري",
    },
  ];
};

export const WalletReq = () => {
  return (
    <DataTableSection<WalletRequest>
      title="طلبات المحافظ"
      entityName="الطلب"
      entityNamePlural="طلبات"
      icon={Wallet}
      columns={columns}
      fetchData={fetchWalletRequests}
      addNewRoute="/wallet-requests"
      viewDetailsRoute={(id) => `/wallet-requests/${id}`}
      loadingMessage="جاري تحميل طلبات المحافظ..."
      itemsPerPage={10}
      showTimeFilter={false}
      showMoneyRefundButton={true}
    />
  );
};

export default WalletReq;
