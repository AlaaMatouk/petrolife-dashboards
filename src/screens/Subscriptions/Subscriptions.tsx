import { Layout } from "../../components/shared";
import { navigationMenuData, userInfo } from "../../constants/data";
import { CreditCard } from "lucide-react";
import { SubscriptionListSection } from "./sections/SubscriptionListSection/SubscriptionListSection";
import { UserProfileSection } from "./sections/UserProfileSection/UserProfileSection";

export const SubscriptionsScreen = (): JSX.Element => {
  const handleLogout = () => {
    console.log("Logout clicked");
  };

  return (
    <Layout
      headerProps={{
        title: "اشتراكاتي",
        titleIconSrc: <CreditCard className="w-5 h-5 text-gray-500" />,
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
        <UserProfileSection />
        <SubscriptionListSection />
      </div>
    </Layout>
  );
};
