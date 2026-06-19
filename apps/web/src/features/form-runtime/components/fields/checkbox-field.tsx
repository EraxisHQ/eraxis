interface Props {
  field: any;
  value: unknown;
  onChange: (fieldId: string, value: unknown) => void;
}

export function CheckboxField({ field, value, onChange }: Props) {
  return (
    <input
      type="checkbox"
      checked={Boolean(value)}
      onChange={(event) => onChange(field.id, event.target.checked)}
    />
  );
}
