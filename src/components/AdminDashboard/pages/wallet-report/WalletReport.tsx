import React from "react";
import { DataTableSection } from "../../../sections/DataTableSection/DataTableSection";
import { Wallet } from "lucide-react";

// Dummy data for wallet reports
const dummyWalletData = [
  {
    id: 1,
    date: "21 فبراير 2025 - 5:05 ص",
    clientType: "شركة",
    clientName: "الشركة المتحدة العالمية",
    operationNumber: "OP001",
    operationType: "شحن محفظة",
    debit: "0.00",
    credit: "500.00",
    balance: "1,250.50",
  },
  {
    id: 2,
    date: "20 فبراير 2025 - 3:30 م",
    clientType: "مؤسسة",
    clientName: "مؤسسة النور التجارية",
    operationNumber: "OP002",
    operationType: "دفع خدمة",
    debit: "85.00",
    credit: "0.00",
    balance: "1,165.50",
  },
  {
    id: 3,
    date: "20 فبراير 2025 - 2:15 م",
    clientType: "فرد",
    clientName: "أحمد محمد",
    operationNumber: "OP003",
    operationType: "استرداد",
    debit: "0.00",
    credit: "200.00",
    balance: "1,365.50",
  },
  {
    id: 4,
    date: "19 فبراير 2025 - 11:45 ص",
    clientType: "شركة",
    clientName: "مجموعة الصالح التجارية",
    operationNumber: "OP004",
    operationType: "دفع خدمة",
    debit: "180.75",
    credit: "0.00",
    balance: "1,184.75",
  },
  {
    id: 5,
    date: "19 فبراير 2025 - 9:20 ص",
    clientType: "مؤسسة",
    clientName: "مؤسسة النور التجارية",
    operationNumber: "OP005",
    operationType: "شحن محفظة",
    debit: "0.00",
    credit: "300.00",
    balance: "1,484.75",
  },
  {
    id: 6,
    date: "18 فبراير 2025 - 4:10 م",
    clientType: "فرد",
    clientName: "سعد أحمد",
    operationNumber: "OP006",
    operationType: "دفع خدمة",
    debit: "60.00",
    credit: "0.00",
    balance: "1,424.75",
  },
  {
    id: 7,
    date: "18 فبراير 2025 - 1:30 م",
    clientType: "شركة",
    clientName: "الشركة المتحدة العالمية",
    operationNumber: "OP007",
    operationType: "شحن محفظة",
    debit: "0.00",
    credit: "750.00",
    balance: "2,174.75",
  },
  {
    id: 8,
    date: "17 فبراير 2025 - 6:45 ص",
    clientType: "مؤسسة",
    clientName: "مجموعة الصالح التجارية",
    operationNumber: "OP008",
    operationType: "دفع خدمة",
    debit: "90.00",
    credit: "0.00",
    balance: "2,084.75",
  },
  {
    id: 9,
    date: "17 فبراير 2025 - 10:15 ص",
    clientType: "فرد",
    clientName: "محمد علي",
    operationNumber: "OP009",
    operationType: "استرداد",
    debit: "0.00",
    credit: "80.00",
    balance: "2,164.75",
  },
  {
    id: 10,
    date: "16 فبراير 2025 - 7:20 م",
    clientType: "شركة",
    clientName: "الشركة المتحدة العالمية",
    operationNumber: "OP010",
    operationType: "دفع خدمة",
    debit: "100.40",
    credit: "0.00",
    balance: "2,064.35",
  },
];

// Table columns configuration
const tableColumns = [
  {
    key: "balance",
    label: "الرصيد (ر.س)",
    priority: "high",
  },
  {
    key: "credit",
    label: "دائن",
    priority: "high",
  },
  {
    key: "debit",
    label: "مدين",
    priority: "high",
  },
  {
    key: "operationType",
    label: "نوع العملية",
    priority: "high",
  },
  {
    key: "operationNumber",
    label: "رقم العملية",
    priority: "high",
  },
  {
    key: "clientName",
    label: "اسم العميل",
    priority: "high",
  },
  {
    key: "clientType",
    label: "نوع العميل",
    priority: "high",
  },
  {
    key: "date",
    label: "التاريخ",
    priority: "high",
  },
];

// Filter options for the wallet report
const filterOptions = [
  {
    label: "نوع العميل",
    value: "الكل",
    options: [
      { value: "الكل", label: "الكل" },
      { value: "شركة", label: "شركة" },
      { value: "مؤسسة", label: "مؤسسة" },
      { value: "فرد", label: "فرد" },
    ],
  },
  {
    label: "اسم العميل",
    value: "الكل",
    options: [
      { value: "الكل", label: "الكل" },
      { value: "الشركة المتحدة العالمية", label: "الشركة المتحدة العالمية" },
      { value: "مؤسسة النور التجارية", label: "مؤسسة النور التجارية" },
      { value: "مجموعة الصالح التجارية", label: "مجموعة الصالح التجارية" },
      { value: "أحمد محمد", label: "أحمد محمد" },
    ],
  },
  {
    label: "نوع العملية",
    value: "الكل",
    options: [
      { value: "الكل", label: "الكل" },
      { value: "شحن محفظة", label: "شحن محفظة" },
      { value: "دفع خدمة", label: "دفع خدمة" },
      { value: "استرداد", label: "استرداد" },
    ],
  },
  {
    label: "رقم العملية",
    value: "الكل",
    options: [
      { value: "الكل", label: "الكل" },
      { value: "OP001", label: "OP001" },
      { value: "OP002", label: "OP002" },
      { value: "OP003", label: "OP003" },
      { value: "OP004", label: "OP004" },
    ],
  },
  {
    label: "نوع التقرير",
    value: "تحليلي",
    options: [
      { value: "تحليلي", label: "تحليلي" },
      { value: "تفصيلي", label: "تفصيلي" },
      { value: "ملخص", label: "ملخص" },
    ],
  },
];

// Mock function to simulate data fetching
const fetchWalletData = async () => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return dummyWalletData;
};

export const WalletReport: React.FC = () => {
  return (
    <div className="flex flex-col w-full items-start gap-5">
      <DataTableSection
        title="تقارير المحافظ"
        entityName="تقرير"
        entityNamePlural="تقارير"
        icon={Wallet}
        columns={tableColumns}
        fetchData={fetchWalletData}
        addNewRoute="/admin-wallet-reports/add"
        viewDetailsRoute={(id: number) => `/admin-wallet-reports/${id}`}
        loadingMessage="جاري تحميل تقارير المحافظ..."
        errorMessage="فشل في تحميل تقارير المحافظ"
        itemsPerPage={10}
        showTimeFilter={false}
        showAddButton={false}
        filterOptions={filterOptions}
      />
    </div>
  );
};
