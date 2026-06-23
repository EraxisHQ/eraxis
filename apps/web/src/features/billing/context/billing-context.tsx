import { createContext } from "react";

import type { BillingPlan } from "../types/billing-plan";

export const BillingContext = createContext<BillingPlan[]>([]);
