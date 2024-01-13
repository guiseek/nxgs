import { PatternOptions, BehavioralPattern } from '../../interfaces';
import { createTreeWithEmptyWorkspace } from '@nx/devkit/testing';
import { behavioralGenerator } from './generator';
import { Tree } from '@nx/devkit';
import { join } from 'path';

describe('behavioral generator', () => {
  let tree: Tree;

  beforeEach(() => {
    tree = createTreeWithEmptyWorkspace();
  });

  it('should generate a multiple files with command pattern', async () => {
    const options: PatternOptions<BehavioralPattern> = {
      name: 'test',
      pattern: 'command',
      singleFile: false,
    };

    await behavioralGenerator(tree, options);

    const invoker = join(options.name, `${options.name}.invoker.ts`);
    const simple = join(options.name, `simple-${options.name}.command.ts`);
    const complex = join(options.name, `complex-${options.name}.command.ts`);
    const receiver = join(options.name, `${options.name}.receiver.ts`);
    const example = join(options.name, `example.ts`);

    expect(tree.exists(simple)).toBeTruthy();
    expect(tree.exists(complex)).toBeTruthy();
    expect(tree.exists(invoker)).toBeTruthy();
    expect(tree.exists(receiver)).toBeTruthy();
    expect(tree.exists(example)).toBeTruthy();
  });

  it('should generate a single file with command pattern', async () => {
    const options: PatternOptions<BehavioralPattern> = {
      name: 'test',
      pattern: 'command',
      singleFile: true,
    };

    await behavioralGenerator(tree, options);

    const fileName = join(options.name, `${options.name}.ts`);

    expect(tree.exists(fileName)).toBeTruthy();
  });

  it('should generate a multiple files with observer pattern ', async () => {
    const options: PatternOptions<BehavioralPattern> = {
      name: 'test',
      pattern: 'observer',
      singleFile: false,
    };

    await behavioralGenerator(tree, options);

    const observerA = join(options.name, `${options.name}-observer-a.ts`);
    const observerB = join(options.name, `${options.name}-observer-b.ts`);
    const concreteSubject = join(options.name, `${options.name}-subject.ts`);
    const observer = join(options.name, `observer.ts`);
    const subject = join(options.name, `subject.ts`);
    const example = join(options.name, `example.ts`);

    expect(tree.exists(observerA)).toBeTruthy();
    expect(tree.exists(observerB)).toBeTruthy();
    expect(tree.exists(concreteSubject)).toBeTruthy();
    expect(tree.exists(observer)).toBeTruthy();
    expect(tree.exists(subject)).toBeTruthy();
    expect(tree.exists(example)).toBeTruthy();
  });

  it('should generate a single file with observer pattern', async () => {
    const options: PatternOptions<BehavioralPattern> = {
      name: 'test',
      pattern: 'observer',
      singleFile: true,
    };

    await behavioralGenerator(tree, options);

    const fileName = join(options.name, `${options.name}.ts`);

    expect(tree.exists(fileName)).toBeTruthy();
  });

  it('should generate a multiple files with iterator pattern ', async () => {
    const options: PatternOptions<BehavioralPattern> = {
      name: 'test',
      pattern: 'iterator',
      singleFile: false,
    };

    await behavioralGenerator(tree, options);

    const iterator = join(options.name, `iterator.ts`);
    const aggregator = join(options.name, `aggregator.ts`);
    const alphabeticalOrderIterator = join(
      options.name,
      `alphabetical-order-iterator.ts`
    );
    const wordsCollection = join(options.name, `words-collection.ts`);
    const example = join(options.name, `${options.name}.ts`);

    expect(tree.exists(iterator)).toBeTruthy();
    expect(tree.exists(aggregator)).toBeTruthy();
    expect(tree.exists(alphabeticalOrderIterator)).toBeTruthy();
    expect(tree.exists(wordsCollection)).toBeTruthy();
    expect(tree.exists(example)).toBeTruthy();
  });

  it('should generate a single file with iterator pattern', async () => {
    const options: PatternOptions<BehavioralPattern> = {
      name: 'test',
      pattern: 'iterator',
      singleFile: true,
    };

    await behavioralGenerator(tree, options);

    const fileName = join(options.name, `${options.name}.ts`);

    expect(tree.exists(fileName)).toBeTruthy();
  });

  it('should generate a multiple files with chain-of-responsability pattern ', async () => {
    const options: PatternOptions<BehavioralPattern> = {
      name: 'test',
      pattern: 'chain-of-responsability',
      singleFile: false,
    };

    await behavioralGenerator(tree, options);

    const fileName = join(options.name, `${options.name}.ts`);
    const handler = join(options.name, `handler.ts`);
    const abstractHandler = join(options.name, `abstract-handler.ts`);
    const monkeyHandler = join(options.name, `monkey-handler.ts`);
    const squirrelHandler = join(options.name, `squirrel-handler.ts`);
    const dogHandler = join(options.name, `dog-handler.ts`);

    expect(tree.exists(fileName)).toBeTruthy();
    expect(tree.exists(handler)).toBeTruthy();
    expect(tree.exists(abstractHandler)).toBeTruthy();
    expect(tree.exists(monkeyHandler)).toBeTruthy();
    expect(tree.exists(squirrelHandler)).toBeTruthy();
    expect(tree.exists(dogHandler)).toBeTruthy();
  });

  it('should generate a single file with chain-of-responsability pattern', async () => {
    const options: PatternOptions<BehavioralPattern> = {
      name: 'test',
      pattern: 'chain-of-responsability',
      singleFile: true,
    };

    await behavioralGenerator(tree, options);

    const fileName = join(options.name, `${options.name}.ts`);

    expect(tree.exists(fileName)).toBeTruthy();
  });
});
