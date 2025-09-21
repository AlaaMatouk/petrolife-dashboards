import React from "react";

export interface TableColumn<T = any> {
  key: string;
  label: string;
  width?: string;
  render?: (value: any, row: T, index: number) => React.ReactNode;
  sortable?: boolean;
  className?: string;
}

export interface TableProps<T = any> {
  columns: TableColumn<T>[];
  data: T[];
  className?: string;
  headerClassName?: string;
  rowClassName?: string;
  cellClassName?: string;
  onSort?: (column: string, direction: "asc" | "desc") => void;
  sortColumn?: string;
  sortDirection?: "asc" | "desc";
  loading?: boolean;
  emptyMessage?: string;
}

export const Table = <T extends Record<string, any>>({
  columns,
  data,
  className = "",
  headerClassName = "",
  rowClassName = "",
  cellClassName = "",
  onSort,
  sortColumn,
  sortDirection,
  loading = false,
  emptyMessage = "لا توجد بيانات",
}: TableProps<T>) => {
  const handleSort = (column: string) => {
    if (!onSort) return;
    const newDirection =
      sortColumn === column && sortDirection === "asc" ? "desc" : "asc";
    onSort(column, newDirection);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="text-color-mode-text-icons-t-sec">جاري التحميل...</div>
      </div>
    );
  }

  if (data.length === 0) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="text-color-mode-text-icons-t-sec">{emptyMessage}</div>
      </div>
    );
  }

  return (
    <div className={`w-full ${className}`}>
      <div className="flex items-start justify-between relative self-stretch w-full flex-[0_0_auto]">
        {columns.map((column, columnIndex) => (
          <div
            key={column.key}
            className={`flex flex-col ${
              column.width || "flex-1 grow"
            } items-end relative`}
            role="columnheader"
          >
            <div
              className={`flex items-center justify-end gap-2.5 pr-[var(--corner-radius-none)] pl-[var(--corner-radius-none)] py-2.5 relative self-stretch w-full flex-[0_0_auto] bg-color-mode-surface-bg-icon-gray ${headerClassName}`}
            >
              <div className="relative w-fit mt-[-1.00px] font-body-body-2 font-[number:var(--body-body-2-font-weight)] text-black text-[length:var(--body-body-2-font-size)] text-left tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] whitespace-nowrap [direction:rtl] [font-style:var(--body-body-2-font-style)]">
                {column.label}
              </div>
              {column.sortable && onSort && (
                <button
                  onClick={() => handleSort(column.key)}
                  className="w-3.5 h-3.5 relative aspect-[1]"
                  aria-label={`ترتيب حسب ${column.label}`}
                >
                  <img
                    className="w-3.5 h-3.5 relative aspect-[1]"
                    alt="ترتيب"
                    src="/img/side-icons-29.svg"
                  />
                </button>
              )}
            </div>

            {data.map((row, rowIndex) => (
              <div
                key={rowIndex}
                className={`flex items-center justify-end gap-2.5 pr-[var(--corner-radius-none)] pl-[var(--corner-radius-none)] py-2.5 relative self-stretch w-full flex-[0_0_auto] border-b-[0.2px] [border-bottom-style:solid] border-color-mode-text-icons-t-placeholder ${rowClassName}`}
              >
                <div
                  className={`mt-[-0.20px] font-[number:var(--body-body-2-font-weight)] text-black tracking-[var(--body-body-2-letter-spacing)] relative w-fit font-body-body-2 text-[length:var(--body-body-2-font-size)] leading-[var(--body-body-2-line-height)] whitespace-nowrap [font-style:var(--body-body-2-font-style)] ${cellClassName}`}
                >
                  {column.render
                    ? column.render(row[column.key], row, rowIndex)
                    : row[column.key]}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
