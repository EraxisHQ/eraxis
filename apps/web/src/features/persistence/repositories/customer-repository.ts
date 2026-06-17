import {
  BaseRepository,
} from "./base-repository";

import type {
  Customer,
} from "../../customers/types/customer";

import {
  COLLECTIONS,
} from "../constants/collections";

export class CustomerRepository
extends BaseRepository<Customer> {

  constructor() {

    super(
      COLLECTIONS.CUSTOMERS,
    );
  }
}