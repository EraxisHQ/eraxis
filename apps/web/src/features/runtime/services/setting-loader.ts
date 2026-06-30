import {
  getSettings,
} from "../settings/setting-registry";

export function loadSettings() {
  return getSettings();
}
