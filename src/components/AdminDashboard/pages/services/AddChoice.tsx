import { ArrowLeft, Plus, Trash2 } from "lucide-react";
import React, { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";

interface OutletContext {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  setDynamicTitle: (title: string) => void;
}

interface ServiceOption {
  subCategory: string;
  mainCategory: string;
  companyPrice: number;
  price: number;
  description: string;
}

export const AddChoice = (): JSX.Element => {
  const navigate = useNavigate();
  const { setDynamicTitle } = useOutletContext<OutletContext>();

  const [serviceOption, setServiceOption] = useState<ServiceOption>({
    subCategory: "بنزين 91",
    mainCategory: "وقود",
    companyPrice: 0,
    price: 0,
    description: "",
  });

  // Update dynamic title on component mount
  React.useEffect(() => {
    setDynamicTitle("خدمات التطبيق / إضافة خيار جديد");
  }, [setDynamicTitle]);

  const handleBack = () => {
    navigate(-1);
  };

  const handleOptionChange = (
    field: keyof ServiceOption,
    value: string | number
  ) => {
    setServiceOption((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = () => {
    // TODO: Implement submit logic
    console.log("Submitting service option:", serviceOption);
    alert("تم حفظ الخيار بنجاح!");
  };

  const handleDelete = () => {
    // TODO: Implement delete logic
    console.log("Deleting service option");
    alert("تم حذف الخيار!");
  };

  return (
    <div>
      <main
        className="flex flex-col items-start gap-[var(--corner-radius-extra-large)] pt-[var(--corner-radius-large)] pr-[var(--corner-radius-large)] pb-[var(--corner-radius-large)] pl-[var(--corner-radius-large)] relative bg-color-mode-surface-bg-screen rounded-[var(--corner-radius-large)] border-[0.3px] border-solid border-color-mode-text-icons-t-placeholder"
        data-model-id="add-choice"
      >
        <header className="flex flex-col items-end gap-[var(--corner-radius-extra-large)] relative self-stretch w-full flex-[0_0_auto]">
          <nav className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
            <button
              onClick={handleBack}
              className="inline-flex h-10 items-center gap-[var(--corner-radius-medium)] relative flex-[0_0_auto]"
              aria-label="العودة"
            >
              <div className="flex flex-col w-10 items-center justify-center gap-2.5 pt-[var(--corner-radius-small)] pb-[var(--corner-radius-small)] px-2.5 relative self-stretch bg-color-mode-surface-bg-icon-gray rounded-[var(--corner-radius-small)]">
                <ArrowLeft className="w-4 h-4 text-gray-600" />
              </div>
            </button>

            <div className="flex items-center justify-end gap-1.5 relative">
              <h1 className="w-[145px] h-5 mt-[-1.00px] font-bold text-[var(--form-section-title-color)] text-[length:var(--subtitle-subtitle-2-font-size)] tracking-[var(--subtitle-subtitle-2-letter-spacing)] leading-[var(--subtitle-subtitle-2-line-height)] whitespace-nowrap relative [direction:rtl] [font-style:var(--subtitle-subtitle-2-font-style)]">
                إضافة خيار جديد
              </h1>
              <Plus className="w-5 h-5 text-gray-500" />
            </div>
          </nav>
        </header>

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
                      onChange={(e) =>
                        handleOptionChange("subCategory", e.target.value)
                      }
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
                      onChange={(e) =>
                        handleOptionChange("mainCategory", e.target.value)
                      }
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
                      onChange={(e) =>
                        handleOptionChange(
                          "companyPrice",
                          parseFloat(e.target.value) || 0
                        )
                      }
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
                      onChange={(e) =>
                        handleOptionChange(
                          "price",
                          parseFloat(e.target.value) || 0
                        )
                      }
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
                  onChange={(e) =>
                    handleOptionChange("description", e.target.value)
                  }
                  className="px-3 py-2 border border-gray-300 rounded-lg text-[var(--form-readonly-input-text-color)] [direction:rtl] text-right font-normal focus:outline-none focus:ring-2 focus:ring-[#5A66C1] focus:border-transparent"
                  dir="rtl"
                  placeholder="أدخل الوصف"
                />
              </div>

              {/* Submit and Delete Buttons */}
              <div className="flex justify-end gap-3 mt-5">
                <button
                  onClick={handleSubmit}
                  className="px-[10px] py-3 bg-[#5A66C1] text-white rounded-[8px] w-[120px] font-medium"
                >
                  اضافه الخيار
                </button>
                <button
                  onClick={handleDelete}
                  className="px-[10px] py-[10px] bg-white text-[#5B738B] rounded-[8px] w-[120px] font-medium transition-colors flex items-center justify-center gap-2"
                  style={{ border: "0.8px solid #5B738B" }}
                >
                  رجوع
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AddChoice;
