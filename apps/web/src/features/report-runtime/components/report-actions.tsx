import { printReport } from "../services/report-print-service";
import type { ReportDefinition } from "../types/report-definition";

import { exportCsv } from "../services/report-export-service";
import { exportExcel } from "../services/report-excel-service";
interface Props {
  report: ReportDefinition;
  rows: Record<string, unknown>[];
}

export function ReportActions({ report, rows }: Props) {
  if (!report.actions?.length) {
    return null;
  }

  function execute(actionId: string) {
    if (actionId === "export-csv") {
      exportCsv(report.id, rows);
    }
    if (actionId === "export-excel") {
      exportExcel(report.id, rows);
    }

    if (actionId === "print") {
      printReport();
    }
  }

  return (
    <div>
      {report.actions.map((action) => (
        <button key={action.id} onClick={() => execute(action.id)}>
          {action.label}
        </button>
      ))}
    </div>
  );
}
