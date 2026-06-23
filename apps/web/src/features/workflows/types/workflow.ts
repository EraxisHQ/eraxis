import type { WorkflowStatus } from "./workflow-status";

export interface Workflow {
  id: string;

  code: string;

  name: string;

  description?: string;

  status: WorkflowStatus;

  active: boolean;
}
