import type { Inventory } from "../types/inventory";

export function mapInventoryToForm(
  inventory: Inventory,
): Record<string, unknown> {
  return {
    productId: inventory.productId,
    quantity: inventory.quantity,
    reservedQuantity: inventory.reservedQuantity,
    availableQuantity: inventory.availableQuantity,
    reorderLevel: inventory.reorderLevel,
  };
}
