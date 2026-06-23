import { useMemo } from "react";

import type { PropsWithChildren } from "react";

import { WorkflowContext } from "../context/workflow-context";

import { workflowService } from "../services/workflow.service";

export function WorkflowProvider({ children }: PropsWithChildren) {
  const value = useMemo(
    () => ({
      workflows: workflowService.getAll(),
    }),
    [],
  );

  return (
    <WorkflowContext.Provider value={value}>
      {children}
    </WorkflowContext.Provider>
  );
}
