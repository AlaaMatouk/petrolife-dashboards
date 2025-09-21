import React from "react";
import { ContentSection } from "./sections/ContentSection/ContentSection";
import { HeaderSection } from "./sections/HeaderSection/HeaderSection";
import { PaginationSection } from "./sections/PaginationSection/PaginationSection";
import { navigationMenuData, userInfo } from "../../constants/data";
import { Layout } from "../../components/shared";

export const WalletChargeRequests = (): JSX.Element => {
  const handleLogout = () => {
    console.log("Logout clicked");
  };

  const handleWalletClick = () => {
    console.log("Wallet clicked");
  };
  const walletNavigationIcons = [
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
        title: "محفظــــــــــــــتي / طلبــــــــات اشترداد الأموال",
        titleIconSrc: "/img/side-icons-6.svg",
        navigationIcons: walletNavigationIcons,
        showSearch: false,
        searchProps: {
          placeholder: "بحث برقم العميل/العملية/ السجل التجاري / رقم الهاتف",
          onSearch: (query) => console.log("Search:", query),
        },
        walletButton: {
          label: "محفظــــــــــــــتي / طلبات شحن المحفظة",
          iconSrc: "/img/side-icons.svg",
          onClick: handleWalletClick,
        },
      }}
      sidebarProps={{
        sections: navigationMenuData.sections,
        topItems: navigationMenuData.topItems,
        bottomItems: navigationMenuData.bottomItems,
        userInfo: userInfo,
        onLogout: handleLogout,
      }}
    >
      <HeaderSection />
      <ContentSection />
      <PaginationSection />
    </Layout>
  );
};
