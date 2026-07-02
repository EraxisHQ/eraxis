import type { Sale } from "../types/sale";

export function mapSaleToForm(
  sale: Sale,
): Record<string, unknown> {
  return {
    saleNo: sale.saleNo,
    customerId: sale.customerId,
    saleDate: sale.saleDate,
    remarks: sale.remarks,
    status: sale.status,
    totalAmount: sale.totalAmount,
  };
}
