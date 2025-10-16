import React, { useState } from "react";
import { ControlPanelSection } from "./sections/ControlPanelSection/ControlPanelSection";
import { DataDisplaySection } from "./sections/DataDisplaySection";
import { PaginationSection } from "./sections/PaginationSection/PaginationSection";
import { Map } from "./sections/map/Map";

export const PerolifeStationLocations = (): JSX.Element => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  return (
    <>
      <Map />
      <div
        className="flex flex-col  items-start gap-[var(--corner-radius-extra-large)] pt-[var(--corner-radius-large)] pr-[var(--corner-radius-large)] pb-[var(--corner-radius-large)] pl-[var(--corner-radius-large)] relative bg-color-mode-surface-bg-screen rounded-[var(--corner-radius-large)] border-[0.3px] border-solid border-color-mode-text-icons-t-placeholder"
        data-model-id="1:13337"
      >
        <DataDisplaySection />
        <ControlPanelSection currentPage={currentPage} setTotalPages={setTotalPages} />
        <PaginationSection currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
      </div>
    </>
  );
};
