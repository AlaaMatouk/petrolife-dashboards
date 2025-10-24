import React from "react";
import { DataTableSection } from "../../../sections/DataTableSection/DataTableSection";
import { FileText } from "lucide-react";

// Dummy data for sales reports
const dummyFinancialData = [
  {
    id: 1,
    unit: "لتر",
    quantity: "20",
    productNumber: "21536",
    productName: "بنزين 91",
    carNumber: "أ-123-456",
    carType: "سيارة",
    driverName: "أحمد محمد",
    clientName: "الشركة المتحدة العالمية",
    code: "21A254",
  },
  {
    id: 2,
    unit: "لتر",
    quantity: "15",
    productNumber: "21537",
    productName: "بنزين 95",
    carNumber: "ب-789-012",
    carType: "شاحنة",
    driverName: "محمد علي",
    clientName: "مؤسسة النور التجارية",
    code: "21A255",
  },
  {
    id: 3,
    unit: "لتر",
    quantity: "25",
    productNumber: "21538",
    productName: "ديزل",
    carNumber: "ج-345-678",
    carType: "حافلة",
    driverName: "سعد أحمد",
    clientName: "شركة الخليج للنقل",
    code: "21A256",
  },
  {
    id: 4,
    unit: "لتر",
    quantity: "30",
    productNumber: "21539",
    productName: "بنزين 91",
    carNumber: "د-901-234",
    carType: "سيارة",
    driverName: "خالد محمد",
    clientName: "مجموعة الصالح التجارية",
    code: "21A257",
  },
  {
    id: 5,
    unit: "لتر",
    quantity: "18",
    productNumber: "21540",
    productName: "بنزين 95",
    carNumber: "هـ-567-890",
    carType: "شاحنة",
    driverName: "عبدالله سعد",
    clientName: "مؤسسة النور التجارية",
    code: "21A258",
  },
  {
    id: 6,
    unit: "لتر",
    quantity: "22",
    productNumber: "21541",
    productName: "ديزل",
    carNumber: "و-123-456",
    carType: "حافلة",
    driverName: "فهد أحمد",
    clientName: "شركة الخليج للنقل",
    code: "21A259",
  },
  {
    id: 7,
    unit: "لتر",
    quantity: "35",
    productNumber: "21542",
    productName: "بنزين 91",
    carNumber: "ز-789-012",
    carType: "سيارة",
    driverName: "ناصر محمد",
    clientName: "الشركة المتحدة العالمية",
    code: "21A260",
  },
  {
    id: 8,
    unit: "لتر",
    quantity: "12",
    productNumber: "21543",
    productName: "بنزين 95",
    carNumber: "ح-345-678",
    carType: "شاحنة",
    driverName: "مشعل علي",
    clientName: "مجموعة الصالح التجارية",
    code: "21A261",
  },
  {
    id: 9,
    unit: "لتر",
    quantity: "28",
    productNumber: "21544",
    productName: "ديزل",
    carNumber: "ط-901-234",
    carType: "حافلة",
    driverName: "بندر سعد",
    clientName: "شركة الخليج للنقل",
    code: "21A262",
  },
  {
    id: 10,
    unit: "لتر",
    quantity: "40",
    productNumber: "21545",
    productName: "بنزين 91",
    carNumber: "ي-567-890",
    carType: "سيارة",
    driverName: "عمر أحمد",
    clientName: "الشركة المتحدة العالمية",
    code: "21A263",
  },
];

// Table columns configuration
const tableColumns = [
  {
    key: "unit",
    label: "الوحدة",
    width: "w-[80px] min-w-[80px]",
    priority: "high",
  },
  {
    key: "quantity",
    label: "الكمية",
    width: "w-[80px] min-w-[80px]",
    priority: "high",
  },
  {
    key: "productNumber",
    label: "رقم المنتج",
    width: "w-[120px] min-w-[120px]",
    priority: "medium",
  },
  {
    key: "productName",
    label: "اسم المنتج",
    width: "w-[120px] min-w-[120px]",
    priority: "medium",
  },
  {
    key: "carNumber",
    label: "رقم المركبة",
    width: "w-[120px] min-w-[120px]",
    priority: "high",
  },
  {
    key: "carType",
    label: "نوع المركبة",
    width: "w-[100px] min-w-[100px]",
    priority: "medium",
  },
  {
    key: "driverName",
    label: "سائق المركبة",
    width: "w-[120px] min-w-[120px]",
    priority: "medium",
  },
  {
    key: "clientName",
    label: "اسم العميل",
    width: "w-[150px] min-w-[150px]",
    priority: "high",
  },
  {
    key: "code",
    label: "كود",
    width: "w-[100px] min-w-[100px]",
    priority: "high",
  },
];

// Filter options for the sales report
const filterOptions = [
  {
    label: "اسم المنتج",
    value: "الكل",
    options: [
      { value: "الكل", label: "الكل" },
      { value: "بنزين 91", label: "بنزين 91" },
      { value: "بنزين 95", label: "بنزين 95" },
      { value: "ديزل", label: "ديزل" },
    ],
  },
  {
    label: "اسم العميل",
    value: "الكل",
    options: [
      { value: "الكل", label: "الكل" },
      { value: "الشركة المتحدة العالمية", label: "الشركة المتحدة العالمية" },
      { value: "مؤسسة النور التجارية", label: "مؤسسة النور التجارية" },
      { value: "شركة الخليج للنقل", label: "شركة الخليج للنقل" },
      { value: "مجموعة الصالح التجارية", label: "مجموعة الصالح التجارية" },
    ],
  },
  {
    label: "كود العميل",
    value: "الكل",
    options: [
      { value: "الكل", label: "الكل" },
      { value: "21A254", label: "21A254" },
      { value: "21A255", label: "21A255" },
      { value: "21A256", label: "21A256" },
    ],
  },
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
    label: "نوع التقرير",
    value: "تحليلي",
    options: [
      { value: "تحليلي", label: "تحليلي" },
      { value: "تفصيلي", label: "تفصيلي" },
      { value: "ملخص", label: "ملخص" },
    ],
  },

  {
    label: "رقم العملية",
    value: "الكل",
    options: [
      { value: "الكل", label: "الكل" },
      { value: "21A254", label: "21A254" },
      { value: "21A255", label: "21A255" },
      { value: "21A256", label: "21A256" },
    ],
  },
  {
    label: "كود السائق",
    value: "الكل",
    options: [
      { value: "الكل", label: "الكل" },
      { value: "21A254", label: "21A254" },
      { value: "21A255", label: "21A255" },
      { value: "21A256", label: "21A256" },
    ],
  },
  {
    label: "رقم المركبة",
    value: "الكل",
    options: [
      { value: "الكل", label: "الكل" },
      { value: "21A254", label: "21A254" },
      { value: "21A255", label: "21A255" },
      { value: "21A256", label: "21A256" },
    ],
  },
];

// Mock function to simulate data fetching
const fetchFinancialData = async () => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return dummyFinancialData;
};

export const FinancialReport: React.FC = () => {
  return (
    <div className="flex flex-col w-full items-start gap-5">
      <DataTableSection
        title="تقارير المبيعات"
        entityName="تقرير"
        entityNamePlural="تقارير"
        icon={FileText}
        columns={tableColumns}
        fetchData={fetchFinancialData}
        addNewRoute="/admin-financial-reports/add"
        viewDetailsRoute={(id: number) => `/admin-financial-reports/${id}`}
        loadingMessage="جاري تحميل تقارير المبيعات..."
        errorMessage="فشل في تحميل تقارير المبيعات"
        itemsPerPage={10}
        showTimeFilter={false}
        showAddButton={false}
        filterOptions={filterOptions}
      />
    </div>
  );
};
