import React, { useState } from "react";
import { Table } from "../../../../components/shared/Table/Table";
import { Pagination } from "../../../../components/shared/Pagination/Pagination";
import {
  transactionData,
  fuelData,
  timeFilters,
} from "../../../../constants/data";

export const TransactionListSection = (): JSX.Element => {
  const [selectedTimeFilter, setSelectedTimeFilter] = useState("اخر 12 شهر");
  const [currentPage, setCurrentPage] = useState(3);

  const pageNumbers = [1, 2, 3, 4, 5, 6, 7, "...", 20];

  // Define table columns for transactions
  const transactionColumns = [
    {
      key: "id",
      label: "رقم العملية",
      width: "w-[133px]",
    },
    {
      key: "type",
      label: "نوع العملية",
      width: "w-[123px]",
    },
    {
      key: "driver",
      label: "اسم السائق",
      width: "w-40",
    },
    {
      key: "date",
      label: "تاريخ العملية",
      width: "w-[214px]",
    },
    {
      key: "amount",
      label: "قيمة العملية",
      width: "w-[117px]",
    },
    {
      key: "cumulative",
      label: "تراكمي العمليات (ر.س)",
      width: "w-[175px]",
    },
  ];

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
                        className={`relative ${
                          index === 2 ? "self-stretch" : "w-[66px]"
                        } mt-[-3px] font-caption-caption-2 font-[number:var(--caption-caption-2-font-weight)] ${
                          fuel.color
                        } text-[length:var(--caption-caption-2-font-size)] text-center tracking-[var(--caption-caption-2-letter-spacing)] leading-[var(--caption-caption-2-line-height)] [direction:rtl] [font-style:var(--caption-caption-2-font-style)]`}
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
          <Table
            columns={transactionColumns}
            data={transactionData}
            className="relative self-stretch w-full flex-[0_0_auto]"
          />
        </div>

        <Pagination
          currentPage={currentPage}
          totalPages={20}
          onPageChange={setCurrentPage}
        />
      </div>
    </section>
  );
};
