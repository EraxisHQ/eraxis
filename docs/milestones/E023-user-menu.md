## E023 User Menu

Status:
IN PROGRESS

### Foundation

[x] User Menu Type

[x] Menu Constants

[x] User Menu Hook

[x] User Menu Component

### Integration

[ ] Topbar Integration

### Navigation

[ ] Profile Navigation

[ ] Settings Navigation

[ ] Logout Placeholder

### Documentation

[ ] Module Documentation

[ ] ADR-020

[ ] Technical Debt Update

### Testing

[ ] User Menu Visible

[ ] Profile Navigation Works

[ ] Settings Navigation Works

[ ] Logout Placeholder Works

### Deliverables

apps/web/src/features/user-menu/

* types/user-menu-item.ts
* constants/user-menu-items.ts
* hooks/use-user-menu.ts
* components/user-menu.tsx
* components/user-menu.css

### Technical Debt

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
