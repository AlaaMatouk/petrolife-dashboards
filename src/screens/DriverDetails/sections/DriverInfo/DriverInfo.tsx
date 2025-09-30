import { UserRound, ArrowLeft, Upload, User, MapPin, Car, Calendar, ChevronDown } from "lucide-react";
import React from "react";
import { RadioGroup } from "../../../../components/shared/Form";
import { useNavigate } from "react-router-dom";

export const DriverInfo = (): JSX.Element => {
  const navigate = useNavigate();
  
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

  // Days of the week data - read-only display
  const selectedDays = ["السبت"]; // Only Saturday is selected

  // Options for radio groups
  const fuelTypes = [
    { id: "diesel", label: "ديزل" },
    { id: "petrol95", label: "بنزين 95" },
    { id: "petrol91", label: "بنزين 91" },
  ];

  const carTypes = [
    { id: "vip", label: "VIP" },
    { id: "large", label: "كبيرة" },
    { id: "medium", label: "متوسطة" },
    { id: "small", label: "صغيرة" },
  ];

  const cityOptions = [
    { value: "الرياض", label: "الرياض" },
    { value: "جدة", label: "جدة" },
    { value: "مكة المكرمة", label: "مكة المكرمة" },
    { value: "المدينة المنورة", label: "المدينة المنورة" },
  ];

  const plateLettersOptions = [
    { value: "ح ن ط", label: "ح ن ط" },
    { value: "أ ب ج", label: "أ ب ج" },
    { value: "د ه و", label: "د ه و" },
  ];

  const carStatusOptions = [
    { value: "دبلوماسية", label: "دبلوماسية" },
    { value: "عادية", label: "عادية" },
    { value: "تجارية", label: "تجارية" },
    { value: "حكومية", label: "حكومية" },
  ];

  const weekDays = [
    "الجمعة",
    "الخميس", 
    "الأربعاء",
    "الثلاثاء",
    "الإثنين",
    "الأحد",
    "السبت",
  ];

  return (
    <main
      className="flex flex-col items-start gap-[var(--corner-radius-extra-large)] pt-[var(--corner-radius-large)] pr-[var(--corner-radius-large)] pb-[var(--corner-radius-large)] pl-[var(--corner-radius-large)] relative bg-color-mode-surface-bg-screen rounded-[var(--corner-radius-large)] border-[0.3px] border-solid border-color-mode-text-icons-t-placeholder"
      data-model-id="1:15191"
    >
      <header className="flex flex-col items-end gap-[var(--corner-radius-extra-large)] relative self-stretch w-full flex-[0_0_auto]">
        <nav className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex h-10 items-center gap-[var(--corner-radius-medium)] relative flex-[0_0_auto]"
            aria-label="العودة"
          >
            <div className="flex flex-col w-10 items-center justify-center gap-2.5 pt-[var(--corner-radius-small)] pb-[var(--corner-radius-small)] px-2.5 relative self-stretch bg-color-mode-surface-bg-icon-gray rounded-[var(--corner-radius-small)]">
              <ArrowLeft className="w-4 h-4 text-gray-600" />
            </div>
          </button>

          <div className="flex w-[134px] items-center justify-end gap-1.5 relative">
                    <h1 className="w-[145px] h-5 mt-[-1.00px] ml-[-35.00px] font-bold text-[var(--form-section-title-color)] text-[length:var(--subtitle-subtitle-2-font-size)] tracking-[var(--subtitle-subtitle-2-letter-spacing)] leading-[var(--subtitle-subtitle-2-line-height)] whitespace-nowrap relative [direction:rtl] [font-style:var(--subtitle-subtitle-2-font-style)]">
                      معلومات السائق
                    </h1>
            <UserRound className="w-5 h-5 text-gray-500" />
          </div>
        </nav>
      </header>

      <section className="flex flex-col items-start gap-5 relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex flex-col items-end gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
          <form className="flex flex-col items-start gap-5 relative self-stretch w-full flex-[0_0_auto]">
            {/* Driver Personal and Contact Information (Top Row) - Order: Phone, Email, Name (right to left) */}
            <div className="flex items-start gap-5 relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex flex-col gap-2 flex-1">
                <label className="text-sm font-normal text-[var(--form-readonly-label-color)] [direction:rtl] text-right">رقم الهاتف</label>
                <div className="px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-[var(--form-readonly-input-text-color)] [direction:rtl] text-right font-normal">
                  {driverInfo.phone}
                </div>
              </div>

              <div className="flex flex-col gap-2 flex-1">
                <label className="text-sm font-normal text-[var(--form-readonly-label-color)] [direction:rtl] text-right">البريد الالكتروني</label>
                <div className="px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-[var(--form-readonly-input-text-color)] [direction:rtl] text-right font-normal">
                  {driverInfo.email}
                </div>
              </div>

              <div className="flex flex-col gap-2 flex-1">
                <label className="text-sm font-normal text-[var(--form-readonly-label-color)] [direction:rtl] text-right">اسم السائق</label>
                <div className="px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-[var(--form-readonly-input-text-color)] [direction:rtl] text-right font-normal">
                  {driverInfo.name}
                </div>
              </div>
            </div>

            {/* Driver Image and Address Information (Second Row) - Order: Driver Image, Address, City (right to left) */}
            <div className="flex items-start gap-5 relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex flex-col gap-2 flex-1">
                <label className="text-sm font-normal text-[var(--form-readonly-label-color)] [direction:rtl] text-right">المدينة</label>
                <div className="px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-[var(--form-readonly-input-text-color)] [direction:rtl] text-right font-normal">
                  {driverInfo.city}
                </div>
              </div>

              <div className="flex flex-col gap-2 flex-1">
                <label className="text-sm font-normal text-[var(--form-readonly-label-color)] [direction:rtl] text-right">العنوان</label>
                <div className="px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-[var(--form-readonly-input-text-color)] [direction:rtl] text-right font-normal">
                  {driverInfo.address}
                </div>
              </div>

              <div className="flex items-end gap-2 flex-1">
                <div className="relative w-[38px] h-[38px]">
                  <div className="absolute top-1 left-[5px] w-[38px] h-[38px] rounded-[var(--corner-radius-small)] bg-gray-100 flex items-center justify-center">
                    <User className="w-6 h-6 text-gray-500" />
                  </div>
                  <div className="absolute top-0 left-0 w-3 h-3">
                    <div className="absolute -top-px -left-px w-3.5 h-3.5 bg-white rounded-[7px] border border-solid border-gray-200" />
                    <Upload className="absolute top-0.5 left-0.5 w-2 h-2 text-gray-400" />
                  </div>
                </div>
                <div className="flex flex-col gap-2 flex-1">
                  <label className="text-sm font-normal text-[var(--form-readonly-label-color)] [direction:rtl] text-right">صورة السائق</label>
                  <div className="px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-[var(--form-readonly-input-text-color)] [direction:rtl] text-right font-normal">
                    {driverInfo.driverImage}
                  </div>
                </div>
              </div>
            </div>

            {/* Days Off Selection */}
            <div className="flex flex-col items-end gap-[var(--corner-radius-small)] relative self-stretch w-full flex-[0_0_auto]">
              <p className="relative self-stretch mt-[-1.00px] font-body-body-2 font-[number:var(--body-body-2-font-weight)] text-color-mode-text-icons-t-sec text-[length:var(--body-body-2-font-size)] tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] [direction:rtl] [font-style:var(--body-body-2-font-style)]">
                أيام العطل "الغير مسموح بشحن الوقود"
              </p>
              <div className="flex items-center gap-[var(--corner-radius-small)] relative self-stretch w-full flex-[0_0_auto]">
                {weekDays.map((day) => (
                  <div
                    key={day}
                     className={`flex items-center justify-center gap-[var(--corner-radius-small)] pt-[var(--corner-radius-small)] pr-[var(--corner-radius-large)] pb-[var(--corner-radius-small)] pl-[var(--corner-radius-large)] relative flex-1 self-stretch grow rounded-[var(--corner-radius-small)] border-[0.5px] border-solid transition-colors ${
                       selectedDays.includes(day)
                         ? "border-[0.7px] border-color-mode-text-icons-t-blue"
                         : "border-gray-300 bg-gray-50"
                     }`}
                  >
                     <span
                       className={`relative w-fit text-[length:var(--body-body-2-font-size)] text-left tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] whitespace-nowrap [direction:rtl] ${
                         selectedDays.includes(day)
                           ? "font-body-body-2 font-[number:var(--body-body-2-font-weight)] text-color-mode-text-icons-t-blue [font-style:var(--body-body-2-font-style)]"
                           : "font-body-body-2 font-[number:var(--body-body-2-font-weight)] text-gray-400 [font-style:var(--body-body-2-font-style)]"
                       }`}
                     >
                      {day}
                    </span>

                    {selectedDays.includes(day) && (
                      <img
                        className="absolute top-0 left-0 w-3.5 h-3.5"
                        alt="Selected"
                        src="/img/rectangle-22DI.svg"
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Third Row - Order: License Photo, Financial Value, Car Status (right to left) */}
            <div className="flex items-start gap-5 relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex flex-col gap-2 flex-1">
                <label className="text-sm font-normal text-[var(--form-readonly-label-color)] [direction:rtl] text-right">حالة السيارة</label>
                <div className="px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-[var(--form-readonly-input-text-color)] [direction:rtl] text-right font-normal">
                  {driverInfo.carStatus}
                </div>
              </div>

              <div className="flex flex-col gap-2 flex-1">
                <div className="flex items-center justify-between w-full">
                  <span className="text-blue-500 text-sm font-medium">غير محددة</span>
                  <label className="text-sm font-normal text-[var(--form-readonly-label-color)] [direction:rtl] text-right">
                    القيمة المالية المحددة للسائق (ر.س)
                  </label>
                </div>
                <div className="px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-[var(--form-readonly-input-text-color)] [direction:rtl] text-right font-normal">
                  {driverInfo.monetaryValue}
                </div>
              </div>

              <div className="flex flex-col gap-2 flex-1">
                <label className="text-sm font-normal text-[var(--form-readonly-label-color)] [direction:rtl] text-right">صورة ترخيص السائق "اختياري"</label>
                <div className="px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-[var(--form-readonly-input-text-color)] [direction:rtl] text-right font-normal">
                  {driverInfo.licenseImage}
                </div>
              </div>
            </div>

            {/* Fourth Row - Order: Plate Letters, Plate Number, Car Category (right to left) */}
            <div className="flex items-start gap-5 relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex flex-col gap-2 flex-1">
                <label className="text-sm font-normal text-[var(--form-readonly-label-color)] [direction:rtl] text-right">حروف لوحة السيارة</label>
                <div className="px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-[var(--form-readonly-input-text-color)] [direction:rtl] text-right font-normal">
                  {driverInfo.plateLetters}
                </div>
              </div>

              <div className="flex flex-col gap-2 flex-1">
                <label className="text-sm font-normal text-[var(--form-readonly-label-color)] [direction:rtl] text-right">رقم لوحة السيارة</label>
                <div className="px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-[var(--form-readonly-input-text-color)] [direction:rtl] text-right font-normal">
                  {driverInfo.plateNumber}
                </div>
              </div>

              <div className="flex flex-col gap-2 flex-1">
                <label className="text-sm font-normal text-[var(--form-readonly-label-color)] [direction:rtl] text-right">تصنيف السيارة</label>
                <div className="px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-[var(--form-readonly-input-text-color)] [direction:rtl] text-right font-normal">
                  {driverInfo.carCategory}
                </div>
              </div>
            </div>

            {/* Edit Button */}
            <div className="flex items-start gap-5 relative self-stretch w-full flex-[0_0_auto]">
              <button
                className="inline-flex flex-col items-start gap-2.5 pt-[var(--corner-radius-medium)] pb-[var(--corner-radius-medium)] px-2.5 relative flex-[0_0_auto] rounded-[var(--corner-radius-small)] hover:opacity-90 transition-opacity"
                style={{ backgroundColor: '#FFFCEC' }}
                aria-label="تعديل البيانات"
              >
                <div className="flex items-center gap-[var(--corner-radius-small)] relative self-stretch w-full flex-[0_0_auto]">
                  <div className="w-fit font-[number:var(--subtitle-subtitle-3-font-weight)] text-color-mode-text-icons-t-orange text-left tracking-[var(--subtitle-subtitle-3-letter-spacing)] whitespace-nowrap [direction:rtl] relative mt-[-1.00px] font-subtitle-subtitle-3 text-[length:var(--subtitle-subtitle-3-font-size)] leading-[var(--subtitle-subtitle-3-line-height)] [font-style:var(--subtitle-subtitle-3-font-style)]">
                    تعديل البيانات
                  </div>
                </div>
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};