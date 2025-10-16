import { TransactionHistorySection } from "./sections/TransactionHistorySection/TransactionHistorySection";
import { UserDataSection } from "./sections/UserDataSection/UserDataSection";

export const WalletReports = (): JSX.Element => {
  return (
    <div className="flex flex-col w-full items-start gap-5">
      <UserDataSection />
      <TransactionHistorySection />
    </div>
  );
};
