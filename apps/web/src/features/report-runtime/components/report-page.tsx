import { useEffect, useState } from "react";

import { loadReport } from "../services/report-loader";

import { getReportData } from "../services/report-data-source";

import { ReportTable } from "./report-table";

interface Props {
  reportId: string;
}

export function ReportPage({ reportId }: Props) {
  const [data, setData] = useState<any[]>([]);

  const report = loadReport(reportId);

  useEffect(() => {
    async function load() {
      const result = await getReportData(reportId);

      setData(result);
    }

    load();
  }, [reportId]);

  if (!report) {
    return <div>Report not found</div>;
  }

  return (
    <>
      <h2>{report.title}</h2>

      <ReportTable report={report} data={data} />
    </>
  );
}
