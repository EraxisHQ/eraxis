# ADR-004 Supabase Client Location

## Status

Accepted

## Date

2026-06-08

## Decision

The Supabase client will remain in:

apps/web/src/lib/supabase.ts

## Reason

Eraxis currently has only one application (web).

Creating a shared infrastructure package at this stage would introduce additional complexity without providing immediate benefit.

## Alternatives Considered

packages/infrastructure/supabase

## Future Review

Revisit when:

* Multiple applications exist
* Backend services are introduced
* Shared infrastructure becomes necessary
