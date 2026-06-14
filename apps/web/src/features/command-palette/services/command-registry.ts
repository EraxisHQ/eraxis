import type {
  Command,
} from "../types/command";

class CommandRegistry {

  private items:
    Command[] = [];

  register(
    item: Command
  ) {
    this.items.push(
      item
    );
  }

  getAll() {
    return this.items;
  }
}

export const
  commandRegistry =
    new CommandRegistry();
