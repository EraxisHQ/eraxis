import {
  getPersistenceProvider,
} from "../services/persistence-service";

import type {
  Order,
} from "../../orders/types/order";

export class OrderRepository {

  async findAll() {

    return getPersistenceProvider()
      .find<Order>(
        "orders"
      );
  }

  async findById(
    id: string,
  ) {

    return getPersistenceProvider()
      .findById<Order>(
        "orders",
        id,
      );
  }

  async create(
    order: Order,
  ) {

    return getPersistenceProvider()
      .create(
        "orders",
        order,
      );
  }

  async update(
    id: string,
    order: Order,
  ) {

    return getPersistenceProvider()
      .update(
        "orders",
        id,
        order,
      );
  }

  async delete(
    id: string,
  ) {

    return getPersistenceProvider()
      .delete(
        "orders",
        id,
      );
  }
}
