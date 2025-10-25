import React from "react";
import { DataTableSection } from "../../../sections/DataTableSection/DataTableSection";
import { Wallet } from "lucide-react";
import { fetchAdminWalletReports } from "../../../../services/firestore";

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
    options: [{ value: "الكل", label: "الكل" }],
  },
  {
    label: "نوع العملية",
    value: "الكل",
    options: [
      { value: "الكل", label: "الكل" },
      { value: "-", label: "-" },
    ],
  },
  {
    label: "رقم العملية",
    value: "الكل",
    options: [{ value: "الكل", label: "الكل" }],
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

// Function to fetch real wallet reports data from Firestore
const fetchWalletData = async () => {
  try {
    console.log("🔄 Fetching admin wallet reports data...");
    const data = await fetchAdminWalletReports();
    console.log(`✅ Successfully fetched ${data.length} wallet reports`);
    return data;
  } catch (error) {
    console.error("❌ Error fetching wallet reports:", error);
    throw error;
  }
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
