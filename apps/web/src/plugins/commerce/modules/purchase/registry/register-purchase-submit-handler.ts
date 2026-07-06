import {
  registerSubmitHandler,
} from "../../../../../features/form-runtime/services/form-submit-registry";

import {
  getEditingId,
  clearForm,
} from "../../../../../features/form-runtime/services/form-session-service";

import {
  purchaseService,
} from "../services/purchase-service";

import {
  refreshPurchases,
} from "../services/purchase-store";

import {
  increaseStock,
} from "../../inventory/services/inventory-transaction-service";

registerSubmitHandler(
  "purchase",
  async (values) => {
    const editingId = getEditingId();

    const purchase = {
      id: editingId ?? crypto.randomUUID(),
      purchaseNo: String(values.purchaseNo),
      supplierId: String(values.supplierId),
      purchaseDate: String(values.purchaseDate),
      totalAmount: Number(values.totalAmount ?? 0),
      remarks: String(values.remarks ?? ""),
      status:
        (values.status as "Draft" | "Completed") ?? "Draft",
    };

    if (editingId) {
      await purchaseService.update(editingId, purchase);
    } else {
      await purchaseService.create(purchase);
    }

if (
  purchase.status === "Completed" &&
  Array.isArray(values.items)
) {
  for (const item of values.items as Array<{
    productId: string;
    quantity: number;
  }>) {
    await increaseStock(
      item.productId,
      Number(item.quantity),
    );
  }
}

    await refreshPurchases();

    clearForm();
  },
);
