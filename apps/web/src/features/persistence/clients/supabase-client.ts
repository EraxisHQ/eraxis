/**
 * =====================================
 * Eraxis Persistence
 *
 * Purpose:
 * Single Supabase client.
 *
 * Milestone:
 * M003-11-06
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

if (!url) {

  throw new Error(
    "VITE_SUPABASE_URL missing",
  );
}

if (!key) {

  throw new Error(
    "VITE_SUPABASE_ANON_KEY missing",
  );
}

export const
supabaseClient =
  createClient(
    url,
    key,
  );