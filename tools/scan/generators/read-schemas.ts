import { directoryExists, readJsonFile } from 'nx/src/utils/fileutils';
import { readCachedProjectGraph } from '@nx/devkit';
import { glob } from 'glob';
import { join } from 'path';
import { SchemaJson } from './interfaces';

const projects: Record<string, SchemaJson[]> = {};

for (const project of Object.values(readCachedProjectGraph().nodes)) {
  if (project.data.sourceRoot) {
    const generators = join(project.data.sourceRoot, 'generators');
    if (directoryExists(generators)) {
      if (!projects[project.name]) {
        projects[project.name] = [];
      }

      glob(`${generators}/**/schema.json`, (err, matches) => {
        if (err) throw err;

        const schemas = matches.map<SchemaJson>(readJsonFile.bind(this));
        projects[project.name].push(...schemas);
      });
    }
  }
}

console.log(projects);
