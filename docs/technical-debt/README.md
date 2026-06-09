# Eraxis Technical Debt Policy

Purpose:

Track all temporary implementations, shortcuts, mock data, hardcoded values, incomplete architecture, and deferred improvements.

Rules:

1. Every temporary implementation must receive a TD number.
2. Every TD item must have:

   * Reason
   * Future Fix
   * Status
   * Priority
3. Closed items are moved to CLOSED_ITEMS.md.
4. No production release can occur with Critical TD items open.
5. Every milestone review must check Technical Debt.
