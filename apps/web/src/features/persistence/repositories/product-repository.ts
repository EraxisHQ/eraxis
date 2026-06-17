/**
 * =====================================
 * Eraxis Persistence
 *
 * Purpose:
 * Product repository.
 *
 * Milestone:
 * M003-13-02
 * =====================================
 */

import {
  BaseRepository,
} from "./base-repository";

import type {
  Product,
} from "../../products/types/product";

import {
  COLLECTIONS,
} from "../constants/collections";

export class
ProductRepository
extends BaseRepository<Product> {

  constructor() {

    super(
      COLLECTIONS.PRODUCTS,
    );
  }
}