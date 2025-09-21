import React from "react";
import { DataTableSection } from "./sections/DataTableSection/DataTableSection";
import { UserDetailsSection } from "./sections/UserDetailsSection/UserDetailsSection";
import { Layout } from "../../components/shared";
import { financialReportsNavigationData, userInfo } from "../../constants/data";

export const FinancialReports = (): JSX.Element => {
  const handleLogout = () => {
    console.log("Logout clicked");
  };

  const handleWalletClick = () => {
    console.log("Wallet clicked");
  };

  const financialReportsNavigationIcons = [
    { id: 1, src: "/img/component-1.svg", alt: "Component" },
    { id: 2, src: "/img/component-1-1.svg", alt: "Component" },
    {
      id: 3,
      vectors: [
        { src: "/img/vector.svg", className: "absolute w-5 h-5 top-1 left-1" },
        {
          src: "/img/vector-1.svg",
          className: "absolute w-5 h-5 top-0 left-0",
        },
      ],
    },
    { id: 4, text: "En" },
  ];

  return (
    <Layout
      headerProps={{
        title: "التقــــــــــــــــارير / التقارير المالية",
        titleIconSrc: "/img/side-icons-5.svg",
        navigationIcons: financialReportsNavigationIcons,
        showSearch: true,
        searchProps: {
          placeholder: "بحث برقم العميل/العملية/ السجل التجاري / رقم الهاتف",
          onSearch: (query) => console.log("Search:", query),
        },
        walletButton: {
          label: "محفظــــــــــــــتي",
          iconSrc: "/img/side-icons.svg",
          onClick: handleWalletClick,
        },
      }}
      sidebarProps={{
        sections: financialReportsNavigationData.sections,
        topItems: financialReportsNavigationData.topItems,
        bottomItems: financialReportsNavigationData.bottomItems,
        userInfo: userInfo,
        onLogout: handleLogout,
      }}
    >
      <div className="flex flex-col w-full items-start gap-5">
        <DataTableSection />
      </div>
    </Layout>
  );
};
