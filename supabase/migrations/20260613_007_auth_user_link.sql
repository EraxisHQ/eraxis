-- =====================================
-- Eraxis
-- Auth User Link
-- =====================================

alter table users
add column if not exists
auth_user_id uuid;

update users
set auth_user_id =
'7805abcb-8167-4ca8-a795-b1a60864cad0'
where email =
'admin@eraxis.local';
