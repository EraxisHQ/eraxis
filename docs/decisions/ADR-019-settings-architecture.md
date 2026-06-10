# ADR-019 Settings Architecture

Status:
Accepted

## Context

Eraxis requires a centralized configuration area where users and administrators can manage platform settings.

## Decision

Create a dedicated Settings module containing:

* Appearance
* Localization
* Profile
* Tenant
* System

Each section will be represented as a route.

Examples:

* /settings/appearance
* /settings/localization
* /settings/profile
* /settings/tenant
* /settings/system

## Consequences

Benefits:

* Clear separation of settings concerns
* Easy future expansion
* Consistent navigation structure

Future:

Settings sections will eventually be generated from plugin manifests through the Plugin Registry.
