import { useState } from "react";
import { DataTableSection } from "./sections/DataTableSection/DataTableSection";
import { navigationMenuData, userInfo } from "../../constants/data";
import { LayoutSimple } from "../../components/shared/Layout/LayoutSimple";
import { UserRound } from "lucide-react";

export const Drivers = (): JSX.Element => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <LayoutSimple
      headerProps={{
        title: "الســـــــــــــــائقين",
        titleIconSrc: <UserRound className="w-5 h-5 text-gray-500" />,
        showSearch: true,
        searchProps: {
          onSearch: handleSearch,
          placeholder: "بحث بالاسم، الهاتف، أو رقم السيارة...",
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
        <DataTableSection searchQuery={searchQuery} />
      </div>
    </LayoutSimple>
  );
};
