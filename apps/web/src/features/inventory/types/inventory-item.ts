/**
 * =====================================
 * Eraxis Commerce
 * Module: Inventory
 *
 * Purpose:
 * Inventory contract.
 *
 * Milestone:
 * M002-04-01
 * =====================================
 */

export type InventoryItem = {
  id: string;

  productId: string;

  quantity: number;

  reservedQuantity: number;

  availableQuantity: number;
};
