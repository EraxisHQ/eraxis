import type { Invoice } from "../types/invoice";
import { invoiceService } from "./invoice-service";

type Listener = () => void;

let invoices: Invoice[] = [];
let loaded = false;

const listeners = new Set<Listener>();

function notify() {
  listeners.forEach(listener => listener());
}

export function getInvoices() {
  return invoices;
}

export async function refreshInvoices() {
  invoices = await invoiceService.findAll();
  loaded = true;
  notify();
}

export function isInvoicesLoaded() {
  return loaded;
}

export function subscribeInvoices(listener: Listener) {
  listeners.add(listener);

  return () => {
    listeners.delete(listener);
  };
}
