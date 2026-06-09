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

Priority:
HIGH
=======================================================
TD-004

Module:
Routing

Temporary Item:
Basic routing only

Reason:
Protected routes and plugin routes not implemented

Future Fix:
Add:
- Protected Routes
- Plugin Routing
- Route Guards

Status:
PARTIALLY RESOLVED

Priority:
MEDIUM

Target:
E009 Protected Routes / Router
==========================================
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
TD-007

Module:
UI

Temporary Item:
Theme engine not implemented

Reason:
Dashboard shell not built

Future Fix:

- Theme Provider
- Dark Mode
- Light Mode
- User Theme Preferences

Status:
OPEN

Priority:
MEDIUM
==============================
TD-008

Module:
Localization

Temporary Item:
Multi-language system not implemented

Reason:
Core localization infrastructure not built

Future Fix:

- i18n Framework
- Translation Files
- Language Switcher

Status:
OPEN

Priority:
MEDIUM
=====================================
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
TD-009

Module:
Navigation

Temporary Item:
Sidebar menu hardcoded

Reason:
Plugin Registry not implemented

Future Fix:
Generate menu from plugin manifests

Target:
E019

Status:
OPEN

Priority:
MEDIUM
==========================================
TD-010

Module:
Dashboard Shell

Temporary Item:
Topbar controls are placeholders

Reason:
Theme, localization and profile modules not implemented

Future Fix:
Connect controls to actual services

Target:
E011-E014

Status:
OPEN

Priority:
LOW
=======================================
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
