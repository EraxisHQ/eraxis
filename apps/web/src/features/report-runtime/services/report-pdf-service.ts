export function exportPdf(reportId: string, rows: Record<string, unknown>[]) {
  const content = rows.map((row) => Object.values(row).join(" | ")).join("\n");

  const win = window.open("", "_blank");

  if (!win) return;

  win.document.write(`
<html>
<body>
<h1>${reportId}</h1>
<pre>${content}</pre>
</body>
</html>
`);

  win.document.close();

  win.print();
}
