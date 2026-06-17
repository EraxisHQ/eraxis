import {
  BaseRepository,
} from "./base-repository";

import type {
  Payment,
} from "../../payments/types/payment";

import {
  COLLECTIONS,
} from "../constants/collections";

export class PaymentRepository
extends BaseRepository<Payment> {

  constructor() {

    super(
      COLLECTIONS.PAYMENTS,
    );
  }
}
