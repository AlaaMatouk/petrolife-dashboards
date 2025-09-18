import React from "react";
import { AccountSummarySection } from "./sections/AccountSummarySection/AccountSummarySection";
import { DashboardHeaderSection } from "./sections/DashboardHeaderSection";
import { NavigationMenuSection } from "./sections/NavigationMenuSection/NavigationMenuSection";
import { TransactionListSection } from "./sections/TransactionListSection/TransactionListSection";

export const Wallet = (): JSX.Element => {
  return (
    <div
      className="bg-[#f6f9fc] grid justify-items-center [align-items:start] w-screen"
      data-model-id="1:7160"
    >
      <div className="bg-[color:var(--color-mode-backgrounds-opaque-subdued)] overflow-hidden w-[1440px] h-[1112px]">
        <div className="relative h-[1423px]">
          <div className="absolute w-[1440px] h-[1423px] top-0 left-0">
            <DashboardHeaderSection />
            <NavigationMenuSection />
            <AccountSummarySection />
          </div>

          <TransactionListSection />
        </div>
      </div>
    </div>
  );
};
