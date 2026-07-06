interface Props {
  title: string;
  value: number | string;
}

export function KpiCard({
  title,
  value,
}: Props) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "16px",
      }}
    >
      <h3>{title}</h3>

      <h2>{value}</h2>
    </div>
  );
}
