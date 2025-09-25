import React from 'react';

interface SectionHeaderProps {
  title: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ title }) => {
  return (
    <div className="flex flex-col items-start gap-2.5 p-2.5 relative self-stretch w-full flex-[0_0_auto]">
      <div className="flex items-center justify-center gap-[var(--dimensions-size-small)] relative self-stretch w-full flex-[0_0_auto]">
        <div className="relative w-[15px] h-[15px] rotate-[90.00deg] aspect-[1]">
          <div className="relative w-[13px] h-[13px] top-px left-px">
            <img
              className="absolute w-[13px] h-[13px] top-0 left-0 rotate-[-90.00deg]"
              alt="Expand icon"
              src="/img/vector-6.svg"
            />
            <img
              className="absolute w-1.5 h-[3px] top-[5px] left-1 rotate-[-90.00deg]"
              alt="Arrow"
              src="/img/vector-7.svg"
            />
          </div>
        </div>
        <img
          className="relative flex-1 grow h-px"
          alt="Divider line"
          src="/img/line-47-1.svg"
        />
        <h3 className="relative w-fit mt-[-1.00px] opacity-60 font-headings-h1-h6-heading-6 font-[number:var(--headings-h1-h6-heading-6-font-weight)] text-color-mode-text-icons-t-placeholder text-[length:var(--headings-h1-h6-heading-6-font-size)] tracking-[var(--headings-h1-h6-heading-6-letter-spacing)] leading-[var(--headings-h1-h6-heading-6-line-height)] whitespace-nowrap [direction:rtl] [font-style:var(--headings-h1-h6-heading-6-font-style)]">
          {title}
        </h3>
      </div>
    </div>
  );
};
