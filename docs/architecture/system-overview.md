# Eraxis System Overview

## Purpose

Eraxis is a multi-tenant SaaS platform that allows multiple business applications to run on a shared core architecture.

Examples:

* Inventory
* HRMS
* Fleet Management
* CRM
* Billing
* School ERP
* Hospital ERP

---

## High Level Flow

User
↓
Authentication
↓
RBAC
↓
Tenant
↓
Branch
↓
Application
↓
Plugin
↓
Business Function

---

## Core Responsibilities

The Core Platform provides:

* Authentication
* Authorization
* Tenant Management
* Branch Management
* Navigation
* Notifications
* Audit Logging
* Dashboard
* Search
* Storage
* Media
* Realtime Events

Business logic must never exist in Core.

---

## Plugin Responsibilities

Plugins provide:

* Inventory
* HRMS
* Fleet
* CRM
* Billing
* Warranty
* School ERP
* Hospital ERP

Plugins consume Core services.

---

## Deployment

Frontend:

* React
* TypeScript
* Vite

Backend:

* Supabase

Hosting:

* Vercel

Storage:

* Supabase Storage

Realtime:

* Supabase Realtime
