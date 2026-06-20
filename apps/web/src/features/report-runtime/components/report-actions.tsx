// import type { ReportDefinition } from "../types/report-definition";

// interface Props {
//   report: ReportDefinition;
// }

// export function ReportActions({ report }: Props) {
//   if (!report.actions?.length) {
//     return null;
//   }

//   return (
//     <div>
//       {report.actions.map((action) => (
//         <button key={action.id}>{action.label}</button>
//       ))}
//     </div>
//   );
// }

import type { ReportDefinition } from "../types/report-definition";

import { exportCsv } from "../services/report-export-service";

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
