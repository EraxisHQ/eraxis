import {
  createProductRepository,
} from "./repository-factory";

export async function
testProductPersistence() {

  const repository =
    createProductRepository();

  await repository.create({

    id:
      "product-001",

    sku:
      "SKU-001",

    name:
      "Test Product",

    active:
      true,

  });

  const products =
    await repository.findAll();

  console.log(
    "Products:",
    products,
  );
}
