export type RuntimeModule = {
  manifest: unknown;
  bootstrap: () => void;
};
