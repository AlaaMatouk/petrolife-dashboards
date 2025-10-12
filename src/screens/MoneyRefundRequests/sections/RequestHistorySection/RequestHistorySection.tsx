import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, FileChartColumnIncreasing } from "lucide-react";
import { Table, TimeFilter, ExportButton, Pagination } from "../../../../components/shared";

export const RequestHistorySection = (): JSX.Element => {
  const navigate = useNavigate();
  const [selectedTimeFilter, setSelectedTimeFilter] = useState("اخر 12 شهر");
  const [currentPage, setCurrentPage] = useState(1);
  
  const ITEMS_PER_PAGE = 10;

  const timeFilters = ["اخر اسبوع", "اخر 30 يوم", "اخر 6 شهور", "اخر 12 شهر"];

  const tableColumns = [
    {
      key: "export",
      label: "",
      width: "min-w-[113px]",
      render: () => <ExportButton className="!border-0 inline-flex items-center gap-1 px-2 py-1 text-xs text-gray-600 hover:bg-gray-100 rounded transition-colors" />,
    },
    {
      key: "status",
      label: "حالة الطلب",
      width: "min-w-[140px]",
      sortable: false,
      render: (value: string, row: any) => getStatusBadge(row.status, row.statusType),
    },
    {
      key: "amount",
      label: "قيمة الطلب (ر.س)",
      width: "min-w-[233px]",
      sortable: false,
      render: (value: string) => (
        <div className="mt-[-0.20px] font-[number:var(--body-body-2-font-weight)] text-black tracking-[var(--body-body-2-letter-spacing)] relative w-fit font-body-body-2 text-[length:var(--body-body-2-font-size)] leading-[var(--body-body-2-line-height)] whitespace-nowrap [font-style:var(--body-body-2-font-style)]">
          {value}
        </div>
      ),
    },
    {
      key: "date",
      label: "تاريخ الطلب",
      width: "min-w-[290px]",
      sortable: false,
      render: (value: string) => (
        <time className="relative w-fit mt-[-0.20px] font-body-body-2 font-[number:var(--body-body-2-font-weight)] text-black text-[length:var(--body-body-2-font-size)] text-left tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] whitespace-nowrap [direction:rtl] [font-style:var(--body-body-2-font-style)]">
          {value}
        </time>
      ),
    },
    {
      key: "id",
      label: "رقم الطلب",
      width: "min-w-[187px]",
      sortable: false,
      render: (value: string) => (
        <div className="relative w-fit mt-[-0.20px] font-body-body-2 font-[number:var(--body-body-2-font-weight)] text-black text-[length:var(--body-body-2-font-size)] tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] whitespace-nowrap [font-style:var(--body-body-2-font-style)]">
          {value}
        </div>
      ),
    },
  ];

  const requestData = [
    {
      id: "21A254",
      status: "مكتمل",
      statusType: "completed",
      amount: "1500",
      date: "21 فبراير 2025 - 5:05 ص",
    },
    {
      id: "21A254",
      status: "مكتمل",
      statusType: "completed",
      amount: "1500",
      date: "21 فبراير 2025 - 5:05 ص",
    },
    {
      id: "21A254",
      status: "جاري المراجعة",
      statusType: "reviewing",
      amount: "1500",
      date: "21 فبراير 2025 - 5:05 ص",
    },
    {
      id: "21A254",
      status: "ملغي",
      statusType: "cancelled",
      amount: "1500",
      date: "21 فبراير 2025 - 5:05 ص",
    },
    {
      id: "21A254",
      status: "مكتمل",
      statusType: "completed",
      amount: "1500",
      date: "21 فبراير 2025 - 5:05 ص",
    },
    {
      id: "21A254",
      status: "مكتمل",
      statusType: "completed",
      amount: "1500",
      date: "21 فبراير 2025 - 5:05 ص",
    },
    {
      id: "21A254",
      status: "مكتمل",
      statusType: "completed",
      amount: "1500",
      date: "21 فبراير 2025 - 5:05 ص",
    },
    {
      id: "21A254",
      status: "مكتمل",
      statusType: "completed",
      amount: "1500",
      date: "21 فبراير 2025 - 5:05 ص",
    },
    {
      id: "21A254",
      status: "مكتمل",
      statusType: "completed",
      amount: "1500",
      date: "21 فبراير 2025 - 5:05 ص",
    },
    {
      id: "21A254",
      status: "مكتمل",
      statusType: "completed",
      amount: "1500",
      date: "21 فبراير 2025 - 5:05 ص",
    },
  ];

  // Calculate pagination
  const totalPages = Math.ceil(requestData.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const paginatedData = requestData.slice(startIndex, endIndex);

  const getStatusBadge = (status: string, statusType: string) => {
    const baseClasses =
      "inline-flex items-center justify-center gap-[var(--corner-radius-extra-small)] pt-[var(--corner-radius-small)] pb-[var(--corner-radius-small)] px-2.5 relative flex-[0_0_auto] rounded-[var(--corner-radius-small)]";

    switch (statusType) {
      case "completed":
        return (
          <div className={`${baseClasses} bg-color-mode-surface-bg-icon-gray`}>
            <div className="relative w-[41px] h-4 mt-[-1.00px] font-[number:var(--subtitle-subtitle-3-font-weight)] text-color-mode-text-icons-t-sec text-[length:var(--subtitle-subtitle-3-font-size)] tracking-[var(--subtitle-subtitle-3-letter-spacing)] leading-[var(--subtitle-subtitle-3-line-height)] [direction:rtl] font-subtitle-subtitle-3 whitespace-nowrap [font-style:var(--subtitle-subtitle-3-font-style)]">
              {status}
            </div>
            <div className="relative w-1.5 h-1.5 bg-color-mode-text-icons-t-sec rounded-[3px]" />
          </div>
        );
      case "reviewing":
        return (
          <div
            className={`${baseClasses} w-[115px] mt-[-2.00px] mb-[-2.00px]`}
            style={{ backgroundColor: "#FFFCEC" }}
          >
            <div className="relative w-fit mt-[-1.00px] font-[number:var(--subtitle-subtitle-3-font-weight)] text-[length:var(--subtitle-subtitle-3-font-size)] tracking-[var(--subtitle-subtitle-3-letter-spacing)] leading-[var(--subtitle-subtitle-3-line-height)] [direction:rtl] font-subtitle-subtitle-3 whitespace-nowrap [font-style:var(--subtitle-subtitle-3-font-style)]" style={{ color: "#E76500" }}>
              {status}
            </div>
            <div className="relative w-1.5 h-1.5 rounded-[3px]" style={{ backgroundColor: "#E76500" }} />
          </div>
        );
      case "cancelled":
        return (
          <div
            className={`${baseClasses} mt-[-2.00px] mb-[-2.00px]`}
            style={{ backgroundColor: "#FFF3F9" }}
          >
            <div className="w-fit font-[number:var(--subtitle-subtitle-3-font-weight)] text-color-mode-text-icons-t-red tracking-[var(--subtitle-subtitle-3-letter-spacing)] whitespace-nowrap [direction:rtl] relative mt-[-1.00px] font-subtitle-subtitle-3 text-[length:var(--subtitle-subtitle-3-font-size)] leading-[var(--subtitle-subtitle-3-line-height)] [font-style:var(--subtitle-subtitle-3-font-style)]">
              {status}
            </div>
            <div className="bg-color-mode-text-icons-t-red relative w-1.5 h-1.5 rounded-[3px]" />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section className="items-start gap-[var(--corner-radius-extra-large)] pt-[var(--corner-radius-large)] pr-[var(--corner-radius-large)] pb-[var(--corner-radius-large)] pl-[var(--corner-radius-large)] self-stretch w-full bg-color-mode-surface-bg-screen rounded-[var(--corner-radius-large)] border-[0.3px] border-solid border-color-mode-text-icons-t-placeholder flex flex-col relative">
      <header className="flex flex-col items-end gap-[var(--corner-radius-extra-large)] relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
          <div className="inline-flex items-center gap-[var(--corner-radius-medium)] relative flex-[0_0_auto]">
            <button
              onClick={() => navigate('/wallet')}
              className="flex flex-col w-10 items-center justify-center gap-2.5 pt-[var(--corner-radius-small)] pb-[var(--corner-radius-small)] px-2.5 relative self-stretch bg-color-mode-surface-bg-icon-gray rounded-[var(--corner-radius-small)] hover:opacity-80 transition-opacity"
              aria-label="العودة"
            >
              <ArrowLeft className="w-5 h-5 text-gray-600" />
            </button>

            <ExportButton />

            <TimeFilter
              selectedFilter={selectedTimeFilter}
              onFilterChange={setSelectedTimeFilter}
            />
          </div>

            <div className="inline-flex gap-1.5 items-center relative flex-[0_0_auto]">
              <h1 className="relative w-[162px] h-5 mt-[-1.00px] font-[number:var(--subtitle-subtitle-2-font-weight)] text-color-mode-text-icons-t-sec text-[length:var(--subtitle-subtitle-2-font-size)] tracking-[var(--subtitle-subtitle-2-letter-spacing)] leading-[var(--subtitle-subtitle-2-line-height)] [direction:rtl] font-subtitle-subtitle-2 whitespace-nowrap [font-style:var(--subtitle-subtitle-2-font-style)]">
                سجل طلبات الاسترداد
              </h1>

            <FileChartColumnIncreasing className="w-[18px] h-[18px] text-gray-500" />
          </div>
        </div>
      </header>

      <main className="flex flex-col items-start gap-[var(--corner-radius-large)] relative self-stretch w-full flex-[0_0_auto]">
        <div className="w-full">
          <Table
            columns={tableColumns}
            data={paginatedData}
            className="w-full"
          />
        </div>
      </main>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
        className="flex items-center justify-around gap-[46px] relative self-stretch w-full flex-[0_0_auto]"
      />
    </section>
  );
};
