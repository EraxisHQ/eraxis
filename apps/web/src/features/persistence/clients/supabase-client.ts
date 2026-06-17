/**
 * =====================================
 * Eraxis Persistence
 *
 * Purpose:
 * Single Supabase client.
 *
 * Milestone:
 * M003-04-02
 * =====================================
 */

import {
  createClient,
} from "@supabase/supabase-js";

const url =
  import.meta.env
    .VITE_SUPABASE_URL;

const key =
  import.meta.env
    .VITE_SUPABASE_ANON_KEY;

export const
supabaseClient =
  createClient(
    url,
    key,
  );
