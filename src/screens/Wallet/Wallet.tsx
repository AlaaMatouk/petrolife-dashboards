import { TransactionListSection } from "./sections/TransactionListSection/TransactionListSection";
import { Layout } from "../../components/shared";
import { navigationMenuData, userInfo } from "../../constants/data";
import { WalletMinimal } from "lucide-react";

export const Wallet = (): JSX.Element => {
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
        title: "محفظــــــــــــتي",
        titleIconSrc: <WalletMinimal className="w-5 h-5 text-gray-500" />,
        showSearch: true,
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
        onLogout: handleLogout,
      }}
    >
      <TransactionListSection />
    </Layout>
  );
};
