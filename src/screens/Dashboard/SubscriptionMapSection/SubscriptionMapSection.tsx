import React from "react";

export const SubscriptionMapSection = (): JSX.Element => {
  // Data for subscription stats
  const subscriptionStats = [
    {
      value: "120",
      label: "عدد المركبات",
      bgColor: "bg-color-mode-surface-bg-orange-light",
    },
    {
      value: "سنوي",
      label: "نوع الباقة",
      bgColor: "bg-color-mode-surface-bg-orange-light",
    },
  ];

  // Countdown timer data
  const countdownData = {
    days: "245",
    hours: "152",
    minutes: "24",
    labels: ["يوم", "ساعة", "دقيقة"],
  };

  return (
    <main className="flex items-start gap-5 relative" data-model-id="1:1161">
      {/* Current Subscription Card */}
      <section className="relative w-[340px] h-[262px] bg-color-mode-surface-bg-screen rounded-[var(--corner-radius-large)] overflow-hidden border-[0.3px] border-solid border-color-mode-text-icons-t-placeholder">
        <div className="flex flex-col w-[300px] items-end gap-[9px] relative top-[calc(50.00%_-_116px)] left-[calc(50.00%_-_150px)]">
          <header className="relative self-stretch mt-[-1.00px] font-headline-h7 font-[number:var(--headline-h7-font-weight)] text-color-mode-text-icons-t-blue text-[length:var(--headline-h7-font-size)] tracking-[var(--headline-h7-letter-spacing)] leading-[var(--headline-h7-line-height)] [direction:rtl] [font-style:var(--headline-h7-font-style)]">
            اشتراكي الحالي
          </header>

          <div className="flex flex-col items-center gap-[var(--corner-radius-medium)] relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex flex-col items-start gap-[var(--corner-radius-extra-small)] relative self-stretch w-full flex-[0_0_auto]">
              {/* Subscription Stats */}
              <div className="flex h-[83px] items-center gap-[var(--corner-radius-medium)] relative self-stretch w-full">
                {subscriptionStats.map((stat, index) => (
                  <div
                    key={index}
                    className="relative flex-1 self-stretch grow"
                  >
                    <div
                      className={`absolute top-0 left-0 w-[92px] h-[83px] ${stat.bgColor} rounded-[var(--corner-radius-small)]`}
                    />

                    <div className="flex flex-col w-[77px] items-center absolute top-[calc(50.00%_-_22px)] left-[calc(50.00%_-_38px)] gap-[var(--corner-radius-none)]">
                      <div className="relative self-stretch mt-[-1.00px] font-headline-h7 font-[number:var(--headline-h7-font-weight)] text-color-mode-text-icons-t-primary-gray text-[length:var(--headline-h7-font-size)] text-center tracking-[var(--headline-h7-letter-spacing)] leading-[var(--headline-h7-line-height)] [font-style:var(--headline-h7-font-style)]">
                        {stat.value}
                      </div>

                      <div className="relative self-stretch font-[number:var(--body-body-2-font-weight)] text-color-mode-text-icons-t-primary-gray text-[length:var(--body-body-2-font-size)] text-center tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] font-body-body-2 [direction:rtl] [font-style:var(--body-body-2-font-style)]">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Info Message */}
              <div className="flex items-center justify-end gap-2 relative self-stretch w-full flex-[0_0_auto]">
                <p className="relative w-fit mt-[-1.00px] font-[number:var(--caption-10-font-weight)] text-color-mode-text-icons-t-orange text-[length:var(--caption-10-font-size)] text-center tracking-[var(--caption-10-letter-spacing)] leading-[var(--caption-10-line-height)] whitespace-nowrap font-caption-10 [direction:rtl] [font-style:var(--caption-10-font-style)]">
                  نوع الاشتراك يحدد تلقائيا وفقا لعدد المركبات.
                </p>

                <div
                  className="relative w-3 h-3 aspect-[1]"
                  role="img"
                  aria-label="معلومات"
                >
                  <img
                    className="absolute w-[66.67%] h-[83.33%] top-[3.65%] left-[11.98%]"
                    alt="Vector"
                    src="/img/vector.svg"
                  />
                </div>
              </div>
            </div>

            {/* Countdown Timer Section */}
            <div className="flex flex-col items-center gap-[var(--corner-radius-extra-small)] relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] font-[number:var(--caption-caption-1-font-weight)] text-color-mode-text-icons-t-sec text-[length:var(--caption-caption-1-font-size)] text-center tracking-[var(--caption-caption-1-letter-spacing)] leading-[var(--caption-caption-1-line-height)] whitespace-nowrap font-caption-caption-1 [direction:rtl] [font-style:var(--caption-caption-1-font-style)]">
                الأيــــــــــــــــــــــــــــــــــــــــــــــام
                المتبقيــــــــــــــــة من الاشتــــــــــــــــــــــــراك
              </div>

              <div className="flex flex-col items-center justify-center gap-2.5 pt-3.5 pb-2.5 px-2.5 relative self-stretch w-full flex-[0_0_auto] bg-color-mode-surface-bg-icon-gray rounded-[var(--corner-radius-medium)]">
                <div className="inline-flex flex-col items-center relative flex-[0_0_auto]">
                  <time className="relative w-fit mt-[-1.00px] font-headline-h6-m font-[number:var(--headline-h6-m-font-weight)] text-color-mode-text-icons-t-orange text-[length:var(--headline-h6-m-font-size)] text-center tracking-[var(--headline-h6-m-letter-spacing)] leading-[var(--headline-h6-m-line-height)] whitespace-nowrap [font-style:var(--headline-h6-m-font-style)]">
                    {countdownData.days}&nbsp;&nbsp;:&nbsp;&nbsp;
                    {countdownData.hours}&nbsp;&nbsp;:&nbsp;&nbsp;
                    {countdownData.minutes}
                  </time>

                  <div className="flex items-start gap-[15px] relative self-stretch w-full flex-[0_0_auto] -mt-1">
                    {countdownData.labels.map((label, index) => (
                      <div
                        key={index}
                        className={`relative ${index === 0 ? "w-[30px]" : index === 1 ? "flex-1" : "w-[31px]"} mt-[-1.00px] font-caption-caption-1 font-[number:var(--caption-caption-1-font-weight)] text-color-mode-text-icons-t-placeholder text-[length:var(--caption-caption-1-font-size)] tracking-[var(--caption-caption-1-letter-spacing)] leading-[var(--caption-caption-1-line-height)] [direction:rtl] [font-style:var(--caption-caption-1-font-style)]`}
                      >
                        {label}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="relative flex-1 grow h-[262px] bg-color-mode-surface-bg-screen rounded-[var(--corner-radius-large)] overflow-hidden border-[0.3px] border-solid border-color-mode-text-icons-t-placeholder">
        <img
          className="absolute top-[35px] left-0 w-[699px] h-[227px]"
          alt="خريطة مواقع محطات بترولايف"
          src="/img/frame-677.svg"
        />

        <header className="absolute top-[19px] left-[485px] font-[number:var(--headline-h7-font-weight)] text-color-mode-text-icons-t-blue text-[length:var(--headline-h7-font-size)] text-left tracking-[var(--headline-h7-letter-spacing)] leading-[var(--headline-h7-line-height)] whitespace-nowrap font-headline-h7 [direction:rtl] [font-style:var(--headline-h7-font-style)]">
          مواقع محطات بترولايف
        </header>
      </section>
    </main>
  );
};
