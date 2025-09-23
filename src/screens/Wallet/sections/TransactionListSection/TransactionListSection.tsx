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

  // Define table columns for transactions
  const transactionColumns = [
    { key: "id", label: "رقم العملية", width: "min-w-[120px]" },
    { key: "type", label: "نوع العملية", width: "min-w-[120px]" },
    { key: "driver", label: "اسم السائق", width: "min-w-[140px]" },
    { key: "date", label: "تاريخ العملية", width: "min-w-[180px]" },
    { key: "amount", label: "قيمة العملية", width: "min-w-[120px]" },
    {
      key: "cumulative",
      label: "تراكمي العمليات (ر.س)",
      width: "min-w-[160px]",
    },
  ];

  return (
    <section className="flex flex-col w-full items-stretch gap-6 mt-6 px-4">
      {/* Top cards row */}
      <div className="flex flex-col lg:flex-row w-full gap-6">
        {/* Cards column */}
        <div className="flex flex-col flex-1 gap-6">
          {/* Fuel total cost card */}
          <div className="relative w-full h-[95px] bg-color-mode-surface-bg-screen rounded-xl border border-color-mode-text-icons-t-placeholder p-4 flex items-center justify-between">
            <div className="flex flex-col items-end">
              <span className="text-sm text-color-mode-text-icons-t-sec">
                التكلفة الإجمالية للوقود
              </span>
              <p className="text-2xl text-color-mode-text-icons-t-blue font-bold">
                14,254 <span className="text-base">ر.س</span>
              </p>
            </div>
            <div className="w-10 h-10 bg-color-mode-surface-purple-bg rounded-full flex items-center justify-center">
              <img
                src="/img/side-icons-14.svg"
                alt="icon"
                className="w-5 h-5"
              />
            </div>
          </div>

          {/* Fuel consumption card */}
          <div className="relative w-full h-[95px] bg-color-mode-surface-bg-screen rounded-xl border border-color-mode-text-icons-t-placeholder p-4 flex items-center justify-between">
            <div className="flex flex-col items-end gap-1">
              <span className="text-sm text-color-mode-text-icons-t-sec">
                اجمالي اللترات المستهلكة
              </span>
              <div className="flex items-center gap-4">
                {fuelData.map((fuel, index) => (
                  <div key={index} className="flex flex-col items-end">
                    <span className="text-lg font-bold text-color-mode-text-icons-t-blue">
                      {fuel.amount}
                    </span>
                    <span className={`${fuel.color} text-xs`}>{fuel.type}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-10 h-10 bg-color-mode-surface-purple-bg rounded-full flex items-center justify-center">
              <img
                src="/img/side-icons-15.svg"
                alt="icon"
                className="w-5 h-5"
              />
            </div>
          </div>
        </div>

        {/* Wallet card */}
        <div className="flex-1 bg-color-mode-surface-primary-blue rounded-xl border border-color-mode-text-icons-t-placeholder p-6 relative overflow-hidden text-white">
          <h3 className="text-lg mb-2">رصيــــــــد محفظتي</h3>
          <p className="text-4xl font-bold mb-4">
            7,250 <span className="text-base">ر.س</span>
          </p>
          <div className="flex gap-4">
            <button className="flex-1 border border-white rounded-full py-2 px-4 hover:bg-white hover:bg-opacity-10 transition">
              طلبات شحن المحفظة
            </button>
            <button className="flex-1 bg-white text-color-mode-text-icons-t-blue rounded-full py-2 px-4 hover:bg-gray-50 transition">
              شحن المحفظة
            </button>
          </div>
        </div>
      </div>

      {/* Transactions table */}
      <div className="flex flex-col gap-4 bg-color-mode-surface-bg-screen rounded-xl border border-color-mode-text-icons-t-placeholder p-4 overflow-x-auto">
        {/* Table header actions */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <button className="border rounded px-3 py-1 hover:bg-gray-50">
              إضافة طلب استرداد الأموال
            </button>
            <button className="border rounded px-3 py-1 hover:bg-gray-50">
              تصدير
            </button>
          </div>
          <div className="flex items-center gap-2">
            {timeFilters.map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedTimeFilter(filter)}
                className={`px-3 py-1 rounded border ${
                  selectedTimeFilter === filter
                    ? "bg-white border-color-mode-text-icons-t-blue"
                    : "bg-color-mode-surface-bg-screen border-color-mode-text-icons-t-placeholder hover:bg-gray-50"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <Table
          columns={transactionColumns}
          data={transactionData}
          className="w-full"
        />

        <Pagination
          currentPage={currentPage}
          totalPages={20}
          onPageChange={setCurrentPage}
        />
      </div>
    </section>
  );
};
