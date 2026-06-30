export type RuntimeCommand = {
  id: string;
  title: string;
  action: () => void;
};
