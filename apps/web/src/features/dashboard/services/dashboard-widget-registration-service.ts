/**
 * =====================================
 * Eraxis
 * Module: Dashboard Widget Registration
 *
 * Purpose:
 * Runtime registration of widgets.
 *
 * Milestone:
 * M001-04-02
 * =====================================
 */

import type {
  DashboardWidget,
} from "../types/dashboard-widget";

import {
  DASHBOARD_WIDGET_REGISTRY,
} from "../registry/dashboard-widget-registry";

export function registerDashboardWidget(
  widget: DashboardWidget
) {
  DASHBOARD_WIDGET_REGISTRY.push(
    widget
  );
}
