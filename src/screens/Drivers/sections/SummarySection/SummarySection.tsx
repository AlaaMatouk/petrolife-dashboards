import React from "react";

export const SummarySection = (): JSX.Element => {
  return (
    <footer
      className="absolute left-0 bottom-0 w-[1440px] h-12 flex"
      role="contentinfo"
    >
      <div className="flex mt-2 w-[1059px] h-[24.63px] ml-[60px] relative items-center justify-between">
        <div className="inline-flex items-center gap-6 relative flex-[0_0_auto]">
          <img
            className="relative flex-[0_0_auto]"
            alt="Frame"
            src="/img/frame-60.svg"
          />

          <div
            className="relative w-px h-6 bg-color-mode-text-icons-t-sec"
            role="separator"
            aria-orientation="vertical"
          ></div>

          <a
            href="#privacy-policy"
            className="relative w-fit font-[number:var(--body-body-2-font-weight)] text-color-mode-text-icons-t-sec text-[length:var(--body-body-2-font-size)] text-left tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] [direction:rtl] font-body-body-2 whitespace-nowrap [font-style:var(--body-body-2-font-style)] hover:text-color-mode-text-icons-t-primary-gray transition-colors duration-200"
          >
            سياسة الخصوصية
          </a>
        </div>

        <p className="relative w-fit font-[number:var(--caption-caption-1-font-weight)] text-color-mode-text-icons-t-sec text-[length:var(--caption-caption-1-font-size)] tracking-[var(--caption-caption-1-letter-spacing)] leading-[var(--caption-caption-1-line-height)] [direction:rtl] font-caption-caption-1 whitespace-nowrap [font-style:var(--caption-caption-1-font-style)]">
          جميع الحقوق محفوظة لموقع بترولايف @2025
        </p>
      </div>
    </footer>
  );
};
