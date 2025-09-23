import React from "react";
import { UserDetailsSection } from "./sections/UserDetailsSection/UserDetailsSection";
import { VehicleInformationSection } from "./sections/VehicleInformationSection/VehicleInformationSection";
import { Layout } from "../../components/shared";
import {
  navigationIcons,
  navigationMenuData,
  userInfo,
} from "../../constants/data";

export const AddDriver = (): JSX.Element => {
  return (
    <Layout
      headerProps={{
        title: "الســـــــــــــــائقين / إضافة سائق جديد",
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
      <div
        className="flex flex-col  items-start gap-5 relative"
        data-model-id="1:14891"
      >
        <div className="flex flex-col items-start gap-[var(--corner-radius-extra-large)] pt-[var(--corner-radius-large)] pr-[var(--corner-radius-large)] pb-[var(--corner-radius-large)] pl-[var(--corner-radius-large)] relative self-stretch w-full flex-[0_0_auto] bg-color-mode-surface-bg-screen rounded-[var(--corner-radius-large)] border-[0.3px] border-solid border-color-mode-text-icons-t-placeholder">
          <UserDetailsSection />
          <VehicleInformationSection />
        </div>
      </div>
    </Layout>
  );
};
