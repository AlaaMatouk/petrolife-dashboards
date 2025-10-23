import React from "react";
import { SlidersHorizontal } from "lucide-react";
import { LoadingSpinner } from "../shared/Spinner/LoadingSpinner";

export interface TableColumn<T = any> {
  key: string;
  label?: string;
  width?: string;
  render?: (value: any, row: T, index: number) => React.ReactNode;
  className?: string;
}

export interface TableProps<T = any> {
  columns: TableColumn<T>[];
  data: T[];
  className?: string;
  headerClassName?: string;
  rowClassName?: string;
  cellClassName?: string;
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
  loading = false,
  emptyMessage = "لا توجد بيانات",
}: TableProps<T>) => {
  if (loading) {
    return (
      <LoadingSpinner size="md" message="جاري التحميل..." className="py-8" />
    );
  }

  if (data.length === 0) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="text-color-mode-text-icons-t-sec">{emptyMessage}</div>
      </div>
    );
  }

  const hasAnyLabels = columns.some((column) => column.label);

  return (
    <div className={`w-full items ${className}`}>
      <div className="overflow-x-auto ">
        <table
          className="w-full"
          style={{ borderCollapse: "separate", borderSpacing: 0 }}
        >
          {hasAnyLabels && (
            <thead>
              <tr>
                {columns.map((column) => (
                  <th
                    key={column.key}
                    className={`px-4 py-3 text-center bg-gray-50 border-b border-gray-200 font-medium text-gray-700 text-sm whitespace-nowrap ${
                      column.width || "w-auto"
                    } ${headerClassName}`}
                  >
                    {column.label && (
                      <div className="flex items-center justify-end gap-2">
                        <span>{column.label}</span>
                        {column.key === "accountStatus" && (
                          <SlidersHorizontal className="w-4 h-4 text-gray-400" />
                        )}
                      </div>
                    )}
                  </th>
                ))}
              </tr>
            </thead>
          )}
          <tbody>
            {(Array.isArray(data) ? data : []).map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className={`hover:bg-gray-50 transition-colors ${rowClassName}`}
                style={{
                  borderBottom: "1px solid var(--border-light, #e5e7eb)",
                  borderBottomWidth: "1px",
                  borderBottomStyle: "solid",
                  borderBottomColor: "var(--border-light, #e5e7eb)",
                }}
              >
                {columns.map((column) => (
                  <td
                    key={column.key}
                    className={`align-middle py-3 px-4 text-sm text-center ${
                      column.width || "w-auto"
                    } ${cellClassName}`}
                    style={{
                      borderBottom: "1px solid var(--border-light, #e5e7eb)",
                    }}
                  >
                    <div className="flex items-center justify-end">
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
