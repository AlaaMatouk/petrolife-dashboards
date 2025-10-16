import React from "react";

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  showFirstLast?: boolean;
  maxVisiblePages?: number;
  className?: string;
  previousLabel?: string;
  nextLabel?: string;
  disabled?: boolean;
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  showFirstLast = true,
  maxVisiblePages = 7,
  className = "",
  previousLabel = "السابق",
  nextLabel = "التالي",
  disabled = false,
}) => {
  const generatePageNumbers = (): (number | string)[] => {
    const pages: (number | string)[] = [];

    if (totalPages <= maxVisiblePages) {
      // Show all pages if total is less than max visible
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Always show first page
      pages.push(1);

      if (currentPage > 3) {
        pages.push("...");
      }

      // Show pages around current page
      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);

      for (let i = start; i <= end; i++) {
        if (i !== 1 && i !== totalPages) {
          pages.push(i);
        }
      }

      if (currentPage < totalPages - 2) {
        pages.push("...");
      }

      // Always show last page
      if (totalPages > 1) {
        pages.push(totalPages);
      }
    }

    return pages;
  };

  const pageNumbers = generatePageNumbers();
  // Reverse for RTL (right-to-left) display
  const rtlPageNumbers = [...pageNumbers].reverse();

  const handlePrevious = () => {
    if (currentPage > 1 && !disabled) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages && !disabled) {
      onPageChange(currentPage + 1);
    }
  };

  const handlePageClick = (page: number | string) => {
    if (typeof page === "number" && !disabled) {
      onPageChange(page);
    }
  };

  return (
    <nav
      className={`flex items-center justify-around gap-[46px] relative self-stretch w-full flex-[0_0_auto] ${className}`}
      role="navigation"
      aria-label="تنقل الصفحات"
    >
      <div className="inline-flex items-start gap-2 relative flex-[0_0_auto]">
        {/* Previous Button - سهم يمين on the LEFT of text */}
        <button
          onClick={handlePrevious}
          disabled={currentPage <= 1 || disabled}
          className="flex w-[72px] h-8 items-center justify-center gap-[5px] px-2 py-0 relative bg-color-mode-surface-bg-screen rounded overflow-hidden border-[0.5px] border-solid border-color-mode-text-icons-t-placeholder hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="الصفحة السابقة"
        >
          <img
            className="mr-[-3.50px] relative w-4 h-4"
            alt="سهم يمين"
            src="/img/icon-16-arrow-right.svg"
          />
          <div className="relative w-fit ml-[-3.50px] font-body-body-2 font-[number:var(--body-body-2-font-weight)] text-color-mode-text-icons-t-sec text-[length:var(--body-body-2-font-size)] text-left tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] whitespace-nowrap [direction:rtl] [font-style:var(--body-body-2-font-style)]">
            {previousLabel}
          </div>
        </button>

        {/* Page Numbers */}
        {rtlPageNumbers.map((page, index) => {
          if (page === "...") {
            return (
              <div
                key={`ellipsis-${index}`}
                className="flex flex-col w-8 h-8 items-center justify-center gap-2.5 px-2 py-0 relative bg-color-mode-surface-bg-screen rounded overflow-hidden border-[0.5px] border-solid border-color-mode-text-icons-t-placeholder"
              >
                <div className="flex flex-col w-[22px] h-[22px] items-center justify-center gap-2.5 p-2.5 relative ml-[-3.00px] mr-[-3.00px] rounded-sm">
                  <div className="relative w-fit mt-[-11.00px] mb-[-9.00px] ml-[-5.00px] mr-[-5.00px] font-[number:var(--body-body-2-font-weight)] text-color-mode-text-icons-t-sec text-[length:var(--body-body-2-font-size)] tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] font-body-body-2 whitespace-nowrap [font-style:var(--body-body-2-font-style)]">
                    ...
                  </div>
                </div>
              </div>
            );
          }

          const isActive = page === currentPage;
          const pageNum = page as number;

          return (
            <button
              key={pageNum}
              onClick={() => handlePageClick(pageNum)}
              disabled={disabled}
              className={`flex flex-col w-8 h-8 items-center justify-center gap-2.5 px-2 py-0 relative rounded overflow-hidden transition-colors disabled:cursor-not-allowed ${
                isActive
                  ? "bg-color-mode-surface-primary-blue"
                  : "bg-color-mode-surface-bg-screen border-[0.5px] border-solid border-color-mode-text-icons-t-placeholder hover:bg-gray-50"
              }`}
              aria-label={`الصفحة ${pageNum}`}
              aria-current={isActive ? "page" : undefined}
            >
              <div className="flex flex-col w-[22px] h-[22px] items-center justify-center gap-2.5 p-2.5 relative ml-[-3.00px] mr-[-3.00px] rounded-sm">
                <div
                  className={`relative w-fit mt-[-11.00px] mb-[-9.00px] whitespace-nowrap ${
                    isActive
                      ? "font-subtitle-subtitle-3 font-[number:var(--subtitle-subtitle-3-font-weight)] text-color-mode-text-icons-t-btn-negative text-[length:var(--subtitle-subtitle-3-font-size)] tracking-[var(--subtitle-subtitle-3-letter-spacing)] leading-[var(--subtitle-subtitle-3-line-height)] [font-style:var(--subtitle-subtitle-3-font-style)]"
                      : "font-body-body-2 font-[number:var(--body-body-2-font-weight)] text-color-mode-text-icons-t-sec text-[length:var(--body-body-2-font-size)] tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] [font-style:var(--body-body-2-font-style)]"
                  }`}
                >
                  {pageNum}
                </div>
              </div>
            </button>
          );
        })}

        {/* Next Button - سهم يسار on the RIGHT of text */}
        <button
          onClick={handleNext}
          disabled={currentPage >= totalPages || disabled}
          className="flex w-[72px] h-8 items-center justify-center gap-2 px-2 py-0 relative bg-color-mode-surface-bg-screen rounded overflow-hidden border-[0.5px] border-solid border-color-mode-text-icons-t-placeholder hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="الصفحة التالية"
        >
          <div className="relative w-fit font-body-body-2 font-[number:var(--body-body-2-font-weight)] text-color-mode-text-icons-t-sec text-[length:var(--body-body-2-font-size)] text-left tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] whitespace-nowrap [direction:rtl] [font-style:var(--body-body-2-font-style)]">
            {nextLabel}
          </div>
          <img
            className="relative w-4 h-4"
            alt="سهم يسار"
            src="/img/icon-16-arrow-left.svg"
          />
        </button>
      </div>
    </nav>
  );
};
