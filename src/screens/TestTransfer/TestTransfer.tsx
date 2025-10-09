import React, { useEffect, useState } from 'react';
import { LayoutSimple } from '../../components/shared/Layout/LayoutSimple';
import { navigationMenuData, userInfo } from '../../constants/data';
import { fetchCompaniesDriversTransfer } from '../../services/firestore';
import { LoadingSpinner } from '../../components/shared/Spinner';
import { FileText } from 'lucide-react';

export const TestTransfer = (): JSX.Element => {
  const [transfers, setTransfers] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      setError(null);
      
      try {
        const transfersData = await fetchCompaniesDriversTransfer();
        setTransfers(transfersData || []);
      } catch (err) {
        // console.error('Error loading data:', err);
        setError('فشل في تحميل البيانات');
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, []);

  return (
    <LayoutSimple
      headerProps={{
        title: "بيانات النقل المفلترة",
        titleIconSrc: <FileText className="w-5 h-5 text-gray-500" />,
        showSearch: false,
      }}
      sidebarProps={{
        sections: navigationMenuData.sections,
        topItems: navigationMenuData.topItems,
        bottomItems: navigationMenuData.bottomItems,
        userInfo: userInfo,
      }}
    >
      <div className="flex flex-col w-full items-start gap-5">
        {isLoading ? (
          <LoadingSpinner size="lg" message="جاري التحميل..." />
        ) : error ? (
          <div className="w-full bg-red-50 border border-red-200 rounded-lg p-6">
            <p className="text-red-800 text-center text-lg">{error}</p>
          </div>
        ) : (
          <>
            {/* Companies-Drivers-Transfer Data */}
            <div className="w-full bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="bg-purple-500 text-white px-4 py-2 rounded-lg">
                  <span className="font-bold">{transfers.length}</span> سجل
                </div>
                <div className="flex items-center gap-2">
                  <h2 className="text-2xl font-bold text-gray-800">
                    Companies-Drivers-Transfer
                  </h2>
                  <FileText className="w-6 h-6 text-purple-600" />
                </div>
              </div>
              
              {transfers.length === 0 ? (
                <div className="text-center text-gray-500 py-8">
                  <p className="text-lg">لا توجد بيانات</p>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <pre className="bg-gray-900 text-green-400 p-6 rounded-lg overflow-x-auto text-sm" dir="ltr">
                    {JSON.stringify(transfers, null, 2)}
                  </pre>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </LayoutSimple>
  );
};

