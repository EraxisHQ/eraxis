interface Props {
  field: any;
  value: unknown;
  onChange: (fieldId: string, value: unknown) => void;
}

export function SelectField({ field, value, onChange }: Props) {
  return (
    <select
      value={String(value ?? "")}
      onChange={(event) => onChange(field.id, event.target.value)}
    >
      <option value="">Select...</option>

      {field.options?.map((option: any) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}
