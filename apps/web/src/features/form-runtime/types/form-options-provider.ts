import type { FormOption } from "./form-option";

export type FormOptionsProvider = () => Promise<FormOption[]>;
