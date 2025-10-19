import { useDataInitialization } from '../../hooks/useDataInitialization';
import { DashboardContent } from './DashboardContent';

export const AdminDashboard = () => {
  const { isInitialized } = useDataInitialization();

  if (!isInitialized) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-600">جاري تحميل البيانات...</p>
        </div>
      </div>
    );
  }

  return <DashboardContent />;
};
