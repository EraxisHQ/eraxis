-- =====================================
-- Eraxis Commerce
-- Products RLS
--
-- Milestone:
-- M003-12
-- =====================================

alter table products
enable row level security;

create policy
"authenticated users can manage products"
on products
for all
to authenticated
using (true)
with check (true);
