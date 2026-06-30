import type {
  RuntimeJob,
} from "../types/runtime-job";

const JOBS: RuntimeJob[] = [];

export function registerJob(
  job: RuntimeJob,
) {
  JOBS.push(job);
}

export function getJobs() {
  return JOBS;
}
