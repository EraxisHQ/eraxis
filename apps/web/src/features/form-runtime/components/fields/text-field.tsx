interface Props {
  field: any;
  value: unknown;
  onChange: (fieldId: string, value: unknown) => void;
  disabled?: boolean;
}

export function TextField({ field, value, onChange, disabled }: Props) {
  return (
    <input
      type={field.type}
      value={String(value ?? "")}
      disabled={disabled}
      onChange={(event) => onChange(field.id, event.target.value)}
    />
  );
}
