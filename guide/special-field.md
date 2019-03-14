# Special Field

Special field is an extension to normal fields. It is not part of your data structure, but instead is a slot or component that you defined to handle your data in a special way.

The following are two types of special field in Vuetable.
- Field Slot
- Field Component

## Field Slot

Field Slot makes it very easy to customize field rendering in Vuetable.

You can use Field Slot by defining a named [scoped slot](https://vuejs.org/v2/guide/components-slots.html#Scoped-Slots) inside Vuetable tag (as a child element), then, use that slot name in the [`name`](./fields-definition.html#name) option of the field definition object. Vuetable will automatically looking for the scoped slot of that name and use it as a column.

Here is an example,

```html{5}
<vuetable ref="vuetable"
  api-url="..."
  :fields="fields"
>
  <template #genderSlot="{ rowData }">
    <span v-if="rowData.gender === 'M'" class="ui teal label"><i class="large man icon"></i>Male</span>
    <span v-else class="ui pink label"><i class="large woman icon"></i>Female</span>
  </template>
</vuetable>
```

```javascript
new Vue({
  data: {
    fields:     [
      //...
      {
        name: "__slot:genderSlot",
        title: '<i class="grey heterosexual icon"></i>Gender',
        titleClass: "center aligned",
        dataClass: "center aligned",
        width: "15%",
      },
    ]
    //...
  }
})
```

## Field Component

Field Component is unique to Vuetable and it is a crucial part in making it extensible and sharable. 

It is responsible for rendering both the table header `<th>` and table data `<td>` column.

The component will either be called by `VuetableRowHeader` component to render the table header of each field (by passing `:is-header="true"`), or `Vuetable` itself to render the table column data of the field. 

::: warning
The table column data rendering might soon become another component in the near future, but this shouldn't affect Field Component structure, hopefully.
:::

Here is the structure of the single file component (SFC) to help you getting started in creating Field Component for Vuetable.

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

See [Creating Field Component](./creating-field-component.md) section for more detail.

## Which One to Use?

Naturally, you may not need either Field Slot nor Field Component at the begining. But when you feel that [`formatter`](./fields-definition.html#formatter) is not enough or limited your
ability, Field Slot might be the next step. And when you find that you always
have to repeat yourself with Field Slot too often, it might be the time for
Field Component.

To summarize,
- Use [`formatter`](./fields-definition.html#formatter) function in field definition object first.
- Then, use Field Slot if you need more customization.
- Then, use Field Component if you need to do the same thing more than once or in more than one place.

See also:
- [`formatter`](./fields-definition.md#formatter) option

### Why Field Slot Cannot Render Table Header?

Vuetable loops through fields definition to render each column using `v-for` directive and it is required that `key` attribute be used. However, this `key` attribute cannot be used on slot; otherwise, Vue will throw this error.
```
`key` does not work on <slot> because slots are abstract outlets and can possibly expand into multiple elements. Use the key on a wrapping element instead.
```

