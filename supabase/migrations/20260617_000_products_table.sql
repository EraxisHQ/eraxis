-- =====================================
-- Eraxis Commerce
-- Products Table
--
-- Milestone:
-- M003-12
-- =====================================

create table if not exists products (

  id text primary key,

  sku text not null,

  name text not null,

  description text,

  active boolean not null
    default true,

  created_at timestamptz
    not null
    default now(),

  updated_at timestamptz
    not null
    default now()
);
