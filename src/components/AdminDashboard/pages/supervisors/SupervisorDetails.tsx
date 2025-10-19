import { useEffect, useState } from "react";
import { useParams, useOutletContext } from "react-router-dom";
import { SupervisorInfo } from "./SupervisorInfo";
import { fetchSupervisorById } from "../../../../services/firestore";

interface OutletContext {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  setDynamicTitle: (title: string) => void;
}

export const SupervisorDetails = (): JSX.Element => {
  const { id } = useParams<{ id: string }>();
  const { setDynamicTitle } = useOutletContext<OutletContext>();
  const [supervisorData, setSupervisorData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch supervisor data on component mount
  useEffect(() => {
    const loadSupervisorData = async () => {
      if (!id) {
        setError('Supervisor ID is missing');
        setIsLoading(false);
        return;
      }

      try {
        setIsLoading(true);
        const data: any = await fetchSupervisorById(id);
        setSupervisorData(data);
        setError(null);
        
        // Update the header title with supervisor name
        const supervisorName = (data as any).supervisorName || (data as any).name || 'المشرف';
        setDynamicTitle(`المشرفين / ${supervisorName}`);
      } catch (err: any) {
        console.error('Error loading supervisor:', err);
        setError(err.message || 'Failed to load supervisor data');
      } finally {
        setIsLoading(false);
      }
    };

    loadSupervisorData();
  }, [id, setDynamicTitle]);

  return (
    <div className="flex flex-col gap-2">
      {/* Loading State */}
      {isLoading && (
        <div className="flex items-center justify-center py-20">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
            <p className="text-gray-600">جاري تحميل بيانات المشرف...</p>
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

      {/* Supervisor Info - Only show when data is loaded */}
      {!isLoading && !error && supervisorData && (
        <>
          <SupervisorInfo supervisorData={supervisorData} />
        </>
      )}
    </div>
  );
};
