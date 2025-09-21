import React from "react";
import { Navigation } from "../../../../components/shared/Navigation/Navigation";
import { navigationMenuData, userInfo } from "../../../../constants/data";

export const NavigationMenuSection = (): JSX.Element => {
  const handleLogout = () => {
    console.log("Logout clicked");
  };

  return (
    <Navigation
      sections={navigationMenuData.sections}
      topItems={navigationMenuData.topItems}
      bottomItems={navigationMenuData.bottomItems}
      userInfo={userInfo}
      onLogout={handleLogout}
    />
  );
};
