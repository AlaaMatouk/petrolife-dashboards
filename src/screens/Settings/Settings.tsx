import React from "react";
import { Layout } from "../../components/shared";
import { navigationMenuData, userInfo } from "../../constants/data";
import { Settings as SettingsIcon } from "lucide-react";

export const Settings = (): JSX.Element => {
  return (
    <Layout
      headerProps={{
        title: "الإعدادات العامة",
        titleIconSrc: <SettingsIcon className="w-5 h-5 text-gray-500" />,
        showSearch: false,
      }}
      sidebarProps={{
        sections: navigationMenuData.sections,
        topItems: navigationMenuData.topItems,
        bottomItems: navigationMenuData.bottomItems,
        userInfo: userInfo,
      }}
    >
      <div className="flex flex-col items-center justify-center h-96 text-center">
        <h1 className="text-3xl font-bold text-gray-700 mb-4">الإعدادات العامة</h1>
        <p className="text-gray-500 text-lg">صفحة الإعدادات قيد التطوير</p>
      </div>
    </Layout>
  );
};
