/**
 * =====================================
 * Eraxis
 * Module: Platform Workflow
 *
 * Purpose:
 * Standard workflow contract.
 *
 * Milestone:
 * M001-08-01
 * =====================================
 */

export type PlatformWorkflow = {
  id: string;

  name: string;

  status:
    | "pending"
    | "approved"
    | "rejected";

  createdAt: string;
};
