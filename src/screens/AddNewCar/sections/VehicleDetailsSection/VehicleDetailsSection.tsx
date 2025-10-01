import { CirclePlus, MoveLeft, Sheet } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";

export const VehicleDetailsSection = (): JSX.Element => {
  const navigate = useNavigate();
  return (
    <section className="flex flex-col items-end gap-[var(--corner-radius-extra-large)] relative self-stretch w-full flex-[0_0_auto]">
      <header className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
        <div className="inline-flex items-center gap-2.5 relative flex-[0_0_auto]">
          <button
            onClick={() => navigate("/cars")}
            className="inline-flex h-10 items-center gap-[var(--corner-radius-medium)] relative flex-[0_0_auto]"
            aria-label="العودة"
          >
            <div className="flex flex-col w-10 items-center justify-center gap-2.5 pt-[var(--corner-radius-small)] pb-[var(--corner-radius-small)] px-2.5 relative self-stretch bg-color-mode-surface-bg-icon-gray rounded-[var(--corner-radius-small)]">
              <MoveLeft className="w-5 h-5 text-gray-500" />
            </div>
          </button>

          <button className="inline-flex flex-col items-start gap-2.5 pt-[var(--corner-radius-small)] pb-[var(--corner-radius-small)] px-2.5 relative flex-[0_0_auto] rounded-[var(--corner-radius-small)] border-[0.5px] border-solid border-color-mode-text-icons-t-placeholder hover:border-color-mode-text-icons-t-sec transition-colors">
            <div className="flex items-center gap-[var(--corner-radius-small)] relative self-stretch w-full flex-[0_0_auto]">
              <div className="inline-flex items-center justify-center gap-2.5 pt-1 pb-0 px-0 relative flex-[0_0_auto]">
                <p className="relative w-fit mt-[-1.00px] font-body-body-2 font-[number:var(--body-body-2-font-weight)] text-[var(--form-active-input-text-color)] text-[length:var(--body-body-2-font-size)] text-left tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] whitespace-nowrap [direction:rtl] [font-style:var(--body-body-2-font-style)]">
                  إضافة سيارات من ملف Excel
                </p>
              </div>

              {/* <img
                className="relative w-[18px] h-[18px] aspect-[1]"
                alt="أيقونة Excel"
                src="/img/side-icons.svg"
              /> */}
              <Sheet className="w-4 h-4 text-gray-500" />
            </div>
          </button>
        </div>

        <button className="flex w-[134px] items-center justify-end gap-1.5 relative hover:opacity-80 transition-opacity">
          <div className="relative w-[145px] h-5 mt-[-1.00px] ml-[-35.00px] font-subtitle-subtitle-2 font-[number:var(--subtitle-subtitle-2-font-weight)] text-[var(--form-section-title-color)] text-[length:var(--subtitle-subtitle-2-font-size)] tracking-[var(--subtitle-subtitle-2-letter-spacing)] leading-[var(--subtitle-subtitle-2-line-height)] whitespace-nowrap [direction:rtl] [font-style:var(--subtitle-subtitle-2-font-style)]">
            إضافة سيارة جديدة
          </div>

          <CirclePlus className="w-4 h-4 text-gray-500" />
        </button>
      </header>
    </section>
  );
};
