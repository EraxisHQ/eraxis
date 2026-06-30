import {
  getJobs,
} from "../jobs/job-registry";

export function loadJobs() {
  return getJobs();
}
