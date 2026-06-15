// /**
//  * =====================================
//  * Eraxis
//  * Module: Application Loader
//  *
//  * Purpose:
//  * Loads applications from
//  * registry runtime.
//  *
//  * Milestone:
//  * M001-02-02
//  * =====================================
//  */

// import {
//   APPLICATION_REGISTRY,
// } from "../registry/application-registry";

// export function loadApplications() {

//   return APPLICATION_REGISTRY
//     .filter(
//       (application) =>
//         application.enabled
//     );
// }

/**
 * =====================================
 * Eraxis
 * Module: Application Loader
 *
 * Purpose:
 * Loads enabled applications
 * with feature flag support.
 *
 * Milestone:
 * M001-10-01
 * =====================================
 */

import {
  APPLICATION_REGISTRY,
} from "../registry/application-registry";

import {
  featureFlagService,
} from "../../feature-flags/services/feature-flag-service";

export function loadApplications() {

  return APPLICATION_REGISTRY
    .filter(
      (application) =>
        application.enabled
    )
    .filter(
      (application) =>
        !application.featureFlag ||
        featureFlagService.isEnabled(
          application.featureFlag
        )
    );
}