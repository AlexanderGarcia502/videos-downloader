import { NotifyProps, Observer } from "../interfaces";

export class ConcreteObserver implements Observer {
  action: ({ type, value }: NotifyProps) => void;

  constructor(action: ({type, value}: NotifyProps) => void) {
    this.action = action;
  }

  public update({ type, value }: NotifyProps): void {
    this.action({ type, value });
  }
}
