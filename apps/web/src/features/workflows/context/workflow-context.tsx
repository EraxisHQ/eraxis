import { createContext } from "react";

import type { Workflow } from "../types/workflow";

export interface WorkflowContextValue {
  workflows: Workflow[];
}

export const WorkflowContext = createContext<WorkflowContextValue>({
  workflows: [],
});
