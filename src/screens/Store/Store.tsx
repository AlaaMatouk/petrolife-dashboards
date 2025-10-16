import { ProductFilterSection } from "./sections/ProductFilterSection/ProductFilterSection";
import { PaginationSection } from "./sections/PaginationSection/PaginationSection";

export const StoreScreen = (): JSX.Element => {
  return (
    <div className="flex flex-col w-full items-start gap-5">
      <div className="flex flex-col items-start gap-[var(--corner-radius-extra-large)] pt-[var(--corner-radius-large)] pr-[var(--corner-radius-large)] pb-[var(--corner-radius-large)] pl-[var(--corner-radius-large)] relative self-stretch w-full flex-[0_0_auto] bg-color-mode-surface-bg-screen rounded-[var(--corner-radius-large)] border-[0.3px] border-solid border-color-mode-text-icons-t-placeholder">
        <ProductFilterSection />
        <PaginationSection />
      </div>
    </div>
  );
};
