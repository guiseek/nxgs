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

    const file = join(options.name, `${options.name}.ts`);

    expect(tree.exists(file)).toBeTruthy();
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

    const file = join(options.name, `${options.name}.ts`);

    expect(tree.exists(file)).toBeTruthy();
  });
});
