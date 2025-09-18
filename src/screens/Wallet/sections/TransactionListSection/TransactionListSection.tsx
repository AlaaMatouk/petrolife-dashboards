import React, { useState } from "react";

export const TransactionListSection = (): JSX.Element => {
  const [selectedTimeFilter, setSelectedTimeFilter] = useState("اخر 12 شهر");
  const [currentPage, setCurrentPage] = useState(3);

  const fuelData = [
    {
      type: "ديزل",
      amount: "185 .L",
      color: "text-color-mode-text-icons-t-orange",
    },
    {
      type: "بنزين 95",
      amount: "548 .L",
      color: "text-color-mode-text-icons-t-red",
    },
    {
      type: "بنزين 91",
      amount: "845 .L",
      color: "text-color-mode-text-icons-t-green",
    },
  ];

  const timeFilters = ["اخر اسبوع", "اخر 30 يوم", "اخر 6 شهور", "اخر 12 شهر"];

  const transactionData = [
    {
      id: "21A254",
      type: "وقود 91",
      driver: "أحمد محمد",
      date: "21 فبراير 2025 - 5:05 ص",
      amount: 20,
      cumulative: 200,
    },
    {
      id: "21A254",
      type: "منتج",
      driver: "--",
      date: "21 فبراير 2025 - 5:05 ص",
      amount: 20,
      cumulative: 180,
    },
    {
      id: "21A254",
      type: "وقود 91",
      driver: "أحمد محمد",
      date: "21 فبراير 2025 - 5:05 ص",
      amount: 20,
      cumulative: 160,
    },
    {
      id: "21A254",
      type: "وقود 91",
      driver: "أحمد محمد",
      date: "21 فبراير 2025 - 5:05 ص",
      amount: 20,
      cumulative: 140,
    },
    {
      id: "21A254",
      type: "وقود 91",
      driver: "أحمد محمد",
      date: "21 فبراير 2025 - 5:05 ص",
      amount: 20,
      cumulative: 120,
    },
    {
      id: "21A254",
      type: "وقود 91",
      driver: "أحمد محمد",
      date: "21 فبراير 2025 - 5:05 ص",
      amount: 20,
      cumulative: 100,
    },
    {
      id: "21A254",
      type: "وقود 91",
      driver: "أحمد محمد",
      date: "21 فبراير 2025 - 5:05 ص",
      amount: 20,
      cumulative: 80,
    },
    {
      id: "21A254",
      type: "وقود 91",
      driver: "أحمد محمد",
      date: "21 فبراير 2025 - 5:05 ص",
      amount: 20,
      cumulative: 60,
    },
    {
      id: "21A254",
      type: "وقود 91",
      driver: "أحمد محمد",
      date: "21 فبراير 2025 - 5:05 ص",
      amount: 20,
      cumulative: 40,
    },
    {
      id: "21A254",
      type: "وقود 91",
      driver: "أحمد محمد",
      date: "21 فبراير 2025 - 5:05 ص",
      amount: 20,
      cumulative: 20,
    },
  ];

  const pageNumbers = [1, 2, 3, 4, 5, 6, 7, "...", 20];

  return (
    <section className="flex flex-col w-[1057px] items-end gap-[var(--corner-radius-extra-large)] absolute top-[106px] left-[60px]">
      <div className="flex w-[1057px] items-center gap-5 relative flex-[0_0_auto]">
        <div className="flex flex-col w-[424px] items-start gap-5 relative">
          <div className="relative self-stretch w-full h-[95px] bg-color-mode-surface-bg-screen rounded-[var(--corner-radius-large)_var(--corner-radius-large)_var(--corner-radius-large)_var(--corner-radius-extra-large)] overflow-hidden border-[0.3px] border-solid border-color-mode-text-icons-t-placeholder">
            <div className="flex flex-col w-[161px] items-end gap-[var(--corner-radius-medium)] absolute top-4 left-[235px]">
              <div className="relative w-fit mt-[-1.00px] font-body-body-1 font-[number:var(--body-body-1-font-weight)] text-color-mode-text-icons-t-sec text-[length:var(--body-body-1-font-size)] text-center tracking-[var(--body-body-1-letter-spacing)] leading-[var(--body-body-1-line-height)] whitespace-nowrap [direction:rtl] [font-style:var(--body-body-1-font-style)]">
                التكلفة الإجمالية للوقود
              </div>

              <p className="relative self-stretch [font-family:'Tajawal',Helvetica] font-normal text-color-mode-text-icons-t-blue text-2xl tracking-[0] leading-6 [direction:rtl]">
                <span className="font-[number:var(--headline-h5b-font-weight)] leading-[var(--headline-h5b-line-height)] font-headline-h5b [font-style:var(--headline-h5b-font-style)] tracking-[var(--headline-h5b-letter-spacing)] text-[length:var(--headline-h5b-font-size)]">
                  14,254{" "}
                </span>

                <span className="font-[number:var(--headline-h8-font-weight)] text-[length:var(--headline-h8-font-size)] font-headline-h8 [font-style:var(--headline-h8-font-style)] tracking-[var(--headline-h8-letter-spacing)] leading-[var(--headline-h8-line-height)]">
                  ر.س
                </span>
              </p>
            </div>

            <div className="absolute w-10 h-10 top-12 left-[7px] bg-color-mode-surface-purple-bg rounded-[20px]">
              <img
                className="absolute w-5 h-5 top-2.5 left-2.5 aspect-[1]"
                alt="Side icons"
                src="/img/side-icons-14.svg"
              />
            </div>
          </div>

          <div className="relative self-stretch w-full h-[95px] bg-color-mode-surface-bg-screen rounded-[var(--corner-radius-large)_var(--corner-radius-large)_var(--corner-radius-large)_var(--corner-radius-extra-large)] overflow-hidden border-[0.3px] border-solid border-color-mode-text-icons-t-placeholder">
            <div className="flex flex-col w-[270px] items-end gap-[var(--corner-radius-medium)] absolute top-2 left-[126px]">
              <div className="relative w-fit mt-[-1.00px] font-body-body-1 font-[number:var(--body-body-1-font-weight)] text-color-mode-text-icons-t-sec text-[length:var(--body-body-1-font-size)] text-center tracking-[var(--body-body-1-letter-spacing)] leading-[var(--body-body-1-line-height)] whitespace-nowrap [direction:rtl] [font-style:var(--body-body-1-font-style)]">
                اجمالي اللترات المستهلكة
              </div>

              <div className="flex items-start gap-[11px] relative self-stretch w-full flex-[0_0_auto]">
                {fuelData.map((fuel, index) => (
                  <React.Fragment key={index}>
                    <div className="flex-col items-end flex-1 grow flex relative">
                      <div className="relative w-fit mt-[-1.00px] font-headline-h5b font-[number:var(--headline-h5b-font-weight)] text-color-mode-text-icons-t-blue text-[length:var(--headline-h5b-font-size)] text-right tracking-[var(--headline-h5b-letter-spacing)] leading-[var(--headline-h5b-line-height)] whitespace-nowrap [font-style:var(--headline-h5b-font-style)]">
                        {fuel.amount}
                      </div>

                      <div
                        className={`relative ${index === 2 ? "self-stretch" : "w-[66px]"} mt-[-3px] font-caption-caption-2 font-[number:var(--caption-caption-2-font-weight)] ${fuel.color} text-[length:var(--caption-caption-2-font-size)] text-center tracking-[var(--caption-caption-2-letter-spacing)] leading-[var(--caption-caption-2-line-height)] [direction:rtl] [font-style:var(--caption-caption-2-font-style)]`}
                      >
                        {fuel.type}
                      </div>
                    </div>

                    {index < fuelData.length - 1 && (
                      <img
                        className="relative w-px h-[39px]"
                        alt="Line"
                        src={`/img/line-205${index === 0 ? "" : "-1"}.svg`}
                      />
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            <div className="absolute w-10 h-10 top-12 left-[7px] bg-color-mode-surface-purple-bg rounded-[20px]">
              <img
                className="absolute w-5 h-5 top-2.5 left-2.5 aspect-[1]"
                alt="Side icons"
                src="/img/side-icons-15.svg"
              />
            </div>
          </div>
        </div>

        <div className="relative flex-1 self-stretch grow bg-color-mode-surface-primary-blue rounded-[var(--corner-radius-large)] overflow-hidden border-[0.3px] border-solid border-color-mode-text-icons-t-placeholder">
          <div className="absolute w-[360px] h-[306px] -top-12 left-[-79px]">
            <div className="absolute w-[306px] h-[306px] top-0 left-0 bg-[#4e5bb3] rounded-[153px]" />

            <img
              className="absolute w-[220px] h-[78px] top-[180px] left-[79px]"
              alt="Vector"
              src="/img/vector-5-1.svg"
            />

            <img
              className="absolute w-[165px] h-[84px] top-12 left-[196px]"
              alt="Vector"
              src="/img/vector-3-1.svg"
            />

            <img
              className="absolute w-[274px] h-[210px] top-12 left-[79px] aspect-[1] object-cover"
              alt="Paper money or"
              src="/img/paper-money-or-dollar-bills-and-blue-credit-card-3d-illustration.png"
            />
          </div>

          <div className="flex flex-col w-[270px] items-end gap-4 absolute top-[25px] left-[307px]">
            <div className="flex flex-col items-end gap-[var(--corner-radius-large)] relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] font-headline-h6-m font-[number:var(--headline-h6-m-font-weight)] text-color-mode-text-icons-t-btn-negative text-[length:var(--headline-h6-m-font-size)] text-center tracking-[var(--headline-h6-m-letter-spacing)] leading-[var(--headline-h6-m-line-height)] whitespace-nowrap [direction:rtl] [font-style:var(--headline-h6-m-font-style)]">
                رصيــــــــد محفظتي
              </div>

              <p className="relative self-stretch [font-family:'Tajawal',Helvetica] font-normal text-color-mode-text-icons-t-btn-negative text-5xl leading-[48px] [direction:rtl]">
                <span className="font-[number:var(--headline-h3l-font-weight)] tracking-[var(--headline-h3l-letter-spacing)] leading-[var(--headline-h3l-line-height)] font-headline-h3l [font-style:var(--headline-h3l-font-style)] text-[length:var(--headline-h3l-font-size)]">
                  7,250
                </span>

                <span className="font-[number:var(--headline-h5b-font-weight)] text-[length:var(--headline-h5b-font-size)] tracking-[var(--headline-h5b-letter-spacing)] leading-[var(--headline-h5b-line-height)] font-headline-h5b [font-style:var(--headline-h5b-font-style)]">
                  &nbsp;
                </span>

                <span className="font-[number:var(--headline-h7-font-weight)] text-[length:var(--headline-h7-font-size)] tracking-[var(--headline-h7-letter-spacing)] leading-[var(--headline-h7-line-height)] font-headline-h7 [font-style:var(--headline-h7-font-style)]">
                  ر.س
                </span>
              </p>
            </div>

            <div className="inline-flex items-start gap-2.5 relative flex-[0_0_auto] ml-[-66.00px]">
              <button className="flex flex-col w-[180px] items-center justify-center gap-2.5 pt-[var(--corner-radius-small)] pb-[var(--corner-radius-small)] px-2.5 relative self-stretch rounded-[var(--corner-radius-full)] border-[0.8px] border-solid border-color-mode-text-icons-t-btn-negative hover:bg-white hover:bg-opacity-10 transition-colors">
                <div className="flex items-center justify-center gap-1.5 relative self-stretch w-full flex-[0_0_auto]">
                  <div className="relative flex-1 h-4 font-subtitle-subtitle-3 font-[number:var(--subtitle-subtitle-3-font-weight)] text-color-mode-text-icons-t-btn-negative text-[length:var(--subtitle-subtitle-3-font-size)] text-left tracking-[var(--subtitle-subtitle-3-letter-spacing)] leading-[var(--subtitle-subtitle-3-line-height)] whitespace-nowrap [direction:rtl] [font-style:var(--subtitle-subtitle-3-font-style)]">
                    طلبات شحن المحفظة
                  </div>

                  <img
                    className="relative w-[18px] h-[18px] aspect-[1]"
                    alt="Side icons"
                    src="/img/side-icons-16.svg"
                  />
                </div>
              </button>

              <button className="flex w-[146px] items-center justify-center gap-2.5 pr-[var(--corner-radius-extra-large-2)] pl-[var(--corner-radius-extra-large-2)] pt-3.5 pb-2.5 relative bg-white rounded-[var(--corner-radius-full)] hover:bg-gray-50 transition-colors">
                <div className="relative w-fit mt-[-1.00px] ml-[-12.50px] mr-[-12.50px] font-headline-h8 font-[number:var(--headline-h8-font-weight)] text-color-mode-text-icons-t-blue text-[length:var(--headline-h8-font-size)] text-left tracking-[var(--headline-h8-letter-spacing)] leading-[var(--headline-h8-line-height)] whitespace-nowrap [direction:rtl] [font-style:var(--headline-h8-font-style)]">
                  شحن المحفظة
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col h-[636px] items-start gap-[var(--corner-radius-extra-large)] pt-[var(--corner-radius-large)] pr-[var(--corner-radius-large)] pb-[var(--corner-radius-large)] pl-[var(--corner-radius-large)] relative self-stretch w-full bg-color-mode-surface-bg-screen rounded-[var(--corner-radius-large)] border-[0.3px] border-solid border-color-mode-text-icons-t-placeholder">
        <div className="flex flex-col items-end gap-[var(--corner-radius-extra-large)] relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
            <div className="inline-flex items-start gap-2.5 relative flex-[0_0_auto]">
              <button className="inline-flex flex-col items-start gap-2.5 pt-[var(--corner-radius-small)] pb-[var(--corner-radius-small)] px-2.5 relative flex-[0_0_auto] rounded-[var(--corner-radius-small)] border-[0.8px] border-solid border-color-mode-text-icons-t-placeholder hover:bg-gray-50 transition-colors">
                <div className="flex items-center gap-[var(--corner-radius-small)] relative self-stretch w-full flex-[0_0_auto]">
                  <div className="inline-flex items-center justify-center gap-2.5 pt-1 pb-0 px-0 relative flex-[0_0_auto]">
                    <div className="w-fit mt-[-1.00px] font-[number:var(--body-body-2-font-weight)] text-color-mode-text-icons-t-sec text-left tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] relative font-body-body-2 text-[length:var(--body-body-2-font-size)] whitespace-nowrap [direction:rtl] [font-style:var(--body-body-2-font-style)]">
                      إضافة طلب استرداد الأموال
                    </div>
                  </div>

                  <img
                    className="relative w-[18px] h-[18px] aspect-[1]"
                    alt="Side icons"
                    src="/img/side-icons-17.svg"
                  />
                </div>
              </button>

              <div className="inline-flex items-center gap-[var(--corner-radius-medium)] relative flex-[0_0_auto]">
                <button className="relative self-stretch w-[79px] rounded-[5px] border-[0.5px] border-solid border-color-mode-text-icons-t-placeholder hover:bg-gray-50 transition-colors">
                  <div className="absolute w-[37px] h-6 top-2 left-2.5 font-subtitle-subtitle-3 font-[number:var(--subtitle-subtitle-3-font-weight)] text-color-mode-text-icons-t-sec text-[length:var(--subtitle-subtitle-3-font-size)] text-left tracking-[var(--subtitle-subtitle-3-letter-spacing)] leading-[var(--subtitle-subtitle-3-line-height)] whitespace-nowrap [direction:rtl] [font-style:var(--subtitle-subtitle-3-font-style)]">
                    تصدير
                  </div>

                  <div className="absolute w-[21px] h-5 top-2.5 left-[49px]">
                    <div className="relative h-5">
                      <img
                        className="absolute w-[13px] h-4 top-0.5 left-1"
                        alt="Icon"
                        src="/img/icon.svg"
                      />
                    </div>
                  </div>
                </button>
              </div>
            </div>

            <div className="flex w-[669px] items-center justify-end gap-1.5 relative">
              <div className="flex w-[166px] items-center justify-end gap-2.5 relative">
                <div className="inline-flex items-center justify-end gap-[11px] relative flex-[0_0_auto] ml-[-496.92px]">
                  <button className="w-[35px] bg-color-mode-surface-bg-icon-gray border-[0.2px] border-solid border-color-mode-surface-bg-screen flex flex-col h-[30px] items-center justify-center gap-2.5 p-4 relative rounded-[5px] hover:bg-gray-200 transition-colors">
                    <div className="w-[29.17px] items-center justify-center gap-[12.5px] flex-[0_0_auto] mt-[-11.00px] mb-[-11.00px] ml-[-13.08px] mr-[-13.08px] flex relative">
                      <div className="relative w-5 h-5 aspect-[1]">
                        <div className="relative w-4 h-[18px] top-px left-0.5">
                          <img
                            className="absolute w-2 h-1 top-0 left-1"
                            alt="Vector"
                            src="/img/vector-8.svg"
                          />

                          <img
                            className="absolute w-4 h-4 top-0.5 left-0"
                            alt="Vector"
                            src="/img/vector-9.svg"
                          />

                          <img
                            className="absolute w-4 h-px top-[7px] left-0 object-cover"
                            alt="Vector"
                            src="/img/vector-10.svg"
                          />

                          <img
                            className="absolute w-2 h-[5px] top-2.5 left-1"
                            alt="Vector"
                            src="/img/vector-11.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </button>

                  {timeFilters.map((filter) => (
                    <button
                      key={filter}
                      onClick={() => setSelectedTimeFilter(filter)}
                      className={`flex flex-col w-[100.98px] h-[30px] items-center justify-center gap-2.5 p-4 relative rounded-[5px] border-[0.2px] border-solid transition-colors ${
                        selectedTimeFilter === filter
                          ? "bg-basewhite border-color-mode-text-icons-t-blue"
                          : "bg-color-mode-surface-bg-screen border-color-mode-text-icons-t-placeholder hover:bg-gray-50"
                      }`}
                    >
                      <div className="w-[126px] items-center justify-center gap-[15px] flex-[0_0_auto] mt-[-12.00px] mb-[-12.00px] ml-[-28.51px] mr-[-28.51px] flex relative">
                        <div
                          className={`relative w-fit mt-[-1.00px] font-body-body-2 font-[number:var(--body-body-2-font-weight)] text-[length:var(--body-body-2-font-size)] tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] whitespace-nowrap [direction:rtl] [font-style:var(--body-body-2-font-style)] ${
                            selectedTimeFilter === filter
                              ? "text-color-mode-text-icons-t-primary-gray"
                              : "text-color-mode-text-icons-t-sec"
                          }`}
                        >
                          {filter}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>

                <div className="inline-flex items-center gap-1.5 relative flex-[0_0_auto]">
                  <div className="relative w-[142px] h-5 mt-[-1.00px] font-subtitle-subtitle-2 font-[number:var(--subtitle-subtitle-2-font-weight)] text-color-mode-text-icons-t-sec text-[length:var(--subtitle-subtitle-2-font-size)] tracking-[var(--subtitle-subtitle-2-letter-spacing)] leading-[var(--subtitle-subtitle-2-line-height)] whitespace-nowrap [direction:rtl] [font-style:var(--subtitle-subtitle-2-font-style)]">
                    المعاملات المالية
                  </div>

                  <img
                    className="relative w-[18px] h-[18px] aspect-[1]"
                    alt="Side icons"
                    src="/img/side-icons-18.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-end gap-[var(--corner-radius-large)] relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex items-start justify-end relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex-col items-end flex-1 grow flex relative">
              <div className="relative self-stretch w-full h-[42px] bg-color-mode-surface-bg-icon-gray" />

              {transactionData.map((transaction, index) => (
                <div
                  key={index}
                  className="flex h-[42px] items-center justify-end gap-1 pl-[var(--corner-radius-none)] pr-[11px] py-2.5 relative self-stretch w-full border-b-[0.2px] [border-bottom-style:solid] border-color-mode-text-icons-t-placeholder"
                >
                  <div className="relative w-9 h-[18px] font-body-body-2 font-[number:var(--body-body-2-font-weight)] text-color-mode-text-icons-t-sec text-[length:var(--body-body-2-font-size)] text-left tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] whitespace-nowrap [direction:rtl] [font-style:var(--body-body-2-font-style)]">
                    تصدير
                  </div>

                  <div className="relative w-[21.26px] h-[14.55px]">
                    <div className="relative w-[21px] h-[15px]">
                      <img
                        className="absolute w-[13px] h-3 top-px left-1"
                        alt="Icon"
                        src={
                          index === 0 ? "/img/icon-1.svg" : "/img/icon-10.svg"
                        }
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col w-[175px] items-end relative">
              <div className="flex items-center justify-end gap-2.5 pr-[var(--corner-radius-none)] pl-[var(--corner-radius-none)] py-2.5 relative self-stretch w-full flex-[0_0_auto] bg-color-mode-surface-bg-icon-gray">
                <div className="relative w-fit mt-[-1.00px] font-body-body-2 font-[number:var(--body-body-2-font-weight)] text-black text-[length:var(--body-body-2-font-size)] text-left tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] whitespace-nowrap [direction:rtl] [font-style:var(--body-body-2-font-style)]">
                  تراكمي العمليات (ر.س)
                </div>
              </div>

              {transactionData.map((transaction, index) => (
                <div
                  key={index}
                  className="flex items-center justify-end gap-2.5 pr-[var(--corner-radius-none)] pl-[var(--corner-radius-none)] py-2.5 relative self-stretch w-full flex-[0_0_auto] border-b-[0.2px] [border-bottom-style:solid] border-color-mode-text-icons-t-placeholder"
                >
                  <div className="mt-[-0.20px] font-[number:var(--body-body-2-font-weight)] text-black tracking-[var(--body-body-2-letter-spacing)] relative w-fit font-body-body-2 text-[length:var(--body-body-2-font-size)] leading-[var(--body-body-2-line-height)] whitespace-nowrap [font-style:var(--body-body-2-font-style)]">
                    {transaction.cumulative}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col w-[117px] items-end relative">
              <div className="flex items-center justify-end gap-2.5 pr-[var(--corner-radius-none)] pl-[var(--corner-radius-none)] py-2.5 relative self-stretch w-full flex-[0_0_auto] bg-color-mode-surface-bg-icon-gray">
                <div className="relative w-fit mt-[-1.00px] font-body-body-2 font-[number:var(--body-body-2-font-weight)] text-black text-[length:var(--body-body-2-font-size)] text-left tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] whitespace-nowrap [direction:rtl] [font-style:var(--body-body-2-font-style)]">
                  قيمة العملية
                </div>
              </div>

              {transactionData.map((transaction, index) => (
                <div
                  key={index}
                  className="flex items-center justify-end gap-2.5 pr-[var(--corner-radius-none)] pl-[var(--corner-radius-none)] py-2.5 relative self-stretch w-full flex-[0_0_auto] border-b-[0.2px] [border-bottom-style:solid] border-color-mode-text-icons-t-placeholder"
                >
                  <div
                    className="mt-[-0.20px] font-[number:var(--body-body-2-font-weight)] text-black tracking-[var(--
body-body-2-letter-spacing)] relative w-fit font-body-body-2 text-[length:var(--body-body-2-font-size)] leading-[var(--body-body-2-line-height)] whitespace-nowrap [font-style:var(--body-body-2-font-style)]"
                  >
                    {transaction.amount}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col w-[214px] items-end relative">
              <div className="flex items-center justify-end gap-2.5 pr-[var(--corner-radius-none)] pl-[var(--corner-radius-none)] py-2.5 relative self-stretch w-full flex-[0_0_auto] bg-color-mode-surface-bg-icon-gray">
                <div className="relative w-fit mt-[-1.00px] font-body-body-2 font-[number:var(--body-body-2-font-weight)] text-black text-[length:var(--body-body-2-font-size)] text-left tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] whitespace-nowrap [direction:rtl] [font-style:var(--body-body-2-font-style)]">
                  تاريخ العملية
                </div>
              </div>

              {transactionData.map((transaction, index) => (
                <div
                  key={index}
                  className="flex items-center justify-end gap-2.5 pr-[var(--corner-radius-none)] pl-[var(--corner-radius-none)] py-2.5 relative self-stretch w-full flex-[0_0_auto] border-b-[0.2px] [border-bottom-style:solid] border-color-mode-text-icons-t-placeholder"
                >
                  <p className="relative w-fit mt-[-0.20px] font-body-body-2 font-[number:var(--body-body-2-font-weight)] text-black text-[length:var(--body-body-2-font-size)] text-left tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] whitespace-nowrap [direction:rtl] [font-style:var(--body-body-2-font-style)]">
                    {transaction.date}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-col w-40 items-end relative">
              <div className="flex items-center justify-end gap-2.5 pr-[var(--corner-radius-none)] pl-[var(--corner-radius-none)] py-2.5 relative self-stretch w-full flex-[0_0_auto] bg-color-mode-surface-bg-icon-gray">
                <div className="relative w-fit mt-[-1.00px] font-body-body-2 font-[number:var(--body-body-2-font-weight)] text-black text-[length:var(--body-body-2-font-size)] text-left tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] whitespace-nowrap [direction:rtl] [font-style:var(--body-body-2-font-style)]">
                  اسم السائق
                </div>
              </div>

              {transactionData.map((transaction, index) => (
                <div
                  key={index}
                  className="flex items-center justify-end gap-2.5 pr-[var(--corner-radius-none)] pl-[var(--corner-radius-none)] py-2.5 relative self-stretch w-full flex-[0_0_auto] border-b-[0.2px] [border-bottom-style:solid] border-color-mode-text-icons-t-placeholder"
                >
                  <div className="relative w-fit mt-[-0.20px] font-body-body-2 font-[number:var(--body-body-2-font-weight)] text-black text-[length:var(--body-body-2-font-size)] text-left tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] whitespace-nowrap [direction:rtl] [font-style:var(--body-body-2-font-style)]">
                    {transaction.driver}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col w-[123px] items-end relative">
              <div className="flex items-center justify-end gap-2.5 pr-[var(--corner-radius-none)] pl-[var(--corner-radius-none)] py-2.5 relative self-stretch w-full flex-[0_0_auto] bg-color-mode-surface-bg-icon-gray">
                <div className="relative w-fit mt-[-1.00px] font-body-body-2 font-[number:var(--body-body-2-font-weight)] text-black text-[length:var(--body-body-2-font-size)] text-left tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] whitespace-nowrap [direction:rtl] [font-style:var(--body-body-2-font-style)]">
                  نوع العملية
                </div>
              </div>

              {transactionData.map((transaction, index) => (
                <div
                  key={index}
                  className="flex items-center justify-end gap-2.5 pr-[var(--corner-radius-none)] pl-[var(--corner-radius-none)] py-2.5 relative self-stretch w-full flex-[0_0_auto] border-b-[0.2px] [border-bottom-style:solid] border-color-mode-text-icons-t-placeholder"
                >
                  <div className="relative w-fit mt-[-0.20px] font-body-body-2 font-[number:var(--body-body-2-font-weight)] text-black text-[length:var(--body-body-2-font-size)] text-left tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] whitespace-nowrap [direction:rtl] [font-style:var(--body-body-2-font-style)]">
                    {transaction.type}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col w-[133px] items-end relative">
              <div className="flex items-center justify-end gap-2.5 pr-[var(--corner-radius-none)] pl-[var(--corner-radius-none)] py-2.5 relative self-stretch w-full flex-[0_0_auto] bg-color-mode-surface-bg-icon-gray">
                <div className="relative w-fit mt-[-1.00px] font-body-body-2 font-[number:var(--body-body-2-font-weight)] text-black text-[length:var(--body-body-2-font-size)] text-left tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] whitespace-nowrap [direction:rtl] [font-style:var(--body-body-2-font-style)]">
                  رقم العملية
                </div>
              </div>

              {transactionData.map((transaction, index) => (
                <div
                  key={index}
                  className="flex items-center justify-end gap-2.5 pr-[var(--corner-radius-none)] pl-[var(--corner-radius-none)] py-2.5 relative self-stretch w-full flex-[0_0_auto] border-b-[0.2px] [border-bottom-style:solid] border-color-mode-text-icons-t-placeholder"
                >
                  <div className="relative w-fit mt-[-0.20px] font-body-body-2 font-[number:var(--body-body-2-font-weight)] text-black text-[length:var(--body-body-2-font-size)] tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] whitespace-nowrap [font-style:var(--body-body-2-font-style)]">
                    {transaction.id}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <nav
          className="flex items-center justify-around gap-[46px] relative self-stretch w-full flex-[0_0_auto]"
          aria-label="Pagination"
        >
          <div className="inline-flex items-start gap-2 relative flex-[0_0_auto]">
            <button
              onClick={() => setCurrentPage(Math.min(currentPage + 1, 20))}
              className="flex w-[72px] h-8 items-center justify-center gap-2 px-2 py-0 relative bg-color-mode-surface-bg-screen rounded overflow-hidden border-[0.5px] border-solid border-color-mode-text-icons-t-placeholder hover:bg-gray-50 transition-colors"
              disabled={currentPage === 20}
            >
              <img
                className="relative w-4 h-4"
                alt="Icon arrow right"
                src="/img/icon-16-arrow-right.svg"
              />

              <div className="relative w-fit font-body-body-2 font-[number:var(--body-body-2-font-weight)] text-color-mode-text-icons-t-sec text-[length:var(--body-body-2-font-size)] text-left tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] whitespace-nowrap [direction:rtl] [font-style:var(--body-body-2-font-style)]">
                التالي
              </div>
            </button>

            {pageNumbers.map((page, index) => (
              <button
                key={index}
                onClick={() => typeof page === "number" && setCurrentPage(page)}
                disabled={typeof page !== "number"}
                className={`flex flex-col w-8 h-8 items-center justify-center gap-2.5 px-2 py-0 relative rounded overflow-hidden transition-colors ${
                  page === currentPage
                    ? "bg-color-mode-surface-primary-blue"
                    : "bg-color-mode-surface-bg-screen border-[0.5px] border-solid border-color-mode-text-icons-t-placeholder hover:bg-gray-50"
                }`}
              >
                <div className="flex flex-col w-[22px] h-[22px] items-center justify-center gap-2.5 p-2.5 relative ml-[-3.00px] mr-[-3.00px] rounded-sm">
                  <div
                    className={`mt-[-11.00px] mb-[-9.00px] ${page === "..." ? "ml-[-5.00px] mr-[-5.00px]" : page === 1 ? "ml-[-2.00px] mr-[-2.00px]" : page === 2 ? "ml-[-2.50px] mr-[-2.50px]" : page === 3 ? "ml-[-2.50px] mr-[-2.50px]" : page === 4 ? "ml-[-3.00px] mr-[-3.00px]" : page === 5 ? "ml-[-3.00px] mr-[-3.00px]" : page === 6 ? "ml-[-3.00px] mr-[-3.00px]" : page === 7 ? "ml-[-2.00px] mr-[-2.00px]" : "ml-[-6.50px] mr-[-6.50px]"} font-[number:${page === currentPage ? "var(--subtitle-subtitle-3-font-weight)" : "var(--body-body-2-font-weight)"}] text-${page === currentPage ? "color-mode-text-icons-t-btn-negative" : "color-mode-text-icons-t-sec"} tracking-[${page === currentPage ? "var(--subtitle-subtitle-3-letter-spacing)" : "var(--body-body-2-letter-spacing)"}] relative w-fit font-${page === currentPage ? "subtitle-subtitle-3" : "body-body-2"} text-[length:${page === currentPage ? "var(--subtitle-subtitle-3-font-size)" : "var(--body-body-2-font-size)"}] leading-[${page === currentPage ? "var(--subtitle-subtitle-3-line-height)" : "var(--body-body-2-line-height)"}] whitespace-nowrap [font-style:${page === currentPage ? "var(--subtitle-subtitle-3-font-style)" : "var(--body-body-2-font-style)"}]`}
                  >
                    {page}
                  </div>
                </div>
              </button>
            ))}

            <button
              onClick={() => setCurrentPage(Math.max(currentPage - 1, 1))}
              className="flex w-[72px] h-8 items-center justify-center gap-[5px] px-2 py-0 relative bg-color-mode-surface-bg-screen rounded overflow-hidden border-[0.5px] border-solid border-color-mode-text-icons-t-placeholder hover:bg-gray-50 transition-colors"
              disabled={currentPage === 1}
            >
              <div className="relative w-fit ml-[-3.50px] font-body-body-2 font-[number:var(--body-body-2-font-weight)] text-color-mode-text-icons-t-sec text-[length:var(--body-body-2-font-size)] text-left tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] whitespace-nowrap [direction:rtl] [font-style:var(--body-body-2-font-style)]">
                السابق
              </div>

              <img
                className="mr-[-3.50px] relative w-4 h-4"
                alt="Icon arrow left"
                src="/img/icon-16-arrow-left.svg"
              />
            </button>
          </div>
        </nav>
      </div>
    </section>
  );
};
