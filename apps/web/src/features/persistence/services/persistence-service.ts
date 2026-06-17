/**
 * =====================================
 * Eraxis Persistence
 *
 * Purpose:
 * Single persistence
 * access point.
 *
 * Milestone:
 * M003-01-03
 * =====================================
 */

import type {
  PersistenceProvider,
} from "../types/persistence-provider";

let provider:
  PersistenceProvider;

export function
setPersistenceProvider(
  persistenceProvider:
    PersistenceProvider,
) {

  provider =
    persistenceProvider;
}

export function
getPersistenceProvider() {

  return provider;
}
