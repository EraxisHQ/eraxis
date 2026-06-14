import type {
  RealtimeEvent,
} from "../types/realtime-event";

class RealtimeRegistry {

  private items:
    RealtimeEvent[] = [];

  register(
    item: RealtimeEvent
  ) {
    this.items.push(item);
  }

  getAll() {
    return this.items;
  }
}

export const
  realtimeRegistry =
    new RealtimeRegistry();
