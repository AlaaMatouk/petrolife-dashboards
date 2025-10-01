import React from "react";
import { FrameSubsection } from "./sections/FrameSubsection";
import { FrameWrapperSubsection } from "./sections/FrameWrapperSubsection/FrameWrapperSubsection";
import { GraphSubsection } from "./sections/GraphSubsection";
import { GroupSubsection } from "./sections/GroupSubsection";

export const Box = (): JSX.Element => {
  // Y-axis scale data for the chart
  const yAxisLabels = [110, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 0];

  return (
    <div className="relative w-[1059px] h-[328px]" data-model-id="1:6621-frame">
      <div className="fixed top-[1107px] left-0 w-[1059px] h-[328px]">
        <div className="absolute -top-px -left-px w-[1061px] h-[330px] bg-white rounded-2xl border-[0.2px] border-solid border-[#a9b4be]" />

        <div className="absolute top-[108px] left-8 w-[994px] h-40 flex flex-col gap-[39px]">
          {Array.from({ length: 5 }).map((_, index) => (
            <img
              key={index}
              className="w-[993.89px] h-px object-cover"
              alt="Line"
              src="/img/line-45.svg"
            />
          ))}
        </div>

        <GraphSubsection />
        <img
          className="absolute top-[132px] left-[389px] w-px h-[135px]"
          alt="Line"
          src="/img/line-46.svg"
        />

        <div className="absolute top-[159px] left-[382px] w-3.5 h-3.5 bg-[#5b738b] rounded-[7px] border-2 border-solid border-white" />

        <FrameSubsection />
        <FrameWrapperSubsection />
        <div className="flex flex-col w-4 items-start absolute top-[70px] left-[1030px]">
          <img
            className="relative w-[12.72px] h-[12.72px] mt-[-0.01px] aspect-[1]"
            alt="Side icons"
            src="/img/side-icons.svg"
          />

          <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
            <div className="mt-[-1.00px] relative self-stretch [font-family:'Tajawal',Helvetica] font-normal text-[#5b738b] text-[8px] tracking-[0.40px] leading-4">
              {yAxisLabels[0]}
            </div>
            {yAxisLabels.slice(1).map((label, index) => (
              <div
                key={index}
                className="relative self-stretch [font-family:'Tajawal',Helvetica] font-normal text-[#5b738b] text-[8px] tracking-[0.40px] leading-4"
              >
                {label}
              </div>
            ))}
          </div>
        </div>

        <GroupSubsection />
      </div>
    </div>
  );
};
