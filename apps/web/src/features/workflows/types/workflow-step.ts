export interface WorkflowStep {
  id: string;

  workflowId: string;

  name: string;

  order: number;

  roleId?: string;

  userId?: string;

  active: boolean;
}
