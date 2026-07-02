import {
  registerSubmitHandler,
} from "../../../../../features/form-runtime/services/form-submit-registry";

import {
  getEditingId,
  clearForm,
} from "../../../../../features/form-runtime/services/form-session-service";

import {
  supplierService,
} from "../services/supplier-service";

import {
  refreshSuppliers,
} from "../services/supplier-store";

registerSubmitHandler(
  "supplier",
  async (values) => {
    const editingId = getEditingId();

    if (editingId) {
      await supplierService.update(editingId, {
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
      await supplierService.create({
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

    await refreshSuppliers();
    clearForm();
  },
);
