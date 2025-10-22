import React, { ReactNode } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { LayoutSimple } from "../shared/Layout/LayoutSimple";
import { adminNavigationMenuData, userInfo } from "../../constants/data";
import sideIcons1 from "../../../static/img/side-icons-1.svg";

interface PageConfig {
  title: string;
  titleIcon: ReactNode;
  showSearch?: boolean;
  searchPlaceholder?: string;
}

// Define page configurations for each admin route
const ADMIN_PAGE_CONFIGS: Record<string, PageConfig> = {
  '/admin-dashboard': {
    title: 'لوحة التحكم',
    titleIcon: <img src={sideIcons1} alt="logo" className="w-5 h-5" />,
    showSearch: true,
    searchPlaceholder: 'بحث برقم العميل / العملية / السجل التجاري / رقم الهاتف',
  },
  '/supervisors': {
    title: 'المشرفين',
    titleIcon: <img src="/img/side-icons-3.svg" alt="" className="w-5 h-5" />,
    showSearch: true,
    searchPlaceholder: 'بحث عن مشرف...',
  },
  '/supervisors/add': {
    title: 'المشرفين / اضافة مشرف جديد',
    titleIcon: <img src="/img/side-icons-3.svg" alt="" className="w-5 h-5" />,
    showSearch: false,
  },
  '/companies': {
    title: 'الشركات',
    titleIcon: <img src="/img/side-icons-7.svg" alt="" className="w-5 h-5" />,
    showSearch: true,
    searchPlaceholder: 'بحث عن شركة...',
  },
  '/companies/add': {
    title: 'الشركات / اضافة شركة جديدة',
    titleIcon: <img src="/img/side-icons-7.svg" alt="" className="w-5 h-5" />,
    showSearch: false,
  },
  '/individuals': {
    title: 'الأفراد',
    titleIcon: <img src="/img/side-icons-8.svg" alt="" className="w-5 h-5" />,
    showSearch: true,
    searchPlaceholder: 'بحث عن فرد...',
  },
  '/individuals/add': {
    title: 'الأفراد / اضافة فرد جديد',
    titleIcon: <img src="/img/side-icons-8.svg" alt="" className="w-5 h-5" />,
    showSearch: false,
  },
  '/service-providers': {
    title: 'مزودي الخدمة',
    titleIcon: <img src="/img/side-icons-9.svg" alt="" className="w-5 h-5" />,
    showSearch: true,
    searchPlaceholder: 'بحث عن مزود خدمة...',
  },
  '/service-providers/add': {
    title: 'مزودي الخدمة / اضافة مزود خدمة جديد',
    titleIcon: <img src="/img/side-icons-9.svg" alt="" className="w-5 h-5" />,
    showSearch: false,
  },
  '/wallet-requests': {
    title: 'طلبات المحافظ',
    titleIcon: <img src="/img/side-icons-3.svg" alt="" className="w-5 h-5" />,
    showSearch: true,
    searchPlaceholder: 'بحث عن طلب...',
  },
  '/wallet-requests/moneyrefundrequests': {
    title: 'طلبات استرداد الاموال',
    titleIcon: <img src="/img/side-icons-3.svg" alt="" className="w-5 h-5" />,
    showSearch: true,
    searchPlaceholder: 'بحث عن طلب استرداد...',
  },
  '/fuel-delivery-requests': {
    title: 'طلبات توصيل الوقود',
    titleIcon: <img src="/img/side-icons-7.svg" alt="" className="w-5 h-5" />,
    showSearch: true,
    searchPlaceholder: 'بحث عن طلب توصيل...',
  },
};

// Helper to get config for dynamic routes
const getPageConfig = (pathname: string): PageConfig | null => {
  // Direct match
  if (ADMIN_PAGE_CONFIGS[pathname]) {
    return ADMIN_PAGE_CONFIGS[pathname];
  }

  // Match dynamic routes (e.g., /supervisors/:id)
  if (pathname.startsWith('/supervisors/') && pathname !== '/supervisors/add') {
    return {
      title: 'المشرفين / تفاصيل المشرف',
      titleIcon: <img src="/img/side-icons-3.svg" alt="" className="w-5 h-5" />,
      showSearch: false,
    };
  }

  // Match dynamic routes (e.g., /companies/:id)
  if (pathname.startsWith('/companies/') && pathname !== '/companies/add') {
    return {
      title: 'الشركات / تفاصيل الشركة',
      titleIcon: <img src="/img/side-icons-7.svg" alt="" className="w-5 h-5" />,
      showSearch: false,
    };
  }

  // Match dynamic routes (e.g., /individuals/:id)
  if (pathname.startsWith('/individuals/') && pathname !== '/individuals/add') {
    return {
      title: 'الأفراد / تفاصيل الفرد',
      titleIcon: <img src="/img/side-icons-8.svg" alt="" className="w-5 h-5" />,
      showSearch: false,
    };
  }

  // Match dynamic routes (e.g., /service-providers/:id)
  if (pathname.startsWith('/service-providers/') && pathname !== '/service-providers/add') {
    return {
      title: 'مزودي الخدمة / تفاصيل مزود الخدمة',
      titleIcon: <img src="/img/side-icons-9.svg" alt="" className="w-5 h-5" />,
      showSearch: false,
    };
  }

  // Match dynamic routes (e.g., /wallet-requests/:id)
  if (pathname.startsWith('/wallet-requests/') && pathname !== '/wallet-requests/moneyrefundrequests') {
    return {
      title: 'طلبات المحافظ / مراجعة الطلب',
      titleIcon: <img src="/img/side-icons-3.svg" alt="" className="w-5 h-5" />,
      showSearch: false,
    };
  }

  // Match dynamic routes (e.g., /wallet-requests/moneyrefundrequests)
  if (pathname === '/wallet-requests/moneyrefundrequests') {
    return {
      title: 'طلبات المحافظ/طلبات استرداد الاموال',
      titleIcon: <img src="/img/side-icons-6.svg" alt="" className="w-5 h-5" />,
      showSearch: true,
      searchPlaceholder: 'بحث عن طلب استرداد...',
    };
  }

  // Match dynamic routes (e.g., /wallet-requests/moneyrefundrequests/:id)
  if (pathname.startsWith('/wallet-requests/moneyrefundrequests/') && pathname !== '/wallet-requests/moneyrefundrequests') {
    return {
      title: 'طلبات المحافظ/طلبات استرداد الاموال / مراجعة طلب الاسترداد',
      titleIcon: <img src="/img/side-icons-6.svg" alt="" className="w-5 h-5" />,
      showSearch: false,
    };
  }

  return null;
};

export const AdminLayoutWrapper: React.FC = () => {
  const location = useLocation();
  const [searchQuery, setSearchQuery] = React.useState("");
  const [dynamicTitle, setDynamicTitle] = React.useState<string | null>(null);

  const pageConfig = getPageConfig(location.pathname);

  // Reset dynamic title when pathname changes
  React.useEffect(() => {
    setDynamicTitle(null);
  }, [location.pathname]);

  // If no config found, render without layout
  if (!pageConfig) {
    return <Outlet context={{ searchQuery, setSearchQuery, setDynamicTitle }} />;
  }

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  // Use dynamic title if set, otherwise use config title
  const displayTitle = dynamicTitle || pageConfig.title;

  return (
    <LayoutSimple
      headerProps={{
        admin: true,
        title: displayTitle,
        titleIconSrc: pageConfig.titleIcon,
        showSearch: pageConfig.showSearch,
        searchProps: pageConfig.showSearch
          ? {
              onSearch: handleSearch,
              placeholder: pageConfig.searchPlaceholder || "بحث...",
            }
          : undefined,
      }}
      sidebarProps={{
        sections: adminNavigationMenuData.sections,
        topItems: adminNavigationMenuData.topItems,
        bottomItems: adminNavigationMenuData.bottomItems,
        anotherSections: adminNavigationMenuData.anotherSections,
        userInfo: userInfo,
      }}
    >
      <Outlet context={{ searchQuery, setSearchQuery, setDynamicTitle }} />
    </LayoutSimple>
  );
};

