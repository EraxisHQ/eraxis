import { useContext } from "react";

import { SubscriptionContext } from "../context/subscription-context";

export function useSubscription() {
  return useContext(SubscriptionContext);
}
