import { useEffect, useState } from "react";
import { Table } from "../../shared/Table/Table";
import { Pagination } from "../../shared/Pagination/Pagination";
import { useNavigate } from "react-router-dom";
import {
  CirclePlus,
  Download,
  MoreVertical,
  FileSpreadsheet,
  FileText,
  Trash2,
  User,
  LucideIcon
} from "lucide-react";
import { createPortal } from "react-dom";
import { TimeFilter } from "../../shared/TimeFilter/TimeFilter";
import { RTLSelect } from "../../shared/Form/RTLSelect";

// Generic props interface for DataTableSection
export interface DataTableSectionProps<T> {
  title: string;
  entityName: string; // e.g., "عامل" or "محطة"
  entityNamePlural: string; // e.g., "عمال" or "محطات"
  icon: LucideIcon;
  columns: any[];
  fetchData: () => Promise<T[]>;
  onToggleStatus?: (id: number | string) => void;
  addNewRoute: string;
  viewDetailsRoute: (id: number | string) => string;
  loadingMessage?: string;
  errorMessage?: string;
  itemsPerPage?: number;
  showTimeFilter?: boolean; // New prop to control TimeFilter visibility
  showAddButton?: boolean; // New prop to control Add button visibility
  filterOptions?: any[]; // New prop for RTLSelect filters
}

// Generic Action Menu Component
interface ActionMenuProps<T extends { id: number | string; driverCode?: string; stationCode?: string }> {
  item: T;
  entityName: string;
  viewDetailsRoute: (id: number | string) => string;
}

const ActionMenu = <T extends { id: number | string; driverCode?: string; stationCode?: string }>({ 
  item, 
  entityName,
  viewDetailsRoute 
}: ActionMenuProps<T>) => {
  const [isOpen, setIsOpen] = useState(false);
  const [buttonRef, setButtonRef] = useState<HTMLButtonElement | null>(null);
  const [menuPosition, setMenuPosition] = useState({ top: 0, left: 0 });
  const navigate = useNavigate();

  const handleAction = (action: string) => {
    console.log(`${action} clicked for item:`, item.driverCode || item.stationCode);
    if (action === "view") {
      navigate(viewDetailsRoute(item.id));
    }
    setIsOpen(false);
  };

  const updateMenuPosition = () => {
    if (!buttonRef) return;

    const rect = buttonRef.getBoundingClientRect();
    const menuWidth = 192; // 48 * 4 (w-48 = 12rem = 192px)
    const viewportWidth = window.innerWidth;

    // Calculate position to the right of the icon
    let left = rect.right + 4;

    // If menu would go off-screen to the right, position it to the left of the icon
    if (left + menuWidth > viewportWidth) {
      left = rect.left - menuWidth - 4;
    }

    const newPosition = {
      top: rect.bottom + 4, // Position below the button
      left: Math.max(4, left) // Ensure it doesn't go off-screen to the left
    };

    setMenuPosition(newPosition);
  };

  useEffect(() => {
    if (isOpen) {
      updateMenuPosition();

      const handleScroll = () => updateMenuPosition();
      const handleResize = () => updateMenuPosition();

      window.addEventListener("scroll", handleScroll);
      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("scroll", handleScroll);
        window.removeEventListener("resize", handleResize);
      };
    }
  }, [isOpen, buttonRef]);

  return (
    <div className="relative">
      <button
        ref={setButtonRef}
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
        aria-label="إجراءات"
      >
        <MoreVertical className="w-4 h-4 text-gray-600" />
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />

          {createPortal(
            <div
              className="fixed w-48 bg-white border border-gray-200 rounded-lg shadow-xl z-50 overflow-hidden"
              style={{
                top: `${menuPosition.top}px`,
                left: `${menuPosition.left}px`
              }}
            >
              <div className="py-1">
                <button
                  onClick={() => handleAction("view")}
                  className="w-full px-4 py-2 text-right text-sm text-gray-700 hover:bg-gray-100 flex items-center justify-end gap-2 transition-colors"
                >
                  <span>عرض بيانات {entityName}</span>
                  <User className="w-4 h-4 text-gray-500" />
                </button>
                <button
                  onClick={() => handleAction("delete")}
                  className="w-full px-4 py-2 text-right text-sm text-red-600 hover:bg-red-50 flex items-center justify-end gap-2 transition-colors"
                >
                  <span>حذف {entityName}</span>
                  <Trash2 className="w-4 h-4" />
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

// Export Menu Component
const ExportMenu = () => {
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

    // Calculate position to the right of the button
    let left = rect.right + 4;

    // If menu would go off-screen to the right, position it to the left of the button
    if (left + menuWidth > viewportWidth) {
      left = rect.left - menuWidth - 4;
    }

    const newPosition = {
      top: rect.bottom + 4, // Position below the button
      left: Math.max(4, left) // Ensure it doesn't go off-screen to the left
    };

    setMenuPosition(newPosition);
  };

  useEffect(() => {
    if (isOpen) {
      updateMenuPosition();

      const handleScroll = () => updateMenuPosition();
      const handleResize = () => updateMenuPosition();

      window.addEventListener("scroll", handleScroll);
      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("scroll", handleScroll);
        window.removeEventListener("resize", handleResize);
      };
    }
  }, [isOpen, buttonRef]);

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
                  onClick={() => handleExport("excel")}
                  className="w-full px-4 py-2 text-right text-sm text-gray-700 hover:bg-gray-100 flex items-center justify-end gap-2 transition-colors"
                >
                  <span>ملف Excel</span>
                  <FileSpreadsheet className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleExport("pdf")}
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

// Generic DataTableSection Component
export const DataTableSection = <T extends { id: number | string; driverCode?: string; stationCode?: string; accountStatus?: { active: boolean; text: string }; stationStatus?: { active: boolean; text: string } }>({
  title,
  entityName,
  entityNamePlural,
  icon: Icon,
  columns,
  fetchData,
  onToggleStatus,
  addNewRoute,
  viewDetailsRoute,
  errorMessage,
  itemsPerPage = 10,
  showTimeFilter = false,
  showAddButton = true,
  filterOptions = []
}: DataTableSectionProps<T>): JSX.Element => {
  const navigate = useNavigate();
  const [data, setData] = useState<T[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedFilter, setSelectedFilter] = useState<string>("الكل");
  
  // Initialize filters state based on filterOptions
  const initialFilters = filterOptions.reduce((acc, filter) => {
    const key = filter.label === "نوع التقرير" ? "reportType" : 
                filter.label === "اسم المنتج" ? "productName" :
                filter.label === "قائمة المحطات" ? "stationList" :
                filter.label === "المدينة" ? "city" :
                filter.label === "رقم العملية" ? "operationNumber" : 
                filter.label.toLowerCase().replace(/\s+/g, "");
    acc[key] = filter.value;
    return acc;
  }, {} as Record<string, string>);
  
  const [filters, setFilters] = useState<Record<string, string>>(initialFilters);
  
  // Handle filter changes
  const handleFilterChange = (filterKey: string, value: string) => {
    setFilters(prev => ({
      ...prev,
      [filterKey]: value
    }));
  };

  // Fetch data on component mount
  useEffect(() => {
    const loadData = async () => {
      if (data.length === 0) {
        setIsLoading(true);
        setError(null);

        try {
          console.log(`Loading ${entityNamePlural} data...`);
          const fetchedData = await fetchData();
          setData(fetchedData);
        } catch (err) {
          console.error(`Error loading ${entityNamePlural}:`, err);
          setError(errorMessage || `فشل في تحميل بيانات ${entityNamePlural}`);
          // Try to load data anyway as fallback
          try {
            const fallbackData = await fetchData();
            setData(fallbackData);
          } catch {
            // If fallback also fails, keep empty data
          }
        } finally {
          setIsLoading(false);
        }
      }
    };

    loadData();
  }, [data.length, entityNamePlural, fetchData, errorMessage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleToggleStatus = (itemId: number | string) => {
    if (onToggleStatus) {
      onToggleStatus(itemId);
      // Update local state
      setData(prevData =>
        prevData.map(item => {
          if (item.id === itemId) {
            if (item.accountStatus) {
              return {
                ...item,
                accountStatus: {
                  active: !item.accountStatus.active,
                  text: !item.accountStatus.active ? "مفعل" : "معطل"
                }
              };
            }
            if ((item as any).stationStatus) {
              return {
                ...item,
                stationStatus: {
                  active: !(item as any).stationStatus.active,
                  text: !(item as any).stationStatus.active ? "مفعل" : "معطل"
                }
              };
            }
          }
          return item;
        })
      );
    }
  };

  // Calculate paginated data
  const paginatedData = Array.isArray(data) 
    ? data.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
    : [];

  // Enhance columns with ActionMenu
  const enhancedColumns = columns.map(col => {
    if (col.key === "actions") {
      return {
        ...col,
        render: (_: any, row: T) => (
          <ActionMenu 
            item={row} 
            entityName={entityName}
            viewDetailsRoute={viewDetailsRoute}
          />
        )
      };
    }
    if ((col.key === "accountStatus" || col.key === "stationStatus") && onToggleStatus) {
      return {
        ...col,
        render: (value: any, row: T) => (
          <div className="flex items-center justify-center">
            <div className="flex items-center gap-2">
              <button
                onClick={() => handleToggleStatus(row.id)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                  value.active ? "bg-green-600" : "bg-gray-200"
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    value.active ? "translate-x-6" : "translate-x-1"
                  }`}
                />
              </button>
              <span
                className={`text-sm font-medium ${
                  value.active ? "text-green-700" : "text-gray-500"
                }`}
              >
                {value.text}
              </span>
            </div>
          </div>
        )
      };
    }
    return col;
  });

  return (
    <section className="flex flex-col items-start gap-5 w-full">
      {/* Main Data Table Section */}
      <div className="flex flex-col items-start gap-[var(--corner-radius-extra-large)] pt-[var(--corner-radius-large)] pr-[var(--corner-radius-large)] pb-[var(--corner-radius-large)] pl-[var(--corner-radius-large)] relative self-stretch w-full flex-[0_0_auto] bg-color-mode-surface-bg-screen rounded-[var(--corner-radius-large)] border-[0.3px] border-solid border-color-mode-text-icons-t-placeholder">
        <header className="flex flex-col items-end gap-[var(--corner-radius-extra-large)] relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
            {showTimeFilter ? (
              // Show TimeFilter on the left side
              <div className="flex items-center">
                <TimeFilter
                  selectedFilter={selectedFilter}
                  onFilterChange={setSelectedFilter}
                />
              </div>
            ) : (
              // Show buttons for other entities
              <div className="inline-flex items-center gap-[var(--corner-radius-medium)] relative flex-[0_0_auto]">
                {showAddButton && (
                  <button
                    onClick={() => navigate(addNewRoute)}
                    className="inline-flex flex-col items-start gap-2.5 pt-[var(--corner-radius-small)] pb-[var(--corner-radius-small)] px-2.5 relative flex-[0_0_auto] rounded-[var(--corner-radius-small)] border-[0.8px] border-solid border-color-mode-text-icons-t-placeholder hover:bg-color-mode-surface-bg-icon-gray transition-colors"
                  >
                    <div className="flex items-center gap-[var(--corner-radius-small)] relative self-stretch w-full flex-[0_0_auto]">
                      <div className="inline-flex items-center justify-center gap-2.5 pt-1 pb-0 px-0 relative flex-[0_0_auto]">
                        <span className="w-fit mt-[-1.00px] font-[number:var(--body-body-2-font-weight)] text-color-mode-text-icons-t-sec text-left tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] relative font-body-body-2 text-[length:var(--body-body-2-font-size)] whitespace-nowrap [direction:rtl] [font-style:var(--body-body-2-font-style)]">
                          إضافة {entityName} جديد
                        </span>
                      </div>
                      <CirclePlus className="w-4 h-4 text-gray-500" />
                    </div>
                  </button>
                )}

                <ExportMenu />
              </div>
            )}

            {/* Always show title on the right side */}
            <div className="flex items-center justify-end gap-1.5 relative">
              <h1 className="relative mt-[-1.00px] font-[number:var(--subtitle-subtitle-2-font-weight)] text-color-mode-text-icons-t-sec text-[length:var(--subtitle-subtitle-2-font-size)] tracking-[var(--subtitle-subtitle-2-letter-spacing)] leading-[var(--subtitle-subtitle-2-line-height)] [direction:rtl] font-subtitle-subtitle-2 whitespace-nowrap [font-style:var(--subtitle-subtitle-2-font-style)]">
                {title}
              </h1>
              <Icon className="w-5 h-5 text-gray-500" />
            </div>
          </div>
        </header>

        {/* RTLSelect Filters Section */}
        {filterOptions.length > 0 && (
          <div className="flex items-center gap-[13px] relative self-stretch w-full flex-[0_0_auto]">
            {filterOptions.map((filter, index) => (
              <RTLSelect
                key={index}
                label={filter.label}
                value={filters[filter.label === "نوع التقرير" ? "reportType" : 
                              filter.label === "اسم المنتج" ? "productName" :
                              filter.label === "قائمة المحطات" ? "stationList" :
                              filter.label === "المدينة" ? "city" :
                              filter.label === "رقم العملية" ? "operationNumber" : 
                              filter.label.toLowerCase().replace(/\s+/g, "")]}
                onChange={(value) => handleFilterChange(
                  filter.label === "نوع التقرير" ? "reportType" : 
                  filter.label === "اسم المنتج" ? "productName" :
                  filter.label === "قائمة المحطات" ? "stationList" :
                  filter.label === "المدينة" ? "city" :
                  filter.label === "رقم العملية" ? "operationNumber" : 
                  filter.label.toLowerCase().replace(/\s+/g, ""), 
                  value
                )}
                options={filter.options}
                placeholder={filter.value}
              />
            ))}
          </div>
        )}

        <main className="flex flex-col items-start gap-7 relative self-stretch w-full flex-[0_0_auto]">
          {/* Error Message */}
          {error && !isLoading && (
            <div className="w-full p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p className="text-yellow-800 text-center [direction:rtl]">{error}</p>
            </div>
          )}

          {/* Table Content */}
          <div className="flex flex-col items-end gap-[var(--corner-radius-large)] relative self-stretch w-full flex-[0_0_auto]">
            {/* Desktop Table View */}
            <div className="hidden lg:block w-full">
              <Table
                columns={enhancedColumns}
                data={paginatedData}
                loading={isLoading}
                emptyMessage="لا توجد بيانات"
                className="relative self-stretch w-full flex-[0_0_auto]"
              />
            </div>

            {/* Tablet Responsive Table View */}
            <div className="hidden md:block lg:hidden w-full">
              <Table
                columns={enhancedColumns.filter(
                  (col) => col.priority === "high" || col.priority === "medium"
                )}
                data={paginatedData}
                loading={isLoading}
                emptyMessage="لا توجد بيانات"
                className="relative self-stretch w-full  flex-[0_0_auto]"
              />
            </div>

            {/* Mobile Card View */}
            <div className="md:hidden space-y-4 w-full">
              {isLoading ? (
                <div className="flex items-center justify-center p-8">
                  <div className="text-color-mode-text-icons-t-sec">جاري التحميل...</div>
                </div>
              ) : (
                <div className="text-center text-gray-500 py-8">
                  عرض الجوال غير متوفر حالياً
                </div>
              )}
            </div>
          </div>

          {!isLoading && (
            <Pagination
              currentPage={currentPage}
              totalPages={Math.ceil(data.length / itemsPerPage) || 1}
              onPageChange={handlePageChange}
            />
          )}
        </main>
      </div>
    </section>
  );
};

