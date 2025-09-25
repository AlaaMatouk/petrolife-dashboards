import React, { useState } from "react";

interface StationData {
  id: string;
  code: string;
  city: string;
  company: string;
  consumption: string;
  consumptionDetails?: string;
  isAvailable: boolean;
}

const stationData: StationData[] = [
  {
    id: "1",
    code: "21A254",
    city: "12 ش الصالحين ، الرياض",
    company: "المتحدة للخدمات البترولية",
    consumption: "150 لتر",
    isAvailable: true,
  },
  {
    id: "2",
    code: "21A254",
    city: "12 ش الصالحين ، الرياض",
    company: "المتحدة للخدمات البترولية",
    consumption: "150 لتر",
    consumptionDetails: "(100 بنزين 91 + 50 سولار)",
    isAvailable: true,
  },
  {
    id: "3",
    code: "21A254",
    city: "12 ش الصالحين ، الرياض",
    company: "المتحدة للخدمات البترولية",
    consumption: "150 لتر",
    isAvailable: true,
  },
  {
    id: "4",
    code: "21A254",
    city: "12 ش الصالحين ، الرياض",
    company: "المتحدة للخدمات البترولية",
    consumption: "150 لتر",
    isAvailable: true,
  },
  {
    id: "5",
    code: "21A254",
    city: "12 ش الصالحين ، الرياض",
    company: "المتحدة للخدمات البترولية",
    consumption: "150 لتر",
    isAvailable: true,
  },
  {
    id: "6",
    code: "21A254",
    city: "12 ش الصالحين ، الرياض",
    company: "المتحدة للخدمات البترولية",
    consumption: "150 لتر",
    isAvailable: true,
  },
  {
    id: "7",
    code: "21A254",
    city: "12 ش الصالحين ، الرياض",
    company: "المتحدة للخدمات البترولية",
    consumption: "150 لتر",
    isAvailable: true,
  },
  {
    id: "8",
    code: "21A254",
    city: "12 ش الصالحين ، الرياض",
    company: "المتحدة للخدمات البترولية",
    consumption: "150 لتر",
    isAvailable: true,
  },
  {
    id: "9",
    code: "21A254",
    city: "12 ش الصالحين ، الرياض",
    company: "المتحدة للخدمات البترولية",
    consumption: "150 لتر",
    isAvailable: true,
  },
  {
    id: "10",
    code: "21A254",
    city: "12 ش الصالحين ، الرياض",
    company: "المتحدة للخدمات البترولية",
    consumption: "150 لتر",
    isAvailable: true,
  },
];

interface ToggleSwitchProps {
  isOn: boolean;
  onToggle: () => void;
  ariaLabel: string;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
  isOn,
  onToggle,
  ariaLabel,
}) => {
  return (
    <button
      role="switch"
      aria-checked={isOn}
      aria-label={ariaLabel}
      onClick={onToggle}
      className="relative w-[39.48px] h-6 bg-color-mode-surface-primary-green rounded-[77.42px] overflow-hidden rotate-[-180.00deg] focus:outline-none focus:ring-2 focus:ring-color-mode-surface-primary-green focus:ring-offset-2"
    >
      <div className="absolute top-[calc(50.00%_-_11px)] right-0.5 w-[21px] h-[21px] bg-color-mode-surface-bg-screen rounded-[77.42px] shadow-[var(--shadow-sm)] transition-transform duration-200 ease-in-out" />
    </button>
  );
};

export const ControlPanelSection = (): JSX.Element => {
  const [stationStates, setStationStates] = useState<Record<string, boolean>>(
    stationData.reduce(
      (acc, station) => {
        acc[station.id] = station.isAvailable;
        return acc;
      },
      {} as Record<string, boolean>,
    ),
  );

  const handleToggle = (stationId: string) => {
    setStationStates((prev) => ({
      ...prev,
      [stationId]: !prev[stationId],
    }));
  };

  return (
    <section
      className="flex flex-col items-start gap-[var(--corner-radius-large)] relative self-stretch w-full flex-[0_0_auto]"
      role="region"
      aria-label="لوحة التحكم في المحطات"
    >
      <div className="flex items-start justify-between relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex flex-col items-end relative flex-1 grow">
          <header className="flex items-center justify-end gap-2.5 pr-[var(--corner-radius-none)] pl-[var(--corner-radius-none)] py-2.5 relative self-stretch w-full flex-[0_0_auto] bg-color-mode-surface-bg-icon-gray">
            <div className="inline-flex items-center gap-1.5 relative flex-[0_0_auto]">
              <h2 className="w-fit mt-[-1.00px] font-[number:var(--body-body-2-font-weight)] text-black text-[length:var(--body-body-2-font-size)] text-left tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] [direction:rtl] relative font-body-body-2 whitespace-nowrap [font-style:var(--body-body-2-font-style)]">
                حالة المحطة
              </h2>

              <img
                className="relative w-3.5 h-3.5 aspect-[1]"
                alt="أيقونة حالة المحطة"
                src="/img/side-icons-4.svg"
              />
            </div>
          </header>

          {stationData.map((station) => (
            <div
              key={station.id}
              className="flex h-[42px] items-center justify-end gap-2.5 pt-[var(--corner-radius-extra-small)] pr-[var(--corner-radius-none)] pb-[var(--corner-radius-extra-small)] pl-[var(--corner-radius-none)] relative self-stretch w-full border-b-[0.2px] [border-bottom-style:solid] border-color-mode-text-icons-t-placeholder"
            >
              <div className="inline-flex items-center gap-[var(--corner-radius-small)] relative flex-[0_0_auto]">
                <ToggleSwitch
                  isOn={stationStates[station.id]}
                  onToggle={() => handleToggle(station.id)}
                  ariaLabel={`تبديل حالة المحطة ${station.code}`}
                />

                <span className="w-[98px] h-[19px] font-[number:var(--body-body-2-font-weight)] text-color-mode-text-icons-t-sec text-[length:var(--body-body-2-font-size)] tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] [direction:rtl] relative font-body-body-2 whitespace-nowrap [font-style:var(--body-body-2-font-style)]">
                  متاحة للسائقين
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col w-[299px] items-end relative">
          <header className="flex items-center justify-end gap-[var(--corner-radius-small)] pr-[var(--corner-radius-none)] pl-[var(--corner-radius-none)] py-2.5 relative self-stretch w-full flex-[0_0_auto] bg-color-mode-surface-bg-icon-gray">
            <h2 className="w-fit mt-[-1.00px] font-[number:var(--body-body-2-font-weight)] text-black text-[length:var(--body-body-2-font-size)] text-left tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] [direction:rtl] relative font-body-body-2 whitespace-nowrap [font-style:var(--body-body-2-font-style)]">
              اللترات المستهلكة
            </h2>

            <img
              className="relative w-3.5 h-3.5 aspect-[1]"
              alt="أيقونة اللترات المستهلكة"
              src="/img/side-icons-4.svg"
            />
          </header>

          {stationData.map((station) => (
            <div
              key={station.id}
              className="flex items-center justify-end gap-2.5 pr-[var(--corner-radius-none)] pl-[var(--corner-radius-none)] py-2.5 relative self-stretch w-full flex-[0_0_auto] border-b-[0.2px] [border-bottom-style:solid] border-color-mode-text-icons-t-placeholder"
            >
              {station.consumptionDetails ? (
                <p className="relative w-fit mt-[-0.20px] font-tajawal font-normal text-black text-sm text-left leading-[22.4px] whitespace-nowrap [direction:rtl]">
                  <span className="tracking-[var(--body-body-2-letter-spacing)] font-body-body-2 [font-style:var(--body-body-2-font-style)] font-[number:var(--body-body-2-font-weight)] leading-[var(--body-body-2-line-height)] text-[length:var(--body-body-2-font-size)]">
                    {station.consumption}{" "}
                  </span>

                  <span className="text-[length:var(--caption-caption-1-font-size)] tracking-[var(--caption-caption-1-letter-spacing)] leading-[var(--caption-caption-1-line-height)] font-caption-caption-1 [font-style:var(--caption-caption-1-font-style)] font-[number:var(--caption-caption-1-font-weight)]">
                    {station.consumptionDetails}
                  </span>
                </p>
              ) : (
                <span className="relative w-fit mt-[-0.20px] font-body-body-2 font-[number:var(--body-body-2-font-weight)] text-black text-[length:var(--body-body-2-font-size)] text-left tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] whitespace-nowrap [direction:rtl] [font-style:var(--body-body-2-font-style)]">
                  {station.consumption}
                </span>
              )}
            </div>
          ))}
        </div>

        <div className="flex flex-col w-[260px] items-end relative">
          <header className="flex items-center justify-end gap-2.5 pr-[var(--corner-radius-none)] pl-[var(--corner-radius-none)] py-2.5 relative self-stretch w-full flex-[0_0_auto] bg-color-mode-surface-bg-icon-gray">
            <h2 className="w-fit mt-[-1.00px] font-[number:var(--body-body-2-font-weight)] text-black text-[length:var(--body-body-2-font-size)] text-left tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] [direction:rtl] relative font-body-body-2 whitespace-nowrap [font-style:var(--body-body-2-font-style)]">
              الشركة
            </h2>
          </header>

          {stationData.map((station) => (
            <div
              key={station.id}
              className="flex items-center justify-end gap-2.5 pr-[var(--corner-radius-none)] pl-[var(--corner-radius-none)] py-2.5 relative self-stretch w-full flex-[0_0_auto] border-b-[0.2px] [border-bottom-style:solid] border-color-mode-text-icons-t-placeholder"
            >
              <span className="w-fit mt-[-0.20px] font-[number:var(--body-body-2-font-weight)] text-black text-[length:var(--body-body-2-font-size)] text-left tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] [direction:rtl] relative font-body-body-2 whitespace-nowrap [font-style:var(--body-body-2-font-style)]">
                {station.company}
              </span>
            </div>
          ))}
        </div>

        <div className="flex flex-col w-48 items-end relative">
          <header className="flex items-center justify-end gap-2.5 pr-[var(--corner-radius-none)] pl-[var(--corner-radius-none)] py-2.5 relative self-stretch w-full flex-[0_0_auto] bg-color-mode-surface-bg-icon-gray">
            <h2 className="w-fit mt-[-1.00px] font-[number:var(--body-body-2-font-weight)] text-black text-[length:var(--body-body-2-font-size)] text-left tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] [direction:rtl] relative font-body-body-2 whitespace-nowrap [font-style:var(--body-body-2-font-style)]">
              المدينة
            </h2>
          </header>

          {stationData.map((station) => (
            <div
              key={station.id}
              className="flex items-center justify-end gap-2.5 pr-[var(--corner-radius-none)] pl-[var(--corner-radius-none)] py-2.5 relative self-stretch w-full flex-[0_0_auto] border-b-[0.2px] [border-bottom-style:solid] border-color-mode-text-icons-t-placeholder"
            >
              <address className="tracking-[var(--body-body-2-letter-spacing)] relative w-fit mt-[-0.20px] font-body-body-2 font-[number:var(--body-body-2-font-weight)] text-black text-[length:var(--body-body-2-font-size)] text-left leading-[var(--body-body-2-line-height)] whitespace-nowrap [direction:rtl] [font-style:var(--body-body-2-font-style)] not-italic">
                {station.city}
              </address>
            </div>
          ))}
        </div>

        <div className="flex flex-col w-[126px] items-end relative">
          <header className="flex items-center justify-end gap-2.5 pr-[var(--corner-radius-none)] pl-[var(--corner-radius-none)] py-2.5 relative self-stretch w-full flex-[0_0_auto] bg-color-mode-surface-bg-icon-gray">
            <h2 className="w-fit mt-[-1.00px] font-[number:var(--body-body-2-font-weight)] text-black text-[length:var(--body-body-2-font-size)] text-left tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] [direction:rtl] relative font-body-body-2 whitespace-nowrap [font-style:var(--body-body-2-font-style)]">
              كود المحطة
            </h2>
          </header>

          {stationData.map((station) => (
            <div
              key={station.id}
              className="flex items-center justify-end gap-2.5 pr-[var(--corner-radius-none)] pl-[var(--corner-radius-none)] py-2.5 relative self-stretch w-full flex-[0_0_auto] border-b-[0.2px] [border-bottom-style:solid] border-color-mode-text-icons-t-placeholder"
            >
              <code className="relative w-fit mt-[-0.20px] font-body-body-2 font-[number:var(--body-body-2-font-weight)] text-black text-[length:var(--body-body-2-font-size)] tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] whitespace-nowrap [font-style:var(--body-body-2-font-style)]">
                {station.code}
              </code>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
