import type { Customer } from "../types/customer";
import { customerService } from "./customer-service";

type Listener = () => void;

let customers: Customer[] = [];
let loaded = false;

const listeners = new Set<Listener>();

function notify() {
  listeners.forEach(listener => listener());
}

export function getCustomers() {
  return customers;
}

export async function refreshCustomers() {
  customers = await customerService.findAll();
  loaded = true;
  notify();
}

export function isCustomersLoaded() {
  return loaded;
}

export function subscribeCustomers(listener: Listener) {
  listeners.add(listener);

  return () => {
    listeners.delete(listener);
  };
}
