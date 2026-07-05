import { salesService } from "../../sales/services/sales-service";
import { invoiceService } from "../../invoice/services/invoice-service";

import type { SalesReport } from "../types/sales-report";

export async function getSalesReport(): Promise<SalesReport> {
  const [sales, invoices] = await Promise.all([
    salesService.findAll(),
    invoiceService.findAll(),
  ]);

  return {
    totalSales: sales.length,
    totalRevenue: sales.reduce(
      (sum, sale) => sum + sale.totalAmount,
      0,
    ),
    totalInvoices: invoices.length,
  };
}
