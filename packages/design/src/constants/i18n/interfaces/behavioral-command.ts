export interface BehavioralCommand {
  command: string;
  simpleCommand: string;
  complexCommand: string;
  complexCommandData: string;
  complexCommandConstructor: string;
  complexCommandExecutor: string;
  receiver: string;
  invoker: string;
  invokerSetOnStart: string;
  doSomethingImportant: string;
  simpleExecute: string;
  complexExecute: string;
  workingOn: string;
  alsoWorkingOn: string;
}

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
