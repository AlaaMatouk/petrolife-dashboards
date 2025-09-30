import { Layout } from "../../components/shared";
import { navigationMenuData, userInfo } from "../../constants/data";
import { Store } from "lucide-react";
import { ProductGridSection } from "./sections/ProductGridSection/ProductGridSection";
import { ProductFilterSection } from "./sections/ProductFilterSection/ProductFilterSection";
import { PaginationSection } from "./sections/PaginationSection/PaginationSection";

export const StoreScreen = (): JSX.Element => {
  const handleLogout = () => {
    console.log("Logout clicked");
  };

  return (
    <Layout
      headerProps={{
        title: "المتجر",
        titleIconSrc: <Store className="w-5 h-5 text-gray-500" />,
        showSearch: true,
        searchProps: {
          placeholder: "البحث في المنتجات",
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
      <div className="flex flex-col w-full items-start gap-5">
        <div className="flex flex-col items-start gap-[var(--corner-radius-extra-large)] pt-[var(--corner-radius-large)] pr-[var(--corner-radius-large)] pb-[var(--corner-radius-large)] pl-[var(--corner-radius-large)] relative self-stretch w-full flex-[0_0_auto] bg-color-mode-surface-bg-screen rounded-[var(--corner-radius-large)] border-[0.3px] border-solid border-color-mode-text-icons-t-placeholder">
          <ProductGridSection />
          <ProductFilterSection />
          <PaginationSection />
        </div>
      </div>
    </Layout>
  );
};
