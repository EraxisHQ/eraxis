export interface Sale {
  id: string;
  saleNo: string;
  customerId: string;
  saleDate: string;
  totalAmount: number;
  remarks: string;
  status: "Draft" | "Completed";
}
