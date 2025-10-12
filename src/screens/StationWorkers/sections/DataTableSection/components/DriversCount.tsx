import React from 'react';

interface DriversCountProps {
  count: number;
}

export const DriversCount: React.FC<DriversCountProps> = ({ count }) => {
  return (
    <div className="flex w-[134px] items-center justify-end gap-1.5 relative">
      <div className="relative w-[148px] h-5 mt-[-1.00px] ml-[-38.00px] font-[number:var(--subtitle-subtitle-2-font-weight)] text-color-mode-text-icons-t-sec text-[length:var(--subtitle-subtitle-2-font-size)] tracking-[var(--subtitle-subtitle-2-letter-spacing)] leading-[var(--subtitle-subtitle-2-line-height)] [direction:rtl] font-subtitle-subtitle-2 whitespace-nowrap [font-style:var(--subtitle-subtitle-2-font-style)]">
        عدد الســـــــائقين ({count})
      </div>
      <img
        className="relative w-[18px] h-[18px] aspect-[1]"
        alt="Side icons"
        src="/img/side-icons-16.svg"
      />
    </div>
  );
};

