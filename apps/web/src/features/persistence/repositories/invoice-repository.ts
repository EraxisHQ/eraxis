import {
  getPersistenceProvider,
} from "../services/persistence-service";

import type {
  Invoice,
} from "../../invoices/types/invoice";

export class InvoiceRepository {

  async findAll() {

    return getPersistenceProvider()
      .find<Invoice>(
        "invoices"
      );
  }

  async findById(
    id: string,
  ) {

    return getPersistenceProvider()
      .findById<Invoice>(
        "invoices",
        id,
      );
  }

  async create(
    invoice: Invoice,
  ) {

    return getPersistenceProvider()
      .create(
        "invoices",
        invoice,
      );
  }

  async update(
    id: string,
    invoice: Invoice,
  ) {

    return getPersistenceProvider()
      .update(
        "invoices",
        id,
        invoice,
      );
  }

  async delete(
    id: string,
  ) {

    return getPersistenceProvider()
      .delete(
        "invoices",
        id,
      );
  }
}
