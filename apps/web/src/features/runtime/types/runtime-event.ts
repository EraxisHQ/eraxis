export type RuntimeEvent = {
  id: string;
  event: string;
  handler: () => void | Promise<void>;
};
