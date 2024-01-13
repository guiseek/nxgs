# @nxgs/design

## Install

```bash
npm i -D @nxgs/design
```

## Before you start

Configure your default language to generate more understandable design patterns

```bash
nx g @nxgs/design:init --lang=en-us
```

## Behavioral patterns

Behavioral design patterns are concerned with algorithms and the assignment of responsibilities between objects.

| option     | required | type                                                               |
| ---------- | -------- | ------------------------------------------------------------------ |
| name       | `true`   | `string`                                                           |
| pattern    | `true`   | `command` \| `observer` \| `iterator` \| `chain-of-responsability` |
| directory  | `false`  | `string`                                                           |
| singleFile | `false`  | `boolean`                                                          |
| project    | `false`  | `string`                                                           |

### Command pattern

![Command pattern](/images/patterns/diagrams/command/command-en.png)

**Command** is a behavioral design pattern that turns a request into a stand-alone object that contains all information about the request. This transformation lets you pass requests as a method arguments, delay or queue a request’s execution, and support undoable operations.

#### Problem

Imagine that you’re working on a new text-editor app. Your current task is to create a toolbar with a bunch of buttons for various operations of the editor. You created a very neat Button class that can be used for buttons on the toolbar, as well as for generic buttons in various dialogs.

![All buttons of the app are derived from the same class.](/images/patterns/diagrams/command/problem1.png)

While all of these buttons look similar, they’re all supposed to do different things. Where would you put the code for the various click handlers of these buttons? The simplest solution is to create tons of subclasses for each place where the button is used. These subclasses would contain the code that would have to be executed on a button click.

![Lots of button subclasses. What can go wrong?](/images/patterns/diagrams/command/problem2.png)

Before long, you realize that this approach is deeply flawed. First, you have an enormous number of subclasses, and that would be okay if you weren’t risking breaking the code in these subclasses each time you modify the base Button class. Put simply, your GUI code has become awkwardly dependent on the volatile code of the business logic.

![Several classes implement the same functionality.](/images/patterns/diagrams/command/problem3-en.png)

And here’s the ugliest part. Some operations, such as copying/pasting text, would need to be invoked from multiple places. For example, a user could click a small “Copy” button on the toolbar, or copy something via the context menu, or just hit `Ctrl+C` on the keyboard.

Initially, when our app only had the toolbar, it was okay to place the implementation of various operations into the button subclasses. In other words, having the code for copying text inside the `CopyButton` subclass was fine. But then, when you implement context menus, shortcuts, and other stuff, you have to either duplicate the operation’s code in many classes or make menus dependent on buttons, which is an even worse option.

#### Solution

Good software design is often based on the principle of separation of concerns, which usually results in breaking an app into layers. The most common example: a layer for the graphical user interface and another layer for the business logic. The GUI layer is responsible for rendering a beautiful picture on the screen, capturing any input and showing results of what the user and the app are doing. However, when it comes to doing something important, like calculating the trajectory of the moon or composing an annual report, the GUI layer delegates the work to the underlying layer of business logic.

In the code it might look like this: a GUI object calls a method of a business logic object, passing it some arguments. This process is usually described as one object sending another a request.

![The GUI objects may access the business logic objects directly.](/images/patterns/diagrams/command/solution1-en.png)

The Command pattern suggests that GUI objects shouldn’t send these requests directly. Instead, you should extract all of the request details, such as the object being called, the name of the method and the list of arguments into a separate command class with a single method that triggers this request.

Command objects serve as links between various GUI and business logic objects. From now on, the GUI object doesn’t need to know what business logic object will receive the request and how it’ll be processed. The GUI object just triggers the command, which handles all the details.

![Accessing the business logic layer via a command.](/images/patterns/diagrams/command/solution2-en.png)

The next step is to make your commands implement the same interface. Usually it has just a single execution method that takes no parameters. This interface lets you use various commands with the same request sender, without coupling it to concrete classes of commands. As a bonus, now you can switch command objects linked to the sender, effectively changing the sender’s behavior at runtime.

You might have noticed one missing piece of the puzzle, which is the request parameters. A GUI object might have supplied the business-layer object with some parameters. Since the command execution method doesn’t have any parameters, how would we pass the request details to the receiver? It turns out the command should be either pre-configured with this data, or capable of getting it on its own.

![The GUI objects delegate the work to commands.](/images/patterns/diagrams/command/solution3-en.png)

Let’s get back to our text editor. After we apply the Command pattern, we no longer need all those button subclasses to implement various click behaviors. It’s enough to put a single field into the base Button class that stores a reference to a command object and make the button execute that command on a click.

You’ll implement a bunch of command classes for every possible operation and link them with particular buttons, depending on the buttons’ intended behavior.

Other GUI elements, such as menus, shortcuts or entire dialogs, can be implemented in the same way. They’ll be linked to a command which gets executed when a user interacts with the GUI element. As you’ve probably guessed by now, the elements related to the same operations will be linked to the same commands, preventing any code duplication.

As a result, commands become a convenient middle layer that reduces coupling between the GUI and business logic layers. And that’s only a fraction of the benefits that the Command pattern can offer!

<p style=text-align:right>
  Thanks <a target=blank href=https://refactoring.guru/design-patterns/command>Refactoring Guru</a>
</p>

#### Generate as multiple files

```bash
nx g @nxgs/design:behavioral save --pattern command

>  NX  Generating @nxgs/design:behavioral

CREATE save/save.invoker.ts
CREATE save/save.receiver.ts
CREATE save/command.ts
CREATE save/complex-save.command.ts
CREATE save/example.ts
CREATE save/simple-save.command.ts
```

#### Generate as single file

```bash
nx g @nxgs/design:behavioral save --pattern command --single

>  NX  Generating @nxgs/design:behavioral

CREATE save/save.ts
```

---

### Observer pattern

**Observer** is a behavioral design pattern that lets you define a subscription mechanism to notify multiple objects about any events that happen to the object they’re observing.

![Observer](/images/patterns/diagrams/observer/observer.png)

#### Problem

Imagine that you have two types of objects: a `Customer` and a `Store`. The customer is very interested in a particular brand of product (say, it’s a new model of the iPhone) which should become available in the store very soon.

The customer could visit the store every day and check product availability. But while the product is still en route, most of these trips would be pointless.

![Visiting the store vs. sending spam](/images/patterns/diagrams/observer/observer-comic-1-en.png)

On the other hand, the store could send tons of emails (which might be considered spam) to all customers each time a new product becomes available. This would save some customers from endless trips to the store. At the same time, it’d upset other customers who aren’t interested in new products.

It looks like we’ve got a conflict. Either the customer wastes time checking product availability or the store wastes resources notifying the wrong customers.

#### Solution

The object that has some interesting state is often called subject, but since it’s also going to notify other objects about the changes to its state, we’ll call it publisher. All other objects that want to track changes to the publisher’s state are called subscribers.

The Observer pattern suggests that you add a subscription mechanism to the publisher class so individual objects can subscribe to or unsubscribe from a stream of events coming from that publisher. Fear not! Everything isn’t as complicated as it sounds. In reality, this mechanism consists of 1) an array field for storing a list of references to subscriber objects and 2) several public methods which allow adding subscribers to and removing them from that list.

![A subscription mechanism lets individual objects subscribe to event notifications.](/images/patterns/diagrams/observer/solution1-en.png)

Now, whenever an important event happens to the publisher, it goes over its subscribers and calls the specific notification method on their objects.

Real apps might have dozens of different subscriber classes that are interested in tracking events of the same publisher class. You wouldn’t want to couple the publisher to all of those classes. Besides, you might not even know about some of them beforehand if your publisher class is supposed to be used by other people.

That’s why it’s crucial that all subscribers implement the same interface and that the publisher communicates with them only via that interface. This interface should declare the notification method along with a set of parameters that the publisher can use to pass some contextual data along with the notification.

![Publisher notifies subscribers by calling the specific notification method on their objects.](/images/patterns/diagrams/observer/solution2-en.png)

If your app has several different types of publishers and you want to make your subscribers compatible with all of them, you can go even further and make all publishers follow the same interface. This interface would only need to describe a few subscription methods. The interface would allow subscribers to observe publishers’ states without coupling to their concrete classes.

<p style=text-align:right>
  Thanks <a target=blank href=https://refactoring.guru/design-patterns/command>Refactoring Guru</a>
</p>

#### Generate as multiple files

```bash
nx g @nxgs/design:behavioral customer --pattern observer

>  NX  Generating @nxgs/design:behavioral

CREATE customer/customer-observer-a.ts
CREATE customer/customer-observer-b.ts
CREATE customer/customer-subject.ts
CREATE customer/example.ts
CREATE customer/observer.ts
CREATE customer/subject.ts
```

#### Generate as single file

```bash
nx g @nxgs/design:behavioral customer --pattern observer --single=true

>  NX  Generating @nxgs/design:behavioral

CREATE customer/customer.ts
```

### Iterator pattern

```bash
nx g @nxgs/design:behavioral calendar --pattern iterator

>  NX  Generating @nxgs/design:behavioral

CREATE calendar/calendar.ts
CREATE calendar/aggregator.ts
CREATE calendar/alphabetical-order-iterator.ts
CREATE calendar/iterator.ts
CREATE calendar/words-collection.ts
```

### Chain of Responsability pattern

```bash
nx g @nxgs/design:behavioral builder --pattern chain-of-responsability

>  NX  Generating @nxgs/design:behavioral

CREATE builder/builder.ts
CREATE builder/abstract-handler.ts
CREATE builder/dog-handler.ts
CREATE builder/handler.ts
CREATE builder/monkey-handler.ts
CREATE builder/squirrel-handler.ts
```

This library was generated with [Nx](https://nx.dev).

## Building

Run `nx build design` to build the library.

## Running unit tests

Run `nx test design` to execute the unit tests via [Jest](https://jestjs.io).
