import React from "react";
import { DataTableSection } from "../../../sections/DataTableSection/DataTableSection";
import { Users } from "lucide-react";

// Dummy data for service provider reports
const dummyServiceProviderData = [
  {
    id: 1,
    service: "توصيل الوقود",
    serviceProviderName: "أحمد محمد",
    productType: "وقود",
    productNumber: "FUEL001",
    productName: "بنزين 91",
    quantity: "50",
    unit: "لتر",
    value: "125.50",
    serviceFees: "25.00",
  },
  {
    id: 2,
    service: "صيانة المركبة",
    serviceProviderName: "محمد علي",
    productType: "قطع غيار",
    productNumber: "PART002",
    productName: "فلتر هواء",
    quantity: "2",
    unit: "قطعة",
    value: "85.00",
    serviceFees: "15.00",
  },
  {
    id: 3,
    service: "فحص فني",
    serviceProviderName: "سعد أحمد",
    productType: "فحص",
    productNumber: "INSP003",
    productName: "فحص شامل",
    quantity: "1",
    unit: "فحص",
    value: "200.00",
    serviceFees: "50.00",
  },
  {
    id: 4,
    service: "توصيل الوقود",
    serviceProviderName: "خالد محمد",
    productType: "وقود",
    productNumber: "FUEL004",
    productName: "ديزل",
    quantity: "75",
    unit: "لتر",
    value: "180.75",
    serviceFees: "30.00",
  },
  {
    id: 5,
    service: "صيانة المركبة",
    serviceProviderName: "عبدالله سعد",
    productType: "قطع غيار",
    productNumber: "PART005",
    productName: "زيت محرك",
    quantity: "4",
    unit: "لتر",
    value: "120.00",
    serviceFees: "20.00",
  },
  {
    id: 6,
    service: "فحص فني",
    serviceProviderName: "فهد أحمد",
    productType: "فحص",
    productNumber: "INSP006",
    productName: "فحص إطارات",
    quantity: "4",
    unit: "إطار",
    value: "60.00",
    serviceFees: "10.00",
  },
  {
    id: 7,
    service: "توصيل الوقود",
    serviceProviderName: "ناصر محمد",
    productType: "وقود",
    productNumber: "FUEL007",
    productName: "بنزين 95",
    quantity: "60",
    unit: "لتر",
    value: "150.60",
    serviceFees: "25.00",
  },
  {
    id: 8,
    service: "صيانة المركبة",
    serviceProviderName: "مشعل علي",
    productType: "قطع غيار",
    productNumber: "PART008",
    productName: "شمعات إشعال",
    quantity: "6",
    unit: "قطعة",
    value: "90.00",
    serviceFees: "15.00",
  },
  {
    id: 9,
    service: "فحص فني",
    serviceProviderName: "بندر سعد",
    productType: "فحص",
    productNumber: "INSP009",
    productName: "فحص فرامل",
    quantity: "1",
    unit: "فحص",
    value: "80.00",
    serviceFees: "20.00",
  },
  {
    id: 10,
    service: "توصيل الوقود",
    serviceProviderName: "عمر أحمد",
    productType: "وقود",
    productNumber: "FUEL010",
    productName: "بنزين 91",
    quantity: "40",
    unit: "لتر",
    value: "100.40",
    serviceFees: "20.00",
  },
];

// Table columns configuration
const tableColumns = [
  {
    key: "serviceFees",
    label: "رسوم الخدمة",
    priority: "high",
  },
  {
    key: "value",
    label: "القيمة (ر.س)",
    priority: "high",
  },
  {
    key: "unit",
    label: "الوحدة",
    priority: "high",
  },
  {
    key: "quantity",
    label: "الكمية",
    priority: "high",
  },
  {
    key: "productName",
    label: "اسم المنتج",
    priority: "high",
  },
  {
    key: "productNumber",
    label: "رقم المنتج",
    priority: "medium",
  },
  {
    key: "productType",
    label: "نوع المنتج",
    priority: "medium",
  },
  {
    key: "serviceProviderName",
    label: "اسم مزود الخدمة",
    priority: "high",
  },

  {
    key: "service",
    label: "الخدمة",
    priority: "high",
  },
];

// Filter options for the service provider report
const filterOptions = [
  {
    label: "نوع المنتج",
    value: "الكل",
    options: [
      { value: "الكل", label: "الكل" },
      { value: "وقود", label: "وقود" },
      { value: "قطع غيار", label: "قطع غيار" },
      { value: "فحص", label: "فحص" },
    ],
  },
  {
    label: "اسم مزود الخدمة",
    value: "الكل",
    options: [
      { value: "الكل", label: "الكل" },
      { value: "أحمد محمد", label: "أحمد محمد" },
      { value: "محمد علي", label: "محمد علي" },
      { value: "سعد أحمد", label: "سعد أحمد" },
      { value: "خالد محمد", label: "خالد محمد" },
    ],
  },
  {
    label: "كود مزود الخدمة",
    value: "الكل",
    options: [
      { value: "الكل", label: "الكل" },
      {
        value: "SP001",
        label: "SP001",
      },
      { value: "SP002", label: "SP002" },
      { value: "SP003", label: "SP003" },
      { value: "SP004", label: "SP004" },
    ],
  },

  {
    label: "اسم المنتج",
    value: "الكل",
    options: [
      { value: "الكل", label: "الكل" },
      { value: "بنزين 91", label: "بنزين 91" },
      { value: "بنزين 95", label: "بنزين 95" },
      { value: "ديزل", label: "ديزل" },
      { value: "فلتر هواء", label: "فلتر هواء" },
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
const fetchServiceProviderData = async () => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return dummyServiceProviderData;
};

export const ServiceProviderReport: React.FC = () => {
  return (
    <div className="flex flex-col w-full items-start gap-5">
      <DataTableSection
        title="تقارير مزودي الخدمة"
        entityName="تقرير"
        entityNamePlural="تقارير"
        icon={Users}
        columns={tableColumns}
        fetchData={fetchServiceProviderData}
        addNewRoute="/admin-service-provider-reports/add"
        viewDetailsRoute={(id: number) =>
          `/admin-service-provider-reports/${id}`
        }
        loadingMessage="جاري تحميل تقارير مزودي الخدمة..."
        errorMessage="فشل في تحميل تقارير مزودي الخدمة"
        itemsPerPage={10}
        showTimeFilter={false}
        showAddButton={false}
        filterOptions={filterOptions}
      />
    </div>
  );
};
