import React from "react";
import { RequestFormSection } from "./sections/RequestFormSection/RequestFormSection";
import { RequestHistorySection } from "./sections/RequestHistorySection/RequestHistorySection";

export const MoneyRefundRequests = (): JSX.Element => {
  return (
    <>
      <RequestFormSection />
      <RequestHistorySection />
    </>
  );
};
