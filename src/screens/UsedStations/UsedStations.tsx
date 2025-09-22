import React from "react";
import { DataListSection } from "./sections/DataListSection/DataListSection";
import { ListWrapperSection } from "./sections/ListWrapperSection/ListWrapperSection";
import { PaginationSection } from "./sections/PaginationSection/PaginationSection";

export const UsedStations = (): JSX.Element => {
  return (
    <div
      className="flex flex-col w-[1035px] items-start gap-11 relative"
      data-model-id="1:15341"
    >
      <div className="flex flex-col items-end gap-[13px] relative self-stretch w-full flex-[0_0_auto]">
        <DataListSection />
        <ListWrapperSection />
      </div>

      <PaginationSection />
    </div>
  );
};
