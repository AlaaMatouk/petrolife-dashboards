import React from "react";

export const VehicleAndOrdersSection = (): JSX.Element => {
  // Data for vehicle statistics
  const vehicleStats = [
    {
      id: 1,
      name: "سيارات صغيرة",
      total: 85,
      current: 20,
      icon: "/img/component-4-3.svg",
      progressBg: "/img/color-6.svg",
      progressFill: "/img/color-7.svg",
      fillWidth: "381px",
      fillLeft: "91px",
    },
    {
      id: 2,
      name: "سيارات متوسطة",
      total: 85,
      current: 25,
      icon: "/img/component-4-2.svg",
      progressBg: "/img/color-6.svg",
      progressFill: "/img/color-5.svg",
      fillWidth: "306px",
      fillLeft: "166px",
    },
    {
      id: 3,
      name: "سيارات كبيرة",
      total: 85,
      current: 30,
      icon: "/img/component-4-1.svg",
      progressBg: "/img/color-2.svg",
      progressFill: "/img/color-3.svg",
      fillWidth: "156px",
      fillLeft: "312px",
    },
    {
      id: 4,
      name: "سيارات VIP",
      total: 85,
      current: 10,
      icon: "/img/component-4.svg",
      progressBg: "/img/color-2.svg",
      progressFill: "/img/color-1.svg",
      fillWidth: "60px",
      fillLeft: "412px",
    },
  ];

  return (
    <div className="flex items-center gap-5 relative" data-model-id="1:6710">
      {/* Fuel Delivery Orders Card */}
      <div className="relative flex-1 grow h-[328px]">
        <div className="absolute -top-px -left-px w-[522px] h-[330px] bg-color-mode-surface-bg-screen rounded-[var(--corner-radius-large)] border-[0.3px] border-solid border-color-mode-text-icons-t-placeholder" />

        <div className="absolute top-[92px] left-[calc(50.00%_-_177px)] w-[354px] h-[194px]">
          <div className="absolute w-[calc(100%_-_36px)] h-[calc(100%_+_15px)] top-[18px] left-[18px]">
            <img
              className="absolute w-[100.14%] h-[75.95%] top-[-8.61%] left-[-5.58%]"
              alt="Background"
              src="/img/background.svg"
            />

            <img
              className="absolute w-[99.86%] h-[152.33%] top-[-8.18%] left-[49.80%]"
              alt="Line"
              src="/img/line.svg"
            />
          </div>

          <div className="absolute top-[calc(50.00%_-_6px)] left-[calc(50.00%_-_78px)] h-7 flex items-center justify-center font-headline-h6-m font-[number:var(--headline-h6-m-font-weight)] text-gray-500 text-[length:var(--headline-h6-m-font-size)] text-center tracking-[var(--headline-h6-m-letter-spacing)] leading-[var(--headline-h6-m-line-height)] whitespace-nowrap [direction:rtl] [font-style:var(--headline-h6-m-font-style)]">
            الطلبات المكتملة
          </div>

          <div className="absolute top-[calc(50.00%_+_22px)] left-[calc(50.00%_-_56px)] h-[71px] flex items-center justify-center [font-family:'Inter',Helvetica] font-medium text-color-mode-text-icons-t-primary-gray text-[52.9px] text-center tracking-[0] leading-[70.5px] whitespace-nowrap">
            49%
          </div>
        </div>

        <div className="flex w-[454px] items-end justify-between absolute top-5 left-9">
          <p className="relative w-fit font-body-body-1 font-[number:var(--body-body-1-font-weight)] text-color-mode-text-icons-t-sec text-[length:var(--body-body-1-font-size)] tracking-[var(--body-body-1-letter-spacing)] leading-[var(--body-body-1-line-height)] whitespace-nowrap [direction:rtl] [font-style:var(--body-body-1-font-style)]">
            المكتملة 20 / الملغية 22
          </p>

          <div className="relative w-fit mt-[-1.00px] font-headline-h6-m font-[number:var(--headline-h6-m-font-weight)] text-color-mode-text-icons-t-primary-gray text-[length:var(--headline-h6-m-font-size)] text-left tracking-[var(--headline-h6-m-letter-spacing)] leading-[var(--headline-h6-m-line-height)] whitespace-nowrap [direction:rtl] [font-style:var(--headline-h6-m-font-style)]">
            طلبات توصيل الوقود
          </div>
        </div>
      </div>

      {/* My Cars Card */}
      <div className="relative flex-1 grow h-[328px]">
        <div className="absolute -top-px -left-px w-[522px] h-[330px] bg-color-mode-surface-bg-screen rounded-[var(--corner-radius-large)] border-[0.3px] border-solid border-color-mode-text-icons-t-placeholder" />

        {/* Vehicle Statistics */}
        {vehicleStats.map((vehicle, index) => (
          <div
            key={vehicle.id}
            className="absolute w-[472px] h-[34px]"
            style={{
              top: `${257 - index * 58}px`,
              left: index === 2 ? "21px" : "22px",
            }}
          >
            <div
              className="absolute top-[29px] left-0 w-[472px] h-[5px] bg-[100%_100%]"
              style={{
                backgroundImage: `url(${vehicle.progressBg})`,
                left: index === 2 ? "1px" : "0px",
              }}
            />

            <div className="flex w-[472px] items-center justify-between absolute top-0 left-px">
              <div className="relative w-fit mt-[-1.00px] font-subtitle-subtitle-3 font-[number:var(--subtitle-subtitle-3-font-weight)] text-color-mode-text-icons-t-primary-gray text-[length:var(--subtitle-subtitle-3-font-size)] text-right tracking-[var(--subtitle-subtitle-3-letter-spacing)] leading-[var(--subtitle-subtitle-3-line-height)] whitespace-nowrap [font-style:var(--subtitle-subtitle-3-font-style)]">
                {vehicle.total} / {vehicle.current}
              </div>

              <div className="inline-flex h-[22px] items-center justify-center gap-0.5 relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] font-body-body-2 font-[number:var(--body-body-2-font-weight)] text-color-mode-text-icons-t-primary-gray text-[length:var(--body-body-2-font-size)] text-left tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] whitespace-nowrap [direction:rtl] [font-style:var(--body-body-2-font-style)]">
                  {vehicle.name}
                </div>

                <img
                  className="relative w-3.5 h-3.5 aspect-[1]"
                  alt="Component"
                  src={vehicle.icon}
                />
              </div>
            </div>

            {/* Progress Fill */}
            {index === 0 && (
              <div className="top-[29px] left-[91px] w-[381px] bg-[url(/img/color-7.svg)] bg-[100%_100%] absolute h-[5px]" />
            )}
            {index === 1 && (
              <div className="top-7 left-[166px] w-[306px] rotate-[-0.04deg] absolute h-[5px]">
                <img
                  className="absolute w-full h-full top-[-2.35%] left-0 rotate-[0.04deg]"
                  alt="Color"
                  src="/img/color-5.svg"
                />
              </div>
            )}
            {index === 2 && (
              <div className="top-[29px] left-[312px] w-[156px] bg-[url(/img/color-3.svg)] bg-[100%_100%] absolute h-[5px]" />
            )}
            {index === 3 && (
              <div className="top-[29px] left-[412px] w-[60px] bg-[url(/img/color-1.svg)] bg-[100%_100%] absolute h-[5px]" />
            )}
          </div>
        ))}

        <div className="flex w-[476px] items-end justify-between absolute top-5 left-[21px]">
          <div className="relative w-fit font-body-body-1 font-[number:var(--body-body-1-font-weight)] text-color-mode-text-icons-t-sec text-[length:var(--body-body-1-font-size)] tracking-[var(--body-body-1-letter-spacing)] leading-[var(--body-body-1-line-height)] whitespace-nowrap [direction:rtl] [font-style:var(--body-body-1-font-style)]">
            {" "}
            اجمالي السيارات&nbsp;&nbsp;85
          </div>

          <div className="relative w-fit mt-[-1.00px] font-headline-h6-m font-[number:var(--headline-h6-m-font-weight)] text-color-mode-text-icons-t-primary-gray text-[length:var(--headline-h6-m-font-size)] text-left tracking-[var(--headline-h6-m-letter-spacing)] leading-[var(--headline-h6-m-line-height)] whitespace-nowrap [direction:rtl] [font-style:var(--headline-h6-m-font-style)]">
            سيـــــــــــــــــاراتي
          </div>
        </div>
      </div>
    </div>
  );
};
