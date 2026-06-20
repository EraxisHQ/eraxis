interface Props {
  field: any;
  value: unknown;
  onChange: (fieldId: string, value: unknown) => void;
  disabled?: boolean;
}

export function CheckboxField({ field, value, onChange, disabled }: Props) {
  return (
    <input
      type="checkbox"
      checked={Boolean(value)}
      disabled={disabled}
      onChange={(event) => onChange(field.id, event.target.checked)}
    />
  );
}
