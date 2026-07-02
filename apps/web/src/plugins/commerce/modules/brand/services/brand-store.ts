import type { Brand } from "../types/brand";
import { brandService } from "./brand-service";

type Listener = () => void;

let brands: Brand[] = [];
let loaded = false;

const listeners = new Set<Listener>();

function notify() {
  listeners.forEach(listener => listener());
}

export function getBrands() {
  return brands;
}

export async function refreshBrands() {
  brands = await brandService.findAll();
  loaded = true;
  notify();
}

export function isBrandsLoaded() {
  return loaded;
}

export function subscribeBrands(listener: Listener) {
  listeners.add(listener);

  return () => {
    listeners.delete(listener);
  };
}
