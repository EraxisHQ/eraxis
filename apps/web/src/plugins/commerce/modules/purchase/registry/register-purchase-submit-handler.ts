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

    await refreshPurchases();

    clearForm();
  },
);
