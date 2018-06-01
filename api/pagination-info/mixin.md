# VuetablePaginationInfoMixin

## Properties

### css
- **type:** `Object`
- **default:** 
  ```js
  {
    infoClass: 'left floated left aligned six wide column'
  }
  ```
- **usage:**

  The `css` property holds most of the CSS classes that VuetablePaginationInfo uses in its template.
  
### info-template
- **type:** `String`
- **default:** `"Displaying {from} to {to} of {total} items"`
- **usage:**

  The template string to be used to display the pagination information.

  Available placeholders
  - `{from}` the starting record number displayed
  - `{to}` the ending record number displayed
  - `{total}` the total number of records available
  
### no-data-template
- **type:** `Object`
- **default:** `"No relevant data"`
- **usage:**

  The template string to be showned when there is no data to display.

## Data

### tablePagination
- **type:** `Object`
- **default:** `null`

  The pagination information received from Vuetable.

## Computed

### paginationInfo
- **params:** _none_
- **return:** `String`

  The actual pagination information to be displayed after replacing all the placeholders with corresponding values.

## Methods

### setPaginationData
- **params:**
  - tablePagination: `Object` -- pagination information
- **usage:**

  Setting the `tablePagination` data to be used when rendering pagination component.

### resetData
- **params:** _none_
- **usage:**

  This method will set `tablePagination` to null.

## Events

_None_
