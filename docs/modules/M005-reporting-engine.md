M005 - Reporting Engine

Status

Complete

Purpose

The Reporting Engine provides a generic framework for defining, rendering, filtering, exporting, and printing reports across all Eraxis plugins.

The engine is metadata-driven and allows reports to be created without developing dedicated pages for each report.

---

Architecture

Report Definition
       ↓
Report Registry
       ↓
Report Loader
       ↓
Data Source
       ↓
Report Runtime
       ↓
Filters / Actions
       ↓
Export & Print

---

Folder Structure

apps/web/src/features/report-runtime/

components/
├── report-page.tsx
├── report-table.tsx
├── report-filters.tsx
└── report-actions.tsx

registry/
├── report-registry.ts
└── register-reports.ts

reports/
└── product-report.ts

services/
├── report-data-source.ts
├── report-export-service.ts
├── report-excel-service.ts
├── report-pdf-service.ts
├── report-print-service.ts
└── report-txt-service.ts

types/
├── report-definition.ts
├── report-column.ts
├── report-filter.ts
└── report-action.ts

---

Core Concepts

ReportDefinition

Defines a report.

Example:

{
  id: "products",
  title: "Products",
  columns: [],
  filters: [],
  actions: []
}

Responsibilities:

• Report metadata
• Columns
• Filters
• Actions

---

Report Registry

Central storage for all reports.

Responsibilities:

• Register reports
• Fetch report by id
• Enumerate reports

---

Report Loader

Loads report metadata from registry.

Responsibilities:

• Runtime report discovery
• Dynamic report rendering

---

Data Source Layer

Provides report data.

Current implementation:

• Mock data source

Future:

• API integration
• Database integration
• Plugin-specific providers

---

Filters

Supported:

• Checkbox
• Select

Future:

• Date Range
• Text Search
• Multi Select
• Numeric Range

---

Actions

Supported:

• Refresh
• Export CSV
• Export Excel
• Export TXT
• Export PDF
• Print

Future:

• Email Report
• Schedule Report
• Share Report

---

Export Engine

Supported Formats:

Format| Status
CSV| Complete
Excel| Complete
TXT| Complete
PDF| Complete
Print| Complete

---

Current Test Report

Products Report

Columns:

• Name
• SKU
• Price

Filters:

• Active
• Category

Actions:

• Refresh
• Export CSV
• Export Excel
• Export TXT
• Export PDF
• Print

---

Future Enhancements

Phase 2

• Server-side reports
• Pagination
• Sorting
• Aggregation
• Charts
• Dashboard widgets

Phase 3

• Scheduled reports
• Email delivery
• Background generation
• Large dataset support

---

Dependencies

Internal:

• React
• TypeScript

External:

• Browser File APIs
• Window Print APIs

---

Milestone Completion

M005-01 Report Definition System
M005-02 Report Registry
M005-03 Data Source Runtime
M005-04 Dynamic Report Rendering
M005-05 Filter Framework
M005-06 CSV Export
M005-07 Actions Framework
M005-08 Excel Export
M005-09 Print Support
M005-10 PDF/TXT Export

Status: COMPLETE
