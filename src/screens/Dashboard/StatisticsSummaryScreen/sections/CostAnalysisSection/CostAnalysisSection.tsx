import React from "react";

export const CostAnalysisSection = (): JSX.Element => {
  const serviceData = [
    {
      title: "عمليات تغيير الإطارات",
      icon: "/img/vector.svg",
      iconBg: "bg-[url(/img/vector.svg)] bg-[100%_100%]",
      categories: [
        { value: "425", label: "VIP", icon: "/img/component-4.svg" },
        { value: "4536", label: "كبيرة", icon: "/img/component-4-1.svg" },
        { value: "3250", label: "متوسطة", icon: "/img/component-4-2.svg" },
        { value: "1250", label: "صغيرة", icon: "/img/component-4-3.svg" },
      ],
      separatorImages: [
        "/img/line-206.svg",
        "/img/line-205-3.svg",
        "/img/line-205-3.svg",
      ],
    },
    {
      title: "عمليات غسيل السيارات",
      icon: "/img/vector-1.svg",
      iconContainer: true,
      categories: [
        { value: "425", label: "VIP", icon: "/img/component-4-4.svg" },
        { value: "4536", label: "كبيرة", icon: "/img/component-4-5.svg" },
        { value: "3250", label: "متوسطة", icon: "/img/component-4-14.svg" },
        { value: "1250", label: "صغيرة", icon: "/img/component-4-15.svg" },
      ],
      separatorImages: [
        "/img/line-205-16.svg",
        "/img/line-205-16.svg",
        "/img/line-205-16.svg",
      ],
    },
  ];

  const oilChangeData = {
    title: "تغييرات الزيوت",
    cost: "14,200",
    currency: "ر.س",
    volume: "250",
    unit: "لتر",
    icon: "/img/side-icons-3.svg",
  };

  const renderServiceCard = (service, index) => (
    <div
      key={index}
      className="relative w-[339.67px] h-[119px] bg-color-mode-surface-bg-screen rounded-[var(--corner-radius-large)_var(--corner-radius-large)_var(--corner-radius-large)_var(--corner-radius-extra-large)] overflow-hidden border-[0.2px] border-solid border-color-mode-text-icons-t-placeholder"
    >
      <div className="absolute top-[71px] left-2 w-10 h-10 bg-color-mode-surface-red-bg rounded-[20px] aspect-[1]" />

      {service.iconContainer ? (
        <div className="absolute top-[81px] left-[18px] w-5 h-5 aspect-[1]">
          <img
            className="absolute w-[91.67%] h-[99.87%] top-0 left-[4.17%]"
            alt="Vector"
            src={service.icon}
          />
        </div>
      ) : (
        <div
          className={`absolute top-[81px] left-[18px] w-5 h-5 aspect-[1] ${service.iconBg}`}
        />
      )}

      <div className="flex flex-col w-[309px] items-end gap-[13px] absolute top-5 left-2.5">
        <div className="flex items-start justify-end gap-[13px] relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex items-center justify-end gap-[var(--corner-radius-extra-small)] relative flex-1 grow">
            <div className="relative w-[148px] h-5 mt-[-1.00px] font-body-body-1 font-[number:var(--body-body-1-font-weight)] text-color-mode-text-icons-t-sec text-[length:var(--body-body-1-font-size)] tracking-[var(--body-body-1-letter-spacing)] leading-[var(--body-body-1-line-height)] whitespace-nowrap [direction:rtl] [font-style:var(--body-body-1-font-style)]">
              {service.title}
            </div>
          </div>
        </div>

        <div className="h-[41px] items-start justify-end gap-2.5 self-stretch w-full flex relative">
          {service.categories.map((category, categoryIndex) => (
            <React.Fragment key={categoryIndex}>
              <div
                className={`flex ${categoryIndex === 2 ? "w-[57px]" : "w-[51px]"} ${categoryIndex === 0 ? "w-[37px]" : ""} flex-col items-end relative`}
              >
                <div className="relative w-fit mt-[-1.00px] font-headline-h6 font-[number:var(--headline-h6-font-weight)] text-color-mode-text-icons-t-blue text-[length:var(--headline-h6-font-size)] text-right tracking-[var(--headline-h6-letter-spacing)] leading-[var(--headline-h6-line-height)] whitespace-nowrap [font-style:var(--headline-h6-font-style)]">
                  {category.value}
                </div>

                <div
                  className={`flex items-center ${categoryIndex === 3 ? "justify-center" : "justify-end"} gap-0.5 relative self-stretch w-full flex-[0_0_auto] mt-[-3px]`}
                >
                  {categoryIndex === 2 ? (
                    <div className="justify-end flex-1 grow flex items-center gap-0.5 relative">
                      <div className="relative w-[41px] h-3.5 mt-[-1.00px] font-caption-10 font-[number:var(--caption-10-font-weight)] text-color-mode-text-icons-t-sec text-[length:var(--caption-10-font-size)] tracking-[var(--caption-10-letter-spacing)] leading-[var(--caption-10-line-height)] whitespace-nowrap [direction:rtl] [font-style:var(--caption-10-font-style)]">
                        {category.label}
                      </div>
                      <img
                        className="relative w-3 h-3 aspect-[1]"
                        alt="Component"
                        src={category.icon}
                      />
                    </div>
                  ) : categoryIndex === 3 ? (
                    <>
                      <div className="relative flex-1 h-3.5 mt-[-1.00px] font-caption-10 font-[number:var(--caption-10-font-weight)] text-color-mode-text-icons-t-sec text-[length:var(--caption-10-font-size)] tracking-[var(--caption-10-letter-spacing)] leading-[var(--caption-10-line-height)] whitespace-nowrap [direction:rtl] [font-style:var(--caption-10-font-style)]">
                        {category.label}
                      </div>
                      <img
                        className="relative w-3 h-3 aspect-[1]"
                        alt="Component"
                        src={category.icon}
                      />
                    </>
                  ) : (
                    <>
                      <div
                        className={`relative ${categoryIndex === 0 ? "w-4" : "w-[22px]"} h-3.5 mt-[-1.00px] font-caption-10 font-[number:var(--caption-10-font-weight)] text-color-mode-text-icons-t-sec text-[length:var(--caption-10-font-size)] ${categoryIndex === 0 ? "text-right" : ""} tracking-[var(--caption-10-letter-spacing)] leading-[var(--caption-10-line-height)] whitespace-nowrap ${categoryIndex === 1 ? "[direction:rtl]" : ""} [font-style:var(--caption-10-font-style)]`}
                      >
                        {category.label}
                      </div>
                      <img
                        className="relative w-3 h-3 aspect-[1]"
                        alt="Component"
                        src={category.icon}
                      />
                    </>
                  )}
                </div>
              </div>

              {categoryIndex < service.categories.length - 1 && (
                <img
                  className="relative w-px h-[39px]"
                  alt="Line"
                  src={service.separatorImages[categoryIndex]}
                />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex w-[1059px] h-[119px] items-center gap-5 relative">
      {serviceData.map((service, index) => renderServiceCard(service, index))}

      <div className="border-[0.3px] border-solid relative flex-1 grow h-[119px] bg-color-mode-surface-bg-screen rounded-[var(--corner-radius-large)_var(--corner-radius-large)_var(--corner-radius-large)_var(--corner-radius-extra-large)] overflow-hidden border-color-mode-text-icons-t-placeholder">
        <div className="w-[271px] top-[calc(50.00%_-_40px)] left-12 flex flex-col items-end gap-[13px] absolute">
          <div className="relative self-stretch mt-[-1.00px] font-body-body-1 font-[number:var(--body-body-1-font-weight)] text-color-mode-text-icons-t-sec text-[length:var(--body-body-1-font-size)] tracking-[var(--body-body-1-letter-spacing)] leading-[var(--body-body-1-line-height)] [direction:rtl] [font-style:var(--body-body-1-font-style)]">
            {oilChangeData.title}
          </div>

          <div className="flex items-start gap-[11px] relative self-stretch w-full flex-[0_0_auto]">
            <div className="inline-flex flex-[0_0_auto] flex-col items-end relative">
              <p className="relative w-fit mt-[-1.00px] [font-family:'Tajawal',Helvetica] font-normal text-color-mode-text-icons-t-blue text-2xl tracking-[0] leading-6 whitespace-nowrap [direction:rtl]">
                <span className="font-[number:var(--headline-h5b-font-weight)] leading-[var(--headline-h5b-line-height)] font-headline-h5b [font-style:var(--headline-h5b-font-style)] tracking-[var(--headline-h5b-letter-spacing)] text-[length:var(--headline-h5b-font-size)]">
                  {oilChangeData.cost}
                </span>

                <span className="font-[number:var(--headline-h8-font-weight)] text-[length:var(--headline-h8-font-size)] font-headline-h8 [font-style:var(--headline-h8-font-style)] tracking-[var(--headline-h8-letter-spacing)] leading-[var(--headline-h8-line-height)]">
                  {oilChangeData.currency}
                </span>
              </p>

              <div className="relative self-stretch mt-[-3px] font-caption-caption-2 font-[number:var(--caption-caption-2-font-weight)] text-color-mode-text-icons-t-primary-gray text-[length:var(--caption-caption-2-font-size)] text-center tracking-[var(--caption-caption-2-letter-spacing)] leading-[var(--caption-caption-2-line-height)] [direction:rtl] [font-style:var(--caption-caption-2-font-style)]">
                التكلفة
              </div>
            </div>

            <img
              className="relative w-px h-[39px]"
              alt="Line"
              src="/img/line-205-16.svg"
            />

            <div className="flex flex-col items-end relative flex-1 grow">
              <div className="self-stretch text-center relative mt-[-1.00px] font-headline-h5b font-[number:var(--headline-h5b-font-weight)] text-color-mode-text-icons-t-blue text-[length:var(--headline-h5b-font-size)] tracking-[var(--headline-h5b-letter-spacing)] leading-[var(--headline-h5b-line-height)] [font-style:var(--headline-h5b-font-style)]">
                {oilChangeData.volume}
              </div>

              <div className="relative self-stretch mt-[-3px] font-caption-caption-2 font-[number:var(--caption-caption-2-font-weight)] text-color-mode-text-icons-t-red text-[length:var(--caption-caption-2-font-size)] text-center tracking-[var(--caption-caption-2-letter-spacing)] leading-[var(--caption-caption-2-line-height)] [direction:rtl] [font-style:var(--caption-caption-2-font-style)]">
                {oilChangeData.unit}
              </div>
            </div>

            <img
              className="mr-[-0.70px] relative w-px h-[39px]"
              alt="Line"
              src="/img/line-205-16.svg"
            />
          </div>
        </div>

        <div className="absolute top-[71px] left-2 w-10 h-10 bg-color-mode-surface-red-bg rounded-[20px] aspect-[1]" />

        <img
          className="top-[81px] left-[18px] absolute w-5 h-5 aspect-[1]"
          alt="Side icons"
          src={oilChangeData.icon}
        />
      </div>
    </div>
  );
};
