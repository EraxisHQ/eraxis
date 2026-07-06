# Plugin Architecture

## Goal

Allow new business applications to be installed without modifying Eraxis Core.

---

## Plugin Structure

plugin.json

routes

navigation

permissions

settings

dashboard widgets

commands

search items

---

## Plugin Lifecycle

Install
↓
Register
↓
Load
↓
Activate
↓
Use
↓
Deactivate
↓
Uninstall

---

## Plugin Registration

Every plugin must register:

* Name
* Version
* Routes
* Navigation
* Permissions
* Settings
* Widgets
* Commands

---

## Examples

Inventory Plugin

Registers:

* Inventory Routes
* Inventory Navigation
* Inventory Permissions
* Inventory Widgets

HRMS Plugin

Registers:

* Employee Routes
* Payroll Routes
* Attendance Routes
* HRMS Permissions
