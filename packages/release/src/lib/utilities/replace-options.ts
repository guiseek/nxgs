import type { ConfigOptions } from '../interfaces';
import type { ReleaseOptions } from '../types';
import deepMap from 'deep-map';

export function replaceOptions(options: ReleaseOptions, tokens: ConfigOptions) {
  const replaceTokens = (value: string) => {
    return value
      .replaceAll('${RELATIVE_PROJECT_DIR}', tokens.relativeProjectDir)
      .replaceAll('${PROJECT_DIR}', tokens.projectDir)
      .replaceAll('${PROJECT_NAME}', tokens.projectName)
      .replaceAll('${WORKSPACE_DIR}', tokens.workspaceDir);
  };

  return deepMap<ReleaseOptions>(options, (value) => {
    if (typeof value === 'string') {
      return replaceTokens(value);
    }

    return value;
  });
}
