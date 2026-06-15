/**
 * =====================================
 * Eraxis
 * Module: Event Publisher
 *
 * Purpose:
 * Publishes platform events.
 *
 * Milestone:
 * M001-06-02
 * =====================================
 */

import type {
  PlatformEvent,
} from "../events/platform-event";

import {
  EVENT_REGISTRY,
} from "../event-bus/event-registry";

import {
  getSubscribers,
} from "./event-subscription-service";

export function publishEvent(
  event: PlatformEvent
) {

  EVENT_REGISTRY.push(
    event
  );

  const handlers =
    getSubscribers(
      event.type
    );

  handlers.forEach(
    (handler) =>
      handler(event)
  );
}