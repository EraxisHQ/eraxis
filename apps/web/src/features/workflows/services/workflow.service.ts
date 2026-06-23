import { workflowRegistry } from "../registry/workflow-registry";

export class WorkflowService {
  getAll() {
    return workflowRegistry;
  }

  getById(id: string) {
    return workflowRegistry.find((workflow) => workflow.id === id);
  }
}

export const workflowService = new WorkflowService();
