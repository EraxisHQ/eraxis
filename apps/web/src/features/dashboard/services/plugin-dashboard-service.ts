/**
 * =====================================
 * Eraxis
 * Module: Plugin Dashboard Service
 *
 * Purpose:
 * Resolves dashboard widgets
 * belonging to applications.
 *
 * Milestone:
 * M001-10-03
 * =====================================
 */

import type {
  DashboardWidget,
} from "../types/dashboard-widget";

export function getApplicationWidgets(
  widgets: DashboardWidget[],
  applicationId: string
) {

  return widgets.filter(
    (widget) =>
      widget.applicationId ===
      applicationId
  );
}
