import { createContext } from "react";

import type { Subscription } from "../types/subscription";

export const SubscriptionContext = createContext<Subscription[]>([]);
