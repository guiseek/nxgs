const { readCachedProjectGraph } = require('@nx/devkit');

const scopes = Object.keys(readCachedProjectGraph().nodes)
  .slice(0, -1)
  .concat('source');

// precomputed scope
const scopeComplete = require('child_process')
  .execSync('git status --porcelain || true')
  .toString()
  .trim()
  .split('\n')
  .find((r) => ~r.indexOf('M  packages'))
  ?.replace(/(\/)/g, '%%')
  ?.match(/packages%%((\w|-)*)/)?.[1];

/** @type {import('cz-git').CommitizenGitOptions} */
module.exports = {
  alias: {
    f: 'docs(core): fix typos',
    b: 'chore(repo): bump dependencies',
  },
  scopes,
  defaultScope: scopeComplete,
  scopesSearchValue: true,
  maxSubjectLength: 100,
  allowCustomScopes: false,
  allowEmptyScopes: false,
  allowCustomIssuePrefix: false,
  allowEmptyIssuePrefix: false,
  types: [
    { value: 'feat', name: 'feat:     A new feature' },
    { value: 'fix', name: 'fix:      A bug fix' },
    {
      value: 'refactor',
      name: 'refactor: A code change that neither fixes a bug nor adds a feature',
    },
    { value: 'docs', name: 'docs:     Documentation only changes' },
    {
      value: 'ci',
      name: 'ci:       Changes to our CI configuration files and scripts',
    },
    {
      value: 'cleanup',
      name: 'cleanup:  A code change that neither fixes a bug nor adds a feature',
    },
    {
      value: 'chore',
      name: "chore:    Other changes that don't modify src or test files",
    },
  ],
};
