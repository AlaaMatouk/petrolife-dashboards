import React, { useState } from "react";

export const VehicleInformationSection = (): JSX.Element => {
  const [formData, setFormData] = useState({
    phone: "",
    email: "hesham@gmail.com",
    driverName: "",
    driverImage: "hsgndkmmcjhd.jpg",
    address: "",
    city: "الرياض",
    vehicleStatus: "دبلوماسية",
    driverAmount: "100",
    driverLicense: "",
    plateLetters: "ح ن ط",
    plateNumber: "7655",
    vehicleCategory: "صغيرة",
  });

  const [selectedDays, setSelectedDays] = useState(["السبت"]);

  const weekDays = [
    "الجمعة",
    "الخميس",
    "الأربعاء",
    "الثلاثاء",
    "الإثنين",
    "الأحد",
    "السبت",
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleDayToggle = (day: string) => {
    setSelectedDays((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
    );
  };

  const handleFileUpload = (field: string) => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file) {
        handleInputChange(field, file.name);
      }
    };
    input.click();
  };

  return (
    <section
      className="flex flex-col items-start gap-5 relative self-stretch w-full flex-[0_0_auto]"
      role="form"
      aria-label="معلومات السيارة والسائق"
    >
      <div className="flex flex-col items-end gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex flex-col items-start gap-5 relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex items-start gap-5 relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex flex-col items-end gap-[var(--corner-radius-extra-small)] relative flex-1 grow">
              <label className="relative self-stretch mt-[-1.00px] font-body-body-2 font-[number:var(--body-body-2-font-weight)] text-color-mode-text-icons-t-sec text-[length:var(--body-body-2-font-size)] tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] [direction:rtl] [font-style:var(--body-body-2-font-style)]">
                رقم الهاتف
              </label>
              <div className="flex h-[46px] items-center justify-end gap-[var(--corner-radius-small)] pt-[var(--corner-radius-small)] pr-[var(--corner-radius-small)] pb-[var(--corner-radius-small)] pl-[var(--corner-radius-small)] relative self-stretch w-full rounded-[var(--corner-radius-small)] border-[0.5px] border-solid border-color-mode-text-icons-t-placeholder">
                <div className="flex items-center justify-end pt-[3px] pb-0 px-0 relative flex-1 grow">
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    placeholder="رقم الهاتف هنا"
                    className="w-full font-[number:var(--body-body-2-font-weight)] text-color-mode-text-icons-t-placeholder text-left tracking-[var(--body-body-2-letter-spacing)] [direction:rtl] mt-[-1.00px] font-body-body-2 text-[length:var(--body-body-2-font-size)] leading-[var(--body-body-2-line-height)] [font-style:var(--body-body-2-font-style)] bg-transparent border-none outline-none"
                    dir="rtl"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-end gap-[var(--corner-radius-extra-small)] relative flex-1 grow">
              <label className="relative self-stretch mt-[-1.00px] font-body-body-2 font-[number:var(--body-body-2-font-weight)] text-color-mode-text-icons-t-sec text-[length:var(--body-body-2-font-size)] tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] [direction:rtl] [font-style:var(--body-body-2-font-style)]">
                البريد الالكتروني
              </label>
              <div className="flex h-[46px] items-center justify-end gap-[var(--corner-radius-small)] pt-[var(--corner-radius-small)] pr-[var(--corner-radius-small)] pb-[var(--corner-radius-small)] pl-[var(--corner-radius-small)] relative self-stretch w-full rounded-[var(--corner-radius-small)] border-[0.5px] border-solid border-color-mode-text-icons-t-placeholder">
                <div className="flex items-center justify-end pt-[3px] pb-0 px-0 relative flex-1 grow">
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="w-full font-[number:var(--body-body-2-font-weight)] text-color-mode-text-icons-t-placeholder tracking-[var(--body-body-2-letter-spacing)] mt-[-1.00px] font-body-body-2 text-[length:var(--body-body-2-font-size)] leading-[var(--body-body-2-line-height)] [font-style:var(--body-body-2-font-style)] bg-transparent border-none outline-none"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-end gap-[var(--corner-radius-extra-small)] relative flex-1 grow">
              <label className="relative self-stretch mt-[-1.00px] font-body-body-2 font-[number:var(--body-body-2-font-weight)] text-color-mode-text-icons-t-sec text-[length:var(--body-body-2-font-size)] tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] [direction:rtl] [font-style:var(--body-body-2-font-style)]">
                اسم السائق
              </label>
              <div className="flex h-[46px] items-center justify-end gap-[var(--corner-radius-small)] pt-[var(--corner-radius-small)] pr-[var(--corner-radius-small)] pb-[var(--corner-radius-small)] pl-[var(--corner-radius-small)] relative self-stretch w-full rounded-[var(--corner-radius-small)] border-[0.5px] border-solid border-color-mode-text-icons-t-placeholder">
                <div className="flex items-center justify-end pt-[3px] pb-0 px-0 relative flex-1 grow">
                  <input
                    type="text"
                    value={formData.driverName}
                    onChange={(e) =>
                      handleInputChange("driverName", e.target.value)
                    }
                    placeholder="اسم السائق هنا"
                    className="w-full font-[number:var(--body-body-2-font-weight)] text-color-mode-text-icons-t-placeholder text-left tracking-[var(--body-body-2-letter-spacing)] [direction:rtl] mt-[-1.00px] font-body-body-2 text-[length:var(--body-body-2-font-size)] leading-[var(--body-body-2-line-height)] [font-style:var(--body-body-2-font-style)] bg-transparent border-none outline-none"
                    dir="rtl"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-start gap-5 relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex items-end gap-[var(--corner-radius-extra-small)] relative flex-1 grow">
              <div className="relative w-[43px] h-[42px]">
                <div className="absolute top-1 left-[5px] w-[38px] h-[38px] rounded-[var(--corner-radius-small)] bg-[url(/img/frame-581.svg)] bg-cover bg-[50%_50%]" />
                <div className="absolute top-0 left-0 w-3 h-3">
                  <div className="absolute -top-px -left-px w-3.5 h-3.5 bg-[color:var(--color-mode-surface-bg-bording-mock)] rounded-[7px] border border-solid border-color-mode-surface-bg-screen" />
                  <img
                    className="absolute top-0.5 left-0.5 w-[9px] h-[9px] aspect-[1]"
                    alt="Side icons"
                    src="/img/side-icons-2addD.svg"
                  />
                </div>
              </div>
              <div className="flex flex-col items-end gap-[var(--corner-radius-extra-small)] relative flex-1 grow">
                <label className="relative self-stretch mt-[-1.00px] font-body-body-2 font-[number:var(--body-body-2-font-weight)] text-color-mode-text-icons-t-sec text-[length:var(--body-body-2-font-size)] tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] [direction:rtl] [font-style:var(--body-body-2-font-style)]">
                  صورة السائق
                </label>
                <button
                  type="button"
                  onClick={() => handleFileUpload("driverImage")}
                  className="flex h-[46px] items-center justify-end gap-[var(--corner-radius-small)] pt-[var(--corner-radius-small)] pr-[var(--corner-radius-small)] pb-[var(--corner-radius-small)] pl-[var(--corner-radius-small)] relative self-stretch w-full rounded-[var(--corner-radius-small)] border-[0.5px] border-solid border-color-mode-text-icons-t-placeholder bg-transparent cursor-pointer hover:bg-color-mode-surface-bg-icon-gray transition-colors"
                  aria-label="رفع صورة السائق"
                >
                  <img
                    className="relative w-[17px] h-[17px] aspect-[1]"
                    alt="Side icons"
                    src="/img/side-icons-5addD.svg"
                  />
                  <div className="flex items-center justify-end pt-[3px] pb-0 px-0 relative flex-1 grow">
                    <div className="w-fit font-[number:var(--body-body-2-font-weight)] text-color-mode-text-icons-t-sec tracking-[var(--body-body-2-letter-spacing)] whitespace-nowrap relative mt-[-1.00px] font-body-body-2 text-[length:var(--body-body-2-font-size)] leading-[var(--body-body-2-line-height)] [font-style:var(--body-body-2-font-style)]">
                      {formData.driverImage}
                    </div>
                  </div>
                </button>
              </div>
            </div>
            <div className="flex flex-col items-end gap-[var(--corner-radius-extra-small)] relative flex-1 grow">
              <label className="relative self-stretch mt-[-1.00px] font-body-body-2 font-[number:var(--body-body-2-font-weight)] text-color-mode-text-icons-t-sec text-[length:var(--body-body-2-font-size)] tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] [direction:rtl] [font-style:var(--body-body-2-font-style)]">
                العنوان
              </label>
              <div className="flex h-[46px] items-center justify-end gap-[var(--corner-radius-small)] pt-[var(--corner-radius-small)] pr-[var(--corner-radius-small)] pb-[var(--corner-radius-small)] pl-[var(--corner-radius-small)] relative self-stretch w-full rounded-[var(--corner-radius-small)] border-[0.5px] border-solid border-color-mode-text-icons-t-placeholder">
                <div className="flex items-center justify-end pt-[3px] pb-0 px-0 relative flex-1 grow">
                  <input
                    type="text"
                    value={formData.address}
                    onChange={(e) =>
                      handleInputChange("address", e.target.value)
                    }
                    placeholder="العنوان بالتفصيل هنا"
                    className="w-full font-[number:var(--body-body-2-font-weight)] text-color-mode-text-icons-t-placeholder text-left tracking-[var(--body-body-2-letter-spacing)] [direction:rtl] mt-[-1.00px] font-body-body-2 text-[length:var(--body-body-2-font-size)] leading-[var(--body-body-2-line-height)] [font-style:var(--body-body-2-font-style)] bg-transparent border-none outline-none"
                    dir="rtl"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-end gap-[var(--corner-radius-extra-small)] relative flex-1 grow">
              <label className="relative self-stretch mt-[-1.00px] font-body-body-2 font-[number:var(--body-body-2-font-weight)] text-color-mode-text-icons-t-sec text-[length:var(--body-body-2-font-size)] tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] [direction:rtl] [font-style:var(--body-body-2-font-style)]">
                المدينة
              </label>
              <div className="flex h-[46px] items-center justify-end gap-[var(--corner-radius-small)] pt-[var(--corner-radius-small)] pr-[var(--corner-radius-small)] pb-[var(--corner-radius-small)] pl-[var(--corner-radius-small)] relative self-stretch w-full rounded-[var(--corner-radius-small)] border-[0.5px] border-solid border-color-mode-text-icons-t-placeholder">
                <img
                  className="relative w-[17px] h-[17px] aspect-[1]"
                  alt="Side icons"
                  src="/img/side-icons-7addD.svg"
                />
                <div className="flex items-center justify-end pt-[3px] pb-0 px-0 relative flex-1 grow">
                  <div className="relative w-fit mt-[-1.00px] font-body-body-2 font-[number:var(--body-body-2-font-weight)] text-color-mode-text-icons-t-sec text-[length:var(--body-body-2-font-size)] text-left tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] whitespace-nowrap [direction:rtl] [font-style:var(--body-body-2-font-style)]">
                    {formData.city}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-end gap-[var(--corner-radius-small)] relative self-stretch w-full flex-[0_0_auto]">
            <p className="relative self-stretch mt-[-1.00px] font-body-body-2 font-[number:var(--body-body-2-font-weight)] text-color-mode-text-icons-t-sec text-[length:var(--body-body-2-font-size)] tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] [direction:rtl] [font-style:var(--body-body-2-font-style)]">
              أيام الأجازات &quot;الغير مسموح بشحن الوقود&quot;
            </p>
            <div
              className="flex h-[46px] items-center gap-[var(--corner-radius-medium)] relative self-stretch w-full"
              role="group"
              aria-label="اختيار أيام الأجازات"
            >
              {weekDays.map((day) => (
                <button
                  key={day}
                  type="button"
                  onClick={() => handleDayToggle(day)}
                  className={`flex items-center justify-center gap-[var(--corner-radius-small)] pt-[var(--corner-radius-small)] pr-[var(--corner-radius-large)] pb-[var(--corner-radius-small)] pl-[var(--corner-radius-large)] relative flex-1 self-stretch grow rounded-[var(--corner-radius-small)] border-[0.5px] border-solid transition-colors ${
                    selectedDays.includes(day)
                      ? "border-color-mode-text-icons-t-blue"
                      : "border-color-mode-text-icons-t-placeholder"
                  } hover:border-color-mode-text-icons-t-blue`}
                >
                  <div
                    className={`relative w-fit font-[number:var(--body-body-2-font-weight)] tracking-[var(--body-body-2-letter-spacing)] font-body-body-2 text-[length:var(--body-body-2-font-size)] leading-[var(--body-body-2-line-height)] whitespace-nowrap [direction:rtl] [font-style:var(--body-body-2-font-style)] ${
                      selectedDays.includes(day)
                        ? "text-color-mode-text-icons-t-blue"
                        : "text-color-mode-text-icons-t-primary-gray"
                    }`}
                  >
                    {day}
                  </div>
                  {selectedDays.includes(day) && (
                    <img
                      className="absolute top-0 left-0 w-3.5 h-3.5"
                      alt="Rectangle"
                      src="/img/rectangle-22addD.svg"
                    />
                  )}
                </button>
              ))}
            </div>
          </div>
          <div className="flex items-start gap-5 relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex-col h-[74px] items-end gap-[var(--corner-radius-extra-small)] flex relative flex-1 grow">
              <label className="self-stretch font-[number:var(--body-body-2-font-weight)] text-color-mode-text-icons-t-sec tracking-[var(--body-body-2-letter-spacing)] [direction:rtl] relative mt-[-1.00px] font-body-body-2 text-[length:var(--body-body-2-font-size)] leading-[var(--body-body-2-line-height)] [font-style:var(--body-body-2-font-style)]">
                <span className="text-[var(--text-secondary)] tracking-[var(--body-body-2-letter-spacing)] font-body-body-2 [font-style:var(--body-body-2-font-style)] font-[number:var(--body-body-2-font-weight)] leading-[var(--body-body-2-line-height)] text-[length:var(--body-body-2-font-size)]">
                  حالة السيارة{" "}
                </span>
                <span className="text-[var(--core-colors-red-red-6)] tracking-[var(--body-body-2-letter-spacing)] font-body-body-2 [font-style:var(--body-body-2-font-style)] font-[number:var(--body-body-2-font-weight)] leading-[var(--body-body-2-line-height)] text-[length:var(--body-body-2-font-size)]">
                  *
                </span>
              </label>
              <div className="items-center justify-between p-2.5 self-stretch w-full rounded-[var(--corner-radius-medium)] border-[0.5px] border-solid border-color-mode-text-icons-t-placeholder flex relative flex-1 grow bg-color-mode-surface-bg-icon-gray">
                <div className="relative w-4 h-4 bg-[url(/img/component-1-1.svg)] bg-[100%_100%]" />
                <div className="flex items-center justify-end gap-2.5 relative flex-1 grow">
                  <div className="flex-1 h-5 font-[number:var(--body-body-2-font-weight)] text-color-mode-text-icons-t-placeholder tracking-[var(--body-body-2-letter-spacing)] whitespace-nowrap [direction:rtl] relative mt-[-1.00px] font-body-body-2 text-[length:var(--body-body-2-font-size)] leading-[var(--body-body-2-line-height)] [font-style:var(--body-body-2-font-style)]">
                    {formData.vehicleStatus}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-end gap-[var(--corner-radius-extra-small)] relative flex-1 grow">
              <label className="relative self-stretch mt-[-1.00px] font-body-body-2 font-[number:var(--body-body-2-font-weight)] text-color-mode-text-icons-t-sec text-[length:var(--body-body-2-font-size)] tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] [direction:rtl] [font-style:var(--body-body-2-font-style)]">
                القيمة المالية المحددة للسائق (ر.س)
              </label>
              <div className="flex h-[46px] items-center justify-end gap-[var(--corner-radius-small)] pt-[var(--corner-radius-small)] pr-[var(--corner-radius-small)] pb-[var(--corner-radius-small)] pl-[var(--corner-radius-small)] relative self-stretch w-full rounded-[var(--corner-radius-small)] border-[0.5px] border-solid border-color-mode-text-icons-t-placeholder">
                <div className="flex items-center justify-end pt-[3px] pb-0 px-0 relative flex-1 grow">
                  <input
                    type="number"
                    value={formData.driverAmount}
                    onChange={(e) =>
                      handleInputChange("driverAmount", e.target.value)
                    }
                    className="w-full font-[number:var(--body-body-2-font-weight)] text-color-mode-text-icons-t-placeholder tracking-[var(--body-body-2-letter-spacing)] mt-[-1.00px] font-body-body-2 text-[length:var(--body-body-2-font-size)] leading-[var(--body-body-2-line-height)] [font-style:var(--body-body-2-font-style)] bg-transparent border-none outline-none"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-end gap-[var(--corner-radius-extra-small)] relative flex-1 grow">
              <label className="relative self-stretch mt-[-1.00px] font-body-body-2 font-[number:var(--body-body-2-font-weight)] text-color-mode-text-icons-t-sec text-[length:var(--body-body-2-font-size)] tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] [direction:rtl] [font-style:var(--body-body-2-font-style)]">
                صورة ترخيص السائق &quot;اختياري&quot;
              </label>
              <button
                type="button"
                onClick={() => handleFileUpload("driverLicense")}
                className="flex h-[46px] items-center justify-end gap-[var(--corner-radius-small)] pt-[var(--corner-radius-small)] pr-[var(--corner-radius-small)] pb-[var(--corner-radius-small)] pl-[var(--corner-radius-small)] relative self-stretch w-full rounded-[var(--corner-radius-small)] border-[0.5px] border-solid border-color-mode-text-icons-t-placeholder bg-transparent cursor-pointer hover:bg-color-mode-surface-bg-icon-gray transition-colors"
                aria-label="رفع صورة ترخيص السائق"
              >
                <img
                  className="relative w-[17px] h-[17px] aspect-[1]"
                  alt="Side icons"
                  src="/img/side-icons-5addD.svg"
                />
                <div className="flex items-center justify-end pt-[3px] pb-0 px-0 relative flex-1 grow">
                  <p className="w-fit font-[number:var(--body-body-2-font-weight)] text-color-mode-text-icons-t-placeholder text-left tracking-[var(--body-body-2-letter-spacing)] whitespace-nowrap [direction:rtl] relative mt-[-1.00px] font-body-body-2 text-[length:var(--body-body-2-font-size)] leading-[var(--body-body-2-line-height)] [font-style:var(--body-body-2-font-style)]">
                    {formData.driverLicense || "ارفع صورة ترخيص السائق هنا"}
                  </p>
                </div>
              </button>
            </div>
            <div className="absolute top-0 left-[356px] font-[number:var(--subtitle-subtitle-3-font-weight)] text-color-mode-text-icons-t-blue tracking-[var(--subtitle-subtitle-3-letter-spacing)] font-subtitle-subtitle-3 text-[length:var(--subtitle-subtitle-3-font-size)] leading-[var(--subtitle-subtitle-3-line-height)] whitespace-nowrap [direction:rtl] [font-style:var(--subtitle-subtitle-3-font-style)]">
              غير محددة
            </div>
          </div>
          <div className="flex items-center gap-5 relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex items-end gap-[var(--corner-radius-extra-small)] relative flex-1 grow">
              <div className="flex items-center gap-5 relative flex-1 grow">
                <div className="flex items-end gap-1 relative flex-1 grow">
                  <div className="flex-col h-[74px] items-end gap-[var(--corner-radius-extra-small)] flex relative flex-1 grow">
                    <label className="relative self-stretch mt-[-1.00px] font-body-body-2 font-[number:var(--body-body-2-font-weight)] text-color-mode-text-icons-t-sec text-[length:var(--body-body-2-font-size)] tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] [direction:rtl] [font-style:var(--body-body-2-font-style)]">
                      حروف لوحة السيارة
                    </label>
                    <div className="items-center justify-between p-2.5 self-stretch w-full rounded-[var(--corner-radius-medium)] border-[0.5px] border-solid border-color-mode-text-icons-t-placeholder flex relative flex-1 grow bg-color-mode-surface-bg-icon-gray">
                      <div className="relative w-4 h-4 bg-[url(/img/component-1-1.svg)] bg-[100%_100%]" />
                      <div className="flex items-center justify-end gap-2.5 relative flex-1 grow">
                        <div className="flex-1 h-5 font-[number:var(--body-body-2-font-weight)] text-color-mode-text-icons-t-placeholder tracking-[var(--body-body-2-letter-spacing)] whitespace-nowrap [direction:rtl] relative mt-[-1.00px] font-body-body-2 text-[length:var(--body-body-2-font-size)] leading-[var(--body-body-2-line-height)] [font-style:var(--body-body-2-font-style)]">
                          {formData.plateLetters}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-[var(--corner-radius-extra-small)] relative flex-1 grow">
                  <label
                    className="relative self-stretch mt-[-1.00px] font-body-body-2 font-[number:var(--body-body-2-font-weight)] text-color-mode-text-icons-t-sec text-[length:var(--body-body-2-font-size)] tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] [direction:rtl] [
font-style:var(--body-body-2-font-style)]"
                  >
                    رقم لوحة السيارة
                  </label>
                  <div className="flex h-[46px] items-center justify-end gap-[var(--corner-radius-small)] pt-[var(--corner-radius-small)] pr-[var(--corner-radius-small)] pb-[var(--corner-radius-small)] pl-[var(--corner-radius-small)] relative self-stretch w-full rounded-[var(--corner-radius-small)] border-[0.5px] border-solid border-color-mode-text-icons-t-placeholder">
                    <img
                      className="relative w-[17px] h-[17px] aspect-[1]"
                      alt="Side icons"
                      src="/img/side-icons-7addD.svg"
                    />
                    <div className="flex items-center justify-end pt-[3px] pb-0 px-0 relative flex-1 grow">
                      <div className="w-fit font-[number:var(--body-body-2-font-weight)] text-color-mode-text-icons-t-placeholder tracking-[var(--body-body-2-letter-spacing)] whitespace-nowrap relative mt-[-1.00px] font-body-body-2 text-[length:var(--body-body-2-font-size)] leading-[var(--body-body-2-line-height)] [font-style:var(--body-body-2-font-style)]">
                        {formData.plateNumber}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-[var(--corner-radius-extra-small)] relative flex-1 grow">
                  <label className="relative self-stretch mt-[-1.00px] font-body-body-2 font-[number:var(--body-body-2-font-weight)] text-color-mode-text-icons-t-sec text-[length:var(--body-body-2-font-size)] tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] [direction:rtl] [font-style:var(--body-body-2-font-style)]">
                    تصنيف السيارة
                  </label>
                  <div className="flex h-[46px] items-center justify-end gap-[var(--corner-radius-small)] pt-[var(--corner-radius-small)] pr-[var(--corner-radius-small)] pb-[var(--corner-radius-small)] pl-[var(--corner-radius-small)] relative self-stretch w-full rounded-[var(--corner-radius-small)] border-[0.5px] border-solid border-color-mode-text-icons-t-placeholder">
                    <img
                      className="relative w-[17px] h-[17px] aspect-[1]"
                      alt="Side icons"
                      src="/img/side-icons-7addD.svg"
                    />
                    <div className="flex items-center justify-end pt-[3px] pb-0 px-0 relative flex-1 grow">
                      <div className="w-fit font-[number:var(--body-body-2-font-weight)] text-color-mode-text-icons-t-placeholder text-left tracking-[var(--body-body-2-letter-spacing)] whitespace-nowrap [direction:rtl] relative mt-[-1.00px] font-body-body-2 text-[length:var(--body-body-2-font-size)] leading-[var(--body-body-2-line-height)] [font-style:var(--body-body-2-font-style)]">
                        {formData.vehicleCategory}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[276px] left-0 w-[43px] h-[43px]" />
      </div>
      <div className="inline-flex items-start gap-5 relative flex-[0_0_auto]">
        <button
          type="button"
          className="inline-flex flex-col items-start gap-2.5 pt-[var(--corner-radius-medium)] pb-[var(--corner-radius-medium)] px-2.5 relative flex-[0_0_auto] bg-color-mode-surface-primary-blue rounded-[var(--corner-radius-small)] hover:opacity-90 transition-opacity cursor-pointer"
          aria-label="إضافة السائق"
        >
          <div className="flex items-center gap-[var(--corner-radius-small)] relative self-stretch w-full flex-[0_0_auto]">
            <div className="w-fit font-[number:var(--subtitle-subtitle-3-font-weight)] text-color-mode-text-icons-t-btn-negative text-left tracking-[var(--subtitle-subtitle-3-letter-spacing)] whitespace-nowrap [direction:rtl] relative mt-[-1.00px] font-subtitle-subtitle-3 text-[length:var(--subtitle-subtitle-3-font-size)] leading-[var(--subtitle-subtitle-3-line-height)] [font-style:var(--subtitle-subtitle-3-font-style)]">
              إضافة السائق
            </div>
          </div>
        </button>
      </div>
    </section>
  );
};
