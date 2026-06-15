/**
 * =====================================
 * Eraxis
 * Module: Event Loader
 *
 * Purpose:
 * Loads platform events.
 *
 * Milestone:
 * M001-06-01
 * =====================================
 */

import {
  EVENT_REGISTRY,
} from "../event-bus/event-registry";

export function loadEvents() {
  return EVENT_REGISTRY;
}
