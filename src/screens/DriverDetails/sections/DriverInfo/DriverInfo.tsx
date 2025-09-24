import { UserRound } from "lucide-react";
import React, { useState } from "react";

export const DriverInfo = (): JSX.Element => {
  // Driver information data
  const driverInfo = {
    name: "محمد احمد علي",
    email: "hesham@gmail.com",
    phone: "+96625458236",
    address: "12 ش الصالحين ، الرياض",
    city: "الرياض",
    driverImage: "hsgndkmmcjhd.jpg",
    licenseImage: "hsgndkmmcjhd.jpg",
    carStatus: "دبلوماسية",
    monetaryValue: "100",
    plateNumber: "7655",
    plateLetters: "ح ن ط",
    carCategory: "صغيرة",
  };

  // Days of the week data
  const daysOfWeek = [
    { name: "الأحد", selected: false },
    { name: "الإثنين", selected: false },
    { name: "الثلاثاء", selected: false },
    { name: "الأربعاء", selected: false },
    { name: "الخميس", selected: false },
    { name: "الجمعة", selected: false },
    { name: "السبت", selected: true },
  ];

  const [selectedDays, setSelectedDays] = useState(daysOfWeek);

  const handleDayToggle = (index: number) => {
    const updatedDays = [...selectedDays];
    updatedDays[index].selected = !updatedDays[index].selected;
    setSelectedDays(updatedDays);
  };

  return (
    <main
      className="flex flex-col items-start gap-[var(--corner-radius-extra-large)] pt-[var(--corner-radius-large)] pr-[var(--corner-radius-large)] pb-[var(--corner-radius-large)] pl-[var(--corner-radius-large)] relative bg-color-mode-surface-bg-screen rounded-[var(--corner-radius-large)] border-[0.3px] border-solid border-color-mode-text-icons-t-placeholder"
      data-model-id="1:15191"
    >
      <header className="flex flex-col items-end gap-[var(--corner-radius-extra-large)] relative self-stretch w-full flex-[0_0_auto]">
        <nav className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
          <button
            className="inline-flex h-10 items-center gap-[var(--corner-radius-medium)] relative flex-[0_0_auto]"
            aria-label="العودة"
          >
            <div className="flex flex-col w-10 items-center justify-center gap-2.5 pt-[var(--corner-radius-small)] pb-[var(--corner-radius-small)] px-2.5 relative self-stretch bg-color-mode-surface-bg-icon-gray rounded-[var(--corner-radius-small)]">
              <img
                className="relative w-[19.28px] h-[9.42px]"
                alt="Arrow"
                src="/img/arrow-1DI.svg"
              />
            </div>
          </button>

          <div className="flex w-[134px] items-center justify-end gap-1.5 relative">
            <h1 className="w-[145px] h-5 mt-[-1.00px] ml-[-35.00px] font-[number:var(--subtitle-subtitle-2-font-weight)] text-color-mode-text-icons-t-sec text-[length:var(--subtitle-subtitle-2-font-size)] tracking-[var(--subtitle-subtitle-2-letter-spacing)] leading-[var(--subtitle-subtitle-2-line-height)] whitespace-nowrap relative font-subtitle-subtitle-2 [direction:rtl] [font-style:var(--subtitle-subtitle-2-font-style)]">
              معلومات السائق
            </h1>

            <UserRound className="w-5 h-5 text-gray-500" />
          </div>
        </nav>
      </header>

      <section className="flex flex-col items-start gap-5 relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex flex-col items-end gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
          <form className="flex flex-col items-start gap-5 relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex items-start gap-5 relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex flex-col items-end gap-[var(--corner-radius-extra-small)] relative flex-1 grow">
                <label className="relative self-stretch mt-[-1.00px] font-caption-caption-1 font-[number:var(--caption-caption-1-font-weight)] text-color-mode-text-icons-t-placeholder text-[length:var(--caption-caption-1-font-size)] tracking-[var(--caption-caption-1-letter-spacing)] leading-[var(--caption-caption-1-line-height)] [direction:rtl] [font-style:var(--caption-caption-1-font-style)]">
                  رقم الهاتف
                </label>

                <div className="flex flex-col items-end justify-center gap-2.5 pt-[var(--corner-radius-small)] pr-[var(--corner-radius-small)] pb-[var(--corner-radius-small)] pl-[var(--corner-radius-small)] relative self-stretch w-full flex-[0_0_auto] bg-color-mode-surface-bg-icon-gray rounded-[var(--corner-radius-small)]">
                  <div className="flex items-center justify-end relative self-stretch w-full flex-[0_0_auto]">
                    <span className="font-[number:var(--body-body-2-font-weight)] text-color-mode-text-icons-t-sec tracking-[var(--body-body-2-letter-spacing)] relative w-fit mt-[-1.00px] font-body-body-2 text-[length:var(--body-body-2-font-size)] leading-[var(--body-body-2-line-height)] whitespace-nowrap [font-style:var(--body-body-2-font-style)]">
                      {driverInfo.phone}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-end gap-[var(--corner-radius-extra-small)] relative flex-1 grow">
                <label className="relative self-stretch mt-[-1.00px] font-caption-caption-1 font-[number:var(--caption-caption-1-font-weight)] text-color-mode-text-icons-t-placeholder text-[length:var(--caption-caption-1-font-size)] tracking-[var(--caption-caption-1-letter-spacing)] leading-[var(--caption-caption-1-line-height)] [direction:rtl] [font-style:var(--caption-caption-1-font-style)]">
                  البريد الالكتروني
                </label>

                <div className="flex flex-col items-end justify-center gap-2.5 pt-[var(--corner-radius-small)] pr-[var(--corner-radius-small)] pb-[var(--corner-radius-small)] pl-[var(--corner-radius-small)] relative self-stretch w-full flex-[0_0_auto] bg-color-mode-surface-bg-icon-gray rounded-[var(--corner-radius-small)]">
                  <div className="flex items-center justify-end relative self-stretch w-full flex-[0_0_auto]">
                    <span className="font-[number:var(--body-body-2-font-weight)] text-color-mode-text-icons-t-sec tracking-[var(--body-body-2-letter-spacing)] relative w-fit mt-[-1.00px] font-body-body-2 text-[length:var(--body-body-2-font-size)] leading-[var(--body-body-2-line-height)] whitespace-nowrap [font-style:var(--body-body-2-font-style)]">
                      {driverInfo.email}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-end gap-[var(--corner-radius-extra-small)] relative flex-1 grow">
                <label className="relative self-stretch mt-[-1.00px] font-caption-caption-1 font-[number:var(--caption-caption-1-font-weight)] text-color-mode-text-icons-t-placeholder text-[length:var(--caption-caption-1-font-size)] tracking-[var(--caption-caption-1-letter-spacing)] leading-[var(--caption-caption-1-line-height)] [direction:rtl] [font-style:var(--caption-caption-1-font-style)]">
                  اسم السائق
                </label>

                <div className="flex flex-col items-end justify-center gap-2.5 pt-[var(--corner-radius-small)] pr-[var(--corner-radius-small)] pb-[var(--corner-radius-small)] pl-[var(--corner-radius-small)] relative self-stretch w-full flex-[0_0_auto] bg-color-mode-surface-bg-icon-gray rounded-[var(--corner-radius-small)]">
                  <div className="flex items-center justify-end relative self-stretch w-full flex-[0_0_auto]">
                    <span className="font-[number:var(--body-body-2-font-weight)] text-color-mode-text-icons-t-sec text-left tracking-[var(--body-body-2-letter-spacing)] [direction:rtl] relative w-fit mt-[-1.00px] font-body-body-2 text-[length:var(--body-body-2-font-size)] leading-[var(--body-body-2-line-height)] whitespace-nowrap [font-style:var(--body-body-2-font-style)]">
                      {driverInfo.name}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-5 relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex items-end gap-[var(--corner-radius-extra-small)] relative flex-1 grow">
                <div className="relative w-[38px] h-[38px]">
                  <div className="h-[38px] rounded-[var(--corner-radius-small)] bg-[url(/img/frame-581.svg)] bg-cover bg-[50%_50%]" />
                </div>

                <div className="flex flex-col items-end gap-[var(--corner-radius-extra-small)] relative flex-1 grow">
                  <label className="relative self-stretch mt-[-1.00px] font-caption-caption-1 font-[number:var(--caption-caption-1-font-weight)] text-color-mode-text-icons-t-placeholder text-[length:var(--caption-caption-1-font-size)] tracking-[var(--caption-caption-1-letter-spacing)] leading-[var(--caption-caption-1-line-height)] [direction:rtl] [font-style:var(--caption-caption-1-font-style)]">
                    صورة السائق
                  </label>

                  <div className="flex flex-col items-end justify-center gap-2.5 pt-[var(--corner-radius-small)] pr-[var(--corner-radius-small)] pb-[var(--corner-radius-small)] pl-[var(--corner-radius-small)] relative self-stretch w-full flex-[0_0_auto] bg-color-mode-surface-bg-icon-gray rounded-[var(--corner-radius-small)]">
                    <div className="flex items-center justify-end relative self-stretch w-full flex-[0_0_auto]">
                      <span className="font-[number:var(--body-body-2-font-weight)] text-color-mode-text-icons-t-sec tracking-[var(--body-body-2-letter-spacing)] relative w-fit mt-[-1.00px] font-body-body-2 text-[length:var(--body-body-2-font-size)] leading-[var(--body-body-2-line-height)] whitespace-nowrap [font-style:var(--body-body-2-font-style)]">
                        {driverInfo.driverImage}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-end gap-[var(--corner-radius-extra-small)] relative flex-1 grow">
                <label className="relative self-stretch mt-[-1.00px] font-caption-caption-1 font-[number:var(--caption-caption-1-font-weight)] text-color-mode-text-icons-t-placeholder text-[length:var(--caption-caption-1-font-size)] tracking-[var(--caption-caption-1-letter-spacing)] leading-[var(--caption-caption-1-line-height)] [direction:rtl] [font-style:var(--caption-caption-1-font-style)]">
                  العنوان
                </label>

                <div className="flex flex-col items-end justify-center gap-2.5 pt-[var(--corner-radius-small)] pr-[var(--corner-radius-small)] pb-[var(--corner-radius-small)] pl-[var(--corner-radius-small)] relative self-stretch w-full flex-[0_0_auto] bg-color-mode-surface-bg-icon-gray rounded-[var(--corner-radius-small)]">
                  <div className="flex items-center justify-end relative self-stretch w-full flex-[0_0_auto]">
                    <address className="font-[number:var(--body-body-2-font-weight)] text-color-mode-text-icons-t-sec text-left tracking-[var(--body-body-2-letter-spacing)] [direction:rtl] relative w-fit mt-[-1.00px] font-body-body-2 text-[length:var(--body-body-2-font-size)] leading-[var(--body-body-2-line-height)] whitespace-nowrap [font-style:var(--body-body-2-font-style)] not-italic">
                      {driverInfo.address}
                    </address>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-end gap-[var(--corner-radius-extra-small)] relative flex-1 grow">
                <label className="relative self-stretch mt-[-1.00px] font-caption-caption-1 font-[number:var(--caption-caption-1-font-weight)] text-color-mode-text-icons-t-placeholder text-[length:var(--caption-caption-1-font-size)] tracking-[var(--caption-caption-1-letter-spacing)] leading-[var(--caption-caption-1-line-height)] [direction:rtl] [font-style:var(--caption-caption-1-font-style)]">
                  المدينة
                </label>

                <div className="flex flex-col items-end justify-center gap-2.5 pt-[var(--corner-radius-small)] pr-[var(--corner-radius-small)] pb-[var(--corner-radius-small)] pl-[var(--corner-radius-small)] relative self-stretch w-full flex-[0_0_auto] bg-color-mode-surface-bg-icon-gray rounded-[var(--corner-radius-small)]">
                  <div className="flex items-center justify-end relative self-stretch w-full flex-[0_0_auto]">
                    <span className="font-[number:var(--body-body-2-font-weight)] text-color-mode-text-icons-t-sec text-left tracking-[var(--body-body-2-letter-spacing)] [direction:rtl] relative w-fit mt-[-1.00px] font-body-body-2 text-[length:var(--body-body-2-font-size)] leading-[var(--body-body-2-line-height)] whitespace-nowrap [font-style:var(--body-body-2-font-style)]">
                      {driverInfo.city}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <fieldset className="flex flex-col items-end gap-[var(--corner-radius-small)] relative self-stretch w-full flex-[0_0_auto]">
              <legend className="text-right pb-2 self-stretch mt-[-1.00px] font-[number:var(--body-body-2-font-weight)] text-color-mode-text-icons-t-sec text-[length:var(--body-body-2-font-size)] tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] relative font-body-body-2 [direction:rtl] [font-style:var(--body-body-2-font-style)]">
                أيام العطل "الغير مسموح بشحن الوقود"
              </legend>

              <div
                className="flex h-[46px] items-center gap-[var(--corner-radius-medium)] relative self-stretch w-full"
                role="group"
                aria-labelledby="days-legend"
              >
                {selectedDays.map((day, index) => (
                  <button
                    key={day.name}
                    type="button"
                    onClick={() => handleDayToggle(index)}
                    className={`flex items-center justify-center gap-[var(--corner-radius-small)] pt-[var(--corner-radius-small)] pr-[var(--corner-radius-large)] pb-[var(--corner-radius-small)] pl-[var(--corner-radius-large)] relative flex-1 self-stretch grow rounded-[var(--corner-radius-small)] ${
                      day.selected
                        ? "bg-color-mode-surface-bg-icon-gray"
                        : "border-[0.5px] border-solid border-color-mode-text-icons-t-placeholder opacity-25"
                    }`}
                    aria-pressed={day.selected}
                  >
                    <span
                      className={`relative w-fit font-body-body-2 font-[number:var(--body-body-2-font-weight)] text-[length:var(--body-body-2-font-size)] tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] whitespace-nowrap [direction:rtl] [font-style:var(--body-body-2-font-style)] ${
                        day.selected
                          ? "text-color-mode-text-icons-t-blue"
                          : "text-color-mode-text-icons-t-primary-gray"
                      }`}
                    >
                      {day.name}
                    </span>

                    {day.selected && (
                      <img
                        className="absolute top-0 left-0 w-3.5 h-3.5"
                        alt="Selected"
                        src="/img/rectangle-22DI.svg"
                      />
                    )}
                  </button>
                ))}
              </div>
            </fieldset>

            <div className="flex items-start gap-5 relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex flex-col items-end gap-[var(--corner-radius-extra-small)] relative flex-1 grow">
                <label className="relative self-stretch mt-[-1.00px] font-caption-caption-1 font-[number:var(--caption-caption-1-font-weight)] text-color-mode-text-icons-t-placeholder text-[length:var(--caption-caption-1-font-size)] tracking-[var(--caption-caption-1-letter-spacing)] leading-[var(--caption-caption-1-line-height)] [direction:rtl] [font-style:var(--caption-caption-1-font-style)]">
                  حالة السيارة
                </label>

                <div className="flex flex-col items-end justify-center gap-2.5 pt-[var(--corner-radius-small)] pr-[var(--corner-radius-small)] pb-[var(--corner-radius-small)] pl-[var(--corner-radius-small)] relative self-stretch w-full flex-[0_0_auto] bg-color-mode-surface-bg-icon-gray rounded-[var(--corner-radius-small)]">
                  <div className="flex items-center justify-end relative self-stretch w-full flex-[0_0_auto]">
                    <span className="font-[number:var(--body-body-2-font-weight)] text-color-mode-text-icons-t-sec text-left tracking-[var(--body-body-2-letter-spacing)] [direction:rtl] relative w-fit mt-[-1.00px] font-body-body-2 text-[length:var(--body-body-2-font-size)] leading-[var(--body-body-2-line-height)] whitespace-nowrap [font-style:var(--body-body-2-font-style)]">
                      {driverInfo.carStatus}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-end gap-[var(--corner-radius-extra-small)] relative flex-1 grow">
                <label className="relative self-stretch mt-[-1.00px] font-caption-caption-1 font-[number:var(--caption-caption-1-font-weight)] text-color-mode-text-icons-t-placeholder text-[length:var(--caption-caption-1-font-size)] tracking-[var(--caption-caption-1-letter-spacing)] leading-[var(--caption-caption-1-line-height)] [direction:rtl] [font-style:var(--caption-caption-1-font-style)]">
                  القيمة المالية المحددة للسائق (ر.س)
                </label>

                <div className="flex flex-col items-end justify-center gap-2.5 pt-[var(--corner-radius-small)] pr-[var(--corner-radius-small)] pb-[var(--corner-radius-small)] pl-[var(--corner-radius-small)] relative self-stretch w-full flex-[0_0_auto] bg-color-mode-surface-bg-icon-gray rounded-[var(--corner-radius-small)]">
                  <div className="flex items-center justify-end relative self-stretch w-full flex-[0_0_auto]">
                    <span className="font-[number:var(--body-body-2-font-weight)] text-color-mode-text-icons-t-sec tracking-[var(--body-body-2-letter-spacing)] relative w-fit mt-[-1.00px] font-body-body-2 text-[length:var(--body-body-2-font-size)] leading-[var(--body-body-2-line-height)] whitespace-nowrap [font-style:var(--body-body-2-font-style)]">
                      {driverInfo.monetaryValue}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-end gap-[var(--corner-radius-extra-small)] relative flex-1 grow">
                <div className="relative w-[38px] h-[38px]">
                  <div className="h-[38px] rounded-[var(--corner-radius-small)] bg-[url(/img/frame-581-1.svg)] bg-cover bg-[50%_50%]" />
                </div>

                <div className="flex flex-col items-end gap-[var(--corner-radius-extra-small)] relative flex-1 grow">
                  <label className="relative self-stretch mt-[-1.00px] font-caption-caption-1 font-[number:var(--caption-caption-1-font-weight)] text-color-mode-text-icons-t-placeholder text-[length:var(--caption-caption-1-font-size)] tracking-[var(--caption-caption-1-letter-spacing)] leading-[var(--caption-caption-1-line-height)] [direction:rtl] [font-style:var(--caption-caption-1-font-style)]">
                    صورة ترخيص السائق "اختياري"
                  </label>

                  <div className="flex flex-col items-end justify-center gap-2.5 pt-[var(--corner-radius-small)] pr-[var(--corner-radius-small)] pb-[var(--corner-radius-small)] pl-[var(--corner-radius-small)] relative self-stretch w-full flex-[0_0_auto] bg-color-mode-surface-bg-icon-gray rounded-[var(--corner-radius-small)]">
                    <div className="flex items-center justify-end relative self-stretch w-full flex-[0_0_auto]">
                      <span className="font-[number:var(--body-body-2-font-weight)] text-color-mode-text-icons-t-sec tracking-[var(--body-body-2-letter-spacing)] relative w-fit mt-[-1.00px] font-body-body-2 text-[length:var(--body-body-2-font-size)] leading-[var(--body-body-2-line-height)] whitespace-nowrap [font-style:var(--body-body-2-font-style)]">
                        {driverInfo.licenseImage}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-5 relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex items-start justify-end gap-[var(--corner-radius-extra-small)] relative flex-1 grow">
                <div className="flex items-center gap-5 relative flex-1 grow">
                  <div className="flex items-end gap-1 relative flex-1 grow">
                    <img
                      className="relative w-[77px] h-10 aspect-[1.93]"
                      alt="License plate"
                      src="/img/image-20DI.png"
                    />

                    <div className="flex flex-col items-end gap-[var(--corner-radius-extra-small)] relative flex-1 grow">
                      <label className="relative self-stretch mt-[-1.00px] font-caption-caption-1 font-[number:var(--caption-caption-1-font-weight)] text-color-mode-text-icons-t-placeholder text-[length:var(--caption-caption-1-font-size)] tracking-[var(--caption-caption-1-letter-spacing)] leading-[var(--caption-caption-1-line-height)] [direction:rtl] [font-style:var(--caption-caption-1-font-style)]">
                        حروف لوحة السيارة
                      </label>

                      <div className="flex flex-col items-end justify-center gap-2.5 pt-[var(--corner-radius-small)] pr-[var(--corner-radius-small)] pb-[var(--corner-radius-small)] pl-[var(--corner-radius-small)] relative self-stretch w-full flex-[0_0_auto] bg-color-mode-surface-bg-icon-gray rounded-[var(--corner-radius-small)]">
                        <div className="flex items-center justify-end relative self-stretch w-full flex-[0_0_auto]">
                          <span className="font-[number:var(--body-body-2-font-weight)] text-color-mode-text-icons-t-sec text-left tracking-[var(--body-body-2-letter-spacing)] [direction:rtl] relative w-fit mt-[-1.00px] font-body-body-2 text-[length:var(--body-body-2-font-size)] leading-[var(--body-body-2-line-height)] whitespace-nowrap [font-style:var(--body-body-2-font-style)]">
                            {driverInfo.plateLetters}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col items-end gap-[var(--corner-radius-extra-small)] relative flex-1 grow">
                    <label className="relative self-stretch mt-[-1.00px] font-caption-caption-1 font-[number:var(--caption-caption-1-font-weight)] text-color-mode-text-icons-t-placeholder text-[length:var(--caption-caption-1-font-size)] tracking-[var(--caption-caption-1-letter-spacing)] leading-[var(--caption-caption-1-line-height)] [direction:rtl] [font-style:var(--caption-caption-1-font-style)]">
                      رقم لوحة السيارة
                    </label>

                    <div className="flex flex-col items-end justify-center gap-2.5 pt-[var(--corner-radius-small)] pr-[var(--corner-radius-small)] pb-[var(--corner-radius-small)] pl-[var(--corner-radius-small)] relative self-stretch w-full flex-[0_0_auto] bg-color-mode-surface-bg-icon-gray rounded-[var(--corner-radius-small)]">
                      <div className="flex items-center justify-end relative self-stretch w-full flex-[0_0_auto]">
                        <span className="font-[number:var(--body-body-2-font-weight)] text-color-mode-text-icons-t-sec tracking-[var(--body-body-2-letter-spacing)] relative w-fit mt-[-1.00px] font-body-body-2 text-[length:var(--body-body-2-font-size)] leading-[var(--body-body-2-line-height)] whitespace-nowrap [font-style:var(--body-body-2-font-style)]">
                          {driverInfo.plateNumber}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col items-end gap-[var(--corner-radius-extra-small)] relative flex-1 grow">
                    <label className="relative self-stretch mt-[-1.00px] font-caption-caption-1 font-[number:var(--caption-caption-1-font-weight)] text-color-mode-text-icons-t-placeholder text-[length:var(--caption-caption-1-font-size)] tracking-[var(--caption-caption-1-letter-spacing)] leading-[var(--caption-caption-1-line-height)] [direction:rtl] [font-style:var(--caption-caption-1-font-style)]">
                      تصنيف السيارة
                    </label>

                    <div
                      className="flex flex-col items-end justify-center gap-2.5 pt-[var(--corner-radius-small)] pr-[var(--corner
-radius-small)] pb-[var(--corner-radius-small)] pl-[var(--corner-radius-small)] relative self-stretch w-full flex-[0_0_auto] bg-color-mode-surface-bg-icon-gray rounded-[var(--corner-radius-small)]"
                    >
                      <div className="flex items-center justify-end relative self-stretch w-full flex-[0_0_auto]">
                        <span className="font-[number:var(--body-body-2-font-weight)] text-color-mode-text-icons-t-sec text-left tracking-[var(--body-body-2-letter-spacing)] [direction:rtl] relative w-fit mt-[-1.00px] font-body-body-2 text-[length:var(--body-body-2-font-size)] leading-[var(--body-body-2-line-height)] whitespace-nowrap [font-style:var(--body-body-2-font-style)]">
                          {driverInfo.carCategory}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>

          <div className="absolute top-[276px] left-0 w-[43px] h-[43px]" />
        </div>

        <button className="inline-flex flex-col items-start gap-2.5 pt-[var(--corner-radius-medium)] pb-[var(--corner-radius-medium)] px-2.5 relative flex-[0_0_auto] bg-color-mode-surface-bg-orange-light rounded-[var(--corner-radius-small)]">
          <div className="flex items-center gap-[var(--corner-radius-small)] relative self-stretch w-full flex-[0_0_auto]">
            <span className="font-[number:var(--subtitle-subtitle-3-font-weight)] text-color-mode-text-icons-t-orange text-left tracking-[var(--subtitle-subtitle-3-letter-spacing)] [direction:rtl] relative w-fit mt-[-1.00px] font-subtitle-subtitle-3 text-[length:var(--subtitle-subtitle-3-font-size)] leading-[var(--subtitle-subtitle-3-line-height)] whitespace-nowrap [font-style:var(--subtitle-subtitle-3-font-style)]">
              تعديل البيانات
            </span>
          </div>
        </button>
      </section>
    </main>
  );
};
