import type { FormRule } from "../types/form-rule";

export function getSetValueActions(rules: FormRule[]) {
  return rules.filter((rule) => rule.then.action === "setValue");
}
