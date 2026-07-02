import { invoiceRepository } from "./invoice-repository";
import type { Invoice } from "../types/invoice";

export const invoiceService = {
  findAll() {
    return invoiceRepository.findAll();
  },

  findById(id: string) {
    return invoiceRepository.findById(id);
  },

  create(invoice: Invoice) {
    return invoiceRepository.create(invoice);
  },

  update(id: string, invoice: Invoice) {
    return invoiceRepository.update(id, invoice);
  },

  delete(id: string) {
    return invoiceRepository.delete(id);
  },
};
