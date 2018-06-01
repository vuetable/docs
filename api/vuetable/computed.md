# Vuetable - Computed Properties

## countTableData
- **return:** `Number`
- **usage:**

  Return the number of rows for the current data or zero (0) if the `tableData` is `null`.

## countVisibleFields
- **return:** `Number`
- **usage:**

  Return the number of visible fields in the table by checking the field's `visible` option.

## displayEmptyDataRow
- **return:** `Boolean`
- **usage:**

  Determine if Vuetable should display empty data row message.

## lessThanMinRows
- **return:** `Boolean`
- **usage:**

  Determine if the number of data rows available is less than the number specified in `min-rows` prop.

## blankRows
- **return:** `Number`
- **usage:**

  Return the number of blank rows that Vuetable needs to render. If the number of row data is greater than
  or equal to `min-rows`, it returns 0.

## useDetailRow
- **return:** `Boolean`
- **usage:**
  
  Determine if detail row should be rendered by inspecting the availability of the data and various properties.
  
## isApiMode
- **return:** `Boolean`
- **usage:**

  Determine if Vuetable is currently in API mode.

## isDataMode
- **return:** `Boolean`
- **usage:**

  Determine if Vuetable is currently in Data mode.
  