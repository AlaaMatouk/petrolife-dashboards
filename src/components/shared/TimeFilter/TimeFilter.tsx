import React from "react";
import { Calendar } from "lucide-react";

interface TimeFilterProps {
  selectedFilter: string;
  onFilterChange: (filter: string) => void;
  filters?: string[];
  className?: string;
}

export const TimeFilter: React.FC<TimeFilterProps> = ({
  selectedFilter,
  onFilterChange,
  filters = ["اخر اسبوع", "اخر 30 يوم", "اخر 6 شهور", "اخر 12 شهر"],
  className = "",
}) => {
  return (
    <div className={`inline-flex items-center gap-[11px] relative flex-[0_0_auto] ${className}`}>
      <button
        className="w-[35px] bg-color-mode-surface-bg-icon-gray border-[0.2px] border-solid border-color-mode-surface-bg-screen flex items-center justify-center h-[30px] relative rounded-[5px] hover:bg-opacity-60 transition-all duration-200"
        aria-label="عرض الخيارات"
      >
        <Calendar className="w-4 h-4 text-gray-600" />
      </button>

      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => onFilterChange(filter)}
          className={`flex flex-col w-[100.98px] h-[30px] items-center justify-center gap-2.5 p-4 relative rounded-[5px] border-[0.2px] border-solid transition-all hover:border-[var(--color-mode-text-icons-t-blue)] focus:outline-none focus:ring-2 focus:ring-[var(--color-mode-text-icons-t-blue)] focus:ring-opacity-50 ${
            selectedFilter === filter
              ? "border-[var(--color-mode-text-icons-t-blue)] bg-[var(--color-mode-text-icons-t-blue)]/5"
              : "border-[var(--border-medium)]"
          }`}
          aria-pressed={selectedFilter === filter}
          type="button"
        >
          <div className="flex w-[126px] items-center justify-center gap-[15px] relative flex-[0_0_auto] mt-[-9.00px] mb-[-9.00px] ml-[-28.51px] mr-[-28.51px]">
            <span
              className={`flex items-center justify-center h-4 mt-[-1.00px] text-sm tracking-[0.40px] leading-[19.2px] whitespace-nowrap [font-family:'Tajawal',Helvetica] [direction:rtl] transition-colors ${
                selectedFilter === filter
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
  );
};
