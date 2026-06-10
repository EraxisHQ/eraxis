# Eraxis Architecture Roadmap

## Vision

Eraxis is a multi-tenant SaaS platform supporting:

* Fleet Management
* HRMS
* CRM
* Inventory
* Billing
* School ERP
* Hospital ERP
* AI Assistant
* Custom Plugins

Built using:

* React
* TypeScript
* Supabase
* Vercel
* Plugin Architecture

---

# Completed Milestones

## Foundation

* [x] E001 Workspace Foundation
* [x] E002 Shared Types
* [x] E003 Shared Utils
* [x] E004 Contracts
* [x] E005 Supabase Foundation

## Authentication

* [x] E006 Auth Foundation
* [x] E007 Login Page

## Routing

* [x] E008 Routing Foundation
* [x] E009 Router Integration

## UI

* [x] E010 Dashboard Shell
* [x] E011 Theme System
* [x] E012 Localization Foundation
* [x] E013 Navigation System
* [x] E014 Breadcrumb Foundation

## Security

* [x] E015 RBAC Foundation

## Identity

* [x] E016 User Foundation
* [x] E017 Tenant Foundation

## Platform

* [x] E018 Application Registry

---

# Current Milestone

## E019 Plugin Registry

Status: IN PROGRESS

Goal:

Create the plugin architecture that will power all future Eraxis modules.

---

# Upcoming Milestones

## Core Platform

* E019 Plugin Registry
* E020 Infrastructure Package
* E021 User Profile
* E022 Settings Module
* E023 Notification Foundation
* E024 Audit Foundation

## SaaS Platform

* E025 Tenant Management
* E026 User Management
* E027 Permission Management
* E028 Application Management

## Plugin System

* E029 Plugin Loader
* E030 Plugin Navigation
* E031 Plugin Permissions
* E032 Plugin Settings

## AI

* E033 AI Foundation
* E034 AI Provider Registry
* E035 AI Assistant

---

# Active Technical Debt

* TD-001
* TD-002
* TD-003
* TD-006
* TD-009
* TD-011
* TD-012
* TD-013
* TD-014
* TD-015

Total Active Debt: 10

---

# Closed Technical Debt

* TD-004
* TD-007
* TD-008
* TD-010

---

# Architectural Principles

1. Plugin First
2. Multi Tenant First
3. Type Safety Everywhere
4. Documentation Before Scaling
5. Track Every Temporary Shortcut
6. Infrastructure Before Features
7. No Hardcoded Business Modules

---

# Long Term Goal

Eraxis should support installation and management of business applications through a centralized plugin architecture without modifying the core platform.
