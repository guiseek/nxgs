# @nxgs/design

## Install

```bash
npm i -D @nxgs/design
```

## Antes de começar

Configure o idioma que será usado como padrão, isso lhe ajudará no entendimento dos patterns gerados

```bash
nx g @nxgs/design:init --lang=pt-br
```

## Padrões comportamentais ou _Behavioral patterns_

Padrões comportamentais são voltados aos algoritmos e a designação de responsabilidades entre objetos.

| opção      | obrigatória | tipo                                                               |
| ---------- | ----------- | ------------------------------------------------------------------ |
| name       | `true`      | `string`                                                           |
| pattern    | `true`      | `command` \| `observer` \| `iterator` \| `chain-of-responsability` |
| directory  | `false`     | `string`                                                           |
| singleFile | `false`     | `boolean`                                                          |
| project    | `false`     | `string`                                                           |

### Command pattern

![Command pattern](/images/patterns/diagrams/command/command-pt-br.png)

O **Command** é um padrão de projeto comportamental que transforma um pedido em um objeto independente que contém toda a informação sobre o pedido. Essa transformação permite que você parametrize métodos com diferentes pedidos, atrase ou coloque a execução do pedido em uma fila, e suporte operações que não podem ser feitas.

#### Problema

Imagine que você está trabalhando em uma nova aplicação de editor de texto. Sua tarefa atual é criar uma barra de tarefas com vários botões para várias operações do editor. Você criou uma classe Botão muito bacana que pode ser usada para botões na barra de tarefas, bem como para botões genéricos de diversas caixas de diálogo.

![Todos os botões de uma aplicação são derivadas de uma mesma classe.](/images/patterns/diagrams/command/problem1.png)

Embora todos esses botões pareçam similares, eles todos devem fazer coisas diferentes. Aonde você deveria colocar o código para os vários handlers de cliques desses botões? A solução mais simples é criar um monte de subclasses para cada local que o botão for usado. Essas subclasses conteriam o código que teria que ser executado em um clique de botão.

![Várias subclasses de botões. O que pode dar errado?](/images/patterns/diagrams/command/problem2.png)

Não demora muito e você percebe que essa abordagem é falha. Primeiro você tem um enorme número de subclasses, e isso seria okay se você não arriscasse quebrar o código dentro dessas subclasses cada vez que você modificar a classe base Botão. Colocando em miúdos: seu código GUI se torna absurdamente dependente de um código volátil da lógica do negócio.

![Várias classes implementam a mesma funcionalidade.](/images/patterns/diagrams/command/problem3-pt-br.png)

E aqui está a parte mais feia. Algumas operações, tais como copiar/colar texto, precisariam ser invocadas de diversos lugares. Por exemplo, um usuário poderia criar um pequeno botão “Copiar” na barra de ferramentas, ou copiar alguma coisa através do menu de contexto, ou apenas apertando `Crtl+C` no teclado.

Inicialmente, quando sua aplicação só tinha a barra de ferramentas, tudo bem colocar a implementação de várias operações dentro das subclasses do botão. Em outras palavras, ter o código de cópia de texto dentro da subclasse `BotãoCópia` parecia certo. Mas então, quando você implementou menus de contexto, atalhos, e outras coisas, você teve que ou duplicar o código da operação em muitas classes ou fazer menus dependentes de botões, o que é uma opção ainda pior.

#### Solução

Um bom projeto de software quase sempre se baseia no princípio da separação de interesses, o que geralmente resulta em dividir a aplicação em camadas. O exemplo mais comum: uma camada para a interface gráfica do usuário e outra camada para a lógica do negócio. A camada GUI é responsável por renderizar uma bonita imagem na tela, capturando quaisquer dados e mostrando resultados do que o usuário e a aplicação estão fazendo. Contudo, quando se trata de fazer algo importante, como calcular a trajetória da lua ou compor um relatório anual, a camada GUI delega o trabalho para a camada inferior da lógica do negócio.

Dentro do código pode parecer assim: um objeto GUI chama um método da lógica do negócio, passando alguns argumentos. Este processo é geralmente descrito como um objeto mandando um pedido para outro.

![Os objetos GUI podem acessar os objetos da lógica do negócio diretamente.](/images/patterns/diagrams/command/solution1-pt-br.png)

O padrão Command sugere que os objetos GUI não enviem esses pedidos diretamente. Ao invés disso, você deve extrair todos os detalhes do pedido, tais como o objeto a ser chamado, o nome do método, e a lista de argumentos em uma classe comando separada que tem apenas um método que aciona esse pedido.

Objetos comando servem como links entre vários objetos GUI e de lógica de negócio. De agora em diante, o objeto GUI não precisa saber qual objeto de lógica do negócio irá receber o pedido e como ele vai ser processado. O objeto GUI deve acionar o comando, que irá lidar com todos os detalhes.

![Acessando a lógica do negócio através do comando.](/images/patterns/diagrams/command/solution2-pt-br.png)

O próximo passo é fazer seus comandos implementarem a mesma interface. Geralmente é apenas um método de execução que não pega parâmetros. Essa interface permite que você use vários comandos com o mesmo remetente do pedido, sem acoplá-lo com as classes concretas dos comandos. Como um bônus, agora você pode trocar os objetos comando ligados ao remetente, efetivamente mudando o comportamento do remetente no momento da execução.

Você pode ter notado uma peça faltante nesse quebra cabeças, que são os parâmetros do pedido. Um objeto GUI pode ter fornecido ao objeto da camada de negócio com alguns parâmetros, como deveremos passar os detalhes do pedido para o destinatário? Parece que o comando deve ser ou pré configurado com esses dados, ou ser capaz de obtê-los por conta própria.

![Os objetos GUI delegam o trabalho aos comandos.](/images/patterns/diagrams/command/solution3-pt-br.png)

Vamos voltar ao nosso editor de texto. Após aplicarmos o padrão Command, nós não mais precisamos de todas aquelas subclasses de botões para implementar vários comportamentos de cliques. É suficiente colocar apenas um campo na classe Botão base que armazena a referência para um objeto comando e faz o botão executar aquele comando com um clique.

Você vai implementar um monte de classes comando para cada possível operação e ligá-los aos seus botões em particular, dependendo do comportamento desejado para os botões.

Outros elementos GUI, tais como menus, atalhos, ou caixas de diálogo inteiras, podem ser implementados da mesma maneira. Eles serão ligados a um comando que será executado quando um usuário interage com um elemento GUI. Como você provavelmente adivinhou, os elementos relacionados a mesma operação serão ligados aos mesmos comandos, prevenindo a duplicação de código.

Como resultado, os comandos se tornam uma camada intermédia conveniente que reduz o acoplamento entre as camadas GUI e de lógica do negócio. E isso é apenas uma fração dos benefícios que o padrão Command pode oferecer.

<p style=text-align:right>
  Obrigado <a target=blank href=https://refactoring.guru/design-patterns/command>Refactoring Guru</a>
</p>

#### Gerando o padrão em multiplos arquivos

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

#### Gerando o padrão em um único arquivo

```bash
nx g @nxgs/design:behavioral save --pattern command --single

>  NX  Generating @nxgs/design:behavioral

CREATE save/save.ts
```

---

### Observer pattern

O **Observer** é um padrão de projeto comportamental que permite que você defina um mecanismo de assinatura para notificar múltiplos objetos sobre quaisquer eventos que aconteçam com o objeto que eles estão observando.

![Observer](/images/patterns/diagrams/observer/observer.png)

#### Problema

Imagine que você tem dois tipos de objetos: um `Cliente` e uma `Loja`. O cliente está muito interessado em uma marca particular de um produto (digamos que seja um novo modelo de iPhone) que logo deverá estar disponível na loja.

O cliente pode visitar a loja todos os dias e checar a disponibilidade do produto. Mas enquanto o produto ainda está a caminho, a maioria desses visitas serão em vão.

![Visitando a loja vs. enviando spam](/images/patterns/diagrams/observer/observer-comic-1-pt-br.png)

Por outro lado, a loja poderia mandar milhares de emails (que poderiam ser considerados como spam) para todos os clientes cada vez que um novo produto se torna disponível. Isso salvaria alguns clientes de incontáveis viagens até a loja. Porém, ao mesmo tempo, irritaria outros clientes que não estão interessados em novos produtos.

Parece que temos um conflito. Ou o cliente gasta tempo verificando a disponibilidade do produto ou a loja gasta recursos notificando os clientes errados.

#### Solução

O objeto que tem um estado interessante é quase sempre chamado de sujeito, mas já que ele também vai notificar outros objetos sobre as mudanças em seu estado, nós vamos chamá-lo de publicador. Todos os outros objetos que querem saber das mudanças do estado do publicador são chamados de assinantes.

O padrão Observer sugere que você adicione um mecanismo de assinatura para a classe publicadora para que objetos individuais possam assinar ou desassinar uma corrente de eventos vindo daquela publicadora. Nada tema! Nada é complicado como parece. Na verdade, esse mecanismo consiste em 1) um vetor para armazenar uma lista de referências aos objetos do assinante e 2) alguns métodos públicos que permitem adicionar assinantes e removê-los da lista.

![Um mecanismo de assinatura permite que objetos individuais inscrevam-se a notificações de eventos.](/images/patterns/diagrams/observer/solution1-pt-br.png)

Agora, sempre que um evento importante acontece com a publicadora, ele passa para seus assinantes e chama um método específico de notificação em seus objetos.

Aplicações reais podem ter dúzias de diferentes classes assinantes que estão interessadas em acompanhar eventos da mesma classe publicadora. Você não iria querer acoplar a publicadora a todas essas classes. Além disso, você pode nem estar ciente de algumas delas de antemão se a sua classe publicadora deve ser usada por outras pessoas.

É por isso que é crucial que todos os assinantes implementem a mesma interface e que a publicadora comunique-se com eles apenas através daquela interface. Essa interface deve declarar o método de notificação junto com um conjunto de parâmetros que a publicadora pode usar para passar alguns dados contextuais junto com a notificação.

![A publicadora notifica os assinantes chamando um método específico de notificação em seus objetos.](/images/patterns/diagrams/observer/solution2-pt-br.png)

Se a sua aplicação tem diferentes tipos de publicadoras e você quer garantir que seus assinantes são compatíveis com todas elas, você pode ir além e fazer todas as publicadoras seguirem a mesma interface. Essa interface precisa apenas descrever alguns métodos de inscrição. A interface permitirá assinantes observar o estado das publicadoras sem se acoplar a suas classes concretas.

<p style=text-align:right>
  Obrigado <a target=blank href=https://refactoring.guru/design-patterns/command>Refactoring Guru</a>
</p>

#### Gerando o padrão em multiplos arquivos

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

#### Gerando o padrão em um único arquivo

```bash
nx g @nxgs/design:behavioral customer --pattern observer --single

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
