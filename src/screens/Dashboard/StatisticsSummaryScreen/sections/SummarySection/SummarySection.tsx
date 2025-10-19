import React from "react";

export const SummarySection = (): JSX.Element => {
  const fuelData = [
    {
      value: "6500",
      label: "ديزل",
      color: "text-color-mode-text-icons-t-orange",
    },
    {
      value: "5000",
      label: "بنزين 95",
      color: "text-color-mode-text-icons-t-red",
    },
    {
      value: "2200",
      label: "بنزين 91",
      color: "text-color-mode-text-icons-t-green",
    },
  ];

  const batteryReplacementData = [
    {
      value: "14,210",
      unit: "ر.س",
      label: "التكلفة",
      color: "text-color-mode-text-icons-t-primary-gray",
    },
    {
      value: "250",
      label: "مستبدلة",
      color: "text-color-mode-text-icons-t-red",
    },
    {
      value: "845",
      label: "طلب",
      color: "text-color-mode-text-icons-t-purple",
    },
  ];

  const batteryOperationsData = [
    { value: "425", label: "VIP", icon: "/img/component-4-8.svg" },
    { value: "4536", label: "كبيرة", icon: "/img/component-4-9.svg" },
    { value: "3250", label: "متوسطة", icon: "/img/component-4-10.svg" },
    { value: "1250", label: "صغيرة", icon: "/img/component-4-11.svg" },
  ];

  return (
    <section
      className="inline-flex items-center gap-5 relative flex-[0_0_auto]"
      role="region"
      aria-label="Summary Statistics"
    >
      <article className="relative w-[339.67px] h-[119px] bg-color-mode-surface-bg-screen rounded-[var(--corner-radius-large)_var(--corner-radius-large)_var(--corner-radius-large)_var(--corner-radius-extra-large)] overflow-hidden border-[0.2px] border-solid border-color-mode-text-icons-t-placeholder">
        <div className="w-[239px] top-[calc(50.00%_-_39px)] left-20 flex flex-col items-end gap-[13px] absolute">
          <h3 className="relative self-stretch mt-[-1.00px] font-body-body-1 font-[number:var(--body-body-1-font-weight)] text-color-mode-text-icons-t-sec text-[length:var(--body-body-1-font-size)] tracking-[var(--body-body-1-letter-spacing)] leading-[var(--body-body-1-line-height)] [direction:rtl] [font-style:var(--body-body-1-font-style)]">
            اجمـــــــــــالي تكلفة الوقود
          </h3>

          <div className="flex items-start gap-[11px] relative self-stretch w-full flex-[0_0_auto]">
            {fuelData.map((fuel, index) => (
              <React.Fragment key={fuel.label}>
                <div className="flex flex-col items-end relative flex-1 grow">
                  <div className="relative w-fit mt-[-1.00px] font-headline-h6 font-[number:var(--headline-h6-font-weight)] text-color-mode-text-icons-t-blue text-[length:var(--headline-h6-font-size)] text-right tracking-[var(--headline-h6-letter-spacing)] leading-[var(--headline-h6-line-height)] whitespace-nowrap [font-style:var(--headline-h6-font-style)]">
                    {fuel.value}
                  </div>

                  <div
                    className={`relative self-stretch mt-[-3px] font-caption-caption-2 font-[number:var(--caption-caption-2-font-weight)] ${fuel.color} text-[length:var(--caption-caption-2-font-size)] tracking-[var(--caption-caption-2-letter-spacing)] leading-[var(--caption-caption-2-line-height)] [direction:rtl] [font-style:var(--caption-caption-2-font-style)]`}
                  >
                    {fuel.label}
                  </div>
                </div>

                {index < fuelData.length - 1 && (
                  <img
                    className="relative w-px h-[39px]"
                    alt=""
                    src="/img/line-205-9.svg"
                    role="presentation"
                  />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        <div className="absolute top-[71px] left-2 w-10 h-10 bg-color-mode-surface-red-bg rounded-[20px] aspect-[1]" />

        <img
          className="top-[81px] left-[18px] absolute w-5 h-5 aspect-[1]"
          alt="Fuel icon"
          src="/img/side-icons-4.svg"
        />

        <div className="absolute top-[21px] left-2 font-body-body-1 font-[number:var(--body-body-1-font-weight)] text-color-mode-text-icons-t-sec text-[length:var(--body-body-1-font-size)] tracking-[var(--body-body-1-letter-spacing)] leading-[var(--body-body-1-line-height)] whitespace-nowrap [direction:rtl] [font-style:var(--body-body-1-font-style)]">
          الاجمالي 13700
        </div>

        <img
          className="top-[57px] left-[257px] absolute w-5 h-5 aspect-[1]"
          alt=""
          src="/img/side-icons-7.svg"
          role="presentation"
        />

        <img
          className="top-[57px] left-[167px] absolute w-5 h-5 aspect-[1]"
          alt=""
          src="/img/side-icons-7.svg"
          role="presentation"
        />

        <img
          className="top-[57px] left-[81px] absolute w-5 h-5 aspect-[1]"
          alt=""
          src="/img/side-icons-7.svg"
          role="presentation"
        />
      </article>

      <article className="relative w-[339.67px] h-[119px] bg-color-mode-surface-bg-screen rounded-[var(--corner-radius-large)_var(--corner-radius-large)_var(--corner-radius-large)_var(--corner-radius-extra-large)] overflow-hidden border-[0.2px] border-solid border-color-mode-text-icons-t-placeholder">
        <div className="absolute top-[71px] left-2 w-10 h-10 bg-color-mode-surface-red-bg rounded-[20px] aspect-[1]" />

        <img
          className="top-[81px] left-[18px] absolute w-5 h-5 aspect-[1]"
          alt="Battery replacement icon"
          src="/img/side-icons-10.svg"
        />

        <div className="flex flex-col w-[271px] items-end gap-[13px] absolute top-5 left-12">
          <h3 className="relative self-stretch mt-[-1.00px] font-body-body-1 font-[number:var(--body-body-1-font-weight)] text-color-mode-text-icons-t-sec text-[length:var(--body-body-1-font-size)] tracking-[var(--body-body-1-letter-spacing)] leading-[var(--body-body-1-line-height)] [direction:rtl] [font-style:var(--body-body-1-font-style)]">
            استبدال البطاريات
          </h3>

          <div className="flex items-start gap-[11px] relative self-stretch w-full flex-[0_0_auto]">
            {batteryReplacementData.map((item, index) => (
              <React.Fragment key={item.label}>
                <div className="inline-flex flex-[0_0_auto] flex-col items-end relative">
                  {index === 0 ? (
                    <p className="relative w-fit mt-[-1.00px] [font-family:'Tajawal',Helvetica] font-normal text-color-mode-text-icons-t-blue text-2xl tracking-[0] leading-6 whitespace-nowrap [direction:rtl]">
                      <span className="font-[number:var(--headline-h5b-font-weight)] leading-[var(--headline-h5b-line-height)] font-headline-h5b [font-style:var(--headline-h5b-font-style)] tracking-[var(--headline-h5b-letter-spacing)] text-[length:var(--headline-h5b-font-size)]">
                        {" "}
                        {item.value}{" "}
                      </span>
                      <span className="font-[number:var(--headline-h8-font-weight)] text-[length:var(--headline-h8-font-size)] font-headline-h8 [font-style:var(--headline-h8-font-style)] tracking-[var(--headline-h8-letter-spacing)] leading-[var(--headline-h8-line-height)]">
                        {item.unit}
                      </span>
                    </p>
                  ) : index === 1 ? (
                    <div className="self-stretch text-center relative mt-[-1.00px] font-headline-h5b font-[number:var(--headline-h5b-font-weight)] text-color-mode-text-icons-t-blue text-[length:var(--headline-h5b-font-size)] tracking-[var(--headline-h5b-letter-spacing)] leading-[var(--headline-h5b-line-height)] [font-style:var(--headline-h5b-font-style)]">
                      {item.value}
                    </div>
                  ) : (
                    <div className="relative self-stretch mt-[-1.00px] font-headline-h5b font-[number:var(--headline-h5b-font-weight)] text-color-mode-text-icons-t-blue text-[length:var(--headline-h5b-font-size)] text-center tracking-[var(--headline-h5b-letter-spacing)] leading-[var(--headline-h5b-line-height)] [font-style:var(--headline-h5b-font-style)]">
                      {" "}
                      {item.value}
                    </div>
                  )}

                  <div
                    className={`relative self-stretch mt-[-3px] font-caption-caption-2 font-[number:var(--caption-caption-2-font-weight)] ${item.color} text-[length:var(--caption-caption-2-font-size)] text-center tracking-[var(--caption-caption-2-letter-spacing)] leading-[var(--caption-caption-2-line-height)] [direction:rtl] [font-style:var(--caption-caption-2-font-style)]`}
                  >
                    {item.label}
                  </div>
                </div>

                {index < batteryReplacementData.length - 1 && (
                  <img
                    className="relative w-px h-[39px]"
                    alt=""
                    src={
                      index === 0
                        ? "/img/line-205-16.svg"
                        : "/img/line-205-11.svg"
                    }
                    role="presentation"
                  />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </article>

      <article className="relative w-[339.67px] h-[119px] bg-color-mode-surface-bg-screen rounded-[var(--corner-radius-large)_var(--corner-radius-large)_var(--corner-radius-large)_var(--corner-radius-extra-large)] overflow-hidden border-[0.2px] border-solid border-color-mode-text-icons-t-placeholder">
        <div className="absolute top-[71px] left-2 w-10 h-10 bg-color-mode-surface-red-bg rounded-[20px] aspect-[1]" />

        <div className="absolute top-[81px] left-[18px] w-5 h-5 aspect-[1]">
          <img
            className="absolute w-full h-[83.33%] top-[8.33%] left-0"
            alt="Battery operations icon"
            src="/img/vector-2.svg"
          />
        </div>

        <div className="flex flex-col w-[309px] items-end gap-[13px] absolute top-5 left-2.5">
          <div className="flex items-start justify-end gap-[13px] relative self-stretch w-full flex-[0_0_auto]">
            <h3 className="relative flex-1 mt-[-1.00px] font-body-body-1 font-[number:var(--body-body-1-font-weight)] text-color-mode-text-icons-t-sec text-[length:var(--body-body-1-font-size)] tracking-[var(--body-body-1-letter-spacing)] leading-[var(--body-body-1-line-height)] [direction:rtl] [font-style:var(--body-body-1-font-style)]">
              عمليات تغيير البطاريات
            </h3>
          </div>

          <div className="h-[41px] items-start justify-end gap-2.5 self-stretch w-full flex relative">
            {batteryOperationsData.map((operation, index) => (
              <React.Fragment key={operation.label}>
                <div
                  className={`flex ${index === 0 ? "w-[37px]" : index === 1 ? "w-[51px]" : index === 2 ? "w-[57px]" : "w-[51px]"} flex-col items-end relative`}
                >
                  <div className="relative w-fit mt-[-1.00px] font-headline-h6 font-[number:var(--headline-h6-font-weight)] text-color-mode-text-icons-t-blue text-[length:var(--headline-h6-font-size)] text-right tracking-[var(--headline-h6-letter-spacing)] leading-[var(--headline-h6-line-height)] whitespace-nowrap [font-style:var(--headline-h6-font-style)]">
                    {operation.value}
                  </div>

                  <div
                    className={`flex items-center ${index === 2 ? "justify-end" : index === 3 ? "justify-center" : "justify-end"} gap-0.5 relative self-stretch w-full flex-[0_0_auto] mt-[-3px]`}
                  >
                    {index === 2 && (
                      <div className="justify-end flex-1 grow flex items-center gap-0.5 relative">
                        <div className="relative w-[41px] h-3.5 mt-[-1.00px] font-caption-10 font-[number:var(--caption-10-font-weight)] text-color-mode-text-icons-t-sec text-[length:var(--caption-10-font-size)] tracking-[var(--caption-10-letter-spacing)] leading-[var(--caption-10-line-height)] whitespace-nowrap [direction:rtl] [font-style:var(--caption-10-font-style)]">
                          {operation.label}
                        </div>
                        <img
                          className="relative w-3 h-3 aspect-[1]"
                          alt=""
                          src={operation.icon}
                          role="presentation"
                        />
                      </div>
                    )}

                    {index === 3 && (
                      <>
                        <div className="relative flex-1 h-3.5 mt-[-1.00px] font-caption-10 font-[number:var(--caption-10-font-weight)] text-color-mode-text-icons-t-sec text-[length:var(--caption-10-font-size)] tracking-[var(--caption-10-letter-spacing)] leading-[var(--caption-10-line-height)] whitespace-nowrap [direction:rtl] [font-style:var(--caption-10-font-style)]">
                          {operation.label}
                        </div>
                        <img
                          className="relative w-3 h-3 aspect-[1]"
                          alt=""
                          src={operation.icon}
                          role="presentation"
                        />
                      </>
                    )}

                    {(index === 0 || index === 1) && (
                      <>
                        <div
                          className={`relative ${index === 0 ? "w-4" : "w-[22px]"} h-3.5 mt-[-1.00px] font-caption-10 font-[number:var(--caption-10-font-weight)] text-color-mode-text-icons-t-sec text-[length:var(--caption-10-font-size)] ${index === 0 ? "text-right" : ""} tracking-[var(--caption-10-letter-spacing)] leading-[var(--caption-10-line-height)] whitespace-nowrap [direction:rtl] [font-style:var(--caption-10-font-style)]`}
                        >
                          {operation.label}
                        </div>
                        <img
                          className="relative w-3 h-3 aspect-[1]"
                          alt=""
                          src={operation.icon}
                          role="presentation"
                        />
                      </>
                    )}
                  </div>
                </div>

                {index < batteryOperationsData.length - 1 && (
                  <img
                    className="relative w-px h-[39px]"
                    alt=""
                    src="/img/line-205-13.svg"
                    role="presentation"
                  />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </article>
    </section>
  );
};
