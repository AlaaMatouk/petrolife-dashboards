import React from "react";

const dashboardData = [
  {
    id: 1,
    title: "الطلبات المكتملة / الملغية",
    completedCount: 10,
    cancelledCount: 12,
    iconSrc: "/img/side-icons-9.svg",
    iconAlt: "Side icons",
  },
  {
    id: 2,
    title: "السيــــــــــارات",
    totalCount: 85,
    categories: [
      { name: "VIP", count: 10, iconSrc: "/img/component-4-12.svg" },
      { name: "كبيرة", count: 30, iconSrc: "/img/component-4-13.svg" },
      { name: "متوسطة", count: 25, iconSrc: "/img/component-4-14.svg" },
      { name: "صغيرة", count: 20, iconSrc: "/img/component-4-15.svg" },
    ],
    iconSrc: "/img/side-icons-10.svg",
    iconAlt: "Side icons",
  },
  {
    id: 3,
    title: "السـائقين النشطين / المعطلين",
    activeCount: 54,
    inactiveCount: 14,
    iconSrc: "/img/side-icons-11.svg",
    iconAlt: "Side icons",
  },
];

export const DashboardSection = (): JSX.Element => {
  return (
    <section
      className="flex h-[119px] items-center gap-5 relative self-stretch w-full"
      role="region"
      aria-label="Dashboard Statistics"
    >
      {dashboardData.map((item) => (
        <article
          key={item.id}
          className="border-[0.2px] border-solid relative flex-1 grow h-[119px] bg-color-mode-surface-bg-screen rounded-[var(--corner-radius-large)_var(--corner-radius-large)_var(--corner-radius-large)_var(--corner-radius-extra-large)] overflow-hidden border-color-mode-text-icons-t-placeholder"
        >
          {item.id === 1 && (
            <>
              <div className="flex flex-col w-[161px] items-end gap-[var(--corner-radius-large)] absolute top-[calc(50.00%_-_40px)] right-5">
                <h3 className="ml-[-19.00px] relative w-fit mt-[-1.00px] font-body-body-1 font-[number:var(--body-body-1-font-weight)] text-color-mode-text-icons-t-sec text-[length:var(--body-body-1-font-size)] text-center tracking-[var(--body-body-1-letter-spacing)] leading-[var(--body-body-1-line-height)] whitespace-nowrap [direction:rtl] [font-style:var(--body-body-1-font-style)]">
                  {item.title}
                </h3>

                <div className="relative self-stretch font-headline-h5b font-[number:var(--headline-h5b-font-weight)] text-color-mode-text-icons-t-blue text-[length:var(--headline-h5b-font-size)] text-right tracking-[var(--headline-h5b-letter-spacing)] leading-[var(--headline-h5b-line-height)] [font-style:var(--headline-h5b-font-style)]">
                  <span className="text-[#ee3939] font-headline-h5b [font-style:var(--headline-h5b-font-style)] font-[number:var(--headline-h5b-font-weight)] tracking-[var(--headline-h5b-letter-spacing)] leading-[var(--headline-h5b-line-height)] text-[length:var(--headline-h5b-font-size)]">
                    {item.cancelledCount}{" "}
                  </span>

                  <span className="text-[#a9b4be] font-headline-h5b [font-style:var(--headline-h5b-font-style)] font-[number:var(--headline-h5b-font-weight)] tracking-[var(--headline-h5b-letter-spacing)] leading-[var(--headline-h5b-line-height)] text-[length:var(--headline-h5b-font-size)]">
                    /
                  </span>

                  <span className="text-[#5a66c1] font-headline-h5b [font-style:var(--headline-h5b-font-style)] font-[number:var(--headline-h5b-font-weight)] tracking-[var(--headline-h5b-letter-spacing)] leading-[var(--headline-h5b-line-height)] text-[length:var(--headline-h5b-font-size)]">
                    {" "}
                    {item.completedCount}
                  </span>
                </div>
              </div>

              <div className="absolute top-[71px] left-2 w-10 h-10 bg-color-mode-surface-red-bg rounded-[20px] aspect-[1]" />

              <img
                className="top-[81px] left-[18px] absolute w-5 h-5 aspect-[1]"
                alt={item.iconAlt}
                src={item.iconSrc}
              />
            </>
          )}

          {item.id === 2 && (
            <>
              <div className="absolute top-[71px] left-2 w-10 h-10 bg-color-mode-surface-red-bg rounded-[20px] aspect-[1]" />

              <img
                className="top-[81px] left-[18px] absolute w-5 h-5 aspect-[1]"
                alt={item.iconAlt}
                src={item.iconSrc}
              />

              <div className="flex flex-col w-[309px] items-end gap-[13px] absolute top-5 left-2.5">
                <div className="flex items-start justify-end gap-[13px] relative self-stretch w-full flex-[0_0_auto]">
                  <div className="relative w-fit mt-[-1.00px] font-body-body-1 font-[number:var(--body-body-1-font-weight)] text-color-mode-text-icons-t-sec text-[length:var(--body-body-1-font-size)] tracking-[var(--body-body-1-letter-spacing)] leading-[var(--body-body-1-line-height)] whitespace-nowrap [direction:rtl] [font-style:var(--body-body-1-font-style)]">
                    الاجمالي {item.totalCount}
                  </div>

                  <h3 className="relative flex-1 mt-[-1.00px] font-body-body-1 font-[number:var(--body-body-1-font-weight)] text-color-mode-text-icons-t-sec text-[length:var(--body-body-1-font-size)] tracking-[var(--body-body-1-letter-spacing)] leading-[var(--body-body-1-line-height)] [direction:rtl] [font-style:var(--body-body-1-font-style)]">
                    {item.title}
                  </h3>
                </div>

                <div className="h-[41px] items-start justify-end gap-2.5 self-stretch w-full flex relative">
                  {item.categories?.map((category, index) => (
                    <React.Fragment key={category.name}>
                      {index > 0 && (
                        <img
                          className="relative w-px h-[39px]"
                          alt="Line"
                          src="/img/line-205-16.svg"
                        />
                      )}

                      <div
                        className={`flex flex-col items-end relative ${
                          category.name === "VIP"
                            ? "w-[27px]"
                            : category.name === "كبيرة"
                              ? "w-[35px]"
                              : category.name === "متوسطة"
                                ? "w-[57px]"
                                : "w-[46px]"
                        }`}
                      >
                        <div className="w-fit text-right whitespace-nowrap relative mt-[-1.00px] font-headline-h5b font-[number:var(--headline-h5b-font-weight)] text-color-mode-text-icons-t-blue text-[length:var(--headline-h5b-font-size)] tracking-[var(--headline-h5b-letter-spacing)] leading-[var(--headline-h5b-line-height)] [font-style:var(--headline-h5b-font-style)]">
                          {category.count}
                        </div>

                        <div
                          className={`justify-center self-stretch w-full flex-[0_0_auto] mt-[-3px] flex items-center gap-0.5 relative ${
                            category.name === "متوسطة" ? "justify-end" : ""
                          }`}
                        >
                          {category.name === "متوسطة" ? (
                            <div className="justify-end flex-1 grow flex items-center gap-0.5 relative">
                              <div className="relative w-[41px] h-3.5 mt-[-1.00px] font-caption-10 font-[number:var(--caption-10-font-weight)] text-color-mode-text-icons-t-sec text-[length:var(--caption-10-font-size)] tracking-[var(--caption-10-letter-spacing)] leading-[var(--caption-10-line-height)] whitespace-nowrap [direction:rtl] [font-style:var(--caption-10-font-style)]">
                                {category.name}
                              </div>

                              <img
                                className="relative w-3 h-3 aspect-[1]"
                                alt="Component"
                                src={category.iconSrc}
                              />
                            </div>
                          ) : (
                            <>
                              <div
                                className={`relative h-3.5 mt-[-1.00px] font-caption-10 font-[number:var(--caption-10-font-weight)] text-color-mode-text-icons-t-sec text-[length:var(--caption-10-font-size)] tracking-[var(--caption-10-letter-spacing)] leading-[var(--caption-10-line-height)] whitespace-nowrap [font-style:var(--caption-10-font-style)] ${
                                  category.name === "VIP"
                                    ? "w-4 ml-[-1.50px]"
                                    : category.name === "كبيرة"
                                      ? "w-[22px] ml-[-0.50px] [direction:rtl]"
                                      : "flex-1 [direction:rtl]"
                                }`}
                              >
                                {category.name}
                              </div>

                              <img
                                className={`relative w-3 h-3 aspect-[1] ${
                                  category.name === "VIP"
                                    ? "mr-[-1.50px]"
                                    : category.name === "كبيرة"
                                      ? "mr-[-0.50px]"
                                      : ""
                                }`}
                                alt="Component"
                                src={category.iconSrc}
                              />
                            </>
                          )}
                        </div>
                      </div>
                    </React.Fragment>
                  ))}

                  <img
                    className="relative w-px h-[39px]"
                    alt="Line"
                    src="/img/line-205-16.svg"
                  />
                </div>
              </div>
            </>
          )}

          {item.id === 3 && (
            <>
              <div className="flex flex-col w-[161px] items-end gap-[var(--corner-radius-large)] absolute top-[calc(50.00%_-_40px)] right-5">
                <h3 className="ml-[-52.00px] relative w-fit mt-[-1.00px] font-body-body-1 font-[number:var(--body-body-1-font-weight)] text-color-mode-text-icons-t-sec text-[length:var(--body-body-1-font-size)] text-center tracking-[var(--body-body-1-letter-spacing)] leading-[var(--body-body-1-line-height)] whitespace-nowrap [direction:rtl] [font-style:var(--body-body-1-font-style)]">
                  {item.title}
                </h3>

                <div className="relative self-stretch font-headline-h5b font-[number:var(--headline-h5b-font-weight)] text-color-mode-text-icons-t-blue text-[length:var(--headline-h5b-font-size)] text-right tracking-[var(--headline-h5b-letter-spacing)] leading-[var(--headline-h5b-line-height)] [font-style:var(--headline-h5b-font-style)]">
                  <span className="text-[#5a66c1] font-headline-h5b [font-style:var(--headline-h5b-font-style)] font-[number:var(--headline-h5b-font-weight)] tracking-[var(--headline-h5b-letter-spacing)] leading-[var(--headline-h5b-line-height)] text-[length:var(--headline-h5b-font-size)]">
                    &nbsp;&nbsp;
                  </span>

                  <span className="text-[#ee3939] font-headline-h5b [font-style:var(--headline-h5b-font-style)] font-[number:var(--headline-h5b-font-weight)] tracking-[var(--headline-h5b-letter-spacing)] leading-[var(--headline-h5b-line-height)] text-[length:var(--headline-h5b-font-size)]">
                    {item.inactiveCount}
                  </span>

                  <span className="text-[#5a66c1] font-headline-h5b [font-style:var(--headline-h5b-font-style)] font-[number:var(--headline-h5b-font-weight)] tracking-[var(--headline-h5b-letter-spacing)] leading-[var(--headline-h5b-line-height)] text-[length:var(--headline-h5b-font-size)]">
                    &nbsp;
                  </span>

                  <span className="text-[#a9b4be] font-headline-h5b [font-style:var(--headline-h5b-font-style)] font-[number:var(--headline-h5b-font-weight)] tracking-[var(--headline-h5b-letter-spacing)] leading-[var(--headline-h5b-line-height)] text-[length:var(--headline-h5b-font-size)]">
                    /
                  </span>

                  <span className="text-[#5a66c1] font-headline-h5b [font-style:var(--headline-h5b-font-style)] font-[number:var(--headline-h5b-font-weight)] tracking-[var(--headline-h5b-letter-spacing)] leading-[var(--headline-h5b-line-height)] text-[length:var(--headline-h5b-font-size)]">
                    {" "}
                    {item.activeCount}
                  </span>
                </div>
              </div>

              <div className="absolute top-[71px] left-2 w-10 h-10 bg-color-mode-surface-red-bg rounded-[20px] aspect-[1]" />

              <img
                className="top-[81px] left-[18px] absolute w-5 h-5 aspect-[1]"
                alt={item.iconAlt}
                src={item.iconSrc}
              />
            </>
          )}
        </article>
      ))}
    </section>
  );
};
