-- =====================================
-- Eraxis
-- P000-02 Core Seed Data
-- =====================================

insert into tenants
(
  code,
  name,
  status
)
values
(
  'ERAXIS',
  'Eraxis Platform',
  'active'
);

insert into branches
(
  tenant_id,
  code,
  name,
  active
)
select
  id,
  'HQ',
  'Head Office',
  true
from tenants
where code = 'ERAXIS';

insert into roles
(
  code,
  name
)
values
('super_admin','Super Admin'),
('tenant_admin','Tenant Admin')
on conflict do nothing;
