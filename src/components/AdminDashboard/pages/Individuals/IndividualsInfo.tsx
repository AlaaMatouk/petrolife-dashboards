import { User, ArrowLeft, History, Wallet } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { DataTableSection } from "../../../sections/DataTableSection";
import exportIcon from "../../../../assets/imgs/icons/export-icon.svg";

// Mock data type for individual activity log
const mockIndividualActivities = [
  {
    id: 1,
    operationNumber: "21A254  ",
    operationType: "وقود 91",
    driverName: "محمد عبد الله",
    operationDate: "2025-01-01",
    operationCost: 20,
    operationStatus: 200,
    export: "تصدير",
  },
  {
    id: 2,
    operationNumber: "21A254  ",
    operationType: "وقود 91",
    driverName: "محمد عبد الله",
    operationDate: "2025-01-01",
    operationCost: 20,
    operationStatus: 200,
    export: "تصدير",
  },
  {
    id: 3,
    operationNumber: "21A254  ",
    operationType: "وقود 91",
    driverName: "محمد عبد الله",
    operationDate: "2025-01-01",
    operationCost: 20,
    operationStatus: 200,
    export: "تصدير",
  },
  {
    id: 4,
    operationNumber: "21A254  ",
    operationType: "وقود 91",
    driverName: "محمد عبد الله",
    operationDate: "2025-01-01",
    operationCost: 20,
    operationStatus: 200,
    export: "تصدير",
  },
  {
    id: 5,
    operationNumber: "21A254  ",
    operationType: "وقود 91",
    driverName: "محمد عبد الله",
    operationDate: "2025-01-01",
    operationCost: 20,
    operationStatus: 200,
    export: "تصدير",
  },
];

// Columns configuration for individual activity log
const activityColumns = [
  {
    key: "export",
    priority: "high",
    render: (value: any) => (
      <div className="flex items-center gap-2">
        <img src={exportIcon} alt="export" className="w-4 h-4" />
        <span>{value}</span>
      </div>
    ),
  },
  {
    key: "operationStatus",
    label: "تراكمي العمليات (ر.س)",
    priority: "low",
  },
  {
    key: "operationCost",
    label: "قيمة العملية",
    priority: "medium",
  },
  {
    key: "operationDate",
    label: "تاريخ العملية",
    priority: "high",
  },
  {
    key: "driverName",
    label: "اسم السائق",
    priority: "medium",
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
];

// Mock data fetching function
const fetchIndividualActivities = async () => {
  return mockIndividualActivities;
};

export const IndividualsInfo = ({
  individualData,
}: {
  individualData: any;
}) => {
  const navigate = useNavigate();

  // Helper function to get value or dash
  const getValueOrDash = (value: any) => {
    if (value === null || value === undefined || value === "") {
      return "-";
    }
    return String(value);
  };

  // Helper function to format Firestore Timestamp
  const formatDate = (timestamp: any) => {
    if (!timestamp) return "-";

    try {
      // Handle Firestore Timestamp
      if (timestamp?.toDate && typeof timestamp.toDate === "function") {
        return timestamp.toDate().toLocaleDateString("ar-SA", {
          year: "numeric",
          month: "long",
          day: "numeric",
        });
      }

      // Handle Date object
      if (timestamp instanceof Date) {
        return timestamp.toLocaleDateString("ar-SA", {
          year: "numeric",
          month: "long",
          day: "numeric",
        });
      }

      // Handle string date
      if (typeof timestamp === "string") {
        const date = new Date(timestamp);
        if (!isNaN(date.getTime())) {
          return date.toLocaleDateString("ar-SA", {
            year: "numeric",
            month: "long",
            day: "numeric",
          });
        }
      }

      return String(timestamp);
    } catch (error) {
      console.error("Error formatting date:", error);
      return "-";
    }
  };

  // Extract individual information from Firestore data
  const individualInfo = {
    name: getValueOrDash(individualData.individualName || individualData.name),
    phone: getValueOrDash(individualData.phone || individualData.phoneNumber),
    email: getValueOrDash(individualData.email),
    city: getValueOrDash(
      individualData.city?.name?.ar ||
        individualData.city?.name?.en ||
        individualData.city
    ),
    address: getValueOrDash(individualData.address || individualData.location),
    createdAt: formatDate(
      individualData.createdDate ||
        individualData.createdAt ||
        individualData.accountCreationDate
    ),
    image:
      individualData.profilePhoto ||
      individualData.image ||
      individualData.profileImage ||
      individualData.photo,
  };

  // Define all fields to display in 3-column layout
  const fields = [
    { label: "البريد الإلكتروني", value: individualInfo.email },
    { label: "رقم الهاتف", value: individualInfo.phone },
    { label: "اسم العميل", value: individualInfo.name },
    { label: "تاريخ انشاء الحساب", value: individualInfo.createdAt },
    { label: "العنوان", value: individualInfo.address },
    { label: "المدينه", value: individualInfo.city },
  ];

  // Helper function to render field
  const renderField = (field: any) => (
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
    const rows: React.ReactNode[] = [];
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
        data-model-id="individual-info"
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
                معلومات العميل
              </h1>
              <User className="w-5 h-5 text-gray-500" />
            </div>
          </nav>
        </header>

        <section className="flex flex-col items-start gap-5 relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex flex-col items-end gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
            <form className="flex flex-col items-start gap-5 relative self-stretch w-full flex-[0_0_auto]">
              {/* Client Image Section - Full Width Row */}
              <div className="flex mt-[-20px] items-center justify-end relative self-stretch w-full flex-[0_0_auto]">
                {individualInfo.image ? (
                  <img
                    src={individualInfo.image}
                    alt="صورة العميل"
                    className="w-32 h-32 object-cover rounded-full border-4 border-blue-500 shadow-lg"
                  />
                ) : (
                  <div className="w-32 h-32 flex items-center justify-center bg-gray-200 rounded-full border-4 border-gray-300 shadow-lg">
                    <User className="w-16 h-16 text-gray-400" />
                  </div>
                )}
              </div>

              {/* Dynamic fields in 3-column layout */}
              {renderFieldRows()}

              {/* Contact Button */}
              <div className="flex items-start gap-5 relative self-stretch w-full flex-[0_0_auto]">
                <button
                  className="inline-flex flex-col items-start gap-2.5 pt-[var(--corner-radius-medium)] pb-[var(--corner-radius-medium)] px-2.5 relative flex-[0_0_auto] rounded-[var(--corner-radius-small)] hover:opacity-90 transition-opacity"
                  style={{ border: "0.5px solid #A9B4BE" }}
                  aria-label="تواصل مع الفرد"
                >
                  <div className="flex items-center gap-[var(--corner-radius-small)] relative self-stretch w-full flex-[0_0_auto]">
                    <div className="w-fit font-[number:var(--subtitle-subtitle-3-font-weight)] text-[#5B738B] text-left tracking-[var(--subtitle-subtitle-3-letter-spacing)] whitespace-nowrap [direction:rtl] relative mt-[-1.00px] font-subtitle-subtitle-3 text-[length:var(--subtitle-subtitle-3-font-size)] leading-[var(--subtitle-subtitle-3-line-height)] [font-style:var(--subtitle-subtitle-3-font-style)]">
                      تواصل مع العميل
                    </div>
                  </div>
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>

      {/* Individual Activity Log Section - Using DataTableSection */}
      <div className="mt-[var(--corner-radius-large)]">
        <DataTableSection
          title="المعاملات المالية"
          entityName="نشاط"
          entityNamePlural="أنشطة"
          icon={Wallet}
          columns={activityColumns}
          fetchData={fetchIndividualActivities}
          addNewRoute=""
          viewDetailsRoute={(id: number | string) =>
            `/individual-activity/${id}`
          }
          loadingMessage="جاري تحميل سجل الفرد..."
          itemsPerPage={5}
          showTimeFilter={false}
          showAddButton={false}
        />
      </div>
    </div>
  );
};
