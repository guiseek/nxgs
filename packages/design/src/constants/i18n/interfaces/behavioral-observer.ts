export interface BehavioralObserver {
  subject: string;
  subjectSubscribe: string;
  subjectUnsubscribe: string;
  subjectNotify: string;

  concreteSubject: string;
  concreteSubjectState: string;
  concreteSubjectObservers: string;
  concreteSubjectSubscribe: string;
  concreteSubjectUnsubscribe: string;
  concreteSubjectNotify: string;
  concreteSubjectSomeBusinessLogic: string;

  observer: string;
  observerUpdate: string;
  concreteObserverA: string;
  concreteObserverUpdate: string;
}
