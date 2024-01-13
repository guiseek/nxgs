import { BehavioralObserver } from '../interfaces';

const behavioralObserver: BehavioralObserver = {
  subject: `The Subject interface declares a set of methods for managing subscribers.`,
  subjectSubscribe: `Attach an observer to the subject.`,
  subjectUnsubscribe: `Detach an observer from the subject.`,
  subjectNotify: `Notify all observers about an event.`,
  concreteSubject: `The Subject owns some important state and notifies observers when the state
  * changes.`,
  concreteSubjectState: `For the sake of simplicity, the Subject's state, essential
  * to all subscribers, is stored in this variable.`,
  concreteSubjectObservers: `List of subscribers. In real life, the list of
  * subscribers can be stored more comprehensively (categorized by event
  * type, etc.).`,
  concreteSubjectSubscribe: `The subscription management methods.`,
  concreteSubjectUnsubscribe: ``,
  concreteSubjectNotify: `Trigger an update in each subscriber.`,
  observer: `The Observer interface declares the update method, used by subjects.`,
  observerUpdate: `Receive update from subject.`,
  concreteObserverA: `Observers react to the updates issued by the Subject they had been
  * attached to.`,
  concreteObserverUpdate: `Reacted to the event.`,
  concreteSubjectSomeBusinessLogic: `Usually, the subscription logic is only a fraction of what a Subject can
  * really do. Subjects commonly hold some important business logic, that
  * triggers a notification method whenever something important is about to
  * happen (or after it).`,
};

export default behavioralObserver;
