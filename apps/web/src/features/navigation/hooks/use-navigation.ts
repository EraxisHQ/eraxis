import {
  usePermission,
} from "../../auth";

import {
  navigationService,
} from "../services/navigation.service";

export function useNavigation() {

  const {
    can,
  } = usePermission();

  return navigationService
    .getItems()
    .filter(
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