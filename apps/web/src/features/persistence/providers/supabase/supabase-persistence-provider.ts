/**
 * =====================================
 * Eraxis Persistence
 *
 * Purpose:
 * Supabase provider.
 *
 * Milestone:
 * M003-04-01
 * =====================================
 */

import type {
  PersistenceProvider,
} from "../../types/persistence-provider";

import {
  supabaseClient,
} from "../../clients/supabase-client";

export class
  SupabasePersistenceProvider
  implements PersistenceProvider {

  async find<T>(
    collection: string,
  ): Promise<T[]> {

    const {
      data,
      error,
    } = await supabaseClient
      .from(
        collection,
      )
      .select("*");

    if (error) {

      throw error;
    }

    return (
      data ?? []
    ) as T[];
  }

  async findById<T>(
    collection: string,
    id: string,
  ): Promise<T | null> {

    const {
      data,
      error,
    } = await supabaseClient
      .from(
        collection,
      )
      .select("*")
      .eq(
        "id",
        id,
      )
      .single();

    if (error) {

      return null;
    }

    return data as T;
  }

  async create<T>(
    collection: string,
    entity: T,
  ): Promise<void> {

    const {
      error,
    } = await supabaseClient
      .from(
        collection,
      )
      .insert(
        entity as Record<
          string,
          unknown
        >
      );
    if (error) {

      throw error;
    }
  }

  async update<T>(
    collection: string,
    id: string,
    entity: T,
  ): Promise<void> {

    const {
      error,
    } = await supabaseClient
      .from(
        collection,
      )
      .update(
        entity as Record<
          string,
          unknown
        >,
      )
      .eq(
        "id",
        id,
      );

    if (error) {

      throw error;
    }
  }

  async delete(
    collection: string,
    id: string,
  ): Promise<void> {

    const {
      error,
    } = await supabaseClient
      .from(
        collection,
      )
      .delete()
      .eq(
        "id",
        id,
      );

    if (error) {

      throw error;
    }
  }
};