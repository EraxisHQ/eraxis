/**
 * =====================================
 * Eraxis Persistence
 *
 * Purpose:
 * Product repository.
 *
 * Milestone:
 * M003-02-01
 * =====================================
 */

import {
  getPersistenceProvider,
} from "../services/persistence-service";

import type {
  Product,
} from "../../products/types/product";

export class ProductRepository {

  async findAll() {

    return getPersistenceProvider()
      .find<Product>(
        "products"
      );
  }

  async findById(
    id: string,
  ) {

    return getPersistenceProvider()
      .findById<Product>(
        "products",
        id
      );
  }

  async create(
    product: Product,
  ) {

    return getPersistenceProvider()
      .create(
        "products",
        product
      );
  }

  async update(
    id: string,
    product: Product,
  ) {

    return getPersistenceProvider()
      .update(
        "products",
        id,
        product
      );
  }

  async delete(
    id: string,
  ) {

    return getPersistenceProvider()
      .delete(
        "products",
        id
      );
  }
}
