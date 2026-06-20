import { useEffect, useState } from "react";

import { getOptionsProvider } from "../../services/form-options-registry";

interface Props {
  field: any;
  value: unknown;
  onChange: (fieldId: string, value: unknown) => void;
  disabled?: boolean;
}

export function SelectField({ field, value, onChange, disabled }: Props) {
  const [options, setOptions] = useState(field.options ?? []);

  useEffect(() => {
    async function loadOptions() {
      if (!field.optionsProvider) {
        return;
      }

      const provider = getOptionsProvider(field.optionsProvider);

      if (!provider) {
        return;
      }

      const result = await provider();

      setOptions(result);
    }

    loadOptions();
  }, [field]);

  return (
    <select
      value={String(value ?? "")}
      disabled={disabled}
      onChange={(event) => onChange(field.id, event.target.value)}
    >
      <option value="">Select...</option>

      {options.map((option: any) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}
