import { invoiceService } from "./invoice-service";
import { refreshInvoices } from "./invoice-store";

export async function deleteInvoice(
  id: string,
) {
  await invoiceService.delete(id);

  await refreshInvoices();
}
