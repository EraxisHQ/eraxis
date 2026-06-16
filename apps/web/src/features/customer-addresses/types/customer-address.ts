/**
 * =====================================
 * Eraxis Commerce
 * Module: Customer Addresses
 *
 * Milestone:
 * M002-12-01
 * =====================================
 */

export type CustomerAddress = {
  id: string;

  customerId: string;

  type:
    | "billing"
    | "shipping";

  line1: string;

  city: string;

  state: string;

  country: string;

  postalCode: string;

  active: boolean;
};
