import type {
  DashboardWidget,
} from "../types/dashboard-widget";

type Props = {
  widget: DashboardWidget;
};

export default function DashboardWidgetCard({
  widget,
}: Props) {
  return (
    <div className="card">
      <h3>
        {widget.title}
      </h3>

      <h2>
        {widget.value}
      </h2>
    </div>
  );
}