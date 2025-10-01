import { useState } from "react";
import { Table, Pagination, ExportButton, RTLSelect } from "../../../../components/shared";
import { UserRound, ChartNoAxesCombined } from "lucide-react";

const clientData = {
  phone: "00966254523658",
  commercialRecord: "GDHGD2543",
  clientName: "الشركة المتحدة العالمية",
  city: "الرياض",
  taxNumber: "245863564",
  clientCode: "21546354",
};

const filterOptions = [
  { 
    label: "الفترة الزمنية", 
    value: "الكل", 
    icon: "/img/side-icons-16.svg",
    options: [
      { value: "الكل", label: "الكل" },
      { value: "اخر اسبوع", label: "اخر اسبوع" },
      { value: "اخر 30 يوم", label: "اخر 30 يوم" },
      { value: "اخر 6 شهور", label: "اخر 6 شهور" },
      { value: "اخر 12 شهر", label: "اخر 12 شهر" }
    ]
  },
  {
    label: "كود الســـــــــائق",
    value: "الكل",
    icon: "/img/side-icons-17.svg",
    options: [
      { value: "الكل", label: "الكل" },
      { value: "21A254", label: "21A254" },
      { value: "21A255", label: "21A255" },
      { value: "21A256", label: "21A256" }
    ]
  },
  {
    label: "المديــــــــــــنة",
    value: "الكل",
    icon: "/img/side-icons-18.svg",
    options: [
      { value: "الكل", label: "الكل" },
      { value: "الرياض", label: "الرياض" },
      { value: "جدة", label: "جدة" },
      { value: "الدمام", label: "الدمام" }
    ]
  },
  { 
    label: "نوع المنتج", 
    value: "الكل", 
    icon: "/img/side-icons-19.svg",
    options: [
      { value: "الكل", label: "الكل" },
      { value: "وقود", label: "وقود" },
      { value: "بنزين 91", label: "بنزين 91" },
      { value: "بنزين 95", label: "بنزين 95" }
    ]
  },
  { 
    label: "نوع التقرير", 
    value: "تحليلي", 
    icon: "/img/side-icons-20.svg",
    options: [
      { value: "تحليلي", label: "تحليلي" },
      { value: "تفصيلي", label: "تفصيلي" },
      { value: "ملخص", label: "ملخص" }
    ]
  },
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

// Removed paginationNumbers - using reusable Pagination component

// Define table columns for the reusable Table component
const tableColumns = [
  {
    key: "city",
    label: "المدينة",
    width: "flex-1 grow min-w-[120px]",
  },
  {
    key: "stationName",
    label: "اسم المحطة",
    width: "w-[150px] min-w-[150px]",
  },
  {
    key: "date",
    label: "التاريخ",
    width: "w-[220px] min-w-[220px]",
  },
  {
    key: "operationNumber",
    label: "رقم العملية",
    width: "w-[140px] min-w-[140px]",
  },
  {
    key: "quantity",
    label: "الكمية",
    width: "w-[100px] min-w-[100px]",
  },
  {
    key: "productName",
    label: "اسم المنتج",
    width: "flex-1 grow min-w-[140px]",
  },
  {
    key: "productNumber",
    label: "رقم المنتج",
    width: "w-[140px] min-w-[140px]",
  },
  {
    key: "productType",
    label: "نوع المنتج",
    width: "w-[120px] min-w-[120px]",
  },
  {
    key: "driverName",
    label: "اسم السائق",
    width: "flex-1 grow min-w-[140px]",
  },
  {
    key: "driverCode",
    label: "كود السائق",
    width: "w-[140px] min-w-[140px]",
  },
];

export const DataTableSection = (): JSX.Element => {
  const [filters, setFilters] = useState({
    timePeriod: "الكل",
    driverCode: "الكل",
    city: "الكل",
    productType: "الكل",
    reportType: "تحليلي",
  });

  const handleFilterChange = (filterKey: string, value: string) => {
    setFilters(prev => ({
      ...prev,
      [filterKey]: value
    }));
  };
  return (
    <section
      className="flex flex-col w-full max-w-[1200px] mx-auto gap-5 px-4"
      role="main"
      aria-label="قسم جدول البيانات"
    >
      <article className="flex flex-col items-start gap-[var(--corner-radius-extra-large)] pt-[var(--corner-radius-large)] pr-[var(--corner-radius-large)] pb-[var(--corner-radius-large)] pl-[var(--corner-radius-large)] relative self-stretch w-full flex-[0_0_auto] bg-color-mode-surface-bg-screen rounded-[var(--corner-radius-large)] border-[0.3px] border-solid border-color-mode-text-icons-t-placeholder">
        <div className="flex flex-col items-end gap-[var(--corner-radius-medium)] relative self-stretch w-full flex-[0_0_auto]">
          <header className="inline-flex items-center gap-1.5 relative flex-[0_0_auto]">
            <h2 className="relative w-[103px] h-5 mt-[-1.00px] font-subtitle-subtitle-2 font-[number:var(--subtitle-subtitle-2-font-weight)] text-color-mode-text-icons-t-sec text-[length:var(--subtitle-subtitle-2-font-size)] tracking-[var(--subtitle-subtitle-2-letter-spacing)] leading-[var(--subtitle-subtitle-2-line-height)] whitespace-nowrap [direction:rtl] [font-style:var(--subtitle-subtitle-2-font-style)]">
              بيانات العميل
            </h2>
            <UserRound className="relative w-[18px] h-[18px] text-gray-500" />
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
            <ExportButton />

            <div className="inline-flex items-center gap-1.5 relative flex-[0_0_auto]">
              <h2 className="relative w-[103px] h-5 mt-[-1.00px] font-subtitle-subtitle-2 font-[number:var(--subtitle-subtitle-2-font-weight)] text-color-mode-text-icons-t-sec text-[length:var(--subtitle-subtitle-2-font-size)] tracking-[var(--subtitle-subtitle-2-letter-spacing)] leading-[var(--subtitle-subtitle-2-line-height)] whitespace-nowrap [direction:rtl] [font-style:var(--subtitle-subtitle-2-font-style)]">
                التقارير المالية
              </h2>
              <ChartNoAxesCombined className="relative w-[18px] h-[18px] text-gray-500" />
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
              <RTLSelect
                key={index}
                label={filter.label}
                value={filters[filter.label === "الفترة الزمنية" ? "timePeriod" : 
                              filter.label === "كود الســـــــــائق" ? "driverCode" :
                              filter.label === "المديــــــــــــنة" ? "city" :
                              filter.label === "نوع المنتج" ? "productType" : "reportType"]}
                onChange={(value) => handleFilterChange(
                  filter.label === "الفترة الزمنية" ? "timePeriod" : 
                  filter.label === "كود الســـــــــائق" ? "driverCode" :
                  filter.label === "المديــــــــــــنة" ? "city" :
                  filter.label === "نوع المنتج" ? "productType" : "reportType", 
                  value
                )}
                options={filter.options}
                placeholder={filter.value}
              />
            ))}
          </div>

          <div className="flex flex-col items-start gap-[var(--corner-radius-large)] relative self-stretch w-full flex-[0_0_auto]">
            <Table
              columns={tableColumns}
              data={tableData}
              className="w-full"
              headerClassName="bg-color-mode-surface-bg-icon-gray"
              rowClassName="hover:bg-gray-50"
              cellClassName="text-right [direction:rtl] whitespace-nowrap"
            />
            <Pagination
              currentPage={3}
              totalPages={20}
              onPageChange={(page) => console.log(`Navigate to page ${page}`)}
              className="flex items-center justify-around gap-[46px] relative self-stretch w-full flex-[0_0_auto]"
            />
          </div>
        </div>
      </article>
    </section>
  );
};
