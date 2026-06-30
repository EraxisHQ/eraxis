import {
  getApplications,
} from "../applications/application-registry";

export function loadApplications() {
  return getApplications();
}
