import React from "react";
import { FrameSubsection } from "./sections/FrameSubsection/FrameSubsection";
import { FrameWrapperSubsection } from "./sections/FrameWrapperSubsection/FrameWrapperSubsection";
import { GraphSubsection } from "./sections/GraphSubsection";
import { GroupSubsection } from "./sections/GroupSubsection";
import { DriverInfo } from "./sections/DriverInfo/DriverInfo";
import { Layout } from "../../components/shared";
import {
  navigationIcons,
  navigationMenuData,
  userInfo,
} from "../../constants/data";
import { UsedStations } from "../UsedStations/UsedStations";
import { UserRound } from "lucide-react";

export const DriverDetails = (): JSX.Element => {
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

    <Layout
      headerProps={{
        title: "الســـــــــــــــائقين / تفاصيل السائق",
        titleIconSrc: <UserRound className="w-5 h-5 text-gray-500" />,
        showSearch: true,
        searchProps: {
          onSearch: (query) => console.log("Search:", query),
        },
      }}
      sidebarProps={{
        sections: navigationMenuData.sections,
        topItems: navigationMenuData.topItems,
        bottomItems: navigationMenuData.bottomItems,
        userInfo: userInfo,
      }}
    >
      {/* <div
        className="flex flex-col  items-start gap-5 relative"
        data-model-id="1:14891"
      >
        <div className="flex flex-col items-start gap-[var(--corner-radius-extra-large)] pt-[var(--corner-radius-large)] pr-[var(--corner-radius-large)] pb-[var(--corner-radius-large)] pl-[var(--corner-radius-large)] relative self-stretch w-full flex-[0_0_auto] bg-color-mode-surface-bg-screen rounded-[var(--corner-radius-large)] border-[0.3px] border-solid border-color-mode-text-icons-t-placeholder">
          <DriverInfo />
          <GraphSubsection />
          <UsedStations />
        </div>
      </div> */}
      <div className="flex flex-col gap-2">
        <DriverInfo />

        <div
          className="flex flex-col  items-start gap-5 relative"
          data-model-id="1:14891"
        >
          <div className="flex flex-col items-start gap-[var(--corner-radius-extra-large)] pt-[var(--corner-radius-large)] pr-[var(--corner-radius-large)] pb-[var(--corner-radius-large)] pl-[var(--corner-radius-large)] relative self-stretch w-full flex-[0_0_auto] bg-color-mode-surface-bg-screen rounded-[var(--corner-radius-large)] border-[0.3px] border-solid border-color-mode-text-icons-t-placeholder">
            <GraphSubsection />
          </div>
        </div>

        <div
          className="flex flex-col  items-start gap-5 relative"
          data-model-id="1:14891"
        >
          <div className="flex flex-col items-start gap-[var(--corner-radius-extra-large)] pt-[var(--corner-radius-large)] pr-[var(--corner-radius-large)] pb-[var(--corner-radius-large)] pl-[var(--corner-radius-large)] relative self-stretch w-full flex-[0_0_auto] bg-color-mode-surface-bg-screen rounded-[var(--corner-radius-large)] border-[0.3px] border-solid border-color-mode-text-icons-t-placeholder">
            <UsedStations />
          </div>
        </div>
      </div>
    </Layout>
  );
};
