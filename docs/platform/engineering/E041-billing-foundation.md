E041 Billing Foundation

Status

COMPLETED

---

Purpose

The Billing Foundation provides the commercial billing infrastructure for Eraxis.

It establishes the platform architecture required for:

• Billing Plans
• Billing Accounts
• Plan Assignment
• Future Trial Management
• Future Subscription Management
• Future License Management
• Future Payment Gateway Integration

The Billing Foundation intentionally does not process payments.

Its responsibility is to define and manage commercial plans and account relationships used throughout the Eraxis platform.

---

Objectives

• Centralize billing plan management
• Decouple commercial plans from business modules
• Support future custom pricing
• Support future enterprise contracts
• Support future free trials
• Support future licensing
• Provide a reusable billing runtime

---

Delivered Features

E041-01 Billing Plan Type

Status: Complete

Implemented:

• Billing Plan Contract
• Plan Metadata Structure
• Runtime Plan Definition

Purpose:

Defines the structure used by all billing plans across Eraxis.

---

E041-02 Billing Account Type

Status: Complete

Implemented:

• Billing Account Contract
• Tenant Billing Ownership
• Account Status Foundation

Purpose:

Represents the billing relationship between a tenant and Eraxis.

---

E041-03 Billing Registry

Status: Complete

Implemented:

• Billing Plan Registry
• Registry Driven Architecture
• Plan Registration Foundation

Purpose:

Provides centralized registration of billing plans.

---

E041-04 Billing Service

Status: Complete

Implemented:

• Plan Retrieval Service
• Billing Runtime Service

Purpose:

Acts as the billing access layer for the platform.

---

E041-05 Billing Context

Status: Complete

Implemented:

• React Billing Context

Purpose:

Provides billing data throughout the application.

---

E041-06 Billing Provider

Status: Complete

Implemented:

• Billing Provider
• Runtime Injection

Purpose:

Loads billing data into the React application.

---

E041-07 Billing Hook

Status: Complete

Implemented:

• useBilling()

Purpose:

Provides access to billing information inside UI components.

---

E041-08 Billing Runtime

Status: Complete

Implemented:

• Billing Runtime Initialization
• Runtime Billing Availability

Purpose:

Ensures billing data is available throughout Eraxis.

---

E041-09 Billing Settings Integration

Status: Complete

Implemented:

• Billing Settings Page
• Settings Registration
• Billing Administration Entry

Purpose:

Provides a management location for billing configuration.

---

E041-10 Billing Navigation Integration

Status: Complete

Implemented:

• Navigation Registration
• Administration Navigation Group
• Route Registration

Purpose:

Provides access to billing management screens.

---

Architecture

Billing follows the standard Eraxis runtime architecture.

Billing Registry

↓

Billing Service

↓

Billing Provider

↓

Billing Context

↓

useBilling()

↓

UI Components

---

Current Runtime Capabilities

• Billing Plan Registration
• Billing Plan Retrieval
• Billing Context
• Billing Provider
• Billing Navigation
• Billing Settings Integration

---

Future Commercial Support

The Billing Foundation is designed to support:

Billing Plans

Examples:

• Starter
• Professional
• Enterprise
• Fleet
• Commerce
• HRMS

Pricing Models

Examples:

• Monthly
• Yearly
• Lifetime
• Contract Based
• Custom Pricing

Sales Managed Accounts

Examples:

• Demo Customer
• Trial Customer
• VIP Customer
• Internal Customer
• Partner Customer

Future Payment Providers

Examples:

• Razorpay
• Stripe
• PayPal
• Manual Invoice
• Bank Transfer

---

V2 Backlog

Planned for future modules:

• Subscription Runtime
• Trial Engine
• License Engine
• Invoice Engine
• Coupon Engine
• Tax Engine
• Renewal Engine
• Usage Based Billing
• Payment Gateway Runtime

---

Technical Debt

None

---

Result

Eraxis now contains a complete Billing Foundation capable of supporting future subscription, licensing, invoicing, and payment modules while remaining independent from payment gateway implementations.

Status:

E041 Billing Foundation

COMPLETE

---

Related Modules

Parent Module:

M007 Commercial Engine

Future Dependencies:

• E042 Subscription Engine
• E043 License Engine

Release Version:

Eraxis Commercial Engine Foundation
