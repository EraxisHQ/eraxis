import type { RuntimeEvent } from "../types/runtime-event";

const EVENTS: RuntimeEvent[] = [];

export function registerEvent(event: RuntimeEvent) {
  EVENTS.push(event);
}

export function getEvents() {
  return EVENTS;
}
