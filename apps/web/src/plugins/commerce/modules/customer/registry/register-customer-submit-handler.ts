import {
  registerSubmitHandler,
} from "../../../../../features/form-runtime/services/form-submit-registry";

import {
  getEditingId,
  clearForm,
} from "../../../../../features/form-runtime/services/form-session-service";

import {
  customerService,
} from "../services/customer-service";

import {
  refreshCustomers,
} from "../services/customer-store";

registerSubmitHandler(
  "customer",
  async (values) => {
    const editingId = getEditingId();

    if (editingId) {
      await customerService.update(editingId, {
        id: editingId,
        code: String(values.code),
        name: String(values.name),
        mobile: String(values.mobile),
        email: String(values.email ?? ""),
        address: String(values.address ?? ""),
        gstNumber: String(values.gstNumber ?? ""),
        active: Boolean(values.active),
      });
    } else {
      await customerService.create({
        id: crypto.randomUUID(),
        code: String(values.code),
        name: String(values.name),
        mobile: String(values.mobile),
        email: String(values.email ?? ""),
        address: String(values.address ?? ""),
        gstNumber: String(values.gstNumber ?? ""),
        active: Boolean(values.active),
      });
    }

    await refreshCustomers();

    clearForm();
  },
);
