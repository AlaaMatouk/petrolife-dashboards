import React, { useEffect, useState } from "react";
import { Table } from "../../../../components/shared/Table/Table";
import { Pagination } from "../../../../components/shared/Pagination/Pagination";
import { useDrivers } from "../../../../hooks/useGlobalState";
import { driversData as mockDriversData } from "../../../../constants/data";
import { useNavigate } from "react-router-dom";
import { 
  UserRound, 
  CirclePlus, 
  Download, 
  MoreVertical, 
  ChevronDown, 
  ChevronUp, 
  Car, 
  Truck, 
  CarFront, 
  FileSpreadsheet, 
  FileText,
  Download as DownloadIcon,
  Trash2,
  User,
  SlidersHorizontal
} from "lucide-react";
import { createPortal } from "react-dom";

// Driver interface
interface Driver {
  id: number;
  driverCode: string;
  driverName: string;
  phone: string;
  address: string;
  fuelType: string;
  financialValue: string;
  carNumber: string;
  carCategory: { text: string; icon: string | null };
  accountStatus: { active: boolean; text: string };
}

// Mock data for driver stats cards
const driverStats = [
  {
    title: "سائقي السيارات ال VIP",
    count: "3",
    icon: <Car className="w-6 h-6 text-purple-600" />,
    iconBgColor: "bg-purple-100",
    iconBorderColor: "border-purple-300"
  },
  {
    title: "سائقي السيارات الكبيرة",
    count: "10",
    icon: <Truck className="w-6 h-6 text-blue-600" />,
    iconBgColor: "bg-blue-100",
    iconBorderColor: "border-blue-300"
  },
  {
    title: "سائقي السيارات المتوسطة",
    count: "12",
    icon: <CarFront className="w-6 h-6 text-orange-600" />,
    iconBgColor: "bg-orange-100",
    iconBorderColor: "border-orange-300"
  },
  {
    title: "سائقي السيارات الصغيرة",
    count: "20",
    icon: <Car className="w-6 h-6 text-orange-600" />,
    iconBgColor: "bg-orange-100",
    iconBorderColor: "border-orange-300"
  },
];

// Convert mock data to match our Driver interface
const convertMockDataToDrivers = (mockData: any[]): Driver[] => {
  return mockData.map((driver, index) => ({
    id: driver.id || index + 1,
    driverCode: driver.driverCode || "21A254",
    driverName: driver.driverName || "أحمد محمد",
    phone: driver.phone || "00965284358",
    address: driver.address || "12 ش المنيل ، مصر",
    fuelType: driver.fuelType || "بنزين 91",
    financialValue: driver.financialValue || "1600 / 1400",
    carNumber: driver.carNumber || "2145224",
    carCategory: driver.carCategory || { text: "صغيرة", icon: "/img/component-4-11.svg" },
    accountStatus: driver.accountStatus || { active: true, text: "مفعل" },
  }));
};

// Action Menu Component
const ActionMenu = ({ driver }: { driver: Driver }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [buttonRef, setButtonRef] = useState<HTMLButtonElement | null>(null);
  const [menuPosition, setMenuPosition] = useState({ top: 0, left: 0 });
  const navigate = useNavigate();

  const handleAction = (action: string) => {
    console.log(`${action} clicked for driver:`, driver.driverCode);
    if (action === 'view') {
      navigate(`/driver/${driver.id}`);
    }
    setIsOpen(false);
  };

  const updateMenuPosition = () => {
    if (!buttonRef) return;
    
    const rect = buttonRef.getBoundingClientRect();
    const menuWidth = 200;
    const viewportWidth = window.innerWidth;
    
    let left = rect.right + window.scrollX + 4;
    
    if (left + menuWidth > viewportWidth) {
      left = rect.left + window.scrollX - menuWidth - 4;
    }
    
    const newPosition = {
      top: rect.top + window.scrollY,
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
                <div className="px-4 py-2 border-b border-gray-100">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4 text-gray-500" />
                    <span className="text-sm font-medium text-gray-700">معلومات السائق</span>
                  </div>
                  <div className="text-xs text-gray-500 mt-1">اسم العميل: هشام موسى</div>
                </div>
                <button
                  onClick={() => handleAction('export')}
                  className="w-full px-4 py-2 text-right text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2 transition-colors"
                >
                  <DownloadIcon className="w-4 h-4" />
                  تصدير البيانات
                </button>
                <button
                  onClick={() => handleAction('delete')}
                  className="w-full px-4 py-2 text-right text-sm text-red-600 hover:bg-red-50 flex items-center gap-2 transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                  حذف السائق
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
    
    let left = rect.right + window.scrollX + 4;
    
    if (left + menuWidth > viewportWidth) {
      left = rect.left + window.scrollX - menuWidth - 4;
    }
    
    const newPosition = {
      top: rect.top + window.scrollY,
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
                  className="w-full px-4 py-2 text-right text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2 transition-colors"
                >
                  <FileSpreadsheet className="w-4 h-4" />
                  ملف Excel
                </button>
                <button
                  onClick={() => handleExport('pdf')}
                  className="w-full px-4 py-2 text-right text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2 transition-colors"
                >
                  <FileText className="w-4 h-4" />
                  ملف PDF
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

// Define table columns for drivers
const driverColumns = [
  {
    key: "actions",
    label: "الإجراءات",
    width: "w-16 min-w-[60px]",
    priority: "high",
    render: (_: any, row: Driver) => <ActionMenu driver={row} />,
  },
  {
    key: "accountStatus",
    label: "حالة الحساب",
    width: "flex-1 grow min-w-[120px]",
    priority: "high",
    render: (value: any) => (
      <div className="flex items-center justify-center gap-2">
        <button
          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
            value.active ? 'bg-green-600' : 'bg-gray-200'
          }`}
        >
          <span
            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
              value.active ? 'translate-x-6' : 'translate-x-1'
            }`}
          />
        </button>
        <span className={`text-sm font-medium ${
          value.active ? 'text-green-700' : 'text-gray-500'
        }`}>
          {value.text}
        </span>
      </div>
    ),
  },
  {
    key: "carCategory",
    label: (
      <div className="flex items-center justify-center gap-2">
        <span>تصنيف السيارة</span>
        <SlidersHorizontal className="w-4 h-4 text-gray-400" />
      </div>
    ),
    width: "flex-1 grow min-w-[130px]",
    priority: "high",
    render: (value: any) => {
      // Map car category text to appropriate icons
      const getCarIcon = (categoryText: string) => {
        switch (categoryText) {
          case 'VIP':
            return <Car className="w-4 h-4 text-purple-600" />;
          case 'كبيرة':
            return <Truck className="w-4 h-4 text-blue-600" />;
          case 'متوسطة':
            return <CarFront className="w-4 h-4 text-orange-600" />;
          case 'صغيرة':
            return <Car className="w-4 h-4 text-green-600" />;
          default:
            return <Car className="w-4 h-4 text-gray-500" />;
        }
      };

      return (
        <div className="flex items-center justify-center gap-1">
          <span className="font-[number:var(--body-body-2-font-weight)] text-color-mode-text-icons-t-primary-gray text-[length:var(--body-body-2-font-size)] tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] [direction:rtl] font-body-body-2 whitespace-nowrap [font-style:var(--body-body-2-font-style)]">
            {value.text}
          </span>
          {getCarIcon(value.text)}
        </div>
      );
    },
  },
  {
    key: "carNumber",
    label: "رقم السيارة",
    width: "flex-1 grow min-w-[100px]",
    priority: "medium",
  },
  {
    key: "financialValue",
    label: (
      <div className="text-center [direction:rtl]">
        <div className="text-sm font-medium">القيمة المالية (ر.س)</div>
        <div className="text-xs text-gray-500 mt-1">المستخدمة / المحددة يوميا</div>
      </div>
    ),
    width: "flex-1 grow min-w-[200px]",
    priority: "medium",
  },
  {
    key: "fuelType",
    label: "نوع الوقود",
    width: "flex-1 grow min-w-[100px]",
    priority: "low",
  },
  {
    key: "address",
    label: "العنوان",
    width: "flex-1 grow min-w-[150px]",
    priority: "low",
  },
  {
    key: "phone",
    label: "رقم الهاتف",
    width: "flex-1 grow min-w-[120px]",
    priority: "medium",
  },
  {
    key: "driverName",
    label: "اسم السائق",
    width: "flex-1 grow min-w-[120px]",
    priority: "high",
  },
  {
    key: "driverCode",
    label: "كود السائق",
    width: "flex-1 grow min-w-[100px]",
    priority: "high",
  },
];

export const DataTableSection = (): JSX.Element => {
  const { 
    drivers, 
    pagination, 
    setDrivers, 
    setCurrentPage 
  } = useDrivers();
  const navigate = useNavigate();

  // Initialize drivers data on component mount
  useEffect(() => {
    if (drivers.length === 0) {
      const convertedDrivers = convertMockDataToDrivers(mockDriversData);
      setDrivers(convertedDrivers);
    }
  }, [drivers.length, setDrivers]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <section className="flex flex-col items-start gap-5 w-full">
      {/* Driver Stats Cards */}
      <div className="flex flex-col items-start gap-[var(--corner-radius-extra-large)] pt-[var(--corner-radius-large)] pr-[var(--corner-radius-large)] pb-[var(--corner-radius-large)] pl-[var(--corner-radius-large)] relative self-stretch w-full flex-[0_0_auto] bg-color-mode-surface-bg-screen rounded-[var(--corner-radius-large)] border-[0.3px] border-solid border-color-mode-text-icons-t-placeholder">
        <div className="flex items-center justify-end gap-1.5 relative self-stretch w-full flex-[0_0_auto]">
          <h2 className="relative w-[229px] h-5 mt-[-1.00px] font-[number:var(--subtitle-subtitle-2-font-weight)] text-color-mode-text-icons-t-sec text-[length:var(--subtitle-subtitle-2-font-size)] tracking-[var(--subtitle-subtitle-2-letter-spacing)] leading-[var(--subtitle-subtitle-2-line-height)] [direction:rtl] font-subtitle-subtitle-2 whitespace-nowrap [font-style:var(--subtitle-subtitle-2-font-style)]">
            توزيع السائقين على السيارات
          </h2>
          <UserRound className="w-5 h-5 text-gray-500" />
        </div>
        
        <div className="flex h-[119px] items-center gap-5 relative w-full">
          {driverStats.map((stat, index) => (
            <div key={index} className="flex-1 h-full bg-white rounded-[var(--corner-radius-large)] border-[0.3px] border-solid border-color-mode-text-icons-t-placeholder p-4 relative">
              {/* Title - Top Right */}
              <div className="absolute top-4 right-4 text-sm font-medium text-gray-700 [direction:rtl] text-right">
                {stat.title}
              </div>
              
              {/* Number - Bottom Right */}
              <div className="absolute bottom-4 right-4 text-3xl font-bold text-purple-600 [direction:rtl] text-right">
                {stat.count}
              </div>
              
              {/* Icon - Bottom Left with colored circle background */}
              <div className={`absolute bottom-4 left-4 w-12 h-12 ${stat.iconBgColor} ${stat.iconBorderColor} border-2 rounded-full flex items-center justify-center`}>
                {stat.icon}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Data Table Section */}
      <div className="flex flex-col items-start gap-[var(--corner-radius-extra-large)] pt-[var(--corner-radius-large)] pr-[var(--corner-radius-large)] pb-[var(--corner-radius-large)] pl-[var(--corner-radius-large)] relative self-stretch w-full flex-[0_0_auto] bg-color-mode-surface-bg-screen rounded-[var(--corner-radius-large)] border-[0.3px] border-solid border-color-mode-text-icons-t-placeholder">
        <header className="flex flex-col items-end gap-[var(--corner-radius-extra-large)] relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
            <div className="inline-flex items-center gap-[var(--corner-radius-medium)] relative flex-[0_0_auto]">
              <button
                onClick={() => navigate("/adddriver")}
                className="inline-flex flex-col items-start gap-2.5 pt-[var(--corner-radius-small)] pb-[var(--corner-radius-small)] px-2.5 relative flex-[0_0_auto] rounded-[var(--corner-radius-small)] border-[0.8px] border-solid border-color-mode-text-icons-t-placeholder hover:bg-color-mode-surface-bg-icon-gray transition-colors"
              >
                <div className="flex items-center gap-[var(--corner-radius-small)] relative self-stretch w-full flex-[0_0_auto]">
                  <div className="inline-flex items-center justify-center gap-2.5 pt-1 pb-0 px-0 relative flex-[0_0_auto]">
                    <span className="w-fit mt-[-1.00px] font-[number:var(--body-body-2-font-weight)] text-color-mode-text-icons-t-sec text-left tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] relative font-body-body-2 text-[length:var(--body-body-2-font-size)] whitespace-nowrap [direction:rtl] [font-style:var(--body-body-2-font-style)]">
                      إضافة سائق جديد
                    </span>
                  </div>
                  <CirclePlus className="w-4 h-4 text-gray-500" />
                </div>
              </button>

              <ExportMenu />
            </div>

            <div className="flex w-[134px] items-center justify-end gap-1.5 relative">
              <h1 className="relative w-[117px] h-5 mt-[-1.00px] ml-[-7.00px] font-[number:var(--subtitle-subtitle-2-font-weight)] text-color-mode-text-icons-t-sec text-[length:var(--subtitle-subtitle-2-font-size)] tracking-[var(--subtitle-subtitle-2-letter-spacing)] leading-[var(--subtitle-subtitle-2-line-height)] [direction:rtl] font-subtitle-subtitle-2 whitespace-nowrap [font-style:var(--subtitle-subtitle-2-font-style)]">
                عدد السائقين ({drivers.length})
              </h1>
              <UserRound className="w-5 h-5 text-gray-500" />
            </div>
          </div>
        </header>

        <main className="flex flex-col items-start gap-7 relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex flex-col items-end gap-[var(--corner-radius-large)] relative self-stretch w-full flex-[0_0_auto]">
            {/* Desktop Table View */}
            <div className="hidden lg:block w-full">
              <Table
                columns={driverColumns}
                data={drivers}
                className="relative self-stretch w-full flex-[0_0_auto]"
              />
            </div>

            {/* Tablet Responsive Table View */}
            <div className="hidden md:block lg:hidden w-full">
              <Table
                columns={driverColumns.filter(col => col.priority === 'high' || col.priority === 'medium')}
                data={drivers}
                className="relative self-stretch w-full flex-[0_0_auto]"
              />
            </div>

            {/* Mobile Card View - You can implement this later if needed */}
            <div className="md:hidden space-y-4 w-full">
              <div className="text-center text-gray-500 py-8">
                عرض الجوال غير متوفر حالياً
              </div>
            </div>
          </div>

          <Pagination
            currentPage={pagination.currentPage}
            totalPages={pagination.totalPages}
            onPageChange={handlePageChange}
          />
        </main>
      </div>
    </section>
  );
};
