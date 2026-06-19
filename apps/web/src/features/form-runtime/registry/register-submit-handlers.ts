import { registerSubmitHandler } from "../services/form-submit-registry";

registerSubmitHandler("product", async (values) => {
  console.log("PRODUCT SUBMITTED", values);
});
