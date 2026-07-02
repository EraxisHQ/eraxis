import type { Unit } from "../types/unit";
import { unitService } from "./unit-service";

type Listener = () => void;

let units: Unit[] = [];
let loaded = false;

const listeners = new Set<Listener>();

function notify() {
  listeners.forEach(listener => listener());
}

export function getUnits() {
  return units;
}

export async function refreshUnits() {
  units = await unitService.findAll();
  loaded = true;
  notify();
}

export function isUnitsLoaded() {
  return loaded;
}

export function subscribeUnits(listener: Listener) {
  listeners.add(listener);

  return () => {
    listeners.delete(listener);
  };
}
