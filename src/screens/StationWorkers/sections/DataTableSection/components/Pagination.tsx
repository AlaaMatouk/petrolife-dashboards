import React from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({ 
  currentPage, 
  totalPages, 
  onPageChange 
}) => {
  const paginationNumbers = [20, "...", 7, 6, 5, 4, 3, 2, 1];

  return (
    <div className="flex items-center justify-around gap-[46px] relative self-stretch w-full flex-[0_0_auto]">
      <div className="inline-flex items-start gap-2 relative flex-[0_0_auto]">
        <div className="flex w-[72px] h-8 items-center justify-center gap-2 px-2 py-0 relative bg-color-mode-surface-bg-screen rounded overflow-hidden border-[0.5px] border-solid border-color-mode-text-icons-t-placeholder">
          <img
            className="relative w-4 h-4"
            alt="Icon arrow right"
            src="/img/icon-16-arrow-right.svg"
          />
          <div className="relative w-fit font-[number:var(--body-body-2-font-weight)] text-color-mode-text-icons-t-sec text-[length:var(--body-body-2-font-size)] text-left tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] [direction:rtl] font-body-body-2 whitespace-nowrap [font-style:var(--body-body-2-font-style)]">
            التالي
          </div>
        </div>

        {paginationNumbers.map((number, index) => (
          <div
            key={index}
            className={`flex flex-col w-8 h-8 items-center justify-center gap-2.5 px-2 py-0 relative rounded overflow-hidden ${
              number === currentPage
                ? "bg-color-mode-surface-primary-blue"
                : "bg-color-mode-surface-bg-screen border-[0.5px] border-solid border-color-mode-text-icons-t-placeholder"
            }`}
            onClick={() => typeof number === 'number' && onPageChange(number)}
          >
            <div className="flex flex-col w-[22px] h-[22px] items-center justify-center gap-2.5 p-2.5 relative ml-[-3.00px] mr-[-3.00px] rounded-sm">
              <div
                className={`relative w-fit mt-[-11.00px] mb-[-9.00px] tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] whitespace-nowrap ${
                  number === currentPage
                    ? "font-[number:var(--subtitle-subtitle-3-font-weight)] text-color-mode-text-icons-t-btn-negative text-[length:var(--subtitle-subtitle-3-font-size)] font-subtitle-subtitle-3 [font-style:var(--subtitle-subtitle-3-font-style)] ml-[-2.50px] mr-[-2.50px]"
                    : "font-[number:var(--body-body-2-font-weight)] text-color-mode-text-icons-t-sec text-[length:var(--body-body-2-font-size)] font-body-body-2 [font-style:var(--body-body-2-font-style)]"
                } ${
                  number === 20
                    ? "ml-[-6.50px] mr-[-6.50px]"
                    : number === "..."
                    ? "ml-[-5.00px] mr-[-5.00px]"
                    : number === 7
                    ? "ml-[-2.00px] mr-[-2.00px]"
                    : number === 6 || number === 5 || number === 4
                    ? "ml-[-3.00px] mr-[-3.00px]"
                    : number === 2
                    ? "ml-[-2.50px] mr-[-2.50px]"
                    : number === 1
                    ? "ml-[-2.00px] mr-[-2.00px]"
                    : ""
                }`}
              >
                {number}
              </div>
            </div>
          </div>
        ))}

        <div className="flex w-[72px] h-8 items-center justify-center gap-[5px] px-2 py-0 relative bg-color-mode-surface-bg-screen rounded overflow-hidden border-[0.5px] border-solid border-color-mode-text-icons-t-placeholder">
          <div className="relative w-fit ml-[-3.50px] font-[number:var(--body-body-2-font-weight)] text-color-mode-text-icons-t-sec text-[length:var(--body-body-2-font-size)] text-left tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] [direction:rtl] font-body-body-2 whitespace-nowrap [font-style:var(--body-body-2-font-style)]">
            السابق
          </div>
          <img
            className="mr-[-3.50px] relative w-4 h-4"
            alt="Icon arrow left"
            src="/img/icon-16-arrow-left.svg"
          />
        </div>
      </div>
    </div>
  );
};

