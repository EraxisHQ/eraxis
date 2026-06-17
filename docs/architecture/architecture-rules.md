# Eraxis Architecture Rules

## RULE-ARCH-001

No direct database access from business modules.

Flow:

Commerce Module
→ Service
→ Repository
→ Provider
→ Database

Business modules must never directly use Supabase, PostgreSQL, MySQL, etc.

---

## RULE-ARCH-002

No direct storage access from business modules.

Flow:

Commerce Module
→ Storage Service
→ Storage Provider
→ Storage Backend

Supported future providers:

* Supabase Storage
* AWS S3
* Google Cloud Storage
* Azure Storage
* MinIO
* Custom Eraxis Storage

---

## RULE-ARCH-003

All infrastructure must be replaceable.

Business modules must not depend on:

* Supabase
* AWS
* Render
* Vercel
* Stripe
* Razorpay

Infrastructure implementations must be swappable.

---

## RULE-ARCH-004

Tenant isolation must be configuration-driven.

Support:

* Shared Database
* Shared Storage

Future support:

* Dedicated Database
* Dedicated Storage

No business module changes required.

---

## RULE-ARCH-005

Features must be tenant-configurable.

Examples:

* Products
* Orders
* Invoices
* Payments
* Shipping
* Returns
* Suppliers

Each feature may be enabled or disabled per tenant.

---

## RULE-ARCH-006

Localization is mandatory.

No hardcoded UI text.

All user-facing content must use localization keys.

Supported languages:

* English
* Hindi
* Odia
* Additional languages in future

Documents and invoices must support localization.

---

## RULE-ARCH-007

Business modules must not know deployment details.

Commerce modules must not know:

* Supabase
* AWS
* Vercel
* Render
* Docker

Only infrastructure layers may know deployment details.

---

## RULE-ARCH-008

Repository Pattern is mandatory.

All data access must go through repositories.

Examples:

* ProductRepository
* CustomerRepository
* OrderRepository
* InvoiceRepository
* PaymentRepository

---

## RULE-ARCH-009

Provider Pattern is mandatory.

Examples:

* DatabaseProvider
* StorageProvider
* PaymentProvider
* NotificationProvider

Providers must be replaceable.

---

## RULE-ARCH-010

Enterprise customers may use dedicated resources.

Support future:

* Dedicated Database
* Dedicated Storage
* Dedicated Domain
* Dedicated Infrastructure

without rewriting Commerce modules.


## RULE-ARCH-011

Localization Required

All new pages must use:

* useLocalization()
* Translation Keys

Hardcoded UI text is not permitted in new modules.

Supported Languages:

* English
* Hindi
* Odia
* Russian


RULE-ARCH-012

Single Point Of Persistence Access

Business modules must never directly access:

- Supabase
- Postgres
- MySQL
- MongoDB
- AWS
- Local Storage

All persistence operations must flow through:

Feature
  ↓
Repository
  ↓
Persistence Provider

This ensures:

- Backend portability
- Storage portability
- Multi-provider support
- Enterprise deployments
- Dedicated customer storage

## RULE-ARCH-013

No Vendor Lock-In

Supabase-specific code must exist only inside:

features/persistence/providers/supabase

AWS-specific code must exist only inside:

features/persistence/providers/aws

Local-specific code must exist only inside:

features/persistence/providers/local


## RULE-ARCH-014

Business modules must never know:

- Provider Type
- Provider Mode
- Storage Type
- Database Type

Only Persistence Layer may know these details.

