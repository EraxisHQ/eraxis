import type {
  RuntimeCommand,
} from "../types/runtime-command";

const COMMANDS: RuntimeCommand[] = [];

export function registerCommand(
  command: RuntimeCommand,
) {
  COMMANDS.push(command);
}

export function getCommands() {
  return COMMANDS;
}
