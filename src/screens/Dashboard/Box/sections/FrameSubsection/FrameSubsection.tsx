import React from "react";

export const FrameSubsection = (): JSX.Element => {
  return (
    <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
      <div className="inline-flex flex-col items-start gap-2.5 px-2.5 py-2 relative flex-[0_0_auto] rounded-lg border-[0.8px] border-solid border-[#5a66c1]">
        <div className="flex items-center gap-1 relative self-stretch w-full flex-[0_0_auto]">
          <img
            className="relative w-[18px] h-[18px] aspect-[1]"
            alt="Side icons"
            src="/img/side-icons.svg"
          />

          <div className="inline-flex items-center justify-center gap-2.5 pt-0.5 pb-0 px-0 relative flex-[0_0_auto]">
            <div className="mt-[-1.00px] font-medium text-[#5a66c1] text-sm text-left tracking-[0.10px] leading-[22.4px] [direction:rtl] relative w-fit [font-family:'Tajawal',Helvetica] whitespace-nowrap">
              عرض المزيد
            </div>
          </div>
        </div>
      </div>

      <div className="inline-flex items-center gap-[29px] relative flex-[0_0_auto]">
        <div className="mt-[-1.00px] font-extrabold text-[#5a66c1] text-lg text-left tracking-[0.16px] leading-6 [direction:rtl] relative w-fit [font-family:'Tajawal',Helvetica] whitespace-nowrap">
          أحدث الطلبات
        </div>
      </div>
    </div>
  );
};
