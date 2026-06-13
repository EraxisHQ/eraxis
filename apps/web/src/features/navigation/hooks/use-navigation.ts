// import {
//   NAVIGATION_ITEMS,
// } from "../config/navigation.config";

// /**
//  * Navigation Hook
//  */

// export function useNavigation() {
//   return NAVIGATION_ITEMS;
// }


import {
  NAVIGATION_ITEMS,
} from "../config/navigation.config";

import {
  usePermission,
} from "../../auth";

export function useNavigation() {

  const {
    can,
  } = usePermission();

  return NAVIGATION_ITEMS.filter(
    (item) => {

      if (
        !item.permission
      ) {
        return true;
      }

      return can(
        item.permission
      );
    }
  );
}