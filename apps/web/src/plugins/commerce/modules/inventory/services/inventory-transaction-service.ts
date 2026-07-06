import { inventoryService } from "./inventory-service";

export async function increaseStock(
  productId: string,
  quantity: number,
) {
  const inventory =
    (await inventoryService.findAll()).find(
      (item) => item.productId === productId,
    );

  if (!inventory) {
    await inventoryService.create({
      id: crypto.randomUUID(),
      productId,
      quantity,
      reservedQuantity: 0,
      availableQuantity: quantity,
      reorderLevel: 0,
    });

    return;
  }

  await inventoryService.update(
    inventory.id,
    {
      ...inventory,
      quantity:
        inventory.quantity + quantity,
      availableQuantity:
        inventory.availableQuantity + quantity,
    },
  );
}
export async function decreaseStock(
  productId: string,
  quantity: number,
) {
  const inventory =
    (await inventoryService.findAll()).find(
      (item) => item.productId === productId,
    );

  if (!inventory) {
    throw new Error(
      `Inventory not found for product ${productId}`,
    );
  }

  if (inventory.availableQuantity < quantity) {
    throw new Error(
      `Insufficient stock for product ${productId}`,
    );
  }

  await inventoryService.update(
    inventory.id,
    {
      ...inventory,
      quantity:
        inventory.quantity - quantity,
      availableQuantity:
        inventory.availableQuantity - quantity,
    },
  );
}
