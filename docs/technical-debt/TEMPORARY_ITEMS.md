## TD-001

Module:
Authentication

Location:
packages/core/auth/services/auth.service.ts

Temporary Item:
Direct import from apps/web

Reason:
Supabase infrastructure package not built yet

Future Fix:
Move to packages/infrastructure/supabase

Target:
Before E020

Status:
OPEN
=====================================================
TD-002

Module:
Infrastructure

Current:
apps/web/src/lib/supabase.ts

Future:
packages/infrastructure/supabase

Reason:
Single app currently. Shared infrastructure package will be created when a second application or service requires it.

Status:
DEFERRED

Priority:
LOW
===================================================
TD-003

Module:
Authentication

Temporary Item:
Minimal Auth Context

Reason:
Tenant, User, RBAC modules not yet implemented

Future Fix:
Expand AuthUser with tenant, role and permission information

Status:
OPEN