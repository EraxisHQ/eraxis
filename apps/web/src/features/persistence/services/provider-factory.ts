/**
 * =====================================
 * Eraxis Persistence
 *
 * Purpose:
 * Provider resolution.
 *
 * Milestone:
 * M003-01-06
 * =====================================
 */

import {
  LocalPersistenceProvider,
} from "../providers/local/local-persistence-provider";

import {
  getPersistenceConfig,
} from "./persistence-config-service";

import {
  SupabasePersistenceProvider,
} from "../providers/supabase/supabase-persistence-provider";

export function
  createPersistenceProvider() {

  const config =
    getPersistenceConfig();

  switch (
  config.provider
  ) {

    case "local":

      return new
        LocalPersistenceProvider();

    case "supabase":

      return new
        SupabasePersistenceProvider();

    default:

      throw new Error(
        "Provider not supported",
      );
  }
}