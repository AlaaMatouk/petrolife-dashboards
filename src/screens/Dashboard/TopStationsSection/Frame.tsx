import React from "react";
import { UsageChartSection } from "./sections/UsageChartSection/UsageChartSection";
import { UsageChartWrapperSection } from "./sections/UsageChartWrapperSection/UsageChartWrapperSection";

export const TopStationsSection = (): JSX.Element => {
  return (
    <div
      className="flex h-[504px] items-start justify-end gap-5 relative"
      data-model-id="1:6850"
    >
      <UsageChartSection />
      <UsageChartWrapperSection />
    </div>
  );
};
