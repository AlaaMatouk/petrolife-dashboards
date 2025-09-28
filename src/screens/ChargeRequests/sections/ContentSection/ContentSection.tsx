import React from "react";
import { Download } from "lucide-react";

interface TableRow {
  id: string;
  status: "completed" | "rejected";
  date: string;
  shippingValue: string;
  oldBalance: string;
  orderType: string;
  orderNumber: string;
}

const tableData: TableRow[] = [
  {
    id: "1",
    status: "completed",
    date: "21 فبراير 2025 - 5:05 ص",
    shippingValue: "20",
    oldBalance: "1500",
    orderType: "آلي",
    orderNumber: "21A254",
  },
  {
    id: "2",
    status: "completed",
    date: "21 فبراير 2025 - 5:05 ص",
    shippingValue: "20",
    oldBalance: "1500",
    orderType: "آلي",
    orderNumber: "21A254",
  },
  {
    id: "3",
    status: "rejected",
    date: "21 فبراير 2025 - 5:05 ص",
    shippingValue: "20",
    oldBalance: "1500",
    orderType: "يدوي",
    orderNumber: "21A254",
  },
  {
    id: "4",
    status: "completed",
    date: "21 فبراير 2025 - 5:05 ص",
    shippingValue: "20",
    oldBalance: "1500",
    orderType: "آلي",
    orderNumber: "21A254",
  },
  {
    id: "5",
    status: "completed",
    date: "21 فبراير 2025 - 5:05 ص",
    shippingValue: "20",
    oldBalance: "1500",
    orderType: "آلي",
    orderNumber: "21A254",
  },
  {
    id: "6",
    status: "completed",
    date: "21 فبراير 2025 - 5:05 ص",
    shippingValue: "20",
    oldBalance: "1500",
    orderType: "آلي",
    orderNumber: "21A254",
  },
  {
    id: "7",
    status: "completed",
    date: "21 فبراير 2025 - 5:05 ص",
    shippingValue: "20",
    oldBalance: "1500",
    orderType: "آلي",
    orderNumber: "21A254",
  },
  {
    id: "8",
    status: "completed",
    date: "21 فبراير 2025 - 5:05 ص",
    shippingValue: "20",
    oldBalance: "1500",
    orderType: "آلي",
    orderNumber: "21A254",
  },
  {
    id: "9",
    status: "completed",
    date: "21 فبراير 2025 - 5:05 ص",
    shippingValue: "20",
    oldBalance: "1500",
    orderType: "آلي",
    orderNumber: "21A254",
  },
  {
    id: "10",
    status: "completed",
    date: "21 فبراير 2025 - 5:05 ص",
    shippingValue: "20",
    oldBalance: "1500",
    orderType: "آلي",
    orderNumber: "21A254",
  },
];

export const ContentSection = (): JSX.Element => {
  return (
    <section
      className="flex flex-col items-start gap-[var(--corner-radius-large)] relative self-stretch w-full flex-[0_0_auto]"
      role="main"
      aria-label="جدول البيانات"
    >
      <div className="flex items-start justify-end relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex flex-col items-end relative flex-1 grow">
          <div className="relative self-stretch w-full h-[42px] bg-color-mode-surface-bg-icon-gray" />

          {tableData.map((row) => (
            <div
              key={row.id}
              className="flex h-[42px] items-center justify-end gap-1 pl-[var(--corner-radius-none)] pr-[11px] py-2.5 relative self-stretch w-full border-b-[0.2px] [border-bottom-style:solid] border-color-mode-text-icons-t-placeholder"
            >
              <div className="flex items-center gap-2">
                <span className="font-[number:var(--body-body-2-font-weight)] text-color-mode-text-icons-t-sec text-[length:var(--body-body-2-font-size)] text-left tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] [direction:rtl] relative font-body-body-2 whitespace-nowrap [font-style:var(--body-body-2-font-style)]">
                  تصدير
                </span>
                <Download className="w-4 h-4 text-gray-500" />
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col w-[149px] items-end relative">
          <header className="flex items-center justify-end gap-2.5 pr-[var(--corner-radius-none)] pl-[var(--corner-radius-none)] py-2.5 relative self-stretch w-full flex-[0_0_auto] bg-color-mode-surface-bg-icon-gray">
            <div className="inline-flex items-center gap-1.5 relative flex-[0_0_auto]">
              <h2 className="w-fit mt-[-1.00px] font-[number:var(--body-body-2-font-weight)] text-black text-[length:var(--body-body-2-font-size)] text-left tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] [direction:rtl] relative font-body-body-2 whitespace-nowrap [font-style:var(--body-body-2-font-style)]">
                حالة الطلب
              </h2>

              <img
                className="relative w-3.5 h-3.5 aspect-[1]"
                alt="أيقونة الترتيب"
                src="/img/side-icons-1.svg"
              />
            </div>
          </header>

          {tableData.map((row) => (
            <div
              key={row.id}
              className="flex h-[42px] items-center justify-end gap-2.5 pt-[var(--corner-radius-extra-small)] pr-[var(--corner-radius-none)] pb-[var(--corner-radius-extra-small)] pl-[var(--corner-radius-none)] relative self-stretch w-full border-b-[0.2px] [border-bottom-style:solid] border-color-mode-text-icons-t-placeholder"
            >
              <div
                className={`inline-flex items-center justify-center gap-[var(--corner-radius-extra-small)] pt-[var(--corner-radius-small)] pb-[var(--corner-radius-small)] px-2.5 relative flex-[0_0_auto] ${row.status === "rejected" ? "mt-[-2.00px] mb-[-2.00px] bg-color-mode-surface-red-bg" : "bg-color-mode-surface-bg-icon-gray"} rounded-[var(--corner-radius-small)]`}
              >
                <div
                  className={`${row.status === "rejected" ? "w-fit" : "w-[41px] h-4"} mt-[-1.00px] font-[number:var(--subtitle-subtitle-3-font-weight)] ${row.status === "rejected" ? "text-color-mode-text-icons-t-red" : "text-color-mode-text-icons-t-sec"} text-[length:var(--subtitle-subtitle-3-font-size)] tracking-[var(--subtitle-subtitle-3-letter-spacing)] leading-[var(--subtitle-subtitle-3-line-height)] [direction:rtl] relative font-subtitle-subtitle-3 whitespace-nowrap [font-style:var(--subtitle-subtitle-3-font-style)]`}
                >
                  {row.status === "rejected" ? "مرفوض" : "مكتمل"}
                </div>

                <div
                  className={`relative w-1.5 h-1.5 ${row.status === "rejected" ? "bg-color-mode-text-icons-t-red" : "bg-color-mode-text-icons-t-sec"} rounded-[3px]`}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col w-[217px] items-end relative">
          <header className="flex items-center justify-end gap-2.5 pr-[var(--corner-radius-none)] pl-[var(--corner-radius-none)] py-2.5 relative self-stretch w-full flex-[0_0_auto] bg-color-mode-surface-bg-icon-gray">
            <h2 className="w-fit mt-[-1.00px] font-[number:var(--body-body-2-font-weight)] text-black text-[length:var(--body-body-2-font-size)] text-left tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] [direction:rtl] relative font-body-body-2 whitespace-nowrap [font-style:var(--body-body-2-font-style)]">
              تاريخ الطلب
            </h2>
          </header>

          {tableData.map((row) => (
            <div
              key={row.id}
              className="flex items-center justify-end gap-2.5 pr-[var(--corner-radius-none)] pl-[var(--corner-radius-none)] py-2.5 relative self-stretch w-full flex-[0_0_auto] border-b-[0.2px] [border-bottom-style:solid] border-color-mode-text-icons-t-placeholder"
            >
              <time className="relative w-fit mt-[-0.20px] font-body-body-2 font-[number:var(--body-body-2-font-weight)] text-black text-[length:var(--body-body-2-font-size)] text-left tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] whitespace-nowrap [direction:rtl] [font-style:var(--body-body-2-font-style)]">
                {row.date}
              </time>
            </div>
          ))}
        </div>

        <div className="flex flex-col w-[170px] items-end relative">
          <header className="flex items-center justify-end gap-2.5 pr-[var(--corner-radius-none)] pl-[var(--corner-radius-none)] py-2.5 relative self-stretch w-full flex-[0_0_auto] bg-color-mode-surface-bg-icon-gray">
            <h2 className="w-fit mt-[-1.00px] font-[number:var(--body-body-2-font-weight)] text-black text-[length:var(--body-body-2-font-size)] text-left tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] [direction:rtl] relative font-body-body-2 whitespace-nowrap [font-style:var(--body-body-2-font-style)]">
              قيمة طلب الشحن (ر.س)
            </h2>
          </header>

          {tableData.map((row) => (
            <div
              key={row.id}
              className="flex items-center justify-end gap-2.5 pr-[var(--corner-radius-none)] pl-[var(--corner-radius-none)] py-2.5 relative self-stretch w-full flex-[0_0_auto] border-b-[0.2px] [border-bottom-style:solid] border-color-mode-text-icons-t-placeholder"
            >
              <div className="mt-[-0.20px] font-[number:var(--body-body-2-font-weight)] text-black tracking-[var(--body-body-2-letter-spacing)] relative w-fit font-body-body-2 text-[length:var(--body-body-2-font-size)] leading-[var(--body-body-2-line-height)] whitespace-nowrap [font-style:var(--body-body-2-font-style)]">
                {row.shippingValue}
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col w-[168px] items-end relative">
          <header className="flex items-center justify-end gap-2.5 pr-[var(--corner-radius-none)] pl-[var(--corner-radius-none)] py-2.5 relative self-stretch w-full flex-[0_0_auto] bg-color-mode-surface-bg-icon-gray">
            <h2 className="w-fit mt-[-1.00px] font-[number:var(--body-body-2-font-weight)] text-black text-[length:var(--body-body-2-font-size)] text-left tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] [direction:rtl] relative font-body-body-2 whitespace-nowrap [font-style:var(--body-body-2-font-style)]">
              الرصيد القديم (ر.س)
            </h2>
          </header>

          {tableData.map((row) => (
            <div
              key={row.id}
              className="flex items-center justify-end gap-2.5 pr-[var(--corner-radius-none)] pl-[var(--corner-radius-none)] py-2.5 relative self-stretch w-full flex-[0_0_auto] border-b-[0.2px] [border-bottom-style:solid] border-color-mode-text-icons-t-placeholder"
            >
              <div className="mt-[-0.20px] font-[number:var(--body-body-2-font-weight)] text-black tracking-[var(--body-body-2-letter-spacing)] relative w-fit font-body-body-2 text-[length:var(--body-body-2-font-size)] leading-[var(--body-body-2-line-height)] whitespace-nowrap [font-style:var(--body-body-2-font-style)]">
                {row.oldBalance}
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col w-[102px] items-end relative">
          <header className="flex items-center justify-end gap-2.5 pr-[var(--corner-radius-none)] pl-[var(--corner-radius-none)] py-2.5 relative self-stretch w-full flex-[0_0_auto] bg-color-mode-surface-bg-icon-gray">
            <h2 className="w-fit mt-[-1.00px] font-[number:var(--body-body-2-font-weight)] text-black text-[length:var(--body-body-2-font-size)] text-left tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] [direction:rtl] relative font-body-body-2 whitespace-nowrap [font-style:var(--body-body-2-font-style)]">
              نوع الطلب
            </h2>
          </header>

          {tableData.map((row) => (
            <div
              key={row.id}
              className="flex items-center justify-end gap-2.5 pr-[var(--corner-radius-none)] pl-[var(--corner-radius-none)] py-2.5 relative self-stretch w-full flex-[0_0_auto] border-b-[0.2px] [border-bottom-style:solid] border-color-mode-text-icons-t-placeholder"
            >
              <div className="w-fit mt-[-0.20px] font-[number:var(--body-body-2-font-weight)] text-black text-[length:var(--body-body-2-font-size)] text-left tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] [direction:rtl] relative font-body-body-2 whitespace-nowrap [font-style:var(--body-body-2-font-style)]">
                {row.orderType}
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col w-[120px] items-end relative">
          <header className="flex items-center justify-end gap-2.5 pr-[var(--corner-radius-none)] pl-[var(--corner-radius-none)] py-2.5 relative self-stretch w-full flex-[0_0_auto] bg-color-mode-surface-bg-icon-gray">
            <h2 className="w-fit mt-[-1.00px] font-[number:var(--body-body-2-font-weight)] text-black text-[length:var(--body-body-2-font-size)] text-left tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] [direction:rtl] relative font-body-body-2 whitespace-nowrap [font-style:var(--body-body-2-font-style)]">
              رقم الطلب
            </h2>
          </header>

          {tableData.map((row) => (
            <div
              key={row.id}
              className="flex items-center justify-end gap-2.5 pr-[var(--corner-radius-none)] pl-[var(--corner-radius-none)] py-2.5 relative self-stretch w-full flex-[0_0_auto] border-b-[0.2px] [border-bottom-style:solid] border-color-mode-text-icons-t-placeholder"
            >
              <div className="relative w-fit mt-[-0.20px] font-body-body-2 font-[number:var(--body-body-2-font-weight)] text-black text-[length:var(--body-body-2-font-size)] tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] whitespace-nowrap [font-style:var(--body-body-2-font-style)]">
                {row.orderNumber}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
