import { TListener } from "../types/BlockTypes";

export class EventBus {
  listeners: Record<string, TListener[]>;

  constructor() {
    this.listeners = {};
  }

  // метод для подписки на событие
  on(event: string, callback: TListener) {
    if (!this.listeners[event]) this.listeners[event] = [];
    this.listeners[event].push(callback);
  }

  // метод для отписки на событие
  off(event: string, callback: TListener) {
    if (!this.listeners[event]) throw new Error(`Такого события нет - ${event}`);
    this.listeners[event] = this.listeners[event].filter((listener: TListener) => listener !== callback);
  }

  // метод для оповещения подписчиков
  emit(event: string, ...args: TListener[]) {
    if (!this.listeners[event]) throw new Error(`Такого события нет - ${event}`);
    this.listeners[event].forEach(function (listener: TListener) { listener(...args); });
  }
}
