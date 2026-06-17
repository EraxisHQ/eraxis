/**
 * =====================================
 * Eraxis Persistence
 *
 * Purpose:
 * Persistence startup.
 *
 * Milestone:
 * M003-01-07
 * =====================================
 */

import {
  createPersistenceProvider,
} from "./provider-factory";

import {
  setPersistenceProvider,
} from "./persistence-service";

export function
initializePersistence() {

  const provider =
    createPersistenceProvider();

  setPersistenceProvider(
    provider
  );
}
