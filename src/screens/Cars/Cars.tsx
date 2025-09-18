import React from "react";
// import { CarDetailsSection } from "./sections/CarDetailsSection/CarDetailsSection";
import { CarListSection } from "./sections/CarListSection/CarListSection";
import { FilterOptionsSection } from "./sections/FilterOptionsSection/FilterOptionsSection";
import { NavigationMenuSection } from "../Wallet/sections/NavigationMenuSection/NavigationMenuSection";
import { DashboardHeaderSection } from "../Wallet/sections/DashboardHeaderSection/DashboardHeaderSection";

export const Cars = (): JSX.Element => {
  return (
    <div
      className="bg-[color:var(--color-mode-backgrounds-opaque-subdued)] overflow-hidden w-full min-w-[1440px] min-h-[864px] relative"
      data-model-id="1:15543"
    >
      <DashboardHeaderSection />
      <NavigationMenuSection />
      <FilterOptionsSection />
      <CarListSection />
    </div>
  );
};
