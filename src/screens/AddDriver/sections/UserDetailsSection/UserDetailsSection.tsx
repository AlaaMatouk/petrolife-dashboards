import React from "react";

export const UserDetailsSection = (): JSX.Element => {
  return (
    <header className="flex flex-col items-end gap-[var(--corner-radius-extra-large)] relative self-stretch w-full flex-[0_0_auto]">
      <nav
        className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]"
        role="navigation"
        aria-label="User management navigation"
      >
        <div className="inline-flex items-center gap-2.5 relative flex-[0_0_auto]">
          <button
            className="inline-flex h-10 items-center gap-[var(--corner-radius-medium)] relative flex-[0_0_auto]"
            aria-label="العودة للخلف"
            type="button"
          >
            <div className="flex flex-col w-10 items-center justify-center gap-2.5 pt-[var(--corner-radius-small)] pb-[var(--corner-radius-small)] px-2.5 relative self-stretch bg-color-mode-surface-bg-icon-gray rounded-[var(--corner-radius-small)]">
              <img
                className="relative w-[19.28px] h-[9.42px]"
                alt="سهم العودة"
                src="/img/arrow-1addD.svg"
              />
            </div>
          </button>

          <button
            className="inline-flex flex-col items-start gap-2.5 pt-[var(--corner-radius-small)] pb-[var(--corner-radius-small)] px-2.5 relative flex-[0_0_auto] rounded-[var(--corner-radius-small)] border-[0.5px] border-solid border-color-mode-text-icons-t-placeholder hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
            type="button"
            aria-label="إضافة سائقين من ملف Excel"
          >
            <div className="flex items-center gap-[var(--corner-radius-small)] relative self-stretch w-full flex-[0_0_auto]">
              <div className="inline-flex items-center justify-center gap-2.5 pt-1 pb-0 px-0 relative flex-[0_0_auto]">
                <p className="relative w-fit mt-[-1.00px] font-body-body-2 font-[number:var(--body-body-2-font-weight)] text-color-mode-text-icons-t-sec text-[length:var(--body-body-2-font-size)] text-left tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] whitespace-nowrap [direction:rtl] [font-style:var(--body-body-2-font-style)]">
                  إضافة سائقين من ملف Excel
                </p>
              </div>

              <img
                className="relative w-[18px] h-[18px] aspect-[1]"
                alt="أيقونة Excel"
                src="/img/side-iconsaddD.svg"
              />
            </div>
          </button>
        </div>

        <button
          className="flex w-[134px] items-center justify-end gap-1.5 relative hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors rounded-[var(--corner-radius-small)] p-1"
          type="button"
          aria-label="إضافة سائق جديد"
        >
          <span className="relative w-[145px] h-5 mt-[-1.00px] ml-[-35.00px] font-subtitle-subtitle-2 font-[number:var(--subtitle-subtitle-2-font-weight)] text-color-mode-text-icons-t-sec text-[length:var(--subtitle-subtitle-2-font-size)] tracking-[var(--subtitle-subtitle-2-letter-spacing)] leading-[var(--subtitle-subtitle-2-line-height)] whitespace-nowrap [direction:rtl] [font-style:var(--subtitle-subtitle-2-font-style)]">
            إضافة سائق جديد
          </span>

          <img
            className="relative w-[18px] h-[18px] aspect-[1]"
            alt="أيقونة إضافة"
            src="/img/side-icons-1addD.svg"
          />
        </button>
      </nav>
    </header>
  );
};
