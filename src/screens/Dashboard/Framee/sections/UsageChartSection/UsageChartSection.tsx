import React, { useState } from "react";

const timeFilters = [
  { id: "week", label: "اخر اسبوع" },
  { id: "month", label: "اخر 30 يوم" },
  { id: "sixMonths", label: "اخر 6 شهور" },
  { id: "year", label: "اخر 12 شهر" },
];

const stationsData = [
  {
    id: 1,
    name: "محطة الصالح",
    address: "15 ش الرياض، الرياض",
    price: 2543,
    fuelType: "بنزين 91",
    fuelAmount: 542,
    image: "/img/ellipse-20.svg",
  },
  {
    id: 2,
    name: "محطة الصالح",
    address: "15 ش الرياض، الرياض",
    price: 2543,
    fuelType: "بنزين 91",
    fuelAmount: 542,
    image: "/img/ellipse-20-1.svg",
  },
  {
    id: 3,
    name: "محطة الصالح",
    address: "15 ش الرياض، الرياض",
    price: 2543,
    fuelType: "بنزين 91",
    fuelAmount: 542,
    image: "/img/ellipse-20-2.svg",
  },
  {
    id: 4,
    name: "محطة الصالح",
    address: "15 ش الرياض، الرياض",
    price: 2543,
    fuelType: "بنزين 91",
    fuelAmount: 542,
    image: "/img/ellipse-20-3.svg",
  },
  {
    id: 5,
    name: "محطة الصالح",
    address: "15 ش الرياض، الرياض",
    price: 2543,
    fuelType: "بنزين 91",
    fuelAmount: 542,
    image: "/img/ellipse-20-4.svg",
  },
];

export const UsageChartSection = (): JSX.Element => {
  const [selectedFilter, setSelectedFilter] = useState("year");

  return (
    <section
      className="relative w-[519px] h-[504px]"
      role="region"
      aria-labelledby="usage-chart-title"
    >
      <div className="absolute -top-px -left-px w-[521px] h-[506px] bg-color-mode-surface-bg-screen rounded-[var(--corner-radius-large)] border-[0.3px] border-solid border-color-mode-text-icons-t-placeholder" />

      <div className="flex flex-col w-[472px] items-end gap-[13px] absolute top-[17px] left-[22px]">
        <header className="flex flex-col h-[98.99px] items-end gap-4 relative self-stretch w-full">
          <div className="flex h-[42.17px] items-end justify-between relative self-stretch w-full">
            <div className="relative w-fit font-body-body-1 font-[number:var(--body-body-1-font-weight)] text-color-mode-text-icons-t-sec text-[length:var(--body-body-1-font-size)] text-right tracking-[var(--body-body-1-letter-spacing)] leading-[var(--body-body-1-line-height)] whitespace-nowrap [font-style:var(--body-body-1-font-style)]">
              {""}
            </div>

            <h2
              id="usage-chart-title"
              className="w-fit font-[number:var(--headline-h6-m-font-weight)] text-color-mode-text-icons-t-primary-gray text-[length:var(--headline-h6-m-font-size)] text-left tracking-[var(--headline-h6-m-letter-spacing)] leading-[var(--headline-h6-m-line-height)] whitespace-nowrap relative font-headline-h6-m [direction:rtl] [font-style:var(--headline-h6-m-font-style)]"
            >
              المحطات الأكثر استخداما
            </h2>
          </div>

          <div
            className="flex h-[45.18px] items-center gap-[11px] relative self-stretch w-full mb-[-4.36px]"
            role="group"
            aria-label="Chart controls"
          >
            <button
              type="button"
              className="flex flex-col w-[35px] h-[30px] items-center justify-center gap-2.5 p-4 relative bg-color-mode-surface-bg-icon-gray rounded-[5px] border-[0.2px] border-solid border-color-mode-surface-bg-screen"
              aria-label="Chart options"
            >
              <div className="flex w-[29.17px] items-center justify-center gap-[12.5px] relative flex-[0_0_auto] mt-[-11.00px] mb-[-11.00px] ml-[-13.08px] mr-[-13.08px]">
                <div className="relative w-5 h-5 aspect-[1]">
                  <img
                    className="absolute w-[33.33%] h-[16.67%] top-[5.83%] left-[30.83%]"
                    alt=""
                    src="/img/vector.svg"
                  />

                  <img
                    className="absolute w-[75.00%] h-[75.00%] top-[14.17%] left-[10.00%]"
                    alt=""
                    src="/img/vector-5.svg"
                  />

                  <img
                    className="absolute w-[75.00%] h-0 top-[39.17%] left-[10.00%] object-cover"
                    alt=""
                    src="/img/vector-6.svg"
                  />

                  <img
                    className="absolute w-[33.33%] h-[16.67%] top-[54.17%] left-[29.17%]"
                    alt=""
                    src="/img/vector-3.svg"
                  />
                </div>
              </div>
            </button>

            {timeFilters.map((filter) => (
              <button
                key={filter.id}
                type="button"
                onClick={() => setSelectedFilter(filter.id)}
                className={`border-[0.2px] border-solid flex flex-col h-[30px] items-center justify-center gap-2.5 p-4 relative flex-1 grow rounded-[5px] ${
                  selectedFilter === filter.id
                    ? "border-color-mode-text-icons-t-blue bg-basewhite"
                    : "border-color-mode-text-icons-t-placeholder bg-color-mode-surface-bg-screen"
                }`}
                aria-pressed={selectedFilter === filter.id}
              >
                <div className="ml-[-29.88px] mr-[-29.88px] flex w-[126px] items-center justify-center gap-[15px] relative flex-[0_0_auto] mt-[-12.00px] mb-[-12.00px]">
                  <span
                    className={`flex items-center justify-center w-fit mt-[-1.00px] font-[number:var(--body-body-2-font-weight)] text-[length:var(--body-body-2-font-size)] tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] whitespace-nowrap relative font-body-body-2 [direction:rtl] [font-style:var(--body-body-2-font-style)] ${
                      selectedFilter === filter.id
                        ? "text-color-mode-text-icons-t-primary-gray"
                        : "text-color-mode-text-icons-t-sec"
                    }`}
                  >
                    {filter.label}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </header>

        <main className="flex flex-col h-[353px] items-start relative self-stretch w-full">
          {stationsData.map((station, index) => (
            <article
              key={station.id}
              className={`flex h-[72px] items-center justify-between relative self-stretch w-full border-b-[0.3px] [border-bottom-style:solid] border-color-mode-text-icons-t-placeholder ${
                index === stationsData.length - 1 ? "mb-[-7.00px]" : ""
              }`}
            >
              <div className="inline-flex items-center gap-[var(--corner-radius-extra-large-2)] relative flex-[0_0_auto]">
                <div className="flex flex-col w-[45px] items-end relative">
                  <div className="relative self-stretch mt-[-1.00px] font-subtitle-subtitle-2 font-[number:var(--subtitle-subtitle-2-font-weight)] text-color-mode-text-icons-t-blue text-[length:var(--subtitle-subtitle-2-font-size)] text-right tracking-[var(--subtitle-subtitle-2-letter-spacing)] leading-[var(--subtitle-subtitle-2-line-height)] [font-style:var(--subtitle-subtitle-2-font-style)]">
                    {station.price}
                  </div>

                  <div className="self-stretch -mt-0.5 font-[number:var(--caption-caption-1-font-weight)] text-color-mode-text-icons-t-sec text-[length:var(--caption-caption-1-font-size)] tracking-[var(--caption-caption-1-letter-spacing)] leading-[var(--caption-caption-1-line-height)] relative font-caption-caption-1 [direction:rtl] [font-style:var(--caption-caption-1-font-style)]">
                    ر.س
                  </div>
                </div>

                <div className="flex flex-col w-[45px] items-end relative">
                  <div className="mt-[-1.00px] font-[number:var(--subtitle-subtitle-2-font-weight)] text-color-mode-text-icons-t-orange text-[length:var(--subtitle-subtitle-2-font-size)] tracking-[var(--subtitle-subtitle-2-letter-spacing)] leading-[var(--subtitle-subtitle-2-line-height)] relative self-stretch font-subtitle-subtitle-2 text-right [font-style:var(--subtitle-subtitle-2-font-style)]">
                    {station.fuelAmount}
                  </div>

                  <div className="self-stretch -mt-0.5 font-[number:var(--caption-caption-1-font-weight)] text-color-mode-text-icons-t-sec text-[length:var(--caption-caption-1-font-size)] tracking-[var(--caption-caption-1-letter-spacing)] leading-[var(--caption-caption-1-line-height)] relative font-caption-caption-1 [direction:rtl] [font-style:var(--caption-caption-1-font-style)]">
                    {station.fuelType}
                  </div>
                </div>
              </div>

              <div className="inline-flex items-center gap-1.5 relative flex-[0_0_auto]">
                <div className="flex flex-col w-[84px] items-end gap-0.5 relative">
                  <h3 className="w-fit mt-[-1.00px] ml-[-14.00px] font-[number:var(--subtitle-subtitle-2-font-weight)] text-color-mode-text-icons-t-sec text-[length:var(--subtitle-subtitle-2-font-size)] tracking-[var(--subtitle-subtitle-2-letter-spacing)] leading-[var(--subtitle-subtitle-2-line-height)] whitespace-nowrap relative font-subtitle-subtitle-2 [direction:rtl] [font-style:var(--subtitle-subtitle-2-font-style)]">
                    {station.name}
                  </h3>

                  <address className="relative w-[131px] ml-[-47.00px] font-body-body-2 font-[number:var(--body-body-2-font-weight)] text-color-mode-text-icons-t-sec text-[length:var(--body-body-2-font-size)] tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] [direction:rtl] [font-style:var(--body-body-2-font-style)] not-italic">
                    {station.address}
                  </address>
                </div>

                <img
                  className="relative w-11 h-11 object-cover"
                  alt={`${station.name} logo`}
                  src={station.image}
                />
              </div>
            </article>
          ))}
        </main>
      </div>
    </section>
  );
};
