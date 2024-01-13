import { BehavioralCommand } from '../interfaces';

const behavioralCommand: BehavioralCommand = {
  command: `A interface Command declara um método para executar um command.`,

  simpleCommand: `Alguns commands podem implementar operações simples por conta própria.`,

  complexCommand: `No entanto, alguns commands podem delegar operações mais complexas a outros objetos,
 * chamados "receivers."`,

  complexCommandData: `Dados de contexto, necessários para lançar os métodos do receiver.`,

  complexCommandConstructor: `Comandos complexos podem aceitar um ou vários objetos receivers junto com
     * quaisquer dados de contexto por meio do construtor.`,

  complexCommandExecutor: `Os commands podem ser delegados a qualquer método de um receiver.`,

  receiver: `As classes Receiver contêm alguma lógica de negócios importante. Eles sabem como
 * realizar todo tipo de operações associadas à execução de uma solicitação. Em
 * na verdade, qualquer classe pode servir como Receiver.`,

  invoker: `O Invoker está associado a um ou vários commands. Ele envia uma solicitação para
 * o command.`,

  invokerSetOnStart: `Inicializa os commands.`,

  doSomethingImportant: `O Invoker não depende de commands concretos ou classes receivers. O
     * Invoker passa uma solicitação para um receiver indiretamente, executando um
     * command.`,

  simpleExecute: `Veja, eu posso fazer coisas simples como imprimir`,

  complexExecute: `Coisas complexas devem ser feitas por um objeto receptor.`,

  workingOn: `Trabalhando em`,

  alsoWorkingOn: `Também trabalhando em`,
};

export default behavioralCommand;
