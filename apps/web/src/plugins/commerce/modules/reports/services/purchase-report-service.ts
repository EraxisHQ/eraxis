import { purchaseService } from "../../purchase/services/purchase-service";
import { supplierService } from "../../supplier/services/supplier-service";

import type { PurchaseReport } from "../types/purchase-report";

export async function getPurchaseReport(): Promise<PurchaseReport> {
  const [purchases, suppliers] = await Promise.all([
    purchaseService.findAll(),
    supplierService.findAll(),
  ]);

  return {
    totalPurchases: purchases.length,
    totalPurchaseAmount: purchases.reduce(
      (sum, purchase) => sum + purchase.totalAmount,
      0,
    ),
    totalSuppliers: suppliers.length,
  };
}
