import type { ReportDefinition } from "../types/report-definition";

interface Props {
  report: ReportDefinition;

  data: Record<string, unknown>[];
}

export function ReportTable({ report, data }: Props) {
  return (
    <table>
      <thead>
        <tr>
          {report.columns.map((column) => (
            <th key={column.id}>{column.label}</th>
          ))}
        </tr>
      </thead>

      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            {report.columns.map((column) => (
              <td key={column.id}>{String(row[column.accessor] ?? "")}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
