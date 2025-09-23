import React from "react";
import { FrameSubsection } from "../FrameSubsection/FrameSubsection";
import { FrameWrapperSubsection } from "../FrameWrapperSubsection/FrameWrapperSubsection";

export const GraphSubsection = (): JSX.Element => {
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

  return (
    <div className="w-full max-w-[1100px] mx-auto flex flex-col gap-6 px-4">
      {/* Top Sections */}
      <FrameSubsection />
      <FrameWrapperSubsection />

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
              className="text-[#5b738b] text-[0.8rem] md:text-[0.9rem] font-medium text-center"
            >
              {month}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
