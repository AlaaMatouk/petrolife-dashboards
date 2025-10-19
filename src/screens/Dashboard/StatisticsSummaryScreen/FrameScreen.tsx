import React from "react";
import { CostAnalysisSection } from "./sections/CostAnalysisSection/CostAnalysisSection";
import { DashboardSection } from "./sections/DashboardSection/DashboardSection";
import { SummarySection } from "./sections/SummarySection/SummarySection";
import { TransactionsSection } from "./sections/TransactionsSection/TransactionsSection";

export const StatisticsSummaryScreen = (): JSX.Element => {
  return (
    <div
      className="flex flex-col items-start gap-6 relative"
      data-model-id="1:950"
    >
      <TransactionsSection />
      <CostAnalysisSection />
      <SummarySection />
      <DashboardSection />
    </div>
  );
};
