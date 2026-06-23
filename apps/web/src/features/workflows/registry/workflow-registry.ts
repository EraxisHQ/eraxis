import type { Workflow } from "../types/workflow";

export const workflowRegistry: Workflow[] = [
  {
    id: "purchase-approval",

    code: "PURCHASE_APPROVAL",

    name: "Purchase Approval",

    description: "Purchase approval workflow",

    status: "draft",

    active: true,
  },
];
