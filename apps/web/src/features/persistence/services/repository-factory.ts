/**
 * =====================================
 * Eraxis Persistence
 *
 * Purpose:
 * Repository factory.
 *
 * Milestone:
 * M003-02-02
 * =====================================
 */

import {
  ProductRepository,
} from "../repositories/product-repository";

import {
  CustomerRepository,
} from "../repositories/customer-repository";

import {
  OrderRepository,
} from "../repositories/order-repository";

import {
  InvoiceRepository,
} from "../repositories/invoice-repository";

import {
  PaymentRepository,
} from "../repositories/payment-repository";

export function
  createProductRepository() {

  return new
    ProductRepository();
}

export function
  createCustomerRepository() {

  return new
    CustomerRepository();
}

export function
  createOrderRepository() {

  return new
    OrderRepository();
}

export function
  createInvoiceRepository() {

  return new
    InvoiceRepository();
}

export function
  createPaymentRepository() {

  return new
    PaymentRepository();
}