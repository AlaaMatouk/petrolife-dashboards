import React from "react";

export const GroupSubsection = (): JSX.Element => {
  const fuelData = [
    {
      id: 1,
      type: "بنزين 91",
      amount: "253 لتر",
      color: "#00c850",
    },
    {
      id: 2,
      type: "بنزين 95",
      amount: "253 لتر",
      color: "#ee3939",
    },
    {
      id: 3,
      type: "ديزل",
      amount: "253 لتر",
      color: "#e76500",
    },
  ];

  return (
    <div className="absolute top-[13px] left-[313px] w-[152px] h-[153px] shadow-[0px_4px_10px_#00000026]">
      <div className="absolute top-0 left-[calc(50.00%_-_76px)] w-[154px] h-[142px]">
        <img
          className="absolute top-0 left-0 w-[152px] h-[142px]"
          alt="Union"
          src="/img/union.svg"
        />

        <div className="absolute top-0 left-[calc(50.00%_-_77px)] w-[152px] h-[23px] bg-[#5965c1] rounded-[8px_8px_0px_0px]" />

        <div className="absolute top-[3px] left-[calc(50.00%_-_32px)] font-bold text-white text-xs tracking-[0.40px] leading-[19.2px] [font-family:'Tajawal',Helvetica] whitespace-nowrap [direction:rtl]">
          1 يناير 2025
        </div>
      </div>

      <div className="flex flex-col w-[137px] items-center gap-1.5 absolute top-[29px] left-2">
        {fuelData.map((fuel) => (
          <div
            key={fuel.id}
            className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]"
          >
            <div
              className="relative w-fit mt-[-1.00px] font-medium text-sm text-center tracking-[0.10px] leading-[22.4px] [font-family:'Tajawal',Helvetica] whitespace-nowrap [direction:rtl]"
              style={{ color: fuel.color }}
            >
              {fuel.amount}
            </div>

            <div className="relative w-[74.41px] font-normal text-[#5b738b] text-xs tracking-[0.40px] leading-[19.2px] [font-family:'Tajawal',Helvetica] [direction:rtl]">
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
          <div className="relative w-fit mt-[-1.00px] font-medium text-[#5a66c1] text-sm text-center tracking-[0.10px] leading-[22.4px] [font-family:'Tajawal',Helvetica] whitespace-nowrap [direction:rtl]">
            253 لتر
          </div>

          <div className="relative w-[74.41px] font-normal text-[#5b738b] text-xs tracking-[0.40px] leading-[19.2px] [font-family:'Tajawal',Helvetica] [direction:rtl]">
            اجمالي اللترات
          </div>
        </div>
      </div>

      <img
        className="absolute top-[140px] left-16 w-6 h-[13px]"
        alt="Polygon"
        src="/img/polygon-1.svg"
      />
    </div>
  );
};
