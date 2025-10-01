import { DataTableSection } from "./sections/DataTableSection/DataTableSection";
import { navigationMenuData, userInfo } from "../../constants/data";
import { LayoutSimple } from "../../components/shared/Layout/LayoutSimple";
import { UserRound } from "lucide-react";

export const Drivers = (): JSX.Element => {
  return (
    <LayoutSimple
      headerProps={{
        title: "الســـــــــــــــائقين",
        titleIconSrc: <UserRound className="w-5 h-5 text-gray-500" />,
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
      <div className="flex flex-col w-full items-start gap-5">
        <DataTableSection />
      </div>
    </LayoutSimple>
  );
};
