import React from 'react';

interface TableHeaderProps {
  columns: Array<{
    label: string;
    width: string;
    icon?: string;
  }>;
}

export const TableHeader: React.FC<TableHeaderProps> = ({ columns }) => {
  return (
    <div className="flex items-start justify-end relative self-stretch w-full flex-[0_0_auto]">
      {columns.map((column, index) => (
        <div key={index} className={`flex flex-col ${column.width} items-end relative`}>
          <div className="flex items-center justify-end gap-2.5 pr-[var(--corner-radius-none)] pl-[var(--corner-radius-none)] py-2.5 relative self-stretch w-full flex-[0_0_auto] bg-color-mode-surface-bg-icon-gray">
            <div className="inline-flex items-center justify-center gap-2.5 pt-1 pb-0 px-0 relative flex-[0_0_auto] mt-[-2.00px] mb-[-2.00px]">
              <div className="relative w-fit mt-[-1.00px] font-[number:var(--body-body-2-font-weight)] text-color-mode-text-icons-t-primary-gray text-[length:var(--body-body-2-font-size)] text-left tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] [direction:rtl] font-body-body-2 whitespace-nowrap [font-style:var(--body-body-2-font-style)]">
                {column.label}
              </div>
            </div>
            {column.icon && (
              <img
                className="relative w-3.5 h-3.5 aspect-[1]"
                alt="Side icons"
                src={column.icon}
              />
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
