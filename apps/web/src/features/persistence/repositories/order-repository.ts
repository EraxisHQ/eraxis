import {
  BaseRepository,
} from "./base-repository";

import type {
  Order,
} from "../../orders/types/order";

import {
  COLLECTIONS,
} from "../constants/collections";

export class OrderRepository
extends BaseRepository<Order> {

  constructor() {

    super(
      COLLECTIONS.ORDERS,
    );
  }
}