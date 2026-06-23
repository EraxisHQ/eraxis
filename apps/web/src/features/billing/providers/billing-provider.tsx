import { BillingContext } from "../context/billing-context";

import { getBillingPlans } from "../services/billing-plan.service";

export function BillingProvider({ children }: { children: React.ReactNode }) {
  return (
    <BillingContext.Provider value={getBillingPlans()}>
      {children}
    </BillingContext.Provider>
  );
}
