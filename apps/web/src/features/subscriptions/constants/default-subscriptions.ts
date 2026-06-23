import type { Subscription } from "../types/subscription";

export const DEFAULT_SUBSCRIPTIONS: Subscription[] = [
  {
    id: "trial-001",

    tenantId: "tenant-001",

    billingPlanId: "starter",

    status: "trial",

    startDate: "2026-01-01",

    endDate: "2026-01-15",

    durationDays: 15,

    assignedBy: "sales-user-001",

    active: true,
  },
];
