export async function getReportData(reportId: string) {
  if (reportId === "products") {
    return [
      {
        name: "Laptop",
        sku: "LP001",
        price: 50000,
      },

      {
        name: "Mouse",
        sku: "MS001",
        price: 500,
      },
    ];
  }

  return [];
}
