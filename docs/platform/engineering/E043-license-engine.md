E043 License Engine

Status

COMPLETED

---

Purpose

The License Engine provides entitlement and access control management for Eraxis.

It determines what a tenant is allowed to use regardless of billing plan or subscription status.

The License Engine acts as the central authority for:

• User Limits
• Location Limits
• Brand Limits
• Branch Limits
• Storage Limits
• Application Access
• Plugin Access

This architecture allows Eraxis to support flexible commercial offerings while maintaining a single entitlement model across all applications.

---

Objectives

• Centralize tenant entitlements
• Support dynamic commercial models
• Decouple licensing from billing
• Decouple licensing from subscriptions
• Enable application-level licensing
• Enable plugin-level licensing
• Prepare for future enforcement runtime

---

Delivered Features

E043-01 License Type

Status: Complete

Implemented:

• License Contract
• Tenant License Model
• License Metadata Structure

Purpose:

Provides a standardized license structure for all tenants.

---

E043-02 License Status

Status: Complete

Implemented:

• Active
• Expired
• Suspended
• Cancelled

Purpose:

Provides standardized license lifecycle states.

---

E043-03 License Registry

Status: Complete

Implemented:

• License Registry
• Registry Driven Architecture
• License Registration Foundation

Purpose:

Provides centralized registration of tenant licenses.

---

E043-04 License Service

Status: Complete

Implemented:

• License Retrieval Service
• Runtime License Service

Purpose:

Acts as the license access layer for the platform.

---

E043-05 License Context

Status: Complete

Implemented:

• React License Context

Purpose:

Provides license data throughout the application.

---

E043-06 License Provider

Status: Complete

Implemented:

• License Provider
• Runtime Injection

Purpose:

Loads license data into the application runtime.

---

E043-07 License Hook

Status: Complete

Implemented:

• useLicense()

Purpose:

Provides access to license information inside UI components.

---

E043-08 License Entitlements

Status: Complete

Implemented:

• License Entitlement Contract
• User Limits
• Location Limits
• Brand Limits
• Branch Limits
• Storage Limits
• Application Entitlements
• Plugin Entitlements

Purpose:

Provides a unified entitlement model capable of supporting all future Eraxis applications and plugins.

---

E043-09 License Settings Integration

Status: Complete

Implemented:

• License Settings Page
• Navigation Registration
• Route Registration
• Provider Integration

Purpose:

Provides license visibility and management inside Eraxis administration.

---

Architecture

License Registry

↓

License Service

↓

License Provider

↓

License Context

↓

useLicense()

↓

Application Runtime

---

Entitlement Model

Current Supported Controls

• Maximum Users
• Maximum Locations
• Maximum Brands
• Maximum Branches
• Storage Limits
• Enabled Applications
• Enabled Plugins

---

Current Runtime Capabilities

• License Registration
• License Retrieval
• License Context
• License Provider
• Entitlement Management
• Application Licensing
• Plugin Licensing
• Settings Integration

---

Example License Structure

{
id: "license-001",

tenantId: "tenant-001",

subscriptionId: "sub-001",

status: "active",

entitlement: {
maxUsers: 25,

    maxLocations: 5,

    maxBrands: 2,

    maxBranches: 10,

    storageLimitGb: 50,

    enabledApplications: [
      "COMMERCE"
    ],

    enabledPlugins: [
      "inventory",
      "sales"
    ]

},

active: true
}

---

Future Licensing Support

Tenant Limits

• User Limits
• Branch Limits
• Location Limits
• Brand Limits
• Storage Limits
• API Usage Limits

Application Licensing

• Commerce
• Fleet Management
• HRMS
• CRM
• School ERP
• Hospital ERP
• Manufacturing

Plugin Licensing

• Inventory
• Sales
• Procurement
• Workshop
• Payroll
• Attendance
• Analytics
• AI Services

---

V2 Backlog

Planned Future Enhancements

• License Enforcement Engine
• Runtime Access Validation
• Usage Metering
• Overage Management
• License Audit Trail
• License History
• Automated License Upgrade
• Automated License Downgrade
• License Expiry Engine
• License Notification Engine

---

Technical Debt

Open Items

None

---

Result

Eraxis now contains a complete License Engine capable of controlling tenant access, usage limits, application entitlements, and plugin entitlements through a centralized licensing architecture.

Status: E043 License Engine COMPLETE

---

Related Modules

Parent Module

M007 Commercial Engine

Dependencies

• E041 Billing Foundation
• E042 Subscription Engine

Release

Eraxis Commercial Engine Foundation
