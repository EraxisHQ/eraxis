import type { Purchase } from "../types/purchase";
import { purchaseService } from "./purchase-service";

type Listener = () => void;

let purchases: Purchase[] = [];
let loaded = false;

const listeners = new Set<Listener>();

function notify() {
  listeners.forEach(listener => listener());
}

export function getPurchases() {
  return purchases;
}

export async function refreshPurchases() {
  purchases = await purchaseService.findAll();
  loaded = true;
  notify();
}

export function isPurchasesLoaded() {
  return loaded;
}

export function subscribePurchases(listener: Listener) {
  listeners.add(listener);

  return () => {
    listeners.delete(listener);
  };
}
