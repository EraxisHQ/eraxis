-- =====================================
-- Eraxis
-- P000-02-07 User Seed Data
-- =====================================

insert into users
(
  tenant_id,
  first_name,
  last_name,
  email,
  active
)
select
  id,
  'Eraxis',
  'Admin',
  'admin@eraxis.local',
  true
from tenants
where code = 'ERAXIS';
