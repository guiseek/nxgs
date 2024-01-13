import { BehavioralChainOfResponsability } from '../interfaces/behavioral-chain-of-responsability';

const behavioralChainOfResponsability: BehavioralChainOfResponsability = {
  handler: `The Handler interface declares a method for building the chain of handlers.
  * It also declares a method for executing a request.`,
  abstractHandler: `The default chaining behavior can be implemented inside a base handler class.`,
  abstractHandlerSetNext: `Returning a handler from here will let us link handlers in a
  * convenient way like this:
  * monkey.setNext(squirrel).setNext(dog);`,
  monkeyHandler: `All Concrete Handlers either handle a request or pass it to the next handler
  * in the chain.`,
  monkeyHandlerHandle: `I'll eat the`,
  squirrelHandlerHandle: `I'll eat the`,
  dogHandlerHandle: `I'll eat the`,
  clientCode: `The client code is usually suited to work with a single handler. In most
  * cases, it is not even aware that the handler is part of a chain.`,
  instantiate: `The other part of the client code constructs the actual chain.`,
  consoleLog: `The client should be able to send a request to any handler, not just the
  * first one in the chain.`,
};

export default behavioralChainOfResponsability;
