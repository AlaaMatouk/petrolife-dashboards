import React from "react";

export const FrameWrapperSubsection = (): JSX.Element => {
  const tableData = [
    {
      cumulativeOperations: "200",
      operationValue: "20",
      operationDate: "21 فبراير 2025 - 5:05 ص",
      driverName: "أحمد محمد",
      operationType: "وقود 91",
      operationCode: "21A254",
    },
    {
      cumulativeOperations: "180",
      operationValue: "20",
      operationDate: "21 فبراير 2025 - 5:05 ص",
      driverName: "--",
      operationType: "منتج",
      operationCode: "21A254",
    },
    {
      cumulativeOperations: "160",
      operationValue: "20",
      operationDate: "21 فبراير 2025 - 5:05 ص",
      driverName: "أحمد محمد",
      operationType: "وقود 91",
      operationCode: "21A254",
    },
    {
      cumulativeOperations: "140",
      operationValue: "20",
      operationDate: "21 فبراير 2025 - 5:05 ص",
      driverName: "أحمد محمد",
      operationType: "وقود 91",
      operationCode: "21A254",
    },
    {
      cumulativeOperations: "120",
      operationValue: "20",
      operationDate: "21 فبراير 2025 - 5:05 ص",
      driverName: "أحمد محمد",
      operationType: "وقود 91",
      operationCode: "21A254",
    },
  ];

  const columns = [
    {
      key: "cumulativeOperations",
      title: "تراكمي العمليات (ر.س)",
      width: "flex-1",
    },
    { key: "operationValue", title: "قيمة العملية", width: "w-[151px]" },
    { key: "operationDate", title: "تاريخ العملية", width: "w-[214px]" },
    { key: "driverName", title: "اسم السائق", width: "w-[184px]" },
    { key: "operationType", title: "نوع العملية", width: "w-[152px]" },
    { key: "operationCode", title: "كود العملية", width: "w-[133px]" },
  ];

  return (
    <div className="flex flex-col h-[252px] items-end gap-4 relative self-stretch w-full">
      <div className="flex items-start justify-end relative self-stretch w-full flex-[0_0_auto]">
        {columns.map((column, columnIndex) => (
          <div
            key={column.key}
            className={`flex flex-col items-end relative ${column.width === "flex-1" ? "flex-1 grow" : column.width}`}
          >
            <div className="flex items-center justify-end gap-2.5 px-0 py-2.5 relative self-stretch w-full flex-[0_0_auto] bg-[#f5f6f766]">
              <div className="mt-[-1.00px] font-normal text-black text-sm text-left tracking-[0.25px] leading-[22.4px] [direction:rtl] relative w-fit [font-family:'Tajawal',Helvetica] whitespace-nowrap">
                {column.title}
              </div>
            </div>

            {tableData.map((row, rowIndex) => (
              <div
                key={rowIndex}
                className={`flex items-center justify-end gap-2.5 px-0 py-2.5 relative self-stretch w-full flex-[0_0_auto] ${rowIndex < tableData.length - 1 ? "border-b-[0.2px] [border-bottom-style:solid] border-[#a9b4be]" : ""}`}
              >
                {column.key === "operationDate" ? (
                  <p className="relative w-fit mt-[-0.20px] [font-family:'Tajawal',Helvetica] font-normal text-black text-sm text-left tracking-[0.25px] leading-[22.4px] whitespace-nowrap [direction:rtl]">
                    {row[column.key]}
                  </p>
                ) : column.key === "driverName" && row[column.key] !== "--" ? (
                  <div className="mt-[-0.20px] font-normal text-black text-sm text-left tracking-[0.25px] leading-[22.4px] [direction:rtl] relative w-fit [font-family:'Tajawal',Helvetica] whitespace-nowrap">
                    {row[column.key]}
                  </div>
                ) : column.key === "driverName" && row[column.key] === "--" ? (
                  <div className="mt-[-0.20px] font-normal text-black text-sm tracking-[0.25px] leading-[22.4px] relative w-fit [font-family:'Tajawal',Helvetica] whitespace-nowrap">
                    {row[column.key]}
                  </div>
                ) : column.key === "operationType" ? (
                  <div className="mt-[-0.20px] font-normal text-black text-sm text-left tracking-[0.25px] leading-[22.4px] [direction:rtl] relative w-fit [font-family:'Tajawal',Helvetica] whitespace-nowrap">
                    {row[column.key]}
                  </div>
                ) : (
                  <div className="relative w-fit mt-[-0.20px] [font-family:'Tajawal',Helvetica] font-normal text-black text-sm tracking-[0.25px] leading-[22.4px] whitespace-nowrap">
                    {row[column.key]}
                  </div>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
