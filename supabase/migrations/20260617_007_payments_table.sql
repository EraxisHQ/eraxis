-- =====================================
-- Eraxis Commerce
-- Payments Table
--
-- Milestone:
-- M003-17-01
-- =====================================

create table if not exists payments (

  id text primary key,

  invoice_id text,

  payment_reference text,

  payment_method text not null,

  status text not null,

  amount numeric(12,2)
    not null
    default 0,

  paid_at timestamptz,

  created_at timestamptz
    not null
    default now(),

  updated_at timestamptz
    not null
    default now()
);
