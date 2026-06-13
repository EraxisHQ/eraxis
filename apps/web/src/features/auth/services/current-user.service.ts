import { supabase }
  from "../../../lib/supabase";

import type {
  AuthUser,
} from "../types/auth-user";

export async function getCurrentUser():
  Promise<AuthUser | null> {

  const {
    data: sessionData,
  } = await supabase.auth.getSession();

  const authUser =
    sessionData.session?.user;

  console.log(
    "Auth User:",
    authUser
  );

  if (!authUser) {
    return null;
  }

  const {
    data,
    error,
  } = await supabase
    .from("users")
    .select("*")
    .eq(
      "auth_user_id",
      authUser.id
    )
    .maybeSingle();

  console.log(
    "User Row:",
    data
  );

  console.log(
    "User Error:",
    error
  );

  if (
    error ||
    !data
  ) {
    return null;
  }

  const {
    data: roleData,
    error: roleError,
  } = await supabase
    .from("user_roles")
    .select("*")
    .eq(
      "user_id",
      data.id
    );

  console.log(
    "Role Data:",
    roleData
  );

  console.log(
    "Role Data:",
    roleData
  );

  console.log(
    "Role Error:",
    roleError
  );

  const roleIds =
  roleData?.map(
    (item: any) =>
      item.role_id
  ) ?? [];

console.log(
  "Role Ids:",
  roleIds
);

const {
  data: rolesTable,
  error: rolesError,
} = await supabase
  .from("roles")
  .select("*")
  .in(
    "id",
    roleIds
  );

console.log(
  "Roles Table:",
  rolesTable
);

console.log(
  "Roles Error:",
  rolesError
);

const roles =
  rolesTable?.map(
    (role: any) =>
      role.code
  ) ?? [];

const {
  data: rolePermissions,
  error: rolePermissionsError,
} = await supabase
  .from("role_permissions")
  .select("*")
  .in(
    "role_id",
    roleIds
  );

  console.log(
  "Role Ids Used:",
  roleIds
);

console.log(
  "Role Permissions:",
  rolePermissions
);

console.log(
  "Role Permissions Error:",
  rolePermissionsError
);
const permissionIds =
  rolePermissions?.map(
    (item: any) =>
      item.permission_id
  ) ?? [];

console.log(
  "Permission Ids:",
  permissionIds
);
const {
  data: permissionsTable,
  error: permissionsError,
} = await supabase
  .from("permissions")
  .select("*")
  .in(
    "id",
    permissionIds
  );

console.log(
  "Permissions Table:",
  permissionsTable
);

console.log(
  "Permissions Error:",
  permissionsError
);
const permissions =
  permissionsTable?.map(
    (permission: any) =>
      permission.code
  ) ?? [];

console.log(
  "Resolved Permissions:",
  permissions
);

console.log(
  "Resolved Roles:",
  roles
);



  return {
    id: data.id,

    authUserId:
      authUser.id,

    email:
      data.email,

    firstName:
      data.first_name,

    lastName:
      data.last_name,

    roles,

    // permissions: [],
    permissions,
  };
}