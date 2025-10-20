import React from "react";

export const FrameSubsection = (): JSX.Element => {
  const legendItems = [
    { label: "بطاريات", color: "#00c850" },
    { label: "إطارات", color: "#e76500" },
    { label: "زيوت", color: "#5b738b" },
    { label: "وقـــــــــود", color: "#ee3939" },
    { label: "غســـــيل", color: "#5a66c1" },
  ];

  return (
    <div className="inline-flex items-center gap-4 absolute top-[18px] left-[34px]">
      <button
        className="relative w-[79px] h-[30px] rounded-[5px] border-[0.5px] border-solid border-[#a9b4be] hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        aria-label="تصدير البيانات"
      >
        <span className="absolute w-[46.84%] h-[56.67%] top-[23.33%] left-[13.92%] flex items-center justify-center font-medium text-[#5b738b] text-sm text-left tracking-[0.10px] leading-[22.4px] whitespace-nowrap [font-family:'Tajawal',Helvetica] [direction:rtl]">
          تصدير
        </span>

        <div className="absolute w-[26.91%] h-[48.48%] top-[24.24%] left-[63.26%] flex">
          <div className="flex-1 w-[21.26px] relative">
            <img
              className="absolute w-[58.33%] h-[75.00%] top-[9.06%] left-[18.48%]"
              alt="أيقونة التصدير"
              src="/img/icon.svg"
            />
          </div>
        </div>
      </button>

      <div
        className="inline-flex items-center gap-2 relative flex-[0_0_auto]"
        role="list"
        aria-label="مفتاح الألوان"
      >
        {legendItems.map((item, index) => (
          <div
            key={index}
            className="inline-flex items-center gap-0.5 relative flex-[0_0_auto]"
            role="listitem"
          >
            <div
              className={`relative ${
                index === 3
                  ? "w-[51px] ml-[-8.00px]"
                  : index === 4
                    ? "w-12 ml-[-4.00px]"
                    : index === 0
                      ? "w-[46px]"
                      : index === 1
                        ? "w-10"
                        : "w-7"
              } h-3.5 mt-[-1.00px] font-bold text-xs tracking-[0.40px] leading-[19.2px] whitespace-nowrap [font-family:'Tajawal',Helvetica] [direction:rtl]`}
              style={{ color: item.color }}
            >
              {item.label}
            </div>

            <div
              className="relative w-[5px] h-[5px] rounded-[1px]"
              style={{ backgroundColor: item.color }}
              aria-hidden="true"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
