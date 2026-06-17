-- =====================================
-- Eraxis Commerce
-- Customers RLS
--
-- Milestone:
-- M003-14-02
-- =====================================

alter table customers
enable row level security;

create policy
"authenticated users can manage customers"
on customers
for all
to authenticated
using (true)
with check (true);
