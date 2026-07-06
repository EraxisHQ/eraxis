# P000-02-04 Development RLS Policies

## Objective

Allow Eraxis Core modules to read database data before authentication is implemented.

## Migration

supabase/migrations/20260613_003_development_rls_policies.sql

## Tables

* tenants
* branches
* roles
* permissions

## Reason

Authentication foundation has not yet been implemented.

Temporary read access is required during development.

## Status

In Progress

