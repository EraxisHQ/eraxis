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

import {
  COLLECTIONS,
} from "../constants/collections";

export class ProductRepository {

  async findAll() {

    return getPersistenceProvider()
      .find<Product>(
        COLLECTIONS.PRODUCTS,
      );
  }

  async findById(
    id: string,
  ) {

    return getPersistenceProvider()
      .findById<Product>(
        COLLECTIONS.PRODUCTS,
        id
      );
  }

  async create(
    product: Product,
  ) {

    return getPersistenceProvider()
      .create(
        COLLECTIONS.PRODUCTS,
        product
      );
  }

  async update(
    id: string,
    product: Product,
  ) {

    return getPersistenceProvider()
      .update(
        COLLECTIONS.PRODUCTS,
        id,
        product
      );
  }

  async delete(
    id: string,
  ) {

    return getPersistenceProvider()
      .delete(
        COLLECTIONS.PRODUCTS,
        id
      );
  }
}
