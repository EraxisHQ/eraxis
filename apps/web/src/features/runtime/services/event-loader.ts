import { getEvents } from "../events/event-registry";

export function loadEvents() {
  return getEvents();
}
