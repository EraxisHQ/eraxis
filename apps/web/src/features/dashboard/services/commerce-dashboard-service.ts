/**
 * =====================================
 * Eraxis Commerce
 * Module: Dashboard
 *
 * Purpose:
 * Commerce dashboard metrics.
 *
 * Milestone:
 * M002-09-01
 * =====================================
 */

import {
  PRODUCT_REGISTRY,
} from "../../products/registry/product-registry";

import {
  CATEGORY_REGISTRY,
} from "../../categories/registry/category-registry";

import {
  CUSTOMER_REGISTRY,
} from "../../customers/registry/customer-registry";

import {
  ORDER_REGISTRY,
} from "../../orders/registry/order-registry";

export function getCommerceMetrics() {

  return {
    products:
      PRODUCT_REGISTRY.length,

    categories:
      CATEGORY_REGISTRY.length,

    customers:
      CUSTOMER_REGISTRY.length,

    orders:
      ORDER_REGISTRY.length,
  };
}
