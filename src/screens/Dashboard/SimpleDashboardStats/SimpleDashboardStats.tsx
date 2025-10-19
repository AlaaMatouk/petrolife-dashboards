import React from "react";
import { FrameSubsection } from "./sections/FrameSubsection";
import { FrameWrapperSubsection } from "./sections/FrameWrapperSubsection/FrameWrapperSubsection";

export const SimpleDashboardStats = (): JSX.Element => {
  return (
    <div className="relative w-[1059px] h-[342px]" data-model-id="1:7066-frame">
      <div className="fixed top-[2707px] left-0 w-[1059px] h-[342px]">
        <div className="absolute -top-px -left-px w-[1061px] h-[344px] bg-white rounded-2xl border-[0.3px] border-solid border-[#a9b4be]" />

        <div className="flex flex-col w-[1003px] items-start gap-7 absolute top-[18px] left-[34px]">
          <FrameSubsection />
          <FrameWrapperSubsection />
        </div>
      </div>
    </div>
  );
};
