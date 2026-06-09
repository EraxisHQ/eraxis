# ADR-007 Navigation Strategy

## Status

Accepted

## Context

Eraxis will support multiple plugins.

Navigation must remain consistent regardless of installed modules.

## Decision

Use:

* Fixed Left Sidebar
* Fixed Topbar
* Dynamic Plugin Menus

Plugins will not directly modify layout.

Plugins may only register navigation items.

## Consequences

Positive:

* Consistent user experience
* Easier plugin development
* Predictable navigation

Negative:

* Plugin flexibility reduced

## Future Review

Review after Plugin Registry implementation (E019).
