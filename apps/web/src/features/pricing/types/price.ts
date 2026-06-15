/**
 * =====================================
 * Eraxis Commerce
 * Module: Pricing
 *
 * Milestone:
 * M002-07-01
 * =====================================
 */

export type Price = {
  id: string;

  productId: string;

  amount: number;

  currency: string;

  active: boolean;
};
