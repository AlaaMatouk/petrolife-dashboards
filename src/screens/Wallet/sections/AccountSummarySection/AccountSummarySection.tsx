import React from "react";

export const AccountSummarySection = (): JSX.Element => {
  const footerData = {
    logo: "/img/frame-60.svg",
    divider: "/img/line-204.svg",
    privacyText: "سياسة الخصوصية",
    copyrightText: "جميع الحقوق محفوظة لموقع بترولايف @2025",
  };

  return (
    <footer
      className="absolute w-[1440px] h-12 top-[1064px] left-0"
      role="contentinfo"
    >
      <div className="flex w-[1059px] items-center justify-between relative top-2 left-[60px]">
        <div className="inline-flex items-center gap-6 relative flex-[0_0_auto]">
          <img
            className="relative flex-[0_0_auto]"
            alt="Company Logo"
            src={footerData.logo}
          />

          <img
            className="relative w-px h-6"
            alt="Divider"
            src={footerData.divider}
            role="separator"
          />

          <a
            href="/privacy-policy"
            className="relative w-fit font-body-body-2 font-[number:var(--body-body-2-font-weight)] text-color-mode-text-icons-t-sec text-[length:var(--body-body-2-font-size)] text-left tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] whitespace-nowrap [direction:rtl] [font-style:var(--body-body-2-font-style)] hover:text-color-mode-text-icons-t-blue transition-colors duration-200"
          >
            {footerData.privacyText}
          </a>
        </div>

        <p className="relative w-fit font-caption-caption-1 font-[number:var(--caption-caption-1-font-weight)] text-color-mode-text-icons-t-sec text-[length:var(--caption-caption-1-font-size)] tracking-[var(--caption-caption-1-letter-spacing)] leading-[var(--caption-caption-1-line-height)] whitespace-nowrap [direction:rtl] [font-style:var(--caption-caption-1-font-style)]">
          {footerData.copyrightText}
        </p>
      </div>
    </footer>
  );
};
