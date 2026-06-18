/**
 * =====================================
 * Eraxis Form Runtime
 *
 * Purpose:
 * Submit contract.
 *
 * Milestone:
 * M004-05-01
 * =====================================
 */

export type FormSubmitHandler =
(
  values: Record<string, unknown>
) => Promise<void>;