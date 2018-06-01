# VuetableFieldHandle

This field component exists to provide backward compatibility the `__handle` special field in the previous
version of Vuetable. 

::: warning
`VuetableFieldHandle` might be removed in the next version.
:::

## Mixins
- [`VuetableFieldMixin`](./mixin.md)

## Methods
### renderIconTag
- **params:**
  - `classes` -- array of css classes
  - `options` -- other optional attributes to render

- **returns:** DOM structure representing icon rendering.

:::warning
This method will probably be moved to a utility mixin in future version to reduce duplication.
:::
