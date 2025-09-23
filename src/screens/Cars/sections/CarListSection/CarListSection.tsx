import { Table } from "../../../../components/shared/Table/Table";
import { Pagination } from "../../../../components/shared/Pagination/Pagination";
import { carData } from "../../../../constants/data";

// Define table columns for cars
const carColumns = [
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
    key: "year",
    label: "سنة الاصدار",
    width: "w-[106px]",
  },
  {
    key: "model",
    label: "الطراز",
    width: "w-[79px]",
  },
  {
    key: "brand",
    label: "الماركة",
    width: "w-[81px]",
  },
  {
    key: "carName",
    label: "اسم السيارة",
    width: "w-[119px]",
  },
  {
    key: "carNumber",
    label: "رقم السيارة",
    width: "w-[85px]",
  },
];

export const CarListSection = (): JSX.Element => {
  return (
    <section className="flex flex-col  items-start gap-5 absolute top-28 left-[50px]">
      <div className="flex flex-col items-start gap-[var(--corner-radius-extra-large)] pt-[var(--corner-radius-large)] pr-[var(--corner-radius-large)] pb-[var(--corner-radius-large)] pl-[var(--corner-radius-large)] relative self-stretch w-full flex-[0_0_auto] bg-color-mode-surface-bg-screen rounded-[var(--corner-radius-large)] border-[0.3px] border-solid border-color-mode-text-icons-t-placeholder">
        {/* <header className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
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
        </header> */}

        <header className="flex flex-col items-end gap-[var(--corner-radius-extra-large)] relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
            <div className="inline-flex items-center gap-[var(--corner-radius-medium)] relative flex-[0_0_auto]">
              <button className="inline-flex flex-col items-start gap-2.5 pt-[var(--corner-radius-small)] pb-[var(--corner-radius-small)] px-2.5 relative flex-[0_0_auto] rounded-[var(--corner-radius-small)] border-[0.8px] border-solid border-color-mode-text-icons-t-placeholder hover:bg-color-mode-surface-bg-icon-gray transition-colors">
                <div className="flex items-center gap-[var(--corner-radius-small)] relative self-stretch w-full flex-[0_0_auto]">
                  <div className="inline-flex items-center justify-center gap-2.5 pt-1 pb-0 px-0 relative flex-[0_0_auto]">
                    <span className="w-fit mt-[-1.00px] font-[number:var(--body-body-2-font-weight)] text-color-mode-text-icons-t-sec text-left tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] relative font-body-body-2 text-[length:var(--body-body-2-font-size)] whitespace-nowrap [direction:rtl] [font-style:var(--body-body-2-font-style)]">
                      إضافة سيارة جديدة
                    </span>
                  </div>

                  <img
                    className="relative w-[18px] h-[18px] aspect-[1]"
                    alt="إضافة سيارة جديدة"
                    src="/img/side-icons-13.svg"
                  />
                </div>
              </button>

              <button className="flex flex-col w-[150px] items-start gap-2.5 pt-[var(--corner-radius-small)] pb-[var(--corner-radius-small)] px-2.5 relative rounded-[var(--corner-radius-small)] border-[0.8px] border-solid border-color-mode-text-icons-t-placeholder hover:bg-color-mode-surface-bg-icon-gray transition-colors">
                <div className="flex items-center gap-[var(--corner-radius-small)] relative self-stretch w-full flex-[0_0_auto]">
                  <div className="inline-flex items-center justify-center gap-2.5 pt-1 pb-0 px-0 relative flex-[0_0_auto]">
                    <span className="w-fit mt-[-1.00px] font-[number:var(--body-body-2-font-weight)] text-color-mode-text-icons-t-sec text-left tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] relative font-body-body-2 text-[length:var(--body-body-2-font-size)] whitespace-nowrap [direction:rtl] [font-style:var(--body-body-2-font-style)]">
                      اعدادات السيارات
                    </span>
                  </div>

                  <img
                    className="relative w-[18px] h-[18px] aspect-[1]"
                    alt="اعدادات السيارات"
                    src="/img/side-icons-14.svg"
                  />
                </div>
              </button>

              <button className="relative self-stretch w-[79px] rounded-[5px] border-[0.5px] border-solid border-color-mode-text-icons-t-placeholder hover:bg-color-mode-surface-bg-icon-gray transition-colors">
                <span className="absolute w-[46.84%] h-[56.67%] top-[23.33%] left-[13.92%] flex items-center justify-center font-[number:var(--subtitle-subtitle-3-font-weight)] text-color-mode-text-icons-t-sec text-[length:var(--subtitle-subtitle-3-font-size)] text-left tracking-[var(--subtitle-subtitle-3-letter-spacing)] leading-[var(--subtitle-subtitle-3-line-height)] [direction:rtl] font-subtitle-subtitle-3 whitespace-nowrap [font-style:var(--subtitle-subtitle-3-font-style)]">
                  تصدير
                </span>

                <div className="absolute w-[26.91%] h-[48.48%] top-[24.24%] left-[63.26%] flex">
                  <div className="flex-1 w-[21.26px] relative">
                    <img
                      className="absolute w-[58.33%] h-[75.00%] top-[10.04%] left-[18.48%]"
                      alt="تصدير"
                      src="/img/icon.svg"
                    />
                  </div>
                </div>
              </button>
            </div>

            <div className="flex w-[134px] items-center justify-end gap-1.5 relative">
              <h1 className="relative w-[117px] h-5 mt-[-1.00px] ml-[-7.00px] font-[number:var(--subtitle-subtitle-2-font-weight)] text-color-mode-text-icons-t-sec text-[length:var(--subtitle-subtitle-2-font-size)] tracking-[var(--subtitle-subtitle-2-letter-spacing)] leading-[var(--subtitle-subtitle-2-line-height)] [direction:rtl] font-subtitle-subtitle-2 whitespace-nowrap [font-style:var(--subtitle-subtitle-2-font-style)]">
                السيــــــــــــــارت (23)
              </h1>

              <img
                className="relative w-[18px] h-[18px] aspect-[1]"
                alt="السيارات"
                src="/img/side-icons-15.svg"
              />
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
