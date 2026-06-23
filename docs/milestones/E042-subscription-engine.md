E042 Subscription Engine

Status

COMPLETED

---

Purpose

The Subscription Engine provides subscription lifecycle management for Eraxis.

It establishes the platform architecture required for:

• Trial Management
• Subscription Assignment
• Subscription Status Tracking
• Subscription Duration Management
• Customer Lifecycle Management
• Future Renewal Management
• Future Offer Management

The Subscription Engine is intentionally decoupled from payment gateways and billing providers.

---

Objectives

• Centralize subscription management
• Support trial subscriptions
• Support demo subscriptions
• Support internal subscriptions
• Support active and expired subscriptions
• Support future offer-driven subscriptions
• Provide a reusable subscription runtime

---

Delivered Features

E042-01 Subscription Type

Status: Complete

Implemented:

• Subscription Contract
• Tenant Subscription Model
• Subscription Metadata Structure

Purpose:

Defines the structure used by all subscriptions within Eraxis.

---

E042-02 Subscription Status Type

Status: Complete

Implemented:

• Trial Status
• Active Status
• Expired Status
• Suspended Status
• Cancelled Status
• Demo Status
• Internal Status

Purpose:

Provides standardized lifecycle states for subscriptions.

---

E042-03 Subscription Registry

Status: Complete

Implemented:

• Subscription Registry
• Registry Driven Architecture
• Subscription Registration Foundation

Purpose:

Provides centralized registration of subscriptions.

---

E042-04 Subscription Service

Status: Complete

Implemented:

• Subscription Retrieval Service
• Runtime Subscription Service

Purpose:

Acts as the subscription access layer for the platform.

---

E042-05 Subscription Context

Status: Complete

Implemented:

• React Subscription Context

Purpose:

Provides subscription data throughout the application.

---

E042-06 Subscription Provider

Status: Complete

Implemented:

• Subscription Provider
• Runtime Injection

Purpose:

Loads subscription data into the React application.

---

E042-07 Subscription Hook

Status: Complete

Implemented:

• useSubscription()

Purpose:

Provides access to subscription information inside UI components.

---

E042-08 Trial Engine Foundation

Status: Complete

Implemented:

• Trial Duration Support
• Duration Based Subscription Model
• Trial Subscription Runtime

Purpose:

Provides the foundation for future trial management.

---

E042-09 Subscription Assignment

Status: Complete

Implemented:

• Tenant Subscription Assignment
• Assignment Tracking
• Assigned By Support

Purpose:

Allows subscriptions to be assigned through administration or sales workflows.

---

E042-10 Subscription Settings Integration

Status: Complete

Implemented:

• Subscription Settings Page
• Settings Registration
• Navigation Integration
• Route Registration

Purpose:

Provides subscription management visibility inside Eraxis administration.

---

Architecture

Subscription Registry

↓

Subscription Service

↓

Subscription Provider

↓

Subscription Context

↓

useSubscription()

↓

UI Components

---

Current Runtime Capabilities

• Subscription Registration
• Subscription Retrieval
• Trial Support Foundation
• Subscription Assignment
• Subscription Context
• Subscription Provider
• Subscription Navigation
• Subscription Settings Integration

---

Supported Subscription States

• Trial
• Active
• Expired
• Suspended
• Cancelled
• Demo
• Internal

---

Future Subscription Support

The Subscription Engine is designed to support:

Subscription Types

• Trial Subscription
• Paid Subscription
• Demo Subscription
• Internal Subscription
• Lifetime Subscription
• Enterprise Subscription

Duration Models

• 15 Day Trial
• 30 Day Trial
• 90 Day Trial
• Annual Subscription
• Multi-Year Subscription
• Lifetime Subscription

Assignment Models

• Sales Assigned
• Admin Assigned
• System Assigned
• Migration Assigned

---

V2 Backlog

Planned for future releases:

• Renewal Engine
• Subscription Expiry Engine
• Automated Suspension
• Automated Activation
• Offer Engine
• Subscription Upgrade Engine
• Subscription Downgrade Engine
• Subscription History
• Subscription Audit Trail

---

Technical Debt

None

---

Result

Eraxis now contains a complete Subscription Engine capable of supporting future trials, customer lifecycle management, subscription assignment, and commercial subscription operations.

Status:

E042 Subscription Engine

COMPLETE

---

Related Modules

Parent Module:

M007 Commercial Engine

Dependencies:

• E041 Billing Foundation

Future Dependencies:

• E043 License Engine

Release Version:

Eraxis Commercial Engine Foundation
