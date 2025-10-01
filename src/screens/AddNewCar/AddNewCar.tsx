import React from "react";
import { VehicleDetailsSection } from "./sections/VehicleDetailsSection";
import { VehicleFormSection } from "./sections/VehicleFormSection/VehicleFormSection";
import { Car } from "lucide-react";
import { navigationMenuData, userInfo } from "../../constants/data";
import { Layout } from "../../components/shared";

export const AddNewCar = (): JSX.Element => {
  return (
    <Layout
      headerProps={{
        title: "السيــــــــــــــارات / إضافة سيارة جديدة",
        titleIconSrc: <Car className="w-5 h-5 text-gray-500" />,
        showSearch: false,
        searchProps: {
          onSearch: (query: any) => console.log("Search:", query),
        },
      }}
      sidebarProps={{
        sections: navigationMenuData.sections,
        topItems: navigationMenuData.topItems,
        bottomItems: navigationMenuData.bottomItems,
        userInfo: userInfo,
      }}
    >
      <div
        className="flex flex-col  items-start gap-5 relative"
        data-model-id="1:14955"
      >
        <div className="flex flex-col items-start gap-[var(--corner-radius-extra-large)] pt-[var(--corner-radius-large)] pr-[var(--corner-radius-large)] pb-[var(--corner-radius-large)] pl-[var(--corner-radius-large)] relative self-stretch w-full flex-[0_0_auto] bg-color-mode-surface-bg-screen rounded-[var(--corner-radius-large)] border-[0.3px] border-solid border-color-mode-text-icons-t-placeholder">
          <VehicleDetailsSection />
          <VehicleFormSection />
        </div>
      </div>
    </Layout>
  );
};
