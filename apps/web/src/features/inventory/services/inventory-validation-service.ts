import {
  getInventory,
} from "./inventory-resolution-service";

export function hasAvailableStock(
  productId: string,
  quantity: number
) {
  const inventory =
    getInventory(
      productId
    );

  if (!inventory) {
    return false;
  }

  return (
    inventory.availableQuantity >=
    quantity
  );
}
