import {
  getPersistenceProvider,
} from "../services/persistence-service";

import type {
  Customer,
} from "../../customers/types/customer";

export class CustomerRepository {

  async findAll() {

    return getPersistenceProvider()
      .find<Customer>(
        "customers"
      );
  }

  async findById(
    id: string,
  ) {

    return getPersistenceProvider()
      .findById<Customer>(
        "customers",
        id,
      );
  }

  async create(
    customer: Customer,
  ) {

    return getPersistenceProvider()
      .create(
        "customers",
        customer,
      );
  }

  async update(
    id: string,
    customer: Customer,
  ) {

    return getPersistenceProvider()
      .update(
        "customers",
        id,
        customer,
      );
  }

  async delete(
    id: string,
  ) {

    return getPersistenceProvider()
      .delete(
        "customers",
        id,
      );
  }
}
