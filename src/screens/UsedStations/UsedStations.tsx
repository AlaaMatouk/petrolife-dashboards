import React from "react";
import { DataListSection } from "./sections/DataListSection/DataListSection";
import { ListWrapperSection } from "./sections/ListWrapperSection/ListWrapperSection";
import { PaginationSection } from "./sections/PaginationSection/PaginationSection";

export const UsedStations = (): JSX.Element => {
  return (
    <div className="w-full">
      {/* Header Section */}
      <DataListSection />
      
      {/* Content Section */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <ListWrapperSection />
      </div>

      {/* Pagination Section */}
      <div className="mt-4">
        <PaginationSection />
      </div>
    </div>
  );
};
