import { useState } from "react";
import { CarListSection } from "./sections/CarListSection/CarListSection";
import { LayoutSimple } from "../../components/shared/Layout/LayoutSimple";
import {
  navigationIcons,
  navigationMenuData,
  userInfo,
} from "../../constants/data";
import { Car } from "lucide-react";

export const Cars = (): JSX.Element => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <LayoutSimple
      headerProps={{
        title: "السيــــــــــــارات",
        titleIconSrc: <Car className="w-5 h-5 text-gray-500" />,
        showSearch: true,
        searchProps: {
          onSearch: handleSearch,
          placeholder: "بحث بالاسم، الماركة، الرقم، أو الطراز...",
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
        <CarListSection searchQuery={searchQuery} />
      </div>
    </LayoutSimple>
  );
};
