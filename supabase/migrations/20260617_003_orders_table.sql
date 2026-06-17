-- =====================================
-- Eraxis Commerce
-- Orders Table
--
-- Milestone:
-- M003-15-01
-- =====================================

create table if not exists orders (

  id text primary key,

  customer_id text,

  order_number text not null,

  status text not null,

  total_amount numeric(12,2)
    not null
    default 0,

  created_at timestamptz
    not null
    default now(),

  updated_at timestamptz
    not null
    default now()
);
