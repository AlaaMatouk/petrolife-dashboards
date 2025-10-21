import { useEffect, useState } from "react";
import { useParams, useOutletContext } from "react-router-dom";
import { IndividualsInfo } from "./IndividualsInfo";
import { fetchAllClients } from "../../../../services/firestore";

interface OutletContext {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  setDynamicTitle: (title: string) => void;
}

export const IndividualsDetails = (): JSX.Element => {
  const { id } = useParams<{ id: string }>();
  const { setDynamicTitle } = useOutletContext<OutletContext>();
  const [individualData, setIndividualData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch individual data on component mount
  useEffect(() => {
    const loadIndividualData = async () => {
      if (!id) {
        setError("Individual ID is missing");
        setIsLoading(false);
        return;
      }

      try {
        setIsLoading(true);

        // Fetch all clients from Firebase
        const clientsData = await fetchAllClients();

        // Find individual by ID
        const client = clientsData.find((c) => c.id === id);

        if (!client) {
          throw new Error("Individual not found");
        }

        // Map Firebase data to component format
        const individual = {
          id: client.id,
          individualCode: client.uid || client.id,
          individualName: client.name || "-",
          phone: client.phoneNumber || "-",
          email: client.email || "-",
          city: client.city || "-",
          accountStatus: {
            active: client.isActive !== undefined ? client.isActive : true,
            text:
              client.isActive !== undefined
                ? client.isActive
                  ? "مفعل"
                  : "معطل"
                : "مفعل",
          },
          // Include any other fields that might be needed
          ...client,
        };

        console.log("Individual data fetched from Firebase:", individual);

        setIndividualData(individual);
        setError(null);

        // Update the header title with individual name
        const individualName = individual?.individualName || "الفرد";
        setDynamicTitle(`الأفراد / ${individualName}`);
      } catch (err: any) {
        console.error("Error loading individual:", err);
        setError(err.message || "Failed to load individual data");
      } finally {
        setIsLoading(false);
      }
    };

    loadIndividualData();
  }, [id, setDynamicTitle]);

  return (
    <div className="flex flex-col gap-2">
      {/* Loading State */}
      {isLoading && (
        <div className="flex items-center justify-center py-20">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
            <p className="text-gray-600">جاري تحميل بيانات الفرد...</p>
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

      {/* Individual Info - Only show when data is loaded */}
      {!isLoading && !error && individualData && (
        <>
          <IndividualsInfo individualData={individualData} />
        </>
      )}
    </div>
  );
};
