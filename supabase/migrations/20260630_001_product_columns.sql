alter table products
add column if not exists "categoryId" text;

alter table products
add column if not exists "brandId" text;

alter table products
add column if not exists price numeric default 0;

alter table products
add column if not exists "isGstRegistered" boolean default false;

alter table products
add column if not exists "gstNumber" text;

alter table products
add column if not exists "warrantyMonths" integer default 0;

alter table products
add column if not exists "variantIds" jsonb default '[]'::jsonb;
