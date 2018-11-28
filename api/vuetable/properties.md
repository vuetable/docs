---
sidebarDepth: 2
---
# Vuetable Properties

## api-mode

- **type:** `Boolean`

- **default:** `true`

- **usage:**

  By default, Vuetable will request the data from an API endpoint specified in `api-url`.

  However, you can instruct Vuetable to use your existing data instead by setting `api-mode` to `false` (also known as "**Data mode**"). Then, Vuetable will look for the data in the `data` prop.

  The data you supply to `data` prop must be of the JSON structure that Vuetable can work with. Please see [JSON Data Structure] for more detail.

  Please note that disabling `api-mode` (by setting it to `false`)
  will also **disable** all API related functionalities, like sorting, filtering, etc. But you can use `data-manager` prop to define the data manager function that can perform those functionalities to the data before Vuetable is using it.

  ::: tip Note
    Setting `api-mode` to `false` is not recommended. It will not scale well when you have to handle a large dataset   yourself instead of letting database manager at the backend handles it for you.
  :::

- See also:
  - [JSON Data Format](../../guide/json-data-format.html)
  - [`data-manager`](#data-manager) prop
  - [`transform`](#transform) prop

## api-url
- works in _API mode_ only
- **type:** `String`
- **default:** `''` _(empty string)_
- **usage:**

  The URL of the api endpoint that Vuetable will interact with.

  If the API supports sorting, filtering, pagination of the data,
  Vuetable can automatically append appropriate information to the server via query string.

  ::: tip Note
  Vuetable does not do sort or know how to sort your data. It is just a presentation layer of your data returned from the server side (API endpoint).

  In API mode, your API endpoint must be able to accept sort options; otherwise, the sorting will not work. Vuetable can send appropriate request with sort option when the user interacts with it. See [Sorting] for more detail.

  In Data mode, you, as a developer, are responsible for sorting the data using any mechanism of your choice and then supply that sorted data to Vuetable to display.
  :::

- See also:
  - [Sorting](../../guide/sorting.html)
  - [Pagination](../../guide/pagination.html)
  - [`query-params`](#query-params) prop

## append-params
- works in _API mode_ only
- **type:** `Object`
- **default:** `{}` _(empty object)_
- **usage:**

  Additional parameters that Vuetable should append to the query string when requesting data from the server.

- See also:
  - [TODO]: Appending Other Parameters to the Query String

## css
- **type:** `Object`
- **default:** `{}` (empty object)
- **usage:**

  This is where you should override the CSS classes that Vuetable uses to render HTML table that should help you style the table to your needs.

- See also:
  - [CSS Styling](../../guide/css-styling.html)

## data
- works in _Data mode_ only
- **type:** `Array` | `Object`
- **default:** `null`
- **usage:**

  The data that Vuetable will be used to render the table when `api-mode` is set to `false`.

  ::: warning
  You can utilize the pagination functionality of Vuetable if the `data` you supplied is an object that has data structure as described in [Data Format](https://github.com/ratiw/vuetable-2/wiki/Data-Format-(JSON)).
  :::

## data-manager
- works in _Data mode_ only
- **type:** `Function`
- **default:** `null`
- **usage:**

  See explanation [here](../../guide/api-vs-data-mode.md#data-mode).


## data-path
- works in _API mode_ only
- **type:** `String`
- **default:** `data`
- **usage:**

  The path inside the data structure that contains actual the data.

  ::: tip
  If the data is at the root of the structure, set
  this prop to empty string, e.g. `data-path=""`.
  :::

## detail-row-component
- **type:** `String`
- **default:** `''` _(empty string)_
- **usage:**

  A component name to be used as the content of detail row to be displayed underneath the current row.

## detail-row-transition
- **type:** `String`
- **default:** `''` _(empty string)_
- **usage:**

  The CSS class to apply to detail row during transition.

## detail-row-class
- **type:** `String`
- **default:** `vuetable-detail-row`
- **usage:**

  The CSS class to apply to the detail row.

## detail-row-options
- **type:** `Object`
- **default:** `{}` _(empty object)_
- **usage:**

  Object to be passed to the detail row component as `options` prop.

## event-prefix

## fields
- **type:** `Array`
- **default:** _none_
- required: _true_
- **usage:**

  Array of field definition that Vuetable will be used to map to the data structure in order to render the table for presentation.

- See also:
  - [Fields Definition](../../guide/fields-definition.html)

## field-prefix
- **type:** `String`
- **default:** _"vuetable-field-"_
- **usage::**

  Default component name prefix of the Feild component used in Vuetable.

  The `__` characters in field name of field definition serve as a shorthand for Field component to be used for the given column. The shorthand will be replaced with the given prefix during initialization of Vuetable.

- See also:
  - [Field component](../../guide/special-field.html#field-component)

## first-page
- works in _API mode_ only
- **type:** `Number`
- **default:** _`1`_
- **usage:**

  First page number. Set this prop to 0 for zero based pagination.

  If the first page of your API endpoint is `0`, you can use this prop to set it.


## header-rows
- **type:** `Array`
- **default:** _['VuetableRowHeader']_
- **usage:**

  Array of row header components to be rendered as table header.

- See also
  - [Multi-Row Header](../../guide/multirow-header.html)

## http-fetch
- works in _API mode_ only
- **type:** `Function`
- **default:** `null`
- **usage:**

  Allow specifying external HTTP request function to fetch the data via AJAX.

  If `null`, Vuetable will fallback to using `axios` internally.

  If specified, Vuetable will call the given function passing `apiUrl` and already constructed `httpOptions` to the function.

  ::: warning
  Vuetable would expect the given function to make an AJAX call to the `apiUrl` with the `httpOptions` and return a [_Promise_](https://developer.mozilla.org/th/docs/Web/JavaScript/Reference/Global`Objects/Promise). Vuetable would then handle the success or failure of the AJAX call after the Promise has been resolved.
  :::

  See `loadData` and `fetch` methods in `Vuetable.vue` source code if you're confused.

  Here's an example using `vue-resource`
  ```js
    //...
    myFetch(apiUrl, httpOptions) {
      return Vue.$http.get(apiUrl, httpOptions)
    },
    //...
  ```

## http-method
- works in _API mode_ only
- **type:** `String`
- **default:** `get`
- **usage:**

  Only support `get` or `post` method. Please note that it must be the __lowercase__ string.

## http-options
- works in _API mode_ only
- **type:** `Object`
- **default:** `{}` _(empty object)_
- **usage:**

  Allow passing additional options to the server during AJAX call. Internally, Vuetable uses [`axios`](https://github.com/mzabriskie/axios)
  to handle AJAX request.

## initial-page
- works in _API mode_ only
- **type:** `Number`
- **default:** `1`
- **usage:**

  The initial page number of data to be requested the first time Vuetable is loaded.

## load-on-start
- works in _API mode_ only
- **type:** `Boolean`
- **default:** `true`
- required: _true_
- **usage:**

  Whether Vuetable should immediately load the data from the server after finish initialization.

## min-rows
- **type:** `Number`
- **default:** `0`
- **usage:**

  The minimum number of rows that should be displayed when rendering the table.

  If the number of row available is less than the number specified in `min-rows` prop, Vuetable will render empty table rows to
  satisfy that minimum rows.

## multi-sort
- works in _API mode_ only
- **type:** `Boolean`
- **default:** `false`
- **usage:**

  Enable multiple sort columns interaction.

  When this is enabled, user can press a modifier key (specified in `multi-sort-key` prop) to do subsequent sorting of the sort result.

  ::: tip Note
  In multi-sort mode, the sort icon in subsequent sort column will appear dimmer to indicate the level of sorting.
  :::

## multi-sort-key
- works in _API mode_ only
- **type:** `String`
- **default:** `alt`
- possible values: `alt`, `ctrl`, `shift`, `meta`
- **usage:**

  The key to trigger column adding/subtracting when multi-sort is enabled.

## per-page
- works in _API mode_ only
- **type:** `Number`
- **default:** `10`
- **usage:**

  The number of data to be requested per page.

## query-params
- works in _API mode_ only
- **type:** [`Object`, _Function`]
- **default:**
  ```
  {
    sort: 'sort',
    page: 'page',
    perPage: 'per_page'
  }
  ```
- **usage:**

  The text to be used as keys in query string that will be sent to the server. If your API endpoint uses different keys, you can
  specified them via this prop.

  When you set `query-params` prop as a _Function`, you can completely override the behevior of `query-prams` prop on how the query string is constructed.

  Vuetable will pass the following parameters to the given function:
  - `sortOrder` -- the current sort order
  - `currentPage` -- the current display page
  - `perPage` -- the current page size

  The function must return an object containing key-value pair(s) to be constructed as query string; otherwise, and **empty object** `{}` will be returned instead.

- See also:
  - [Overriding Default Query String](../../guide/sorting.html#overriding-default-query-string)

## reactive-api-url
- works in _API mode_ only
- **type:** `Boolean`
- **default:** `true`
- **usage:**

  This tells Vuetable whether it should watch for the change in `api-url` prop and refresh the data automatically.

## row-class
- **type:** `String`, `Function`
- **default:** `''` _(empty string)_
- **usage:**

  The CSS class name that will be applied to each table row.

  If `row-class` prop is a _Function`, Vuetable will automatically call the given function on each row, passing the row data and row index to it. Vuetable will then use the returned string from the given method as CSS class for that row.

  Here is the example on using a method to return the row class for styling.
  ```vue
  <template>
    <vuetable>
      :row-class="onRowClass"
    ></vuetable>
  </template>
  <script>
    //..
    methods: {
      onRowClass (dataItem, index) {
        return (dataItem.isOverdue) ? 'color-red' : 'color-white'
      }
    }
  </script>
  ```

## show-sort-icons
- **type:** `Boolean`
- **default:** `true`
- **usage:**

  This tells Vuetable whether or not icons should be added to `th` elements whenever a given column is sortable.

## sort-order
- works in _API mode_ only
- **type:** `Array`
- **default:** `[]` _(empty array)_
- **usage:**

  The default sort order that Vuetable should use when requesting the data from server.

## sort-params
- works in _API mode_ only
- **type:** `Function` that returns `String`
- **default:** `null`
- **usage:**

  If assigned, this function will be called by Vuetable passing the current sort orders array as a parameter. You can use it to override how the sort parameters are constructed as part of the query string that will be sent to the API endpoint.

  The function must return a string to be included in the query string of API request.

## no-data-template
- **type:** `String`
- **default:** `''` _(empty string)_
- **usage:**

  Text to be displayed when there are no records in the table. It also support HTML.

  The text will be inserted into a `td` which is spaned the whole row.

## pagination-path
- works in _API mode_ only
- **type:** `String`
- **default:** `links.pagination`
- **usage:**

  The pagination path inside the data structure that contains the pagination information.

  If the your data from the server does not have pagination metadata, you should set the prop to empty string, e.g. `pagination-path=""`, to suppress warning from Vuetable.

## table-height
- **type:** `String`
- **default:** `null`
- **usage:**

  Fix the height of table body.

  When set, the height of the body of Vuetable will be set at the given value and vertical scrollbar will appear automatically when the content of table body is longer than the given value.

  The value can be any unit valid in HTML.

  ::: warning
  You must also set the width of each column in fields definition when you specify the height of table, otherwise, the width of the each column in the header and in the body will not look the same.

  Because Vuetable renders table header and table body as separate tables.
  :::

## track-by
- **type:** `String`
- **default:** `id`
- **usage:**

  The key that uses to unqiuely identified each row in the data array to help track the state of detail row and checkbox
  features of Vuetable. This is necessary for the detail row and checkbox features to function correctly.

  For detail row, whenever the user clicks to expand the detail row, Vuetable will insert the `id` of that row into
  its internal array (`visibleDetailRows`). And when that detail row is hidden, the `id` of that detail row is removed from
  the array.

  For checkbox, when the user selects (checked) a row, Vuetable will insert the `id` of the row into its internal
  array (`selectedTo`). And when that row is unselected (unchecked), the `id` of that row is removed from the array.

- See also:
  - [`visibleDetailRows`](./data.html#visibledetailrows)
  - [`selectedTo`](./data.html#selectedto)

## transform
- works in _API mode_ only
- **type:** `Function`
- **default:** `null`
- **usage:**

  A function that allows the user to programmatically transform the receiving data into the one can Vuetable can works with.

  When defined, the given function will be called whenever Vuetable recieves the requested data from the server, before the data are displayed. This provides a hook to manipulate the data that developer might have control over its format, transforming the data into the format that Vuetable can be used.

  The function will receive the raw data returned from the server as its parameter. It must returns the already transformed data; otherwise, the table might appear as empty.

- See also:
  - [JSON Data Format](../../guide/json-data-format.html)
