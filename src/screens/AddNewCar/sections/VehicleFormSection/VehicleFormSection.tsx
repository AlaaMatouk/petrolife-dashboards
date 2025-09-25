import { Car, CarFront, Truck, Loader2 } from "lucide-react";
import React from "react";
import { useForm } from "../../../../hooks/useForm";
import { useToast } from "../../../../context/ToastContext";
import { useCars } from "../../../../hooks/useGlobalState";
import { Input, Select, RadioGroup } from "../../../../components/shared/Form";

const initialValues = {
  carName: "سيارة تجريبية",
    fuelType: "بنزين 91",
    carType: "صغيرة",
    city: "الرياض",
    year: "2020",
    model: "كرولا",
    brand: "تيوتا",
  plateLetters: "أ ب ج",
  plateNumbers: "1234",
    carCondition: "دبلوماسية",
};

export const VehicleFormSection = (): JSX.Element => {
  const form = useForm(initialValues);
  const { addToast } = useToast();
  const { addCar } = useCars();


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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!form.validateForm()) {
      addToast({
        title: "خطأ في التحقق",
        message: "يرجى تصحيح الأخطاء في النموذج",
        type: "error",
      });
      return;
    }

    form.setIsSubmitting(true);

    try {
      // Create new car object
      const newCar = {
        id: Date.now(),
        carNumber: form.values.plateLetters + form.values.plateNumbers,
        carName: form.values.carName,
        brand: form.values.brand,
        model: form.values.model,
        year: form.values.year,
        fuelType: form.values.fuelType,
        category: {
          name: form.values.carType,
          icon: getCategoryIcon(form.values.carType),
        },
        drivers: [],
      };

      // Add car to global state
      addCar(newCar);

      // Show success message
      addToast({
        title: "تم إضافة السيارة بنجاح",
        message: `تم إضافة السيارة ${newCar.carName} برقم ${newCar.carNumber} بنجاح`,
        type: "success",
      });

      // Reset form
      form.resetForm();

    } catch (error) {
      console.error('Error adding car:', error);
      addToast({
        title: "خطأ في إضافة السيارة",
        message: "حدث خطأ أثناء إضافة السيارة. يرجى المحاولة مرة أخرى.",
        type: "error",
      });
    } finally {
      form.setIsSubmitting(false);
    }
  };

  return (
    <form
      className="flex flex-col items-start gap-5 relative self-stretch w-full flex-[0_0_auto]"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col items-start gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex flex-col items-start gap-5 relative self-stretch w-full flex-[0_0_auto]">
          {/* Car Name Field */}
          <div className="flex items-start gap-5 relative self-stretch w-full flex-[0_0_auto]">
            <Input
              label="اسم السيارة"
              value={form.values.carName}
              onChange={(value) => form.setFieldValue('carName', value)}
              error={form.errors.carName}
              required={true}
                    placeholder="اسم السيارة هنا"
                  />
          </div>

          {/* Fuel Type, Car Type, and City Row */}
          <div className="flex items-start gap-5 relative self-stretch w-full flex-[0_0_auto]">
            <RadioGroup
              label="نوع البنزين"
              value={form.values.fuelType}
              onChange={(value) => form.setFieldValue('fuelType', value)}
              error={form.errors.fuelType}
              required={true}
              options={fuelTypes}
            />

            <RadioGroup
              label="نوع السيارة"
              value={form.values.carType}
              onChange={(value) => form.setFieldValue('carType', value)}
              error={form.errors.carType}
              required={true}
              options={carTypes}
            />

            <Select
              label="مدينة السيارة"
              value={form.values.city}
              onChange={(value) => form.setFieldValue('city', value)}
              error={form.errors.city}
              required={true}
              options={cityOptions}
            />
          </div>

          {/* Year, Model, and Brand Row */}
          <div className="flex items-start gap-5 relative self-stretch w-full flex-[0_0_auto]">
            <Select
              label="سنة الإصدار"
              value={form.values.year}
              onChange={(value) => form.setFieldValue('year', value)}
              error={form.errors.year}
              required={true}
              options={yearOptions}
            />

            <Select
              label="الطراز"
              value={form.values.model}
              onChange={(value) => form.setFieldValue('model', value)}
              error={form.errors.model}
              required={true}
              options={modelOptions}
            />

            <Select
              label="الماركة"
              value={form.values.brand}
              onChange={(value) => form.setFieldValue('brand', value)}
              error={form.errors.brand}
              required={true}
              options={brandOptions}
            />
          </div>

          {/* Plate Number and Car Condition Row */}
          <div className="flex items-end justify-around gap-5 relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex items-start gap-5 relative flex-1 grow">
              <div className="flex flex-col items-end gap-[var(--corner-radius-extra-small)] relative flex-1 grow" />

              {/* Plate Letters */}
              <div className="relative w-[335px]">
                <Input
                  label="حروف لوحة السيارة"
                  value={form.values.plateLetters}
                  onChange={(value) => form.setFieldValue('plateLetters', value)}
                  error={form.errors.plateLetters}
                  required={true}
                        placeholder="الحروف"
                      />
              </div>

              {/* Plate Numbers */}
              <div className="relative w-[335px]">
                <Input
                  label="أرقام لوحة السيارة"
                  value={form.values.plateNumbers}
                  onChange={(value) => form.setFieldValue('plateNumbers', value)}
                  error={form.errors.plateNumbers}
                  required={true}
                  placeholder="الأرقام"
                  type="text"
                />
              </div>

              <Select
                label="حالة السيارة"
                value={form.values.carCondition}
                onChange={(value) => form.setFieldValue('carCondition', value)}
                error={form.errors.carCondition}
                required={true}
                options={carConditionOptions}
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={form.isSubmitting || !form.isValid}
            className={`inline-flex flex-col items-start gap-2.5 pt-[var(--corner-radius-medium)] pb-[var(--corner-radius-medium)] px-2.5 relative flex-[0_0_auto] rounded-[var(--corner-radius-small)] transition-opacity ${
              form.isSubmitting || !form.isValid
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-color-mode-surface-primary-blue hover:opacity-90'
            }`}
          >
            <div className="flex items-center gap-[var(--corner-radius-small)] relative self-stretch w-full flex-[0_0_auto]">
              {form.isSubmitting && (
                <Loader2 className="w-4 h-4 text-white animate-spin" />
              )}
              <div className="w-fit font-[number:var(--subtitle-subtitle-3-font-weight)] text-color-mode-text-icons-t-btn-negative text-left tracking-[var(--subtitle-subtitle-3-letter-spacing)] whitespace-nowrap [direction:rtl] relative mt-[-1.00px] font-subtitle-subtitle-3 text-[length:var(--subtitle-subtitle-3-font-size)] leading-[var(--subtitle-subtitle-3-line-height)] [font-style:var(--subtitle-subtitle-3-font-style)]">
                {form.isSubmitting ? 'جاري الإضافة...' : 'إضافة السيارة'}
              </div>
            </div>
          </button>
        </div>
      </div>
    </form>
  );
};

// Helper function to get category icon
const getCategoryIcon = (carType: string): string => {
  const iconMap: Record<string, string> = {
    'صغيرة': '/img/small-car.svg',
    'متوسطة': '/img/medium-car.svg',
    'كبيرة': '/img/large-car.svg',
    'Vip': '/img/vip-car.svg',
  };
  return iconMap[carType] || '/img/default-car.svg';
};