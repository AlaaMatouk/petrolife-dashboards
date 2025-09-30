import React from "react";

export const DashboardHeaderSection = (): JSX.Element => {
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
      isComplex: true,
      vectors: [
        {
          src: "/img/vector.svg",
          alt: "Vector",
          className:
            "absolute w-[41.67%] h-[41.67%] top-[26.04%] left-[26.04%]",
        },
        {
          src: "/img/vector-1.svg",
          alt: "Vector",
          className: "absolute w-[83.33%] h-[83.33%] top-[5.21%] left-[5.21%]",
        },
      ],
    },
  ];

  return (
    <header
      className="absolute top-0 left-[calc(50.00%_-_720px)] w-[1440px] h-[72px] flex bg-color-mode-surface-bg-screen shadow-[0px_4px_10px_#0000000a]"
      data-color-mode-mode="dark"
      role="banner"
    >
      <div className="flex mt-[15px] w-[1066px] h-[42px] ml-[61px] relative items-center justify-between">
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
                type="button"
                aria-label={`Navigation button ${icon.id}`}
              >
                {icon.isComplex ? (
                  <div className="relative top-[calc(50.00%_-_10px)] left-[calc(50.00%_-_10px)] w-5 h-5">
                    {icon.vectors?.map((vector, index) => (
                      <img
                        key={index}
                        className={vector.className}
                        alt={vector.alt}
                        src={vector.src}
                      />
                    ))}
                  </div>
                ) : (
                  <img
                    className="absolute top-[calc(50.00%_-_10px)] left-[calc(50.00%_-_10px)] w-5 h-5 aspect-[1]"
                    alt={icon.alt}
                    src={icon.src}
                  />
                )}
              </button>
            ))}

            <button
              className="relative w-10 h-10 bg-color-mode-surface-bg-icon-gray rounded-[var(--dimensions-size-x-small)] overflow-hidden border-[0.25px] border-solid border-color-mode-text-icons-t-placeholder aspect-[1] hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-color-mode-surface-primary-blue transition-opacity"
              type="button"
              aria-label="Language selector"
            >
              <span className="absolute top-[calc(50.00%_-_9px)] left-[calc(50.00%_-_10px)] font-body-body-1 font-[number:var(--body-body-1-font-weight)] text-color-mode-text-icons-t-sec text-[length:var(--body-body-1-font-size)] text-right tracking-[var(--body-body-1-letter-spacing)] leading-[var(--body-body-1-line-height)] whitespace-nowrap [font-style:var(--body-body-1-font-style)]">
                En
              </span>
            </button>
          </div>
        </nav>

        <div className="inline-flex items-center justify-end gap-2.5 relative flex-[0_0_auto]">
          <button
            className="inline-flex flex-col items-end gap-2.5 pt-[var(--dimensions-size-medium)] pb-[var(--dimensions-size-medium)] px-2.5 relative flex-[0_0_auto] rounded-[var(--dimensions-size-medium)] hover:bg-color-mode-surface-bg-icon-gray focus:outline-none focus:ring-2 focus:ring-color-mode-surface-primary-blue transition-colors"
            type="button"
            aria-label="My subscriptions"
          >
            <div className="inline-flex items-center justify-end gap-[var(--dimensions-size-small)] relative flex-[0_0_auto]">
              <div className="inline-flex h-[17px] justify-end pl-2.5 pr-0 pt-[13px] pb-2.5 items-center gap-2.5 relative flex-[0_0_auto]">
                <h1 className="w-fit mt-[-14.00px] mb-[-12.00px] font-[number:var(--headings-h1-h6-heading-5-font-weight)] text-color-mode-text-icons-t-sec tracking-[var(--headings-h1-h6-heading-5-letter-spacing)] leading-[var(--headings-h1-h6-heading-5-line-height)] [direction:rtl] relative font-headings-h1-h6-heading-5 text-[length:var(--headings-h1-h6-heading-5-font-size)] whitespace-nowrap [font-style:var(--headings-h1-h6-heading-5-font-style)]">
                  اشتراكـــــــاتي
                </h1>
              </div>

              <img
                className="relative w-[18px] h-[18px] aspect-[1]"
                alt="Side icons"
                src="/img/side-icons.svg"
              />
            </div>
          </button>
        </div>
      </div>
    </header>
  );
};
