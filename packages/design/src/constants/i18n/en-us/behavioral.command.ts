import { BehavioralCommand } from '../interfaces';

const behavioralCommand: BehavioralCommand = {
  command: `The Command interface declares a method for executing a command.`,

  simpleCommand: `Some commands can implement simple operations on their own.`,

  complexCommand: `However, some commands can delegate more complex operations to other objects,
 * called "receivers."`,

  complexCommandData: `Context data, required for launching the receiver's methods.`,

  complexCommandConstructor: `Complex commands can accept one or several receiver objects along with
     * any context data via the constructor.`,

  complexCommandExecutor: `Commands can delegate to any methods of a receiver.`,

  receiver: `The Receiver classes contain some important business logic. They know how to
 * perform all kinds of operations, associated with carrying out a request. In
 * fact, any class may serve as a Receiver.`,

  invoker: `The Invoker is associated with one or several commands. It sends a request to
 * the command.`,

  invokerSetOnStart: `Initialize commands.`,

  doSomethingImportant: `The Invoker does not depend on concrete command or receiver classes. The
     * Invoker passes a request to a receiver indirectly, by executing a
     * command.`,

  simpleExecute: `See, I can do simple things like printing`,

  complexExecute: `Complex stuff should be done by a receiver object.`,

  workingOn: `Working on`,

  alsoWorkingOn: `Also working on`,
};

export default behavioralCommand;
