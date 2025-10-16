import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FrameSubsection } from "./sections/FrameSubsection/FrameSubsection";
import { FrameWrapperSubsection } from "./sections/FrameWrapperSubsection/FrameWrapperSubsection";
import { GraphSubsection } from "./sections/GraphSubsection";
import { GroupSubsection } from "./sections/GroupSubsection";
import { DriverInfo } from "./sections/DriverInfo/DriverInfo";
import { UsedStations } from "../UsedStations/UsedStations";
import { fetchDriverById } from "../../services/firestore";

export const DriverDetails = (): JSX.Element => {
  const { id } = useParams<{ id: string }>();
  const [driverData, setDriverData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch driver data on component mount
  useEffect(() => {
    const loadDriverData = async () => {
      if (!id) {
        setError('Driver ID is missing');
        setIsLoading(false);
        return;
      }

      try {
        setIsLoading(true);
        const data = await fetchDriverById(id);
        setDriverData(data);
        setError(null);
      } catch (err: any) {
        console.error('Error loading driver:', err);
        setError(err.message || 'Failed to load driver data');
      } finally {
        setIsLoading(false);
      }
    };

    loadDriverData();
  }, [id]);

  // Y-axis scale data for the chart
  const yAxisLabels = [110, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 0];

  return (
    // <div
    //   className="relative w-[1077px] h-[328px]"
    //   data-model-id="1:15249-frame"
    // >
    //   <div className="fixed top-[586px] left-0 w-[1077px] h-[328px]">
    //     <div className="absolute -top-px -left-px w-[1079px] h-[330px] bg-white rounded-2xl border-[0.2px] border-solid border-[#a9b4be]" />

    //     <div className="absolute top-[108px] left-8 w-[1011px] h-40 flex flex-col gap-[39px]">
    //       {Array.from({ length: 5 }).map((_, index) => (
    //         <img
    //           key={index}
    //           className="w-[1010.79px] h-px object-cover"
    //           alt="Line"
    //           src="/img/line-45.svg"
    //         />
    //       ))}
    //     </div>

    //     <GraphSubsection />
    //     <img
    //       className="absolute top-[132px] left-[396px] w-px h-[135px]"
    //       alt="Line"
    //       src="/img/line-46.svg"
    //     />

    //     <div className="absolute top-[159px] left-[389px] w-3.5 h-3.5 bg-[#5b738b] rounded-[7.08px/7px] border-2 border-solid border-white" />

    //     <FrameSubsection />
    //     <FrameWrapperSubsection />
    //     <div className="flex flex-col w-4 items-start absolute top-[73px] left-[1048px]">
    //       <img
    //         className="relative w-[12.72px] h-[12.72px] mt-[-0.01px] aspect-[1]"
    //         alt="Side icons"
    //         src="/img/side-icons-1.svg"
    //       />

    //       <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
    //         {yAxisLabels.map((label, index) => (
    //           <div
    //             key={index}
    //             className={`${
    //               index === 0 ? "mt-[-1.00px]" : ""
    //             } relative self-stretch [font-family:'Tajawal',Helvetica] font-normal text-[#5b738b] text-[8px] tracking-[0.40px] leading-4`}
    //           >
    //             {label}
    //           </div>
    //         ))}
    //       </div>
    //     </div>

    //     <GroupSubsection />
    //   </div>
    // </div>

    <div className="flex flex-col gap-2">
      {/* Loading State */}
      {isLoading && (
        <div className="flex items-center justify-center py-20">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
            <p className="text-gray-600">جاري تحميل بيانات السائق...</p>
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

      {/* Driver Info - Only show when data is loaded */}
      {!isLoading && !error && driverData && (
        <>
          <DriverInfo driverData={driverData} />
        </>
      )}
    </div>
  );
};
