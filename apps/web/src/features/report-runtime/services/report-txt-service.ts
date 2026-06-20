export function exportTxt(
  reportId: string,
  rows: Record<string, unknown>[]
) {
  const content = rows
    .map((row) => Object.values(row).join(" | "))
    .join("\n");

  const blob = new Blob([content], {
    type: "text/plain",
  });

  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");

  a.href = url;
  a.download = `${reportId}.txt`;

  a.click();

  URL.revokeObjectURL(url);
}
