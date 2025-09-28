import React, { useState } from "react";
import { Download } from "lucide-react";

export const RequestHistorySection = (): JSX.Element => {
  const [selectedTimeFilter, setSelectedTimeFilter] = useState("اخر 12 شهر");
  const [currentPage, setCurrentPage] = useState(3);

  const timeFilters = ["اخر اسبوع", "اخر 30 يوم", "اخر 6 شهور", "اخر 12 شهر"];

  const requestData = [
    {
      id: "21A254",
      status: "مكتمل",
      statusType: "completed",
      amount: "1500",
      date: "21 فبراير 2025 - 5:05 ص",
    },
    {
      id: "21A254",
      status: "مكتمل",
      statusType: "completed",
      amount: "1500",
      date: "21 فبراير 2025 - 5:05 ص",
    },
    {
      id: "21A254",
      status: "جاري المراجعة",
      statusType: "reviewing",
      amount: "1500",
      date: "21 فبراير 2025 - 5:05 ص",
    },
    {
      id: "21A254",
      status: "ملغي",
      statusType: "cancelled",
      amount: "1500",
      date: "21 فبراير 2025 - 5:05 ص",
    },
    {
      id: "21A254",
      status: "مكتمل",
      statusType: "completed",
      amount: "1500",
      date: "21 فبراير 2025 - 5:05 ص",
    },
    {
      id: "21A254",
      status: "مكتمل",
      statusType: "completed",
      amount: "1500",
      date: "21 فبراير 2025 - 5:05 ص",
    },
    {
      id: "21A254",
      status: "مكتمل",
      statusType: "completed",
      amount: "1500",
      date: "21 فبراير 2025 - 5:05 ص",
    },
    {
      id: "21A254",
      status: "مكتمل",
      statusType: "completed",
      amount: "1500",
      date: "21 فبراير 2025 - 5:05 ص",
    },
    {
      id: "21A254",
      status: "مكتمل",
      statusType: "completed",
      amount: "1500",
      date: "21 فبراير 2025 - 5:05 ص",
    },
    {
      id: "21A254",
      status: "مكتمل",
      statusType: "completed",
      amount: "1500",
      date: "21 فبراير 2025 - 5:05 ص",
    },
  ];

  const paginationNumbers = [1, 2, 3, 4, 5, 6, 7, "...", 20];

  const getStatusBadge = (status: string, statusType: string) => {
    const baseClasses =
      "inline-flex items-center justify-center gap-[var(--corner-radius-extra-small)] pt-[var(--corner-radius-small)] pb-[var(--corner-radius-small)] px-2.5 relative flex-[0_0_auto] rounded-[var(--corner-radius-small)]";

    switch (statusType) {
      case "completed":
        return (
          <div className={`${baseClasses} bg-color-mode-surface-bg-icon-gray`}>
            <div className="relative w-[41px] h-4 mt-[-1.00px] font-[number:var(--subtitle-subtitle-3-font-weight)] text-color-mode-text-icons-t-sec text-[length:var(--subtitle-subtitle-3-font-size)] tracking-[var(--subtitle-subtitle-3-letter-spacing)] leading-[var(--subtitle-subtitle-3-line-height)] [direction:rtl] font-subtitle-subtitle-3 whitespace-nowrap [font-style:var(--subtitle-subtitle-3-font-style)]">
              {status}
            </div>
            <div className="relative w-1.5 h-1.5 bg-color-mode-text-icons-t-sec rounded-[3px]" />
          </div>
        );
      case "reviewing":
        return (
          <div
            className={`${baseClasses} bg-color-mode-surface-bg-orange-light w-[115px] mt-[-2.00px] mb-[-2.00px]`}
          >
            <div className="relative w-fit mt-[-1.00px] font-[number:var(--subtitle-subtitle-3-font-weight)] text-color-mode-text-icons-t-orange text-[length:var(--subtitle-subtitle-3-font-size)] tracking-[var(--subtitle-subtitle-3-letter-spacing)] leading-[var(--subtitle-subtitle-3-line-height)] [direction:rtl] font-subtitle-subtitle-3 whitespace-nowrap [font-style:var(--subtitle-subtitle-3-font-style)]">
              {status}
            </div>
            <div className="bg-color-mode-text-icons-t-orange relative w-1.5 h-1.5 rounded-[3px]" />
          </div>
        );
      case "cancelled":
        return (
          <div
            className={`${baseClasses} bg-color-mode-surface-red-bg mt-[-2.00px] mb-[-2.00px]`}
          >
            <div className="w-fit font-[number:var(--subtitle-subtitle-3-font-weight)] text-color-mode-text-icons-t-red tracking-[var(--subtitle-subtitle-3-letter-spacing)] whitespace-nowrap [direction:rtl] relative mt-[-1.00px] font-subtitle-subtitle-3 text-[length:var(--subtitle-subtitle-3-font-size)] leading-[var(--subtitle-subtitle-3-line-height)] [font-style:var(--subtitle-subtitle-3-font-style)]">
              {status}
            </div>
            <div className="bg-color-mode-text-icons-t-red relative w-1.5 h-1.5 rounded-[3px]" />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section className="h-[689px] items-start gap-[var(--corner-radius-extra-large)] pt-[var(--corner-radius-large)] pr-[var(--corner-radius-large)] pb-[var(--corner-radius-large)] pl-[var(--corner-radius-large)] self-stretch w-full bg-color-mode-surface-bg-screen rounded-[var(--corner-radius-large)] border-[0.3px] border-solid border-color-mode-text-icons-t-placeholder flex flex-col relative">
      <header className="flex flex-col items-end gap-[var(--corner-radius-extra-large)] relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
          <button className="inline-flex items-center gap-[var(--corner-radius-medium)] relative flex-[0_0_auto]">
            <div className="relative self-stretch w-[79px] rounded-[5px] border-[0.5px] border-solid border-color-mode-text-icons-t-placeholder flex items-center justify-center gap-1">
              <span className="font-[number:var(--subtitle-subtitle-3-font-weight)] text-color-mode-text-icons-t-sec text-[length:var(--subtitle-subtitle-3-font-size)] text-left tracking-[var(--subtitle-subtitle-3-letter-spacing)] leading-[var(--subtitle-subtitle-3-line-height)] [direction:rtl] font-subtitle-subtitle-3 whitespace-nowrap [font-style:var(--subtitle-subtitle-3-font-style)]">
                تصدير
              </span>
              <Download className="w-4 h-4 text-gray-500" />
            </div>
          </button>

          <div className="inline-flex items-center justify-end gap-2.5 relative flex-[0_0_auto]">
            <nav
              className="inline-flex items-center gap-[11px] relative flex-[0_0_auto]"
              role="tablist"
              aria-label="Time filter options"
            >
              <button
                className="w-[35px] bg-color-mode-surface-bg-icon-gray border-[0.2px] border-solid border-color-mode-surface-bg-screen flex flex-col h-[30px] items-center justify-center gap-2.5 p-4 relative rounded-[5px]"
                aria-label="Filter options"
              >
                <div className="flex w-[29.17px] justify-center gap-[12.5px] mt-[-11.00px] mb-[-11.00px] ml-[-13.08px] mr-[-13.08px] items-center relative flex-[0_0_auto]">
                  <div className="relative w-5 h-5 aspect-[1]">
                    <img
                      className="absolute w-[33.33%] h-[16.67%] top-[5.83%] left-[30.83%]"
                      alt=""
                      src="/img/vector.svg"
                    />

                    <img
                      className="absolute w-[75.00%] h-[75.00%] top-[14.17%] left-[10.00%]"
                      alt=""
                      src="/img/vector-1.svg"
                    />

                    <img
                      className="absolute w-[75.00%] h-0 top-[39.17%] left-[10.00%] object-cover"
                      alt=""
                      src="/img/vector-2.svg"
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
                  key={filter}
                  onClick={() => setSelectedTimeFilter(filter)}
                  className={`flex flex-col w-[100.98px] h-[30px] items-center justify-center gap-2.5 p-4 relative rounded-[5px] border-[0.2px] border-solid ${
                    selectedTimeFilter === filter
                      ? "bg-basewhite border-color-mode-text-icons-t-blue"
                      : "bg-color-mode-surface-bg-screen border-color-mode-text-icons-t-placeholder"
                  }`}
                  role="tab"
                  aria-selected={selectedTimeFilter === filter}
                >
                  <div className="flex w-[126px] items-center justify-center gap-[15px] relative flex-[0_0_auto] mt-[-12.00px] mb-[-12.00px] ml-[-28.51px] mr-[-28.51px]">
                    <div
                      className={`relative flex items-center justify-center w-fit mt-[-1.00px] font-[number:var(--body-body-2-font-weight)] text-[length:var(--body-body-2-font-size)] tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] [direction:rtl] font-body-body-2 whitespace-nowrap [font-style:var(--body-body-2-font-style)] ${
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
            </nav>

            <div className="inline-flex gap-1.5 items-center relative flex-[0_0_auto]">
              <h1 className="relative w-[162px] h-5 mt-[-1.00px] font-[number:var(--subtitle-subtitle-2-font-weight)] text-color-mode-text-icons-t-sec text-[length:var(--subtitle-subtitle-2-font-size)] tracking-[var(--subtitle-subtitle-2-letter-spacing)] leading-[var(--subtitle-subtitle-2-line-height)] [direction:rtl] font-subtitle-subtitle-2 whitespace-nowrap [font-style:var(--subtitle-subtitle-2-font-style)]">
                سجل طلبات الاسترداد
              </h1>

              <img
                className="relative w-[18px] h-[18px] aspect-[1]"
                alt=""
                src="/img/side-icons-3.svg"
              />
            </div>
          </div>
        </div>
      </header>

      <main className="flex flex-col items-start gap-[var(--corner-radius-large)] relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex items-start justify-end relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex-col w-[113px] items-end flex relative">
            <div className="relative self-stretch w-full h-[42px] bg-color-mode-surface-bg-icon-gray" />

            {requestData.map((_, index) => (
              <div
                key={index}
                className="flex h-[42px] items-center justify-end gap-1 pl-[var(--corner-radius-none)] pr-[11px] py-2.5 relative self-stretch w-full border-b-[0.2px] [border-bottom-style:solid] border-color-mode-text-icons-t-placeholder"
              >
                <div className="flex items-center gap-2">
                  <span className="font-[number:var(--body-body-2-font-weight)] text-color-mode-text-icons-t-sec text-[length:var(--body-body-2-font-size)] text-left tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] [direction:rtl] font-body-body-2 whitespace-nowrap [font-style:var(--body-body-2-font-style)]">
                    تصدير
                  </span>
                  <Download className="w-4 h-4 text-gray-500" />
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-end relative flex-1 grow">
            <div className="flex items-center justify-end gap-2.5 pr-[var(--corner-radius-none)] pl-[var(--corner-radius-none)] py-2.5 relative self-stretch w-full flex-[0_0_auto] bg-color-mode-surface-bg-icon-gray">
              <div className="inline-flex gap-1.5 items-center relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] font-[number:var(--body-body-2-font-weight)] text-black text-[length:var(--body-body-2-font-size)] text-left tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] [direction:rtl] font-body-body-2 whitespace-nowrap [font-style:var(--body-body-2-font-style)]">
                  حالة الطلب
                </div>

                <img
                  className="w-3.5 h-3.5 relative aspect-[1]"
                  alt="Sort icon"
                  src="/img/side-icons-4.svg"
                />
              </div>
            </div>

            {requestData.map((request, index) => (
              <div
                key={index}
                className="flex h-[42px] items-center justify-end gap-2.5 pt-[var(--corner-radius-extra-small)] pr-[var(--corner-radius-none)] pb-[var(--corner-radius-extra-small)] pl-[var(--corner-radius-none)] relative self-stretch w-full border-b-[0.2px] [border-bottom-style:solid] border-color-mode-text-icons-t-placeholder"
              >
                {getStatusBadge(request.status, request.statusType)}
              </div>
            ))}
          </div>

          <div className="w-[233px] items-end flex flex-col relative">
            <div className="flex items-center justify-end gap-2.5 pr-[var(--corner-radius-none)] pl-[var(--corner-radius-none)] py-2.5 relative self-stretch w-full flex-[0_0_auto] bg-color-mode-surface-bg-icon-gray">
              <div className="relative w-fit mt-[-1.00px] font-[number:var(--body-body-2-font-weight)] text-black text-[length:var(--body-body-2-font-size)] text-left tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] [direction:rtl] font-body-body-2 whitespace-nowrap [font-style:var(--body-body-2-font-style)]">
                قيمة الطلب (ر.س)
              </div>
            </div>

            {requestData.map((request, index) => (
              <div
                key={index}
                className="flex items-center justify-end gap-2.5 pr-[var(--corner-radius-none)] pl-[var(--corner-radius-none)] py-2.5 relative self-stretch w-full flex-[0_0_auto] border-b-[0.2px] [border-bottom-style:solid] border-color-mode-text-icons-t-placeholder"
              >
                <div className="mt-[-0.20px] font-[number:var(--body-body-2-font-weight)] text-black tracking-[var(--body-body-2-letter-spacing)] relative w-fit font-body-body-2 text-[length:var(--body-body-2-font-size)] leading-[var(--body-body-2-line-height)] whitespace-nowrap [font-style:var(--body-body-2-font-style)]">
                  {request.amount}
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col w-[290px] items-end relative">
            <div className="flex items-center justify-end gap-2.5 pr-[var(--corner-radius-none)] pl-[var(--corner-radius-none)] py-2.5 relative self-stretch w-full flex-[0_0_auto] bg-color-mode-surface-bg-icon-gray">
              <div className="relative w-fit mt-[-1.00px] font-[number:var(--body-body-2-font-weight)] text-black text-[length:var(--body-body-2-font-size)] text-left tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] [direction:rtl] font-body-body-2 whitespace-nowrap [font-style:var(--body-body-2-font-style)]">
                تاريخ الطلب
              </div>
            </div>

            {requestData.map((request, index) => (
              <div
                key={index}
                className="flex items-center justify-end gap-2.5 pr-[var(--corner-radius-none)] pl-[var(--corner-radius-none)] py-2.5 relative self-stretch w-full flex-[0_0_auto] border-b-[0.2px] [border-bottom-style:solid] border-color-mode-text-icons-t-placeholder"
              >
                <time className="relative w-fit mt-[-0.20px] font-body-body-2 font-[number:var(--body-body-2-font-weight)] text-black text-[length:var(--body-body-2-font-size)] text-left tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] whitespace-nowrap [direction:rtl] [font-style:var(--body-body-2-font-style)]">
                  {request.date}
                </time>
              </div>
            ))}
          </div>

          <div className="flex flex-col w-[187px] items-end relative">
            <div className="flex items-center justify-end gap-2.5 pr-[var(--corner-radius-none)] pl-[var(--corner-radius-none)] py-2.5 relative self-stretch w-full flex-[0_0_auto] bg-color-mode-surface-bg-icon-gray">
              <div className="relative w-fit mt-[-1.00px] font-[number:var(--body-body-2-font-weight)] text-black text-[length:var(--body-body-2-font-size)] text-left tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] [direction:rtl] font-body-body-2 whitespace-nowrap [font-style:var(--body-body-2-font-style)]">
                رقم الطلب
              </div>
            </div>

            {requestData.map((request, index) => (
              <div
                key={index}
                className="flex items-center justify-end gap-2.5 pr-[var(--corner-radius-none)] pl-[var(--corner-radius-none)] py-2.5 relative self-stretch w-full flex-[0_0_auto] border-b-[0.2px] [border-bottom-style:solid] border-color-mode-text-icons-t-placeholder"
              >
                <div className="relative w-fit mt-[-0.20px] font-body-body-2 font-[number:var(--body-body-2-font-weight)] text-black text-[length:var(--body-body-2-font-size)] tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] whitespace-nowrap [font-style:var(--body-body-2-font-style)]">
                  {request.id}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <nav
        className="flex items-center justify-around gap-[46px] relative self-stretch w-full flex-[0_0_auto]"
        aria-label="Pagination"
      >
        <div className="inline-flex items-start gap-2 relative flex-[0_0_auto]">
          <button
            className="flex w-[72px] h-8 items-center justify-center gap-2 px-2 py-0 relative bg-color-mode-surface-bg-screen rounded overflow-hidden border-[0.5px] border-solid border-color-mode-text-icons-t-placeholder"
            aria-label="Next page"
          >
            <img
              className="relative w-4 h-4"
              alt=""
              src="/img/icon-16-arrow-right.svg"
            />

            <div className="relative w-fit font-[number:var(--body-body-2-font-weight)] text-color-mode-text-icons-t-sec text-[length:var(--body-body-2-font-size)] text-left tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] [direction:rtl] font-body-body-2 whitespace-nowrap [font-style:var(--body-body-2-font-style)]">
              التالي
            </div>
          </button>

          {paginationNumbers.map((pageNum, index) => (
            <button
              key={index}
              onClick={() =>
                typeof pageNum === "number" && setCurrentPage(pageNum)
              }
              disabled={pageNum === "..."}
              className={`flex flex-col w-8 h-8 items-center justify-center gap-2.5 px-2 py-0 relative rounded overflow-hidden ${
                pageNum === currentPage
                  ? "bg-color-mode-surface-primary-blue"
                  : "bg-color-mode-surface-bg-screen border-[0.5px] border-solid border-color-mode-text-icons-t-placeholder"
              } ${pageNum === "..." ? "cursor-default" : "cursor-pointer"}`}
              aria-label={
                pageNum === "..." ? undefined : `Go to page ${pageNum}`
              }
              aria-current={pageNum === currentPage ? "page" : undefined}
            >
              <div className="flex flex-col w-[22px] h-[22px] items-center justify-center gap-2.5 p-2.5 relative ml-[-3.00px] mr-[-3.00px] rounded-sm">
                <div
                  className={`relative w-fit mt-[-11.00px] mb-[-9.00px] tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] whitespace-nowrap ${
                    pageNum === currentPage
                      ? "font-[number:var(--subtitle-subtitle-3-font-weight)] text-color-mode-text-icons-t-btn-negative font-subtitle-subtitle-3 text-[length:var(--subtitle-subtitle-3-font-size)] [font-style:var(--subtitle-subtitle-3-font-style)]"
                      : "font-[number:var(--body-body-2-font-weight)] text-color-mode-text-icons-t-sec font-body-body-2 text-[length:var(--body-body-2-font-size)] [font-style:var(--body-body-2-font-style)]"
                  } ${
                    pageNum === 20
                      ? "ml-[-6.50px] mr-[-6.50px]"
                      : pageNum === "..."
                        ? "ml-[-5.00px] mr-[-5.00px]"
                        : pageNum === 7
                          ? "ml-[-2.00px] mr-[-2.00px]"
                          : pageNum === 6
                            ? "ml-[-3.00px] mr-[-3.00px]"
                            : pageNum === 5
                              ? "ml-[-3.00px] mr-[-3.00px]"
                              : pageNum === 4
                                ? "ml-[-3.00px] mr-[-3.00px]"
                                : pageNum === 3
                                  ? "ml-[-2.50px] mr-[-2.50px]"
                                  : pageNum === 2
                                    ? "ml-[-2.50px] mr-[-2.50px]"
                                    : pageNum === 1
                                      ? "ml-[-2.00px] mr-[-2.00px]"
                                      : ""
                  }`}
                >
                  {pageNum}
                </div>
              </div>
            </button>
          ))}

          <button
            className="flex w-[72px] h-8 items-center justify-center gap-[5px] px-2 py-0 relative bg-color-mode-surface-bg-screen rounded overflow-hidden border-[0.5px] border-solid border-color-mode-text-icons-t-placeholder"
            aria-label="Previous page"
          >
            <div className="relative w-fit ml-[-3.50px] font-[number:var(--body-body-2-font-weight)] text-color-mode-text-icons-t-sec text-[length:var(--body-body-2-font-size)] text-left tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] [direction:rtl] font-body-body-2 whitespace-nowrap [font-style:var(--body-body-2-font-style)]">
              السابق
            </div>

            <img
              className="mr-[-3.50px] relative w-4 h-4"
              alt=""
              src="/img/icon-16-arrow-left.svg"
            />
          </button>
        </div>
      </nav>
    </section>
  );
};
