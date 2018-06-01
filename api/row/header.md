# VuetableRowHeader

`VuetableRowHeader` component is responsible for rendering all the table header columns using the field definition object of each field. It also handles interaction when the user click on the column header by calling appropriate function to do sorting (single or multi-sort).

Vuetable specifies `VuetableRowHeader` component as a default header component in the [`header-rows`](../vuetable/properties.md#header-rows) prop.

## Components

By default, it registers some Field Components to provide backward compatibility with earlier version of Vuetable.

It will also toggles `VuetableColGutter` when using Vuetable with Fixed Header.

- [VuetableFieldCheckbox](../field/checkbox/checkbox.md)
- [VuetableFieldHandle](../field/handle.md)
- [VuetableFieldSequence](../field/sequence.md)
- [VuetableColGutter](../col/gutter.md)

## Methods
### stripPrefix
- **params:**
  - name: `String`
- **returns:** `String`
- **usage:**

  This function will remove the prefix as set in the Vuetable's `field-prefix` prop from the given parameter.

### headerClass
- **params:** 
  - base: `String`
  - field: `Object`
- **returns:** array of `String`
- **usage:**

  This function generates CSS classes for the given field.

### toSnakeCase
- **params:**
  - str: `String`
- **returns:** `String`
- **usage:**

  This function will return the snake-case version of the given parameter.

### sortClass
- **params:**
  - field: `Object`
- **returns:** `String`
- **usage:**

  This function generates specific ascending/descending CSS class for the sortable field. This gives you more control on the appearance of the sortable field.

  See all:
  - `css.ascendingClass`
  - `css.descendingClass`

### sortIcon
- **params:**
  - field: `Object`
- **returns:** `String`
- **usage:**

  This function generates specific ascending/descending CSS class for icon in sortable field.

  See all:
  - `css.ascendingIcon`
  - `css.descendingIcon`

### isInCurrentSortGroup
- **params:**
  - field: `Object`
- **returns:** `Boolean`
- **usage:**

  This function checks if the given field is in the current sort group.

  See also:
  - `sort-order` prop

### hasSortableIcon
- **params:**
  - field: `Object`
- **returns:** `Boolean`
- **usage:**

  This function checks whether the given field has sortable icon defined.

  See also:
  - `css.sortableIcon`


### currentSortOrderPosition
- **params:**
  - field: `Object`
- **returns:** `Number` or `false`
- **usage:**

  This function returns the position index in the current sort order if the field is in the sort order, otherwise, returns false.

  See also:
  - `sort-order` prop

### renderTitle
- **params:**
  - field: `Object`
- **returns:** `String`
- **usage:**

  This function returns a complete title consisting of sort icon. In case of multiple sort, a proper opacity of the sort icon is also generated via `sortIconOpacity` function.

### getTitle
- **params:**
  - field: `Object`
- **returns:** `String`
- **usage:**

  This function returns a proper title defined in field definition object. If the defined title is a function, it will call the function and use the returned result. If the title is not defined, it will return the field name instead.

### sortIconOpacity
- **params:**
  - field: `Object`
- **returns:** `Number`
- **usage:**

  This function calculates the opacity of the sort icon of the given field in the multi-column sorting. The opacity value will vary according to the sort position, the first one will be the most opaque and the subsequence position will have more opacity. 

### renderIconTag
- **params:**
  - classes: array of `String`
  - options: `String`
- **returns:** `String`
- **usage:**

  This function will generate icon tag using the default `<i>` tag or the one returned by the `css.renderIcon`if it is defined.

### onColumnHeaderClicked
- **params:**
  - field: `Object`
  - event: `Event`
- **returns:** `none`
- **usage:**

  This function will be called when the user click on the column header and it will call Vuetable's `orderBy` function to handle the sorting accordingly.


