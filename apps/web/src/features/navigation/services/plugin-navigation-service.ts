/**
 * =====================================
 * Eraxis
 * Module: Plugin Navigation Service
 *
 * Purpose:
 * Resolves navigation items
 * for plugins.
 *
 * Milestone:
 * M001-10-02
 * =====================================
 */

import type {
  NavigationItem,
} from "../types/navigation-item";

export function getPluginNavigation(
  items: NavigationItem[],
  applicationId: string
) {

  return items.filter(
    (item) =>
      item.applicationId ===
      applicationId
  );
}
