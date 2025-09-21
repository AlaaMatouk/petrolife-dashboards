import { CarListSection } from "./sections/CarListSection/CarListSection";
import { FilterOptionsSection } from "./sections/FilterOptionsSection/FilterOptionsSection";
import { Layout } from "../../components/shared";
import { navigationMenuData, userInfo } from "../../constants/data";

export const Cars = (): JSX.Element => {
  const handleLogout = () => {
    console.log("Logout clicked");
  };

  return (
    <Layout
      headerProps={{
        title: "السيــــــــــــارات",
        titleIconSrc: "/img/side-icons-4.svg",
        navigationIcons: [
          { id: 1, src: "/img/component-1.svg", alt: "Component" },
          { id: 2, src: "/img/component-1-1.svg", alt: "Component" },
          {
            id: 3,
            vectors: [
              {
                src: "/img/vector.svg",
                className: "absolute w-5 h-5 top-1 left-1",
              },
              {
                src: "/img/vector-1.svg",
                className: "absolute w-5 h-5 top-0 left-0",
              },
            ],
          },
          { id: 4, text: "En" },
        ],
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
        onLogout: handleLogout,
      }}
    >
      <div className="flex flex-col w-full items-start gap-5 ">
        <FilterOptionsSection />
        <CarListSection />
      </div>
    </Layout>
  );
};
