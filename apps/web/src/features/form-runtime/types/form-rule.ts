export interface FormRule {
  when: {
    field: string;
    equals: unknown;
  };

  then: {
    action: "show" | "hide" | "enable" | "disable" | "setValue";

    target: string;

    value?: unknown;
  };
}
