import React, { useState } from "react";
import { Download } from "lucide-react";

export const HeaderSection = (): JSX.Element => {
  const [selectedTimeFilter, setSelectedTimeFilter] = useState("اخر 12 شهر");

  const timeFilters = ["اخر اسبوع", "اخر 30 يوم", "اخر 6 شهور", "اخر 12 شهر"];

  return (
    <header className="flex flex-col items-end gap-[var(--corner-radius-extra-large)] relative self-stretch w-full flex-[0_0_auto]">
      <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
        <div className="inline-flex items-center gap-[var(--corner-radius-medium)] relative flex-[0_0_auto]">
          <button
            className="relative self-stretch w-[79px] rounded-[5px] border-[0.5px] border-solid border-color-mode-text-icons-t-placeholder hover:bg-color-mode-surface-bg-icon-gray transition-colors duration-200 flex items-center justify-center gap-1"
            aria-label="تصدير البيانات"
          >
            <span className="font-subtitle-subtitle-3 font-[number:var(--subtitle-subtitle-3-font-weight)] text-color-mode-text-icons-t-sec text-[length:var(--subtitle-subtitle-3-font-size)] text-left tracking-[var(--subtitle-subtitle-3-letter-spacing)] leading-[var(--subtitle-subtitle-3-line-height)] whitespace-nowrap [direction:rtl] [font-style:var(--subtitle-subtitle-3-font-style)]">
              تصدير
            </span>
            <Download className="w-4 h-4 text-gray-500" />
          </button>
        </div>

        <div className="inline-flex items-center justify-end gap-[var(--corner-radius-extra-large)] relative flex-[0_0_auto]">
          <nav
            className="inline-flex items-center gap-[11px] relative flex-[0_0_auto]"
            role="tablist"
            aria-label="فلاتر الوقت"
          >
            <button
              className="w-[35px] bg-color-mode-surface-bg-icon-gray border-[0.2px] border-solid border-color-mode-surface-bg-screen flex flex-col h-[30px] items-center justify-center gap-2.5 p-4 relative rounded-[5px] hover:bg-opacity-60 transition-all duration-200"
              aria-label="عرض الخيارات"
            >
              <div className="w-[29.17px] gap-[12.5px] mt-[-11.00px] mb-[-11.00px] ml-[-13.08px] mr-[-13.08px] flex items-center justify-center relative flex-[0_0_auto]">
                <div className="relative w-5 h-5 aspect-[1]">
                  <img
                    className="absolute w-[33.33%] h-[16.67%] top-[5.83%] left-[30.83%]"
                    alt=""
                    src="/img/vector.svg"
                  />
                  <img
                    className="absolute w-[75.00%] h-[75.00%] top-[14.17%] left-[10.00%]"
                    alt=""
                    src="/img/vector-1.svg"
                  />
                  <img
                    className="absolute w-[75.00%] h-0 top-[39.17%] left-[10.00%] object-cover"
                    alt=""
                    src="/img/vector-2.svg"
                  />
                  <img
                    className="absolute w-[33.33%] h-[16.67%] top-[54.17%] left-[29.17%]"
                    alt=""
                    src="/img/vector-3.svg"
                  />
                </div>
              </div>
            </button>

            {timeFilters.map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedTimeFilter(filter)}
                className={`flex flex-col w-[100.98px] h-[30px] items-center justify-center gap-2.5 p-4 relative rounded-[5px] border-[0.2px] border-solid transition-all duration-200 ${
                  selectedTimeFilter === filter
                    ? "bg-basewhite border-color-mode-text-icons-t-blue"
                    : "bg-color-mode-surface-bg-screen border-color-mode-text-icons-t-placeholder hover:bg-color-mode-surface-bg-icon-gray"
                }`}
                role="tab"
                aria-selected={selectedTimeFilter === filter}
                aria-label={`فلترة حسب ${filter}`}
              >
                <div className="flex w-[126px] items-center justify-center gap-[15px] relative flex-[0_0_auto] mt-[-12.00px] mb-[-12.00px] ml-[-28.51px] mr-[-28.51px]">
                  <span
                    className={`relative flex items-center justify-center w-fit mt-[-1.00px] font-body-body-2 font-[number:var(--body-body-2-font-weight)] text-[length:var(--body-body-2-font-size)] tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] whitespace-nowrap [direction:rtl] [font-style:var(--body-body-2-font-style)] ${
                      selectedTimeFilter === filter
                        ? "text-color-mode-text-icons-t-primary-gray"
                        : "text-color-mode-text-icons-t-sec"
                    }`}
                  >
                    {filter}
                  </span>
                </div>
              </button>
            ))}
          </nav>

          <div className="inline-flex flex-col items-end justify-center gap-2.5 relative flex-[0_0_auto]">
            <div className="flex w-[188px] items-center justify-end gap-1.5 relative flex-[0_0_auto]">
              <h1 className="w-[190px] h-5 mt-[-1.00px] ml-[-26.00px] font-[number:var(--subtitle-subtitle-2-font-weight)] text-color-mode-text-icons-t-sec text-[length:var(--subtitle-subtitle-2-font-size)] tracking-[var(--subtitle-subtitle-2-letter-spacing)] leading-[var(--subtitle-subtitle-2-line-height)] [direction:rtl] relative font-subtitle-subtitle-2 whitespace-nowrap [font-style:var(--subtitle-subtitle-2-font-style)]">
                طلبات شحن المحفظة
              </h1>

              <img
                className="relative w-[18px] h-[18px] aspect-[1]"
                alt="أيقونة جانبية"
                src="/img/side-icons.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
