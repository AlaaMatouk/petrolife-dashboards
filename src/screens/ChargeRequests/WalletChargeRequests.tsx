import React from "react";
import { ContentSection } from "./sections/ContentSection/ContentSection";
import { HeaderSection } from "./sections/HeaderSection/HeaderSection";
import { PaginationSection } from "./sections/PaginationSection/PaginationSection";
import { navigationIcons, navigationMenuData, userInfo } from "../../constants/data";
import { Layout } from "../../components/shared";

export const WalletChargeRequests = (): JSX.Element => {

 

  return (
    <Layout
      headerProps={{
        title: "محفظــــــــــــــتي / طلبــــــــات اشترداد الأموال",
        titleIconSrc: "/img/side-icons-6.svg",
        navigationIcons: navigationIcons,
        showSearch: false,
        searchProps: {
          placeholder: "بحث برقم العميل/العملية/ السجل التجاري / رقم الهاتف",
          onSearch: (query) => console.log("Search:", query),
        },
        walletButton: {
          label: "محفظــــــــــــــتي / طلبات شحن المحفظة",
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
      <HeaderSection />
      <ContentSection />
      <PaginationSection />
    </Layout>
  );
};
