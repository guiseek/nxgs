import { BehavioralObserver } from '../interfaces';

const behavioralObserver: BehavioralObserver = {
  subject: `A interface Subject declara um conjunto de métodos para gerenciar assinantes.`,
  subjectSubscribe: `Adicione um observador ao assunto.`,
  subjectUnsubscribe: `Remova um observador do assunto.`,
  subjectNotify: `Notifique todos os observadores sobre um evento.`,
  concreteSubject: `O Sujeito possui algum estado importante e notifica os observadores quando o estado
  * muda.`,
  concreteSubjectState: `Por uma questão de simplicidade, o estado do Assunto, essencial
  * para todos os assinantes, é armazenado nesta variável.`,
  concreteSubjectObservers: `Lista de assinantes. Na vida real, a lista de
  * assinantes pode ser armazenada de forma mais abrangente (categorizada por
  * tipo de evento, etc.).`,
  concreteSubjectSubscribe: `Os métodos de gerenciamento de assinaturas.`,
  concreteSubjectUnsubscribe: ``,
  concreteSubjectNotify: `Notifique uma atualização em cada assinante.`,
  observer: `A interface Observer declara o método update, utilizado pelos sujeitos.`,
  observerUpdate: `Receba atualização do assunto.`,
  concreteObserverA: `Os Observadores reagem às atualizações emitidas pelo Assunto ao qual
  * foram anexados.`,
  concreteObserverUpdate: `Reagiu ao evento.`,
  concreteSubjectSomeBusinessLogic: `Normalmente, a lógica da assinatura é apenas uma fração do que um Assunto
  * pode realmente fazer. Os assuntos geralmente possuem alguma lógica de negócios importante, 
  * que aciona um método de notificação sempre que algo importante está para
  * acontecer (ou depois disso).`,
};

export default behavioralObserver;
