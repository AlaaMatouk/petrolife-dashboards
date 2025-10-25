import { Building2, ArrowLeft, History } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DataTableSection } from "../../../sections/DataTableSection";
import exportIcon from "../../../../assets/imgs/icons/export-icon.svg";
import companyStatis from "../../../../assets/imgs/icons/company-statis.svg";
import StatsCardsSection from "../../StatsCardsSection";
import { statsData, defaultSelectedOptions } from "../../statsData";
import {
  fetchCompanyStatistics,
  fetchOrdersForCompany,
} from "../../../../services/firestore";

interface CompanyInfoProps {
  companyData: any;
}

// Data type for company activity log (transformed from orders)
interface CompanyActivity {
  id: number;
  operationNumber: string;
  operationType: string;
  driverName: string;
  operationDate: string;
  operationCost: number;
  cumulative: number;
  export: string;
}

// Helper function to format date
const formatDate = (date: any): string => {
  if (!date) return "-";

  try {
    if (date.toDate && typeof date.toDate === "function") {
      return new Date(date.toDate()).toLocaleString("ar-EG", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });
    }
    if (date instanceof Date) {
      return date.toLocaleString("ar-EG", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });
    }
    return new Date(date).toLocaleString("ar-EG", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  } catch (error) {
    return String(date);
  }
};

// Helper function to get service title
const getServiceTitle = (order: any): string => {
  if (order.service?.title?.ar) return order.service.title.ar;
  if (order.service?.title?.en) return order.service.title.en;
  if (order.selectedOption?.title?.ar) return order.selectedOption.title.ar;
  if (order.selectedOption?.title?.en) return order.selectedOption.title.en;
  return "وقود";
};

// Convert orders to company activity format
const convertOrdersToCompanyActivities = (orders: any[]): CompanyActivity[] => {
  // Sort by date descending (newest first)
  const sortedOrders = [...orders].sort((a, b) => {
    const dateA = a.orderDate?.toDate
      ? a.orderDate.toDate()
      : new Date(a.orderDate || 0);
    const dateB = b.orderDate?.toDate
      ? b.orderDate.toDate()
      : new Date(b.orderDate || 0);
    return dateB - dateA;
  });

  // Calculate cumulative totals
  let cumulative = 0;
  return sortedOrders.map((order, index) => {
    cumulative += order.totalPrice || 0;

    return {
      id: index + 1, // Generate numeric ID
      operationNumber: order.refId || order.id || "-",
      operationType: getServiceTitle(order),
      driverName: order.enrichedDriverName || order.assignedDriver?.name || "-",
      operationDate: formatDate(order.orderDate || order.createdDate),
      operationCost: order.totalPrice || 0,
      cumulative: cumulative,
      export: "تصدير",
    };
  });
};

// Columns configuration for company activity log
const activityColumns = [
  {
    key: "export",
    priority: "high" as const,
    render: (value: string) => (
      <div className="flex items-center gap-2">
        <img src={exportIcon} alt="export" className="w-4 h-4" />
        <span>{value}</span>
      </div>
    ),
  },
  {
    key: "cumulative",
    label: "تراكمي العمليات (ر.س)",
    priority: "low" as const,
  },
  {
    key: "operationCost",
    label: "قيمة العملية",
    priority: "medium" as const,
  },
  {
    key: "operationDate",
    label: "تاريخ العملية",
    priority: "high" as const,
  },
  {
    key: "driverName",
    label: "اسم السائق",
    priority: "medium" as const,
  },
  {
    key: "operationType",
    label: "نوع العملية",
    priority: "high" as const,
  },
  {
    key: "operationNumber",
    label: "رقم العملية",
    priority: "high" as const,
  },
];

// Real data fetching function for company activities
const fetchCompanyActivities = async (
  companyId: string
): Promise<CompanyActivity[]> => {
  try {
    console.log("Fetching company activities for company:", companyId);
    const orders = await fetchOrdersForCompany(companyId);
    const activities = convertOrdersToCompanyActivities(orders);
    console.log("Company activities loaded:", activities.length);
    return activities;
  } catch (error) {
    console.error("Error fetching company activities:", error);
    return [];
  }
};

export const CompanyInfo = ({ companyData }: CompanyInfoProps): JSX.Element => {
  const navigate = useNavigate();
  const [companyStatistics, setCompanyStatistics] = useState<any>(null);
  const [isLoadingStats, setIsLoadingStats] = useState(true);
  const [statsError, setStatsError] = useState<string | null>(null);

  // Fetch company statistics when component mounts or companyData changes
  useEffect(() => {
    const loadCompanyStatistics = async () => {
      if (!companyData?.id) {
        console.log("No company ID provided, skipping statistics fetch");
        setIsLoadingStats(false);
        return;
      }

      try {
        console.log("Loading statistics for company:", companyData.id);
        setIsLoadingStats(true);
        setStatsError(null);

        // Fetch statistics for the selected company
        const stats = await fetchCompanyStatistics(companyData.id);
        console.log("Company statistics loaded:", stats);
        setCompanyStatistics(stats);
      } catch (err: any) {
        console.error("Error loading company statistics:", err);
        setStatsError(err.message || "Failed to load company statistics");
      } finally {
        setIsLoadingStats(false);
      }
    };

    loadCompanyStatistics();
  }, [companyData?.id]);

  // Helper function to get value or dash
  const getValueOrDash = (value: any): string => {
    if (value === null || value === undefined || value === "") {
      return "-";
    }
    return String(value);
  };

  // Extract company information from Firestore data
  const companyInfo = {
    name: getValueOrDash(companyData.companyName || companyData.name),
    companyCode: getValueOrDash(companyData.companyCode || companyData.code),
    email: getValueOrDash(companyData.email),
    phone: getValueOrDash(companyData.phone || companyData.phoneNumber),
    city: getValueOrDash(
      companyData.city?.name?.ar ||
        companyData.city?.name?.en ||
        companyData.city
    ),
    accountStatus:
      companyData.accountStatus?.text ||
      (companyData.accountStatus?.active ? "مفعل" : "غير مفعل"),
    isActive: companyData.accountStatus?.active ?? companyData.isActive ?? true,
  };

  // Define all fields to display in 3-column layout
  const fields = [
    { label: "اسم الشركة", value: companyInfo.name },
    { label: "البريد الإلكتروني", value: companyInfo.email },
    { label: "كود الشركة", value: companyInfo.companyCode },
    { label: "رقم الهاتف", value: companyInfo.phone },
    { label: "المدينة", value: companyInfo.city },
    { label: "حالة الحساب", value: companyInfo.accountStatus },
  ];

  // Helper function to render field
  const renderField = (field: { label: string; value: string }) => (
    <div className="flex flex-col gap-2 flex-1">
      <label className="text-sm font-normal text-[var(--form-readonly-label-color)] [direction:rtl] text-right">
        {field.label}
      </label>
      <div className="px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-[var(--form-readonly-input-text-color)] [direction:rtl] text-right font-normal">
        {field.value}
      </div>
    </div>
  );

  // Helper function to render rows of 3 columns
  const renderFieldRows = () => {
    const rows = [];
    for (let i = 0; i < fields.length; i += 3) {
      const rowFields = fields.slice(i, i + 3);
      rows.push(
        <div
          key={i}
          className="flex items-start gap-5 relative self-stretch w-full flex-[0_0_auto]"
        >
          {rowFields.map((field, index) => (
            <React.Fragment key={index}>{renderField(field)}</React.Fragment>
          ))}
          {/* Fill remaining columns if less than 3 */}
          {rowFields.length < 3 &&
            Array.from({ length: 3 - rowFields.length }).map((_, index) => (
              <div key={`empty-${index}`} className="flex-1" />
            ))}
        </div>
      );
    }
    return rows;
  };

  return (
    <div>
      <main
        className="flex flex-col items-start gap-[var(--corner-radius-extra-large)] pt-[var(--corner-radius-large)] pr-[var(--corner-radius-large)] pb-[var(--corner-radius-large)] pl-[var(--corner-radius-large)] relative bg-color-mode-surface-bg-screen rounded-[var(--corner-radius-large)] border-[0.3px] border-solid border-color-mode-text-icons-t-placeholder"
        data-model-id="company-info"
      >
        <header className="flex flex-col items-end gap-[var(--corner-radius-extra-large)] relative self-stretch w-full flex-[0_0_auto]">
          <nav className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
            <button
              onClick={() => navigate(-1)}
              className="inline-flex h-10 items-center gap-[var(--corner-radius-medium)] relative flex-[0_0_auto]"
              aria-label="العودة"
            >
              <div className="flex flex-col w-10 items-center justify-center gap-2.5 pt-[var(--corner-radius-small)] pb-[var(--corner-radius-small)] px-2.5 relative self-stretch bg-color-mode-surface-bg-icon-gray rounded-[var(--corner-radius-small)]">
                <ArrowLeft className="w-4 h-4 text-gray-600" />
              </div>
            </button>

            <div className="flex w-[134px] items-center justify-end gap-1.5 relative">
              <h1 className="w-[145px] h-5 mt-[-1.00px] ml-[-35.00px] font-bold text-[var(--form-section-title-color)] text-[length:var(--subtitle-subtitle-2-font-size)] tracking-[var(--subtitle-subtitle-2-letter-spacing)] leading-[var(--subtitle-subtitle-2-line-height)] whitespace-nowrap relative [direction:rtl] [font-style:var(--subtitle-subtitle-2-font-style)]">
                معلومات الشركة
              </h1>
              <Building2 className="w-5 h-5 text-gray-500" />
            </div>
          </nav>
        </header>

        <section className="flex flex-col items-start gap-5 relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex flex-col items-end gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
            <form className="flex flex-col items-start gap-5 relative self-stretch w-full flex-[0_0_auto]">
              {/* Dynamic fields in 3-column layout */}
              {renderFieldRows()}

              {/* Contact Button */}
              <div className="flex items-start gap-5 relative self-stretch w-full flex-[0_0_auto]">
                <button
                  className="inline-flex flex-col items-start gap-2.5 pt-[var(--corner-radius-medium)] pb-[var(--corner-radius-medium)] px-2.5 relative flex-[0_0_auto] rounded-[var(--corner-radius-small)] hover:opacity-90 transition-opacity"
                  style={{ border: "0.5px solid #A9B4BE" }}
                  aria-label="تواصل مع الشركة"
                >
                  <div className="flex items-center gap-[var(--corner-radius-small)] relative self-stretch w-full flex-[0_0_auto]">
                    <div className="w-fit font-[number:var(--subtitle-subtitle-3-font-weight)] text-[#5B738B] text-left tracking-[var(--subtitle-subtitle-3-letter-spacing)] whitespace-nowrap [direction:rtl] relative mt-[-1.00px] font-subtitle-subtitle-3 text-[length:var(--subtitle-subtitle-3-font-size)] leading-[var(--subtitle-subtitle-3-line-height)] [font-style:var(--subtitle-subtitle-3-font-style)]">
                      تواصل مع الشركة
                    </div>
                  </div>
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>

      {/* Stats Cards Section */}
      <div
        className="mt-[var(--corner-radius-large)] bg-white p-[16px] pb-[16px] rounded-[16px]"
        style={{ border: "0.2px solid #A9B4BE" }}
      >
        <h1 className=" h-5 mb-[28px] flex gap-[6px] font-bold text-[var(--form-section-title-color)] text-[length:var(--subtitle-subtitle-2-font-size)] tracking-[var(--subtitle-subtitle-2-letter-spacing)] leading-[var(--subtitle-subtitle-2-line-height)] whitespace-nowrap relative [direction:rtl] [font-style:var(--subtitle-subtitle-2-font-style)]">
          <img src={companyStatis} />
          احصائيات الشركة
        </h1>

        {/* Loading State for Statistics */}
        {isLoadingStats && (
          <div className="flex items-center justify-center py-12">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
              <p className="text-gray-600 text-sm [direction:rtl]">
                جاري تحميل إحصائيات الشركة...
              </p>
            </div>
          </div>
        )}

        {/* Error State for Statistics */}
        {statsError && !isLoadingStats && (
          <div className="p-6 bg-red-50 border border-red-200 rounded-lg mb-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">!</span>
              </div>
              <h3 className="text-red-800 font-semibold [direction:rtl]">
                خطأ في تحميل الإحصائيات
              </h3>
            </div>
            <p className="text-red-700 text-sm [direction:rtl]">{statsError}</p>
            <button
              onClick={() => window.location.reload()}
              className="mt-3 px-4 py-2 bg-red-600 text-white rounded-lg text-sm hover:bg-red-700 transition-colors"
            >
              إعادة المحاولة
            </button>
          </div>
        )}

        {/* Statistics Cards - Show real data when available, otherwise show static data */}
        {!isLoadingStats && (
          <StatsCardsSection
            style="mb-0"
            statsData={statsData}
            defaultSelectedOptions={defaultSelectedOptions}
            // Pass real company statistics data for the selected company (if available)
            totalClientsBalance={companyStatistics?.walletBalance}
            purchaseCostData={companyStatistics?.totalPurchaseCost}
            fuelUsageData={companyStatistics?.fuelUsage}
            fuelCostData={companyStatistics?.fuelCost}
            carWashData={companyStatistics?.carWash}
            tireChangeData={companyStatistics?.tireChange}
            oilChangeData={companyStatistics?.oilChange}
            driversData={companyStatistics?.drivers}
            carsData={companyStatistics?.cars}
            ordersData={companyStatistics?.orders}
          />
        )}

        {/* Show message when using static data */}
        {!isLoadingStats && !statsError && !companyStatistics && (
          <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg mt-4">
            <p className="text-yellow-800 text-sm [direction:rtl] text-center">
              لا توجد بيانات إحصائيات متاحة لهذه الشركة. يتم عرض البيانات
              الافتراضية.
            </p>
          </div>
        )}
      </div>

      {/* Company Activity Log Section - Using DataTableSection */}
      <div className="mt-[var(--corner-radius-large)]">
        <DataTableSection<CompanyActivity>
          title="سجل الشركة"
          entityName="نشاط"
          entityNamePlural="أنشطة"
          icon={History}
          columns={activityColumns}
          fetchData={() =>
            fetchCompanyActivities(companyData?.id || companyData?.email || "")
          }
          addNewRoute=""
          viewDetailsRoute={(id) => `/company-activity/${id}`}
          loadingMessage="جاري تحميل سجل الشركة..."
          itemsPerPage={5}
          showTimeFilter={false}
          showAddButton={false}
        />
      </div>
    </div>
  );
};
