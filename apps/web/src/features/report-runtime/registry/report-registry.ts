/**
 * =====================================
 * Eraxis Reporting Runtime
 *
 * Purpose:
 * Runtime report registry.
 *
 * Milestone:
 * M005-02-01
 * =====================================
 */

import type { ReportDefinition } from "../types/report-definition";

const reports = new Map<string, ReportDefinition>();

export function registerReport(report: ReportDefinition) {
  reports.set(report.id, report);
}

export function getReport(id: string) {
  return reports.get(id);
}

export function getReports() {
  return Array.from(reports.values());
}
