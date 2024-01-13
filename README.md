<section>
  <img src="images/logo/dashed.svg" />
</section>

## Packages

# [@nxgs/angular](packages/angular)

## CDK

### accordion

| option    | required | type     |
| --------- | -------- | -------- |
| name      | `true`   | `string` |
| directory | `false`  | `string` |
| prefix    | `false`  | `string` |
| project   | `false`  | `string` |

Example:

```bash
nx @nxgs/angular/cdk:accordion menu --directory=navigation/menu --prefix=app --project=docs
```

### dialog

| option    | required | type                                                                                                                                                                                                                                        |
| --------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| name      | `true`   | `string`                                                                                                                                                                                                                                    |
| example   | `false`  | [data](https://material.angular.io/cdk/dialog/examples#cdk-dialog-data) \| [overview](https://material.angular.io/cdk/dialog/examples#cdk-dialog-overview) \| [styling](https://material.angular.io/cdk/dialog/examples#cdk-dialog-styling) |
| directory | `false`  | `string`                                                                                                                                                                                                                                    |
| prefix    | `false`  | `string`                                                                                                                                                                                                                                    |
| project   | `false`  | `string`                                                                                                                                                                                                                                    |

Example:

```bash
nx @nxgs/angular/cdk:dialog create-user --directory=components/create-user --prefix=account --project=feature-account
```

### listbox

| option    | required | type                                                                                                                                                                                                                                                                                                                                                                                            |
| --------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| name      | `true`   | `string`                                                                                                                                                                                                                                                                                                                                                                                        |
| example   | `false`  | [active-descendant](https://material.angular.io/cdk/listbox/examples#cdk-listbox-activedescendant) \| [basic](https://material.angular.io/cdk/listbox/examples#cdk-listbox-overview) \| [complex-object-values](https://material.angular.io/cdk/listbox/examples#cdk-listbox-compare-with) \| [custom-typeahead](https://material.angular.io/cdk/listbox/examples#cdk-listbox-custom-typeahead) |
| directory | `string` | `false`                                                                                                                                                                                                                                                                                                                                                                                         |
| prefix    | `string` | `false`                                                                                                                                                                                                                                                                                                                                                                                         |
| project   | `string` | `false`                                                                                                                                                                                                                                                                                                                                                                                         |

Example:

```bash
nx @nxgs/angular/cdk:listbox product-size --directory=components/product-size --prefix=shop --project=feature-shop
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

### `nx g @nxgs/angular/material:`

- autocomplete

<section>
  <figure style=float:left>
    <img height=128px src="./images/logo/default.svg" />
  </figure>
  <div>
    <h3 style=font-size:6rem> @nxgs/source </h3>
    <p> Angular, NestJS and TypeScript generators. </p>
  </div>
</section>
