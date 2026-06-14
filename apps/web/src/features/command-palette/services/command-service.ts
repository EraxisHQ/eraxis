import {
  commandRegistry,
} from "./command-registry";

export class CommandService {

  getCommands() {

    return commandRegistry
      .getAll();
  }

  getCommandCount() {

    return commandRegistry
      .getAll()
      .length;
  }
}

export const
  commandService =
    new CommandService();
