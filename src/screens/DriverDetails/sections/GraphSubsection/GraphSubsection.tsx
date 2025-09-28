import React, { useState } from "react";
import { FrameSubsection } from "../FrameSubsection/FrameSubsection";
import { FrameWrapperSubsection } from "../FrameWrapperSubsection/FrameWrapperSubsection";
import { Fuel } from "lucide-react";

export const GraphSubsection = (): JSX.Element => {
  const [selectedPeriod, setSelectedPeriod] = useState("12 شهر");
  
  const months = [
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
    "Jan",
  ];

  const timeOptions = [
    { id: "week", label: "اسبوع", value: "اسبوع" },
    { id: "month", label: "30 يوم", value: "30 يوم" },
    { id: "sixMonths", label: "6 شهور", value: "6 شهور" },
    { id: "year", label: "12 شهر", value: "12 شهر" },
  ];

  return (
    <div className="w-full">
      {/* First Row - Title and Time Periods on Right, Legend on Left */}
      <div className="flex items-center justify-between mb-6">
        {/* Legend - Left */}
        <div className="flex items-center">
          <FrameSubsection />
        </div>

        {/* Title and Time Periods - Right */}
        <div className="flex items-center gap-4">
          {/* Time Period Buttons */}
          <div className="flex items-center gap-2">
            {timeOptions.map((option) => (
              <button
                key={option.id}
                onClick={() => setSelectedPeriod(option.value)}
                className="px-4 py-2 text-sm rounded-lg transition-all"
                style={{
                  backgroundColor: 'white',
                  color: selectedPeriod === option.value ? '#5A66C1' : '#6B7280',
                  border: selectedPeriod === option.value ? '2px solid #5A66C1' : '2px solid #9CA3AF',
                  borderRadius: '8px'
                }}
              >
                {option.label}
              </button>
            ))}
          </div>

          {/* Title */}
          <div className="flex items-center gap-2">
            <h2 className="text-lg font-bold text-[var(--form-section-title-color)]">الاستهلاك</h2>
            <Fuel className="w-5 h-5 text-gray-500" />
          </div>
        </div>
      </div>

      {/* Second Row - Chart */}
      <div className="w-full">
        {/* Graph Background */}
        <div className="relative w-full h-[220px] flex flex-col justify-end">
          <img
            className="w-full h-full object-contain"
            alt="Graph background"
            src="/img/bgDD.png"
          />

          {/* Months row */}
          <div className="absolute bottom-0 left-0 w-full flex justify-between px-2">
            {months.map((month, index) => (
              <div
                key={index}
                className="text-[var(--text-secondary)] text-[0.8rem] md:text-[0.9rem] font-medium text-center"
              >
                {month}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
