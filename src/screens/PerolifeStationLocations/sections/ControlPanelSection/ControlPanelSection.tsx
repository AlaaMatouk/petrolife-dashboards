import React, { useState } from "react";
import { Table } from "../../../../components/shared";
import { ChevronLeft, Check } from "lucide-react";

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
      onClick={onToggle}
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
        isOn ? 'bg-green-600' : 'bg-gray-200'
      }`}
    >
      <span
        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
          isOn ? 'translate-x-5' : 'translate-x-0.5'
        }`}
      />
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

  const tableColumns = [
    {
      key: "status",
      label: "حالة المحطة",
      width: "flex-1 grow min-w-[200px]",
    },
    {
      key: "consumption",
      label: "اللترات المستهلكة",
      width: "w-[299px] min-w-[299px]",
    },
    {
      key: "company",
      label: "الشركة",
      width: "w-[260px] min-w-[260px]",
    },
    {
      key: "city",
      label: "المدينة",
      width: "w-48 min-w-[192px]",
    },
    {
      key: "code",
      label: "كود المحطة",
      width: "w-[126px] min-w-[126px]",
    },
  ];

  const tableData = stationData.map((station) => ({
    ...station,
    status: (
      <span className="w-[98px] h-[19px] font-[number:var(--body-body-2-font-weight)] text-color-mode-text-icons-t-sec text-[length:var(--body-body-2-font-size)] tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] [direction:rtl] relative font-body-body-2 whitespace-nowrap [font-style:var(--body-body-2-font-style)]">
        متاحة للسائقين
      </span>
    ),
    consumption: station.consumptionDetails ? (
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
    ),
    city: (
      <address className="tracking-[var(--body-body-2-letter-spacing)] relative w-fit mt-[-0.20px] font-body-body-2 font-[number:var(--body-body-2-font-weight)] text-black text-[length:var(--body-body-2-font-size)] text-left leading-[var(--body-body-2-line-height)] whitespace-nowrap [direction:rtl] [font-style:var(--body-body-2-font-style)] not-italic">
        {station.city}
      </address>
    ),
    code: (
      <code className="relative w-fit mt-[-0.20px] font-body-body-2 font-[number:var(--body-body-2-font-weight)] text-black text-[length:var(--body-body-2-font-size)] tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] whitespace-nowrap [font-style:var(--body-body-2-font-style)]">
        {station.code}
      </code>
    ),
  }));

  return (
    <section
      className="flex flex-col items-start gap-[var(--corner-radius-large)] relative self-stretch w-full flex-[0_0_auto]"
      role="region"
      aria-label="لوحة التحكم في المحطات"
    >
      <Table
        columns={tableColumns}
        data={tableData}
        className="w-full"
        headerClassName="bg-color-mode-surface-bg-icon-gray"
        rowClassName="hover:bg-gray-50"
        cellClassName="text-right [direction:rtl] whitespace-nowrap"
      />
    </section>
  );
};
