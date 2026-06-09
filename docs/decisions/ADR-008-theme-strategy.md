# ADR-008 Theme Strategy

Status:
Accepted

Decision

Use token-based theming.

Themes modify CSS variables.

Components must never hardcode colors.

Reason

Allows:
- Light Theme
- Dark Theme
- Future Tenant Branding

Consequences

Positive:
- Easy theme expansion
- Consistent styling

Negative:
- Requires discipline in component styling