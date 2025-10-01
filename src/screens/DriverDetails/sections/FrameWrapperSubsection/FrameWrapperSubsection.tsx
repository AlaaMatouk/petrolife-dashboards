import { Fuel } from "lucide-react";
import React, { useState } from "react";

export const FrameWrapperSubsection = (): JSX.Element => {
  const [selectedPeriod, setSelectedPeriod] = useState("12 شهر");

  const timeOptions = [
    { id: "week", label: "اسبوع", value: "اسبوع" },
    { id: "month", label: "30 يوم", value: "30 يوم" },
    { id: "sixMonths", label: "6 شهور", value: "6 شهور" },
    { id: "year", label: "12 شهر", value: "12 شهر" },
  ];

  const handlePeriodSelect = (value: string) => {
    setSelectedPeriod(value);
  };

  return (
    <section
      className="flex w-[627px] items-center gap-[29px] relative top-[18px] left-[435px]"
      role="region"
      aria-label="استهلاك البيانات"
    >
      <div
        className="inline-flex items-center gap-[11px] relative flex-[0_0_auto]"
        role="group"
        aria-label="خيارات الفترة الزمنية"
      >
        <button
          className="w-[35px] bg-[var(--color-mode-surface-bg-icon-gray)] border-[0.2px] border-solid border-white flex flex-col h-[30px] items-center justify-center gap-2.5 p-4 relative rounded-[5px] hover:bg-[var(--color-mode-surface-bg-icon-gray)] focus:outline-none focus:ring-2 focus:ring-[var(--color-mode-text-icons-t-blue)] focus:ring-opacity-50 transition-colors"
          aria-label="عرض الرسم البياني"
          type="button"
        >
          <div className="w-[29.17px] gap-[12.5px] mt-[-11.00px] mb-[-11.00px] ml-[-13.08px] mr-[-13.08px] flex items-center justify-center relative flex-[0_0_auto]">
            <div className="relative w-5 h-5 aspect-[1]" aria-hidden="true">
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

        {timeOptions.map((option) => (
          <button
            key={option.id}
            onClick={() => handlePeriodSelect(option.value)}
            className={`flex flex-col w-[100.98px] h-[30px] items-center justify-center gap-2.5 p-4 relative rounded-[5px] border-[0.2px] border-solid transition-all hover:border-[var(--color-mode-text-icons-t-blue)] focus:outline-none focus:ring-2 focus:ring-[var(--color-mode-text-icons-t-blue)] focus:ring-opacity-50 ${
              selectedPeriod === option.value
                ? "border-[var(--color-mode-text-icons-t-blue)] bg-[var(--color-mode-text-icons-t-blue)]/5"
                : "border-[var(--border-medium)]"
            }`}
            aria-pressed={selectedPeriod === option.value}
            type="button"
          >
            <div className="flex w-[126px] items-center justify-center gap-[15px] relative flex-[0_0_auto] mt-[-9.00px] mb-[-9.00px] ml-[-28.51px] mr-[-28.51px]">
              <span
                className={`flex items-center justify-center h-4 mt-[-1.00px] text-xs tracking-[0.40px] leading-[19.2px] whitespace-nowrap [font-family:'Tajawal',Helvetica] [direction:rtl] transition-colors ${
                  selectedPeriod === option.value
                    ? "font-bold text-[var(--color-mode-text-icons-t-blue)]"
                    : "font-normal text-[var(--text-secondary)] opacity-70"
                }`}
              >
                {option.label}
              </span>
            </div>
          </button>
        ))}
      </div>

      <div className="inline-flex items-center justify-end gap-1.5 relative flex-[0_0_auto]">
        <h2 className="w-fit mt-[-1.00px] font-bold text-[var(--text-secondary)] text-base tracking-[0] leading-6 whitespace-nowrap relative [font-family:'Tajawal',Helvetica] [direction:rtl]">
          الاستهلاك
        </h2>
        <Fuel className="w-5 h-5 text-gray-500" />
      </div>
    </section>
  );
};
