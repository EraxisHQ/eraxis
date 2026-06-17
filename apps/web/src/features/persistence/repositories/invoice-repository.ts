import {
  BaseRepository,
} from "./base-repository";

import type {
  Invoice,
} from "../../invoices/types/invoice";

import {
  COLLECTIONS,
} from "../constants/collections";

export class InvoiceRepository
extends BaseRepository<Invoice> {

  constructor() {

    super(
      COLLECTIONS.INVOICES,
    );
  }
}