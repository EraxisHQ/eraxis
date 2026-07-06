import type { Purchase } from "../types/purchase";

export function mapPurchaseToForm(
  purchase: Purchase,
): Record<string, unknown> {
  return {
    purchaseNo: purchase.purchaseNo,
    supplierId: purchase.supplierId,
    purchaseDate: purchase.purchaseDate,
    remarks: purchase.remarks,
    status: purchase.status,
    totalAmount: purchase.totalAmount,
  };
}
