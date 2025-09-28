import { Fuel, Calendar } from "lucide-react";
import React, { useState } from "react";

export const DataListSection = (): JSX.Element => {
  const [selectedPeriod, setSelectedPeriod] = useState("12 شهر");

  const timePeriodsData = [
    { id: "week", label: "اسبوع", value: "اسبوع" },
    { id: "30days", label: "30 يوم", value: "30 يوم" },
    { id: "6months", label: "6 شهور", value: "6 شهور" },
    { id: "12months", label: "12 شهر", value: "12 شهر" },
  ];

  const handlePeriodSelect = (period: string) => {
    setSelectedPeriod(period);
  };

  return (
    <div className="w-full">
      {/* Header Section - Calendar + Time Periods (Left), Title (Right) */}
      <div className="flex items-center justify-between mb-6">
        {/* Calendar Icon + Time Period Buttons - Left */}
        <div className="flex items-center gap-4">
          <Calendar className="w-4 h-4 text-gray-500" />
          <div className="flex items-center gap-2">
            {timePeriodsData.map((period) => (
              <button
                key={period.id}
                onClick={() => handlePeriodSelect(period.value)}
                className="px-4 py-2 text-sm rounded-lg transition-all"
                style={{
                  backgroundColor: 'white',
                  color: selectedPeriod === period.value ? '#5A66C1' : '#6B7280',
                  border: selectedPeriod === period.value ? '2px solid #5A66C1' : '2px solid #9CA3AF',
                  borderRadius: '8px'
                }}
              >
                {period.label}
              </button>
            ))}
          </div>
        </div>

        {/* Title - Right */}
        <div className="flex items-center gap-2">
          <h2 className="text-lg font-bold text-[var(--form-section-title-color)]">المحطات المستخدمة</h2>
          <Fuel className="w-5 h-5 text-gray-500" />
        </div>
      </div>
    </div>
  );
};
