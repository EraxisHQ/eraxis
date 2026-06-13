-- =====================================
-- Eraxis
-- RBAC Seed Data
-- =====================================

insert into user_roles (
  user_id,
  role_id
)
values (
  '1ed545eb-65ac-43bf-9d95-21871e3df2d9',
  '55ef5c95-8c60-43bf-857e-d079dc9298fe'
);

insert into role_permissions (
  role_id,
  permission_id
)
values
(
  '55ef5c95-8c60-43bf-857e-d079dc9298fe',
  '82943345-3acc-4bcc-b5e1-42ff3fa5d50d'
),
(
  '55ef5c95-8c60-43bf-857e-d079dc9298fe',
  '85924bb4-8fa9-4109-bb77-82902d6bfc03'
),
(
  '55ef5c95-8c60-43bf-857e-d079dc9298fe',
  '066d09dc-29a8-47f7-b70b-1758c2a58304'
),
(
  '55ef5c95-8c60-43bf-857e-d079dc9298fe',
  '1fe39bd4-d41c-4fa2-b944-6f7f976043b5'
);

