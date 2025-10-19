import React from "react";

export const TransactionsSection = (): JSX.Element => {
  const fuelData = [
    {
      amount: "185 .L",
      type: "ديزل",
      color: "color-mode-text-icons-t-orange",
    },
    {
      amount: "548 .L",
      type: "بنزين 95",
      color: "color-mode-text-icons-t-red",
    },
    {
      amount: "845 .L",
      type: "بنزين 91",
      color: "color-mode-text-icons-t-green",
    },
  ];

  const statsData = [
    {
      title: "اجمـــــــــــالي لترات الوقود",
      content: fuelData,
      icon: "/img/side-icons.svg",
      type: "fuel",
    },
    {
      title: "التكلفة الإجمالية للمشتريات",
      amount: "14,254",
      currency: "ر.س",
      icon: "/img/side-icons-1.svg",
      type: "cost",
    },
    {
      title: "رصيــــــــد محفظتي",
      amount: "7,250",
      currency: "ر.س",
      icon: "/img/side-icons-2.svg",
      type: "wallet",
    },
  ];

  return (
    <div className="flex h-[119px] items-center gap-5 relative self-stretch w-full">
      {statsData.map((stat, index) => (
        <div
          key={index}
          className="border-[0.3px] border-solid relative flex-1 grow h-[119px] bg-color-mode-surface-bg-screen rounded-[var(--corner-radius-large)_var(--corner-radius-large)_var(--corner-radius-large)_var(--corner-radius-extra-large)] overflow-hidden border-color-mode-text-icons-t-placeholder"
        >
          {stat.type === "fuel" ? (
            <div className="flex flex-col w-[239px] items-end gap-[13px] absolute top-[calc(50.00%_-_41px)] left-20">
              <div className="relative self-stretch mt-[-1.00px] font-body-body-1 font-[number:var(--body-body-1-font-weight)] text-color-mode-text-icons-t-sec text-[length:var(--body-body-1-font-size)] tracking-[var(--body-body-1-letter-spacing)] leading-[var(--body-body-1-line-height)] [direction:rtl] [font-style:var(--body-body-1-font-style)]">
                {stat.title}
              </div>

              <div className="flex items-start gap-[11px] relative self-stretch w-full flex-[0_0_auto]">
                {stat.content.map((fuel, fuelIndex) => (
                  <React.Fragment key={fuelIndex}>
                    <div className="flex flex-col items-end relative flex-1 grow">
                      <div
                        className={`relative w-fit mt-[-1.00px] ${fuelIndex === 1 ? "ml-[-1.00px]" : fuelIndex === 2 ? "ml-[-7.00px]" : ""} font-headline-h5b font-[number:var(--headline-h5b-font-weight)] text-color-mode-text-icons-t-blue text-[length:var(--headline-h5b-font-size)] text-right tracking-[var(--headline-h5b-letter-spacing)] leading-[var(--headline-h5b-line-height)] whitespace-nowrap [font-style:var(--headline-h5b-font-style)]`}
                      >
                        {fuelIndex === 2 ? " " : ""}
                        {fuel.amount}
                      </div>

                      <div
                        className={`relative self-stretch mt-[-3px] font-caption-caption-2 font-[number:var(--caption-caption-2-font-weight)] text-${fuel.color} text-[length:var(--caption-caption-2-font-size)] text-center tracking-[var(--caption-caption-2-letter-spacing)] leading-[var(--caption-caption-2-line-height)] [direction:rtl] [font-style:var(--caption-caption-2-font-style)]`}
                      >
                        {fuel.type}
                      </div>
                    </div>

                    {fuelIndex < stat.content.length - 1 && (
                      <img
                        className="relative w-px h-[39px]"
                        alt="Line"
                        src="/img/line-205-9.svg"
                      />
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          ) : (
            <div className="flex flex-col w-[161px] items-end gap-[var(--corner-radius-large)] absolute top-[calc(50.00%_-_40px)] right-5">
              <div
                className={`relative w-fit mt-[-1.00px] ${stat.type === "cost" ? "ml-[-25.00px]" : ""} font-body-body-1 font-[number:var(--body-body-1-font-weight)] text-color-mode-text-icons-t-sec text-[length:var(--body-body-1-font-size)] text-center tracking-[var(--body-body-1-letter-spacing)] leading-[var(--body-body-1-line-height)] whitespace-nowrap [direction:rtl] [font-style:var(--body-body-1-font-style)]`}
              >
                {stat.title}
              </div>

              <p className="relative self-stretch [font-family:'Tajawal',Helvetica] font-normal text-color-mode-text-icons-t-blue text-2xl tracking-[0] leading-6 [direction:rtl]">
                <span className="font-[number:var(--headline-h5b-font-weight)] leading-[var(--headline-h5b-line-height)] font-headline-h5b [font-style:var(--headline-h5b-font-style)] tracking-[var(--headline-h5b-letter-spacing)] text-[length:var(--headline-h5b-font-size)]">
                  {stat.type === "cost" ? " " : ""}
                  {stat.amount}
                  {stat.type === "cost" ? " " : " "}
                </span>

                <span className="font-[number:var(--headline-h8-font-weight)] text-[length:var(--headline-h8-font-size)] font-headline-h8 [font-style:var(--headline-h8-font-style)] tracking-[var(--headline-h8-letter-spacing)] leading-[var(--headline-h8-line-height)]">
                  {stat.currency}
                </span>
              </p>
            </div>
          )}

          <div className="absolute top-[71px] left-2 w-10 h-10 bg-color-mode-surface-red-bg rounded-[20px] aspect-[1]" />

          <img
            className="absolute top-[81px] left-[18px] w-5 h-5 aspect-[1]"
            alt="Side icons"
            src={stat.icon}
          />
        </div>
      ))}
    </div>
  );
};
