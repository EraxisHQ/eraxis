/**
 * =====================================
 * Eraxis Reporting Runtime
 *
 * Purpose:
 * Report Loader
 *
 * Milestone:
 * M005-03-01
 * =====================================
 */

import { getReport } from "../registry/report-registry";

export function loadReport(reportId: string) {
  return getReport(reportId);
}
