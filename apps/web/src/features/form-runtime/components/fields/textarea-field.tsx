interface Props {
  field: any;
  value: unknown;
  onChange: (fieldId: string, value: unknown) => void;
  disabled?: boolean;
}

export function TextareaField({ field, value, onChange, disabled }: Props) {
  return (
    <textarea
      value={String(value ?? "")}
      disabled={disabled}
      onChange={(event) => onChange(field.id, event.target.value)}
    />
  );
}
