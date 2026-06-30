import {
  getCommands,
} from "../commands/command-registry";

export function loadCommands() {
  return getCommands();
}
