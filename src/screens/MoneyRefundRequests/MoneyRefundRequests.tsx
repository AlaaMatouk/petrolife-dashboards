import React from "react";
import { RequestFormSection } from "./sections/RequestFormSection/RequestFormSection";
import { RequestHistorySection } from "./sections/RequestHistorySection/RequestHistorySection";
import { Layout } from "../../components/shared";
import { navigationMenuData, userInfo } from "../../constants/data";

export const MoneyRefundRequests = (): JSX.Element => {
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
          label: "محفظــــــــــــــتي",
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
      <RequestFormSection />
      <RequestHistorySection />
    </Layout>
  );
};
