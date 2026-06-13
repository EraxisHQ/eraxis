# P000-02 Core Persistence Foundation

Status: In Progress

## Objective

Replace mock providers with database-backed providers while preserving the existing Eraxis architecture.

## Completed

### Tenant Persistence

Provider now loads tenant data from Supabase.

Status: Complete

### Branch Persistence

Provider now loads branch data from Supabase.

Status: Complete

### Role Persistence

Status: Complete

### User Persistence

Status: Complete

### Permission Persistence

Status: Pending

### Authentication Foundation

Status: Pending

## Notes

Current implementation still retains:

* DEFAULT_TENANT
* DEFAULT_BRANCHES
* DEFAULT_USER
* DEFAULT_ROLES

These remain temporarily until all persistence modules are migrated and validated.

## Progress

4 / 6 Modules Completed


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
