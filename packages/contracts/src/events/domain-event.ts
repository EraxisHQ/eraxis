export interface DomainEvent {
  eventId: string;

  eventName: string;

  occurredOn: string;

  payload: unknown;
}