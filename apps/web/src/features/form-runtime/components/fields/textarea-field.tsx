interface Props {
  field: any;
  value: unknown;
  onChange: (fieldId: string, value: unknown) => void;
}

export function TextareaField({ field, value, onChange }: Props) {
  return (
    <textarea
      value={String(value ?? "")}
      onChange={(event) => onChange(field.id, event.target.value)}
    />
  );
}
