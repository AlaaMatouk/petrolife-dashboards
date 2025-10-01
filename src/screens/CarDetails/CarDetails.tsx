import { LayoutSimple } from "../../components/shared/Layout/LayoutSimple";
import {
  navigationIcons,
  navigationMenuData,
  userInfo,
} from "../../constants/data";
import { Car, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { CarInformationSection } from "./sections/CarInformationSection/CarInformationSection";
import { CarDriversSection } from "./sections/CarDriversSection/CarDriversSection";

export const CarDetails = (): JSX.Element => {
  const navigate = useNavigate();

  return (
    <LayoutSimple
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
      <div className="flex flex-col w-full items-start gap-5">
        <CarInformationSection />
        <CarDriversSection />
      </div>
    </LayoutSimple>
  );
};
