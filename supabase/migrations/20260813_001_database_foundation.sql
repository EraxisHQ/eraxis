-- =====================================
-- Eraxis
-- P000-01 Database Foundation
-- =====================================

create table tenants (
  id uuid primary key default gen_random_uuid(),
  code text unique not null,
  name text not null,
  status text not null default 'active',
  created_at timestamptz default now()
);

create table branches (
  id uuid primary key default gen_random_uuid(),
  tenant_id uuid not null references tenants(id),
  code text not null,
  name text not null,
  active boolean default true,
  created_at timestamptz default now()
);

create table users (
  id uuid primary key default gen_random_uuid(),
  tenant_id uuid not null references tenants(id),
  first_name text not null,
  last_name text not null,
  email text unique not null,
  active boolean default true,
  created_at timestamptz default now()
);

create table roles (
  id uuid primary key default gen_random_uuid(),
  code text unique not null,
  name text not null,
  created_at timestamptz default now()
);

create table permissions (
  id uuid primary key default gen_random_uuid(),
  code text unique not null,
  name text not null,
  created_at timestamptz default now()
);

create table user_roles (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references users(id),
  role_id uuid not null references roles(id)
);

create table role_permissions (
  id uuid primary key default gen_random_uuid(),
  role_id uuid not null references roles(id),
  permission_id uuid not null references permissions(id)
);

insert into roles(code,name)
values
('super_admin','Super Admin'),
('tenant_admin','Tenant Admin'),
('manager','Manager'),
('employee','Employee'),
('viewer','Viewer');

insert into permissions(code,name)
values
('dashboard:view','Dashboard View'),
('applications:view','Applications View'),
('administration:view','Administration View'),
('settings:view','Settings View');