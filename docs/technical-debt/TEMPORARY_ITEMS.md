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
Auth context not yet integrated with
User Provider, Tenant Provider and RBAC.

Future Fix:

AuthUser should contain:

- userId
- tenantId
- roleId
- permissions

Target:
E020

Status:
OPEN

Priority:
HIGH
=======================================================
TD-006

Module:
Authentication

Temporary Item:
Authentication state managed only through React Context

Reason:
Application state architecture not finalized

Future Fix:
Evaluate:

- React Context
- Zustand
- Redux Toolkit

and standardize on one approach

Status:
OPEN

Priority:
LOW
=======================================
TD-009

Module:
Navigation

Temporary Item:
Hardcoded sidebar menu

Reason:
Plugin registry not implemented

Future Fix:
Generate menu from plugin manifests

Target:
E019 Plugin Registry

Status:
OPEN

Priority:
MEDIUM
TD-010

Module:
Dashboard Shell

Temporary Item:
Placeholder topbar controls

Reason:
Theme, localization and profile modules not implemented

Future Fix:
Connect controls to actual services

Status:
OPEN

Priority:
LOW
==================================

TD-011

Module:
Theme

Temporary Item:
Theme preference stored in Local Storage

Reason:
User Preferences module not implemented

Future Fix:
Store theme in user profile settings

Target:
After User Module

Status:
OPEN

Priority:
LOW
===================================================
TD-012

Module:
Localization

Temporary Item:
Translation dictionaries stored in frontend

Reason:
Translation service not implemented

Future Fix:
Move translations to shared localization package

Target:
After Plugin Registry

Status:
OPEN

Priority:
LOW
=====================================
TD-013

Module:
RBAC

Temporary Item:
Hardcoded Super Admin

Location:
permission-provider.tsx

Reason:
Authentication and User
Management not implemented.

Future Fix:
Populate role and permissions
from authenticated user.

Target:
E020

Status:
OPEN

Priority:
MEDIUM
=======================================
TD-014

Module:
Users

Temporary Item:
Hardcoded User

Location:
default-user.ts

Reason:
Authentication integration not completed.

Future Fix:
Load user from auth session.

Target:
E020

Status:
OPEN

Priority:
MEDIUM
=============================
TD-015

Module:
Tenants

Temporary Item:
Hardcoded Tenant

Location:
default-tenant.ts

Reason:
Tenant Management module
not implemented yet.

Future Fix:
Load tenant from
authenticated session.

Target:
E020

Status:
OPEN

Priority:
MEDIUM
=============================
