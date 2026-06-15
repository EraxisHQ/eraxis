/**
 * =====================================
 * Eraxis
 * Module: Application Loader
 *
 * Purpose:
 * Loads applications from
 * registry runtime.
 *
 * Milestone:
 * M001-02-02
 * =====================================
 */

import {
  APPLICATION_REGISTRY,
} from "../registry/application-registry";

export function loadApplications() {

  return APPLICATION_REGISTRY
    .filter(
      (application) =>
        application.enabled
    );
}
