import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Fuel } from "lucide-react";
import { Input, RTLSelect } from "../../../../components/shared";

export const DeliveryFormSection = (): JSX.Element => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    address: "",
    recipientName: "",
    phoneNumber: "",
    fuelType: "بنزين 91",
    fuelQuantity: 0,
  });

  const [costs, setCosts] = useState({
    fuelCost: 0,
    deliveryFees: 0,
    totalCost: 0,
  });

  const walletBalance = 1500;

  const fuelTypeOptions = [
    { value: "بنزين 91", label: "بنزين 91" },
    { value: "بنزين 95", label: "بنزين 95" },
    { value: "ديزل", label: "ديزل" },
  ];

  const handleInputChange = (field: string, value: string | number) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));

    // Calculate costs when fuel quantity changes
    if (field === "fuelQuantity") {
      const quantity = Number(value) || 0;
      const fuelPrice = 2.5; // Price per liter
      const deliveryFee = 10; // Fixed delivery fee
      const fuelCost = quantity * fuelPrice;
      const totalCost = fuelCost + deliveryFee;

      setCosts({
        fuelCost,
        deliveryFees: deliveryFee,
        totalCost,
      });
    }
  };


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission logic here
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <section
      className="flex flex-col w-full max-w-[800px] mx-auto gap-5 px-4"
      role="main"
      aria-label="قسم إنشاء طلب التوصيل"
    >
      <article className="flex flex-col items-start gap-[var(--corner-radius-extra-large)] pt-[var(--corner-radius-large)] pr-[var(--corner-radius-large)] pb-[var(--corner-radius-large)] pl-[var(--corner-radius-large)] relative self-stretch w-full flex-[0_0_auto] bg-color-mode-surface-bg-screen rounded-[var(--corner-radius-large)] border-[0.3px] border-solid border-color-mode-text-icons-t-placeholder">
        
        {/* Header */}
        <header className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
          <button
            onClick={handleBack}
            className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-md border border-gray-300 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200"
            aria-label="العودة"
          >
            <ArrowLeft className="w-5 h-5 text-gray-600" />
          </button>

          <div className="inline-flex items-center gap-1.5 relative flex-[0_0_auto]">
            <h1 className="relative w-fit mt-[-1.00px] font-subtitle-subtitle-2 font-[number:var(--subtitle-subtitle-2-font-weight)] text-color-mode-text-icons-t-sec text-[length:var(--subtitle-subtitle-2-font-size)] text-left tracking-[var(--subtitle-subtitle-2-letter-spacing)] leading-[var(--subtitle-subtitle-2-line-height)] whitespace-nowrap [direction:rtl] [font-style:var(--subtitle-subtitle-2-font-style)]">
              انشاء طلب توصيل وقود جديد
            </h1>
            <Fuel className="relative w-[18px] h-[18px] text-gray-500" />
          </div>
        </header>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
          
          {/* Row 1: Delivery Address */}
          <div className="flex flex-col items-start gap-[var(--corner-radius-extra-small)] relative self-stretch w-full flex-[0_0_auto]">
            <label className="self-stretch mt-[-1.00px] font-caption-caption-1 font-[number:var(--caption-caption-1-font-weight)] text-color-mode-text-icons-t-placeholder text-[length:var(--caption-caption-1-font-size)] tracking-[var(--caption-caption-1-letter-spacing)] leading-[var(--caption-caption-1-line-height)] [direction:rtl] [font-style:var(--caption-caption-1-font-style)]">
              عنوان استلام الوقود
            </label>
            <Input
              value={formData.address}
              onChange={(value) => handleInputChange("address", value)}
              placeholder="اكتب العنوان هنا"
              className="w-full"
            />
          </div>

          {/* Row 2: Phone Number and Recipient Name */}
          <div className="flex items-start gap-4 relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex flex-col items-start gap-[var(--corner-radius-extra-small)] relative flex-1 grow">
              <label className="self-stretch mt-[-1.00px] font-caption-caption-1 font-[number:var(--caption-caption-1-font-weight)] text-color-mode-text-icons-t-placeholder text-[length:var(--caption-caption-1-font-size)] tracking-[var(--caption-caption-1-letter-spacing)] leading-[var(--caption-caption-1-line-height)] [direction:rtl] [font-style:var(--caption-caption-1-font-style)]">
                رقم الهاتف
              </label>
              <Input
                value={formData.phoneNumber}
                onChange={(value) => handleInputChange("phoneNumber", value)}
                placeholder="اكتب رقم الهاتف هنا"
                className="w-full"
              />
            </div>
            <div className="flex flex-col items-start gap-[var(--corner-radius-extra-small)] relative flex-1 grow">
              <label className="self-stretch mt-[-1.00px] font-caption-caption-1 font-[number:var(--caption-caption-1-font-weight)] text-color-mode-text-icons-t-placeholder text-[length:var(--caption-caption-1-font-size)] tracking-[var(--caption-caption-1-letter-spacing)] leading-[var(--caption-caption-1-line-height)] [direction:rtl] [font-style:var(--caption-caption-1-font-style)]">
                اسم المستلم
              </label>
              <Input
                value={formData.recipientName}
                onChange={(value) => handleInputChange("recipientName", value)}
                placeholder="اكتب اسم المستلم هنا"
                className="w-full"
              />
            </div>
          </div>

          {/* Row 3: Fuel Quantity and Type */}
          <div className="flex items-start gap-4 relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex flex-col items-start gap-[var(--corner-radius-extra-small)] relative flex-1 grow">
              <label className="self-stretch mt-[-1.00px] font-caption-caption-1 font-[number:var(--caption-caption-1-font-weight)] text-color-mode-text-icons-t-placeholder text-[length:var(--caption-caption-1-font-size)] tracking-[var(--caption-caption-1-letter-spacing)] leading-[var(--caption-caption-1-line-height)] [direction:rtl] [font-style:var(--caption-caption-1-font-style)]">
                كمية الوقود (لتر)
              </label>
              <Input
                type="number"
                value={formData.fuelQuantity.toString()}
                onChange={(value) => handleInputChange("fuelQuantity", Number(value))}
                placeholder="0"
                className="w-full"
              />
            </div>
            <div className="flex flex-col items-start gap-[var(--corner-radius-extra-small)] relative flex-1 grow">
              <label className="self-stretch mt-[-1.00px] font-caption-caption-1 font-[number:var(--caption-caption-1-font-weight)] text-color-mode-text-icons-t-placeholder text-[length:var(--caption-caption-1-font-size)] tracking-[var(--caption-caption-1-letter-spacing)] leading-[var(--caption-caption-1-line-height)] [direction:rtl] [font-style:var(--caption-caption-1-font-style)]">
                نوع الوقود
              </label>
              <RTLSelect
                value={formData.fuelType}
                onChange={(value) => handleInputChange("fuelType", value)}
                options={fuelTypeOptions}
                placeholder="اختر نوع الوقود"
                className="w-full"
              />
            </div>
          </div>

          {/* Row 4: Cost Summary */}
          <div className="flex flex-col items-start gap-4 relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex items-start gap-4 relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex flex-col items-start gap-[var(--corner-radius-extra-small)] relative w-1/2">
                <div className="flex items-center justify-between w-full">
                  <span className="text-xs font-medium text-gray-500 [direction:rtl]">
                    المتاح بالمحفظة ({walletBalance} ر.س)
                  </span>
                  <label className="mt-[-1.00px] font-caption-caption-1 font-[number:var(--caption-caption-1-font-weight)] text-color-mode-text-icons-t-placeholder text-[length:var(--caption-caption-1-font-size)] tracking-[var(--caption-caption-1-letter-spacing)] leading-[var(--caption-caption-1-line-height)] [direction:rtl] [font-style:var(--caption-caption-1-font-style)]">
                    التكلفة الإجمالية المطلوبة
                  </label>
                </div>
                <Input
                  type="number"
                  value={costs.totalCost.toFixed(2)}
                  onChange={() => {}} // Read-only
                  placeholder="0.00"
                  className="w-full"
                  readOnly
                />
              </div>
              <div className="flex flex-col items-start gap-[var(--corner-radius-extra-small)] relative flex-1 grow">
                <label className="self-stretch mt-[-1.00px] font-caption-caption-1 font-[number:var(--caption-caption-1-font-weight)] text-color-mode-text-icons-t-placeholder text-[length:var(--caption-caption-1-font-size)] tracking-[var(--caption-caption-1-letter-spacing)] leading-[var(--caption-caption-1-line-height)] [direction:rtl] [font-style:var(--caption-caption-1-font-style)]">
                  رسوم التوصيل (ر.س)
                </label>
                <Input
                  type="number"
                  value={costs.deliveryFees.toFixed(2)}
                  onChange={() => {}} // Read-only
                  placeholder="0.00"
                  className="w-full"
                  readOnly
                />
              </div>
              <div className="flex flex-col items-start gap-[var(--corner-radius-extra-small)] relative flex-1 grow">
                <label className="self-stretch mt-[-1.00px] font-caption-caption-1 font-[number:var(--caption-caption-1-font-weight)] text-color-mode-text-icons-t-placeholder text-[length:var(--caption-caption-1-font-size)] tracking-[var(--caption-caption-1-letter-spacing)] leading-[var(--caption-caption-1-line-height)] [direction:rtl] [font-style:var(--caption-caption-1-font-style)]">
                  تكلفة الوقود (ر.س)
                </label>
                <Input
                  type="number"
                  value={costs.fuelCost.toFixed(2)}
                  onChange={() => {}} // Read-only
                  placeholder="0.00"
                  className="w-full"
                  readOnly
                />
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-start gap-4 relative self-stretch w-full flex-[0_0_auto]">
            <button
              type="submit"
              className="inline-flex flex-col items-start gap-2.5 pt-[var(--corner-radius-small)] pb-[var(--corner-radius-small)] px-2.5 relative flex-[0_0_auto] rounded-[var(--corner-radius-small)] bg-[#F5F6F7] hover:bg-[#E8E9EA] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-color-mode-surface-primary-blue focus:ring-opacity-50"
            >
              <div className="flex items-center justify-center gap-2.5 pt-1 pb-0 px-0 relative flex-[0_0_auto]">
                <span className="relative w-fit mt-[-1.00px] font-body-body-2 font-[number:var(--body-body-2-font-weight)] text-color-mode-text-icons-t-sec text-[length:var(--body-body-2-font-size)] text-left tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] whitespace-nowrap [direction:rtl] [font-style:var(--body-body-2-font-style)]">
                  ارسال الطلب
                </span>
              </div>
            </button>
            <button
              type="button"
              onClick={handleBack}
              className="inline-flex flex-col items-start gap-2.5 pt-[var(--corner-radius-small)] pb-[var(--corner-radius-small)] px-2.5 relative flex-[0_0_auto] rounded-[var(--corner-radius-small)] border-[0.8px] border-solid border-color-mode-text-icons-t-placeholder hover:bg-color-mode-surface-bg-icon-gray transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-color-mode-surface-primary-blue focus:ring-opacity-50"
            >
              <div className="flex items-center justify-center gap-2.5 pt-1 pb-0 px-0 relative flex-[0_0_auto]">
                <span className="relative w-fit mt-[-1.00px] font-body-body-2 font-[number:var(--body-body-2-font-weight)] text-color-mode-text-icons-t-sec text-[length:var(--body-body-2-font-size)] text-left tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] whitespace-nowrap [direction:rtl] [font-style:var(--body-body-2-font-style)]">
                  رجوع
                </span>
              </div>
            </button>
          </div>
        </form>
      </article>
    </section>
  );
};
