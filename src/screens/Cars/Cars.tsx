import { CarListSection } from "./sections/CarListSection/CarListSection";
import { Layout } from "../../components/shared";
import {
  navigationIcons,
  navigationMenuData,
  userInfo,
} from "../../constants/data";

export const Cars = (): JSX.Element => {
  return (
    <Layout
      headerProps={{
        title: "السيــــــــــــارات",
        titleIconSrc: "/img/side-icons-4.svg",
        navigationIcons: navigationIcons,
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
