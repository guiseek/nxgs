# @nxgs/release

## Installation

```bash
npm i -D @nxgs/release
```

## Configure the workspace

Before configuring your packages for publishing following semantic versioning conventions, you need to configure your workspace.

| option                     | required | type      | default | description                              |
| -------------------------- | -------- | --------- | ------- | ---------------------------------------- |
| repositoryUrl              | `true`   | `string`  |         | remote repository url                    |
| baseBranch                 | `false`  | `string`  | `main`  | configure base branch                    |
| github                     | `false`  | `boolean` | `true`  | create github releases                   |
| changelog                  | `false`  | `boolean` | `false` | create changelog                         |
| npm                        | `false`  | `boolean` | `true`  | create npm releases                      |
| enforceConventionalCommits | `false`  | `boolean` | `true`  | install & configure commitlint and husky |

### Run

```bash
nx g @nxgs/release:init --repositoryUrl=https://github.com/guiseek/nxgs

✔ Would you want to enforce conventional commits? (Y/n) › true
✔ Would you want to create github releases? (Y/n) › true
✔ Would you want to create changelog file? (y/N) › false
✔ Would you want to create npm releases? (Y/n) › true

Installing dependencies...
CREATE .commitlintrc.json
CREATE .nxreleaserc.json
```

Generated code will be something like this and will be in the `.nxreleaserc.json` file, in the root of your workspace.

```json
{
  "npm": true,
  "github": true,
  "changelog": false,
  "repositoryUrl": "https://github.com/guiseek/nxgs",
  "branches": ["main"]
}
```

## Project configuration

These are package-specific settings

| option      | required | type      | default                       | description                      |
| ----------- | -------- | --------- | ----------------------------- | -------------------------------- |
| projectName | `true`   | `string`  |                               | name of the project              |
| github      | `false`  | `boolean` | `true`                        | github releases for this project |
| changelog   | `false`  | `boolean` | `false`                       | changelog for this project       |
| npm         | `false`  | `boolean` | `true`                        | npm releases for this project    |
| tagFormat   | `false`  | `string`  | `${PROJECT_NAME}-v${VERSION}` | tag format to use                |

### Run

The following command adds a new target (release) for specific configurations of this project

```bash
nx g @nxgs/release:config devkit

>  NX  Generating @nxgs/release:config

✔ Would you want to create github releases? (Y/n) · true
✔ Would you want to create changelog file for this project? (y/N) · false
✔ Would you want to create npm releases for this project? (Y/n) · true
✔ What tag format would you like to use for this project. Hint: you can use ${PROJECT_NAME} and ${VERSION} tokens here. · ${PROJECT_NAME}-v${VERSION}

UPDATE packages/devkit/project.json
```

Generated code will be something like this and will be in the `project.json` file, in the root of your project.

```json
  "release": {
    "executor": "@nxgs/release:release",
    "dependsOn": ["build"],
    "options": {
      "changelog": false,
      "github": true,
      "npm": true,
      "tagFormat": "release-v${VERSION}"
    }
  }
```

These are the default values if they are not filled in in the options of your new target release

```ts
export const defaultOptions: ReleaseOptions = {
  branches: ['main', 'master', 'next', { name: 'beta', prerelease: true }, { name: 'alpha', prerelease: true }],
  changelog: true,
  changelogFile: '${PROJECT_DIR}/CHANGELOG.md',
  githubOptions: {},
  ci: true,
  commitMessage: 'chore(release): ${nextRelease.gitTag} [skip ci]\n\n${nextRelease.notes}',
  dryRun: false,
  github: true,
  git: true,
  npm: true,
  repositoryUrl: '',
  tagFormat: '${PROJECT_NAME}-v${version}',
  preset: 'angular',
};
```

## CI/CD

```yml
# ci.yml
name: CI

on:
  push:
    branches:
      - main
      - next

# Needed for nx-set-shas when run on the main branch
permissions:
  actions: read
  contents: read

jobs:
  release:
    name: Publish
    runs-on: ubuntu-latest
    permissions:
      contents: write # to be able to publish a GitHub release
      issues: write # to be able to comment on released issues
      pull-requests: write # to be able to comment on released pull requests
      id-token: write # to enable use of OIDC for npm provenance    steps:
    steps:
      - name: Checkout
        uses: actions/checkout@v3
        with:
          fetch-depth: 0
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: 18
          cache: 'npm'

      - name: Configure CI Git User
        run: |
          git config --global user.name 'user'
          git config --global user.email 'user@domain'
          git remote set-url origin https://user:$GITHUB_TOKEN@github.com/user/repo
        env:
          GITHUB_TOKEN: ${{ secrets.GH_TOKEN }}

      - name: Install dependencies
        run: npm ci
      - name: Verify the integrity of provenance attestations and registry signatures for installed dependencies
        run: npm audit signatures
      - uses: nrwl/nx-set-shas@v3
      - name: Release
        run: |
          npx nx-cloud record -- nx format:check
          npx nx affected --target=release --parallel=false
        env:
          GH_TOKEN: ${{secrets.GH_TOKEN}}
          GITHUB_TOKEN: ${{secrets.GITHUB_TOKEN}}
          NPM_TOKEN: ${{secrets.NPM_TOKEN}}
```
