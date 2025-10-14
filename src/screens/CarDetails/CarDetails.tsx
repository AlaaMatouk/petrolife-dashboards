import { LayoutSimple } from "../../components/shared/Layout/LayoutSimple";
import {
  navigationIcons,
  navigationMenuData,
  userInfo,
} from "../../constants/data";
import { Car, ArrowLeft } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { CarInformationSection } from "./sections/CarInformationSection/CarInformationSection";
import { CarDriversSection } from "./sections/CarDriversSection/CarDriversSection";
import { useEffect, useState } from "react";
import { fetchCarById } from "../../services/firestore";

export const CarDetails = (): JSX.Element => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [carData, setCarData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch car data on component mount
  useEffect(() => {
    const loadCarData = async () => {
      if (!id) {
        setError('Car ID is missing');
        setIsLoading(false);
        return;
      }

      try {
        setIsLoading(true);
        const data = await fetchCarById(id);
        setCarData(data);
        setError(null);
      } catch (err: any) {
        console.error('Error loading car:', err);
        setError(err.message || 'Failed to load car data');
      } finally {
        setIsLoading(false);
      }
    };

    loadCarData();
  }, [id]);

  return (
    <LayoutSimple
      headerProps={{
        title: "السيــــــــــــارات",
        titleIconSrc: <Car className="w-5 h-5 text-gray-500" />,
      }}
      sidebarProps={{
        sections: navigationMenuData.sections,
        topItems: navigationMenuData.topItems,
        bottomItems: navigationMenuData.bottomItems,
        userInfo: userInfo,
      }}
    >
      <div className="flex flex-col w-full items-start gap-5">
        {/* Loading State */}
        {isLoading && (
          <div className="flex items-center justify-center py-20 w-full">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
              <p className="text-gray-600">جاري تحميل بيانات السيارة...</p>
            </div>
          </div>
        )}

        {/* Error State */}
        {error && !isLoading && (
          <div className="p-6 bg-red-50 border border-red-200 rounded-lg w-full">
            <p className="text-red-800 text-center [direction:rtl]">
              خطأ: {error}
            </p>
          </div>
        )}

        {/* Car Info - Only show when data is loaded */}
        {!isLoading && !error && carData && (
          <>
            <CarInformationSection carData={carData} />
            <CarDriversSection carData={carData} />
          </>
        )}
      </div>
    </LayoutSimple>
  );
};
