import React from 'react';
import { ComprehensiveDashboard } from '../../screens/Dashboard/ComprehensiveDashboard';
import { useDataInitialization } from '../../hooks/useDataInitialization';
import { LayoutSimple } from '../shared/Layout/LayoutSimple';
import { navigationMenuData, userInfo } from '../../constants/data';
import { BarChart3 } from 'lucide-react';

export const Dashboard = () => {
  const { isInitialized } = useDataInitialization();

  if (!isInitialized) {
    return (
      <LayoutSimple
        headerProps={{
          title: "لوحة التحكم",
          titleIconSrc: <BarChart3 className="w-5 h-5 text-gray-500" />,
          showSearch: false,
        }}
        sidebarProps={{
          sections: navigationMenuData.sections,
          topItems: navigationMenuData.topItems,
          bottomItems: navigationMenuData.bottomItems,
          userInfo: userInfo,
        }}
      >
        <div className="flex items-center justify-center h-96">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
            <p className="text-gray-600">جاري تحميل البيانات...</p>
          </div>
        </div>
      </LayoutSimple>
    );
  }

  return <ComprehensiveDashboard />;
};
