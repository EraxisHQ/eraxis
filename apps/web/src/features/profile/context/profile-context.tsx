import {
  createContext,
} from "react";

import type {
  Profile,
} from "../types/profile";

export const ProfileContext =
  createContext<
    Profile | undefined
  >(undefined);