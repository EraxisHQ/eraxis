# ADR-041 Development RLS Policy

## Context

Eraxis Core Persistence Foundation requires database reads before authentication is implemented.

## Decision

Temporary development policies will allow authenticated and anonymous reads.

## Consequences
# ADR-041 Development RLS Policy

## Context

Eraxis Core Persistence Foundation requires database reads before authentication exists.

## Decision

Temporary development read policies will be created.

## Consequences

Core modules can read database records.

Policies must be replaced during P000-03 Authentication Foundation.

## Technical Debt

TD-042

Development can continue without authentication.

Policies must be tightened during P000-03 Authentication Foundation.

## Technical Debt

TD-042 Development RLS Policies
