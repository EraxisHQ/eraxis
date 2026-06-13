# ADR-040 Tenant Persistence

## Context

Tenant module used mock data.

## Decision

Move tenant retrieval into Supabase.

## Consequences

Tenant information becomes persistent.

Future plugins can rely on tenant records.
