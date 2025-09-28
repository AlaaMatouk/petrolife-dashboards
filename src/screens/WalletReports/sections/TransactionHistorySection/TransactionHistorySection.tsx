import React, { useState } from "react";
// import { Table, Pagination } from "../../../../components/shared";
// import { Table } from "../../../../components/shared/Table/Table";
// import { Pagination } from "../../../../components/shared/Pagination/Pagination";
import { walletReportsTransactionData } from "../../../../constants/data";
import { Download } from "lucide-react";

interface FilterOption {
  label: string;
  value: string;
  icon: string;
}

interface TransactionData {
  id: string;
  operationName: string;
  operationType: string;
  date: string;
  balance: string;
  debit: string;
}

const filterOptions = {
  timePeriod: [{ label: "الكل", value: "all", icon: "/img/side-icons-2.svg" }],
  operationName: [
    { label: "الكل", value: "all", icon: "/img/side-icons-5.svg" },
  ],
  operationType: [
    { label: "الكل", value: "all", icon: "/img/side-icons-4.svg" },
  ],
  reportType: [
    { label: "تحليلي", value: "analytical", icon: "/img/side-icons-5.svg" },
  ],
};

const transactionData: TransactionData[] = [
  {
    id: "21A254",
    operationName: "تحويل بنكي",
    operationType: "تغذية محفظة",
    date: "21 فبراير 2025 - 5:05 ص",
    balance: "21536",
    debit: "",
  },
  {
    id: "21A254",
    operationName: "وقود",
    operationType: "فاتورة",
    date: "21 فبراير 2025 - 5:05 ص",
    balance: "21536",
    debit: "",
  },
  {
    id: "21A254",
    operationName: "اشتراك مركبات",
    operationType: "استرداد",
    date: "21 فبراير 2025 - 5:05 ص",
    balance: "21536",
    debit: "20",
  },
  {
    id: "21A254",
    operationName: "استرداد",
    operationType: "تغذية محفظة",
    date: "21 فبراير 2025 - 5:05 ص",
    balance: "21536",
    debit: "20",
  },
  {
    id: "21A254",
    operationName: "تحويل بنكي",
    operationType: "تغذية محفظة",
    date: "21 فبراير 2025 - 5:05 ص",
    balance: "21536",
    debit: "20",
  },
  {
    id: "21A254",
    operationName: "تحويل بنكي",
    operationType: "تغذية محفظة",
    date: "21 فبراير 2025 - 5:05 ص",
    balance: "21536",
    debit: "20",
  },
  {
    id: "21A254",
    operationName: "تحويل بنكي",
    operationType: "تغذية محفظة",
    date: "21 فبراير 2025 - 5:05 ص",
    balance: "21536",
    debit: "20",
  },
  {
    id: "21A254",
    operationName: "تحويل بنكي",
    operationType: "تغذية محفظة",
    date: "21 فبراير 2025 - 5:05 ص",
    balance: "21536",
    debit: "20",
  },
  {
    id: "21A254",
    operationName: "تحويل بنكي",
    operationType: "تغذية محفظة",
    date: "21 فبراير 2025 - 5:05 ص",
    balance: "21536",
    debit: "20",
  },
  {
    id: "21A254",
    operationName: "تحويل بنكي",
    operationType: "تغذية محفظة",
    date: "21 فبراير 2025 - 5:05 ص",
    balance: "21536",
    debit: "20",
  },
];

const paginationNumbers = [20, "...", 7, 6, 5, 4, 3, 2, 1];

export const TransactionHistorySection = (): JSX.Element => {
  const [selectedFilters] = useState({
    timePeriod: "all",
    operationName: "all",
    operationType: "all",
    reportType: "analytical",
  });

  const [currentPage, setCurrentPage] = useState(3);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const FilterDropdown = ({
    label,
    filterType,
    options,
  }: {
    label: string;
    filterType: string;
    options: FilterOption[];
  }) => {
    const selectedOption = options.find(
      (opt) =>
        opt.value ===
        selectedFilters[filterType as keyof typeof selectedFilters]
    );

    return (
      <div className="flex-col items-end gap-[var(--corner-radius-extra-small)] flex-1 grow flex relative">
        <label className="relative self-stretch mt-[-1.00px] font-caption-caption-1 font-[number:var(--caption-caption-1-font-weight)] text-color-mode-text-icons-t-placeholder text-[length:var(--caption-caption-1-font-size)] tracking-[var(--caption-caption-1-letter-spacing)] leading-[var(--caption-caption-1-line-height)] [direction:rtl] [font-style:var(--caption-caption-1-font-style)]">
          {label}
        </label>

        <div className="items-start pt-[var(--corner-radius-small)] pb-[var(--corner-radius-small)] px-2.5 border-[0.5px] border-solid border-color-mode-text-icons-t-placeholder flex flex-col gap-2.5 relative self-stretch w-full flex-[0_0_auto] rounded-[var(--corner-radius-small)]">
          <button
            className="items-center justify-between self-stretch w-full flex-[0_0_auto] flex relative"
            onClick={() => {}}
            aria-label={`اختر ${label}`}
          >
            <img
              className="relative w-[18px] h-[18px] aspect-[1]"
              alt="أيقونة القائمة المنسدلة"
              src={selectedOption?.icon || "/img/side-icons-2.svg"}
            />

            <div className="relative w-fit mt-[-1.00px] font-[number:var(--body-body-2-font-weight)] text-color-mode-text-icons-t-sec text-[length:var(--body-body-2-font-size)] text-left tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] [direction:rtl] font-body-body-2 whitespace-nowrap [font-style:var(--body-body-2-font-style)]">
              {selectedOption?.label || "الكل"}
            </div>
          </button>
        </div>
      </div>
    );
  };

  const TableHeader = ({ children }: { children: React.ReactNode }) => (
    <div className="flex items-center justify-end gap-2.5 pr-[var(--corner-radius-none)] pl-[var(--corner-radius-none)] py-2.5 relative self-stretch w-full flex-[0_0_auto] bg-color-mode-surface-bg-icon-gray">
      <div className="relative w-fit mt-[-1.00px] font-[number:var(--body-body-2-font-weight)] text-black text-[length:var(--body-body-2-font-size)] text-left tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] [direction:rtl] font-body-body-2 whitespace-nowrap [font-style:var(--body-body-2-font-style)]">
        {children}
      </div>
    </div>
  );

  const TableCell = ({
    children,
    isEmpty = false,
  }: {
    children?: React.ReactNode;
    isEmpty?: boolean;
  }) => {
    if (isEmpty) {
      return (
        <div className="relative self-stretch w-full h-[42px] border-b-[0.2px] [border-bottom-style:solid] border-color-mode-text-icons-t-placeholder" />
      );
    }

    return (
      <div className="flex items-center justify-end gap-2.5 pr-[var(--corner-radius-none)] pl-[var(--corner-radius-none)] py-2.5 relative self-stretch w-full flex-[0_0_auto] border-b-[0.2px] [border-bottom-style:solid] border-color-mode-text-icons-t-placeholder">
        <div className="mt-[-0.20px] font-[number:var(--body-body-2-font-weight)] text-black tracking-[var(--body-body-2-letter-spacing)] relative w-fit font-body-body-2 text-[length:var(--body-body-2-font-size)] leading-[var(--body-body-2-line-height)] whitespace-nowrap [font-style:var(--body-body-2-font-style)]">
          {children}
        </div>
      </div>
    );
  };

  const DateCell = ({ children }: { children: React.ReactNode }) => (
    <div className="flex items-center justify-end gap-2.5 pr-[var(--corner-radius-none)] pl-[var(--corner-radius-none)] py-2.5 relative self-stretch w-full flex-[0_0_auto] border-b-[0.2px] [border-bottom-style:solid] border-color-mode-text-icons-t-placeholder">
      <p className="relative w-fit mt-[-0.20px] font-body-body-2 font-[number:var(--body-body-2-font-weight)] text-black text-[length:var(--body-body-2-font-size)] text-left tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] whitespace-nowrap [direction:rtl] [font-style:var(--body-body-2-font-style)]">
        {children}
      </p>
    </div>
  );

  const OperationNameCell = ({ children }: { children: React.ReactNode }) => (
    <div className="flex items-center justify-end gap-2.5 pr-[var(--corner-radius-none)] pl-[var(--corner-radius-none)] py-2.5 relative self-stretch w-full flex-[0_0_auto] border-b-[0.2px] [border-bottom-style:solid] border-color-mode-text-icons-t-placeholder">
      <div className="relative w-fit mt-[-0.20px] font-[number:var(--body-body-2-font-weight)] text-black text-[length:var(--body-body-2-font-size)] text-left tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] [direction:rtl] font-body-body-2 whitespace-nowrap [font-style:var(--body-body-2-font-style)]">
        {children}
      </div>
    </div>
  );

  const OperationTypeCell = ({ children }: { children: React.ReactNode }) => (
    <div className="flex items-center justify-end gap-2.5 pr-[var(--corner-radius-none)] pl-[var(--corner-radius-none)] py-2.5 relative self-stretch w-full flex-[0_0_auto] border-b-[0.2px] [border-bottom-style:solid] border-color-mode-text-icons-t-placeholder">
      <div className="relative w-fit mt-[-0.20px] font-[number:var(--body-body-2-font-weight)] text-black text-[length:var(--body-body-2-font-size)] text-left tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] [direction:rtl] font-body-body-2 whitespace-nowrap [font-style:var(--body-body-2-font-style)]">
        {children}
      </div>
    </div>
  );

  const TransactionIdCell = ({ children }: { children: React.ReactNode }) => (
    <div className="flex items-center justify-end gap-2.5 pr-[var(--corner-radius-none)] pl-[var(--corner-radius-none)] py-2.5 relative self-stretch w-full flex-[0_0_auto] border-b-[0.2px] [border-bottom-style:solid] border-color-mode-text-icons-t-placeholder">
      <div className="relative w-fit mt-[-0.20px] font-body-body-2 font-[number:var(--body-body-2-font-weight)] text-black text-[length:var(--body-body-2-font-size)] tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] whitespace-nowrap [font-style:var(--body-body-2-font-style)]">
        {children}
      </div>
    </div>
  );

  const PaginationButton = ({
    children,
    isActive = false,
    onClick,
  }: {
    children: React.ReactNode;
    isActive?: boolean;
    onClick?: () => void;
  }) => {
    const baseClasses =
      "flex flex-col w-8 h-8 items-center justify-center gap-2.5 px-2 py-0 relative rounded overflow-hidden";
    const activeClasses = "bg-color-mode-surface-primary-blue";
    const inactiveClasses =
      "bg-color-mode-surface-bg-screen border-[0.5px] border-solid border-color-mode-text-icons-t-placeholder";

    return (
      <button
        className={`${baseClasses} ${
          isActive ? activeClasses : inactiveClasses
        }`}
        onClick={onClick}
        aria-label={`الصفحة ${children}`}
      >
        <div className="flex flex-col w-[22px] h-[22px] items-center justify-center gap-2.5 p-2.5 relative ml-[-3.00px] mr-[-3.00px] rounded-sm">
          <div
            className={`mt-[-11.00px] mb-[-9.00px] ml-[-2.50px] mr-[-2.50px] tracking-[var(--subtitle-subtitle-3-letter-spacing)] relative w-fit text-[length:var(--subtitle-subtitle-3-font-size)] leading-[var(--subtitle-subtitle-3-line-height)] whitespace-nowrap [font-style:var(--subtitle-subtitle-3-font-style)] ${
              isActive
                ? "font-[number:var(--subtitle-subtitle-3-font-weight)] text-color-mode-text-icons-t-btn-negative font-subtitle-subtitle-3"
                : "font-[number:var(--body-body-2-font-weight)] text-color-mode-text-icons-t-sec font-body-body-2"
            }`}
          >
            {children}
          </div>
        </div>
      </button>
    );
  };

  return (
    <section
      className="flex flex-col items-start gap-[var(--corner-radius-extra-large)] pt-[var(--corner-radius-large)] pr-[var(--corner-radius-large)] pb-[var(--corner-radius-large)] pl-[var(--corner-radius-large)] relative self-stretch w-full flex-[0_0_auto] bg-color-mode-surface-bg-screen rounded-[var(--corner-radius-large)] border-[0.3px] border-solid border-color-mode-text-icons-t-placeholder"
      role="region"
      aria-labelledby="transaction-history-title"
    >
      <header className="flex flex-col items-end gap-[var(--corner-radius-extra-large)] relative self-stretch w-full flex-[0_0_auto]">
        <div className="items-center justify-between self-stretch w-full flex-[0_0_auto] flex relative">
          <button
            className="relative w-[79px] h-[30px] rounded-[5px] border-[0.5px] border-solid border-color-mode-text-icons-t-placeholder flex items-center justify-center gap-1"
            aria-label="تصدير البيانات"
          >
            <span className="font-[number:var(--subtitle-subtitle-3-font-weight)] text-color-mode-text-icons-t-sec text-[length:var(--subtitle-subtitle-3-font-size)] text-left tracking-[var(--subtitle-subtitle-3-letter-spacing)] leading-[var(--subtitle-subtitle-3-line-height)] [direction:rtl] font-subtitle-subtitle-3 whitespace-nowrap [font-style:var(--subtitle-subtitle-3-font-style)]">
              تصدير
            </span>
            <Download className="w-4 h-4 text-gray-500" />
          </button>

          <div className="inline-flex items-center gap-1.5 relative flex-[0_0_auto]">
            <h1
              id="transaction-history-title"
              className="relative w-[126px] h-5 mt-[-1.00px] font-[number:var(--subtitle-subtitle-2-font-weight)] text-color-mode-text-icons-t-sec text-[length:var(--subtitle-subtitle-2-font-size)] tracking-[var(--subtitle-subtitle-2-letter-spacing)] leading-[var(--subtitle-subtitle-2-line-height)] [direction:rtl] font-subtitle-subtitle-2 whitespace-nowrap [font-style:var(--subtitle-subtitle-2-font-style)]"
            >
              تقارير المحفظة
            </h1>

            <img
              className="relative w-[18px] h-[18px] aspect-[1]"
              alt="أيقونة جانبية"
              src="/img/side-icons-1.svg"
            />
          </div>
        </div>
      </header>

      <div className="flex flex-col items-start gap-[var(--corner-radius-large)] relative self-stretch w-full flex-[0_0_auto]">
        <div
          className="flex items-center gap-[13px] relative self-stretch w-full flex-[0_0_auto]"
          role="group"
          aria-label="مرشحات البحث"
        >
          <FilterDropdown
            label="الفترة الزمنية"
            filterType="timePeriod"
            options={filterOptions.timePeriod}
          />
          <FilterDropdown
            label="اسم العملية"
            filterType="operationName"
            options={filterOptions.operationName}
          />
          <FilterDropdown
            label="نوع العملية"
            filterType="operationType"
            options={filterOptions.operationType}
          />
          <FilterDropdown
            label="نوع التقرير"
            filterType="reportType"
            options={filterOptions.reportType}
          />
        </div>

        <div
          className="flex items-start justify-between relative self-stretch w-full flex-[0_0_auto]"
          role="table"
          aria-label="جدول تاريخ المعاملات"
        >
          <div
            className="flex flex-col w-[95px] items-end relative"
            role="columnheader"
          >
            <TableHeader>الرصيد</TableHeader>
            {walletReportsTransactionData.map((transaction, index) => (
              <TableCell key={`balance-${index}`}>
                {transaction.balance}
              </TableCell>
            ))}
          </div>

          <div
            className="flex flex-col w-[106px] items-end relative"
            role="columnheader"
          >
            <TableHeader>مدين</TableHeader>
            <TableCell isEmpty />
            <TableCell isEmpty />
            {transactionData.slice(2).map((transaction, index) => (
              <TableCell key={`debit-${index + 2}`}>
                {transaction.debit}
              </TableCell>
            ))}
          </div>

          <div
            className="flex flex-col items-end relative flex-1 grow"
            role="columnheader"
          >
            <TableHeader>اسم العملية</TableHeader>
            {walletReportsTransactionData.map((transaction, index) => (
              <OperationNameCell key={`operation-name-${index}`}>
                {transaction.operationName}
              </OperationNameCell>
            ))}
          </div>

          <div
            className="flex flex-col items-end relative flex-1 grow"
            role="columnheader"
          >
            <TableHeader>نوع العملية</TableHeader>
            {walletReportsTransactionData.map((transaction, index) => (
              <OperationTypeCell key={`operation-type-${index}`}>
                {transaction.operationType}
              </OperationTypeCell>
            ))}
          </div>

          <div
            className="flex flex-col w-[214px] items-end relative"
            role="columnheader"
          >
            <TableHeader>التاريخ</TableHeader>
            {walletReportsTransactionData.map((transaction, index) => (
              <DateCell key={`date-${index}`}>{transaction.date}</DateCell>
            ))}
          </div>

          <div
            className="flex flex-col w-[130px] items-end relative"
            role="columnheader"
          >
            <TableHeader>رقم العملية</TableHeader>
            {walletReportsTransactionData.map((transaction, index) => (
              <TransactionIdCell key={`id-${index}`}>
                {transaction.id}
              </TransactionIdCell>
            ))}
          </div>
        </div>
      </div>

      <nav
        className="flex items-center justify-around gap-[46px] relative self-stretch w-full flex-[0_0_auto]"
        role="navigation"
        aria-label="تنقل الصفحات"
      >
        <div className="inline-flex items-start gap-2 relative flex-[0_0_auto]">
          <button
            className="flex w-[72px] h-8 items-center justify-center gap-2 px-2 py-0 relative bg-color-mode-surface-bg-screen rounded overflow-hidden border-[0.5px] border-solid border-color-mode-text-icons-t-placeholder"
            onClick={() => handlePageChange(currentPage + 1)}
            aria-label="الصفحة التالية"
          >
            <img
              className="relative w-4 h-4"
              alt="سهم يمين"
              src="/img/icon-16-arrow-right.svg"
            />

            <div className="relative w-fit font-[number:var(--body-body-2-font-weight)] text-color-mode-text-icons-t-sec text-[length:var(--body-body-2-font-size)] text-left tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] [direction:rtl] font-body-body-2 whitespace-nowrap [font-style:var(--body-body-2-font-style)]">
              التالي
            </div>
          </button>

          {paginationNumbers.map((pageNum, index) => {
            if (pageNum === "...") {
              return (
                <div
                  key={`ellipsis-${index}`}
                  className="flex flex-col w-8 h-8 items-center justify-center gap-2.5 px-2 py-0 relative bg-color-mode-surface-bg-screen rounded overflow-hidden border-[0.5px] border-solid border-color-mode-text-icons-t-placeholder"
                >
                  <div className="flex flex-col w-[22px] h-[22px] items-center justify-center gap-2.5 p-2.5 relative ml-[-3.00px] mr-[-3.00px] rounded-sm">
                    <div className="relative w-fit mt-[-11.00px] mb-[-9.00px] ml-[-5.00px] mr-[-5.00px] font-[number:var(--body-body-2-font-weight)] text-color-mode-text-icons-t-sec text-[length:var(--body-body-2-font-size)] tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] font-body-body-2 whitespace-nowrap [font-style:var(--body-body-2-font-style)]">
                      ...
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <PaginationButton
                key={`page-${pageNum}`}
                isActive={pageNum === currentPage}
                onClick={() => handlePageChange(pageNum as number)}
              >
                {pageNum}
              </PaginationButton>
            );
          })}

          <button
            className="flex w-[72px] h-8 items-center justify-center gap-[5px] px-2 py-0 relative bg-color-mode-surface-bg-screen rounded overflow-hidden border-[0.5px] border-solid border-color-mode-text-icons-t-placeholder"
            onClick={() => handlePageChange(currentPage - 1)}
            aria-label="الصفحة السابقة"
          >
            <div className="relative w-fit ml-[-3.50px] font-[number:var(--body-body-2-font-weight)] text-color-mode-text-icons-t-sec text-[length:var(--body-body-2-font-size)] text-left tracking-[var(--body-body-2-letter-spacing)] leading-[var(--body-body-2-line-height)] [direction:rtl] font-body-body-2 whitespace-nowrap [font-style:var(--body-body-2-font-style)]">
              السابق
            </div>

            <img
              className="mr-[-3.50px] relative w-4 h-4"
              alt="سهم يسار"
              src="/img/icon-16-arrow-left.svg"
            />
          </button>
        </div>
      </nav>
    </section>
  );
};
