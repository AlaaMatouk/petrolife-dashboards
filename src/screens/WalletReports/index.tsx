import React from "react";
import { TransactionHistorySection } from "./sections/TransactionHistorySection/TransactionHistorySection";
import { UserDataSection } from "./sections/UserDataSection/UserDataSection";
import Header from "../../components/Header";
import { Footer } from "../../components/shared";

export const WalletReports = (): JSX.Element => {
  return (
    <div
      className="flex flex-col w-[1077px] items-start gap-5 relative"
      data-model-id="1:13835"
    >
      <UserDataSection />
      <TransactionHistorySection />
      <Footer />
    </div>
  );
};
