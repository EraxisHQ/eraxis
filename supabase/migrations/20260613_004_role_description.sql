-- =====================================
-- Eraxis
-- P000-02-06 Role Description
-- =====================================

alter table roles
add column if not exists
description text;

update roles
set description =
case code

when 'super_admin'
then 'Full system access'

when 'tenant_admin'
then 'Tenant administration access'

when 'manager'
then 'Management access'

when 'employee'
then 'Employee access'

when 'viewer'
then 'Read only access'

else 'Role access'
end;
