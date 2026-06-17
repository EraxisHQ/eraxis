-- =====================================
-- Eraxis Commerce
-- Invoices RLS
--
-- Milestone:
-- M003-16-02
-- =====================================

alter table invoices
enable row level security;

create policy
"authenticated users can manage invoices"
on invoices
for all
to authenticated
using (true)
with check (true);
