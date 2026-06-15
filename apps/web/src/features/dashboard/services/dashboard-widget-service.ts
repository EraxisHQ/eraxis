/**
 * =====================================
 * Eraxis
 * Module: Dashboard Widget Service
 *
 * Purpose:
 * Provides runtime dashboard widgets.
 *
 * Milestone:
 * M001-04-01
 * =====================================
 */

import {
  DASHBOARD_WIDGETS,
} from "../widgets/dashboard-widget-registry";

export function getDashboardWidgets() {
  return DASHBOARD_WIDGETS;
}
