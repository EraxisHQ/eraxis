import type { Inventory } from "../types/inventory";
import { inventoryService } from "./inventory-service";

type Listener = () => void;

let inventory: Inventory[] = [];
let loaded = false;

const listeners = new Set<Listener>();

function notify() {
  listeners.forEach(listener => listener());
}

export function getInventory() {
  return inventory;
}

export async function refreshInventory() {
  inventory = await inventoryService.findAll();
  loaded = true;
  notify();
}

export function isInventoryLoaded() {
  return loaded;
}

export function subscribeInventory(listener: Listener) {
  listeners.add(listener);

  return () => {

  listeners.delete(listener);
  };
}
