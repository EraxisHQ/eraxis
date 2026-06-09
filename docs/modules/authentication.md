# Authentication Module

## Purpose

Provides authentication services for the Eraxis platform.

The module is responsible for identifying users and creating authenticated sessions.

---

## Features

Implemented:

* Email Login
* Password Login
* Logout
* Session Detection
* Session Persistence

Planned:

* Forgot Password
* Multi-Factor Authentication
* Social Login
* Single Sign-On (SSO)

---

## Dependencies

* Supabase Authentication
* Auth Context
* Session Management

---

## Architecture

User

↓

Login Page

↓

Auth Service

↓

Supabase Authentication

↓

Session Created

↓

Protected Routes

---

## Public Components

### Auth Service

Responsibilities:

* Login
* Logout
* Session Retrieval

Location:

apps/web/src/features/auth/services

---

### Auth Context

Responsibilities:

* Store current user
* Store authentication state
* Share authentication information

Location:

apps/web/src/features/auth/context

---

### Auth Hook

Responsibilities:

* Access authentication state

Location:

apps/web/src/features/auth/hooks

---

## Technical Debt

* TD-001
* TD-003

---

## Future Improvements

* Tenant Support
* Branch Support
* RBAC Integration
* Permission Loading
* Login Audit Trail
