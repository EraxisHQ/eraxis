/**
 * =====================================
 * Eraxis Commerce
 * Module: Customers
 *
 * Milestone:
 * M002-05-01
 * =====================================
 */

export type Customer = {
  id: string;

  customerCode: string;

  firstName: string;

  lastName: string;

  email: string;

  phone?: string;

  active: boolean;
};
