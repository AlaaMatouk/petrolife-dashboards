import { useEffect, useState } from "react";
import { useParams, useOutletContext } from "react-router-dom";
import { ServiceProvidersInfo } from ".";
import { mockServiceProvidersData } from "./ServiceProviders";

interface OutletContext {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  setDynamicTitle: (title: string) => void;
}

export const ServiceProvidersDetails = (): JSX.Element => {
  const { id } = useParams<{ id: string }>();
  const { setDynamicTitle } = useOutletContext<OutletContext>();
  const [providerData, setProviderData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch service provider data on component mount
  useEffect(() => {
    const loadProviderData = async () => {
      if (!id) {
        setError('Service Provider ID is missing');
        setIsLoading(false);
        return;
      }

      try {
        setIsLoading(true);
        // TODO: Replace with actual Firestore fetch when ready
        // const data: any = await fetchServiceProviderById(id);
        
        // Find the provider from mock data based on ID
        const provider = mockServiceProvidersData.find(p => p.id === Number(id));
        
        if (!provider) {
          setError('Service Provider not found');
          setIsLoading(false);
          return;
        }
        
        setProviderData(provider);
        setError(null);
        
        // Update the header title with provider name
        const providerName = provider.providerName || 'مزود الخدمة';
        setDynamicTitle(`مزودي الخدمة / ${providerName}`);
      } catch (err: any) {
        console.error('Error loading service provider:', err);
        setError(err.message || 'Failed to load service provider data');
      } finally {
        setIsLoading(false);
      }
    };

    loadProviderData();
  }, [id, setDynamicTitle]);

  return (
    <div className="flex flex-col gap-2">
      {/* Loading State */}
      {isLoading && (
        <div className="flex items-center justify-center py-20">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
            <p className="text-gray-600">جاري تحميل بيانات مزود الخدمة...</p>
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

      {/* Service Provider Info - Only show when data is loaded */}
      {!isLoading && !error && providerData && (
        <>
          <ServiceProvidersInfo providerData={providerData} />
        </>
      )}
    </div>
  );
};

