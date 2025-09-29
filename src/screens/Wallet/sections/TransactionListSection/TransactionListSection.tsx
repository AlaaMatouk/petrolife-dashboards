import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { useNavigate } from "react-router-dom";
import { Table } from "../../../../components/shared/Table/Table";
import { Pagination } from "../../../../components/shared/Pagination/Pagination";
import {
  transactionData,
  fuelData,
  timeFilters,
} from "../../../../constants/data";
import { Download, CirclePlus, Calendar, WalletMinimal, FileSpreadsheet, FileText } from "lucide-react";

// Export Menu Component
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

export const TransactionListSection = (): JSX.Element => {
  const navigate = useNavigate();
  const [selectedTimeFilter, setSelectedTimeFilter] = useState("اخر 12 شهر");
  const [currentPage, setCurrentPage] = useState(3);

  // Define table columns for transactions
  const transactionColumns = [
    {
      key: "export",
      label: "",
      width: "min-w-[100px]",
      render: () => <ExportMenu isTableRow={true} />,
    },
    {
      key: "cumulative",
      label: "تراكمي العمليات (ر.س)",
      width: "min-w-[160px]",
    },
    { key: "amount", label: "قيمة العملية", width: "min-w-[120px]" },
    { key: "date", label: "تاريخ العملية", width: "min-w-[180px]" },
    { key: "driver", label: "اسم السائق", width: "min-w-[140px]" },
    { key: "type", label: "نوع العملية", width: "min-w-[120px]" },
    { key: "id", label: "رقم العملية", width: "min-w-[120px]" },
  ];

  return (
    <section className="flex flex-col w-full items-stretch gap-6 mt-6 px-4">
      {/* Top cards row */}
      <div className="flex flex-col lg:flex-row w-full gap-6">
        {/* Cards column */}
        <div className="flex flex-col flex-1 gap-6">
          {/* Fuel total cost card */}
          <div className="relative w-full h-[95px] bg-color-mode-surface-bg-screen rounded-[var(--corner-radius-large)] border-[0.3px] border-solid border-color-mode-text-icons-t-placeholder p-4 flex flex-col justify-between">
            {/* Upper row - title */}
            <div className="flex justify-end">
              <span className="text-base text-color-mode-text-icons-t-sec">
                التكلفة الإجمالية للوقود
              </span>
            </div>
            {/* Lower row - value and icon */}
            <div className="flex items-center justify-between">
            <div className="w-10 h-10 bg-color-mode-surface-purple-bg rounded-full flex items-center justify-center">
              <img
                src="/img/side-icons-14.svg"
                alt="icon"
                className="w-5 h-5"
              />
              </div>
              <p className="text-2xl text-color-mode-text-icons-t-blue font-bold">
                14,254 <span className="text-base">ر.س</span>
              </p>
            </div>
          </div>

          {/* Fuel consumption card */}
          <div className="relative w-full h-[95px] bg-color-mode-surface-bg-screen rounded-[var(--corner-radius-large)] border-[0.3px] border-solid border-color-mode-text-icons-t-placeholder p-4 flex flex-col justify-between">
            {/* Upper row - title */}
            <div className="flex justify-end">
              <span className="text-base text-color-mode-text-icons-t-sec pb-1">
                اجمالي اللترات المستهلكة
              </span>
            </div>
            {/* Lower row - values and icon */}
            <div className="flex items-center justify-between">
            <div className="w-10 h-10 bg-color-mode-surface-purple-bg rounded-full flex items-center justify-center">
              <img
                src="/img/side-icons-15.svg"
                alt="icon"
                className="w-5 h-5"
              />
              </div>
              <div className="flex items-center gap-4">
                {fuelData.map((fuel, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="flex flex-col items-end">
                      <span className="text-lg font-bold text-color-mode-text-icons-t-blue">
                        {fuel.amount}
                      </span>
                      <span className={`${fuel.color} text-xs`}>{fuel.type}</span>
                    </div>
                    {index < fuelData.length - 1 && (
                      <div className="w-px h-8 bg-gray-300"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Wallet card */}
        <div className="flex-1 bg-color-mode-surface-primary-blue rounded-xl border border-color-mode-text-icons-t-placeholder p-6 relative overflow-hidden text-white" style={{
          background: 'linear-gradient(135deg, #4F5BB3 0%, #5A66C1 100%)',
          position: 'relative'
        }}>
          {/* Background pattern overlay */}
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20,20 Q30,10 40,20 T60,20 T80,20' stroke='white' stroke-width='0.5' fill='none' opacity='0.3'/%3E%3Cpath d='M10,40 Q20,30 30,40 T50,40 T70,40 T90,40' stroke='white' stroke-width='0.3' fill='none' opacity='0.2'/%3E%3Cpath d='M0,60 Q10,50 20,60 T40,60 T60,60 T80,60 T100,60' stroke='white' stroke-width='0.4' fill='none' opacity='0.25'/%3E%3Cpath d='M15,80 Q25,70 35,80 T55,80 T75,80 T95,80' stroke='white' stroke-width='0.3' fill='none' opacity='0.2'/%3E%3C/svg%3E")`,
            backgroundSize: '200px 200px',
            backgroundPosition: 'bottom left',
            backgroundRepeat: 'repeat'
          }}></div>
          
          {/* Paper money illustration */}
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10">
            <img 
              src="/img/paper-money-or-dollar-bills-and-blue-credit-card-3d-illustration.png" 
              alt="Paper money and credit card illustration"
              className="w-64 h-64 object-contain opacity-90"
            />
          </div>
          
          <div className="flex flex-col items-end text-right relative z-10">
          <h3 className="text-lg mb-2">رصيــــــــد محفظتي</h3>
          <p className="text-4xl font-bold mb-4">
               <span className="text-base">ر.س</span> 7,250
          </p>
          <div className="flex gap-4">
               <button 
                onClick={() => navigate('/walletchargerequests')}
                className="border border-white text-white rounded-full py-2 px-4 hover:bg-white hover:bg-opacity-10 transition" 
                style={{ border: '1px solid white' }}
              >
              طلبات شحن المحفظة
            </button>
            <button className="flex-1 bg-white text-color-mode-text-icons-t-blue rounded-full py-2 px-4 hover:bg-gray-50 transition">
              شحن المحفظة
            </button>
             </div>
          </div>
        </div>
      </div>

      {/* Main Transactions Table Section */}
      <div className="flex flex-col items-start gap-[var(--corner-radius-extra-large)] pt-[var(--corner-radius-large)] pr-[var(--corner-radius-large)] pb-[var(--corner-radius-large)] pl-[var(--corner-radius-large)] relative self-stretch w-full flex-[0_0_auto] bg-color-mode-surface-bg-screen rounded-[var(--corner-radius-large)] border-[0.3px] border-solid border-color-mode-text-icons-t-placeholder">
        <header className="flex flex-col items-end gap-[var(--corner-radius-extra-large)] relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
            <div className="inline-flex items-center gap-[var(--corner-radius-medium)] relative flex-[0_0_auto]">
              <button className="inline-flex flex-col items-start gap-2.5 pt-[var(--corner-radius-small)] pb-[var(--corner-radius-small)] px-2.5 relative flex-[0_0_auto] rounded-[var(--corner-radius-small)] border-[0.8px] border-solid border-color-mode-text-icons-t-placeholder hover:bg-color-mode-surface-bg-icon-gray transition-colors">
                <div className="flex items-center gap-[var(--corner-radius-small)] relative self-stretch w-full flex-[0_0_auto]">
                  <div className="inline-flex items-center justify-center gap-2.5 pt-1 pb-0 px-0 relative flex-[0_0_auto]">
                    <span className="w-fit mt-[-1.00px] font-[number:var(--body-body-2-font-weight)] text-color-mode-text-icons-t-sec text-left tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] relative font-body-body-2 text-[length:var(--body-body-2-font-size)] whitespace-nowrap [direction:rtl] [font-style:var(--body-body-2-font-style)]">
              إضافة طلب استرداد الأموال
                    </span>
                  </div>
                  <CirclePlus className="w-4 h-4 text-gray-500" />
                </div>
            </button>

               <ExportMenu />

              {/* Time Filters with Calendar Icon */}
              <div className="inline-flex items-center gap-[11px] relative flex-[0_0_auto]">
                <button
                  className="w-[35px] bg-color-mode-surface-bg-icon-gray border-[0.2px] border-solid border-color-mode-surface-bg-screen flex flex-col h-[30px] items-center justify-center gap-2.5 p-4 relative rounded-[5px] hover:bg-opacity-60 transition-all duration-200"
                  aria-label="عرض الخيارات"
                >
                  <Calendar className="w-4 h-4 text-gray-500" />
            </button>

            {timeFilters.map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedTimeFilter(filter)}
                    className={`flex flex-col w-[100.98px] h-[30px] items-center justify-center gap-2.5 p-4 relative rounded-[5px] border-[0.2px] border-solid transition-all hover:border-[var(--color-mode-text-icons-t-blue)] focus:outline-none focus:ring-2 focus:ring-[var(--color-mode-text-icons-t-blue)] focus:ring-opacity-50 ${
                      selectedTimeFilter === filter
                        ? "border-[var(--color-mode-text-icons-t-blue)] bg-[var(--color-mode-text-icons-t-blue)]/5"
                        : "border-[var(--border-medium)]"
                    }`}
                    aria-pressed={selectedTimeFilter === filter}
                    type="button"
                  >
                    <div className="flex w-[126px] items-center justify-center gap-[15px] relative flex-[0_0_auto] mt-[-9.00px] mb-[-9.00px] ml-[-28.51px] mr-[-28.51px]">
                      <span
                        className={`flex items-center justify-center h-4 mt-[-1.00px] text-sm tracking-[0.40px] leading-[19.2px] whitespace-nowrap [font-family:'Tajawal',Helvetica] [direction:rtl] transition-colors ${
                  selectedTimeFilter === filter
                            ? "font-bold text-[var(--color-mode-text-icons-t-blue)]"
                            : "font-normal text-[var(--text-secondary)] opacity-70"
                }`}
              >
                {filter}
                      </span>
                    </div>
              </button>
            ))}
          </div>
        </div>

             <div className="flex w-[200px] items-center justify-end gap-1.5 relative">
               <h1 className="relative w-[180px] h-5 mt-[-1.00px] ml-[-7.00px] font-[number:var(--subtitle-subtitle-2-font-weight)] text-color-mode-text-icons-t-sec text-[length:var(--subtitle-subtitle-2-font-size)] tracking-[var(--subtitle-subtitle-2-letter-spacing)] leading-[var(--subtitle-subtitle-2-line-height)] [direction:rtl] font-subtitle-subtitle-2 whitespace-nowrap [font-style:var(--subtitle-subtitle-2-font-style)]">
                 المعاملات المالية
               </h1>
               <WalletMinimal className="w-5 h-5 text-gray-500" />
             </div>
          </div>
        </header>

        <main className="flex flex-col items-start gap-7 relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex flex-col items-end gap-[var(--corner-radius-large)] relative self-stretch w-full flex-[0_0_auto]">
        <Table
          columns={transactionColumns}
          data={transactionData}
              className="relative self-stretch w-full flex-[0_0_auto]"
        />
          </div>

        <Pagination
          currentPage={currentPage}
          totalPages={20}
          onPageChange={setCurrentPage}
        />
        </main>
      </div>
    </section>
  );
};
