import type { Sale } from "../types/sale";
import { salesService } from "./sales-service";

type Listener = () => void;

let sales: Sale[] = [];
let loaded = false;

const listeners = new Set<Listener>();

function notify() {
  listeners.forEach(listener => listener());
}

export function getSales() {
  return sales;
}

export async function refreshSales() {
  sales = await salesService.findAll();
  loaded = true;
  notify();
}

export function isSalesLoaded() {
  return loaded;
}

export function subscribeSales(listener: Listener) {
  listeners.add(listener);

  return () => {
    listeners.delete(listener);
  };
}
