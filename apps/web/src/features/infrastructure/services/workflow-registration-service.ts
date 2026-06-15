/**
 * =====================================
 * Eraxis
 * Module: Workflow Registration
 *
 * Purpose:
 * Registers workflows at runtime.
 *
 * Milestone:
 * M001-08-02
 * =====================================
 */

import type {
  PlatformWorkflow,
} from "../workflows/platform-workflow";

import {
  WORKFLOW_REGISTRY,
} from "../workflow-engine/workflow-registry";

export function registerWorkflow(
  workflow: PlatformWorkflow
) {

  WORKFLOW_REGISTRY.push(
    workflow
  );
}
