/**
 * =====================================
 * Eraxis Commerce
 * Module: Products
 *
 * Purpose:
 * Product contract.
 *
 * Milestone:
 * M002-02-01
 * =====================================
 */

export type Product = {
  id: string;

  sku: string;

  name: string;

  description?: string;

  categoryId?: string;

  brandId?: string;

  active: boolean;

  variantIds?: string[];
};