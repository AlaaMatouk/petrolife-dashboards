import React, { useState } from "react";
import { ContentSection } from "./sections/ContentSection/ContentSection";
import { HeaderSection } from "./sections/HeaderSection/HeaderSection";
import { PaginationSection } from "./sections/PaginationSection/PaginationSection";
import { navigationIcons, navigationMenuData, userInfo } from "../../constants/data";
import { Layout } from "../../components/shared";

export const WalletChargeRequests = (): JSX.Element => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [selectedTimeFilter, setSelectedTimeFilter] = useState("اخر 12 شهر");

  return (
    <Layout
      headerProps={{
        title: "محفظــــــــــــــتي / طلبات شحن المحفظة",
        titleIconSrc: <img src="/img/side-icons-6.svg" alt="Wallet" className="w-5 h-5" />,
        showSearch: false,
        searchProps: {
          placeholder: "بحث برقم العميل/العملية/ السجل التجاري / رقم الهاتف",
          onSearch: (query) => {}, // console.log("Search:", query)
        },
      }}
      sidebarProps={{
        sections: navigationMenuData.sections,
        topItems: navigationMenuData.topItems,
        bottomItems: navigationMenuData.bottomItems,
        userInfo: userInfo,
      }}
    >
      <div className="flex flex-col items-start gap-6 pt-[var(--corner-radius-large)] pr-[var(--corner-radius-large)] pb-[var(--corner-radius-large)] pl-[var(--corner-radius-large)] relative self-stretch w-full flex-[0_0_auto] bg-color-mode-surface-bg-screen rounded-[var(--corner-radius-large)] border-[0.3px] border-solid border-color-mode-text-icons-t-placeholder">
        <HeaderSection selectedTimeFilter={selectedTimeFilter} onFilterChange={setSelectedTimeFilter} />
        <ContentSection currentPage={currentPage} setTotalPages={setTotalPages} selectedTimeFilter={selectedTimeFilter} />
        <PaginationSection currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
      </div>
    </Layout>
  );
};
