/**
 * =====================================
 * Eraxis Commerce
 * Module: Taxes
 *
 * Milestone:
 * M002-18-01
 * =====================================
 */

export type Tax = {
  id: string;

  code: string;

  name: string;

  percentage: number;

  active: boolean;
};
