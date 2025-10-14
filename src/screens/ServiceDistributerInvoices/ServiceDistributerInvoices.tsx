import React from 'react'
import { serviceDistributerNavigationMenuData, userInfo } from '../../constants/data'
import { LayoutSimple } from '../../components/shared/Layout/LayoutSimple'
import { FileText } from 'lucide-react'
import { DataTableSection } from '../../components/sections/DataTableSection'

function ServiceDistributerInvoices() {
  const columns = [
    {
      key: "id",
      label: "الفاتورة",
      width: "w-16 min-w-[60px]",
      priority: "high"
    }
  ]

  const fetchInvoicesData = async () => {
    return Promise.resolve([]);
  }

  return (
    <LayoutSimple 
      headerProps={{
        title: "الفواتير",
        titleIconSrc: <FileText className="w-5 h-5 text-gray-500" />,
        showSearch: true,
        searchProps: {
          onSearch: (query) => console.log("Search:", query),
        },
      }}
      sidebarProps={{
        sections: serviceDistributerNavigationMenuData.sections,
        topItems: serviceDistributerNavigationMenuData.topItems,
        bottomItems: serviceDistributerNavigationMenuData.bottomItems,
        userInfo: userInfo,
      }}
    >
      <div className="flex flex-col w-full items-start gap-5">
        <DataTableSection
          title="الفواتير"
          entityName="الفاتورة"
          entityNamePlural="الفواتير"
          icon={FileText}
          columns={columns}
          fetchData={fetchInvoicesData}
                onToggleStatus={() => {}}
          addNewRoute="/add-invoice"
          viewDetailsRoute={(id) => `/invoice/${id}`}
          loadingMessage="جاري تحميل الفواتير..."
          errorMessage="فشل في تحميل الفواتير. استخدام البيانات التجريبية."
          itemsPerPage={5}
        />
      </div>
    </LayoutSimple>
  );
};

export default ServiceDistributerInvoices;