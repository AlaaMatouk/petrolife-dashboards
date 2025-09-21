import React from "react";
import { Table, Pagination } from "../../../components/shared";
import { financialReportsData } from "../../../constants/data";

const clientData = {
  phone: "00966254523658",
  commercialRecord: "GDHGD2543",
  clientName: "الشركة المتحدة العالمية",
  city: "الرياض",
  taxNumber: "245863564",
  clientCode: "21546354",
};

const filterOptions = [
  { label: "الفترة الزمنية", value: "الكل", icon: "/img/side-icons-16.svg" },
  {
    label: "كود الســـــــــائق",
    value: "الكل",
    icon: "/img/side-icons-17.svg",
  },
  {
    label: "المديــــــــــــنة",
    value: "الكل",
    icon: "/img/side-icons-18.svg",
  },
  { label: "نوع المنتج", value: "الكل", icon: "/img/side-icons-19.svg" },
  { label: "نوع التقرير", value: "تحليلي", icon: "/img/side-icons-20.svg" },
];

const tableData = [
  {
    city: "الرياض",
    stationName: "محطة الصالح",
    date: "21 فبراير 2025 - 5:05 ص",
    operationNumber: "21536",
    quantity: "20",
    productName: "بنزين 91",
    productNumber: "21536",
    productType: "وقود",
    driverName: "أحمد محمد",
    driverCode: "21A254",
  },
  {
    city: "الرياض",
    stationName: "محطة الصالح",
    date: "21 فبراير 2025 - 5:05 ص",
    operationNumber: "21536",
    quantity: "20",
    productName: "بنزين 91",
    productNumber: "21536",
    productType: "وقود",
    driverName: "أحمد محمد",
    driverCode: "21A254",
  },
  {
    city: "الرياض",
    stationName: "محطة الصالح",
    date: "21 فبراير 2025 - 5:05 ص",
    operationNumber: "21536",
    quantity: "20",
    productName: "بنزين 91",
    productNumber: "21536",
    productType: "وقود",
    driverName: "أحمد محمد",
    driverCode: "21A254",
  },
  {
    city: "الرياض",
    stationName: "محطة الصالح",
    date: "21 فبراير 2025 - 5:05 ص",
    operationNumber: "21536",
    quantity: "20",
    productName: "بنزين 91",
    productNumber: "21536",
    productType: "وقود",
    driverName: "أحمد محمد",
    driverCode: "21A254",
  },
  {
    city: "الرياض",
    stationName: "محطة الصالح",
    date: "21 فبراير 2025 - 5:05 ص",
    operationNumber: "21536",
    quantity: "20",
    productName: "بنزين 91",
    productNumber: "21536",
    productType: "وقود",
    driverName: "أحمد محمد",
    driverCode: "21A254",
  },
  {
    city: "الرياض",
    stationName: "محطة الصالح",
    date: "21 فبراير 2025 - 5:05 ص",
    operationNumber: "21536",
    quantity: "20",
    productName: "بنزين 91",
    productNumber: "21536",
    productType: "وقود",
    driverName: "أحمد محمد",
    driverCode: "21A254",
  },
  {
    city: "الرياض",
    stationName: "محطة الصالح",
    date: "21 فبراير 2025 - 5:05 ص",
    operationNumber: "21536",
    quantity: "20",
    productName: "بنزين 91",
    productNumber: "21536",
    productType: "وقود",
    driverName: "أحمد محمد",
    driverCode: "21A254",
  },
  {
    city: "الرياض",
    stationName: "محطة الصالح",
    date: "21 فبراير 2025 - 5:05 ص",
    operationNumber: "21536",
    quantity: "20",
    productName: "بنزين 91",
    productNumber: "21536",
    productType: "وقود",
    driverName: "أحمد محمد",
    driverCode: "21A254",
  },
  {
    city: "الرياض",
    stationName: "محطة الصالح",
    date: "21 فبراير 2025 - 5:05 ص",
    operationNumber: "21536",
    quantity: "20",
    productName: "بنزين 91",
    productNumber: "21536",
    productType: "وقود",
    driverName: "أحمد محمد",
    driverCode: "21A254",
  },
  {
    city: "الرياض",
    stationName: "محطة الصالح",
    date: "21 فبراير 2025 - 5:05 ص",
    operationNumber: "21536",
    quantity: "20",
    productName: "بنزين 91",
    productNumber: "21536",
    productType: "وقود",
    driverName: "أحمد محمد",
    driverCode: "21A254",
  },
];

const paginationNumbers = [1, 2, 3, 4, 5, 6, 7, "...", 20];

export const DataTableSection = (): JSX.Element => {
  return (
    <section
      className="flex flex-col w-[1077px] items-start gap-5 absolute top-28 left-[50px]"
      role="main"
      aria-label="قسم جدول البيانات"
    >
      <article className="flex flex-col items-start gap-[var(--corner-radius-extra-large)] pt-[var(--corner-radius-large)] pr-[var(--corner-radius-large)] pb-[var(--corner-radius-large)] pl-[var(--corner-radius-large)] relative self-stretch w-full flex-[0_0_auto] bg-color-mode-surface-bg-screen rounded-[var(--corner-radius-large)] border-[0.3px] border-solid border-color-mode-text-icons-t-placeholder">
        <div className="flex flex-col items-end gap-[var(--corner-radius-medium)] relative self-stretch w-full flex-[0_0_auto]">
          <header className="inline-flex items-center gap-1.5 relative flex-[0_0_auto]">
            <h2 className="relative w-[103px] h-5 mt-[-1.00px] font-subtitle-subtitle-2 font-[number:var(--subtitle-subtitle-2-font-weight)] text-color-mode-text-icons-t-sec text-[length:var(--subtitle-subtitle-2-font-size)] tracking-[var(--subtitle-subtitle-2-letter-spacing)] leading-[var(--subtitle-subtitle-2-line-height)] whitespace-nowrap [direction:rtl] [font-style:var(--subtitle-subtitle-2-font-style)]">
              بيانات العميل
            </h2>
            <img
              className="relative w-[18px] h-[18px] aspect-[1]"
              alt="أيقونة بيانات العميل"
              src="/img/side-icons-14.svg"
            />
          </header>

          <div className="flex items-center gap-[13px] relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex flex-col items-start justify-center gap-[var(--corner-radius-medium)] relative flex-1 grow">
              <div className="flex-col items-end gap-[var(--corner-radius-extra-small)] self-stretch w-full flex-[0_0_auto] flex relative">
                <label className="relative self-stretch mt-[-1.00px] font-caption-caption-1 font-[number:var(--caption-caption-1-font-weight)] text-color-mode-text-icons-t-placeholder text-[length:var(--caption-caption-1-font-size)] tracking-[var(--caption-caption-1-letter-spacing)] leading-[var(--caption-caption-1-line-height)] [direction:rtl] [font-style:var(--caption-caption-1-font-style)]">
                  رقم الهاتف
                </label>
                <div className="flex flex-col items-end justify-center gap-2.5 pt-[var(--corner-radius-small)] pb-[var(--corner-radius-small)] px-2.5 relative self-stretch w-full flex-[0_0_auto] bg-color-mode-surface-bg-icon-gray rounded-[var(--corner-radius-small)]">
                  <div className="flex items-center justify-end relative self-stretch w-full flex-[0_0_auto]">
                    <span className="mt-[-1.00px] font-[number:var(--body-body-2-font-weight)] text-color-mode-text-icons-t-sec tracking-[var(--body-body-2-letter-spacing)] relative w-fit font-body-body-2 text-[length:var(--body-body-2-font-size)] leading-[var(--body-body-2-line-height)] whitespace-nowrap [font-style:var(--body-body-2-font-style)]">
                      {clientData.phone}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex-col items-end gap-[var(--corner-radius-extra-small)] self-stretch w-full flex-[0_0_auto] flex relative">
                <label className="relative self-stretch mt-[-1.00px] font-caption-caption-1 font-[number:var(--caption-caption-1-font-weight)] text-color-mode-text-icons-t-placeholder text-[length:var(--caption-caption-1-font-size)] tracking-[var(--caption-caption-1-letter-spacing)] leading-[var(--caption-caption-1-line-height)] [direction:rtl] [font-style:var(--caption-caption-1-font-style)]">
                  المدينة
                </label>
                <div className="items-end justify-center pt-[var(--corner-radius-small)] pr-[var(--corner-radius-small)] pb-[var(--corner-radius-small)] pl-[var(--corner-radius-small)] bg-color-mode-surface-bg-icon-gray flex flex-col gap-2.5 relative self-stretch w-full flex-[0_0_auto] rounded-[var(--corner-radius-small)]">
                  <div className="flex items-center justify-end relative self-stretch w-full flex-[0_0_auto]">
                    <span className="relative w-fit mt-[-1.00px] font-body-body-2 font-[number:var(--body-body-2-font-weight)] text-color-mode-text-icons-t-sec text-[length:var(--body-body-2-font-size)] text-left tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] whitespace-nowrap [direction:rtl] [font-style:var(--body-body-2-font-style)]">
                      {clientData.city}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-start justify-center gap-[var(--corner-radius-medium)] relative flex-1 grow">
              <div className="flex-col items-end gap-[var(--corner-radius-extra-small)] self-stretch w-full flex-[0_0_auto] flex relative">
                <label className="relative self-stretch mt-[-1.00px] font-caption-caption-1 font-[number:var(--caption-caption-1-font-weight)] text-color-mode-text-icons-t-placeholder text-[length:var(--caption-caption-1-font-size)] tracking-[var(--caption-caption-1-letter-spacing)] leading-[var(--caption-caption-1-line-height)] [direction:rtl] [font-style:var(--caption-caption-1-font-style)]">
                  السجل التجاري
                </label>
                <div className="flex flex-col items-end justify-center gap-2.5 pt-[var(--corner-radius-small)] pb-[var(--corner-radius-small)] px-2.5 relative self-stretch w-full flex-[0_0_auto] bg-color-mode-surface-bg-icon-gray rounded-[var(--corner-radius-small)]">
                  <div className="flex items-center justify-end relative self-stretch w-full flex-[0_0_auto]">
                    <span className="relative w-fit mt-[-1.00px] font-body-body-2 font-[number:var(--body-body-2-font-weight)] text-color-mode-text-icons-t-sec text-[length:var(--body-body-2-font-size)] tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] whitespace-nowrap [font-style:var(--body-body-2-font-style)]">
                      {clientData.commercialRecord}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex-col items-end gap-[var(--corner-radius-extra-small)] self-stretch w-full flex-[0_0_auto] flex relative">
                <label className="relative self-stretch mt-[-1.00px] font-caption-caption-1 font-[number:var(--caption-caption-1-font-weight)] text-color-mode-text-icons-t-placeholder text-[length:var(--caption-caption-1-font-size)] tracking-[var(--caption-caption-1-letter-spacing)] leading-[var(--caption-caption-1-line-height)] [direction:rtl] [font-style:var(--caption-caption-1-font-style)]">
                  الرقم الضريبي
                </label>
                <div className="items-end justify-center pt-[var(--corner-radius-small)] pr-[var(--corner-radius-small)] pb-[var(--corner-radius-small)] pl-[var(--corner-radius-small)] bg-color-mode-surface-bg-icon-gray flex flex-col gap-2.5 relative self-stretch w-full flex-[0_0_auto] rounded-[var(--corner-radius-small)]">
                  <div className="flex items-center justify-end relative self-stretch w-full flex-[0_0_auto]">
                    <span className="w-fit mt-[-1.00px] font-[number:var(--body-body-2-font-weight)] text-color-mode-text-icons-t-sec tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] relative font-body-body-2 text-[length:var(--body-body-2-font-size)] whitespace-nowrap [font-style:var(--body-body-2-font-style)]">
                      {clientData.taxNumber}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-start justify-center gap-[var(--corner-radius-medium)] relative flex-1 grow">
              <div className="flex-col items-end gap-[var(--corner-radius-extra-small)] self-stretch w-full flex-[0_0_auto] flex relative">
                <label className="relative self-stretch mt-[-1.00px] font-caption-caption-1 font-[number:var(--caption-caption-1-font-weight)] text-color-mode-text-icons-t-placeholder text-[length:var(--caption-caption-1-font-size)] tracking-[var(--caption-caption-1-letter-spacing)] leading-[var(--caption-caption-1-line-height)] [direction:rtl] [font-style:var(--caption-caption-1-font-style)]">
                  اسم العميل
                </label>
                <div className="flex flex-col items-end justify-center gap-2.5 pt-[var(--corner-radius-small)] pb-[var(--corner-radius-small)] px-2.5 relative self-stretch w-full flex-[0_0_auto] bg-color-mode-surface-bg-icon-gray rounded-[var(--corner-radius-small)]">
                  <div className="flex items-center justify-end relative self-stretch w-full flex-[0_0_auto]">
                    <span className="relative w-fit mt-[-1.00px] font-body-body-2 font-[number:var(--body-body-2-font-weight)] text-color-mode-text-icons-t-sec text-[length:var(--body-body-2-font-size)] text-left tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] whitespace-nowrap [direction:rtl] [font-style:var(--body-body-2-font-style)]">
                      {clientData.clientName}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex-col items-end gap-[var(--corner-radius-extra-small)] self-stretch w-full flex-[0_0_auto] flex relative">
                <label className="relative self-stretch mt-[-1.00px] font-caption-caption-1 font-[number:var(--caption-caption-1-font-weight)] text-color-mode-text-icons-t-placeholder text-[length:var(--caption-caption-1-font-size)] tracking-[var(--caption-caption-1-letter-spacing)] leading-[var(--caption-caption-1-line-height)] [direction:rtl] [font-style:var(--caption-caption-1-font-style)]">
                  كود العميل
                </label>
                <div className="items-end justify-center pt-[var(--corner-radius-small)] pr-[var(--corner-radius-small)] pb-[var(--corner-radius-small)] pl-[var(--corner-radius-small)] bg-color-mode-surface-bg-icon-gray flex flex-col gap-2.5 relative self-stretch w-full flex-[0_0_auto] rounded-[var(--corner-radius-small)]">
                  <div className="flex items-center justify-end relative self-stretch w-full flex-[0_0_auto]">
                    <span className="w-fit mt-[-1.00px] font-[number:var(--body-body-2-font-weight)] text-color-mode-text-icons-t-sec tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] relative font-body-body-2 text-[length:var(--body-body-2-font-size)] whitespace-nowrap [font-style:var(--body-body-2-font-style)]">
                      {clientData.clientCode}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      <article className="flex flex-col items-start gap-[var(--corner-radius-extra-large)] pt-[var(--corner-radius-large)] pr-[var(--corner-radius-large)] pb-[var(--corner-radius-large)] pl-[var(--corner-radius-large)] relative self-stretch w-full flex-[0_0_auto] bg-color-mode-surface-bg-screen rounded-[var(--corner-radius-large)] border-[0.3px] border-solid border-color-mode-text-icons-t-placeholder">
        <div className="flex flex-col items-end gap-[var(--corner-radius-extra-large)] relative self-stretch w-full flex-[0_0_auto]">
          <header className="items-center justify-between self-stretch w-full flex-[0_0_auto] flex relative">
            <button
              className="relative w-[79px] h-[30px] rounded-[5px] border-[0.5px] border-solid border-color-mode-text-icons-t-placeholder bg-transparent hover:bg-color-mode-surface-bg-icon-gray transition-colors"
              aria-label="تصدير البيانات"
            >
              <span className="absolute w-[46.84%] h-[56.67%] top-[23.33%] left-[13.92%] flex items-center justify-center font-subtitle-subtitle-3 font-[number:var(--subtitle-subtitle-3-font-weight)] text-color-mode-text-icons-t-sec text-[length:var(--subtitle-subtitle-3-font-size)] text-left tracking-[var(--subtitle-subtitle-3-letter-spacing)] leading-[var(--subtitle-subtitle-3-line-height)] whitespace-nowrap [direction:rtl] [font-style:var(--subtitle-subtitle-3-font-style)]">
                تصدير
              </span>
              <div className="absolute w-[26.91%] h-[48.48%] top-[24.24%] left-[63.26%] flex">
                <div className="flex-1 w-[21.26px] relative">
                  <img
                    className="absolute w-[58.33%] h-[75.00%] top-[9.06%] left-[18.48%]"
                    alt="أيقونة التصدير"
                    src="/img/icon.svg"
                  />
                </div>
              </div>
            </button>

            <div className="inline-flex items-center gap-1.5 relative flex-[0_0_auto]">
              <h2 className="relative w-[103px] h-5 mt-[-1.00px] font-subtitle-subtitle-2 font-[number:var(--subtitle-subtitle-2-font-weight)] text-color-mode-text-icons-t-sec text-[length:var(--subtitle-subtitle-2-font-size)] tracking-[var(--subtitle-subtitle-2-letter-spacing)] leading-[var(--subtitle-subtitle-2-line-height)] whitespace-nowrap [direction:rtl] [font-style:var(--subtitle-subtitle-2-font-style)]">
                التقارير المالية
              </h2>
              <img
                className="relative w-[18px] h-[18px] aspect-[1]"
                alt="أيقونة التقارير المالية"
                src="/img/side-icons-15.svg"
              />
            </div>
          </header>
        </div>

        <div className="flex flex-col items-start gap-[var(--corner-radius-large)] relative self-stretch w-full flex-[0_0_auto]">
          <div
            className="flex items-center gap-[13px] relative self-stretch w-full flex-[0_0_auto]"
            role="group"
            aria-label="مرشحات البحث"
          >
            {filterOptions.map((filter, index) => (
              <div
                key={index}
                className="flex-col items-end gap-[var(--corner-radius-extra-small)] flex-1 grow flex relative"
              >
                <label className="relative self-stretch mt-[-1.00px] font-caption-caption-1 font-[number:var(--caption-caption-1-font-weight)] text-color-mode-text-icons-t-placeholder text-[length:var(--caption-caption-1-font-size)] tracking-[var(--caption-caption-1-letter-spacing)] leading-[var(--caption-caption-1-line-height)] [direction:rtl] [font-style:var(--caption-caption-1-font-style)]">
                  {filter.label}
                </label>
                <select className="items-start pt-[var(--corner-radius-small)] pb-[var(--corner-radius-small)] px-2.5 border-[0.5px] border-solid border-color-mode-text-icons-t-placeholder flex flex-col gap-2.5 relative self-stretch w-full flex-[0_0_auto] rounded-[var(--corner-radius-small)] bg-transparent appearance-none cursor-pointer">
                  <option
                    value={filter.value}
                    className="items-center justify-between self-stretch w-full flex-[0_0_auto] flex relative"
                  >
                    <img
                      className="relative w-[18px] h-[18px] aspect-[1]"
                      alt={`أيقونة ${filter.label}`}
                      src={filter.icon}
                    />
                    <span className="relative w-fit mt-[-1.00px] font-body-body-2 font-[number:var(--body-body-2-font-weight)] text-color-mode-text-icons-t-sec text-[length:var(--body-body-2-font-size)] text-left tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] whitespace-nowrap [direction:rtl] [font-style:var(--body-body-2-font-style)]">
                      {filter.value}
                    </span>
                  </option>
                </select>
              </div>
            ))}
          </div>

          <div className="flex items-start justify-between relative self-stretch w-full flex-[0_0_auto]">
            <table
              className="w-full"
              role="table"
              aria-label="جدول التقارير المالية"
            >
              <thead>
                <tr className="flex items-start justify-between relative self-stretch w-full flex-[0_0_auto]">
                  <th className="flex flex-col items-end relative flex-1 grow">
                    <div className="flex items-center justify-end gap-2.5 pr-[var(--corner-radius-none)] pl-[var(--corner-radius-none)] py-2.5 relative self-stretch w-full flex-[0_0_auto] bg-color-mode-surface-bg-icon-gray">
                      <span className="relative w-fit mt-[-1.00px] font-body-body-2 font-[number:var(--body-body-2-font-weight)] text-black text-[length:var(--body-body-2-font-size)] text-left tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] whitespace-nowrap [direction:rtl] [font-style:var(--body-body-2-font-style)]">
                        المدينة
                      </span>
                    </div>
                  </th>
                  <th className="flex flex-col w-[106px] items-end relative">
                    <div className="flex items-center justify-end gap-2.5 pr-[var(--corner-radius-none)] pl-[var(--corner-radius-none)] py-2.5 relative self-stretch w-full flex-[0_0_auto] bg-color-mode-surface-bg-icon-gray">
                      <span className="relative w-fit mt-[-1.00px] font-body-body-2 font-[number:var(--body-body-2-font-weight)] text-black text-[length:var(--body-body-2-font-size)] text-left tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] whitespace-nowrap [direction:rtl] [font-style:var(--body-body-2-font-style)]">
                        اسم المحطة
                      </span>
                    </div>
                  </th>
                  <th className="flex flex-col w-[172px] items-end relative">
                    <div className="flex items-center justify-end gap-2.5 pr-[var(--corner-radius-none)] pl-[var(--corner-radius-none)] py-2.5 relative self-stretch w-full flex-[0_0_auto] bg-color-mode-surface-bg-icon-gray">
                      <span className="relative w-fit mt-[-1.00px] font-body-body-2 font-[number:var(--body-body-2-font-weight)] text-black text-[length:var(--body-body-2-font-size)] text-left tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] whitespace-nowrap [direction:rtl] [font-style:var(--body-body-2-font-style)]">
                        التاريخ
                      </span>
                    </div>
                  </th>
                  <th className="flex flex-col items-end relative flex-1 grow">
                    <div className="flex items-center justify-end gap-2.5 pr-[var(--corner-radius-none)] pl-[var(--corner-radius-none)] py-2.5 relative self-stretch w-full flex-[0_0_auto] bg-color-mode-surface-bg-icon-gray">
                      <span className="relative w-fit mt-[-1.00px] font-body-body-2 font-[number:var(--body-body-2-font-weight)] text-black text-[length:var(--body-body-2-font-size)] text-left tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] whitespace-nowrap [direction:rtl] [font-style:var(--body-body-2-font-style)]">
                        رقم العملية
                      </span>
                    </div>
                  </th>
                  <th className="flex flex-col w-[69px] items-end relative">
                    <div className="flex items-center justify-end gap-2.5 pr-[var(--corner-radius-none)] pl-[var(--corner-radius-none)] py-2.5 relative self-stretch w-full flex-[0_0_auto] bg-color-mode-surface-bg-icon-gray">
                      <span
                        className="relative w-fit mt-[-1.00px] font-body-body-2 font-[number:var(--body-body-2-font-weight)] text-black text-[length:var(--body-body-2-font-size)] text-left tracking-[var(--body-body-2-letter-spacing)] leading-
[var(--body-body-2-line-height)] whitespace-nowrap [direction:rtl] [font-style:var(--body-body-2-font-style)]"
                      >
                        الكمية
                      </span>
                    </div>
                  </th>
                  <th className="flex flex-col items-end relative flex-1 grow">
                    <div className="flex items-center justify-end gap-2.5 pr-[var(--corner-radius-none)] pl-[var(--corner-radius-none)] py-2.5 relative self-stretch w-full flex-[0_0_auto] bg-color-mode-surface-bg-icon-gray">
                      <span className="relative w-fit mt-[-1.00px] font-body-body-2 font-[number:var(--body-body-2-font-weight)] text-black text-[length:var(--body-body-2-font-size)] text-left tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] whitespace-nowrap [direction:rtl] [font-style:var(--body-body-2-font-style)]">
                        اسم المنتج
                      </span>
                    </div>
                  </th>
                  <th className="flex flex-col items-end relative flex-1 grow">
                    <div className="flex items-center justify-end gap-2.5 pr-[var(--corner-radius-none)] pl-[var(--corner-radius-none)] py-2.5 relative self-stretch w-full flex-[0_0_auto] bg-color-mode-surface-bg-icon-gray">
                      <span className="relative w-fit mt-[-1.00px] font-body-body-2 font-[number:var(--body-body-2-font-weight)] text-black text-[length:var(--body-body-2-font-size)] text-left tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] whitespace-nowrap [direction:rtl] [font-style:var(--body-body-2-font-style)]">
                        رقم المنتج
                      </span>
                    </div>
                  </th>
                  <th className="flex flex-col items-end relative flex-1 grow">
                    <div className="flex items-center justify-end gap-2.5 pr-[var(--corner-radius-none)] pl-[var(--corner-radius-none)] py-2.5 relative self-stretch w-full flex-[0_0_auto] bg-color-mode-surface-bg-icon-gray">
                      <span className="relative w-fit mt-[-1.00px] font-body-body-2 font-[number:var(--body-body-2-font-weight)] text-black text-[length:var(--body-body-2-font-size)] text-left tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] whitespace-nowrap [direction:rtl] [font-style:var(--body-body-2-font-style)]">
                        نوع المنتج
                      </span>
                    </div>
                  </th>
                  <th className="flex flex-col items-end relative flex-1 grow">
                    <div className="flex items-center justify-end gap-2.5 pr-[var(--corner-radius-none)] pl-[var(--corner-radius-none)] py-2.5 relative self-stretch w-full flex-[0_0_auto] bg-color-mode-surface-bg-icon-gray">
                      <span className="relative w-fit mt-[-1.00px] font-body-body-2 font-[number:var(--body-body-2-font-weight)] text-black text-[length:var(--body-body-2-font-size)] text-left tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] whitespace-nowrap [direction:rtl] [font-style:var(--body-body-2-font-style)]">
                        اسم السائق
                      </span>
                    </div>
                  </th>
                  <th className="flex flex-col items-end relative flex-1 grow">
                    <div className="flex items-center justify-end gap-2.5 pr-[var(--corner-radius-none)] pl-[var(--corner-radius-none)] py-2.5 relative self-stretch w-full flex-[0_0_auto] bg-color-mode-surface-bg-icon-gray">
                      <span className="relative w-fit mt-[-1.00px] font-body-body-2 font-[number:var(--body-body-2-font-weight)] text-black text-[length:var(--body-body-2-font-size)] text-left tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] whitespace-nowrap [direction:rtl] [font-style:var(--body-body-2-font-style)]">
                        كود السائق
                      </span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((row, index) => (
                  <tr
                    key={index}
                    className="flex items-start justify-between relative self-stretch w-full flex-[0_0_auto]"
                  >
                    <td className="flex flex-col items-end relative flex-1 grow">
                      <div className="flex items-center justify-end gap-2.5 pr-[var(--corner-radius-none)] pl-[var(--corner-radius-none)] py-2.5 relative self-stretch w-full flex-[0_0_auto] border-b-[0.2px] [border-bottom-style:solid] border-color-mode-text-icons-t-placeholder">
                        <span className="relative w-fit mt-[-0.20px] font-body-body-2 font-[number:var(--body-body-2-font-weight)] text-black text-[length:var(--body-body-2-font-size)] text-left tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] whitespace-nowrap [direction:rtl] [font-style:var(--body-body-2-font-style)]">
                          {row.city}
                        </span>
                      </div>
                    </td>
                    <td className="flex flex-col w-[106px] items-end relative">
                      <div className="flex items-center justify-end gap-2.5 pr-[var(--corner-radius-none)] pl-[var(--corner-radius-none)] py-2.5 relative self-stretch w-full flex-[0_0_auto] border-b-[0.2px] [border-bottom-style:solid] border-color-mode-text-icons-t-placeholder">
                        <span className="relative w-fit mt-[-0.20px] font-body-body-2 font-[number:var(--body-body-2-font-weight)] text-black text-[length:var(--body-body-2-font-size)] text-left tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] whitespace-nowrap [direction:rtl] [font-style:var(--body-body-2-font-style)]">
                          {row.stationName}
                        </span>
                      </div>
                    </td>
                    <td className="flex flex-col w-[172px] items-end relative">
                      <div className="flex items-center justify-end gap-2.5 pr-[var(--corner-radius-none)] pl-[var(--corner-radius-none)] py-2.5 relative self-stretch w-full flex-[0_0_auto] border-b-[0.2px] [border-bottom-style:solid] border-color-mode-text-icons-t-placeholder">
                        <time className="relative w-fit mt-[-0.20px] font-body-body-2 font-[number:var(--body-body-2-font-weight)] text-black text-[length:var(--body-body-2-font-size)] text-left tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] whitespace-nowrap [direction:rtl] [font-style:var(--body-body-2-font-style)]">
                          {row.date}
                        </time>
                      </div>
                    </td>
                    <td className="flex flex-col items-end relative flex-1 grow">
                      <div className="flex items-center justify-end gap-2.5 pr-[var(--corner-radius-none)] pl-[var(--corner-radius-none)] py-2.5 relative self-stretch w-full flex-[0_0_auto] border-b-[0.2px] [border-bottom-style:solid] border-color-mode-text-icons-t-placeholder">
                        <span className="mt-[-0.20px] font-[number:var(--body-body-2-font-weight)] text-black tracking-[var(--body-body-2-letter-spacing)] relative w-fit font-body-body-2 text-[length:var(--body-body-2-font-size)] leading-[var(--body-body-2-line-height)] whitespace-nowrap [font-style:var(--body-body-2-font-style)]">
                          {row.operationNumber}
                        </span>
                      </div>
                    </td>
                    <td className="flex flex-col w-[69px] items-end relative">
                      <div className="flex items-center justify-end gap-2.5 pr-[var(--corner-radius-none)] pl-[var(--corner-radius-none)] py-2.5 relative self-stretch w-full flex-[0_0_auto] border-b-[0.2px] [border-bottom-style:solid] border-color-mode-text-icons-t-placeholder">
                        <span className="mt-[-0.20px] font-[number:var(--body-body-2-font-weight)] text-black tracking-[var(--body-body-2-letter-spacing)] relative w-fit font-body-body-2 text-[length:var(--body-body-2-font-size)] leading-[var(--body-body-2-line-height)] whitespace-nowrap [font-style:var(--body-body-2-font-style)]">
                          {row.quantity}
                        </span>
                      </div>
                    </td>
                    <td className="flex flex-col items-end relative flex-1 grow">
                      <div className="flex items-center justify-end gap-2.5 pr-[var(--corner-radius-none)] pl-[var(--corner-radius-none)] py-2.5 relative self-stretch w-full flex-[0_0_auto] border-b-[0.2px] [border-bottom-style:solid] border-color-mode-text-icons-t-placeholder">
                        <span className="relative w-fit mt-[-0.20px] font-body-body-2 font-[number:var(--body-body-2-font-weight)] text-black text-[length:var(--body-body-2-font-size)] text-left tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] whitespace-nowrap [direction:rtl] [font-style:var(--body-body-2-font-style)]">
                          {row.productName}
                        </span>
                      </div>
                    </td>
                    <td className="flex flex-col items-end relative flex-1 grow">
                      <div className="flex items-center justify-end gap-2.5 pr-[var(--corner-radius-none)] pl-[var(--corner-radius-none)] py-2.5 relative self-stretch w-full flex-[0_0_auto] border-b-[0.2px] [border-bottom-style:solid] border-color-mode-text-icons-t-placeholder">
                        <span className="mt-[-0.20px] font-[number:var(--body-body-2-font-weight)] text-black tracking-[var(--body-body-2-letter-spacing)] relative w-fit font-body-body-2 text-[length:var(--body-body-2-font-size)] leading-[var(--body-body-2-line-height)] whitespace-nowrap [font-style:var(--body-body-2-font-style)]">
                          {row.productNumber}
                        </span>
                      </div>
                    </td>
                    <td className="flex flex-col items-end relative flex-1 grow">
                      <div className="flex items-center justify-end gap-2.5 pr-[var(--corner-radius-none)] pl-[var(--corner-radius-none)] py-2.5 relative self-stretch w-full flex-[0_0_auto] border-b-[0.2px] [border-bottom-style:solid] border-color-mode-text-icons-t-placeholder">
                        <span className="relative w-fit mt-[-0.20px] font-body-body-2 font-[number:var(--body-body-2-font-weight)] text-black text-[length:var(--body-body-2-font-size)] text-left tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] whitespace-nowrap [direction:rtl] [font-style:var(--body-body-2-font-style)]">
                          {row.productType}
                        </span>
                      </div>
                    </td>
                    <td className="flex flex-col items-end relative flex-1 grow">
                      <div className="flex items-center justify-end gap-2.5 pr-[var(--corner-radius-none)] pl-[var(--corner-radius-none)] py-2.5 relative self-stretch w-full flex-[0_0_auto] border-b-[0.2px] [border-bottom-style:solid] border-color-mode-text-icons-t-placeholder">
                        <span className="relative w-fit mt-[-0.20px] font-body-body-2 font-[number:var(--body-body-2-font-weight)] text-black text-[length:var(--body-body-2-font-size)] text-left tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] whitespace-nowrap [direction:rtl] [font-style:var(--body-body-2-font-style)]">
                          {row.driverName}
                        </span>
                      </div>
                    </td>
                    <td className="flex flex-col items-end relative flex-1 grow">
                      <div className="flex items-center justify-end gap-2.5 pr-[var(--corner-radius-none)] pl-[var(--corner-radius-none)] py-2.5 relative self-stretch w-full flex-[0_0_auto] border-b-[0.2px] [border-bottom-style:solid] border-color-mode-text-icons-t-placeholder">
                        <span className="relative w-fit mt-[-0.20px] font-body-body-2 font-[number:var(--body-body-2-font-weight)] text-black text-[length:var(--body-body-2-font-size)] tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] whitespace-nowrap [font-style:var(--body-body-2-font-style)]">
                          {row.driverCode}
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <nav
          className="flex items-center justify-around gap-[46px] relative self-stretch w-full flex-[0_0_auto]"
          role="navigation"
          aria-label="تنقل الصفحات"
        >
          <div className="inline-flex items-start gap-2 relative flex-[0_0_auto]">
            <button
              className="flex w-[72px] h-8 items-center justify-center gap-2 px-2 py-0 relative bg-color-mode-surface-bg-screen rounded overflow-hidden border-[0.5px] border-solid border-color-mode-text-icons-t-placeholder hover:bg-color-mode-surface-bg-icon-gray transition-colors"
              aria-label="الصفحة التالية"
            >
              <img
                className="relative w-4 h-4"
                alt="سهم يمين"
                src="/img/icon-16-arrow-right.svg"
              />
              <span className="relative w-fit font-body-body-2 font-[number:var(--body-body-2-font-weight)] text-color-mode-text-icons-t-sec text-[length:var(--body-body-2-font-size)] text-left tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] whitespace-nowrap [direction:rtl] [font-style:var(--body-body-2-font-style)]">
                التالي
              </span>
            </button>

            {paginationNumbers.map((number, index) => (
              <button
                key={index}
                className={`flex flex-col w-8 h-8 items-center justify-center gap-2.5 px-2 py-0 relative rounded overflow-hidden ${
                  number === 3
                    ? "bg-color-mode-surface-primary-blue"
                    : "bg-color-mode-surface-bg-screen border-[0.5px] border-solid border-color-mode-text-icons-t-placeholder hover:bg-color-mode-surface-bg-icon-gray"
                } transition-colors`}
                aria-label={`الصفحة ${number}`}
                aria-current={number === 3 ? "page" : undefined}
              >
                <div className="flex flex-col w-[22px] h-[22px] items-center justify-center gap-2.5 p-2.5 relative ml-[-3.00px] mr-[-3.00px] rounded-sm">
                  <span
                    className={`relative w-fit mt-[-11.00px] mb-[-9.00px] whitespace-nowrap ${
                      number === 3
                        ? "font-subtitle-subtitle-3 font-[number:var(--subtitle-subtitle-3-font-weight)] text-color-mode-text-icons-t-btn-negative text-[length:var(--subtitle-subtitle-3-font-size)] tracking-[var(--subtitle-subtitle-3-letter-spacing)] leading-[var(--subtitle-subtitle-3-line-height)] [font-style:var(--subtitle-subtitle-3-font-style)]"
                        : "font-body-body-2 font-[number:var(--body-body-2-font-weight)] text-color-mode-text-icons-t-sec text-[length:var(--body-body-2-font-size)] tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] [font-style:var(--body-body-2-font-style)]"
                    }`}
                  >
                    {number}
                  </span>
                </div>
              </button>
            ))}

            <button
              className="flex w-[72px] h-8 items-center justify-center gap-[5px] px-2 py-0 relative bg-color-mode-surface-bg-screen rounded overflow-hidden border-[0.5px] border-solid border-color-mode-text-icons-t-placeholder hover:bg-color-mode-surface-bg-icon-gray transition-colors"
              aria-label="الصفحة السابقة"
            >
              <span className="relative w-fit ml-[-3.50px] font-body-body-2 font-[number:var(--body-body-2-font-weight)] text-color-mode-text-icons-t-sec text-[length:var(--body-body-2-font-size)] text-left tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] whitespace-nowrap [direction:rtl] [font-style:var(--body-body-2-font-style)]">
                السابق
              </span>
              <img
                className="mr-[-3.50px] relative w-4 h-4"
                alt="سهم يسار"
                src="/img/icon-16-arrow-left.svg"
              />
            </button>
          </div>
        </nav>
      </article>
    </section>
  );
};
