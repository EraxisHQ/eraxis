/**
 * =====================================
 * Eraxis Persistence
 *
 * Purpose:
 * Single persistence
 * access point.
 *
 * Milestone:
 * M003-10-04
 * =====================================
 */

import type {
  PersistenceProvider,
} from "../types/persistence-provider";

let provider:
  PersistenceProvider
  | null = null;

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

  if (!provider) {

    throw new Error(
      "Persistence provider not initialized",
    );
  }

  return provider;
}