/**
 * =====================================
 * Eraxis Commerce
 * Module: Products
 *
 * Purpose:
 * Product variant contract.
 *
 * Milestone:
 * M002-02-01
 * =====================================
 */

export type ProductVariant = {
  id: string;

  productId: string;

  sku: string;

  name: string;

  active: boolean;
};
