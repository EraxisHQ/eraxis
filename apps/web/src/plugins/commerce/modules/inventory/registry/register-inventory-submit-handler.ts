import {
  registerSubmitHandler,
} from "../../../../../features/form-runtime/services/form-submit-registry";

import {
  getEditingId,
  clearForm,
} from "../../../../../features/form-runtime/services/form-session-service";

import {
  inventoryService,
} from "../services/inventory-service";

import {
  refreshInventory,
} from "../services/inventory-store";

registerSubmitHandler(
  "inventory",
  async (values) => {
    const editingId = getEditingId();

    const inventory = {
      id: editingId ?? crypto.randomUUID(),
      productId: String(values.productId),
      quantity: Number(values.quantity),
      reservedQuantity: Number(values.reservedQuantity),
      availableQuantity: Number(values.availableQuantity),
      reorderLevel: Number(values.reorderLevel),
    };

    if (editingId) {
      await inventoryService.update(editingId, inventory);
    } else {
      await inventoryService.create(inventory);
    }

    await refreshInventory();
    clearForm();
  },
);
