import React from 'react';

export interface Driver {
  id: number;
  driverCode: string;
  driverName: string;
  phone: string;
  address: string;
  fuelType: string;
  financialValue: string;
  carNumber: string;
  carCategory: { text: string; icon: string | null };
  accountStatus: { active: boolean; text: string };
}

interface DriverRowProps {
  driver: Driver;
}

export const DriverRow: React.FC<DriverRowProps> = ({ driver }) => {
  return (
    <div className="flex items-center justify-end relative self-stretch w-full flex-[0_0_auto]">
      {/* Selection Column */}
      <div className="flex flex-col w-7 items-end relative">
        <div className="flex items-center justify-end gap-2.5 pt-[var(--corner-radius-medium)] pr-[var(--corner-radius-none)] pb-[var(--corner-radius-medium)] pl-[var(--corner-radius-none)] relative self-stretch w-full flex-[0_0_auto] border-b-[0.2px] [border-bottom-style:solid] border-color-mode-text-icons-t-placeholder">
          <img
            className="relative w-[18px] h-[18px] aspect-[1]"
            alt="Side icons"
            src="/img/side-icons-26.svg"
          />
        </div>
      </div>

      {/* Account Status Column */}
      <div className="flex flex-col w-[111px] items-end relative">
        <div className="flex h-[42px] items-center justify-end gap-2.5 pt-[var(--corner-radius-extra-small)] pr-[var(--corner-radius-none)] pb-[var(--corner-radius-extra-small)] pl-[var(--corner-radius-none)] relative self-stretch w-full border-b-[0.2px] [border-bottom-style:solid] border-color-mode-text-icons-t-placeholder">
          <div className={`font-[number:var(--body-body-2-font-weight)] text-[length:var(--body-body-2-font-size)] tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] [direction:rtl] font-body-body-2 whitespace-nowrap [font-style:var(--body-body-2-font-style)] ${
            driver.accountStatus.active
              ? "text-green-700"
              : "text-gray-500"
          }`}>
            {driver.accountStatus.text}
          </div>
        </div>
      </div>

      {/* Car Category Column */}
      <div className="flex flex-col w-[129px] items-end relative">
        <div className="flex items-center justify-end gap-1 pr-[var(--corner-radius-none)] pl-[var(--corner-radius-none)] py-2.5 relative self-stretch w-full flex-[0_0_auto] border-b-[0.2px] [border-bottom-style:solid] border-color-mode-text-icons-t-placeholder">
          <div className="relative w-fit mt-[-0.20px] font-[number:var(--body-body-2-font-weight)] text-color-mode-text-icons-t-primary-gray text-[length:var(--body-body-2-font-size)] text-left tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] [direction:rtl] font-body-body-2 whitespace-nowrap [font-style:var(--body-body-2-font-style)]">
            {driver.carCategory.text}
          </div>
          {driver.carCategory.icon && (
            <img
              className="relative w-3.5 h-3.5 aspect-[1]"
              alt="Component"
              src={driver.carCategory.icon}
            />
          )}
        </div>
      </div>

      {/* Car Number Column */}
      <div className="flex flex-col w-24 items-end relative">
        <div className="flex items-center justify-end gap-2.5 pr-[var(--corner-radius-none)] pl-[var(--corner-radius-none)] py-2.5 relative self-stretch w-full flex-[0_0_auto] border-b-[0.2px] [border-bottom-style:solid] border-color-mode-text-icons-t-placeholder">
          <div className="relative w-fit mt-[-0.20px] font-body-body-2 font-[number:var(--body-body-2-font-weight)] text-color-mode-text-icons-t-primary-gray text-[length:var(--body-body-2-font-size)] tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] whitespace-nowrap [font-style:var(--body-body-2-font-style)]">
            {driver.carNumber}
          </div>
        </div>
      </div>

      {/* Financial Value Column */}
      <div className="flex flex-col w-[136px] items-end relative">
        <div className="flex items-center justify-end gap-2.5 pr-[var(--corner-radius-none)] pl-[var(--corner-radius-none)] py-2.5 relative self-stretch w-full flex-[0_0_auto] border-b-[0.2px] [border-bottom-style:solid] border-color-mode-text-icons-t-placeholder">
          <div className="relative w-fit mt-[-0.20px] font-body-body-2 font-[number:var(--body-body-2-font-weight)] text-color-mode-text-icons-t-primary-gray text-[length:var(--body-body-2-font-size)] tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] whitespace-nowrap [font-style:var(--body-body-2-font-style)]">
            {driver.financialValue}
          </div>
        </div>
      </div>

      {/* Fuel Type Column */}
      <div className="flex flex-col w-[86px] items-end relative">
        <div className="flex items-center justify-end gap-2.5 pr-[var(--corner-radius-none)] pl-[var(--corner-radius-none)] py-2.5 relative self-stretch w-full flex-[0_0_auto] border-b-[0.2px] [border-bottom-style:solid] border-color-mode-text-icons-t-placeholder">
          <div className="relative w-fit mt-[-0.20px] font-[number:var(--body-body-2-font-weight)] text-color-mode-text-icons-t-primary-gray text-[length:var(--body-body-2-font-size)] text-left tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] [direction:rtl] font-body-body-2 whitespace-nowrap [font-style:var(--body-body-2-font-style)]">
            {driver.fuelType}
          </div>
        </div>
      </div>

      {/* Address Column */}
      <div className="flex flex-col w-[155px] items-end relative">
        <div className="flex items-center justify-end gap-2.5 pr-[var(--corner-radius-none)] pl-[var(--corner-radius-none)] py-2.5 relative self-stretch w-full flex-[0_0_auto] border-b-[0.2px] [border-bottom-style:solid] border-color-mode-text-icons-t-placeholder">
          <p className="relative w-fit mt-[-0.20px] font-body-body-2 font-[number:var(--body-body-2-font-weight)] text-color-mode-text-icons-t-primary-gray text-[length:var(--body-body-2-font-size)] text-left tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] whitespace-nowrap [direction:rtl] [font-style:var(--body-body-2-font-style)]">
            {driver.address}
          </p>
        </div>
      </div>

      {/* Phone Column */}
      <div className="flex flex-col w-[117px] items-end relative">
        <div className="flex items-center justify-end gap-2.5 pr-[var(--corner-radius-none)] pl-[var(--corner-radius-none)] py-2.5 relative self-stretch w-full flex-[0_0_auto] border-b-[0.2px] [border-bottom-style:solid] border-color-mode-text-icons-t-placeholder">
          <div className="mt-[-0.20px] font-[number:var(--body-body-2-font-weight)] text-color-mode-text-icons-t-primary-gray tracking-[var(--body-body-2-letter-spacing)] relative w-fit font-body-body-2 text-[length:var(--body-body-2-font-size)] leading-[var(--body-body-2-line-height)] whitespace-nowrap [font-style:var(--body-body-2-font-style)]">
            {driver.phone}
          </div>
        </div>
      </div>

      {/* Driver Name Column */}
      <div className="flex flex-col w-[101px] items-end relative">
        <div className="flex items-center justify-end gap-2.5 pr-[var(--corner-radius-none)] pl-[var(--corner-radius-none)] py-2.5 relative self-stretch w-full flex-[0_0_auto] border-b-[0.2px] [border-bottom-style:solid] border-color-mode-text-icons-t-placeholder">
          <div className="relative w-fit mt-[-0.20px] font-[number:var(--body-body-2-font-weight)] text-color-mode-text-icons-t-primary-gray text-[length:var(--body-body-2-font-size)] text-left tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] [direction:rtl] font-body-body-2 whitespace-nowrap [font-style:var(--body-body-2-font-style)]">
            {driver.driverName}
          </div>
        </div>
      </div>

      {/* Driver Code Column */}
      <div className="flex flex-col w-[86px] items-end relative">
        <div className="flex items-center justify-end gap-2.5 pr-[var(--corner-radius-none)] pl-[var(--corner-radius-none)] py-2.5 relative self-stretch w-full flex-[0_0_auto] border-b-[0.2px] [border-bottom-style:solid] border-color-mode-text-icons-t-placeholder">
          <div className="relative w-fit mt-[-0.20px] font-body-body-2 font-[number:var(--body-body-2-font-weight)] text-color-mode-text-icons-t-primary-gray text-[length:var(--body-body-2-font-size)] tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] whitespace-nowrap [font-style:var(--body-body-2-font-style)]">
            {driver.driverCode}
          </div>
        </div>
      </div>
    </div>
  );
};
