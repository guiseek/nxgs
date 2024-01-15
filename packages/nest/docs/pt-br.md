# @nxgs/nest

## Instalação

```bash
npm i -D @nxgs/nest
```

## Validação

É uma boa prática validar quaisquer dados enviados para uma aplicação. O Nest oferece vários pipes para validar solicitações recebidas.

### Automatizamos a configuração inicial pra você! 🎉

Instalando os pacotes necessários e opcionalmente adicionamos uma função que configura a validação a nível de aplicação.

### Opções do gerador

| opção     | obrigatório | tipo      | valor padrão | descrição                                                                                                                                    |
| --------- | ----------- | --------- | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------- |
| directory | `false`     | `string`  |              | diretório onde será criada a configuração a nível de aplicação, caso a opção `auto` seja verdadeira, então o diretório se torna obrigatório. |
| auto      | `false`     | `boolean` | `false`      | define se a configuração a nivel de aplicação será criada ou não.                                                                            |
| project   | `false`     | `string`  |              | caso a configuração seja pra algum projeto específico, deve ser informado o nome do projeto ao qual a configuração será feita                |

> [!NOTE]
> Encontre mais informações sobre validações com Nest nesta [página da documentação](https://docs.nestjs.com/techniques/validation).

### Examplos

#### Exemplo simples

```bash
nx g @nxgs/nest:validation

>  NX  Generating @nxgs/nest:validation

✔ Do you want to configure auto-validation? (Y/n) · false

UPDATE package.json
```

#### Exemplo criando arquivo de configuração

```bash
nx g @nxgs/nest:validation config --auto

>  NX  Generating @nxgs/nest:validation

UPDATE package.json
CREATE config/setup-auto-validation.ts
```

#### Exemplo adicionando configuração em um projeto nest

> [!IMPORTANT]
> Para que a configuração seja criada, você precisa informar um diretório! Ele é o primeiro parâmetro do comando e pode ser informado sem `--directory` desde que seja o primeiro valor após o comando. Como no exemplo abaixo.

```bash
nx g @nxgs/nest:validation config --auto --project api

>  NX  Generating @nxgs/nest:validation

UPDATE package.json
CREATE apps/api/src/config/setup-auto-validation.ts
```

Este é o arquivo de configuração criado

```ts
import { INestApplication, ValidationPipe } from '@nestjs/common';

export function setupAutoValidation(app: INestApplication) {
  app.useGlobalPipes(new ValidationPipe({ transform: true }));
}
```

Agora basta usá-lo no arquivo `main.ts` em seu projeto nest.

Veja um exemplo

```ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { setupAutoValidation } from './config/setup-auto-validation';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  setupAutoValidation(app);

  await app.listen(port);
}
```

## OpenAPI

### Introdução

A especificação [OpenAPI](https://swagger.io/specification/) é um formato de definição independente de linguagem usado para descrever APIs RESTful. O Nest fornece um [módulo](https://github.com/nestjs/swagger) dedicado que permite gerar tal especificação utilizando decoradores.

### Automatizamos a configuração inicial pra você! 🎉

Instalando os pacotes necessários e opcionalmente adicionamos arquivos genéricos e úteis durante o desenvolvimento.

| opção       | obrigatório | tipo     | valor padrão | descrição                                           |
| ----------- | ----------- | -------- | ------------ | --------------------------------------------------- |
| directory   | `true`      | `string` |              | diretório onde será criada a configuração           |
| title       | `true`      | `string` |              | título configurado para a API.                      |
| description | `false`     | `string` |              | descrição configurada para a API.                   |
| description | `false`     | `string` |              | prefixo é a URL base configurada no módulo swagger. |
| project     | `false`     | `string` |              | nome do projeto que será adicionada à configuração. |

> [!NOTE]
> Encontre mais informações sobre OpenAPI com Nest nesta [página da documentação](https://docs.nestjs.com/openapi/introduction).

### Examplos

#### Exemplo simples

```bash
nx g @nxgs/nest:swagger config --title 'API RESTFul' --description 'OpenAPI 3.0 Specification'

>  NX  Generating @nxgs/nest:swagger

UPDATE package.json
CREATE config/swagger.ts
```

#### Exemplo com prefixo adicionando configuração em um projeto nest

> [!IMPORTANT]
> Para que a configuração seja criada, você precisa informar um diretório! Ele é o primeiro parâmetro do comando e pode ser informado sem `--directory` desde que seja o primeiro valor após o comando. Como no exemplo abaixo.

```bash
nx g @nxgs/nest:swagger config --title 'API RESTFul' --description 'OpenAPI 3.0 Specification' --prefix docs --project api

>  NX  Generating @nxgs/nest:swagger

UPDATE package.json
CREATE apps/api/src/config/swagger.ts
```

Este é o arquivo de configuração criado

```ts
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { INestApplication } from '@nestjs/common';

export const swagger = (app: INestApplication) => {
  const config = new DocumentBuilder().setTitle('API RESTFul').setDescription('OpenAPI 3.0 Specification').setVersion('1.0').build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);
};
```

Agora basta usá-lo no arquivo `main.ts` em seu projeto nest.

Veja um exemplo

```ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { swagger } from './config/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  swagger(app);

  await app.listen(port);
}
```
