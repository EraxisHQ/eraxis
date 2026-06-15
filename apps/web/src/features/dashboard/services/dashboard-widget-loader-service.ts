/**
 * =====================================
 * Eraxis
 * Module: Dashboard Widget Loader
 *
 * Purpose:
 * Loads dashboard widgets
 * from runtime registry.
 *
 * Milestone:
 * M001-04-01
 * =====================================
 */

import {
  DASHBOARD_WIDGET_REGISTRY,
} from "../registry/dashboard-widget-registry";

export function loadDashboardWidgets() {

  return DASHBOARD_WIDGET_REGISTRY;
}
