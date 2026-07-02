import { brandService } from "./brand-service";
import { refreshBrands } from "./brand-store";

export async function deleteBrand(
  id: string,
) {
  await brandService.delete(id);

  await refreshBrands();
}
