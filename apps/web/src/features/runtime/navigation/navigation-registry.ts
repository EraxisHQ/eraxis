import type {
  RuntimeNavigation,
} from "../types/runtime-navigation";

const NAVIGATION: RuntimeNavigation[] = [];

export function registerNavigation(
  navigation: RuntimeNavigation,
) {
  NAVIGATION.push(navigation);
}

export function getNavigation() {
  return NAVIGATION;
}
