import { inventoryService } from "../../inventory/services/inventory-service";

import type { InventoryReport } from "../types/inventory-report";

export async function getInventoryReport(): Promise<InventoryReport> {
  const inventory = await inventoryService.findAll();

  return {
    totalInventoryItems: inventory.length,

    totalQuantity: inventory.reduce(
      (sum, item) => sum + item.quantity,
      0,
    ),

    lowStockItems: inventory.filter(
      (item) => item.availableQuantity <= item.reorderLevel,
    ).length,
  };
}
