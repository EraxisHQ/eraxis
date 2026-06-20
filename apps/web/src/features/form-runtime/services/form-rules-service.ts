import type { FormRule } from "../types/form-rule";

export function evaluateRules(
  rules: FormRule[],
  values: Record<string, unknown>,
) {
  return rules.filter((rule) => values[rule.when.field] === rule.when.equals);
}
