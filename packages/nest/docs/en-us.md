# @nxgs/nest

## Installation

```bash
npm i -D @nxgs/nest
```

## Validation

### Overview

It is best practice to validate the correctness of any data sent into a web application. To automatically validate incoming requests, Nest provides several pipes available.

> [!NOTE]
> Find more information about the Nest Validation in its [docs page](https://docs.nestjs.com/techniques/validation).

We automate the initial configuration for you, installing the necessary packages and optionally adding the validation feature as a global standard for the application level.

### Generator options

| option    | required | type          |
| --------- | -------- | ------------- |
| directory | `true`   | `string`      |
| auto      | `false`  | `boolean`     |
| project   | `false`  | `projectName` |

#### Example

```bash
nx g @nxgs/nest:validation config

>  NX  Generating @nxgs/nest:validation

✔ Do you want to configure auto-validation? (Y/n) · true

UPDATE package.json
CREATE config/setup-auto-validation.ts
```

### Auto-validation

We'll start by binding ValidationPipe at the application level, thus ensuring all endpoints are protected from receiving incorrect data.

The `ValidationPipe` makes use of the powerful [`class-validator`](<[text](https://github.com/typestack/class-validator)>) package and its declarative validation decorators. The `ValidationPipe` provides a convenient approach to enforce validation rules for all incoming client payloads, where the specific rules are declared with simple annotations in local class/DTO declarations in each module.

## OpenAPI

### Introduction

The [OpenAPI](https://swagger.io/specification/) specification is a language-agnostic definition format used to describe RESTful APIs. Nest provides a dedicated [module](https://github.com/nestjs/swagger) which allows generating such a specification by leveraging decorators.

HINT
document (returned by the SwaggerModule#createDocument() method) is a serializable object conforming to OpenAPI Document. Instead of hosting it via HTTP, you could also save it as a JSON/YAML file, and consume it in different ways.
