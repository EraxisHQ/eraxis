import type {
  RuntimeApplication,
} from "../types/runtime-application";

const APPLICATIONS: RuntimeApplication[] = [];

export function registerApplication(
  application: RuntimeApplication,
) {
  APPLICATIONS.push(application);
}

export function getApplications() {
  return APPLICATIONS;
}
