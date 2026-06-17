-- =====================================
-- Eraxis Commerce
-- Customers Table
--
-- Milestone:
-- M003-14-01
-- =====================================

create table if not exists customers (

  id text primary key,

  name text not null,

  email text,

  phone text,

  active boolean not null
    default true,

  created_at timestamptz
    not null
    default now(),

  updated_at timestamptz
    not null
    default now()
);
