import {
  Navigate,
} from "react-router-dom";

import {
  useAuth,
} from "../providers/auth-provider";

import {
  usePermission,
} from "../features/auth";

// type Props = {
//   children:
//     React.ReactNode;
// };

type Props = {
  children:
    React.ReactNode;

  permission?: string;
};

// export default function ProtectedRoute({
//   children,
// }: Props) {
export default function ProtectedRoute({
  children,
  permission,
}: Props) {

  const {
    user,
    loading,
  } = useAuth();

  const {
  can,
} = usePermission();

  if (loading) {
    return (
      <div>
        Loading...
      </div>
    );
  }

  if (!user) {
    return (
      <Navigate
        to="/"
        replace
      />
    );
  }

if (
  permission &&
  !can(permission)
) {
  return (
    <div>
      403 Forbidden
    </div>
  );
}

  return <>{children}</>;
}