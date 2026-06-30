export type RuntimeJob = {
  id: string;
  name: string;
  execute: () => void | Promise<void>;
};
