# Sorting

::: warning 
This applies to [API mode](./api-vs-data-mode.md) only!
:::

If your API endpoint supports sorting, Vuetable can also automatically interact with it when you specify which column in the data is sortable.

To specify that a particular column is sortable, you add [`sortField`](./fields-definition.html#sortfield) option to the field definition object of that column.

```javascript
{
  name: 'email',
  sortField: 'email'  
}
```

The sortable column will be rendered with `.sortable` CSS class in the `<th>` and it will respond to the click to toggle between 
- setting the column as sort order if it was not the current sort order.
- toggle between ascending and descending if it is the current sort order.

What it does is Vuetable will send a new request to the server endpoint with `sort` parameter specifying which `sortOrder.field` and which `sortOrder.direction` it expects from the server. 

Here is the sample sort parameter in the query string.
```json
  http://api.example.com/users?sort=email|asc
```
where, `sort=email|asc` is the `sort` parameter constructed from the default sort order field `email` and the defualt sort direction `asc`. They are concatenated by a pipe character (`|`).

::: tip
The "sort" parameter key and the way its value constructs can be customized.  

- Use `query-params` prop to change the "key" name from `sort`.   
- Use `sort-params` to change the sort value format.  
:::

If your API endpoint uses different construct, you can override this behavior by supplying your own function to construct the sort parameter. See below for more info.

See also:
- [`query-params`](../api/vuetable/properties.html#query-params) prop
- [`sort-params`](../api/vuetable/properties.html#sort-params) prop

## Initial Sorting Order

To provide initial sorting order, use [`sort-order`](../api/vuetable/properties.html#sort-order) prop to specify the default sorting column.

```html
<vuetable
  //...
  :sort-order="sortOrder"
></vuetable>
```
```javascript
new Vue({
  //...
  data: {
    //...
    sortOrder: [
      {
        field: 'email',
        direction: 'asc'
      }
    ]
  }
})
```

::: warning
Note that the `sort-order` prop must be an array even if it is a single sort.
:::

See also:
- [`sort-order`](../api/vuetable/properties.html#sort-order)

## Multi-column Sorting

Multi-column sorting can be enabled by setting `multi-sort` prop value to `true`. 

Once enabled, the user can use Alt+Click (Option+Click on mac) to work with multi-column sorting feature. If you would like to use other key than the `alt`, use [`multi-sort-key`](../api/vuetable/properties.html#multi-sort-key) prop to specify one of the following value
- `alt` -- Alt / Option
- `ctrl` -- Ctrl / Control
- `meta` -- Window / Command
- `shift` -- Shift

See also:
- [`multi-sort`](../api/vuetable/properties.html#multi-sort)
- [`multi-sort-key`](../api/vuetable/properties.html#multi-sort-key)

## Overriding the Sort Query String

You can override how the sort parameter in the  query string is constructed by assigning a function to [`sort-params`](../api/vuetable/properties.html#sort-params) prop. The function will receive the current array of [`sortOrder`](../api/vuetable/properties.html#sort-order) as a parameter, and it must return a string value for the `sort` query string.

```vue
<template>
  <vuetable 
    api-url="..."
    :fields="fields"
    :sort-params="getSortParam"
  ></vuetable>
</template>
//
// If
//      sortOrder = [
//          { field: "gender", direction: "desc"},
//          { field: "name", direction: "asc"},
//      ]
// This will return
//      '-gender,name'
//
<script>
  //..
  methods: {
    getSortParam(sortOrder) {
      return sortOrder.map(function(sort) {
        return (sort.direction === 'desc' ? '-' : '') + sort.field
      }).join(',')
    }
  }
</script>
```

See also:
- [`sort-params`](../api/vuetable/properties.html#sort-params)
- [`sortOrder`](../api/vuetable/properties.html#sort-order)

## Styling the Sortable Columns

By default, if you specify the [`sortField`](./fields-definition.html#sortfield) in field definition object, the field will have a "sortable" CSS class in its `<th>` tag.

You can style this "sortable" class the way you want. For example, when the user hover the mouse over a "sortable" field, it changes the foreground color.

```css
.vuetable th.sortable:hover {
  color: #2185d0;
  cursor: pointer;
}
```

## Displaying Sort Icon on Sortable Columns

If you prefer, Vuetable also allow you to display the sort icon (something similar to this <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAD8SURBVGhD7ZlBCsIwEEUD7jyDS7d6FO/hhbyHV/EK7t25E3Q+ZKCENGQWNpPhP3hQ2miTRZ8pJkIIIcQ55+zUHMRnFsdTshcf4jeLY5ybip14F3URKs7h2jTcxHIRKq5NwVWsLWApxrjmIn7E2uSXYgzGuuQkvsXaxGtiLD7jCs1sbcItXWW5zKxVF1ley6zV4VluZdbqsCz3ZNbq5lnuzazVTbN8FFGb15/Ed+MehJDBhHrYQ+RXCfGDqITYooAwm0YQYhuvhHixUkK86iq9WR6SWSs9WR6WWSutLA/NrJW1LLvIrJUyy64ya0Wz7DKzVkL80UMIISQyKf0AWdNsAKC3OjwAAAAASUVORK5CYII=" style="width:20px;margin-bottom:-5px">) on sortable fields.

To display sort icon, you have to 
- enable it by `:show-sort-icons="true"`
- set the CSS related properties in the [`css`](../api/vuetable/properties.html#css) prop
  - `sortableIcon` -- sort icon
  - `ascendingIcon` -- ascending sort icon when the field is currently sorted in ascending order
  - `descendingIcon` -- descending sort icon when the field is currently sorted in descending order
  - `ascendingClass`  
    class name to be inserted to `<th>` when the field is currently sorted in ascending order, otherwise, the class name is removed.
  - `descendingClass` 
    class name to be inserted to `<th>` when the field is currently sorted in descending order, otherwise, the class name is removed.

See [`css`](../api/vuetable/properties.html#css) prop for more detail.

## Overriding Default Query String

By default, Vuetable uses the following key in the query string that will be sent to the server.
- `sort` -- its value will contain the requested sort order
- `page` -- its value will contain the requested page number
- `per_page` -- its value will contain the requested records per page

If you're making your own API backend, you can just use this default. 

But if you're using someone's else API or you already have your own existing API that do not correspond to this. You can tell Vuetable what key it should be using instead, by supplying it via [`query-params`](../api/vuetable/properties.html#query-params) property.

Here is the default value of `query-params` property.
```javascript
{
  sort: 'sort',
  page: 'page',
  perPage: 'per_page'
}
```

Suppose your API uses `sort_order`, `page_no`, and `page_size`, you can easily tell Vuetable to use them like so,
```html
<vuetable
  //...
  :query-params="{ sort: 'sort_order', page: 'page_no', perPage: 'page_size' }"
></vuetable>
```

You can also completely override how the query string is constructed by assigning a function to `query-params` instead.

The function will receive 3 parameters which are
- array of current sort order
- current page number
- current page size

The function **must** return an object of key-value pairs. Here is an example.

```vue
<template>
  <vuetable
    //...
    :query-params="makeQueryParams"
  ></vuetable>
</template>

<script>
export default {
  //...
  methods: {
    makeQueryParams (sortOrder, currentPage, perPage) {
      return {
        sortBy: sortOrder[0].field,
        sortOrder: sortOrder[0].direction,
        pageNo: currentPage,
        pageSize: perPage
      }
    }
  }
}
</script>
```

See also:
- [`query-params`](../api/vuetable/properties.html#query-params) prop
