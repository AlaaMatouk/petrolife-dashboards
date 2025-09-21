import React, { useState } from "react";

export const PaginationSection = (): JSX.Element => {
  const [currentPage, setCurrentPage] = useState(3);

  const paginationItems = [
    { type: "next", label: "التالي", icon: "/img/icon-16-arrow-right.svg" },
    { type: "page", value: 20 },
    { type: "ellipsis", value: "..." },
    { type: "page", value: 7 },
    { type: "page", value: 6 },
    { type: "page", value: 5 },
    { type: "page", value: 4 },
    { type: "page", value: 3, active: true },
    { type: "page", value: 2 },
    { type: "page", value: 1 },
    { type: "prev", label: "السابق", icon: "/img/icon-16-arrow-left.svg" },
  ];

  const handlePageClick = (page: number) => {
    setCurrentPage(page);
  };

  const renderPaginationItem = (item: any, index: number) => {
    if (item.type === "next") {
      return (
        <button
          key={index}
          className="flex w-[72px] h-8 items-center justify-center gap-2 px-2 py-0 relative bg-color-mode-surface-bg-screen rounded overflow-hidden border-[0.5px] border-solid border-color-mode-text-icons-t-placeholder hover:bg-gray-50 transition-colors"
          aria-label="الصفحة التالية"
        >
          <img
            className="relative w-4 h-4"
            alt="Icon arrow right"
            src={item.icon}
          />
          <div className="w-fit font-[number:var(--body-body-2-font-weight)] text-color-mode-text-icons-t-sec text-[length:var(--body-body-2-font-size)] text-left tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] [direction:rtl] relative font-body-body-2 whitespace-nowrap [font-style:var(--body-body-2-font-style)]">
            {item.label}
          </div>
        </button>
      );
    }

    if (item.type === "prev") {
      return (
        <button
          key={index}
          className="flex w-[72px] h-8 items-center justify-center gap-[5px] px-2 py-0 relative bg-color-mode-surface-bg-screen rounded overflow-hidden border-[0.5px] border-solid border-color-mode-text-icons-t-placeholder hover:bg-gray-50 transition-colors"
          aria-label="الصفحة السابقة"
        >
          <div className="w-fit ml-[-3.50px] font-[number:var(--body-body-2-font-weight)] text-color-mode-text-icons-t-sec text-[length:var(--body-body-2-font-size)] text-left tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] [direction:rtl] relative font-body-body-2 whitespace-nowrap [font-style:var(--body-body-2-font-style)]">
            {item.label}
          </div>
          <img
            className="mr-[-3.50px] relative w-4 h-4"
            alt="Icon arrow left"
            src={item.icon}
          />
        </button>
      );
    }

    if (item.type === "ellipsis") {
      return (
        <div
          key={index}
          className="flex flex-col w-8 h-8 items-center justify-center gap-2.5 px-2 py-0 relative bg-color-mode-surface-bg-screen rounded overflow-hidden border-[0.5px] border-solid border-color-mode-text-icons-t-placeholder"
        >
          <div className="flex flex-col w-[22px] h-[22px] items-center justify-center gap-2.5 p-2.5 relative ml-[-3.00px] mr-[-3.00px] rounded-sm">
            <div className="w-fit mt-[-11.00px] mb-[-9.00px] ml-[-5.00px] mr-[-5.00px] font-[number:var(--body-body-2-font-weight)] text-color-mode-text-icons-t-sec text-[length:var(--body-body-2-font-size)] tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] relative font-body-body-2 whitespace-nowrap [font-style:var(--body-body-2-font-style)]">
              {item.value}
            </div>
          </div>
        </div>
      );
    }

    if (item.type === "page") {
      const isActive = item.active || currentPage === item.value;
      return (
        <button
          key={index}
          onClick={() => handlePageClick(item.value)}
          className={`flex flex-col w-8 h-8 items-center justify-center gap-2.5 px-2 py-0 relative rounded overflow-hidden transition-colors ${
            isActive
              ? "bg-color-mode-surface-primary-blue"
              : "bg-color-mode-surface-bg-screen border-[0.5px] border-solid border-color-mode-text-icons-t-placeholder hover:bg-gray-50"
          }`}
          aria-label={`الصفحة ${item.value}`}
          aria-current={isActive ? "page" : undefined}
        >
          <div className="flex flex-col w-[22px] h-[22px] items-center justify-center gap-2.5 p-2.5 relative ml-[-3.00px] mr-[-3.00px] rounded-sm">
            <div
              className={`mt-[-11.00px] mb-[-9.00px] tracking-[var(--body-body-2-letter-spacing)] relative w-fit whitespace-nowrap ${
                isActive
                  ? "ml-[-2.50px] mr-[-2.50px] font-[number:var(--subtitle-subtitle-3-font-weight)] text-color-mode-text-icons-t-btn-negative font-subtitle-subtitle-3 text-[length:var(--subtitle-subtitle-3-font-size)] leading-[var(--subtitle-subtitle-3-line-height)] [font-style:var(--subtitle-subtitle-3-font-style)]"
                  : `font-[number:var(--body-body-2-font-weight)] text-color-mode-text-icons-t-sec font-body-body-2 text-[length:var(--body-body-2-font-size)] leading-[var(--body-body-2-line-height)] [font-style:var(--body-body-2-font-style)] ${
                      item.value === 20
                        ? "ml-[-6.50px] mr-[-6.50px]"
                        : item.value === 7
                          ? "ml-[-2.00px] mr-[-2.00px]"
                          : item.value === 6
                            ? "ml-[-3.00px] mr-[-3.00px]"
                            : item.value === 5
                              ? "ml-[-3.00px] mr-[-3.00px]"
                              : item.value === 4
                                ? "ml-[-3.00px] mr-[-3.00px]"
                                : item.value === 2
                                  ? "ml-[-2.50px] mr-[-2.50px]"
                                  : item.value === 1
                                    ? "ml-[-2.00px] mr-[-2.00px]"
                                    : "ml-[-3.00px] mr-[-3.00px]"
                    }`
              }`}
            >
              {item.value}
            </div>
          </div>
        </button>
      );
    }

    return null;
  };

  return (
    <nav
      className="flex items-center justify-around gap-[46px] relative self-stretch w-full flex-[0_0_auto]"
      role="navigation"
      aria-label="صفحات التنقل"
    >
      <div className="inline-flex items-start gap-2 relative flex-[0_0_auto]">
        {paginationItems.map((item, index) =>
          renderPaginationItem(item, index),
        )}
      </div>
    </nav>
  );
};
