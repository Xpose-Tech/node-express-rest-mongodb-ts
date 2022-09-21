import Emmiter from 'events';
import { EVENT_NAME } from '../constants/event-name.contants';

export abstract class EventHandlerBase {
  protected event: Emmiter;

  constructor() {
    this.event = new Emmiter();
  }
  abstract listen(eventName: EVENT_NAME): void;

  abstract emit(data?: any, eventName?: EVENT_NAME): void;
}
