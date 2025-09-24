import React, { useState } from "react";

const navigationIcons = [
  {
    id: 1,
    src: "/img/component-1.svg",
    alt: "Component",
  },
  {
    id: 2,
    src: "/img/component-1-1.svg",
    alt: "Component",
  },
  {
    id: 3,
    vectors: [
      {
        src: "/img/vector.svg",
        className: "absolute w-[41.67%] h-[41.67%] top-[26.04%] left-[26.04%]",
      },
      {
        src: "/img/vector-1.svg",
        className: "absolute w-[83.33%] h-[83.33%] top-[5.21%] left-[5.21%]",
      },
    ],
  },
];

const searchVectors = [
  {
    src: "/img/vector-2.svg",
    className: "absolute w-[16.67%] h-[16.67%] top-[67.71%] left-[67.71%]",
  },
  {
    src: "/img/vector-3.svg",
    className: "absolute w-[66.67%] h-[66.67%] top-[9.38%] left-[9.38%]",
  },
];

export const HeaderSection = (): JSX.Element => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <header
      className="absolute top-0 left-[calc(50.00%_-_720px)] w-[1440px] h-[72px] flex bg-color-mode-surface-bg-screen shadow-[0px_4px_10px_#0000000a]"
      data-color-mode-mode="dark"
      role="banner"
    >
      <div className="flex mt-[15px] w-[1066px] h-11 ml-[61px] relative items-center justify-between">
        <nav
          className="inline-flex items-center gap-[var(--dimensions-size-x-large)] relative flex-[0_0_auto]"
          role="navigation"
          aria-label="Main navigation"
        >
          <div className="inline-flex items-center gap-[var(--dimensions-size-medium)] relative flex-[0_0_auto]">
            {navigationIcons.map((icon) => (
              <button
                key={icon.id}
                className="relative w-10 h-10 bg-color-mode-surface-bg-icon-gray rounded-[var(--dimensions-size-x-small)] overflow-hidden border-[0.25px] border-solid border-color-mode-text-icons-t-placeholder aspect-[1] hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-color-mode-surface-primary-blue transition-opacity"
                aria-label={`Navigation ${icon.id}`}
              >
                {icon.src ? (
                  <img
                    className="absolute top-[calc(50.00%_-_10px)] left-[calc(50.00%_-_10px)] w-5 h-5 aspect-[1]"
                    alt={icon.alt}
                    src={icon.src}
                  />
                ) : (
                  <div className="relative top-[calc(50.00%_-_10px)] left-[calc(50.00%_-_10px)] w-5 h-5">
                    {icon.vectors?.map((vector, index) => (
                      <img
                        key={index}
                        className={vector.className}
                        alt="Vector"
                        src={vector.src}
                      />
                    ))}
                  </div>
                )}
              </button>
            ))}

            <button
              className="relative w-10 h-10 bg-color-mode-surface-bg-icon-gray rounded-[var(--dimensions-size-x-small)] overflow-hidden border-[0.25px] border-solid border-color-mode-text-icons-t-placeholder aspect-[1] hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-color-mode-surface-primary-blue transition-opacity"
              aria-label="Language selector"
            >
              <span className="absolute top-[calc(50.00%_-_9px)] left-[calc(50.00%_-_10px)] font-body-body-1 font-[number:var(--body-body-1-font-weight)] text-color-mode-text-icons-t-sec text-[length:var(--body-body-1-font-size)] text-right tracking-[var(--body-body-1-letter-spacing)] leading-[var(--body-body-1-line-height)] whitespace-nowrap [font-style:var(--body-body-1-font-style)]">
                En
              </span>
            </button>
          </div>
        </nav>

        <div className="inline-flex items-center justify-end gap-2.5 relative flex-[0_0_auto]">
          <div className="flex flex-col w-[378px] items-end justify-center gap-2.5 pr-[var(--dimensions-size-base)] pl-[var(--dimensions-size-base)] py-2.5 relative bg-color-mode-surface-bg-icon-gray rounded-[var(--dimensions-size-XXXX-large)] border-[0.25px] border-solid border-color-mode-text-icons-t-placeholder">
            <div className="inline-flex items-center justify-end gap-[var(--dimensions-size-small)] relative flex-[0_0_auto] w-full">
              <input
                type="search"
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="بحث برقم العميل/العملية/ السجل التجاري / رقم الهاتف"
                className="flex-1 bg-transparent font-fine-print-small-medium-underline font-[number:var(--fine-print-small-medium-underline-font-weight)] text-color-mode-text-icons-t-placeholder text-[length:var(--fine-print-small-medium-underline-font-size)] tracking-[var(--fine-print-small-medium-underline-letter-spacing)] leading-[var(--fine-print-small-medium-underline-line-height)] [direction:rtl] [font-style:var(--fine-print-small-medium-underline-font-style)] outline-none border-none placeholder:underline placeholder:text-color-mode-text-icons-t-placeholder"
                dir="rtl"
                aria-label="Search by customer number, operation, commercial record, or phone number"
              />

              <button
                type="button"
                className="relative w-4 h-4 aspect-[1] hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-color-mode-surface-primary-blue transition-opacity"
                aria-label="Search"
              >
                {searchVectors.map((vector, index) => (
                  <img
                    key={index}
                    className={vector.className}
                    alt="Vector"
                    src={vector.src}
                  />
                ))}
              </button>
            </div>
          </div>

          <div className="inline-flex flex-col items-end gap-2.5 pt-[var(--dimensions-size-medium)] pb-[var(--dimensions-size-medium)] px-2.5 relative flex-[0_0_auto] rounded-[var(--dimensions-size-medium)]">
            <div className="inline-flex items-center justify-end gap-[var(--dimensions-size-small)] relative flex-[0_0_auto]">
              <div className="inline-flex h-[17px] justify-end pl-2.5 pr-0 pt-[13px] pb-2.5 flex-[0_0_auto] items-center gap-2.5 relative">
                <h1 className="w-fit mt-[-14.00px] mb-[-12.00px] font-[number:var(--headings-h1-h6-heading-5-font-weight)] text-color-mode-text-icons-t-sec text-[length:var(--headings-h1-h6-heading-5-font-size)] tracking-[var(--headings-h1-h6-heading-5-letter-spacing)] leading-[var(--headings-h1-h6-heading-5-line-height)] relative font-headings-h1-h6-heading-5 whitespace-nowrap [direction:rtl] [font-style:var(--headings-h1-h6-heading-5-font-style)]">
                  الســـــــــــــــائقين
                </h1>
              </div>

              <img
                className="relative w-[18px] h-[18px] aspect-[1]"
                alt="Side icons"
                src="/img/side-icons.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
