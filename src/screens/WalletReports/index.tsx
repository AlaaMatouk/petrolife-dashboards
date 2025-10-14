import { TransactionHistorySection } from "./sections/TransactionHistorySection/TransactionHistorySection";
import { UserDataSection } from "./sections/UserDataSection/UserDataSection";
import { Layout } from "../../components/shared";
import { navigationMenuData, userInfo } from "../../constants/data";
import { Wallet } from "lucide-react";

export const WalletReports = (): JSX.Element => {
  const handleLogout = () => {
    console.log("Logout clicked");
  };

  const handleWalletClick = () => {
    console.log("Wallet clicked");
  };

  const walletReportsNavigationIcons = [
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
        title: "التقــــــــــــــــارير / تقرير المحفظة",
        titleIconSrc: <Wallet className="w-5 h-5 text-gray-500" />,
        navigationIcons: walletReportsNavigationIcons,
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
      <div className="flex flex-col w-full items-start gap-5">
        <UserDataSection />
        <TransactionHistorySection />
      </div>
    </Layout>
  );
};
