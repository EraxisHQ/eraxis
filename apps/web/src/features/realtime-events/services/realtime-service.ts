import {
  realtimeRegistry,
} from "./realtime-registry";

export class RealtimeService {

  getEvents() {

    return realtimeRegistry
      .getAll();
  }

  getLatestEvents() {

    return realtimeRegistry
      .getAll();
  }
}

export const
  realtimeService =
    new RealtimeService();
