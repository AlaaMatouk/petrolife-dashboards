import React, { useState } from "react";
import { Filter, SlidersHorizontal } from "lucide-react";
import { Table, ExportButton } from "../../../../components/shared";

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
      render: () => <ExportButton className="!border-0 flex items-center gap-2 text-gray-600 hover:text-blue-600 hover:bg-gray-100 rounded transition-colors p-2" />,
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
