Table:
products

Columns:

id            TEXT PRIMARY KEY
sku           TEXT NOT NULL
name          TEXT NOT NULL
description   TEXT NULL
category_id   TEXT NULL
brand_id      TEXT NULL
active        BOOLEAN NOT NULL

created_at    TIMESTAMP
updated_at    TIMESTAMP
