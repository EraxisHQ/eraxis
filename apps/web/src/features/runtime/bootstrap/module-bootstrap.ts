import {
  commercePlugin,
} from "../../../plugins/commerce";

type RuntimeModule = {
  bootstrap: () => void;
};

export function bootstrapModules() {
  for (const module of (commercePlugin.modules ?? []) as RuntimeModule[]) {
    module.bootstrap();
  }
}
