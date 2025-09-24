import { Fuel } from "lucide-react";
import React, { useState } from "react";

export const DataDisplaySection = (): JSX.Element => {
  const [selectedCompany, setSelectedCompany] = useState("كل الشركات");
  const [selectedCity, setSelectedCity] = useState("كل المدن");

  const filterOptions = [
    {
      id: "companies",
      label: "كل الشركات",
      value: selectedCompany,
      onChange: setSelectedCompany,
      icon: "/img/side-icons-1.svg",
    },
    {
      id: "cities",
      label: "كل المدن",
      value: selectedCity,
      onChange: setSelectedCity,
      icon: "/img/side-icons-1.svg",
    },
  ];

  return (
    <header
      className="flex flex-col items-end gap-[var(--corner-radius-extra-large)] relative self-stretch w-full flex-[0_0_auto]"
      role="banner"
    >
      <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex flex-col items-start gap-2.5 relative flex-1 grow">
          <div
            className="inline-flex items-start gap-2.5 relative flex-[0_0_auto]"
            role="group"
            aria-label="فلاتر البحث"
          >
            {filterOptions.map((filter) => (
              <div
                key={filter.id}
                className="inline-flex flex-col items-start gap-2.5 pt-[var(--corner-radius-small)] pb-[var(--corner-radius-small)] px-2.5 relative flex-[0_0_auto] rounded-[var(--corner-radius-small)] border-[0.5px] border-solid border-color-mode-text-icons-t-placeholder"
              >
                <button
                  className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto] cursor-pointer hover:opacity-80 transition-opacity duration-200 focus:outline-none focus:ring-2 focus:ring-color-mode-surface-primary-blue focus:ring-opacity-50 rounded-[var(--corner-radius-small)]"
                  onClick={() => filter.onChange(filter.value)}
                  aria-label={`تغيير فلتر ${filter.label}`}
                  type="button"
                >
                  <img
                    className="relative w-[18px] h-[18px] aspect-[1]"
                    alt=""
                    src={filter.icon}
                    role="presentation"
                  />

                  <span className="relative w-fit mt-[-1.00px] font-body-body-2 font-[number:var(--body-body-2-font-weight)] text-color-mode-text-icons-t-sec text-[length:var(--body-body-2-font-size)] text-left tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] whitespace-nowrap [direction:rtl] [font-style:var(--body-body-2-font-style)]">
                    {filter.label}
                  </span>
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="inline-flex items-center gap-1.5 relative flex-[0_0_auto]">
          <h1 className="w-[201px] h-5 mt-[-1.00px] font-[number:var(--subtitle-subtitle-2-font-weight)] text-color-mode-text-icons-t-sec text-[length:var(--subtitle-subtitle-2-font-size)] tracking-[var(--subtitle-subtitle-2-letter-spacing)] leading-[var(--subtitle-subtitle-2-line-height)] [direction:rtl] relative font-subtitle-subtitle-2 whitespace-nowrap [font-style:var(--subtitle-subtitle-2-font-style)]">
            مواقع محطات بترولايف
          </h1>

          <Fuel className="w-5 h-5 text-gray-500" />
        </div>
      </div>
    </header>
  );
};
