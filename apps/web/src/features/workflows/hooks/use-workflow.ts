import { useContext } from "react";

import { WorkflowContext } from "../context/workflow-context";

export function useWorkflow() {
  return useContext(WorkflowContext);
}
