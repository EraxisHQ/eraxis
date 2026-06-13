# P000-02 Core Persistence Foundation

Status: Complete

Completed

✅ Tenant Persistence

✅ Branch Persistence

✅ Role Persistence

✅ User Persistence

✅ Permission Persistence

Notes

All core providers now load data from Supabase instead of mock constants.


### User Seed Data

Created initial platform user.

Email:
admin@eraxis.local

Status:
Completed


### User RLS Policy

Added development SELECT policy.

File:

supabase/migrations/20260613_003_dev_users_rls_policies.sql

Purpose:

Allow frontend to read users during Core Persistence development.

Status:

Temporary Development Policy
