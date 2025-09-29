import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Download, Filter, SlidersHorizontal } from "lucide-react";
import { Table } from "../../../../components/shared/Table/Table";

interface TableRow {
  id: string;
  status: "completed" | "rejected";
  date: string;
  shippingValue: string;
  oldBalance: string;
  orderType: string;
  orderNumber: string;
}

const tableData: TableRow[] = [
  {
    id: "1",
    status: "completed",
    date: "21 فبراير 2025 - 5:05 ص",
    shippingValue: "20",
    oldBalance: "1500",
    orderType: "آلي",
    orderNumber: "21A254",
  },
  {
    id: "2",
    status: "completed",
    date: "21 فبراير 2025 - 5:05 ص",
    shippingValue: "20",
    oldBalance: "1500",
    orderType: "آلي",
    orderNumber: "21A254",
  },
  {
    id: "3",
    status: "rejected",
    date: "21 فبراير 2025 - 5:05 ص",
    shippingValue: "20",
    oldBalance: "1500",
    orderType: "يدوي",
    orderNumber: "21A254",
  },
  {
    id: "4",
    status: "completed",
    date: "21 فبراير 2025 - 5:05 ص",
    shippingValue: "20",
    oldBalance: "1500",
    orderType: "آلي",
    orderNumber: "21A254",
  },
  {
    id: "5",
    status: "completed",
    date: "21 فبراير 2025 - 5:05 ص",
    shippingValue: "20",
    oldBalance: "1500",
    orderType: "آلي",
    orderNumber: "21A254",
  },
  {
    id: "6",
    status: "completed",
    date: "21 فبراير 2025 - 5:05 ص",
    shippingValue: "20",
    oldBalance: "1500",
    orderType: "آلي",
    orderNumber: "21A254",
  },
  {
    id: "7",
    status: "completed",
    date: "21 فبراير 2025 - 5:05 ص",
    shippingValue: "20",
    oldBalance: "1500",
    orderType: "آلي",
    orderNumber: "21A254",
  },
  {
    id: "8",
    status: "completed",
    date: "21 فبراير 2025 - 5:05 ص",
    shippingValue: "20",
    oldBalance: "1500",
    orderType: "آلي",
    orderNumber: "21A254",
  },
  {
    id: "9",
    status: "completed",
    date: "21 فبراير 2025 - 5:05 ص",
    shippingValue: "20",
    oldBalance: "1500",
    orderType: "آلي",
    orderNumber: "21A254",
  },
  {
    id: "10",
    status: "completed",
    date: "21 فبراير 2025 - 5:05 ص",
    shippingValue: "20",
    oldBalance: "1500",
    orderType: "آلي",
    orderNumber: "21A254",
  },
];

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

  return (
    <div className="relative">
      <button
        ref={setButtonRef}
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 text-gray-600 hover:text-blue-600 hover:bg-gray-100 rounded transition-colors p-2"
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
                  <Download className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleExport('pdf')}
                  className="w-full px-4 py-2 text-right text-sm text-gray-700 hover:bg-gray-100 flex items-center justify-end gap-2 transition-colors"
                >
                  <span>ملف PDF</span>
                  <Download className="w-4 h-4" />
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

export const ContentSection = (): JSX.Element => {
  const [sortField, setSortField] = useState<string | null>(null);
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");

  const handleSort = (column: string, direction: "asc" | "desc") => {
    setSortField(column);
    setSortDirection(direction);
  };

  const tableColumns = [
    {
      key: "export",
      label: "",
      width: "min-w-[100px]",
      render: () => <ExportMenu />,
    },
    {
      key: "status",
      label: (
        <div className="flex items-center justify-center gap-2">
          <span>حالة الطلب</span>
          <SlidersHorizontal className="w-4 h-4 text-gray-400" />
        </div>
      ),
      width: "min-w-[149px]",
      sortable: false,
      render: (value: string, row: TableRow) => (
        <div
          className={`inline-flex items-center justify-center gap-[var(--corner-radius-extra-small)] pt-[var(--corner-radius-small)] pb-[var(--corner-radius-small)] px-2.5 relative flex-[0_0_auto] ${row.status === "rejected" ? "" : "bg-color-mode-surface-bg-icon-gray"} rounded-[var(--corner-radius-small)]`}
          style={row.status === "rejected" ? { backgroundColor: "#FFF3F9" } : {}}
        >
          <div
            className={`${row.status === "rejected" ? "w-fit" : "w-[41px] h-4"} mt-[-1.00px] font-[number:var(--subtitle-subtitle-3-font-weight)] ${row.status === "rejected" ? "text-color-mode-text-icons-t-red" : "text-color-mode-text-icons-t-sec"} text-[length:var(--subtitle-subtitle-3-font-size)] tracking-[var(--subtitle-subtitle-3-letter-spacing)] leading-[var(--subtitle-subtitle-3-line-height)] [direction:rtl] relative font-subtitle-subtitle-3 whitespace-nowrap [font-style:var(--subtitle-subtitle-3-font-style)]`}
          >
            {row.status === "rejected" ? "مرفوض" : "مكتمل"}
          </div>
          <div
            className={`relative w-1.5 h-1.5 ${row.status === "rejected" ? "bg-color-mode-text-icons-t-red" : "bg-color-mode-text-icons-t-sec"} rounded-[3px]`}
          />
        </div>
      ),
    },
    {
      key: "date",
      label: "تاريخ الطلب",
      width: "min-w-[217px]",
      sortable: false,
      render: (value: string) => (
        <time className="relative w-fit mt-[-0.20px] font-body-body-2 font-[number:var(--body-body-2-font-weight)] text-black text-[length:var(--body-body-2-font-size)] text-left tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] whitespace-nowrap [direction:rtl] [font-style:var(--body-body-2-font-style)]">
          {value}
        </time>
      ),
    },
    {
      key: "shippingValue",
      label: "قيمة طلب الشحن (ر.س)",
      width: "min-w-[170px]",
      sortable: false,
      render: (value: string) => (
        <div className="mt-[-0.20px] font-[number:var(--body-body-2-font-weight)] text-black tracking-[var(--body-body-2-letter-spacing)] relative w-fit font-body-body-2 text-[length:var(--body-body-2-font-size)] leading-[var(--body-body-2-line-height)] whitespace-nowrap [font-style:var(--body-body-2-font-style)]">
          {value}
        </div>
      ),
    },
    {
      key: "oldBalance",
      label: "الرصيد القديم (ر.س)",
      width: "min-w-[168px]",
      sortable: false,
      render: (value: string) => (
        <div className="mt-[-0.20px] font-[number:var(--body-body-2-font-weight)] text-black tracking-[var(--body-body-2-letter-spacing)] relative w-fit font-body-body-2 text-[length:var(--body-body-2-font-size)] leading-[var(--body-body-2-line-height)] whitespace-nowrap [font-style:var(--body-body-2-font-style)]">
          {value}
        </div>
      ),
    },
    {
      key: "orderType",
      label: "نوع الطلب",
      width: "min-w-[102px]",
      sortable: false,
      render: (value: string) => (
        <div className="w-fit mt-[-0.20px] font-[number:var(--body-body-2-font-weight)] text-black text-[length:var(--body-body-2-font-size)] text-left tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] [direction:rtl] relative font-body-body-2 whitespace-nowrap [font-style:var(--body-body-2-font-style)]">
          {value}
        </div>
      ),
    },
    {
      key: "orderNumber",
      label: "رقم الطلب",
      width: "min-w-[120px]",
      sortable: false,
      render: (value: string) => (
        <div className="relative w-fit mt-[-0.20px] font-body-body-2 font-[number:var(--body-body-2-font-weight)] text-black text-[length:var(--body-body-2-font-size)] tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] whitespace-nowrap [font-style:var(--body-body-2-font-style)]">
          {value}
        </div>
      ),
    },
  ];

  return (
    <Table
      columns={tableColumns}
      data={tableData}
      onSort={handleSort}
      sortColumn={sortField}
      sortDirection={sortDirection}
      className="w-full"
    />
  );
};
