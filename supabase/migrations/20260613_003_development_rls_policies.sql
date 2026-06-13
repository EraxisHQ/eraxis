-- =====================================
-- Eraxis
-- RLS Policies
--
-- Development Policies
--
-- NOTE:
-- Temporary development policies.
-- Production policies will be tenant-aware.
-- =====================================

-- =====================================
-- Eraxis
-- P000-02-04 Development RLS Policies
-- =====================================

create policy "tenant_read_dev"
on tenants
for select
using (true);

create policy "branch_read_dev"
on branches
for select
using (true);

create policy "role_read_dev"
on roles
for select
using (true);

create policy "permission_read_dev"
on permissions
for select
using (true);

-- =====================================
-- Users
-- Read Policy
-- =====================================

create policy "Allow read users"
on public.users
for select
to anon
using (true);

-- =====================================
-- Authenticated Users
-- =====================================

create policy
"Allow authenticated read users"
on public.users
for select
to authenticated
using (true);

-- =====================================
-- RBAC Development Policies
-- =====================================

create policy "Allow authenticated read user_roles"
on public.user_roles
for select
to authenticated
using (true);

create policy "Allow authenticated read role_permissions"
on public.role_permissions
for select
to authenticated
using (true);

--- ===========================================
--- P000-03-04 Permission Resolution
--- =========================================
create policy
"Allow authenticated read role_permissions"
on public.role_permissions
for select
to authenticated
using (true);