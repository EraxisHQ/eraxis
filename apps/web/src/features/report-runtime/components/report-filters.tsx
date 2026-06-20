import type { ReportDefinition } from "../types/report-definition";

interface Props {
  report: ReportDefinition;
}

export function ReportFilters({ report }: Props) {
  if (!report.filters?.length) {
    return null;
  }

  return (
    <div>
      <h3>Filters</h3>

      {report.filters.map((filter) => (
        <div key={filter.id}>{filter.label}</div>
      ))}
    </div>
  );
}
