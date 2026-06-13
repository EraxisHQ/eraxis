-- =====================================
-- Eraxis
-- Permission Description
-- =====================================

alter table permissions
add column if not exists
description text;

update permissions
set description =
case code

when 'users.read'
then 'View users'

when 'users.create'
then 'Create users'

else 'Permission access'
end;

====================================

update permissions
set description =
case code

when 'dashboard:view'
then 'View dashboard'

when 'applications:view'
then 'View applications'

when 'administration:view'
then 'Access administration'

when 'settings:view'
then 'Access settings'

else description

end;