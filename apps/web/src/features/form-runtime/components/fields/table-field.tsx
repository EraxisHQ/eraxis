interface Props {
  field: any;
  value?: unknown;
  onChange?: (fieldId: string, value: unknown) => void;
  disabled?: boolean;
}

export function TableField({ field }: Props) {
  return (
    <div
      style={{
        border: "1px solid #d1d5db",
        borderRadius: "8px",
        padding: "12px",
      }}
    >
      <strong>{field.label}</strong>

      <div style={{ marginTop: "8px", color: "#6b7280" }}>
        Table Field (Placeholder)
      </div>
    </div>
  );
}
