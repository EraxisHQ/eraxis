# ADR-038 Database Foundation

## Context

E001-E040 used mock data providers.

No persistent business data existed.

## Decision

Introduce Supabase database foundation before Commerce development.

## Consequences

Future modules will use persistent storage.

Commerce can be built without major rewrites.

Supports multi-tenant architecture.