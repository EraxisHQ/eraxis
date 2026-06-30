import type {
  RuntimeSetting,
} from "../types/runtime-setting";

const SETTINGS: RuntimeSetting[] = [];

export function registerSetting(
  setting: RuntimeSetting,
) {
  SETTINGS.push(setting);
}

export function getSettings() {
  return SETTINGS;
}
