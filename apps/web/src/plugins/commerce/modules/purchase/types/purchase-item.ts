export interface PurchaseItem {
  id: string;
  purchaseId: string;
  productId: string;
  quantity: number;
  unitPrice: number;
  discount: number;
  tax: number;
  total: number;
}
