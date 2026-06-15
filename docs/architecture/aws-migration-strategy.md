# AWS Migration Strategy

## Current Architecture

Frontend

* React
* Vite

Backend Services

* Supabase

Database

* PostgreSQL

Authentication

* Supabase Auth

Storage

* Supabase Storage

## Future Architecture

Frontend

* React

Backend

* Node.js Services

Database

* AWS RDS PostgreSQL

Authentication

* AWS Cognito

Storage

* AWS S3

Monitoring

* CloudWatch

## Migration Rule

Never call Supabase directly from UI.

Required Flow:

UI
→ Hook
→ Service
→ Repository
→ Database

This allows:

Supabase
→ AWS

with minimal refactoring.

## Migration Phases

Phase 1

* Supabase Only

Phase 2

* Supabase + AWS

Phase 3

* AWS Primary

Phase 4

* Enterprise Infrastructure

