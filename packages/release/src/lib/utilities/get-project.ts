import type { ProjectConfiguration, ProjectGraph } from '@nx/devkit';
import type { GetProjectContext } from '../types';
import { filter, map, pipe } from 'remeda';
import { join } from 'path';

/**
 * Get Project
 * @param {GetProjectContext} context - project information object
 */
export function getProject(context: GetProjectContext) {
  if (!context.projectName) {
    throw new Error('No project name found in context.');
  }

  const project =
    context.projectsConfigurations?.projects?.[context.projectName] ??
    context.workspace?.projects?.[context.projectName];

  if (!project) {
    throw new Error(`Project ${context.projectName} not found in workspace`);
  }

  return project;
}

/**
 * Get Project Root
 * @param {ProjectConfiguration | string} project - project name or project configuration object
 * @param {string} cwd - directory to exec
 */
export function getProjectRoot(
  project: ProjectConfiguration | string,
  cwd: string
) {
  return join(cwd, typeof project === 'string' ? project : project.root);
}

/**
 * Set Default Project Root
 * @param {GetProjectContext} context - context of project
 */
export function getDefaultProjectRoot(context: GetProjectContext) {
  return getProjectRoot(getProject(context), context.cwd);
}

/**
 * Get Project Dependencies
 * @param {string} projectName - project name
 * @param {ProjectGraph} graph - project graph object
 */
export async function getProjectDependencies(
  projectName: string,
  graph: ProjectGraph
) {
  return { dependencies: getRecursiveDeps(projectName, graph), graph };
}

/**
 *
 * @param {string} projectName - project name
 * @param {ProjectGraph} graph - project graph object
 */
export function getRecursiveDeps(
  projectName: string,
  graph: ProjectGraph
): string[] {
  const deps = graph.dependencies[projectName];

  if (!deps) return [];

  return pipe(
    deps,
    filter((dependency) => !dependency.target.startsWith('npm:')),
    map((dependency) => dependency.target),
    (filteredDeps: string[]) =>
      filteredDeps.reduce(
        (acc, target) => [...acc, ...getRecursiveDeps(target, graph)],
        filteredDeps
      )
  );
}
