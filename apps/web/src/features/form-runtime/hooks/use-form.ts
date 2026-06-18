import { useState } from "react";

export function useForm() {
  const [values, setValues] = useState<Record<string, unknown>>({});

  const [errors, setErrors] = useState<Record<string, string>>({});

  function updateValue(fieldId: string, value: unknown) {
    setValues((current) => ({
      ...current,
      [fieldId]: value,
    }));
  }

  return {
    values,

    errors,

    setErrors,

    updateValue,
  };
}
