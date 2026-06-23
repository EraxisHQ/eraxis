import { useContext } from "react";

import { BillingContext } from "../context/billing-context";

export function useBilling() {
  return useContext(BillingContext);
}
