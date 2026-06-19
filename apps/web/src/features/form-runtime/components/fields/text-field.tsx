interface Props {
  field: any;
  value: unknown;
  onChange: (fieldId: string, value: unknown) => void;
}

export function TextField({ field, value, onChange }: Props) {
  return (
    <input
      type={field.type}
      value={String(value ?? "")}
      onChange={(event) => onChange(field.id, event.target.value)}
    />
  );
}
