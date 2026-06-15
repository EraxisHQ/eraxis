/**
 * =====================================
 * Eraxis
 * Module: Navigation Filter Service
 *
 * Purpose:
 * Filters navigation by
 * enabled applications.
 *
 * Milestone:
 * M001-03-02
 * =====================================
 */

import {
  loadApplications,
} from "../../application-registry/services/application-loader-service";

import type {
  NavigationItem,
} from "../types/navigation-item";


export function filterNavigation(
  items: NavigationItem[]
) {

  const applications =
    loadApplications();

  const enabledIds =
    applications.map(
      (application) =>
        application.code
    );

  return items.filter(
    (item) =>
      !item.applicationId ||
      enabledIds.includes(
        item.applicationId
      )
  );
}
