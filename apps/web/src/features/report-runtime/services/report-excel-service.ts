export function exportExcel(reportId: string, rows: Record<string, unknown>[]) {
  const headers = Object.keys(rows[0] ?? {});

  const csv = [
    headers.join(","),
    ...rows.map((row) => headers.map((h) => row[h]).join(",")),
  ].join("\n");

  const blob = new Blob([csv], {
    type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  });

  const link = document.createElement("a");

  link.href = URL.createObjectURL(blob);
  link.download = `${reportId}.xlsx`;
  link.click();
}
