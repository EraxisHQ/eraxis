import {
  registerSubmitHandler,
} from "../../../../../features/form-runtime/services/form-submit-registry";

import {
  getEditingId,
  clearForm,
} from "../../../../../features/form-runtime/services/form-session-service";

import {
  salesService,
} from "../services/sales-service";

import {
  refreshSales,
} from "../services/sales-store";

import {
  decreaseStock,
} from "../../inventory/services/inventory-transaction-service";

registerSubmitHandler(
  "sales",
  async (values) => {
    const editingId = getEditingId();

    const sale = {
      id: editingId ?? crypto.randomUUID(),
      saleNo: String(values.saleNo),
      customerId: String(values.customerId),
      saleDate: String(values.saleDate),
      totalAmount: Number(values.totalAmount ?? 0),
      remarks: String(values.remarks ?? ""),
      status:
        (values.status as "Draft" | "Completed") ?? "Draft",
    };

    if (editingId) {
      await salesService.update(editingId, sale);
    } else {
      await salesService.create(sale);
    }

    if (
  sale.status === "Completed" &&
  Array.isArray(values.items)
) {
  for (const item of values.items as Array<{
    productId: string;
    quantity: number;
  }>) {
    await decreaseStock(
      item.productId,
      Number(item.quantity),
    );
  }
}


    await refreshSales();

    clearForm();
  },
);
