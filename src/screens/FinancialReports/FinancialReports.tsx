import React from "react";
import { DataTableSection } from "./sections/DataTableSection/DataTableSection";
import { UserDetailsSection } from "./sections/UserDetailsSection/UserDetailsSection";

export const FinancialReports = (): JSX.Element => {
  return (
    <div className="flex flex-col w-full items-start gap-5">
      <DataTableSection />
    </div>
  );
};
