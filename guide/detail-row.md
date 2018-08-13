# Detail Row

Detail row is the additional row hidden underneath each data row in the table. When you want to only display relevant data for each row, but also would like to display additional information when needed, detail row would be a great help.

In order to use detail row, you will need to create a component and register it globally using `Vue.component` helper.

```js
import Vue from 'vue'
import MyDetailRow from './MyDetailRow.vue'

Vue.component('my-detail-row', MyDetailRow)
```

```vue
<template>
  <vuetable ref="vuetable"
    //..
    detail-row-component="my-detail-row"
  ></vuetable>
</template>
```

Or, you can `import` and assign it to a variable in `data` section.

```vue
<template>
  <vuetable ref="vuetable"
    //..
    :detail-row-component="detailRow"
  ></vuetable>
</template>
<script>
import MyDetailRow from './MyDetailRow.vue'

export default {
  //..
  data() {
    //..
    detailRow: MyDetailRow,
  },
  //...
}
</script>
```

Then, you can use `detail-row-component` property to specify the name of your detail row component.

Your detail row component should define the following two properties:
- `row-data` -- the current row data will be passed to
- `row-index` -- the current row index will be passed to
- `options` -- extra object in case you need to pass additional options to your detail row component

Example:
```javascript
//..
props: {
  rowData: {
    type: Object,
    required: true
  },
  rowIndex: {
    type: Number
  },
  options: {
    type: Object,
  }
}
```

## Detail Row Transition

You can use `detail-row-transition` prop to specify the transition class for your detail component.

## CSS Class for Detail Row

The detail row, by default, has `vuetable-detail-row` in its class attribute. But you can use `detail-row-class` to change that.

You can also assign a function to `detail-row-class`. The function will receive `row-data` and `row-index` as parameters. It has to return a **string** that represent the CSS class. Vuetable will apply that to the `<tr>` of detail row component.

## How Vuetable track the state of each Detail Row

Each detail row can be shown or hidden independently. So Vuetable needs a way to track the state of each detail row to update the UI accordingly.

In order to do this, it is required that each data row must be uniquely identifiable. If your data contains an `id` column (which can uniquely identify each row), then you don't have to do anything else. Because, by default, Vuetable uses the `id` as the default one.

But if your data use (or has) different column name that can uniquely identify each row, you can specify that in the `track-by` property.

For example, your data uses `uuid` instead of `id` column, you can tell Vuetable to use it.
```html
<vuetable ref="vuetable"
  //...
  detail-row-component="my-detail-row"
  track-by="uuid"
></vuetable>
```

There are a number of methods that you can use to manipulate the detail row. Each of them requires a row identifier as an only parameter.
- [isVisibleDetailRow](../api/vuetable/methods.html#isvisibledetailrow)
- [showDetailRow](../api/vuetable/methods.html#showdetailrow)
- [hideDetailRow](../api/vuetable/methods.html#hidedetailrow)
- [toggleDetailRow](../api/vuetable/methods.html#hidedetailrow)

To call those methods, you can use `ref` tag, like so,
```javascript
this.$refs.vuetable.toggleDetailRow(rowId)
```
