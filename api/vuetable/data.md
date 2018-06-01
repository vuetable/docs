---
sidebarDepth: 2
---
# Vuetable Data

## eventPrefix
- **type:** `String`
- **default:** `vuetable:`
- **usage:**

  The event prefix that Vuetable is going to use when emitting the event.

## tableFields
- **type:** `Array`
- **default:** `[]` _(empty array)_
- **usage:**

  The normalized version of fields definition. This is done during the `created` hook.

## tableData
- **type:** `Array`
- **default:** `null`
- **usage:**

  In `api-mode`, this stores the data that returned from the server after the sucessful AJAX request. Otherwise,
  it stores the data assigned to via `data` prop or `setData` method. Vuetable always use `tableData` for table
  rendering.

## tablePagination
- **type:** `Object`
- **default:** `null`
- **usage:**

  If the data returned from the server contains pagination information specified in the `pagination-path`, this is where it gets stored.

## currentPage
- **type:** `Number`
- **default:** `1`
- **usage:**

  Vuetable use this to keep track of the current page being diplayed.

## selectedTo
- **type:** `Array`
- **default:** `[]` _(empty array)_
- **usage:**

  When `__checkbox` field option is used and the user selected/unselected any checkbox, its row indentifier is either stored in or remove from here. The row identifier can be specified using `track-by` option.

## visibleDetailRows
- **type:** `Array`
- **default:** `[]` _(empty array)_
- **usage:**

  This stores the row identifier of any row where its detail row is visible.

