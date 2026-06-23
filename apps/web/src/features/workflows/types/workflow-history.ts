export interface WorkflowHistory {
  id: string;

  workflowId: string;

  action: string;

  performedBy: string;

  performedAt: Date;
}
