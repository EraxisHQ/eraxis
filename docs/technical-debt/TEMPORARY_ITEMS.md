TD-001

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

=====================================================

TD-003

Module:
Authentication

Temporary Item:
Minimal Auth Context

Reason:
Auth context not yet integrated with User Provider, Tenant Provider and RBAC.

Future Fix:

AuthUser should contain:

* userId
* tenantId
* roleId
* permissions

Target:
Authentication Integration Phase

Status:
OPEN

Priority:
HIGH

=====================================================

TD-006

Module:
Authentication

Temporary Item:
Authentication state managed only through React Context

Reason:
Application state architecture not finalized

Future Fix:

* React Context
* Zustand
* Redux Toolkit

and standardize on one approach

Status:
OPEN

Priority:
LOW

=====================================================

TD-009

Module:
Navigation

Temporary Item:
Hardcoded sidebar menu

Reason:
Plugin registry not fully integrated into navigation generation

Future Fix:
Generate menu from plugin manifests

Target:
Plugin Navigation Phase

Status:
OPEN

Priority:
MEDIUM

=====================================================

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
User Preferences Phase

Status:
OPEN

Priority:
LOW

=====================================================

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
Localization Package Phase

Status:
OPEN

Priority:
LOW

=====================================================

TD-013

Module:
RBAC

Temporary Item:
Hardcoded Super Admin

Location:
permission-provider.tsx

Reason:
Authentication and User Management not implemented

Future Fix:
Populate role and permissions from authenticated user

Target:
Authentication Integration Phase

Status:
OPEN

Priority:
MEDIUM

=====================================================

TD-014

Module:
Users

Temporary Item:
Hardcoded User

Location:
default-user.ts

Reason:
Authentication integration not completed

Future Fix:
Load user from authenticated session

Target:
Authentication Integration Phase

Status:
OPEN

Priority:
MEDIUM

=====================================================

TD-015

Module:
Tenants

Temporary Item:
Hardcoded Tenant

Location:
default-tenant.ts

Reason:
Tenant Management module not implemented yet

Future Fix:
Load tenant from authenticated session

Target:
Tenant Management Phase

Status:
OPEN

Priority:
MEDIUM

=====================================================

TD-016

Module:
Profile

Temporary Item:
Hardcoded Profile

Location:
default-profile.ts

Reason:
Authentication integration not completed

Future Fix:
Load profile from authenticated user

Target:
User Management Phase

Status:
OPEN

Priority:
LOW

=====================================================

TD-018

Module:
Settings

Temporary Item:
Static Settings Sections

Reason:
Plugin-based settings registry not implemented

Future Fix:
Generate settings sections from plugin manifests

Status:
OPEN

Priority:
LOW

=====================================================

TD-019

Module:
Settings

Temporary Item:
Static Settings Pages

Reason:
Plugin-based settings registry not implemented

Future Fix:
Generate settings pages from plugin manifests

Status:
OPEN

Priority:
LOW
=========================================
TD-020

Module:
User Menu

Temporary Item:
Static Menu Items

Reason:
Permission-aware menu generation not implemented.

Future Fix:
Generate menu items based on RBAC permissions.

Status:
OPEN

Priority:
LOW
==============================================
TD-021

Module:
Notifications

Temporary Item:
Hardcoded Notifications

Location:
default-notifications.ts

Reason:
Backend notification service not implemented.

Future Fix:
Load notifications from notification service.

Status:
OPEN

Priority:
LOW
==================================
TD-022

Module:
Audit

Temporary Item:
Hardcoded Audit Logs

Location:
default-audit-logs.ts

Reason:
Backend audit service not implemented.

Future Fix:
Load audit logs from audit service.

Status:
OPEN

Priority:
LOW
===========================================
TD-023

Module:
Dashboard

Temporary Item:
Hardcoded Dashboard Widgets

Location:
default-widgets.ts

Reason:
Widget registry not implemented.

Future Fix:
Load widgets from plugin registry.

Status:
OPEN

Priority:
LOW
================================
TD-024

Module:
Search

Temporary Item:
Static Search Dataset

Reason:
Global search index not implemented.

Future Fix:
Generate searchable items from plugins.

Status:
OPEN

Priority:
LOW
====================================
TD-025

Module:
Command Palette

Temporary Item:
Static Commands

Location:
default-commands.ts

Reason:
Plugin command registry not implemented.

Future Fix:
Generate commands dynamically from plugin manifests.

Status:
OPEN

Priority:
LOW
====================================
TD-026

Module:
Feature Flags

Temporary Item:
Static Feature Flags

Location:
default-feature-flags.ts

Reason:
Feature management service not implemented.

Future Fix:
Load feature flags from configuration service.

Status:
OPEN

Priority:
LOW
=================================
TD-027

Module:
User Preferences

Temporary Item:
Preferences stored in memory

Reason:
Backend persistence not implemented.

Future Fix:
Store preferences in user profile service.

Status:
OPEN

Priority:
LOW
=========================================
TD-027

Module:
User Preferences

Temporary Item:
Preferences stored in memory

Location:
default-user-preferences.ts

Reason:
User profile persistence not implemented.

Future Fix:
Store preferences in user profile service.

Status:
OPEN

Priority:
LOW
============================================
TD-028

Module:
Activity Center

Temporary Item:
Hardcoded Activities

Location:
default-activities.ts

Reason:
Activity aggregation service not implemented.

Future Fix:
Aggregate activities from notifications, audit logs and plugins.

Status:
OPEN

Priority:
LOW
==========================================
TD-028

Module:
Activity Center

Temporary Item:
Hardcoded Activities

Location:
default-activities.ts

Reason:
Activity aggregation service not implemented.

Future Fix:
Aggregate activities from notifications, audit logs and plugins.

Status:
OPEN

Priority:
LOW
=====================================================
TD-029

Module:
File Storage

Temporary Item:
In-memory file storage

Reason:
Storage backend not implemented.

Future Fix:
Integrate Supabase Storage.

Status:
OPEN

Priority:
MEDIUM
==============================
TD-029

Module:
File Storage

Temporary Item:
In-memory file storage

Location:
default-storage-files.ts

Reason:
Storage backend not implemented.

Future Fix:
Integrate Supabase Storage.

Status:
OPEN

Priority:
MEDIUM
==================================
TD-030

Module:
Media Library

Temporary Item:
In-memory media library

Reason:
Media storage service not implemented.

Future Fix:
Load media from File Storage service.

Status:
OPEN

Priority:
LOW