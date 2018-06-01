# Getting Started

::: warning
Vuetable-2 v2.0 is currently still in beta.
:::

## Installation
#### Dependencies
- [Vue.js](https://github.com/vuejs/vue) (2.0+)
- [Axios](https://github.com/axios/axios)

#### NPM
```
npm install vuetable-2@next --save-dev
```

#### CDN
```
https://unpkg.com/vuetable-2@next
```

## Usage

Import and use Vuetable as a component. 

```vue
<template>
  <vuetable ref="vuetable"
    api-url="https://vuetable.ratiw.net/api/users"
    :fields="['name', 'nickname', 'email', 'gender']"
    data-path=""
    pagination-path=""
  ></vuetable>
</template>

<script>
import Vuetable from 'vuetable-2'

export default {
  components: {
    Vuetable
  }
}
</script>
```

You'll need to use at least the following prop to initially configure Vuetable
- `api-url` -- the source of the JSON data
- `fields` -- the fields definition of the data you want to display
- `data-path` -- the path of the data inside your JSON
- `pagination-path` -- the path of the pagination metadata inside your JSON

For more detail, please see [Fields Definition](/guide/fields-definition.md) section.

Vuetable normally works with data from an API endpoint and fields defintion. If you prefer to handle the data retrieval yourself, you can switch to use Vuetable in **Data mode**, by turning the **API mode** off with `:api-mode="false"` and supply your data through `data` prop or `setData` function.

```vue{4,5}
<template>
  <vuetable ref="vuetable"
    :fields="['name', 'nickname', 'email', 'gender']"
    :api-mode="false"
    :data="localData"
  ></vuetable>
</template>

<script>
import Vuetable from 'vuetable-2'

export default {
  components: {
    Vuetable
  }
}
</script>
```

For more detail, please see [API vs Data mode](/guide/api-vs-data-mode.md) section.

