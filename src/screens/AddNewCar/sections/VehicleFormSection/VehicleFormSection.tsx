import { Car, CarFront, ChevronLeft, Truck } from "lucide-react";
import React, { useState } from "react";

export const VehicleFormSection = (): JSX.Element => {
  const [formData, setFormData] = useState({
    carName: "",
    fuelType: "بنزين 91",
    carType: "صغيرة",
    city: "الرياض",
    year: "2020",
    model: "كرولا",
    brand: "تيوتا",
    plateLetters: "",
    carCondition: "دبلوماسية",
  });

  const fuelTypes = [
    { id: "diesel", label: "ديزل", selected: false },
    { id: "petrol95", label: "بنزين 95", selected: false },
    { id: "petrol91", label: "بنزين 91", selected: true },
  ];

  const carTypes = [
    {
      id: "vip",
      label: "Vip",
      icon: <CarFront className="w-4 h-4 text-gray-500" />,
      selected: false,
    },
    {
      id: "large",
      label: "كبيرة",
      icon: <Truck className="w-4 h-4 text-purple-500" />,
      selected: false,
    },
    {
      id: "medium",
      label: "متوسطة",
      icon: <Car className="w-4 h-4 text-orange-500" />,
      selected: false,
    },
    {
      id: "small",
      label: "صغيرة",
      icon: <CarFront className="w-4 h-4 text-green-500" />,
      selected: true,
    },
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
  };

  return (
    <form
      className="flex flex-col items-start gap-5 relative self-stretch w-full flex-[0_0_auto]"
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
    >
      <div className="flex flex-col items-start gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex flex-col items-start gap-5 relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex items-start gap-5 relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex flex-col items-end gap-[var(--corner-radius-extra-small)] relative flex-1 grow">
              <label className="self-stretch font-normal text-color-mode-text-icons-t-sec [direction:rtl] relative mt-[-1.00px] [font-family:'Tajawal',Helvetica] text-sm leading-[22.4px]">
                <span className="tracking-[var(--body-body-2-letter-spacing)] font-body-body-2 [font-style:var(--body-body-2-font-style)] font-[number:var(--body-body-2-font-weight)] leading-[var(--body-body-2-line-height)] text-[length:var(--body-body-2-font-size)]">
                  اسم السيارة{" "}
                </span>
                <span className="text-[length:var(--caption-caption-1-font-size)] tracking-[var(--caption-caption-1-letter-spacing)] leading-[var(--caption-caption-1-line-height)] font-caption-caption-1 [font-style:var(--caption-caption-1-font-style)] font-[number:var(--caption-caption-1-font-weight)]">
                  "اختياري"
                </span>
              </label>

              <div className="flex h-[46px] items-center justify-end gap-[var(--corner-radius-small)] pt-[var(--corner-radius-small)] pr-[var(--corner-radius-small)] pb-[var(--corner-radius-small)] pl-[var(--corner-radius-small)] relative self-stretch w-full rounded-[var(--corner-radius-small)] border-[0.5px] border-solid border-color-mode-text-icons-t-placeholder">
                <div className="flex items-center justify-end pt-[3px] pb-0 px-0 relative flex-1 grow">
                  <input
                    type="text"
                    value={formData.carName}
                    onChange={(e) =>
                      handleInputChange("carName", e.target.value)
                    }
                    placeholder="اسم السيارة هنا"
                    className="text-right relative w-full mt-[-1.00px] font-body-body-2 font-[number:var(--body-body-2-font-weight)] text-color-mode-text-icons-t-placeholder text-[length:var(--body-body-2-font-size)] text-left tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] [direction:rtl] [font-style:var(--body-body-2-font-style)] bg-transparent border-none outline-none"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-start gap-5 relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex flex-col items-end gap-[var(--corner-radius-extra-small)] relative flex-1 grow">
              <label className="self-stretch mt-[-1.00px] font-[number:var(--body-body-2-font-weight)] text-color-mode-text-icons-t-sec tracking-[var(--body-body-2-letter-spacing)] relative font-body-body-2 text-[length:var(--body-body-2-font-size)] leading-[var(--body-body-2-line-height)] [direction:rtl] [font-style:var(--body-body-2-font-style)]">
                نوع البنزين
              </label>

              <div
                className="flex items-center gap-[var(--corner-radius-small)] relative self-stretch w-full flex-[0_0_auto]"
                role="radiogroup"
                aria-labelledby="fuel-type-label"
              >
                {fuelTypes.map((fuel) => (
                  <button
                    key={fuel.id}
                    type="button"
                    onClick={() => handleInputChange("fuelType", fuel.label)}
                    className={`flex h-[46px] items-center justify-center gap-[var(--corner-radius-small)] pt-[var(--corner-radius-small)] pr-[var(--corner-radius-large)] pb-[var(--corner-radius-small)] pl-[var(--corner-radius-large)] relative flex-1 grow rounded-[var(--corner-radius-small)] border-[0.5px] border-solid ${
                      formData.fuelType === fuel.label
                        ? "border-[0.7px] border-color-mode-text-icons-t-blue"
                        : "border-color-mode-text-icons-t-placeholder"
                    }`}
                    role="radio"
                    aria-checked={formData.fuelType === fuel.label}
                  >
                    <div
                      className={`w-fit font-[number:var(--body-body-2-font-weight)] text-left tracking-[var(--body-body-2-letter-spacing)] whitespace-nowrap relative font-body-body-2 text-[length:var(--body-body-2-font-size)] leading-[var(--body-body-2-line-height)] [direction:rtl] [font-style:var(--body-body-2-font-style)] ${
                        formData.fuelType === fuel.label
                          ? "text-color-mode-text-icons-t-blue"
                          : "text-color-mode-text-icons-t-sec"
                      }`}
                    >
                      {fuel.label}
                    </div>
                    {formData.fuelType === fuel.label && (
                      <img
                        className="absolute top-0 left-px w-3.5 h-3.5"
                        alt="Selected"
                        src="/img/rectangle-22addD.svg"
                      />
                    )}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col items-end gap-[var(--corner-radius-extra-small)] relative flex-1 grow">
              <label className="self-stretch mt-[-1.00px] font-[number:var(--body-body-2-font-weight)] text-color-mode-text-icons-t-sec tracking-[var(--body-body-2-letter-spacing)] relative font-body-body-2 text-[length:var(--body-body-2-font-size)] leading-[var(--body-body-2-line-height)] [direction:rtl] [font-style:var(--body-body-2-font-style)]">
                نوع السيارة
              </label>

              <div
                className="flex items-center gap-[var(--corner-radius-small)] relative self-stretch w-full flex-[0_0_auto]"
                role="radiogroup"
                aria-labelledby="car-type-label"
              >
                {carTypes.map((carType) => (
                  <button
                    key={carType.id}
                    type="button"
                    onClick={() => handleInputChange("carType", carType.label)}
                    className={`flex h-[46px] items-center justify-center gap-[var(--corner-radius-small)] pt-[var(--corner-radius-small)] pr-[var(--corner-radius-large)] pb-[var(--corner-radius-small)] pl-[var(--corner-radius-large)] relative flex-1 grow rounded-[var(--corner-radius-small)] border-[0.5px] border-solid ${
                      formData.carType === carType.label
                        ? "border-[0.7px] border-color-mode-text-icons-t-blue"
                        : "border-color-mode-text-icons-t-placeholder"
                    }`}
                    role="radio"
                    aria-checked={formData.carType === carType.label}
                  >
                    <div
                      className={`inline-flex items-center justify-center gap-0.5 relative flex-[0_0_auto] ${
                        carType.id === "medium"
                          ? "ml-[-11.62px] mr-[-11.62px]"
                          : carType.id === "small"
                          ? "ml-[-5.12px] mr-[-5.12px]"
                          : ""
                      }`}
                    >
                      <div
                        className={`relative w-fit mt-[-1.00px] text-[length:var(--body-body-2-font-size)] text-left tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] whitespace-nowrap [direction:rtl] ${
                          formData.carType === carType.label
                            ? carType.id === "small"
                              ? "font-[number:var(--subtitle-subtitle-3-font-weight)] text-color-mode-text-icons-t-blue font-subtitle-subtitle-3 text-[length:var(--subtitle-subtitle-3-font-size)] leading-[var(--subtitle-subtitle-3-line-height)] tracking-[var(--subtitle-subtitle-3-letter-spacing)] [font-style:var(--subtitle-subtitle-3-font-style)]"
                              : "font-body-body-2 font-[number:var(--body-body-2-font-weight)] text-color-mode-text-icons-t-blue [font-style:var(--body-body-2-font-style)]"
                            : "font-body-body-2 font-[number:var(--body-body-2-font-weight)] text-color-mode-text-icons-t-sec [font-style:var(--body-body-2-font-style)]"
                        }`}
                      >
                        {carType.label}
                      </div>
                      {/* <img
                        className="relative w-3 h-3 aspect-[1]"
                        alt="Car type icon"
                        src={carType.icon}
                      /> */}
                      {carType.icon}
                    </div>
                    {formData.carType === carType.label && (
                      <img
                        className="absolute top-0 left-px w-3.5 h-3.5"
                        alt="Selected"
                        src={
                          carType.id === "small"
                            ? "/img/rectangle-22-1addD.svg"
                            : "/img/rectangle-22addD.svg"
                        }
                      />
                    )}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col items-end gap-[var(--corner-radius-extra-small)] relative flex-1 grow">
              <label className="self-stretch mt-[-1.00px] font-[number:var(--body-body-2-font-weight)] text-color-mode-text-icons-t-sec tracking-[var(--body-body-2-letter-spacing)] relative font-body-body-2 text-[length:var(--body-body-2-font-size)] leading-[var(--body-body-2-line-height)] [direction:rtl] [font-style:var(--body-body-2-font-style)]">
                مدينة السيارة
              </label>

              <div className="flex h-[46px] items-center justify-end gap-[var(--corner-radius-small)] pt-[var(--corner-radius-small)] pr-[var(--corner-radius-small)] pb-[var(--corner-radius-small)] pl-[var(--corner-radius-small)] relative self-stretch w-full rounded-[var(--corner-radius-small)] border-[0.5px] border-solid border-color-mode-text-icons-t-placeholder">
                <ChevronLeft className="w-4 h-4 text-gray-500" />

                <div className="flex items-center justify-end pt-[3px] pb-0 px-0 relative flex-1 grow">
                  <select
                    value={formData.city}
                    onChange={(e) => handleInputChange("city", e.target.value)}
                    className="text-right relative pr-2 w-full mt-[-1.00px] font-body-body-2 font-[number:var(--body-body-2-font-weight)] text-color-mode-text-icons-t-sec text-[length:var(--body-body-2-font-size)] text-left tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] [direction:rtl] [font-style:var(--body-body-2-font-style)] bg-transparent border-none outline-none"
                  >
                    <option value="الرياض">الرياض</option>
                    <option value="جدة">جدة</option>
                    <option value="الدمام">الدمام</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-start gap-5 relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex flex-col items-end gap-[var(--corner-radius-extra-small)] relative flex-1 grow">
              <label className="self-stretch mt-[-1.00px] font-[number:var(--body-body-2-font-weight)] text-color-mode-text-icons-t-sec tracking-[var(--body-body-2-letter-spacing)] relative font-body-body-2 text-[length:var(--body-body-2-font-size)] leading-[var(--body-body-2-line-height)] [direction:rtl] [font-style:var(--body-body-2-font-style)]">
                سنة الاصدار
              </label>

              <div className="flex h-[46px] items-center justify-end gap-[var(--corner-radius-small)] pt-[var(--corner-radius-small)] pr-[var(--corner-radius-small)] pb-[var(--corner-radius-small)] pl-[var(--corner-radius-small)] relative self-stretch w-full rounded-[var(--corner-radius-small)] border-[0.5px] border-solid border-color-mode-text-icons-t-placeholder">
                {/* <img
                  className="relative w-[17px] h-[17px] aspect-[1]"
                  alt="Dropdown icon"
                  src="/img/side-icons-6.svg"
                /> */}
                <ChevronLeft className="w-4 h-4 text-gray-500" />
                <div className="flex items-center justify-end pt-[3px] pb-0 px-0 relative flex-1 grow">
                  <select
                    value={formData.year}
                    onChange={(e) => handleInputChange("year", e.target.value)}
                    className="text-right pr-2 w-full font-[number:var(--body-body-2-font-weight)] text-color-mode-text-icons-t-sec tracking-[var(--body-body-2-letter-spacing)] relative mt-[-1.00px] font-body-body-2 text-[length:var(--body-body-2-font-size)] leading-[var(--body-body-2-line-height)] [font-style:var(--body-body-2-font-style)] bg-transparent border-none outline-none"
                  >
                    <option value="2020">2020</option>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-end gap-[var(--corner-radius-extra-small)] relative flex-1 grow">
              <label className="self-stretch mt-[-1.00px] font-[number:var(--body-body-2-font-weight)] text-color-mode-text-icons-t-sec tracking-[var(--body-body-2-letter-spacing)] relative font-body-body-2 text-[length:var(--body-body-2-font-size)] leading-[var(--body-body-2-line-height)] [direction:rtl] [font-style:var(--body-body-2-font-style)]">
                الطراز
              </label>

              <div className="flex h-[46px] items-center justify-end gap-[var(--corner-radius-small)] pt-[var(--corner-radius-small)] pr-[var(--corner-radius-small)] pb-[var(--corner-radius-small)] pl-[var(--corner-radius-small)] relative self-stretch w-full rounded-[var(--corner-radius-small)] border-[0.5px] border-solid border-color-mode-text-icons-t-placeholder">
                <ChevronLeft className="w-4 h-4 text-gray-500" />

                <div className="flex items-center justify-end pt-[3px] pb-0 px-0 relative flex-1 grow">
                  <select
                    value={formData.model}
                    onChange={(e) => handleInputChange("model", e.target.value)}
                    className="text-right relative pr-2 w-full mt-[-1.00px] font-body-body-2 font-[number:var(--body-body-2-font-weight)] text-color-mode-text-icons-t-sec text-[length:var(--body-body-2-font-size)] text-left tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] [direction:rtl] [font-style:var(--body-body-2-font-style)] bg-transparent border-none outline-none"
                  >
                    <option value="كرولا">كرولا</option>
                    <option value="كامري">كامري</option>
                    <option value="أكورد">أكورد</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-end gap-[var(--corner-radius-extra-small)] relative flex-1 grow">
              <label className="self-stretch mt-[-1.00px] font-[number:var(--body-body-2-font-weight)] text-color-mode-text-icons-t-sec tracking-[var(--body-body-2-letter-spacing)] relative font-body-body-2 text-[length:var(--body-body-2-font-size)] leading-[var(--body-body-2-line-height)] [direction:rtl] [font-style:var(--body-body-2-font-style)]">
                الماركة
              </label>

              <div className="flex h-[46px] items-center justify-end gap-[var(--corner-radius-small)] pt-[var(--corner-radius-small)] pr-[var(--corner-radius-small)] pb-[var(--corner-radius-small)] pl-[var(--corner-radius-small)] relative self-stretch w-full rounded-[var(--corner-radius-small)] border-[0.5px] border-solid border-color-mode-text-icons-t-placeholder">
                <ChevronLeft className="w-4 h-4 text-gray-500" />

                <div className="flex items-center justify-end pt-[3px] pb-0 px-0 relative flex-1 grow">
                  <select
                    value={formData.brand}
                    onChange={(e) => handleInputChange("brand", e.target.value)}
                    className="text-right relative pr-2 w-full mt-[-1.00px] font-body-body-2 font-[number:var(--body-body-2-font-weight)] text-color-mode-text-icons-t-sec text-[length:var(--body-body-2-font-size)] text-left tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] [direction:rtl] [font-style:var(--body-body-2-font-style)] bg-transparent border-none outline-none"
                  >
                    <option value="تيوتا">تيوتا</option>
                    <option value="هوندا">هوندا</option>
                    <option value="نيسان">نيسان</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-end justify-around gap-5 relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex items-start gap-5 relative flex-1 grow">
              <div className="flex flex-col items-end gap-[var(--corner-radius-extra-small)] relative flex-1 grow" />

              <div className="relative w-[335px] h-[116px]">
                <div className="flex flex-col w-[335px] items-end gap-[var(--corner-radius-extra-small)] relative">
                  <label className="self-stretch mt-[-1.00px] font-[number:var(--body-body-2-font-weight)] text-color-mode-text-icons-t-sec tracking-[var(--body-body-2-letter-spacing)] relative font-body-body-2 text-[length:var(--body-body-2-font-size)] leading-[var(--body-body-2-line-height)] [direction:rtl] [font-style:var(--body-body-2-font-style)]">
                    رقم السيارة
                  </label>

                  <div className="flex h-[46px] items-center justify-end gap-[var(--corner-radius-small)] pt-[var(--corner-radius-small)] pr-[var(--corner-radius-small)] pb-[var(--corner-radius-small)] pl-[var(--corner-radius-small)] relative self-stretch w-full rounded-[var(--corner-radius-small)] border-[0.5px] border-solid border-color-mode-text-icons-t-placeholder">
                    <div className="flex items-center justify-end pt-[3px] pb-0 px-0 relative flex-1 grow">
                      <input
                        type="text"
                        value={formData.plateLetters}
                        onChange={(e) =>
                          handleInputChange("plateLetters", e.target.value)
                        }
                        placeholder="الحروف"
                        className="text-right relative pr-2 w-full mt-[-1.00px] font-body-body-2 font-[number:var(--body-body-2-font-weight)] text-color-mode-text-icons-t-placeholder text-[length:var(--body-body-2-font-size)] text-left tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] [direction:rtl] [font-style:var(--body-body-2-font-style)] bg-transparent border-none outline-none"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-end gap-[var(--corner-radius-extra-small)] relative flex-1 grow">
                <label className="self-stretch mt-[-1.00px] font-[number:var(--body-body-2-font-weight)] text-color-mode-text-icons-t-sec tracking-[var(--body-body-2-letter-spacing)] relative font-body-body-2 text-[length:var(--body-body-2-font-size)] leading-[var(--body-body-2-line-height)] [direction:rtl] [font-style:var(--body-body-2-font-style)]">
                  حالة السيارة
                </label>

                <div className="flex h-[46px] items-center justify-end gap-[var(--corner-radius-small)] pt-[var(--corner-radius-small)] pr-[var(--corner-radius-small)] pb-[var(--corner-radius-small)] pl-[var(--corner-radius-small)] relative self-stretch w-full rounded-[var(--corner-radius-small)] border-[0.5px] border-solid border-color-mode-text-icons-t-placeholder">
                  <ChevronLeft className="w-4 h-4 text-gray-500" />

                  <div className="flex items-center justify-end pt-[3px] pb-0 px-0 relative flex-1 grow">
                    <select
                      value={formData.carCondition}
                      onChange={(e) =>
                        handleInputChange("carCondition", e.target.value)
                      }
                      className="text-right relative pr-2 w-full mt-[-1.00px] font-body-body-2 font-[number:var(--body-body-2-font-weight)] text-color-mode-text-icons-t-sec text-[length:var(--body-body-2-font-size)] text-left tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] [direction:rtl] [font-style:var(--body-body-2-font-style)] bg-transparent border-none outline-none"
                    >
                      <option value="دبلوماسية">دبلوماسية</option>
                      <option value="خاصة">خاصة</option>
                      <option value="تجارية">تجارية</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="inline-flex flex-col items-start gap-2.5 pt-[var(--corner-radius-medium)] pb-[var(--corner-radius-medium)] px-2.5 relative flex-[0_0_auto] bg-color-mode-surface-primary-blue rounded-[var(--corner-radius-small)] hover:opacity-90 transition-opacity"
          >
            <div className="flex items-center gap-[var(--corner-radius-small)] relative self-stretch w-full flex-[0_0_auto]">
              <div className="w-fit font-[number:var(--subtitle-subtitle-3-font-weight)] text-color-mode-text-icons-t-btn-negative text-left tracking-[var(--subtitle-subtitle-3-letter-spacing)] whitespace-nowrap [direction:rtl] relative mt-[-1.00px] font-subtitle-subtitle-3 text-[length:var(--subtitle-subtitle-3-font-size)] leading-[var(--subtitle-subtitle-3-line-height)] [font-style:var(--subtitle-subtitle-3-font-style)]">
                إضافة السيارة
              </div>
            </div>
          </button>
        </div>
      </div>
    </form>
  );
};
