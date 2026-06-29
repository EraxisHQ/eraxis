import {
  commercePlugin,
} from "../../../plugins/commerce";

export function bootstrapModules() {
  for (const module of commercePlugin.modules ?? []) {
    module.bootstrap();
  }
}
