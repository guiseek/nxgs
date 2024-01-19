# @nxgs/angular

## Install

```bash
npm i -D @nxgs/angular
```

## CDK

### Overview

The Component Dev Kit (CDK) is a set of behavior primitives for building UI components.

### Accordion

An accordion is a component with one or more expandable sections. CDK accordion provides a foundation upon which you can build your own custom accordion component. CDK accordion provides logic for the accordion interaction pattern without any styles. You can customize the accordion's appearance based on your application's needs.

| option    | required | type     |
| --------- | -------- | -------- |
| name      | `true`   | `string` |
| directory | `false`  | `string` |
| prefix    | `false`  | `string` |
| project   | `false`  | `string` |

Example:

<!-- @filename: angular/cdk/accordion -->

```bash
nx @nxgs/angular/cdk:accordion menu --directory=navigation/menu --prefix=app --project=docs
```

### dialog

| option    | required | type                              |
| --------- | -------- | --------------------------------- |
| name      | `true`   | `string`                          |
| example   | `false`  | `data` \| `overview` \| `styling` |
| directory | `false`  | `string`                          |
| prefix    | `false`  | `string`                          |
| project   | `false`  | `string`                          |

#### Example dialog [data](https://material.angular.io/cdk/dialog/examples#cdk-dialog-data)

<!-- @filename: angular/cdk/dialog/data -->

```bash
nx g @nxgs/angular/cdk:dialog create-user --example=data
```

#### Example dialog [overview](https://material.angular.io/cdk/dialog/examples#cdk-dialog-overview)

<!-- @filename: angular/cdk/dialog/overview -->

```bash
nx g @nxgs/angular/cdk:dialog user-profile --example=overview
```

#### Example dialog [styling](https://material.angular.io/cdk/dialog/examples#cdk-dialog-styling)

<!-- @filename: angular/cdk/dialog/styling -->

```bash
nx g @nxgs/angular/cdk:dialog crop-photo --example=styling
```

### listbox

| option    | required | type                                                                      |
| --------- | -------- | ------------------------------------------------------------------------- |
| name      | `true`   | `string`                                                                  |
| example   | `false`  | `active-descendant \| basic \| complex-object-values \| custom-typeahead` |
| directory | `string` | `false`                                                                   |
| prefix    | `string` | `false`                                                                   |
| project   | `string` | `false`                                                                   |

#### Example listbox [active-descendant](https://material.angular.io/cdk/listbox/examples#cdk-listbox-activedescendant):

<!-- @filename: angular/cdk/listbox/active-descendant -->

```bash
nx @nxgs/angular/cdk:listbox product-size --example=active-descendant
```

#### Example listbox [basic](https://material.angular.io/cdk/listbox/examples#cdk-listbox-overview):

<!-- @filename: angular/cdk/listbox/overview -->

```bash
nx @nxgs/angular/cdk:listbox product-size --example=overview
```

#### Example listbox [complex-object-values](https://material.angular.io/cdk/listbox/examples#cdk-listbox-compare-with)

<!-- @filename: angular/cdk/listbox/complex-object-values -->

```bash
nx @nxgs/angular/cdk:listbox product-size --example=complex-object-values
```

#### Example listbox [custom-typeahead](https://material.angular.io/cdk/listbox/examples#cdk-listbox-custom-typeahead)

<!-- @filename: angular/cdk/listbox/custom-typeahead -->

```bash
nx @nxgs/angular/cdk:listbox product-size --example=custom-typeahead
```

### menu

| option    | required | type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| name      | `true`   | `string`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| example   | `false`  | [context-menu](https://material.angular.io/cdk/menu/examples#cdk-menu-context) \| [inline-menu](https://material.angular.io/cdk/menu/examples#cdk-menu-inline) \| [menu-bar](https://material.angular.io/cdk/menu/examples#cdk-menu-menubar) \| [menu-standalone-trigger](https://material.angular.io/cdk/menu/examples#cdk-menu-standalone-menu) \| [nested-context-menus](https://material.angular.io/cdk/menu/examples#cdk-menu-nested-context) \| [stateful-menu-standalone-trigger](https://material.angular.io/cdk/menu/examples#cdk-menu-standalone-stateful-menu) |
| directory | `string` | `false`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| prefix    | `string` | `false`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| project   | `string` | `false`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |

Example:

```bash
nx @nxgs/angular/cdk:menu dropdown --directory=components/dropdown --prefix=account --project=feature-account
```

### tree

| option    | required | type                                                                                                                                           |
| --------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| name      | `true`   | `string`                                                                                                                                       |
| example   | `false`  | [flat](https://material.angular.io/cdk/tree/examples#cdk-tree-flat) \| [nested](https://material.angular.io/cdk/tree/examples#cdk-tree-nested) |
| directory | `string` | `false`                                                                                                                                        |
| prefix    | `string` | `false`                                                                                                                                        |
| project   | `string` | `false`                                                                                                                                        |

Example:

```bash
nx @nxgs/angular/cdk:menu dropdown --directory=components/dropdown --prefix=account --project=feature-account
```

## Material

### autocomplete

| option    | required | type     |
| --------- | -------- | -------- |
| name      | `true`   | `string` |
| directory | `string` | `false`  |
| prefix    | `string` | `false`  |
| project   | `string` | `false`  |

Example:

```bash
nx @nxgs/angular/material:autocomplete city --directory=components/city --project=feature-account
```
