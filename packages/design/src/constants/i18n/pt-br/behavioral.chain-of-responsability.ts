import { BehavioralChainOfResponsability } from '../interfaces/behavioral-chain-of-responsability';

const behavioralChainOfResponsability: BehavioralChainOfResponsability = {
  handler: `A interface Handler declara um método para construir a cadeia de manipuladores.
  * Também declara um método para executar uma solicitação.`,
  abstractHandler: `O comportamento de encadeamento padrão pode ser implementado dentro de uma classe de manipulador base.`,
  abstractHandlerSetNext: `Retornar um manipulador daqui nos permitirá vincular manipuladores de uma maneira
  * conveniente como esta:
  * monkey.setNext(squirrel).setNext(dog);`,
  monkeyHandler: `Todos os manipuladores de concreto tratam de uma solicitação ou a passam para o próximo
  * manipulador na cadeia.`,
  monkeyHandlerHandle: `vou comer o`,
  squirrelHandlerHandle: `vou comer o`,
  dogHandlerHandle: `vou comer o`,
  clientCode: `O código do cliente geralmente é adequado para trabalhar com um único manipulador. Na maioria dos
  * casos, nem sequer se sabe que o manipulador faz parte de uma cadeia.`,
  instantiate: `A outra parte do código do cliente constrói a cadeia real.`,
  consoleLog: `O cliente deve ser capaz de enviar uma solicitação para qualquer manipulador, não apenas para
  * o primeiro da cadeia.`,
};

export default behavioralChainOfResponsability;
