export function capitalize(value: string): string {
  if (!value) return "";

  return value.charAt(0).toUpperCase() + value.slice(1);
}

export function fullName(
  firstName: string,
  lastName: string
): string {
  return `${firstName} ${lastName}`.trim();
}