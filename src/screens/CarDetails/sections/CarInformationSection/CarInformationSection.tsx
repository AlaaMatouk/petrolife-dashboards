import React from 'react';
import { Car, CarFront, Truck } from 'lucide-react';
import { Input, Select, RadioGroup, CarNumberInput } from '../../../../components/shared/Form';

export const CarInformationSection = (): JSX.Element => {
  const carData = {
    carName: 'سيارة 21A254',
    carType: 'صغيرة',
    year: '2020',
    plateLetters: 'أ ب ج',
    plateNumbers: '254125',
    city: 'الرياض',
    brand: 'تيوتا',
    model: 'كرولا',
    carCondition: 'دبلوماسية',
    fuelType: 'بنزين 91'
  };


  const fuelTypes = [
    { id: "diesel", label: "ديزل" },
    { id: "petrol95", label: "بنزين 95" },
    { id: "petrol91", label: "بنزين 91" },
  ];

  const carTypes = [
    {
      id: "vip",
      label: "Vip",
      icon: <CarFront className="w-4 h-4 text-gray-500" />,
    },
    {
      id: "large",
      label: "كبيرة",
      icon: <Truck className="w-4 h-4 text-purple-500" />,
    },
    {
      id: "medium",
      label: "متوسطة",
      icon: <Car className="w-4 h-4 text-orange-500" />,
    },
    {
      id: "small",
      label: "صغيرة",
      icon: <CarFront className="w-4 h-4 text-green-500" />,
    },
  ];

  const cityOptions = [
    { value: "الرياض", label: "الرياض" },
    { value: "جدة", label: "جدة" },
    { value: "الدمام", label: "الدمام" },
    { value: "مكة المكرمة", label: "مكة المكرمة" },
    { value: "المدينة المنورة", label: "المدينة المنورة" },
  ];

  const yearOptions = Array.from({ length: 25 }, (_, i) => {
    const year = new Date().getFullYear() - 10 + i;
    return { value: year.toString(), label: year.toString() };
  });

  const modelOptions = [
    { value: "كرولا", label: "كرولا" },
    { value: "كامري", label: "كامري" },
    { value: "أكورد", label: "أكورد" },
    { value: "سيفيك", label: "سيفيك" },
    { value: "سوناتا", label: "سوناتا" },
  ];

  const brandOptions = [
    { value: "تيوتا", label: "تيوتا" },
    { value: "هوندا", label: "هوندا" },
    { value: "نيسان", label: "نيسان" },
    { value: "هيونداي", label: "هيونداي" },
    { value: "كيا", label: "كيا" },
  ];

  const carConditionOptions = [
    { value: "دبلوماسية", label: "دبلوماسية" },
    { value: "خاصة", label: "خاصة" },
    { value: "تجارية", label: "تجارية" },
  ];

  return (
    <div className="flex flex-col items-start gap-6 w-full bg-white rounded-lg p-6 shadow-sm border border-gray-200">
      {/* Title with Car Icon - Same style as cars list */}
      <div className="flex items-center justify-end w-full">
        <div className="flex w-[134px] items-center justify-end gap-1.5 relative">
          <h1 className="relative w-[117px] h-5 mt-[-1.00px] ml-[-7.00px] font-[number:var(--subtitle-subtitle-2-font-weight)] text-[var(--form-section-title-color)] text-[length:var(--subtitle-subtitle-2-font-size)] tracking-[var(--subtitle-subtitle-2-letter-spacing)] leading-[var(--subtitle-subtitle-2-line-height)] [direction:rtl] font-subtitle-subtitle-2 whitespace-nowrap [font-style:var(--subtitle-subtitle-2-font-style)]">
            سيارة 21A254
          </h1>
          <Car className="w-5 h-5 text-gray-500" />
        </div>
      </div>

      {/* Form - Matching Add New Car structure */}
      <form className="flex flex-col items-start gap-5 relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex flex-col items-start gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex flex-col items-start gap-5 relative self-stretch w-full flex-[0_0_auto]">
            {/* Car Name Field */}
            <div className="flex items-start gap-5 relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex flex-col gap-2 flex-1">
                <label className="text-sm font-medium text-[var(--form-readonly-label-color)] [direction:rtl] text-right">اسم السيارة</label>
                <div className="px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-[var(--form-readonly-input-text-color)] [direction:rtl] text-right font-normal">
                  {carData.carName}
                </div>
              </div>
            </div>

            {/* Fuel Type, Car Type, and City Row */}
            <div className="flex items-start gap-5 relative self-stretch w-full flex-[0_0_auto]">
              <RadioGroup
                label="نوع البنزين"
                value={carData.fuelType}
                onChange={() => {}} // Read-only
                options={fuelTypes}
                disabled={true}
              />

              <RadioGroup
                label="نوع السيارة"
                value={carData.carType}
                onChange={() => {}} // Read-only
                options={carTypes}
                disabled={true}
              />

              <div className="flex flex-col gap-2 flex-1">
                <label className="text-sm font-medium text-[var(--form-readonly-label-color)] [direction:rtl] text-right">مدينة السيارة</label>
                <div className="px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-[var(--form-readonly-input-text-color)] [direction:rtl] text-right font-normal">
                  {carData.city}
                </div>
              </div>
            </div>

            {/* Year, Model, and Brand Row */}
            <div className="flex items-start gap-5 relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex flex-col gap-2 flex-1">
                <label className="text-sm font-medium text-[var(--form-readonly-label-color)] [direction:rtl] text-right">سنة الإصدار</label>
                <div className="px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-[var(--form-readonly-input-text-color)] [direction:rtl] text-right font-normal">
                  {carData.year}
                </div>
              </div>

              <div className="flex flex-col gap-2 flex-1">
                <label className="text-sm font-medium text-[var(--form-readonly-label-color)] [direction:rtl] text-right">الطراز</label>
                <div className="px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-[var(--form-readonly-input-text-color)] [direction:rtl] text-right font-normal">
                  {carData.model}
                </div>
              </div>

              <div className="flex flex-col gap-2 flex-1">
                <label className="text-sm font-medium text-[var(--form-readonly-label-color)] [direction:rtl] text-right">الماركة</label>
                <div className="px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-[var(--form-readonly-input-text-color)] [direction:rtl] text-right font-normal">
                  {carData.brand}
                </div>
              </div>
            </div>

            {/* Car Number and Car Condition Row */}
            <div className="flex items-start gap-5 relative self-stretch w-full flex-[0_0_auto]">
              <div className="w-[33%]"></div>

              <div className="flex flex-col gap-2 flex-1">
                <label className="text-sm font-medium text-[var(--form-readonly-label-color)] [direction:rtl] text-right">رقم السيارة</label>
                <div className="flex gap-2">
                  <div className="flex-1 px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 [direction:rtl] text-right">
                    {carData.plateLetters}
                  </div>
                  <div className="flex-1 px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 [direction:rtl] text-right">
                    {carData.plateNumbers}
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2 flex-1">
                <label className="text-sm font-medium text-[var(--form-readonly-label-color)] [direction:rtl] text-right">حالة السيارة</label>
                <div className="px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-[var(--form-readonly-input-text-color)] [direction:rtl] text-right font-normal">
                  {carData.carCondition}
                </div>
              </div>
            </div>

            {/* Edit Button */}
            <div className="flex justify-start w-full mt-4">
              <button 
                type="button"
                className="inline-flex flex-col items-start gap-2.5 pt-[var(--corner-radius-medium)] pb-[var(--corner-radius-medium)] px-2.5 relative flex-[0_0_auto] rounded-[var(--corner-radius-small)] hover:opacity-90 transition-opacity"
                style={{ backgroundColor: '#FFFCEC' }}
              >
                <div className="flex items-center gap-[var(--corner-radius-small)] relative self-stretch w-full flex-[0_0_auto]">
                  <div className="w-fit font-[number:var(--subtitle-subtitle-3-font-weight)] text-color-mode-text-icons-t-orange text-left tracking-[var(--subtitle-subtitle-3-letter-spacing)] whitespace-nowrap [direction:rtl] relative mt-[-1.00px] font-subtitle-subtitle-3 text-[length:var(--subtitle-subtitle-3-font-size)] leading-[var(--subtitle-subtitle-3-line-height)] [font-style:var(--subtitle-subtitle-3-font-style)]">
                    تعديل البيانات
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
