import React, { useState } from "react";
import { TimeFilter } from "../../../../../components/shared";

interface FuelData {
  diesel?: number;
  gasoline95?: number;
  gasoline91?: number;
}

interface DriverData {
  id: number;
  name: string;
  phone: string;
  totalCost: number;
  fuelData: FuelData;
  avatar: string;
}

const timeFilters = [
  { id: "week", label: "اخر اسبوع" },
  { id: "month", label: "اخر 30 يوم" },
  { id: "sixMonths", label: "اخر 6 شهور" },
  { id: "year", label: "اخر 12 شهر" },
];

const driversData: DriverData[] = [
  {
    id: 1,
    name: "محمد أحمد",
    phone: "00965284358",
    totalCost: 2543,
    fuelData: {
      diesel: 542,
      gasoline95: 542,
      gasoline91: 542,
    },
    avatar: "/img/ellipse-20-5.svg",
  },
  {
    id: 2,
    name: "محمد أحمد",
    phone: "00965284358",
    totalCost: 2543,
    fuelData: {
      gasoline95: 542,
      gasoline91: 542,
    },
    avatar: "/img/ellipse-20-6.svg",
  },
  {
    id: 3,
    name: "محمد أحمد",
    phone: "00965284358",
    totalCost: 2543,
    fuelData: {
      gasoline91: 542,
    },
    avatar: "/img/ellipse-20-7.svg",
  },
  {
    id: 4,
    name: "محمد أحمد",
    phone: "00965284358",
    totalCost: 2543,
    fuelData: {
      gasoline91: 542,
    },
    avatar: "/img/ellipse-20-8.svg",
  },
  {
    id: 5,
    name: "محمد أحمد",
    phone: "00965284358",
    totalCost: 2543,
    fuelData: {
      gasoline91: 542,
    },
    avatar: "/img/ellipse-20-9.svg",
  },
];

export const UsageChartWrapperSection = (): JSX.Element => {
  const [selectedFilter, setSelectedFilter] = useState("اخر 12 شهر");

  const renderFuelColumn = (
    value: number | undefined,
    color: string,
    unit: string,
    label: string
  ) => {
    if (!value) return null;

    return (
      <div className="flex flex-col w-[45px] items-end relative">
        <p className="relative self-stretch mt-[-1.00px] font-subtitle-subtitle-2 font-[number:var(--subtitle-subtitle-2-font-weight)] text-[length:var(--subtitle-subtitle-2-font-size)] text-right tracking-[var(--subtitle-subtitle-2-letter-spacing)] leading-[var(--subtitle-subtitle-2-line-height)] [font-style:var(--subtitle-subtitle-2-font-style)]">
          <span
            className={`${color} font-subtitle-subtitle-2 [font-style:var(--subtitle-subtitle-2-font-style)] font-[number:var(--subtitle-subtitle-2-font-weight)] tracking-[var(--subtitle-subtitle-2-letter-spacing)] leading-[var(--subtitle-subtitle-2-line-height)] text-[length:var(--subtitle-subtitle-2-font-size)]`}
          >
            {value}
          </span>
          <span className="text-[#a9b4be] font-subtitle-subtitle-2 [font-style:var(--subtitle-subtitle-2-font-style)] font-[number:var(--subtitle-subtitle-2-font-weight)] tracking-[var(--subtitle-subtitle-2-letter-spacing)] leading-[var(--subtitle-subtitle-2-line-height)] text-[length:var(--subtitle-subtitle-2-font-size)]">
            {unit}
          </span>
        </p>
        <div className="self-stretch -mt-0.5 font-[number:var(--caption-caption-1-font-weight)] text-color-mode-text-icons-t-sec text-[length:var(--caption-caption-1-font-size)] tracking-[var(--caption-caption-1-letter-spacing)] leading-[var(--caption-caption-1-line-height)] relative font-caption-caption-1 [direction:rtl] [font-style:var(--caption-caption-1-font-style)]">
          {label}
        </div>
      </div>
    );
  };

  const renderDriverRow = (driver: DriverData, isLast = false) => (
    <div
      key={driver.id}
      className={`flex h-[72px] items-center justify-between relative self-stretch w-full ${
        !isLast
          ? "border-b-[0.3px] [border-bottom-style:solid] border-color-mode-text-icons-t-placeholder"
          : "mb-[-7.00px] border-color-mode-text-icons-t-placeholder"
      }`}
    >
      <div className="inline-flex items-center gap-[var(--corner-radius-extra-large-2)] relative flex-[0_0_auto]">
        <div className="flex flex-col w-[45px] items-end relative">
          <div className="relative self-stretch mt-[-1.00px] font-subtitle-subtitle-2 font-[number:var(--subtitle-subtitle-2-font-weight)] text-color-mode-text-icons-t-blue text-[length:var(--subtitle-subtitle-2-font-size)] text-right tracking-[var(--subtitle-subtitle-2-letter-spacing)] leading-[var(--subtitle-subtitle-2-line-height)] [font-style:var(--subtitle-subtitle-2-font-style)]">
            {driver.totalCost}
          </div>
          <div className="self-stretch -mt-0.5 font-[number:var(--caption-caption-1-font-weight)] text-color-mode-text-icons-t-sec text-[length:var(--caption-caption-1-font-size)] tracking-[var(--caption-caption-1-letter-spacing)] leading-[var(--caption-caption-1-line-height)] relative font-caption-caption-1 [direction:rtl] [font-style:var(--caption-caption-1-font-style)]">
            ر.س
          </div>
        </div>

        {renderFuelColumn(
          driver.fuelData.diesel,
          "text-color-mode-text-icons-t-orange",
          " .L",
          "ديزل"
        )}
        {renderFuelColumn(
          driver.fuelData.gasoline95,
          "text-color-mode-text-icons-t-red",
          " .L",
          "بنزين 95"
        )}
        {renderFuelColumn(
          driver.fuelData.gasoline91,
          "text-color-mode-text-icons-t-green",
          " .L",
          "بنزين 91"
        )}
      </div>

      <div className="inline-flex items-center gap-1.5 relative flex-[0_0_auto]">
        <div className="flex flex-col w-[84px] items-end gap-0.5 relative">
          <div className="self-stretch mt-[-1.00px] font-[number:var(--subtitle-subtitle-2-font-weight)] text-color-mode-text-icons-t-sec text-[length:var(--subtitle-subtitle-2-font-size)] tracking-[var(--subtitle-subtitle-2-letter-spacing)] leading-[var(--subtitle-subtitle-2-line-height)] relative font-subtitle-subtitle-2 [direction:rtl] [font-style:var(--subtitle-subtitle-2-font-style)]">
            {driver.name}
          </div>
          <div className="font-[number:var(--body-body-2-font-weight)] text-color-mode-text-icons-t-sec text-[length:var(--body-body-2-font-size)] tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] relative self-stretch font-body-body-2 text-right [font-style:var(--body-body-2-font-style)]">
            {driver.phone}
          </div>
        </div>
        <img
          className="relative w-11 h-11 object-cover"
          alt="Driver Avatar"
          src={driver.avatar}
        />
      </div>
    </div>
  );

  return (
    <section
      className="relative w-[519px] h-[504px]"
      role="region"
      aria-labelledby="usage-chart-title"
    >
      <div className="absolute -top-px -left-px w-[521px] h-[506px] bg-color-mode-surface-bg-screen rounded-[var(--corner-radius-large)] border-[0.3px] border-solid border-color-mode-text-icons-t-placeholder" />

      <div className="flex flex-col w-[473px] items-end gap-[13px] absolute top-[17px] left-6">
        <header className="flex flex-col h-[98.99px] items-end gap-4 relative self-stretch w-full">
          <div className="flex h-[42.17px] items-end justify-between relative self-stretch w-full">
            <div className="relative w-fit font-body-body-1 font-[number:var(--body-body-1-font-weight)] text-color-mode-text-icons-t-sec text-[length:var(--body-body-1-font-size)] text-right tracking-[var(--body-body-1-letter-spacing)] leading-[var(--body-body-1-line-height)] whitespace-nowrap [font-style:var(--body-body-1-font-style)]">
              {""}
            </div>

            <h2
              id="usage-chart-title"
              className="w-fit font-[number:var(--headline-h6-m-font-weight)] text-color-mode-text-icons-t-primary-gray text-[length:var(--headline-h6-m-font-size)] text-left tracking-[var(--headline-h6-m-letter-spacing)] leading-[var(--headline-h6-m-line-height)] whitespace-nowrap relative font-headline-h6-m [direction:rtl] [font-style:var(--headline-h6-m-font-style)]"
            >
              السائقين الأكثر استهلاكا
            </h2>
          </div>

          <TimeFilter
            selectedFilter={selectedFilter}
            onFilterChange={setSelectedFilter}
            filters={["اخر اسبوع", "اخر 30 يوم", "اخر 6 شهور", "اخر 12 شهر"]}
          />
        </header>

        <main className="flex flex-col h-[353px] items-start relative self-stretch w-full">
          {driversData.map((driver, index) =>
            renderDriverRow(driver, index === driversData.length - 1)
          )}
        </main>
      </div>
    </section>
  );
};
