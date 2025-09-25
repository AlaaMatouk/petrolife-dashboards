import React from 'react';
import { LayoutSimple } from '../shared/Layout/LayoutSimple';
import { navigationMenuData, userInfo } from '../../constants/data';
import { BarChart3 } from 'lucide-react';
import { StateTest } from '../shared/StateTest';
import { TestContext } from '../TestContext';
import { SimpleTest } from '../SimpleTest';
import { useDataInitialization } from '../../hooks/useDataInitialization';

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

  return (
    <LayoutSimple
      headerProps={{
        title: "لوحة التحكم",
        titleIconSrc: <BarChart3 className="w-5 h-5 text-gray-500" />,
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
      <div className="flex flex-col items-center justify-center h-96 text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-700 mb-4">مرحباً بك في لوحة التحكم</h1>
        <p className="text-gray-500 text-lg">اختر قسم من القائمة الجانبية للبدء</p>
      </div>
      
      {/* Simple Test Component */}
      <SimpleTest />
      
      {/* Context Test Component */}
      <TestContext />
      
      {/* State Test Component */}
      <StateTest />
    </LayoutSimple>
  );
};
