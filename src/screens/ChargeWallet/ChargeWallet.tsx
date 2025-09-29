import { LayoutSimple } from "../../components/shared/Layout/LayoutSimple";
import {
  navigationMenuData,
  userInfo,
} from "../../constants/data";
import { Wallet } from "lucide-react";
import { AutomaticChargeSection } from "./sections/AutomaticChargeSection/AutomaticChargeSection";
import { ManualChargeSection } from "./sections/ManualChargeSection/ManualChargeSection";
import { useState } from "react";

export const ChargeWallet = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState<'automatic' | 'manual'>('automatic');

  return (
    <LayoutSimple
      headerProps={{
        title: "شحن المحفظة",
        titleIconSrc: <Wallet className="w-5 h-5 text-gray-500" />,
        showSearch: false,
      }}
      sidebarProps={{
        sections: navigationMenuData.sections,
        topItems: navigationMenuData.topItems,
        bottomItems: navigationMenuData.bottomItems,
        userInfo: userInfo,
      }}
    >
      <div className="flex flex-col items-start gap-[var(--corner-radius-extra-large)] pt-[var(--corner-radius-large)] pr-[var(--corner-radius-large)] pb-[var(--corner-radius-large)] pl-[var(--corner-radius-large)] relative self-stretch w-full flex-[0_0_auto] bg-color-mode-surface-bg-screen rounded-[var(--corner-radius-large)] border-[0.3px] border-solid border-color-mode-text-icons-t-placeholder">
        {activeTab === 'automatic' ? (
          <AutomaticChargeSection onTabChange={setActiveTab} />
        ) : (
          <ManualChargeSection onTabChange={setActiveTab} />
        )}
      </div>
    </LayoutSimple>
  );
};
