# VuetablePaginationMixin

This mixin provides sliding style pagination functionality where the current page (when not at the first or last position) is always in the middle of pagination list.

## Properties

### css
- **type:** `Object`
- **default:**
  ```js
  {
    wrapperClass: 'ui right floated pagination menu',
    activeClass: 'active large',
    disabledClass: 'disabled',
    pageClass: 'item',
    linkClass: 'icon item',
    paginationClass: 'ui bottom attached segment grid',
    paginationInfoClass: 'left floated left aligned six wide column',
    dropdownClass: 'ui search dropdown',
    icons: {
      first: 'angle double left icon',
      prev: 'left chevron icon',
      next: 'right chevron icon',
      last: 'angle double right icon',
    }
  }
  ```
- **usage:**

  The `css` property holds most of the CSS classes that VuetablePagination uses in its template.

### on-each-side
- **type:** `Number`
- **default:** `2`
- **usage:**

  The value of this property specifies the slide size on each side of the center.

### first-page
- **type:** `Number`
- **default:** `1`
- **usage:**

  First page number. Set this prop to 0 for zero based pagination.

## Computed

### totalPage
- **return:** `Number`
- **usage:**

  The total number of available pages. This value is taken from the `last_page` field of pagination information.

### lastPage
- **return:** `Number`
- **usage:**

  The last page number.

### isOnFirstPage
- **return:** `Boolean`
- **usage:**

  Returns `true` if the current page number is the first page; otherwise, returns `false`.

### isOnLastPage
- **return:** `Boolean`
- **usage:**

  Returns `true` if the current page number is the last page; otherwise, returns `false`.

### notEnoughPages
- **return:** `Boolean`
- **usage:**

  Determine if the total number of pages is enough to be displayed without sliding.

### windowSize
- **return:** `Number`
- **usage:**

  The size of the sliding window calculating from `on-each-side` * 2 + 1.

### windowStart
- **return:** `Number`
- **usage:**

  Return the first page number to be shown on the leftmost.

## Data
### tablePagination
- **type:** `Object`
- **default:** `null`

  The pagination information received from Vuetable.

## Methods

### isCurrentPage
- params:
  - page: `Number`
- **usage:**

  Determine if the given page number is the current page.

### setPaginationData
- params:
  - tablePagination: `Object` -- pagination information
- **usage:**

  Setting the `tablePagination` data to be used when rendering pagination component.

### resetData
- params: _none_
- **usage:**

  This method will set `tablePagination` to null.

## Events

### vuetable-pagination:change-page
- **type:** _emit_
- payload:
  - page: `Number | String`
- **usage:**:

  This event was fired when the user clicks on any pagination item requesting data for that given page number.
