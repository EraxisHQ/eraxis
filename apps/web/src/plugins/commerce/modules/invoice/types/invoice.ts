export interface Invoice {
  id: string;
  invoiceNo: string;
  saleId: string;
  customerId: string;
  invoiceDate: string;
  totalAmount: number;
  taxAmount: number;
  discountAmount: number;
  netAmount: number;
  status: "Draft" | "Issued" | "Paid" | "Cancelled";
}
