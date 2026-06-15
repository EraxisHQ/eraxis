/**
 * =====================================
 * Eraxis
 * Module: Workflow Loader
 *
 * Purpose:
 * Loads workflows.
 *
 * Milestone:
 * M001-08-01
 * =====================================
 */

import {
  WORKFLOW_REGISTRY,
} from "../workflow-engine/workflow-registry";

export function loadWorkflows() {

  return WORKFLOW_REGISTRY;
}
