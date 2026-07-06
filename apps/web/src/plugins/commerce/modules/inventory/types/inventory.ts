export interface Inventory {
  id: string;
  productId: string;
  quantity: number;
  reservedQuantity: number;
  availableQuantity: number;
  reorderLevel: number;
}
