/**
 * =====================================
 * Eraxis
 * Module: Platform Event
 *
 * Purpose:
 * Standard event contract.
 *
 * Milestone:
 * M001-06-01
 * =====================================
 */

export type PlatformEvent = {
  id: string;

  type: string;

  timestamp: string;

  payload: unknown;
};
