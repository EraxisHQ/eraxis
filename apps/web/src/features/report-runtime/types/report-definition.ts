import type { ReportColumn } from "./report-column";
import type { ReportFilter } from "./report-filter";

export interface ReportDefinition {
  id: string;

  title: string;

  columns: ReportColumn[];

  filters?: ReportFilter[];
}
