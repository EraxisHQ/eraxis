/**
 * =====================================
 * Eraxis
 * Module: Job Queue Service
 *
 * Purpose:
 * Adds jobs to the queue.
 *
 * Milestone:
 * M001-07-02
 * =====================================
 */

import type {
  PlatformJob,
} from "../jobs/platform-job";

import {
  JOB_REGISTRY,
} from "../job-queue/job-registry";

export function enqueueJob(
  job: PlatformJob
) {

  JOB_REGISTRY.push(
    job
  );
}
