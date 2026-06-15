/**
 * =====================================
 * Eraxis
 * Module: Event Subscription
 *
 * Purpose:
 * Runtime event subscription.
 *
 * Milestone:
 * M001-06-03
 * =====================================
 */

import type {
  PlatformEvent,
} from "../events/platform-event";

type EventHandler =
  (
    event: PlatformEvent
  ) => void;

const subscribers:
  Record<
    string,
    EventHandler[]
  > = {};

export function subscribeEvent(
  eventType: string,
  handler: EventHandler
) {

  if (
    !subscribers[eventType]
  ) {

    subscribers[eventType] = [];
  }

  subscribers[eventType].push(
    handler
  );
}

export function getSubscribers(
  eventType: string
) {

  return (
    subscribers[eventType] ??
    []
  );
}
