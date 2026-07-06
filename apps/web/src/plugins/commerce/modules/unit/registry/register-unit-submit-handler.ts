import {
  registerSubmitHandler,
} from "../../../../../features/form-runtime/services/form-submit-registry";

import {
  getEditingId,
  clearForm,
} from "../../../../../features/form-runtime/services/form-session-service";

import {
  unitService,
} from "../services/unit-service";

import {
  refreshUnits,
} from "../services/unit-store";

registerSubmitHandler(
  "unit",
  async (values) => {
    const editingId = getEditingId();

    if (editingId) {
      await unitService.update(editingId, {
        id: editingId,
        code: String(values.code),
        name: String(values.name),
        symbol: String(values.symbol),
        description: String(values.description ?? ""),
        active: Boolean(values.active),
      });
    } else {
      await unitService.create({
        id: crypto.randomUUID(),
        code: String(values.code),
        name: String(values.name),
        symbol: String(values.symbol),
        description: String(values.description ?? ""),
        active: Boolean(values.active),
      });
    }

    await refreshUnits();
    clearForm();
  },
);
