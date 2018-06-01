# Creating Field Component

## Implementation Detail   

Here is the based structure of Field Component.
```vue
<template>
  <th v-if="isHeader"
    //...
  ></th>
  <td v-else
    //...
  ></td>
</template>

<script>
import VuetableFieldMixin from 'vuetable-2/src/components/VuetableFieldMixin'

export default {
  mixins: [VuetableFieldMixin],
  //...
}
</script>
```

- Use the provided [`VuetableFieldMixin`](../api/field/mixin.md).

  Importing [`VuetableFieldMixin`](../api/field/mixin.md) mixin and define it in the `mixins` section. This mixin will declare all necessary props for you. These props will get passed to your component by Vuetable.

- Use `<th>` tag to render table header and use `<td>` tag to render table data.  

  Use `is-header` prop together with `v-if` and `v-else` to differentiate between table header and table data template. This is still consider as single root as only one tag gets rendered. 

  ::: tip
  Vuetable uses [`VuetableRowHeader`](../api/row/header.md) component to render all table header. If the field definition object is a component, it will activate the component with the `:is-header="true"`.
  :::

- Use `vuetable:header-event` and `vuetable:field-event` events
  - To emit event in the code that handles table header section, use `vuetable:header-event`.
  - To emit event in the code that handles table data section, use `vuetable:field-event`.
  
  Vuetable has `v-on` directive to capture `vuetable:header-event` and `vuetable:field-event` events. [`Vuetable`](../api/vuetable/properties.md) and [`VuetableRowHeader`](../api/row/header.md) will relay the event out to Vuetable.

Here are the props declared in [`VuetableFieldMixin`](../api/field/mixin.md)

- `is-header`
  - **type:** `Boolean`
  - **default:** `false`

  Indicate whether Field Component should render the "header" or "data" template section.

- `title`
  - **type:** `String`
  - **default:** `""`   
  
  The title option from field definition object is passed via `title` prop. You can simply use `title` prop to render column title if there is no special need other than display the column title.
  
- `row-data`
  - **type:** `Object`
  - **default:** `null`

- `row-index`
  - **type:** `Number`
  
- `row-field`   
  - **type:** `Object`
  
  The field definition object of this field. 
  
  ::: tip
  Remember that you can use field definition object to hold additional data, parameters, or results.
  :::

- `vuetable`    
  - **type:** `Object`
  - **default:** `null`

  If you need to access the parent Vuetable, use `vuetable` prop.


  See example in
  - [`VuetableFieldHandle`]() 
  - [`VuetableFieldSequence`]()
  - [`VuetableFieldSwitch`]()

## Using Your Field Component Locally

Normally, you don't need to register Field Component. Just `import` it and assign it to the [`name`](./fields-definition.html#name) option of the field definition object.

```javascript
import MyActionComponent from './components/MyActionComponent.vue'

export default [
  {
    name: MyActionComponent,
    title: 'Action`
  },
  //...  
]
```

## Registering Field Component Globally

You can also register your Field Component globally via `Vue.component(..)` and refer to it in the field definition object by its name.

```javascript
// main.js
import Vue from 'vue'
import MyActionComponent from './components/MyActionComponent.vue'

Vue.component('vuetable-field-action', MyActionComponent)
```

```javascript
// FieldsDef.js
export default [
  'code',
  'description',
  { 
    name: 'vuetable-field-action'
  }
]
```

If you name your Field Component with the prefix `vuetable-field-`, you can even shorten its name in field definition object like this.

```javascript
// FieldsDef.js
export default [
  'code',
  'description',
  `__action`
]
```

::: tip
Vuetable will automatically expand the name that has `__` prefix to full name that begins with `vuetable-field-` during its field normalization.
:::

See also:
- Vue's [Component Registration](https://vuejs.org/v2/guide/components-registration.html)
- [`field-prefix`](../api/vuetable/properties.md#field-prefix) prop

## Sharing Your Field Component

This should be easy enough as the Field Component is a normal Vue component in a single file component (SFC) format. You should be able to create a NPM package and publish it to `npmjs.com`. 

See [this "How to Publish & Update a Package" guide](https://docs.npmjs.com/getting-started/publishing-npm-packages) to help you getting start publishing your package.

You can also send me a link to your Field Component package, so I can put it on Vuetable repo or even create a separate page for it if there's enough interest.
