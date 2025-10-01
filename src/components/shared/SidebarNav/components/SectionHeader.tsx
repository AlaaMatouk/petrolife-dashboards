import React from 'react';

interface SectionHeaderProps {
  title: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ title }) => {
  return (
    <div className="w-full py-2 px-4">
      <div className="flex items-center justify-end gap-3">
        <h3 className="text-xs font-semibold text-[var(--form-readonly-label-color)] uppercase tracking-wide whitespace-nowrap">
          {title}
        </h3>
        <div className="flex-1 h-px bg-gray-200"></div>
        <div className="w-3 h-3 flex-shrink-0">
          <img
            className="w-full h-full"
            alt="Section icon"
            src="/img/vector-6.svg"
          />
        </div>
      </div>
    </div>
  );
};
