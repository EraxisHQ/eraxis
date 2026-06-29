import type {
  RuntimeModule,
} from "../../runtime/types/runtime-module";

export type Plugin = {
  id: string;

  applicationCode: string;

  code: string;

  name: string;

  route: string;

  enabled: boolean;

  dependencies?: string[];

  manifest?: unknown;
  modules?: RuntimeModule[];
};
