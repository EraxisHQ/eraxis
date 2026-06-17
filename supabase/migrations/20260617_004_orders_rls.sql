-- =====================================
-- Eraxis Commerce
-- Orders RLS
--
-- Milestone:
-- M003-15-02
-- =====================================

alter table orders
enable row level security;

create policy
"authenticated users can manage orders"
on orders
for all
to authenticated
using (true)
with check (true);
