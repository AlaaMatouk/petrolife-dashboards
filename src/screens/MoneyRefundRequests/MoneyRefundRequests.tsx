import React from "react";
import { RequestFormSection } from "./sections/RequestFormSection/RequestFormSection";
import { RequestHistorySection } from "./sections/RequestHistorySection/RequestHistorySection";
import { Layout } from "../../components/shared";
import { navigationIcons, navigationMenuData, userInfo } from "../../constants/data";

export const MoneyRefundRequests = (): JSX.Element => {
  
 
  return (
    <Layout
      headerProps={{
        title: "محفظــــــــــــــتي / طلبــــــــات اشترداد الأموال",
        titleIconSrc: <img src="/img/side-icons-6.svg" alt="Wallet" className="w-5 h-5" />,
        navigationIcons: navigationIcons,
        showSearch: false,
        searchProps: {
          placeholder: "بحث برقم العميل/العملية/ السجل التجاري / رقم الهاتف",
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
      <RequestFormSection />
      <RequestHistorySection />
    </Layout>
  );
};
