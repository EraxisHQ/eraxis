import { TextField } from "./text-field";
import { SelectField } from "./select-field";
import { CheckboxField } from "./checkbox-field";

interface Props {
  field: any;
  value: unknown;
  onChange: (fieldId: string, value: unknown) => void;
}

export function FieldRenderer({ field, value, onChange }: Props) {
  switch (field.type) {
    case "select":
      return <SelectField field={field} value={value} onChange={onChange} />;

    case "checkbox":
      return <CheckboxField field={field} value={value} onChange={onChange} />;

    default:
      return <TextField field={field} value={value} onChange={onChange} />;
  }
}
