import { SubscriptionContext } from "../context/subscription-context";

import { getSubscriptions } from "../services/subscription.service";

export function SubscriptionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SubscriptionContext.Provider value={getSubscriptions()}>
      {children}
    </SubscriptionContext.Provider>
  );
}
