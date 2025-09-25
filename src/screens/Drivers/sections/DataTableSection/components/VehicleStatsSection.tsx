import React from 'react';
import { VehicleStatsCard, VehicleStat } from './VehicleStatsCard';

interface VehicleStatsSectionProps {
  stats: VehicleStat[];
}

export const VehicleStatsSection: React.FC<VehicleStatsSectionProps> = ({ stats }) => {
  return (
    <div className="flex flex-col items-end justify-center gap-[var(--corner-radius-extra-large)] pt-[var(--corner-radius-large)] pr-[var(--corner-radius-large)] pb-[var(--corner-radius-large)] pl-[var(--corner-radius-large)] relative self-stretch w-full flex-[0_0_auto] bg-color-mode-surface-bg-screen rounded-[var(--corner-radius-large)] border-[0.3px] border-solid border-color-mode-text-icons-t-placeholder">
      <div className="flex flex-col items-end gap-[13px] relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex items-center justify-end gap-1.5 relative self-stretch w-full flex-[0_0_auto]">
          <div className="relative w-[229px] h-5 mt-[-1.00px] font-[number:var(--subtitle-subtitle-2-font-weight)] text-color-mode-text-icons-t-sec text-[length:var(--subtitle-subtitle-2-font-size)] tracking-[var(--subtitle-subtitle-2-letter-spacing)] leading-[var(--subtitle-subtitle-2-line-height)] [direction:rtl] font-subtitle-subtitle-2 whitespace-nowrap [font-style:var(--subtitle-subtitle-2-font-style)]">
            توزيع السائقين على السيارات
          </div>
          <img
            className="relative w-[18px] h-[18px] aspect-[1]"
            alt="Side icons"
            src="/img/side-icons-14.svg"
          />
        </div>
        <div className="flex h-[119px] items-center gap-5 relative w-full">
          {stats.map((stat, index) => (
            <VehicleStatsCard key={index} stat={stat} />
          ))}
        </div>
      </div>
    </div>
  );
};
