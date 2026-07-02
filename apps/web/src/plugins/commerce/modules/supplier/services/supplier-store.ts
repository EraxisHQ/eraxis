import type { Supplier } from "../types/supplier";
import { supplierService } from "./supplier-service";

type Listener = () => void;

let suppliers: Supplier[] = [];
let loaded = false;

const listeners = new Set<Listener>();

function notify() {
  listeners.forEach(listener => listener());
}

export function getSuppliers() {
  return suppliers;
}

export async function refreshSuppliers() {
  suppliers = await supplierService.findAll();
  loaded = true;
  notify();
}

export function isSuppliersLoaded() {
  return loaded;
}

export function subscribeSuppliers(listener: Listener) {
  listeners.add(listener);

  return () => {
    listeners.delete(listener);
  };
}
