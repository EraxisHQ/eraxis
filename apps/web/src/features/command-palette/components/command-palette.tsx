import "./command-palette.css";

import {
  useEffect,
  useState,
} from "react";

import {
  useCommandPalette,
} from "../hooks/use-command-palette";

export default function CommandPalette() {

  const commands =
    useCommandPalette();

  const [
    isOpen,
    setIsOpen,
  ] = useState(false);

  useEffect(() => {

    function handleKeyDown(
      event: KeyboardEvent
    ) {

      if (
        event.ctrlKey &&
        event.key === "k"
      ) {

        event.preventDefault();

        setIsOpen(
          (previous) =>
            !previous
        );
      }
    }

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () =>
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );

  }, []);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="command-overlay"
    >

      <div
        className="command-modal"
      >

        <h3>
          Command Palette
        </h3>

        {commands.map(
          (command) => (
            <div
              key={command.id}
            >
              {command.label}
            </div>
          )
        )}

      </div>

    </div>
  );
}
