/**
 * Authentication service.
 */

import { supabase } from "../../../lib/supabase";

export const authService = {
  async signIn(
    email: string,
    password: string
  ) {
    return supabase.auth.signInWithPassword({
      email,
      password,
    });
  },

async resetPassword(email: string) {
  return supabase.auth.resetPasswordForEmail(
    email,
    {
      redirectTo: `${window.location.origin}/reset-password`,
    }
  );
},

async updatePassword(password: string) {
  return supabase.auth.updateUser({
    password,
  });
},

  async signOut() {
    return supabase.auth.signOut();
  },

  async getSession() {
    return supabase.auth.getSession();
  },
};