import { ArrowLeft, Edit, Plus, Trash2 } from "lucide-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface Service {
  id: number;
  image: string;
  title: string;
  description: string;
  unit: string;
  status: "active" | "inactive";
}

interface ServiceOption {
  subCategory: string;
  mainCategory: string;
  companyPrice: number;
  price: number;
  description: string;
}

interface ServiceInfoProps {
  serviceData: Service;
  isAddMode?: boolean;
}

export const ServiceInfo = ({ serviceData, isAddMode = false }: ServiceInfoProps) => {
  const navigate = useNavigate();
  const [editedService, setEditedService] = useState<Service>(serviceData);
  const [serviceOption, setServiceOption] = useState<ServiceOption>({
    subCategory: "بنزين 91",
    mainCategory: "وقود",
    companyPrice: 2.33,
    price: 2.33,
    description: "Okten95"
  });

  const handleInputChange = (field: keyof Service, value: string) => {
    setEditedService((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleOptionChange = (field: keyof ServiceOption, value: string | number) => {
    setServiceOption((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = () => {
    console.log("Saving service changes:", editedService);
    console.log("Saving service option:", serviceOption);
    // TODO: Implement actual save logic (API call)
    alert("تم حفظ التعديلات بنجاح!");
  };

  const handleDelete = () => {
    if (window.confirm("هل أنت متأكد من حذف هذا الخيار؟")) {
      console.log("Deleting service option:", { editedService, serviceOption });
      // TODO: Implement actual delete logic (API call)
      alert("تم حذف الخيار بنجاح!");
      navigate(-1); // Navigate back after deletion
    }
  };

  // Helper function to get value or dash
  const getValueOrDash = (value: any) => {
    if (value === null || value === undefined || value === "") {
      return "-";
    }
    return String(value);
  };

  // Extract service information
  const serviceInfo = {
    id: getValueOrDash(editedService.id),
    title: getValueOrDash(editedService.title),
    description: getValueOrDash(editedService.description),
    unit: getValueOrDash(editedService.unit),
    status: editedService.status,
    image: editedService.image,
  };

  // Define all fields to display in 3-column layout
  const fields: FieldType[] = [
    {
      label: "صورة الخدمة",
      value: serviceInfo.image,
      editable: true,
      field: "image" as keyof Service,
      type: "image" as const,
    },
    {
      label: "الرقم التعريفي",
      value: serviceInfo.id,
      editable: true,
      field: "id" as keyof Service,
    },
    {
      label: "الوحدة",
      value: serviceInfo.unit,
      editable: true,
      field: "unit" as keyof Service,
    },
  ];

  // Define field type
  interface FieldType {
    label: string;
    value: string;
    editable: boolean;
    field: keyof Service;
    type?: "image";
  }

  // Helper function to render field
  const renderField = (field: FieldType) => (
    <div className="flex flex-col gap-2 flex-1">
      <label className="text-sm font-normal text-[var(--form-readonly-label-color)] [direction:rtl] text-right">
        {field.label}
      </label>
      {field.type === "image" ? (
        <div className="relative">
          <input
            type="file"
            accept="image/*"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) {
                const reader = new FileReader();
                reader.onload = (event) => {
                  handleInputChange(
                    field.field,
                    event.target?.result as string
                  );
                };
                reader.readAsDataURL(file);
              }
            }}
            className="px-3 py-2 border border-gray-300 rounded-lg text-[var(--form-readonly-input-text-color)] [direction:rtl] text-right font-normal focus:outline-none focus:ring-2 focus:ring-[#5A66C1] focus:border-transparent file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#5A66C1] file:text-white hover:file:bg-[#4A56B1]"
            dir="rtl"
          />
          {editedService[field.field] && (
            <div className="mt-2">
              <img
                src={String(editedService[field.field])}
                alt="صورة الخدمة"
                className="w-32 h-32 object-cover rounded-lg border-2 border-gray-300"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
            </div>
          )}
        </div>
      ) : field.field === "unit" ? (
        <select
          value={editedService[field.field]}
          onChange={(e) => handleInputChange(field.field, e.target.value)}
          className="px-3 py-2 border border-gray-300 rounded-lg text-[var(--form-readonly-input-text-color)] [direction:rtl] text-right font-normal focus:outline-none focus:ring-2 focus:ring-[#5A66C1] focus:border-transparent"
          dir="rtl"
        >
          <option value="لتر">لتر</option>
          <option value="حبة">حبة</option>
          <option value="كيلو">كيلو</option>
          <option value="متر">متر</option>
        </select>
      ) : (
        <input
          type="text"
          value={editedService[field.field]}
          onChange={(e) => handleInputChange(field.field, e.target.value)}
          className="px-3 py-2 border border-gray-300 rounded-lg text-[var(--form-readonly-input-text-color)] [direction:rtl] text-right font-normal focus:outline-none focus:ring-2 focus:ring-[#5A66C1] focus:border-transparent"
          dir="rtl"
          disabled={!field.editable}
          placeholder={`أدخل ${field.label.toLowerCase()}`}
        />
      )}
    </div>
  );

  // Helper function to render rows of 3 columns
  const renderFieldRows = () => {
    const rows: React.ReactNode[] = [];
    for (let i = 0; i < fields.length; i += 3) {
      const rowFields = fields.slice(i, i + 3);
      rows.push(
        <div
          key={i}
          className="flex items-start gap-5 relative self-stretch w-full flex-[0_0_auto]"
        >
          {rowFields.map((field, index) => (
            <React.Fragment key={index}>{renderField(field)}</React.Fragment>
          ))}
          {/* Fill remaining columns if less than 3 */}
          {rowFields.length < 3 &&
            Array.from({ length: 3 - rowFields.length }).map((_, index) => (
              <div key={`empty-${index}`} className="flex-1" />
            ))}
        </div>
      );
    }
    return rows;
  };

  return (
    <div>
      <main
        className="flex flex-col items-start gap-[var(--corner-radius-extra-large)] pt-[var(--corner-radius-large)] pr-[var(--corner-radius-large)] pb-[var(--corner-radius-large)] pl-[var(--corner-radius-large)] relative bg-color-mode-surface-bg-screen rounded-[var(--corner-radius-large)] border-[0.3px] border-solid border-color-mode-text-icons-t-placeholder"
        data-model-id="service-info"
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

            <div className="flex items-center justify-end gap-1.5 relative">
              <h1 className="w-[145px] h-5 mt-[-1.00px] font-bold text-[var(--form-section-title-color)] text-[length:var(--subtitle-subtitle-2-font-size)] tracking-[var(--subtitle-subtitle-2-letter-spacing)] leading-[var(--subtitle-subtitle-2-line-height)] whitespace-nowrap relative [direction:rtl] [font-style:var(--subtitle-subtitle-2-font-style)]">
                {isAddMode ? "إضافة خدمة جديدة" : "تعديل الخدمة"}
              </h1>
              {isAddMode ? <Plus className="w-5 h-5 text-gray-500" /> : <Edit className="w-5 h-5 text-gray-500" />}
            </div>
          </nav>
        </header>

        <section className="flex flex-col items-start gap-5 relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex flex-col items-end gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
            <form className="flex flex-col items-start gap-5 relative self-stretch w-full flex-[0_0_auto]">
              {/* Service Name Input - Full Width */}
              <div className="flex flex-col gap-2 relative self-stretch w-full flex-[0_0_auto]">
                <label className="text-sm font-normal text-[var(--form-readonly-label-color)] [direction:rtl] text-right">
                  اسم الخدمة
                </label>
                <input
                  type="text"
                  value={editedService.title}
                  onChange={(e) => handleInputChange("title", e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-lg text-[var(--form-readonly-input-text-color)] [direction:rtl] text-right font-normal focus:outline-none focus:ring-2 focus:ring-[#5A66C1] focus:border-transparent"
                  dir="rtl"
                  placeholder="أدخل اسم الخدمة"
                />
              </div>

              {/* Service Description Input - Full Width */}
              <div className="flex flex-col gap-2 relative self-stretch w-full flex-[0_0_auto]">
                <label className="text-sm font-normal text-[var(--form-readonly-label-color)] [direction:rtl] text-right">
                  وصف الخدمة
                </label>
                <textarea
                  value={editedService.description}
                  onChange={(e) =>
                    handleInputChange("description", e.target.value)
                  }
                  className="px-3 py-2 border border-gray-300 rounded-lg text-[var(--form-readonly-input-text-color)] [direction:rtl] text-right font-normal focus:outline-none focus:ring-2 focus:ring-[#5A66C1] focus:border-transparent"
                  rows={3}
                  dir="rtl"
                  placeholder="أدخل وصف الخدمة"
                />
              </div>

              {/* Dynamic fields in 3-column layout */}
              {renderFieldRows()}

              {/* Submit Button */}
              <div className="flex justify-end mt-6">
                <button
                  onClick={handleSubmit}
                  className="px-[10px] py-3 bg-[#F5F6F766] text-[#5B738B] rounded-[8px] font-medium"
                >
                  حفظ التغييرات
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>

      {/* Second Main Section */}
      <main
        className="flex flex-col items-start gap-[var(--corner-radius-extra-large)] pt-[var(--corner-radius-large)] pr-[var(--corner-radius-large)] pb-[var(--corner-radius-large)] pl-[var(--corner-radius-large)] relative bg-color-mode-surface-bg-screen rounded-[var(--corner-radius-large)] border-[0.3px] border-solid border-color-mode-text-icons-t-placeholder mt-6"
        data-model-id="service-additional-info"
      >
        <header className="flex flex-col items-end gap-[var(--corner-radius-extra-large)] relative self-stretch w-full flex-[0_0_auto]">
          <nav className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex items-center">
              <button
                onClick={() => navigate("/application-services/add-choice")}
                className="px-[10px] py-[8px] bg-[#F5F6F766] text-[#5B738B] rounded-[8px] font-normal text-[14px] hover:bg-[#E8E9EA] transition-colors flex items-center gap-2"
                style={{ border: "0.8px solid #A9B4BE" }}
              >
                إضافة خيار جديد <Plus className="w-4 h-4" />
              </button>
            </div>

            <div className="flex items-center justify-end gap-1.5 relative">
              <h1 className="w-[145px] h-5 mt-[-1.00px] font-bold text-[var(--form-section-title-color)] text-[length:var(--subtitle-subtitle-2-font-size)] tracking-[var(--subtitle-subtitle-2-letter-spacing)] leading-[var(--subtitle-subtitle-2-line-height)] whitespace-nowrap relative [direction:rtl] [font-style:var(--subtitle-subtitle-2-font-style)]">
                خيارات
              </h1>
              <Edit className="w-5 h-5 text-gray-500" />
            </div>
          </nav>
        </header>

{/* First Choice */}
        <section
          className="flex flex-col border-[0.3px] border-[#A9B4BE] rounded-[12px] p-3 items-start gap-5 relative self-stretch w-full flex-[0_0_auto]"
          style={{ border: "0.3px solid #A9B4BE" }}
        >
          <div className="flex flex-col items-end gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
            <form className="flex flex-col items-start gap-5 relative self-stretch w-full flex-[0_0_auto]">
              {/* Top Row - Categories */}
              <div className="flex items-start gap-5 relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex flex-col gap-2 flex-1">
                  <label className="text-sm font-normal text-[var(--form-readonly-label-color)] [direction:rtl] text-right">
                    التصنيف الفرعي
                  </label>
                  <div className="relative">
                    <select
                      value={serviceOption.subCategory}
                      onChange={(e) => handleOptionChange("subCategory", e.target.value)}
                      className="px-3 py-2 border border-gray-300 rounded-lg text-[var(--form-readonly-input-text-color)] [direction:rtl] text-right font-normal focus:outline-none focus:ring-2 focus:ring-[#5A66C1] focus:border-transparent appearance-none w-full"
                      dir="rtl"
                    >
                      <option value="بنزين 91">بنزين 91</option>
                      <option value="بنزين 95">بنزين 95</option>
                      <option value="ديزل">ديزل</option>
                    </select>
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                      <svg
                        className="w-4 h-4 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 19l-7-7 7-7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-2 flex-1">
                  <label className="text-sm font-normal text-[var(--form-readonly-label-color)] [direction:rtl] text-right">
                    التصنيف الرئيسي
                  </label>
                  <div className="relative">
                    <select
                      value={serviceOption.mainCategory}
                      onChange={(e) => handleOptionChange("mainCategory", e.target.value)}
                      className="px-3 py-2 border border-gray-300 rounded-lg text-[var(--form-readonly-input-text-color)] [direction:rtl] text-right font-normal focus:outline-none focus:ring-2 focus:ring-[#5A66C1] focus:border-transparent appearance-none w-full"
                      dir="rtl"
                    >
                      <option value="وقود">وقود</option>
                      <option value="خدمات">خدمات</option>
                      <option value="منتجات">منتجات</option>
                    </select>
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                      <svg
                        className="w-4 h-4 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 19l-7-7 7-7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Middle Row - Prices */}
              <div className="flex items-start gap-5 relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex flex-col gap-2 flex-1">
                  <label className="text-sm font-normal text-[var(--form-readonly-label-color)] [direction:rtl] text-right">
                    السعر للشركات
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      value={serviceOption.companyPrice}
                      onChange={(e) => handleOptionChange("companyPrice", parseFloat(e.target.value) || 0)}
                      className="px-3 py-2 border border-gray-300 rounded-lg text-[var(--form-readonly-input-text-color)] [direction:rtl] text-right font-normal focus:outline-none focus:ring-2 focus:ring-[#5A66C1] focus:border-transparent w-full"
                      dir="rtl"
                      placeholder="أدخل السعر للشركات"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2 flex-1">
                  <label className="text-sm font-normal text-[var(--form-readonly-label-color)] [direction:rtl] text-right">
                    السعر
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      value={serviceOption.price}
                      onChange={(e) => handleOptionChange("price", parseFloat(e.target.value) || 0)}
                      className="px-3 py-2 border border-gray-300 rounded-lg text-[var(--form-readonly-input-text-color)] [direction:rtl] text-right font-normal focus:outline-none focus:ring-2 focus:ring-[#5A66C1] focus:border-transparent w-full"
                      dir="rtl"
                      placeholder="أدخل السعر"
                    />
                  </div>
                </div>
              </div>

              {/* Bottom Row - Description */}
              <div className="flex flex-col gap-2 relative self-stretch w-full flex-[0_0_auto]">
                <label className="text-sm font-normal text-[var(--form-readonly-label-color)] [direction:rtl] text-right">
                  الوصف
                </label>
                <input
                  type="text"
                  value={serviceOption.description}
                  onChange={(e) => handleOptionChange("description", e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-lg text-[var(--form-readonly-input-text-color)] [direction:rtl] text-right font-normal focus:outline-none focus:ring-2 focus:ring-[#5A66C1] focus:border-transparent"
                  dir="rtl"
                  placeholder="أدخل الوصف"
                />
              </div>

              {/* Submit and Delete Buttons */}
              <div className="flex justify-end gap-3 mt-5">
                <button
                  onClick={handleSubmit}
                  className="px-[10px] py-3 bg-[#F5F6F766] text-[#5B738B] rounded-[8px] font-medium"
                >
                  حفظ التغييرات
                </button>
                <button
                  onClick={handleDelete}
                  className="px-[10px] py-[10px] bg-white text-[#EE3939] rounded-[8px] font-medium transition-colors flex items-center gap-2"
                  style={{ border: "0.5px solid #EE3939" }}
                >
                  حذف الخيار
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>
        </section>

        {/* Second Choice */}
        <section
          className="flex flex-col border-[0.3px] border-[#A9B4BE] rounded-[12px] p-3 items-start gap-5 relative self-stretch w-full flex-[0_0_auto]"
          style={{ border: "0.3px solid #A9B4BE" }}
        >
          <div className="flex flex-col items-end gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
            <form className="flex flex-col items-start gap-5 relative self-stretch w-full flex-[0_0_auto]">
              {/* Top Row - Categories */}
              <div className="flex items-start gap-5 relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex flex-col gap-2 flex-1">
                  <label className="text-sm font-normal text-[var(--form-readonly-label-color)] [direction:rtl] text-right">
                    التصنيف الفرعي
                  </label>
                  <div className="relative">
                    <select
                      value={serviceOption.subCategory}
                      onChange={(e) => handleOptionChange("subCategory", e.target.value)}
                      className="px-3 py-2 border border-gray-300 rounded-lg text-[var(--form-readonly-input-text-color)] [direction:rtl] text-right font-normal focus:outline-none focus:ring-2 focus:ring-[#5A66C1] focus:border-transparent appearance-none w-full"
                      dir="rtl"
                    >
                      <option value="بنزين 91">بنزين 91</option>
                      <option value="بنزين 95">بنزين 95</option>
                      <option value="ديزل">ديزل</option>
                    </select>
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                      <svg
                        className="w-4 h-4 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 19l-7-7 7-7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-2 flex-1">
                  <label className="text-sm font-normal text-[var(--form-readonly-label-color)] [direction:rtl] text-right">
                    التصنيف الرئيسي
                  </label>
                  <div className="relative">
                    <select
                      value={serviceOption.mainCategory}
                      onChange={(e) => handleOptionChange("mainCategory", e.target.value)}
                      className="px-3 py-2 border border-gray-300 rounded-lg text-[var(--form-readonly-input-text-color)] [direction:rtl] text-right font-normal focus:outline-none focus:ring-2 focus:ring-[#5A66C1] focus:border-transparent appearance-none w-full"
                      dir="rtl"
                    >
                      <option value="وقود">وقود</option>
                      <option value="خدمات">خدمات</option>
                      <option value="منتجات">منتجات</option>
                    </select>
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                      <svg
                        className="w-4 h-4 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 19l-7-7 7-7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Middle Row - Prices */}
              <div className="flex items-start gap-5 relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex flex-col gap-2 flex-1">
                  <label className="text-sm font-normal text-[var(--form-readonly-label-color)] [direction:rtl] text-right">
                    السعر للشركات
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      value={serviceOption.companyPrice}
                      onChange={(e) => handleOptionChange("companyPrice", parseFloat(e.target.value) || 0)}
                      className="px-3 py-2 border border-gray-300 rounded-lg text-[var(--form-readonly-input-text-color)] [direction:rtl] text-right font-normal focus:outline-none focus:ring-2 focus:ring-[#5A66C1] focus:border-transparent w-full"
                      dir="rtl"
                      placeholder="أدخل السعر للشركات"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2 flex-1">
                  <label className="text-sm font-normal text-[var(--form-readonly-label-color)] [direction:rtl] text-right">
                    السعر
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      value={serviceOption.price}
                      onChange={(e) => handleOptionChange("price", parseFloat(e.target.value) || 0)}
                      className="px-3 py-2 border border-gray-300 rounded-lg text-[var(--form-readonly-input-text-color)] [direction:rtl] text-right font-normal focus:outline-none focus:ring-2 focus:ring-[#5A66C1] focus:border-transparent w-full"
                      dir="rtl"
                      placeholder="أدخل السعر"
                    />
                  </div>
                </div>
              </div>

              {/* Bottom Row - Description */}
              <div className="flex flex-col gap-2 relative self-stretch w-full flex-[0_0_auto]">
                <label className="text-sm font-normal text-[var(--form-readonly-label-color)] [direction:rtl] text-right">
                  الوصف
                </label>
                <input
                  type="text"
                  value={serviceOption.description}
                  onChange={(e) => handleOptionChange("description", e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-lg text-[var(--form-readonly-input-text-color)] [direction:rtl] text-right font-normal focus:outline-none focus:ring-2 focus:ring-[#5A66C1] focus:border-transparent"
                  dir="rtl"
                  placeholder="أدخل الوصف"
                />
              </div>

              {/* Submit and Delete Buttons */}
              <div className="flex justify-end gap-3 mt-5">
                <button
                  onClick={handleSubmit}
                  className="px-[10px] py-3 bg-[#F5F6F766] text-[#5B738B] rounded-[8px] font-medium"
                >
                  حفظ التغييرات
                </button>
                <button
                  onClick={handleDelete}
                  className="px-[10px] py-[10px] bg-white text-[#EE3939] rounded-[8px] font-medium transition-colors flex items-center gap-2"
                  style={{ border: "0.5px solid #EE3939" }}
                >
                  حذف الخيار
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>
        </section>

        {/* Third Choice */}
        <section
          className="flex flex-col border-[0.3px] border-[#A9B4BE] rounded-[12px] p-3 items-start gap-5 relative self-stretch w-full flex-[0_0_auto]"
          style={{ border: "0.3px solid #A9B4BE" }}
        >
          <div className="flex flex-col items-end gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
            <form className="flex flex-col items-start gap-5 relative self-stretch w-full flex-[0_0_auto]">
              {/* Top Row - Categories */}
              <div className="flex items-start gap-5 relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex flex-col gap-2 flex-1">
                  <label className="text-sm font-normal text-[var(--form-readonly-label-color)] [direction:rtl] text-right">
                    التصنيف الفرعي
                  </label>
                  <div className="relative">
                    <select
                      value={serviceOption.subCategory}
                      onChange={(e) => handleOptionChange("subCategory", e.target.value)}
                      className="px-3 py-2 border border-gray-300 rounded-lg text-[var(--form-readonly-input-text-color)] [direction:rtl] text-right font-normal focus:outline-none focus:ring-2 focus:ring-[#5A66C1] focus:border-transparent appearance-none w-full"
                      dir="rtl"
                    >
                      <option value="بنزين 91">بنزين 91</option>
                      <option value="بنزين 95">بنزين 95</option>
                      <option value="ديزل">ديزل</option>
                    </select>
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                      <svg
                        className="w-4 h-4 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 19l-7-7 7-7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-2 flex-1">
                  <label className="text-sm font-normal text-[var(--form-readonly-label-color)] [direction:rtl] text-right">
                    التصنيف الرئيسي
                  </label>
                  <div className="relative">
                    <select
                      value={serviceOption.mainCategory}
                      onChange={(e) => handleOptionChange("mainCategory", e.target.value)}
                      className="px-3 py-2 border border-gray-300 rounded-lg text-[var(--form-readonly-input-text-color)] [direction:rtl] text-right font-normal focus:outline-none focus:ring-2 focus:ring-[#5A66C1] focus:border-transparent appearance-none w-full"
                      dir="rtl"
                    >
                      <option value="وقود">وقود</option>
                      <option value="خدمات">خدمات</option>
                      <option value="منتجات">منتجات</option>
                    </select>
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                      <svg
                        className="w-4 h-4 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 19l-7-7 7-7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Middle Row - Prices */}
              <div className="flex items-start gap-5 relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex flex-col gap-2 flex-1">
                  <label className="text-sm font-normal text-[var(--form-readonly-label-color)] [direction:rtl] text-right">
                    السعر للشركات
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      value={serviceOption.companyPrice}
                      onChange={(e) => handleOptionChange("companyPrice", parseFloat(e.target.value) || 0)}
                      className="px-3 py-2 border border-gray-300 rounded-lg text-[var(--form-readonly-input-text-color)] [direction:rtl] text-right font-normal focus:outline-none focus:ring-2 focus:ring-[#5A66C1] focus:border-transparent w-full"
                      dir="rtl"
                      placeholder="أدخل السعر للشركات"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2 flex-1">
                  <label className="text-sm font-normal text-[var(--form-readonly-label-color)] [direction:rtl] text-right">
                    السعر
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      value={serviceOption.price}
                      onChange={(e) => handleOptionChange("price", parseFloat(e.target.value) || 0)}
                      className="px-3 py-2 border border-gray-300 rounded-lg text-[var(--form-readonly-input-text-color)] [direction:rtl] text-right font-normal focus:outline-none focus:ring-2 focus:ring-[#5A66C1] focus:border-transparent w-full"
                      dir="rtl"
                      placeholder="أدخل السعر"
                    />
                  </div>
                </div>
              </div>

              {/* Bottom Row - Description */}
              <div className="flex flex-col gap-2 relative self-stretch w-full flex-[0_0_auto]">
                <label className="text-sm font-normal text-[var(--form-readonly-label-color)] [direction:rtl] text-right">
                  الوصف
                </label>
                <input
                  type="text"
                  value={serviceOption.description}
                  onChange={(e) => handleOptionChange("description", e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-lg text-[var(--form-readonly-input-text-color)] [direction:rtl] text-right font-normal focus:outline-none focus:ring-2 focus:ring-[#5A66C1] focus:border-transparent"
                  dir="rtl"
                  placeholder="أدخل الوصف"
                />
              </div>

              {/* Submit and Delete Buttons */}
              <div className="flex justify-end gap-3 mt-5">
                <button
                  onClick={handleSubmit}
                  className="px-[10px] py-3 bg-[#F5F6F766] text-[#5B738B] rounded-[8px] font-medium"
                >
                  حفظ التغييرات
                </button>
                <button
                  onClick={handleDelete}
                  className="px-[10px] py-[10px] bg-white text-[#EE3939] rounded-[8px] font-medium transition-colors flex items-center gap-2"
                  style={{ border: "0.5px solid #EE3939" }}
                >
                  حذف الخيار
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>

      
    </div>
  );
};
