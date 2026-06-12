import {
  RoleContext,
} from "../context/role-context";

import {
  DEFAULT_ROLES,
} from "../constants/default-roles";

type Props = {
  children: React.ReactNode;
};

export function RoleProvider({
  children,
}: Props) {

  return (
    <RoleContext.Provider
      value={DEFAULT_ROLES}
    >
      {children}
    </RoleContext.Provider>
  );
}
