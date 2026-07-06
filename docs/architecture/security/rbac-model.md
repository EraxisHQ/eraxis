# Eraxis RBAC Model

users
↓
user_roles
↓
roles
↓
role_permissions
↓
permissions

Rules

- Users never receive permissions directly.
- Users receive roles.
- Roles receive permissions.
- Plugins must use roles and permissions.
- Core owns RBAC.

Current Roles

- super_admin
- tenant_admin
- manager
- employee
- viewer

Current Permissions

- dashboard:view
- applications:view
- administration:view
- settings:view


## Development Policies

Development environment requires:

- user_roles SELECT policy
- role_permissions SELECT policy

Production policies will be tenant-aware and role-aware.