import React, { useState } from "react";

export const DataListSection = (): JSX.Element => {
  const [selectedPeriod, setSelectedPeriod] = useState("12 شهر");

  const timePeriodsData = [
    { id: "week", label: "اسبوع", value: "اسبوع" },
    { id: "30days", label: "30 يوم", value: "30 يوم" },
    { id: "6months", label: "6 شهور", value: "6 شهور" },
    { id: "12months", label: "12 شهر", value: "12 شهر" },
  ];

  const handlePeriodSelect = (period: string) => {
    setSelectedPeriod(period);
  };

  return (
    <section className="flex flex-col items-end gap-[var(--corner-radius-extra-large)] relative self-stretch w-full flex-[0_0_auto]">
      <header className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
        <nav
          className="inline-flex h-10 items-center gap-[var(--corner-radius-medium)] relative flex-[0_0_auto]"
          role="tablist"
          aria-label="فترات زمنية"
        >
          <div className="inline-flex items-center gap-[29px] relative flex-[0_0_auto]">
            <div className="inline-flex items-center gap-[11px] relative flex-[0_0_auto]">
              <button
                className="w-[35px] bg-color-mode-surface-bg-icon-gray border-[0.2px] border-solid border-color-mode-surface-bg-screen flex flex-col h-[30px] items-center justify-center gap-2.5 p-4 relative rounded-[5px] hover:bg-opacity-60 transition-colors focus:outline-none focus:ring-2 focus:ring-color-mode-text-icons-t-blue"
                aria-label="عرض الرسم البياني"
                type="button"
              >
                <div className="w-[29.17px] gap-[12.5px] mt-[-11.00px] mb-[-11.00px] ml-[-13.08px] mr-[-13.08px] flex items-center justify-center relative flex-[0_0_auto]">
                  <div
                    className="relative w-5 h-5 aspect-[1]"
                    aria-hidden="true"
                  >
                    <img
                      className="absolute w-[33.33%] h-[16.67%] top-[-12.35%] left-[30.83%]"
                      alt=""
                      src="/img/vectorUS.svg"
                    />
                    <img
                      className="absolute w-[75.00%] h-[75.00%] top-[-4.02%] left-[10.00%]"
                      alt=""
                      src="/img/vector-1US.svg"
                    />
                    <img
                      className="absolute w-[75.00%] h-0 top-[20.98%] left-[10.00%] object-cover"
                      alt=""
                      src="/img/vector-2US.svg"
                    />
                    <img
                      className="absolute w-[33.33%] h-[16.67%] top-[35.99%] left-[29.17%]"
                      alt=""
                      src="/img/vector-3US.svg"
                    />
                  </div>
                </div>
              </button>

              {timePeriodsData.map((period) => (
                <button
                  key={period.id}
                  onClick={() => handlePeriodSelect(period.value)}
                  className={`flex flex-col w-[100.98px] h-[30px] items-center justify-center gap-2.5 p-4 relative rounded-[5px] border-[0.2px] border-solid transition-colors focus:outline-none focus:ring-2 focus:ring-color-mode-text-icons-t-blue ${
                    selectedPeriod === period.value
                      ? "bg-basewhite border-color-mode-text-icons-t-blue"
                      : "bg-color-mode-surface-bg-screen border-color-mode-text-icons-t-placeholder hover:border-color-mode-text-icons-t-sec"
                  }`}
                  role="tab"
                  aria-selected={selectedPeriod === period.value}
                  aria-controls={`panel-${period.id}`}
                  type="button"
                >
                  <div className="flex w-[126px] items-center justify-center gap-[15px] relative flex-[0_0_auto] mt-[-10.00px] mb-[-10.00px] ml-[-28.51px] mr-[-28.51px]">
                    <span
                      className={`relative flex items-center justify-center w-fit mt-[-1.00px] font-bold-11px font-[number:var(--bold-11px-font-weight)] text-[length:var(--bold-11px-font-size)] tracking-[var(--bold-11px-letter-spacing)] leading-[var(--bold-11px-line-height)] whitespace-nowrap [direction:rtl] [font-style:var(--bold-11px-font-style)] ${
                        selectedPeriod === period.value
                          ? "text-color-mode-text-icons-t-primary-gray"
                          : "text-color-mode-text-icons-t-sec"
                      }`}
                    >
                      {period.label}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </nav>

        <div className="flex w-[134px] items-center justify-end gap-1.5 relative">
          <h1 className="w-[193px] h-5 mt-[-1.00px] ml-[-83.00px] font-[number:var(--subtitle-subtitle-2-font-weight)] text-[length:var(--subtitle-subtitle-2-font-size)] tracking-[var(--subtitle-subtitle-2-letter-spacing)] leading-[var(--subtitle-subtitle-2-line-height)] [direction:rtl] relative font-subtitle-subtitle-2 text-color-mode-text-icons-t-sec whitespace-nowrap [font-style:var(--subtitle-subtitle-2-font-style)]">
            المحطات المستخدمة
          </h1>

          <img
            className="relative w-[18px] h-[18px] aspect-[1]"
            alt="أيقونة جانبية"
            src="/img/side-iconsUS.svg"
          />
        </div>
      </header>
    </section>
  );
};
