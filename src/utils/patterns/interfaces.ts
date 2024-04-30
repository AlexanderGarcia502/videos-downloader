export interface NotifyProps {
  type: string;
  value: string ;
}

export interface Observer {
  // Receive update from subject.
  update({ type, value }: NotifyProps): void;
}

export interface Subject {
  // Attach an observer to the subject.
  attach(observer: Observer): void;

  // Detach an observer from the subject.
  detach(observer: Observer): void;

  // Notify all observers about an event.
  notify({ type, value }: NotifyProps): void;
}
