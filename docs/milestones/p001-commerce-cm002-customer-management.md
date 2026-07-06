# Eraxis Git Decision Record

## Decision ID
GIT-001

## Date
2026-07-02

---

# Background

Initially, development began on:

Branch:
cm001-product-catalog

During implementation, both Product Catalog (CM001) and Customer Management (CM002) were completed before the first merge.

This happened because the project architecture was still stabilizing and multiple foundational improvements were made together.

Rewriting Git history at this stage (rebase/cherry-pick) would add unnecessary complexity and risk.

---

# Decision

The existing branch will be treated as containing:

• CM001 Product Catalog
• CM002 Customer Management

Both milestones will be merged together into the P001 Commerce branch.

Git history will NOT be rewritten.

---

# Merge Process

Current Branch

cm001-product-catalog

↓

Merge into

p001-commerce

↓

Create milestone tags

p001-cm001
p001-cm002

↓

Delete feature branch

↓

Create next milestone branch

cm006-supplier-management

---

# Reason

Advantages

• Preserves tested history
• No cherry-pick
• No rebase
• No conflict risk
• Simpler audit trail
• Faster development

Disadvantages

• CM002 work physically exists inside the CM001 branch history.

This is accepted because it occurred during platform stabilization.

Future milestones will strictly follow the official workflow.

---

# Official Workflow (From Now On)

For every milestone:

1. Create milestone branch

Example

cm006-supplier-management

2. Development

Build
Test
Documentation

3. Commit

4. Push

5. Merge into project branch

p001-commerce

6. Create Git Tag

Example

p001-cm006

7. Delete milestone branch

8. Create next milestone branch

---

# Branch Hierarchy

main
│
develop
│
p000-platform
│
p001-commerce
│
├── cm001-product-catalog
├── cm002-customer-management
├── cm006-supplier-management
├── cm007-purchase-management
├── cm005-inventory-management
├── cm003-sales-management
├── cm004-invoice-management
├── cm009-commerce-dashboard
├── cm008-commerce-reports
└── cm010-commerce-settings

---

# Tag Strategy

Every completed milestone

Tag

p001-cm001

p001-cm002

p001-cm006

...

Every completed project

Release

v1.11.0

Commerce Foundation

---

# Future Rule

No future milestone may begin before

• Merge completed
• Documentation completed
• Tag created
• Branch deleted

This keeps project history clean and milestones independently traceable.

---

Status

Approved

Effective From

CM006 Supplier Management