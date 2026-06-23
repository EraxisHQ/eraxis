import type { SubscriptionStatus } from "./subscription-status";

export type Subscription = {
  id: string;

  tenantId: string;

  billingPlanId: string;

  status: SubscriptionStatus;

  startDate: string;

  endDate: string;

  durationDays: number;

  assignedBy: string;

  active: boolean;
};
