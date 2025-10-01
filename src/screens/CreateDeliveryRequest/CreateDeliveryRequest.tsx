import { Layout } from "../../components/shared";
import { navigationMenuData, userInfo } from "../../constants/data";
import { Truck } from "lucide-react";
import { DeliveryFormSection } from "./sections/DeliveryFormSection/DeliveryFormSection";

export const CreateDeliveryRequest = (): JSX.Element => {
  const handleLogout = () => {
    console.log("Logout clicked");
  };

  return (
    <Layout
      headerProps={{
        title: "انشاء طلب توصيل وقود جديد",
        titleIconSrc: <Truck className="w-5 h-5 text-gray-500" />,
        showSearch: false,
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
        <DeliveryFormSection />
      </div>
    </Layout>
  );
};
