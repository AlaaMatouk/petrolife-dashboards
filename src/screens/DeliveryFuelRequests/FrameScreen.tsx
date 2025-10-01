import React from "react";
import { OrderDetailsSection } from "./sections/OrderDetailsSection/OrderDetailsSection";
import { OrderListSection } from "./sections/OrderListSection";

export const FrameScreen = (): JSX.Element => {
  return (
    <div
      className="flex flex-col w-[1077px] items-start gap-5 relative"
      data-model-id="1:14038"
    >
      <div className="flex flex-col items-start gap-[var(--corner-radius-extra-large)] pt-[var(--corner-radius-large)] pr-[var(--corner-radius-large)] pb-[var(--corner-radius-large)] pl-[var(--corner-radius-large)] relative self-stretch w-full flex-[0_0_auto] bg-color-mode-surface-bg-screen rounded-[var(--corner-radius-large)] border-[0.3px] border-solid border-color-mode-text-icons-t-placeholder">
        <OrderListSection />
        <OrderDetailsSection />
      </div>
    </div>
  );
};
