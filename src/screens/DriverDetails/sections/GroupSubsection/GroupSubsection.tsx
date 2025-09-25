import React from "react";

export const GroupSubsection = (): JSX.Element => {
  const fuelData = [
    {
      id: 1,
      type: "بنزين 91",
      amount: "253 لتر",
      color: "var(--core-colors-green-green-6)",
    },
    {
      id: 2,
      type: "بنزين 95",
      amount: "253 لتر",
      color: "var(--core-colors-red-red-6)",
    },
    {
      id: 3,
      type: "ديزل",
      amount: "253 لتر",
      color: "var(--core-colors-mango-mango-6)",
    },
  ];

  return (
    <div className="absolute top-[13px] left-[318px] w-[155px] h-[153px] shadow-[var(--shadow-xl)]">
      <div className="absolute top-0 left-[calc(50.00%_-_77px)] w-[157px] h-[142px]">
        <img
          className="absolute top-0 left-0 w-[152px] h-[142px]"
          alt="Union"
          src="/img/union.svg"
        />

        <div className="absolute top-0 left-[calc(50.00%_-_78px)] w-[155px] h-[23px] bg-[var(--color-mode-text-icons-t-blue)] rounded-[8px_8px_0px_0px]" />

        <div className="absolute top-[3px] left-[calc(50.00%_-_33px)] w-[62px] font-bold text-white text-xs tracking-[0.40px] leading-[19.2px] font-tajawal [direction:rtl]">
          1 يناير 2025
        </div>
      </div>

      <div className="flex flex-col w-[140px] items-center gap-1.5 absolute top-[29px] left-2">
        {fuelData.map((fuel) => (
          <div
            key={fuel.id}
            className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]"
          >
            <div
              className="relative w-fit mt-[-1.00px] font-medium text-sm text-center tracking-[0.10px] leading-[22.4px] whitespace-nowrap font-tajawal [direction:rtl]"
              style={{ color: fuel.color }}
            >
              {fuel.amount}
            </div>

            <div className="w-[74.41px] font-normal text-[var(--text-secondary)] text-xs tracking-[0.40px] leading-[19.2px] relative [font-family:'Tajawal',Helvetica] [direction:rtl]">
              {fuel.type}
            </div>
          </div>
        ))}

        <img
          className="relative self-stretch w-full h-px"
          alt="Line"
          src="/img/line-48.svg"
        />

        <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
          <div className="relative w-fit mt-[-1.00px] font-medium text-[var(--color-mode-text-icons-t-blue)] text-sm text-center tracking-[0.10px] leading-[22.4px] whitespace-nowrap [font-family:'Tajawal',Helvetica] [direction:rtl]">
            253 لتر
          </div>

          <div className="w-[74.41px] font-normal text-[var(--text-secondary)] text-xs tracking-[0.40px] leading-[19.2px] relative [font-family:'Tajawal',Helvetica] [direction:rtl]">
            اجمالي اللترات
          </div>
        </div>
      </div>

      <img
        className="absolute top-[140px] left-[65px] w-[25px] h-[13px]"
        alt="Polygon"
        src="/img/polygon-1.svg"
      />
    </div>
  );
};
