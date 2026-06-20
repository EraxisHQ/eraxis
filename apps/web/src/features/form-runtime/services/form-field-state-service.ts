import type { FormRule } from "../types/form-rule";

export function isFieldDisabled(fieldId: string, activeRules: FormRule[]) {
  return activeRules.some(
    (rule) => rule.then.action === "disable" && rule.then.target === fieldId,
  );
}
