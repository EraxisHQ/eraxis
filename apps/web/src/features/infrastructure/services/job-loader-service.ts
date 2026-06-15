/**
 * =====================================
 * Eraxis
 * Module: Job Loader
 *
 * Purpose:
 * Loads platform jobs.
 *
 * Milestone:
 * M001-07-01
 * =====================================
 */

import {
  JOB_REGISTRY,
} from "../job-queue/job-registry";

export function loadJobs() {

  return JOB_REGISTRY;
}
