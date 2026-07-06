export interface Purchase {
  id: string;
  purchaseNo: string;
  supplierId: string;
  purchaseDate: string;
  totalAmount: number;
  remarks: string;
  status: "Draft" | "Completed";
}
