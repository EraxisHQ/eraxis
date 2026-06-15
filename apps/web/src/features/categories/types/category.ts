/**
 * =====================================
 * Eraxis Commerce
 * Module: Categories
 *
 * Purpose:
 * Category contract.
 *
 * Milestone:
 * M002-03-01
 * =====================================
 */

export type Category = {
  id: string;

  code: string;

  name: string;

  parentId?: string;

  active: boolean;
};
