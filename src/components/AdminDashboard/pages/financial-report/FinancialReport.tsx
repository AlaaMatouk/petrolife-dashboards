import React from "react";
import { DataTableSection } from "../../../sections/DataTableSection/DataTableSection";
import { FileText } from "lucide-react";
import { fetchAllOrders } from "../../../../services/firestore";

// Helper function to extract text from language objects or return string
const extractText = (value: any): string => {
  if (!value) return "-";
  if (typeof value === "string") return value;
  if (typeof value === "object") {
    // Handle language objects with ar/en keys
    if (value.ar && value.ar.trim() !== "") return value.ar;
    if (value.en && value.en.trim() !== "") return value.en;
    // Handle other object structures
    if (value.name) {
      if (typeof value.name === "string" && value.name.trim() !== "")
        return value.name;
      if (value.name.ar && value.name.ar.trim() !== "") return value.name.ar;
      if (value.name.en && value.name.en.trim() !== "") return value.name.en;
    }
    // If all values are empty, return "-"
    return "-";
  }
  return String(value);
};

// Transform orders data to match table structure
const transformOrdersData = (orders: any[]) => {
  return orders.map((order) => ({
    id: order.id,
    refId: order.refId || order.id,
    clientName:
      extractText(order.client?.name) ||
      order.assignedDriver?.createdUserId ||
      "-",
    driverName: extractText(order.assignedDriver?.name) || "-",
    carType: extractText(order.assignedDriver?.car?.carType?.name) || "-",
    carNumber: extractText(order.assignedDriver?.car?.plateNumber) || "-",
    productName: extractText(order.service?.title) || "-",
    productNumber: extractText(order.service?.serviceId) || "-",
    quantity: order.totalLitre || "-",
    unit: extractText(order.service?.unit) || "-",
  }));
};

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
    key: "refId",
    label: "كود",
    width: "w-[120px] min-w-[120px]",
    priority: "high",
  },
];

// No filter options needed since we're displaying all orders
const filterOptions: any[] = [];

// Function to fetch and transform orders data
const fetchFinancialData = async () => {
  try {
    const orders = await fetchAllOrders();
    return transformOrdersData(orders);
  } catch (error) {
    console.error("Error fetching financial data:", error);
    throw error;
  }
};

export const FinancialReport: React.FC = () => {
  return (
    <div className="flex flex-col w-full items-start gap-5">
      <DataTableSection
        title="التقارير المالية - جميع الطلبات"
        entityName="طلب"
        entityNamePlural="طلبات"
        icon={FileText}
        columns={tableColumns}
        fetchData={fetchFinancialData}
        addNewRoute="/admin-financial-reports/add"
        viewDetailsRoute={(id: string | number) =>
          `/admin-financial-reports/${id}`
        }
        loadingMessage="جاري تحميل جميع الطلبات..."
        errorMessage="فشل في تحميل الطلبات"
        itemsPerPage={10}
        showTimeFilter={false}
        showAddButton={false}
        filterOptions={filterOptions}
      />
    </div>
  );
};
