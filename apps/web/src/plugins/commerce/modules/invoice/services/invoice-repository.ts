import { BaseRepository } from "../../../../../features/persistence/repositories/base-repository";
import type { Invoice } from "../types/invoice";

export class InvoiceRepository extends BaseRepository<Invoice> {
  constructor() {
    super("invoice");
  }
}

export const invoiceRepository = new InvoiceRepository();
