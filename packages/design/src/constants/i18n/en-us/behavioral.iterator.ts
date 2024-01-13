import { BehavioralIterator } from '../interfaces';

const behavioralIterator: BehavioralIterator = {
  iterator: `Intent: Lets you traverse elements of a collection without exposing its
  * underlying representation (list, stack, tree, etc.).`,
  iteratorCurrent: `Return the current element.`,
  iteratorNext: `Return the current element and move forward to next element.`,
  iteratorKey: `Return the key of the current element.`,
  iteratorValid: `Checks if current position is valid.`,
  iteratorRewind: `Rewind the Iterator to the first element.`,
  agregatorGetIterator: `Retrieve an external iterator.`,
  alphabeticalOrderIterator: `Concrete Iterators implement various traversal algorithms. These classes
  * store the current traversal position at all times.`,
  alphabeticalOrderIteratorPosition: `Stores the current traversal position. An iterator may have a lot of
  * other fields for storing iteration state, especially when it is supposed
  * to work with a particular kind of collection.`,
  alphabeticalOrderIteratorReverse: `This variable indicates the traversal direction.`,
  wordsCollection: `Concrete Collections provide one or several methods for retrieving fresh
  * iterator instances, compatible with the collection class.`,
  exampleCollection: `The client code may or may not know about the Concrete Iterator or Collection
  * classes, depending on the level of indirection you want to keep in your
  * program.`,
};

export default behavioralIterator;
