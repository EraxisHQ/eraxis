/**
 * =====================================
 * Eraxis Commerce
 * Module: Discounts
 *
 * Milestone:
 * M002-19-01
 * =====================================
 */

export type Discount = {
  id: string;

  code: string;

  name: string;

  percentage: number;

  active: boolean;
};
