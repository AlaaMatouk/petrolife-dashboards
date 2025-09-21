import React from "react";
import { Table } from "../../../../components/shared/Table/Table";
import { Pagination } from "../../../../components/shared/Pagination/Pagination";
import { carData } from "../../../../constants/data";

// Define table columns for cars
const carColumns = [
  {
    key: "carNumber",
    label: "رقم السيارة",
    width: "w-[85px]",
  },
  {
    key: "carName",
    label: "اسم السيارة",
    width: "w-[119px]",
  },
  {
    key: "brand",
    label: "الماركة",
    width: "w-[81px]",
  },
  {
    key: "model",
    label: "الطراز",
    width: "w-[79px]",
  },
  {
    key: "year",
    label: "سنة الاصدار",
    width: "w-[106px]",
  },
  {
    key: "fuelType",
    label: "نوع الوقود",
    width: "w-[97px]",
  },
  {
    key: "category",
    label: "تصنيف السيارة",
    width: "w-[129px]",
    render: (value: any) => (
      <div className="flex items-center gap-1">
        {value ? (
          <>
            <span className="relative w-fit mt-[-0.20px] font-[number:var(--body-body-2-font-weight)] text-color-mode-text-icons-t-primary-gray text-[length:var(--body-body-2-font-size)] text-left tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] [direction:rtl] font-body-body-2 whitespace-nowrap [font-style:var(--body-body-2-font-style)]">
              {value.name}
            </span>
            <img
              className="relative w-3.5 h-3.5 aspect-[1]"
              alt={value.name}
              src={value.icon}
            />
          </>
        ) : (
          <span className="relative w-fit mt-[-0.20px] font-[number:var(--body-body-2-font-weight)] text-color-mode-text-icons-t-primary-gray text-[length:var(--body-body-2-font-size)] tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] font-body-body-2 whitespace-nowrap [font-style:var(--body-body-2-font-style)]">
            --
          </span>
        )}
      </div>
    ),
  },
  {
    key: "drivers",
    label: "السائقون",
    width: "flex-1 grow",
    render: (value: any) => (
      <div className="inline-flex items-center gap-1.5 relative flex-[0_0_auto]">
        <span className="relative w-fit font-[number:var(--body-body-2-font-weight)] text-black text-[length:var(--body-body-2-font-size)] text-left tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] [direction:rtl] font-body-body-2 whitespace-nowrap [font-style:var(--body-body-2-font-style)]">
          {value[0].name}
        </span>
        <div
          className={`relative ${
            value[0].avatar3
              ? "w-[46px] h-[24.6px]"
              : value[0].avatar2
              ? "w-10 h-[24.59px]"
              : "w-6 h-6"
          }`}
        >
          {value[0].avatar3 ? (
            <>
              <img
                className="absolute top-0 left-[22px] w-6 h-6 aspect-[1] object-cover"
                alt="سائق"
                src={value[0].avatar1}
              />
              <img
                className="-top-0.5 left-[9px] w-7 h-7 absolute aspect-[1] object-cover"
                alt="سائق"
                src={value[0].avatar2}
              />
              <img
                className="-top-0.5 -left-0.5 w-7 h-7 absolute aspect-[1] object-cover"
                alt="سائق"
                src={value[0].avatar3}
              />
            </>
          ) : value[0].avatar2 ? (
            <>
              <img
                className="top-0 left-4 w-6 h-6 absolute aspect-[1] object-cover"
                alt="سائق"
                src={value[0].avatar1}
              />
              <img
                className="-top-0.5 -left-0.5 w-7 h-7 absolute aspect-[1] object-cover"
                alt="سائق"
                src={value[0].avatar2}
              />
            </>
          ) : (
            <div
              className="relative w-6 h-6 bg-cover bg-[50%_50%]"
              style={{
                backgroundImage: `url(${value[0].avatar1})`,
              }}
            />
          )}
        </div>
      </div>
    ),
  },
];

export const CarListSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-[1077px] items-start gap-5 absolute top-28 left-[50px]">
      <div className="flex flex-col items-start gap-[var(--corner-radius-extra-large)] pt-[var(--corner-radius-large)] pr-[var(--corner-radius-large)] pb-[var(--corner-radius-large)] pl-[var(--corner-radius-large)] relative self-stretch w-full flex-[0_0_auto] bg-color-mode-surface-bg-screen rounded-[var(--corner-radius-large)] border-[0.3px] border-solid border-color-mode-text-icons-t-placeholder">
        <header className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
          <div className="inline-flex items-center gap-2.5 relative flex-[0_0_auto]">
            <div className="flex w-[18px] h-[18px] items-center justify-center gap-2.5 p-2.5 relative bg-color-mode-surface-bg-icon-gray rounded-[var(--corner-radius-medium)]">
              <img
                className="relative w-3.5 h-3.5"
                alt="Icon"
                src="/img/side-icons-4.svg"
              />
            </div>
            <div className="relative w-fit font-headings-h1-h6-heading-6 font-[number:var(--headings-h1-h6-heading-6-font-weight)] text-color-mode-text-icons-t-primary-gray text-[length:var(--headings-h1-h6-heading-6-font-size)] text-left tracking-[var(--headings-h1-h6-heading-6-letter-spacing)] leading-[var(--headings-h1-h6-heading-6-line-height)] whitespace-nowrap [direction:rtl] [font-style:var(--headings-h1-h6-heading-6-font-style)]">
              قائمة السيارات
            </div>
          </div>
          <div className="inline-flex items-center gap-2.5 relative flex-[0_0_auto]">
            <div className="flex w-[18px] h-[18px] items-center justify-center gap-2.5 p-2.5 relative bg-color-mode-surface-bg-icon-gray rounded-[var(--corner-radius-medium)]">
              <img
                className="relative w-3.5 h-3.5"
                alt="Icon"
                src="/img/side-icons-25.svg"
              />
            </div>
            <div className="relative w-fit font-headings-h1-h6-heading-6 font-[number:var(--headings-h1-h6-heading-6-font-weight)] text-color-mode-text-icons-t-primary-gray text-[length:var(--headings-h1-h6-heading-6-font-size)] text-left tracking-[var(--headings-h1-h6-heading-6-letter-spacing)] leading-[var(--headings-h1-h6-heading-6-line-height)] whitespace-nowrap [direction:rtl] [font-style:var(--headings-h1-h6-heading-6-font-style)]">
              إضافة سيارة جديدة
            </div>
          </div>
        </header>

        <main className="flex flex-col items-start gap-7 relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex flex-col items-end gap-[var(--corner-radius-large)] relative self-stretch w-full flex-[0_0_auto]">
            <Table
              columns={carColumns}
              data={carData}
              className="relative self-stretch w-full flex-[0_0_auto]"
            />
          </div>

          <Pagination
            currentPage={3}
            totalPages={20}
            onPageChange={(page) => console.log("Page changed to:", page)}
          />
        </main>
      </div>
    </section>
  );
};
