import React, { useState } from "react";

export const PaginationSection = (): JSX.Element => {
  const [currentPage, setCurrentPage] = useState(3);

  const paginationItems = [
    {
      type: "button",
      label: "التالي",
      icon: "/img/icon-16-arrow-right.svg",
      iconPosition: "left",
    },
    { type: "page", value: 20 },
    { type: "ellipsis", value: "..." },
    { type: "page", value: 7 },
    { type: "page", value: 6 },
    { type: "page", value: 5 },
    { type: "page", value: 4 },
    { type: "page", value: 3, active: true },
    { type: "page", value: 2 },
    { type: "page", value: 1 },
    {
      type: "button",
      label: "السابق",
      icon: "/img/icon-16-arrow-left.svg",
      iconPosition: "right",
    },
  ];

  const handlePageClick = (page: number) => {
    setCurrentPage(page);
  };

  const renderPaginationItem = (item: any, index: number) => {
    if (item.type === "button") {
      return (
        <button
          key={index}
          className="flex w-[72px] h-8 items-center justify-center gap-2 px-2 py-0 relative bg-color-mode-surface-bg-screen rounded overflow-hidden border-[0.5px] border-solid border-color-mode-text-icons-t-placeholder hover:bg-gray-50 transition-colors"
          aria-label={item.label}
        >
          {item.iconPosition === "left" && (
            <img
              className="relative w-4 h-4"
              alt={`Icon ${item.label}`}
              src={item.icon}
            />
          )}
          <span className="w-fit font-[number:var(--body-body-2-font-weight)] text-[length:var(--body-body-2-font-size)] text-left tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] [direction:rtl] relative font-body-body-2 text-color-mode-text-icons-t-sec whitespace-nowrap [font-style:var(--body-body-2-font-style)]">
            {item.label}
          </span>
          {item.iconPosition === "right" && (
            <img
              className="relative w-4 h-4"
              alt={`Icon ${item.label}`}
              src={item.icon}
            />
          )}
        </button>
      );
    }

    if (item.type === "ellipsis") {
      return (
        <div
          key={index}
          className="flex flex-col w-8 h-8 items-center justify-center gap-2.5 px-2 py-0 relative bg-color-mode-surface-bg-screen rounded overflow-hidden border-[0.5px] border-solid border-color-mode-text-icons-t-placeholder"
          role="presentation"
        >
          <div className="flex flex-col w-[22px] h-[22px] items-center justify-center gap-2.5 p-2.5 relative ml-[-3.00px] mr-[-3.00px] rounded-sm">
            <div className="w-fit mt-[-11.00px] mb-[-9.00px] ml-[-5.00px] mr-[-5.00px] font-[number:var(--body-body-2-font-weight)] text-[length:var(--body-body-2-font-size)] tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] relative font-body-body-2 text-color-mode-text-icons-t-sec whitespace-nowrap [font-style:var(--body-body-2-font-style)]">
              {item.value}
            </div>
          </div>
        </div>
      );
    }

    if (item.type === "page") {
      const isActive = item.active || item.value === currentPage;
      return (
        <button
          key={index}
          onClick={() => handlePageClick(item.value)}
          className={`flex flex-col w-8 h-8 items-center justify-center gap-2.5 px-2 py-0 relative rounded overflow-hidden transition-colors hover:bg-opacity-80 ${
            isActive
              ? "bg-color-mode-surface-primary-blue"
              : "bg-color-mode-surface-bg-screen border-[0.5px] border-solid border-color-mode-text-icons-t-placeholder hover:bg-gray-50"
          }`}
          aria-label={`صفحة ${item.value}`}
          aria-current={isActive ? "page" : undefined}
        >
          <div className="flex flex-col w-[22px] h-[22px] items-center justify-center gap-2.5 p-2.5 relative ml-[-3.00px] mr-[-3.00px] rounded-sm">
            <div
              className={`w-fit mt-[-11.00px] mb-[-9.00px] ml-[-2.50px] mr-[-2.50px] whitespace-nowrap relative ${
                isActive
                  ? "font-[number:var(--subtitle-subtitle-3-font-weight)] text-color-mode-text-icons-t-btn-negative text-[length:var(--subtitle-subtitle-3-font-size)] tracking-[var(--subtitle-subtitle-3-letter-spacing)] leading-[var(--subtitle-subtitle-3-line-height)] font-subtitle-subtitle-3 [font-style:var(--subtitle-subtitle-3-font-style)]"
                  : "font-[number:var(--body-body-2-font-weight)] text-color-mode-text-icons-t-sec text-[length:var(--body-body-2-font-size)] tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] font-body-body-2 [font-style:var(--body-body-2-font-style)]"
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
      className="flex h-8 items-center justify-around gap-[46px] relative self-stretch w-full"
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
