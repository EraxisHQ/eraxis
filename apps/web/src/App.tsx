/**
 * =====================================
 * Eraxis
 * Module: Application
 *
 * Purpose:
 * Root application component.
 *
 * Technical Debt:
 * - TD-004
 *
 * =====================================
 */

import AppRouter from "./app/router";

import CommandPalette
  from "./features/command-palette/components/command-palette";

  {/* function App() {
  return <AppRouter />;
}*/}

function App() {
  return (
    <>
      <CommandPalette />

      <AppRouter />
    </>
  );
}

export default App;
