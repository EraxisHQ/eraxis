-- Development RLS Policies
-- Temporary policies using Supabase Auth.
-- These will be replaced after implementing Eraxis JWT,
-- tenant isolation, RBAC, and custom authentication.


alter table products enable row level security;

create policy "products_select"

on products

for select

to authenticated

using (true);

create policy "products_insert"

on products

for insert

to authenticated

with check (true);


create policy "products_update"

on products

for update

to authenticated

using (true)

with check (true);



create policy "products_delete"

on products

for delete

to authenticated

using (true);

