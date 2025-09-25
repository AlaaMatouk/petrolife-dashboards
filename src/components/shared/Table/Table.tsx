import React from "react";
import { SlidersHorizontal } from "lucide-react";

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
      <div className="overflow-x-auto">
        <table className="w-full" style={{ borderCollapse: 'separate', borderSpacing: 0 }}>
          <thead>
            <tr>
              {columns.map((column) => (
                <th
                  key={column.key}
                  className={`px-4 py-3 text-center bg-gray-50 border-b border-gray-200 font-medium text-gray-700 text-sm whitespace-nowrap ${column.width || "w-auto"} ${headerClassName}`}
                >
                  <div className="flex items-center justify-center gap-2">
                    <span>{column.label}</span>
                    {column.key !== "actions" && column.key !== "carNumber" && column.key !== "carName" && column.key !== "drivers" && (
                      <SlidersHorizontal className="w-4 h-4 text-gray-400" />
                    )}
                    {column.sortable && onSort && (
                      <button
                        onClick={() => handleSort(column.key)}
                        className="w-3.5 h-3.5 hover:bg-gray-200 rounded p-0.5"
                        aria-label={`ترتيب حسب ${column.label}`}
                      >
                        <img
                          className="w-3.5 h-3.5"
                          alt="ترتيب"
                          src="/img/side-icons-29.svg"
                        />
                      </button>
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className={`hover:bg-gray-50 transition-colors ${rowClassName}`}
                style={{ 
                  borderBottom: '1px solid var(--border-light, #e5e7eb)',
                  borderBottomWidth: '1px',
                  borderBottomStyle: 'solid',
                  borderBottomColor: 'var(--border-light, #e5e7eb)'
                }}
              >
                {columns.map((column) => (
                  <td
                    key={column.key}
                    className={`px-4 py-3 text-sm text-center ${column.width || "w-auto"} ${cellClassName}`}
                    style={{ borderBottom: '1px solid var(--border-light, #e5e7eb)' }}
                  >
                    <div className="flex items-center justify-center">
                      {column.render
                        ? column.render(row[column.key], row, rowIndex)
                        : row[column.key]}
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
