/**
 * =====================================
 * Eraxis
 * Module: Workflow Processor
 *
 * Purpose:
 * Handles workflow lifecycle.
 *
 * Milestone:
 * M001-08-03
 * =====================================
 */

import type {
  PlatformWorkflow,
} from "../workflows/platform-workflow";

export function approveWorkflow(
  workflow: PlatformWorkflow
) {

  workflow.status =
    "approved";

  return workflow;
}

export function rejectWorkflow(
  workflow: PlatformWorkflow
) {

  workflow.status =
    "rejected";

  return workflow;
}
