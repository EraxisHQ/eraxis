import { registerSubmitHandler } from "../services/form-submit-registry";
import { productService } from "../../products/services/product-service";
import type { Product } from "../../products/types/product";
import {
  getEditingId,
  clearForm,
} from "../services/form-session-service";

registerSubmitHandler(
  "product",
  async (values) => {
    const editingId =
  getEditingId();

const id =
  editingId ??
  crypto.randomUUID();

    const product: Product = {
      id,
      sku: String(values.sku),
      name: String(values.name),
      description: String(values.description ?? ""),
      categoryId: String(values.category ?? ""),
      brandId: "",
      price: Number(values.price ?? 0),
      active: Boolean(values.active),
      isGstRegistered: Boolean(
        values.isGstRegistered,
      ),
      gstNumber: String(
        values.gstNumber ?? "",
      ),
      warrantyMonths: Number(
        values.warrantyMonths ?? 0,
      ),
      variantIds: [],
    };

console.log("Editing ID:", editingId);
console.log("Product:", product);

if (editingId) {
  console.log("UPDATE");

  await productService.update(id, product);

  console.log("UPDATE SUCCESS");

  clearForm();
} else {
  console.log("CREATE");

  await productService.create(product);

  console.log("CREATE SUCCESS");

  clearForm();
}


  },
);
