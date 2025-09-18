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
        alt: "Vector",
        className: "absolute w-2.5 h-2.5 top-1 left-1",
      },
      {
        src: "/img/vector-1.svg",
        alt: "Vector",
        className: "absolute w-[18px] h-[18px] top-0 left-0",
      },
    ],
  },
];

export const DashboardHeaderSection = (): JSX.Element => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle search functionality
    console.log("Search query:", searchQuery);
  };

  return (
    <header
      className="absolute w-[1440px] h-[72px] top-0 left-0 bg-color-mode-surface-bg-screen shadow-[0px_4px_10px_#0000000a]"
      data-color-mode-mode="dark"
      role="banner"
    >
      <div className="flex w-[1066px] items-center justify-between relative top-[15px] left-[61px]">
        <nav
          className="inline-flex items-center gap-[var(--dimensions-size-x-large)] relative flex-[0_0_auto]"
          role="navigation"
          aria-label="Main navigation"
        >
          <div className="inline-flex items-center gap-[var(--dimensions-size-medium)] relative flex-[0_0_auto]">
            {navigationIcons.map((icon) => (
              <button
                key={icon.id}
                className="relative w-10 h-10 bg-color-mode-surface-bg-icon-gray rounded-[var(--dimensions-size-x-small)] overflow-hidden border-[0.25px] border-solid border-color-mode-text-icons-t-placeholder aspect-[1] hover:bg-opacity-60 focus:outline-none focus:ring-2 focus:ring-color-mode-text-icons-t-blue transition-colors"
                aria-label={`Navigation button ${icon.id}`}
              >
                {icon.src ? (
                  <img
                    className="absolute w-5 h-5 top-2.5 left-2.5 aspect-[1]"
                    alt={icon.alt}
                    src={icon.src}
                  />
                ) : (
                  <div className="relative w-5 h-5 top-2.5 left-2.5">
                    <div className="relative w-[18px] h-[18px] top-px left-px">
                      {icon.vectors?.map((vector, index) => (
                        <img
                          key={index}
                          className={vector.className}
                          alt={vector.alt}
                          src={vector.src}
                        />
                      ))}
                    </div>
                  </div>
                )}
              </button>
            ))}

            <button
              className="relative w-10 h-10 bg-color-mode-surface-bg-icon-gray rounded-[var(--dimensions-size-x-small)] overflow-hidden border-[0.25px] border-solid border-color-mode-text-icons-t-placeholder aspect-[1] hover:bg-opacity-60 focus:outline-none focus:ring-2 focus:ring-color-mode-text-icons-t-blue transition-colors"
              aria-label="Language selector"
            >
              <span className="absolute top-[11px] left-2.5 font-body-body-1 font-[number:var(--body-body-1-font-weight)] text-color-mode-text-icons-t-sec text-[length:var(--body-body-1-font-size)] text-right tracking-[var(--body-body-1-letter-spacing)] leading-[var(--body-body-1-line-height)] whitespace-nowrap [font-style:var(--body-body-1-font-style)]">
                En
              </span>
            </button>
          </div>
        </nav>

        <div className="inline-flex items-center justify-end gap-2.5 relative flex-[0_0_auto]">
          <form
            onSubmit={handleSearchSubmit}
            className="flex flex-col w-[378px] items-end justify-center gap-2.5 pr-[var(--dimensions-size-base)] pl-[var(--dimensions-size-base)] py-2.5 relative bg-color-mode-surface-bg-icon-gray rounded-[var(--dimensions-size-XXXX-large)] border-[0.25px] border-solid border-color-mode-text-icons-t-placeholder"
            role="search"
          >
            <div className="inline-flex items-center justify-end gap-[var(--dimensions-size-small)] relative flex-[0_0_auto] w-full">
              <input
                type="search"
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="بحث برقم العميل/العملية/ السجل التجاري / رقم الهاتف"
                className="relative w-fit mt-[-1.00px] font-fine-print-small-medium-underline font-[number:var(--fine-print-small-medium-underline-font-weight)] text-color-mode-text-icons-t-placeholder text-[length:var(--fine-print-small-medium-underline-font-size)] tracking-[var(--fine-print-small-medium-underline-letter-spacing)] leading-[var(--fine-print-small-medium-underline-line-height)] underline whitespace-nowrap [direction:rtl] [font-style:var(--fine-print-small-medium-underline-font-style)] bg-transparent border-none outline-none flex-1"
                aria-label="Search by customer number, operation, commercial record, or phone number"
              />

              <button
                type="submit"
                className="relative w-4 h-4 aspect-[1] hover:opacity-70 focus:outline-none focus:ring-2 focus:ring-color-mode-text-icons-t-blue rounded-sm transition-opacity"
                aria-label="Submit search"
              >
                <div className="relative w-[13px] h-[13px] top-0.5 left-0.5">
                  <img
                    className="absolute w-1 h-1 top-[9px] left-[9px]"
                    alt="Search"
                    src="/img/vector-2.svg"
                  />
                  <img
                    className="absolute w-3 h-3 top-0 left-0"
                    alt="Search"
                    src="/img/vector-3.svg"
                  />
                </div>
              </button>
            </div>
          </form>

          <button className="inline-flex flex-col items-end gap-2.5 pt-[var(--dimensions-size-medium)] pb-[var(--dimensions-size-medium)] px-2.5 relative flex-[0_0_auto] rounded-[var(--dimensions-size-medium)] hover:bg-color-mode-surface-bg-icon-gray focus:outline-none focus:ring-2 focus:ring-color-mode-text-icons-t-blue transition-colors">
            <div className="inline-flex items-center justify-end gap-[var(--dimensions-size-small)] relative flex-[0_0_auto]">
              <div className="inline-flex h-[17px] justify-end pl-2.5 pr-0 pt-[13px] pb-2.5 flex-[0_0_auto] items-center gap-2.5 relative">
                <span className="w-fit mt-[-14.00px] mb-[-12.00px] font-[number:var(--headings-h1-h6-heading-5-font-weight)] text-color-mode-text-icons-t-sec tracking-[var(--headings-h1-h6-heading-5-letter-spacing)] leading-[var(--headings-h1-h6-heading-5-line-height)] relative font-headings-h1-h6-heading-5 text-[length:var(--headings-h1-h6-heading-5-font-size)] whitespace-nowrap [direction:rtl] [font-style:var(--headings-h1-h6-heading-5-font-style)]">
                  محفظــــــــــــــتي
                </span>
              </div>

              <img
                className="relative w-[18px] h-[18px] aspect-[1]"
                alt="Portfolio icon"
                src="/img/side-icons.svg"
              />
            </div>
          </button>
        </div>
      </div>
    </header>
  );
};
