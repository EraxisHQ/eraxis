import {
  useDashboardWidgets,
} from "../hooks/use-dashboard-widgets";

import DashboardWidgetCard
  from "./dashboard-widget-card";

export default function DashboardGrid() {

  const widgets =
    useDashboardWidgets();

  return (
    <div className="stats-grid">

      {widgets.map(
        (widget) => (
          <DashboardWidgetCard
            key={widget.id}
            widget={widget}
          />
        )
      )}

    </div>
  );
}