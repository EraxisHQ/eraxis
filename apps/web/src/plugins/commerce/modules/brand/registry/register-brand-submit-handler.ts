import {
  registerSubmitHandler,
} from "../../../../../features/form-runtime/services/form-submit-registry";

import {
  getEditingId,
  clearForm,
} from "../../../../../features/form-runtime/services/form-session-service";

import {
  brandService,
} from "../services/brand-service";

import {
  refreshBrands,
} from "../services/brand-store";

registerSubmitHandler(
  "brand",
  async (values) => {
    const editingId =
      getEditingId();

    if (editingId) {
      await brandService.update(
        editingId,
        {
          id: editingId,
          code: String(values.code),
          name: String(values.name),
          description: String(values.description ?? ""),
          active: Boolean(values.active),
        },
      );
    } else {
      await brandService.create({
        id: crypto.randomUUID(),
        code: String(values.code),
        name: String(values.name),
        description: String(values.description ?? ""),
        active: Boolean(values.active),
      });
    }

    await refreshBrands();

    clearForm();
  },
);
