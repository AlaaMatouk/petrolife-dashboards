import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { useNavigate } from "react-router-dom";
import { Download, FileChartColumnIncreasing, FileSpreadsheet, FileText, ArrowLeft } from "lucide-react";
import { Table, TimeFilter } from "../../../../components/shared";

const ExportMenu = ({ isTableRow = false }: { isTableRow?: boolean }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [buttonRef, setButtonRef] = useState<HTMLButtonElement | null>(null);
  const [menuPosition, setMenuPosition] = useState({ top: 0, left: 0 });

  const handleExport = (format: string) => {
    console.log(`Exporting as ${format}`);
    setIsOpen(false);
  };

  const updateMenuPosition = () => {
    if (!buttonRef) return;
    
    const rect = buttonRef.getBoundingClientRect();
    const menuWidth = 150;
    const viewportWidth = window.innerWidth;
    
    let left = rect.right + 4;
    
    if (left + menuWidth > viewportWidth) {
      left = rect.left - menuWidth - 4;
    }
    
    const newPosition = {
      top: rect.bottom + 4,
      left: Math.max(4, left)
    };
    
    setMenuPosition(newPosition);
  };

  useEffect(() => {
    if (isOpen) {
      updateMenuPosition();
      
      const handleScroll = () => updateMenuPosition();
      const handleResize = () => updateMenuPosition();
      
      window.addEventListener('scroll', handleScroll);
      window.addEventListener('resize', handleResize);
      
      return () => {
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('resize', handleResize);
      };
    }
  }, [isOpen, buttonRef]);

  if (isTableRow) {
    return (
      <div className="relative">
        <button
          ref={setButtonRef}
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-1 p-2 text-gray-600 hover:text-blue-600 hover:bg-gray-100 rounded transition-colors"
        >
          <span className="text-sm">تصدير</span>
          <Download className="w-4 h-4" />
        </button>

        {isOpen && (
          <>
            <div
              className="fixed inset-0 z-40"
              onClick={() => setIsOpen(false)}
            />
            
            {createPortal(
              <div 
                className="fixed w-40 bg-white border border-gray-200 rounded-lg shadow-xl z-50 overflow-hidden"
                style={{
                  top: `${menuPosition.top}px`,
                  left: `${menuPosition.left}px`
                }}
              >
                <div className="py-1">
                  <button
                    onClick={() => handleExport('excel')}
                    className="w-full px-4 py-2 text-right text-sm text-gray-700 hover:bg-gray-100 flex items-center justify-end gap-2 transition-colors"
                  >
                    <span>ملف Excel</span>
                    <FileSpreadsheet className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleExport('pdf')}
                    className="w-full px-4 py-2 text-right text-sm text-gray-700 hover:bg-gray-100 flex items-center justify-end gap-2 transition-colors"
                  >
                    <span>ملف PDF</span>
                    <FileText className="w-4 h-4" />
                  </button>
                </div>
              </div>,
              document.body
            )}
          </>
        )}
      </div>
    );
  }

  return (
    <div className="relative">
      <button
        ref={setButtonRef}
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex flex-col items-start gap-2.5 pt-[var(--corner-radius-small)] pb-[var(--corner-radius-small)] px-2.5 relative flex-[0_0_auto] rounded-[var(--corner-radius-small)] border-[0.8px] border-solid border-color-mode-text-icons-t-placeholder hover:bg-color-mode-surface-bg-icon-gray transition-colors"
      >
        <div className="flex items-center gap-[var(--corner-radius-small)] relative self-stretch w-full flex-[0_0_auto]">
          <div className="inline-flex items-center justify-center gap-2.5 pt-1 pb-0 px-0 relative flex-[0_0_auto]">
            <span className="w-fit mt-[-1.00px] font-[number:var(--body-body-2-font-weight)] text-color-mode-text-icons-t-sec text-left tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] relative font-body-body-2 text-[length:var(--body-body-2-font-size)] whitespace-nowrap [direction:rtl] [font-style:var(--body-body-2-font-style)]">
              تصدير
            </span>
          </div>
          <Download className="w-4 h-4 text-gray-500" />
        </div>
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          
          {createPortal(
            <div 
              className="fixed w-40 bg-white border border-gray-200 rounded-lg shadow-xl z-50 overflow-hidden"
              style={{
                top: `${menuPosition.top}px`,
                left: `${menuPosition.left}px`
              }}
            >
              <div className="py-1">
                <button
                  onClick={() => handleExport('excel')}
                  className="w-full px-4 py-2 text-right text-sm text-gray-700 hover:bg-gray-100 flex items-center justify-end gap-2 transition-colors"
                >
                  <span>ملف Excel</span>
                  <FileSpreadsheet className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleExport('pdf')}
                  className="w-full px-4 py-2 text-right text-sm text-gray-700 hover:bg-gray-100 flex items-center justify-end gap-2 transition-colors"
                >
                  <span>ملف PDF</span>
                  <FileText className="w-4 h-4" />
                </button>
              </div>
            </div>,
            document.body
          )}
        </>
      )}
    </div>
  );
};

export const RequestHistorySection = (): JSX.Element => {
  const navigate = useNavigate();
  const [selectedTimeFilter, setSelectedTimeFilter] = useState("اخر 12 شهر");
  const [currentPage, setCurrentPage] = useState(3);

  const timeFilters = ["اخر اسبوع", "اخر 30 يوم", "اخر 6 شهور", "اخر 12 شهر"];

  const tableColumns = [
    {
      key: "export",
      label: "",
      width: "min-w-[113px]",
      render: () => <ExportMenu isTableRow={true} />,
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

  const paginationNumbers = [1, 2, 3, 4, 5, 6, 7, "...", 20];

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

            <ExportMenu />

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
            data={requestData}
            className="w-full"
          />
        </div>
      </main>

      <nav
        className="flex items-center justify-around gap-[46px] relative self-stretch w-full flex-[0_0_auto]"
        aria-label="Pagination"
      >
        <div className="inline-flex items-start gap-2 relative flex-[0_0_auto]">
          <button
            className="flex w-[72px] h-8 items-center justify-center gap-2 px-2 py-0 relative bg-color-mode-surface-bg-screen rounded overflow-hidden border-[0.5px] border-solid border-color-mode-text-icons-t-placeholder"
            aria-label="Next page"
          >
            <img
              className="relative w-4 h-4"
              alt=""
              src="/img/icon-16-arrow-right.svg"
            />

            <div className="relative w-fit font-[number:var(--body-body-2-font-weight)] text-color-mode-text-icons-t-sec text-[length:var(--body-body-2-font-size)] text-left tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] [direction:rtl] font-body-body-2 whitespace-nowrap [font-style:var(--body-body-2-font-style)]">
              التالي
            </div>
          </button>

          {paginationNumbers.map((pageNum, index) => (
            <button
              key={index}
              onClick={() =>
                typeof pageNum === "number" && setCurrentPage(pageNum)
              }
              disabled={pageNum === "..."}
              className={`flex flex-col w-8 h-8 items-center justify-center gap-2.5 px-2 py-0 relative rounded overflow-hidden ${
                pageNum === currentPage
                  ? "bg-color-mode-surface-primary-blue"
                  : "bg-color-mode-surface-bg-screen border-[0.5px] border-solid border-color-mode-text-icons-t-placeholder"
              } ${pageNum === "..." ? "cursor-default" : "cursor-pointer"}`}
              aria-label={
                pageNum === "..." ? undefined : `Go to page ${pageNum}`
              }
              aria-current={pageNum === currentPage ? "page" : undefined}
            >
              <div className="flex flex-col w-[22px] h-[22px] items-center justify-center gap-2.5 p-2.5 relative ml-[-3.00px] mr-[-3.00px] rounded-sm">
                <div
                  className={`relative w-fit mt-[-11.00px] mb-[-9.00px] tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] whitespace-nowrap ${
                    pageNum === currentPage
                      ? "font-[number:var(--subtitle-subtitle-3-font-weight)] text-color-mode-text-icons-t-btn-negative font-subtitle-subtitle-3 text-[length:var(--subtitle-subtitle-3-font-size)] [font-style:var(--subtitle-subtitle-3-font-style)]"
                      : "font-[number:var(--body-body-2-font-weight)] text-color-mode-text-icons-t-sec font-body-body-2 text-[length:var(--body-body-2-font-size)] [font-style:var(--body-body-2-font-style)]"
                  } ${
                    pageNum === 20
                      ? "ml-[-6.50px] mr-[-6.50px]"
                      : pageNum === "..."
                        ? "ml-[-5.00px] mr-[-5.00px]"
                        : pageNum === 7
                          ? "ml-[-2.00px] mr-[-2.00px]"
                          : pageNum === 6
                            ? "ml-[-3.00px] mr-[-3.00px]"
                            : pageNum === 5
                              ? "ml-[-3.00px] mr-[-3.00px]"
                              : pageNum === 4
                                ? "ml-[-3.00px] mr-[-3.00px]"
                                : pageNum === 3
                                  ? "ml-[-2.50px] mr-[-2.50px]"
                                  : pageNum === 2
                                    ? "ml-[-2.50px] mr-[-2.50px]"
                                    : pageNum === 1
                                      ? "ml-[-2.00px] mr-[-2.00px]"
                                      : ""
                  }`}
                >
                  {pageNum}
                </div>
              </div>
            </button>
          ))}

          <button
            className="flex w-[72px] h-8 items-center justify-center gap-[5px] px-2 py-0 relative bg-color-mode-surface-bg-screen rounded overflow-hidden border-[0.5px] border-solid border-color-mode-text-icons-t-placeholder"
            aria-label="Previous page"
          >
            <div className="relative w-fit ml-[-3.50px] font-[number:var(--body-body-2-font-weight)] text-color-mode-text-icons-t-sec text-[length:var(--body-body-2-font-size)] text-left tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] [direction:rtl] font-body-body-2 whitespace-nowrap [font-style:var(--body-body-2-font-style)]">
              السابق
            </div>

            <img
              className="mr-[-3.50px] relative w-4 h-4"
              alt=""
              src="/img/icon-16-arrow-left.svg"
            />
          </button>
        </div>
      </nav>
    </section>
  );
};
