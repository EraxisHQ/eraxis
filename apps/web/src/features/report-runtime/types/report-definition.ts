import type { ReportColumn } from "./report-column";
import type { ReportFilter } from "./report-filter";
import type { ReportAction } from "./report-action";
export interface ReportDefinition {
  id: string;

  title: string;

  columns: ReportColumn[];

  filters?: ReportFilter[];

  dataSource: string;

  actions?: ReportAction[];
}
