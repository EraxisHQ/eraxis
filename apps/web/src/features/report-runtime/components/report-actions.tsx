import type { ReportDefinition } from "../types/report-definition";

interface Props {
  report: ReportDefinition;
}

export function ReportActions({ report }: Props) {
  if (!report.actions?.length) {
    return null;
  }

  return (
    <div>
      {report.actions.map((action) => (
        <button key={action.id}>{action.label}</button>
      ))}
    </div>
  );
}
