import React from "react";

export const FrameSubsection = (): JSX.Element => {
  const legendItems = [
    {
      text: "بطاريات",
      color: "#00c850",
      width: "w-[46px]",
    },
    {
      text: "إطارات",
      color: "#e76500",
      width: "w-10",
    },
    {
      text: "زيوت",
      color: "#5b738b",
      width: "w-7",
    },
    {
      text: "وقـــــــــود",
      color: "#ee3939",
      width: "w-[51px]",
      containerWidth: "w-[50px]",
      marginLeft: "ml-[-8.00px]",
    },
    {
      text: "غســـــيل",
      color: "#5965c1",
      width: "w-12",
      containerWidth: "w-[51px]",
      marginLeft: "ml-[-4.00px]",
    },
  ];

  return (
    <div className="flex w-[273px] items-center gap-4 relative top-[18px] left-[35px]">
      <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
        {legendItems.map((item, index) => (
          <div
            key={index}
            className={`${
              item.containerWidth
                ? `flex ${item.containerWidth} items-center justify-end gap-0.5 relative`
                : "inline-flex items-center gap-0.5 relative flex-[0_0_auto]"
            }`}
          >
            <div
              className={`${item.width} h-3.5 mt-[-1.00px] ${
                item.marginLeft || ""
              } font-bold text-xs tracking-[0.40px] leading-[19.2px] whitespace-nowrap relative [font-family:'Tajawal',Helvetica] [direction:rtl]`}
              style={{ color: item.color }}
            >
              {item.text}
            </div>
            <div
              className="relative w-[5px] h-[5px] rounded-[1px]"
              style={{ backgroundColor: item.color }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
