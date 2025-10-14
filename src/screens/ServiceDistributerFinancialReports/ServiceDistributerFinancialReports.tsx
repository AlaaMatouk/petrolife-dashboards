import { LayoutSimple } from '../../components/shared/Layout/LayoutSimple'
import { serviceDistributerNavigationMenuData, userInfo, serviceDistributerFinancialReportsData, serviceDistributerFinancialReportsFilterOptions } from '../../constants/data'
import { FileText } from 'lucide-react'
import { DataTableSection } from '../../components/sections/DataTableSection'

// Financial Report interface
interface FinancialReport {
  id: number;
  productType: string;
  productNumber: string;
  productName: string;
  quantity: string;
  value: string;
  unit: string;
  operationNumber: string;
}

function ServiceDistributerFinancialReports() {
  // Define columns for financial reports table
  const financialReportColumns = [
    {
      key: "actions",
      label: "",
      width: "w-16 min-w-[60px]",
      priority: "high"
    },
    {
      key: "operationNumber",
      label: "رقم العملية",
      width: "flex-1 grow min-w-[120px]",
      priority: "high"
    },
    {
      key: "unit",
      label: "الوحدة",
      width: "flex-1 grow min-w-[100px]",
      priority: "medium"
    },
    {
      key: "value",
      label: "القيمة (ر.س)",
      width: "flex-1 grow min-w-[120px]",
      priority: "high"
    },
    {
      key: "quantity",
      label: "الكمية",
      width: "flex-1 grow min-w-[100px]",
      priority: "high"
    },
    {
      key: "productName",
      label: "اسم المنتج",
      width: "flex-1 grow min-w-[120px]",
      priority: "high"
    },
    {
      key: "productNumber",
      label: "رقم المنتج",
      width: "flex-1 grow min-w-[120px]",
      priority: "medium"
    },
    {
      key: "productType",
      label: "نوع المنتج",
      width: "flex-1 grow min-w-[120px]",
      priority: "high"
    }
  ];

  // Fetch data function for financial reports
  const fetchFinancialReportsData = async (): Promise<FinancialReport[]> => {
    // TODO: Replace with actual API call when ready
    return Promise.resolve(serviceDistributerFinancialReportsData as FinancialReport[]);
  };

  // Handle status toggle (if needed)
  const handleToggleStatus = (reportId: number) => {
    console.log(`Toggle status for financial report ${reportId}`);
    // TODO: Implement actual status toggle API call
  };

  return (
    <LayoutSimple 
      headerProps={{
        title: "التقارير المالية",
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
        <DataTableSection<FinancialReport>
          title="التقارير المالية"
          entityName="التقرير المالي"
          entityNamePlural="التقارير المالية"
          icon={FileText}
          columns={financialReportColumns}
          fetchData={fetchFinancialReportsData}
          onToggleStatus={handleToggleStatus}
          addNewRoute="/add-financial-report"
          viewDetailsRoute={(id) => `/financial-report/${id}`}
          loadingMessage="جاري تحميل بيانات التقارير المالية..."
          errorMessage="فشل في تحميل بيانات التقارير المالية. استخدام البيانات التجريبية."
          itemsPerPage={5}
          showAddButton={false}
          filterOptions={serviceDistributerFinancialReportsFilterOptions}
        />
      </div>
    </LayoutSimple>
  )
}

export default ServiceDistributerFinancialReports