# @nxgs/release

## Instalação

```bash
npm i -D @nxgs/release
```

## Configure o workspace

Antes de configurar seus pacotes para publicação seguindo convenções de controle de versão semântico, você precisa configurar seu workspace.

| opção                      | obrigatório | tipo      | valor padrão | descrição                                |
| -------------------------- | ----------- | --------- | ------------ | ---------------------------------------- |
| repositoryUrl              | `true`      | `string`  |              | URL do repositório remoto                |
| baseBranch                 | `false`     | `string`  | `main`       | branch base                              |
| github                     | `false`     | `boolean` | `true`       | criar releases no github                 |
| changelog                  | `false`     | `boolean` | `false`      | criar arquivo com log de alterações      |
| npm                        | `false`     | `boolean` | `true`       | criar releases npm                       |
| enforceConventionalCommits | `false`     | `boolean` | `true`       | instalar e configurar commitlint e husky |

### Execute

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

O código gerado será mais ou menos assim e estará no arquivo `.nxreleaserc.json`, na raiz do seu workspace.

```json
{
  "npm": true,
  "github": true,
  "changelog": false,
  "repositoryUrl": "https://github.com/guiseek/nxgs",
  "branches": ["main"]
}
```

## Configuração do projeto

Estas são configurações específicas do pacote

| opção       | obrigatório | tipo      | valor padrão                  | descrição                                       |
| ----------- | ----------- | --------- | ----------------------------- | ----------------------------------------------- |
| projectName | `true`      | `string`  |                               | nome do projeto                                 |
| github      | `false`     | `boolean` | `true`                        | releases no github para este projeto            |
| changelog   | `false`     | `boolean` | `false`                       | arquivo com log de alterações para este projeto |
| npm         | `false`     | `boolean` | `true`                        | releases npm para este projeto                  |
| tagFormat   | `false`     | `string`  | `${PROJECT_NAME}-v${VERSION}` | formato de tag a ser usado                      |

### Execute

O comando a seguir adiciona um novo _target_ (`release`) para configurações específicas deste projeto

```bash
nx g @nxgs/release:config devkit

>  NX  Generating @nxgs/release:config

✔ Would you want to create github releases? (Y/n) · true
✔ Would you want to create changelog file for this project? (y/N) · false
✔ Would you want to create npm releases for this project? (Y/n) · true
✔ What tag format would you like to use for this project. Hint: you can use ${PROJECT_NAME} and ${VERSION} tokens here. · ${PROJECT_NAME}-v${VERSION}

UPDATE packages/devkit/project.json
```

O código gerado será mais ou menos assim e estará no arquivo `project.json`, na raiz do seu projeto.

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

Estes são os valores padrão se não estiverem preenchidos nas opções do seu novo _target_ `release`

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

# Necessário para nx-set-shas quando executado no branch main
permissions:
  actions: read
  contents: read

jobs:
  release:
    name: Publicar
    runs-on: ubuntu-latest
    permissions:
      contents: write # para poder publicar uma versão do GitHub
      issues: write # para poder comentar sobre questões divulgadas
      pull-requests: write # para poder comentar sobre pull requests de release
      id-token: write # para permitir o uso do OIDC
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

      - name: Configurar usuário CI Git
        run: |
          git config --global user.name 'user'
          git config --global user.email 'user@domain'
          git remote set-url origin https://user:$GITHUB_TOKEN@github.com/user/repo
        env:
          GITHUB_TOKEN: ${{ secrets.GH_TOKEN }}

      - name: Instalar dependências
        run: npm ci
      - name: Verifique a integridade dos atestados de procedência e assinaturas de registro para dependências instaladas
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
