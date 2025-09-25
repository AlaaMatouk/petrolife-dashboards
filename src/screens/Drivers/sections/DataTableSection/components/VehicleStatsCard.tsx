import React from 'react';

export interface VehicleStat {
  title: string;
  count: string;
  icon: string;
}

interface VehicleStatsCardProps {
  stat: VehicleStat;
}

export const VehicleStatsCard: React.FC<VehicleStatsCardProps> = ({ stat }) => {
  return (
    <div className="relative flex-1 grow h-[119px] bg-color-mode-surface-bg-screen rounded-[var(--corner-radius-large)_var(--corner-radius-large)_var(--corner-radius-large)_var(--corner-radius-extra-large)] overflow-hidden border-[0.3px] border-solid border-color-mode-text-icons-t-placeholder">
      <div className="flex flex-col w-[161px] items-end gap-[var(--corner-radius-large)] absolute top-[calc(50.00%_-_40px)] right-5">
        <div className="w-fit mt-[-1.00px] font-[number:var(--body-body-1-font-weight)] text-color-mode-text-icons-t-sec text-[length:var(--body-body-1-font-size)] text-center tracking-[var(--body-body-1-letter-spacing)] leading-[var(--body-body-1-line-height)] relative font-body-body-1 whitespace-nowrap [direction:rtl] [font-style:var(--body-body-1-font-style)]">
          {stat.title}
        </div>
        <div className="relative self-stretch font-headline-h5b font-[number:var(--headline-h5b-font-weight)] text-color-mode-text-icons-t-blue text-[length:var(--headline-h5b-font-size)] text-right tracking-[var(--headline-h5b-letter-spacing)] leading-[var(--headline-h5b-line-height)] [font-style:var(--headline-h5b-font-style)]">
          {stat.count}
        </div>
      </div>
      <div className="absolute top-[71px] left-2 w-10 h-10 bg-color-mode-surface-red-bg rounded-[20px] aspect-[1]" />
      <img
        className="absolute top-[81px] left-[18px] w-5 h-5 aspect-[1]"
        alt="Component"
        src={stat.icon}
      />
    </div>
  );
};
