import {
  publishEvent,
} from "../../infrastructure/services/event-publisher-service";

export function
publishOrderStatusChanged(
  orderId: string,
  status: string
) {

  publishEvent({
    id:
      crypto.randomUUID(),

    type:
      "ORDER_STATUS_CHANGED",

    timestamp:
      new Date()
        .toISOString(),

    payload: {
      orderId,
      status,
    },
  });
}