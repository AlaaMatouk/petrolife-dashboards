import React from "react";

export const GraphSubsection = (): JSX.Element => {
  const months = [
    { label: "Feb", left: "1px", width: "33px" },
    { label: "Mar", left: "88px", width: "32px" },
    { label: "Apr", left: "175px", width: "29px" },
    { label: "May", left: "260px", width: "35px" },
    { label: "Jun", left: "351px", width: "28px" },
    { label: "Jul", left: "432px", width: "21px" },
    { label: "Aug", left: "509px", width: "33px" },
    { label: "Sep", left: "598px", width: "35px" },
    { label: "Oct", left: "688px", width: "33px" },
    { label: "Nov", left: "777px", width: "33px" },
    { label: "Dec", left: "866px", width: "35px" },
    { label: "Jan", left: "957px", width: "28px" },
  ];

  return (
    <div className="absolute top-[78px] left-7 w-[1023px] h-[229px]">
      <img
        className="absolute top-0 left-[5px] w-[994px] h-[189px]"
        alt="Bg"
        src="/img/bg.png"
      />

      {months.map((month, index) => (
        <div
          key={index}
          className={`absolute top-52 left-[${month.left}] w-[${month.width}] [font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-[#5b738b] text-[13px] ${index === 0 ? "" : "text-center"} tracking-[0] leading-[21px]`}
        >
          {month.label}
        </div>
      ))}
    </div>
  );
};
