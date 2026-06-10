# Infrastructure Package

Purpose

Contains external integrations.

Examples

- Supabase
- PostgreSQL
- Redis
- Email Providers
- SMS Providers
- AI Providers

Rules

Core packages must not directly depend on external providers.

All provider access goes through Infrastructure.