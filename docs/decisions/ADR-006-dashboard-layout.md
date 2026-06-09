# ADR-006 Dashboard Layout Standard

## Status

Accepted

## Date

2026-06-09

## Context

Eraxis requires a consistent user experience across all plugins.

Future modules may include:

* Paint Shop ERP
* Fleet
* CRM
* Inventory
* Helpdesk
* HRMS

A common application shell is required.

## Decision

Use:

* Dark Sidebar
* Light Content Area
* Blue Accent Color
* Fixed Topbar

Layout Structure:

Topbar

↓

Sidebar + Content Area

## Consequences

Positive:

* Professional SaaS appearance
* Consistent navigation
* Easier plugin integration

Negative:

* Additional layout abstraction required

## Future Review

Review after Plugin Registry implementation (E019).
