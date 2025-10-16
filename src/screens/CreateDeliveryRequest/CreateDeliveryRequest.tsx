import { DeliveryFormSection } from "./sections/DeliveryFormSection/DeliveryFormSection";

export const CreateDeliveryRequest = (): JSX.Element => {
  return (
    <div className="flex flex-col w-full items-start gap-5">
      <DeliveryFormSection />
    </div>
  );
};
