/**
 * =====================================
 * Eraxis Commerce
 * Module: Orders
 *
 * Purpose:
 * Order lifecycle transitions.
 *
 * Milestone:
 * M002-13-01
 * =====================================
 */

export const
ORDER_STATUS_TRANSITIONS = {

  draft: [
    "confirmed",
  ],

  confirmed: [
    "processing",
  ],

  processing: [
    "shipped",
  ],

  shipped: [
    "completed",
  ],

  completed: [],

  cancelled: [],
} as const;

export function canTransition(
  currentStatus: string,
  nextStatus: string
) {

  const allowed =
    ORDER_STATUS_TRANSITIONS[
      currentStatus as keyof typeof
      ORDER_STATUS_TRANSITIONS
    ];

  return (
    allowed?.includes(
      nextStatus as never
    ) ?? false
  );
}
