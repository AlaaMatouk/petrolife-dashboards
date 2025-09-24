import { CarListSection } from "./sections/CarListSection/CarListSection";
import { Layout } from "../../components/shared";
import {
  navigationIcons,
  navigationMenuData,
  userInfo,
} from "../../constants/data";
import { Car } from "lucide-react";

export const Cars = (): JSX.Element => {
  return (
    <Layout
      headerProps={{
        title: "السيــــــــــــارات",
        titleIconSrc: <Car className="w-5 h-5 text-gray-500" />,
        showSearch: true,
        searchProps: {
          onSearch: (query) => console.log("Search:", query),
        },
      }}
      sidebarProps={{
        sections: navigationMenuData.sections,
        topItems: navigationMenuData.topItems,
        bottomItems: navigationMenuData.bottomItems,
        userInfo: userInfo,
      }}
    >
      <div className="flex flex-col w-full items-start gap-5 ">
        <CarListSection />
      </div>
    </Layout>
  );
};
