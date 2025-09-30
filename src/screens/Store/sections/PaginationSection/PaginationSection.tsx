import React, { useState } from "react";

export const PaginationSection = (): JSX.Element => {
  const [currentPage, setCurrentPage] = useState(3);

  const paginationItems = [
    {
      type: "button",
      label: "التالي",
      icon: "/img/icon-16-arrow-right.svg",
      iconPosition: "left",
      width: "w-[72px]",
    },
    { type: "page", label: "20" },
    { type: "ellipsis", label: "..." },
    { type: "page", label: "7" },
    { type: "page", label: "6" },
    { type: "page", label: "5" },
    { type: "page", label: "4" },
    { type: "page", label: "3", active: true },
    { type: "page", label: "2" },
    { type: "page", label: "1" },
    {
      type: "button",
      label: "السابق",
      icon: "/img/icon-16-arrow-left.svg",
      iconPosition: "right",
      width: "w-[72px]",
    },
  ];

  const handlePageClick = (pageNumber: string) => {
    if (pageNumber !== "..." && !isNaN(Number(pageNumber))) {
      setCurrentPage(Number(pageNumber));
    }
  };

  const renderPaginationItem = (item: any, index: number) => {
    const isActive =
      item.active ||
      (item.type === "page" && Number(item.label) === currentPage);

    if (item.type === "button") {
      return (
        <button
          key={index}
          className={`flex ${item.width} h-8 items-center justify-center gap-2 px-2 py-0 relative bg-color-mode-surface-bg-screen rounded overflow-hidden border-[0.5px] border-solid border-color-mode-text-icons-t-placeholder hover:bg-color-mode-surface-bg-icon-gray transition-colors cursor-pointer`}
          onClick={() => {
            if (item.label === "التالي" && currentPage < 20) {
              setCurrentPage(currentPage + 1);
            } else if (item.label === "السابق" && currentPage > 1) {
              setCurrentPage(currentPage - 1);
            }
          }}
          aria-label={item.label}
        >
          {item.iconPosition === "left" && (
            <img
              className="relative w-4 h-4"
              alt={`Icon arrow ${item.iconPosition === "left" ? "right" : "left"}`}
              src={item.icon}
            />
          )}
          <div className="w-fit font-[number:var(--body-body-2-font-weight)] text-color-mode-text-icons-t-sec text-[length:var(--body-body-2-font-size)] text-left tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] whitespace-nowrap [direction:rtl] relative font-body-body-2 [font-style:var(--body-body-2-font-style)]">
            {item.label}
          </div>
          {item.iconPosition === "right" && (
            <img
              className="relative w-4 h-4"
              alt={`Icon arrow ${item.iconPosition === "left" ? "right" : "left"}`}
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
        >
          <div className="flex flex-col w-[22px] h-[22px] items-center justify-center gap-2.5 p-2.5 relative ml-[-3.00px] mr-[-3.00px] rounded-sm">
            <div className="w-fit mt-[-11.00px] mb-[-9.00px] ml-[-5.00px] mr-[-5.00px] font-[number:var(--body-body-2-font-weight)] text-color-mode-text-icons-t-sec text-[length:var(--body-body-2-font-size)] tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] whitespace-nowrap relative font-body-body-2 [font-style:var(--body-body-2-font-style)]">
              {item.label}
            </div>
          </div>
        </div>
      );
    }

    return (
      <button
        key={index}
        className={`flex flex-col w-8 h-8 items-center justify-center gap-2.5 px-2 py-0 relative rounded overflow-hidden cursor-pointer transition-colors ${
          isActive
            ? "bg-color-mode-surface-primary-blue"
            : "bg-color-mode-surface-bg-screen border-[0.5px] border-solid border-color-mode-text-icons-t-placeholder hover:bg-color-mode-surface-bg-icon-gray"
        }`}
        onClick={() => handlePageClick(item.label)}
        aria-label={`Page ${item.label}`}
        aria-current={isActive ? "page" : undefined}
      >
        <div className="flex flex-col w-[22px] h-[22px] items-center justify-center gap-2.5 p-2.5 relative ml-[-3.00px] mr-[-3.00px] rounded-sm">
          <div
            className={`relative w-fit mt-[-11.00px] mb-[-9.00px] whitespace-nowrap ${
              isActive
                ? "ml-[-2.50px] mr-[-2.50px] font-[number:var(--subtitle-subtitle-3-font-weight)] text-color-mode-text-icons-t-btn-negative tracking-[var(--subtitle-subtitle-3-letter-spacing)] font-subtitle-subtitle-3 text-[length:var(--subtitle-subtitle-3-font-size)] leading-[var(--subtitle-subtitle-3-line-height)] [font-style:var(--subtitle-subtitle-3-font-style)]"
                : `${
                    item.label === "20"
                      ? "ml-[-6.50px] mr-[-6.50px]"
                      : item.label === "7"
                        ? "ml-[-2.00px] mr-[-2.00px]"
                        : item.label === "6"
                          ? "ml-[-3.00px] mr-[-3.00px]"
                          : item.label === "5"
                            ? "ml-[-3.00px] mr-[-3.00px]"
                            : item.label === "4"
                              ? "ml-[-3.00px] mr-[-3.00px]"
                              : item.label === "2"
                                ? "ml-[-2.50px] mr-[-2.50px]"
                                : "ml-[-2.00px] mr-[-2.00px]"
                  } font-[number:var(--body-body-2-font-weight)] text-color-mode-text-icons-t-sec tracking-[var(--body-body-2-letter-spacing)] font-body-body-2 text-[length:var(--body-body-2-font-size)] leading-[var(--body-body-2-line-height)] [font-style:var(--body-body-2-font-style)]`
            }`}
          >
            {item.label}
          </div>
        </div>
      </button>
    );
  };

  return (
    <nav
      className="flex items-center justify-around gap-[46px] relative self-stretch w-full flex-[0_0_auto]"
      role="navigation"
      aria-label="Pagination Navigation"
    >
      <div className="inline-flex items-start gap-2 relative flex-[0_0_auto]">
        {paginationItems.map((item, index) =>
          renderPaginationItem(item, index),
        )}
      </div>
    </nav>
  );
};
