import { useEffect, useState } from "react";
import { useParams, useOutletContext } from "react-router-dom";
import { CompanyInfo } from "./CompanyInfo";
import { fetchCompanyById } from "../../../../services/firestore";

interface OutletContext {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  setDynamicTitle: (title: string) => void;
}

export const CompanyDetails = (): JSX.Element => {
  const { id } = useParams<{ id: string }>();
  const { setDynamicTitle } = useOutletContext<OutletContext>();
  const [companyData, setCompanyData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch company data on component mount
  useEffect(() => {
    const loadCompanyData = async () => {
      if (!id) {
        setError('Company ID is missing');
        setIsLoading(false);
        return;
      }

      try {
        setIsLoading(true);
        const data: any = await fetchCompanyById(id);
        setCompanyData(data);
        setError(null);
        
        // Update the header title with company name
        const companyName = (data as any).companyName || (data as any).name || 'الشركة';
        setDynamicTitle(`الشركات / ${companyName}`);
      } catch (err: any) {
        console.error('Error loading company:', err);
        setError(err.message || 'Failed to load company data');
      } finally {
        setIsLoading(false);
      }
    };

    loadCompanyData();
  }, [id, setDynamicTitle]);

  return (
    <div className="flex flex-col gap-2">
      {/* Loading State */}
      {isLoading && (
        <div className="flex items-center justify-center py-20">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
            <p className="text-gray-600">جاري تحميل بيانات الشركة...</p>
          </div>
        </div>
      )}

      {/* Error State */}
      {error && !isLoading && (
        <div className="p-6 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-red-800 text-center [direction:rtl]">
            خطأ: {error}
          </p>
        </div>
      )}

      {/* Company Info - Only show when data is loaded */}
      {!isLoading && !error && companyData && (
        <>
          <CompanyInfo companyData={companyData} />
        </>
      )}
    </div>
  );
};

