import { getSalesReport } from "../../reports/services/sales-report-service";
import { getPurchaseReport } from "../../reports/services/purchase-report-service";
import { getInventoryReport } from "../../reports/services/inventory-report-service";

export async function getDashboardData() {
  const [
    sales,
    purchase,
    inventory,
  ] = await Promise.all([
    getSalesReport(),
    getPurchaseReport(),
    getInventoryReport(),
  ]);

  return {
    sales,
    purchase,
    inventory,
  };
}
