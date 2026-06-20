import type { FormOptionsProvider } from "../types/form-options-provider";

const providers = new Map<string, FormOptionsProvider>();

export function registerOptionsProvider(
  id: string,
  provider: FormOptionsProvider,
) {
  providers.set(id, provider);
}

export function getOptionsProvider(id: string) {
  return providers.get(id);
}
