-- =====================================
-- Eraxis Commerce
-- Payments RLS
--
-- Milestone:
-- M003-17-02
-- =====================================

alter table payments
enable row level security;

create policy
"authenticated users can manage payments"
on payments
for all
to authenticated
using (true)
with check (true);
