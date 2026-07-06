import {
  registerSubmitHandler,
} from "../../../../../features/form-runtime/services/form-submit-registry";

import {
  getEditingId,
  clearForm,
} from "../../../../../features/form-runtime/services/form-session-service";

import {
  categoryService,
} from "../services/category-service";

import {
  refreshCategories,
} from "../services/category-store";

registerSubmitHandler(
  "category",
  async (values) => {
    const editingId =
      getEditingId();

    if (editingId) {
      await categoryService.update(
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
      await categoryService.create({
        id: crypto.randomUUID(),
        code: String(values.code),
        name: String(values.name),
        description: String(values.description ?? ""),
        active: Boolean(values.active),
      });
    }

    await refreshCategories();

    clearForm();
  },
);