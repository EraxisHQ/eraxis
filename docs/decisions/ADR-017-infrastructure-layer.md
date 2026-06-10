# ADR-017 Infrastructure Layer

Status:
Accepted

Decision

Create a dedicated Infrastructure package.

Reason

External providers should not be accessed directly by Core modules.

Benefits

- Decoupling
- Testability
- Maintainability
- Provider Replacement