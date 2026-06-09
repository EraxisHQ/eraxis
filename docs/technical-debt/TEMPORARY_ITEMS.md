## TD-001

Module:
Authentication

Location:
packages/core/auth/services/auth.service.ts

Temporary Item:
Direct Supabase dependency

Reason:
Infrastructure package not implemented

Future Fix:
Move Supabase client access to:

packages/infrastructure/supabase

Status:
OPEN

Priority:
MEDIUM
=====================================================
## TD-002

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
## TD-003

Module:
Authentication

Temporary Item:
Minimal Auth Context

Reason:
Tenant, User, RBAC modules not yet implemented

Future Fix:

AuthUser should contain:

- userId
- tenantId
- branchId
- roleId
- permissions

Status:
OPEN
=======================================================
TD-004

Module:
Login

Temporary Item:
Direct App.tsx page rendering

Reason:
Router not implemented

Future Fix:
Replace with React Router

Status:
OPEN
==========================================

