-- =====================================
-- Eraxis Commerce
-- Invoices Table
--
-- Milestone:
-- M003-16-01
-- =====================================

create table if not exists invoices (

  id text primary key,

  order_id text,

  invoice_number text not null,

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
