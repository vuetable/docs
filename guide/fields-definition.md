# Fields Definition

Fields definition is an array of field definition object describing which field of the data you want Vuetable to generate to HTML table. It also has various options to let you take full control of how the field data would be displayed.

Fields definition can be defined as simple array of string, array of (field definition) object, or the mix.

- Fields defined as simple array

  ```javascript
  let fields = ['name', 'email', 'birthdate', 'gender']
  ```

- Fields defined as array of object
  ```javascript
  let fields = [
    {
      name: 'name',
      sortField: 'name'
    },
    {
      name: 'email',
      title: 'Email Address'
    },
    {
      name: 'birthdate',
      sortField: 'birthdate',
      titleClass: 'center aligned',
      dataClass: 'center aligned',
    },
    {
      name: 'gender',
      sortField: 'gender',
      titleClass: 'center aligned',
      dataClass: 'center aligned',
      formatter (value) {
        return value === 'M' ? 'Male' : 'Female'
      }
    },
  ]
  ```

- Fields defined as array of the mix
  ```javascript
  let fields = [
    'name',
    'email',
    {
      name: 'birthdate',
      sortField: 'birthdate',
      titleClass: 'center aligned',
      dataClass: 'center aligned',
    },
    {
      name: 'gender',
      sortField: 'gender',
      titleClass: 'center aligned',
      dataClass: 'center aligned',
      formatter (value) {
        return value === 'M' ? 'Male' : 'Female'
      }
    },
    //...
  ]
  ```

  During the initialization, Vuetable will convert each field to field definition object containing a number of options with their default values.

  ::: warning
  When you define a field as a simple string, that string will be used in the `name` option indicating the field name in your data structure you want to use. You will not be able to specify other options, e.g. sort, formatter, etc.
  :::

  ```javascript
  let fields = ['name']
  // will be converted to this
  // let fields = [ { name: 'name' } ]
  ```

  You can start with an array of string to get started very quickly, then progressively adding other options later.

## Field options
### name

- Type: `String | ComponentDefinition`

- Usage:

  Name of the data field to be displayed or Vue Component definition.

  The name can also be the name of a *globally* registered [Field Component](./special-field.md#field-component), a Field Component definition, or a slot name defined inside `<vuetable>` tag.

  If the name is of type `String`, Vuetable to check in the following order:
  - if the name is begins with `__` (double underscore) or `vuetable-fields-` ([`fieldPrefix`]()), then it is a Field Component.
  - if there is a scoped slot of that name defined inside `<vuetable>` tag, then it is a Field Slot
  - otherwise, it defaults to column name in the data

  See example on [CodeSandbox](https://codesandbox.io/s/2wnmr98m1p?codemirror=1&module=%2Fsrc%2Fcomponents%2FFieldsDef.js&view=editor)

- See also:
  - [Special field](./special-field.md)
  
### sortField

- Type: `String`

- Usage:

  Usually, it will be the same as `name` option. But you can specify different value if
  you use different field name when querying data on the server side, e.g. firstname.

  If specified, the field will be marked as `sortable`. Vuetable will display appropriate
  clickable icon after the field title. Vuetable will also make a new request to the server with the `sort=<sortField>` query string appended.

  See example on [CodeSandbox](https://codesandbox.io/s/k04mjwq5jo)

### title

- Type: `String | Function`

- Usage:

  If you would like to specify the title yourself, you can put it in here. Otherwise, `vuetable` will try to guess it from the `name` option instead.

  You can even put the icon class in the title, see example below
  ```javascript
  //.. example using Semantic UI icon class
  {
    name: 'birthdate',
    title: '<i class="orange birthday icon"></i> Birthdate'
  }
  //
  ```

  If it is a function, Vuetable will call it and use the returned value as the column title. This is useful for i18n to return localized text version.

  See example on [CodeSandbox](https://codesandbox.io/s/2wnmr98m1p?codemirror=1&module=%2Fsrc%2Fcomponents%2FFieldsDef.js&view=editor), [i18n example](https://codesandbox.io/s/wo5nmm24m7?module=%2Fcomponents%2FFieldsDef.js)

### titleClass

- Type: `String`

- Usage:

  The css class you would like to apply for the title of this field.

  See example on [CodeSandbox](https://codesandbox.io/s/5412x8530n?module=%2Fsrc%2Fcomponents%2FMyVuetable.vue)

### dataClass

- Type: `String`

- Usage:

  The css class you would like to apply for the data of this field.

  See example on [CodeSandbox](https://codesandbox.io/s/5412x8530n?module=%2Fsrc%2Fcomponents%2FMyVuetable.vue)

### formatter 

- Type: `Function`

- Usage:

  The formatter function to be called by Vuetable to format the value of the column
  to be displayed. 
  
  ::: tip Note
  This is almost the same as the `callback` option in previous verison of Vuetable-2. It was renamed to `formatter` to better indicate its purpose.
  :::

  The formatter function will receive the following parameters from Vuetable, and it must return the value that Vuetable will use to display in that column.
  - `value` -- value of the field
  - `vuetable` -- a reference to Vuetable itself   
    This makes it possible to separate the fields definition to a separate file while still allowing it to have access to Vuetable functionality when needed.

  Here is the example of a field defining a formatter function.
  ```js{5,10,16}
  // define as a function reference.
  // in this case, function `gender` must be defined in the `methods` section.
  {
    name: 'gender',
    formatter: gender
  }
  // or, a reference to a function defined in other place
  {
    name: 'gender',
    formatter: Util.formatGender
  }

  // define as inline function
  {
    name: 'gender',
    formatter: (value) => (value === 'M') ? 'Male' : 'Female'
  }
  ```

  In this case, if the `value` of the `gender` field gets passed to the formatter function is `M`, it will return `Male`. Vuetable will display `Male` for this field instead of `M`.
  
  See example on [CodeSandbox](https://codesandbox.io/s/13519rxo94?module=%2Fsrc%2Fcomponents%2FMyVuetable.vue)

### visible

- Type: `Boolean`

- Usage:

  Whether this field should be visible or hidden when rendering the table. 

### width

- Type: `String`

- Usage:

  The width of the column, e.g. '200px', '10%', '2rem'. 
  
  The given value will be applied to the specified field on both table header and data.

  See example on [CodeSandbox](https://codesandbox.io/s/13519rxo94?module=%2Fsrc%2Fcomponents%2FMyVuetable.vue)

  ::: tip
  When using fixed header feature of Vuetable, you should always set the width for each field as it will make the column table looks more consistent.
  :::
 
### $_index

- Type: `Number`
- Usage:

  The `$_index` option gets inserted automatically by Vuetable to indicate the position of the field in Fields defintion array. This can be useful when using Vuetable's function to hide/show specific fields as it requires the index position of the field.

## Referencing Nested JSON Data

If the JSON data structure contains nested objects, eg:
```json{7-12}
[
  {
    "id": 1,
    "name": "xxxxxxxxx",
    "email": "xxx@xxx.xxx",
    "group_id": 1,
    "address" {
      "street_address":"123 abc place",
      "city":"townsville",
      "province":"Harbor",
      "country":"Antegria"
    }
  }
    .
    .
    .
  {
    "id": 50,
    "name": "xxxxxxxxx",
    "email": "xxx@xxx.xxx",
    "group_id": 3,
    "address" {
      "street_address":"456 xyz street",
      "city":"cityville",
      "province":"Portia",
      "country":"Norland"
    }
  }
]
```
In this case, the column names of nested objects can be specified in the following format:

```javascript
let columns = ['name', 'email', 'address.city', 'address.country']
```

### Attaching other data to Field Definition Object

You can use field definition object to store any key-value data specific to each field. Vuetable only use the options described above. The rest will be copied into [`tableFields`](../api/vuetable/data.html#tablefields) (internal array of field definition objects).

::: tip
When Vuetable passes the `field` object to Field Component or Field Slot, those additional key-value data will also be available for any usage.
:::

See example on [CodeSandbox](https://codesandbox.io/s/7zkrn4lvz0?module=%2Fsrc%2Fcomponents%2FVuetableFieldSwitch.vue)
