import { BehavioralIterator } from '../interfaces';

const behavioralIterator: BehavioralIterator = {
  iterator: `Intenção: permite percorrer elementos de uma coleção sem expor sua
  * representação subjacente (lista, pilha, árvore, etc.).`,
  iteratorCurrent: `Retorne o elemento atual.`,
  iteratorNext: `Retorne o elemento atual e avance para o próximo elemento.`,
  iteratorKey: `Retorne a chave do elemento atual.`,
  iteratorValid: `Verifica se a posição atual é válida.`,
  iteratorRewind: `Retroceda o Iterador até o primeiro elemento.`,
  agregatorGetIterator: `Recuperar um iterador externo.`,
  alphabeticalOrderIterator: `Iteradores concretos implementam vários algoritmos de travessia. Essas classes
  * armazenam a posição atual do percurso em todos os momentos.`,
  alphabeticalOrderIteratorPosition: `Armazena a posição atual do percurso. Um iterador pode ter muitos
  * outros campos para armazenar o estado da iteração, especialmente quando
  * ele deve funcionar com um tipo específico de coleção.`,
  alphabeticalOrderIteratorReverse: `Esta variável indica a direção de deslocamento.`,
  wordsCollection: `Coleções concretas fornecem um ou vários métodos para recuperar
  * novas instâncias de iterador, compatíveis com a classe de coleção.`,
  exampleCollection: `O código do cliente pode ou não saber sobre as classes Concrete Iterator ou Collection,
  * dependendo do nível de indireção que você deseja manter em seu programa.`,
};

export default behavioralIterator;
