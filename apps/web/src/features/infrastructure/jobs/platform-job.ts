/**
 * =====================================
 * Eraxis
 * Module: Platform Job
 *
 * Purpose:
 * Standard background job
 * contract.
 *
 * Milestone:
 * M001-07-01
 * =====================================
 */

export type PlatformJob = {
  id: string;

  type: string;

  status:
    | "pending"
    | "processing"
    | "completed"
    | "failed";

  payload: unknown;

  createdAt: string;
};
