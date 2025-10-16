import { SubscriptionListSection } from "./sections/SubscriptionListSection/SubscriptionListSection";
import { UserProfileSection } from "./sections/UserProfileSection/UserProfileSection";

export const SubscriptionsScreen = (): JSX.Element => {
  return (
    <div className="flex flex-col w-full items-start gap-5">
      <UserProfileSection />
      <SubscriptionListSection />
    </div>
  );
};
