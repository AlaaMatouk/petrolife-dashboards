import React from "react";
import { DataTableSection } from "./sections/DataTableSection/DataTableSection";
import { NavigationMenuSection } from "../Wallet/sections/NavigationMenuSection/NavigationMenuSection";
import { UserDetailsSection } from "./sections/UserDetailsSection/UserDetailsSection";
import { DashboardHeaderSection } from "../Wallet/sections/DashboardHeaderSection";

export const FinancialReports = (): JSX.Element => {
  return (
    <div
      className="bg-[color:var(--color-mode-backgrounds-opaque-subdued)] overflow-hidden w-full min-w-[1440px] min-h-[1097px] relative"
      data-model-id="1:13494"
    >
      {/* <ReportSummarySection /> */}
      <DashboardHeaderSection />

      <NavigationMenuSection />
      <UserDetailsSection />
      <DataTableSection />
    </div>
  );
};
