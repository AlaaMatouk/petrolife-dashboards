import React, { useState } from "react";
import { ControlPanelSection } from "./sections/ControlPanelSection/ControlPanelSection";
import { DataDisplaySection } from "./sections/DataDisplaySection";
import { PaginationSection } from "./sections/PaginationSection/PaginationSection";
import {
  navigationIcons,
  navigationMenuData,
  userInfo,
} from "../../constants/data";
import { Layout } from "../../components/shared";
import { Map } from "./sections/map/Map";
import { Fuel, Grid2x2 } from "lucide-react";

export const PerolifeStationLocations = (): JSX.Element => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  return (
    <Layout
      headerProps={{
        title: "لوحة التحكم / مواقع محطات بترولايف",
        titleIconSrc: <Grid2x2 className="w-5 h-5 text-gray-500" />,
        showSearch: false,
        searchProps: {
          placeholder: "بحث برقم العميل/العملية/ السجل التجاري / رقم الهاتف",
          onSearch: (query) => console.log("Search:", query),
        },
      }}
      sidebarProps={{
        sections: navigationMenuData.sections,
        topItems: navigationMenuData.topItems,
        bottomItems: navigationMenuData.bottomItems,
        userInfo: userInfo,
      }}
    >
      <Map />
      <div
        className="flex flex-col  items-start gap-[var(--corner-radius-extra-large)] pt-[var(--corner-radius-large)] pr-[var(--corner-radius-large)] pb-[var(--corner-radius-large)] pl-[var(--corner-radius-large)] relative bg-color-mode-surface-bg-screen rounded-[var(--corner-radius-large)] border-[0.3px] border-solid border-color-mode-text-icons-t-placeholder"
        data-model-id="1:13337"
      >
        <DataDisplaySection />
        <ControlPanelSection currentPage={currentPage} setTotalPages={setTotalPages} />
        <PaginationSection currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
      </div>
    </Layout>
  );
};
