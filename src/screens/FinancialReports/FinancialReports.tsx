import React from "react";
import { DataTableSection } from "./sections/DataTableSection/DataTableSection";
import { UserDetailsSection } from "./sections/UserDetailsSection/UserDetailsSection";
import { Layout } from "../../components/shared";
import {
  navigationIcons,
  navigationMenuData,
  userInfo,
} from "../../constants/data";
import { ChartNoAxesCombined } from "lucide-react";

export const FinancialReports = (): JSX.Element => {
  return (
    <Layout
      headerProps={{
        title: "التقــــــــــــــــارير / التقارير المالية",
        titleIconSrc: <ChartNoAxesCombined className="w-5 h-5 text-gray-500" />,
        navigationIcons: navigationIcons,
        showSearch: true,
        searchProps: {
          onSearch: (query) => console.log("Search:", query),
        },
        walletButton: {
          label: "محفظــــــــــــــتي",
          iconSrc: "/img/side-icons.svg",
        },
      }}
      sidebarProps={{
        sections: navigationMenuData.sections,
        topItems: navigationMenuData.topItems,
        bottomItems: navigationMenuData.bottomItems,
        userInfo: userInfo,
      }}
    >
      <div className="flex flex-col w-full items-start gap-5">
        <DataTableSection />
      </div>
    </Layout>
  );
};
