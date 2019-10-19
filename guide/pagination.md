# Pagination

Vuetable comes ready with two pagination components and a pagination information component which you can extend to easily build your own.
- [VuetablePagination](../api/pagination/pagination.html)
  It is implemented as a sliding window which displays only a certain number of pages with buttons to jump to the first page, previous page, next page, and the last page.
  ```
  [First][Prev][1][2][3][4][5][Next][Last]
  ```
  ::: tip
  number of sliding pages = onEachSide * 2 +1
  :::

- [VuetablePaginationDropdown](../api/pagination/dropdown.html)
  It is implemented as a dropdown button showing the current page. User can click the dropdown to select the page. It also has previous page button and next page button on its side. This pagination component is designed to take less space.
  ```
  [Prev][ Page 1 ▼ ][Next]
  ```

This is possible because they are all built on top of the `VuetablePaginationMixin`, which contains most of the pagination logic. So, you just provide the template that embedded pagination functionality from this mixin.

And this is exactly what happens with `VuetablePagination` component. If you look at the [source code]() of the component, you'll see that it only contains the template. All the methods and props are in fact inside the mixin.

For `VuetablePaginationDropdown`, it only uses the mixin, but also adds its own prop and event.

## Zero Based Pagination

In some system, the first page starts at 0 (zero) and the second page starts at 1, and so on. In that case, you can use [`first-page`]() prop to set it to `0`. So when Vuetable requests the first page from the API endpoint, it will request page `0` instead.

```js
  <vuetable
    api-url="..."
    :first-page="0"
  ></vuetable>
```


## Binding Pagination Component to Vuetable

In order for the Vuetable's compatible pagination component to work, you'll need to bind it with Vuetable first. This could be done in 3 easy steps:
- On `Vuetable`, use `v-on` to listen to `vuetable:pagination-data` event and specify the binding handler function.
  ```vue
  <template>
    <div>
      <vuetable ref="vuetable"
        // This tells Vuetable that when the paginaiton data is available,
        // call `onPaginationData` method.
        @vuetable:pagination-data="onPaginationData"
      ></vuetable>
      <vuetable-pagination ref="pagination"></vuetable-pagination>
    </div>
  </template>
  ```

- On `VuetablePagination`, use `v-on` to listen to `vuetable-pagination:change-page` event and specify the binding handler function.
  ```vue
  <template>
    <div>
      <vuetable ref="vuetable"
        //...
      ></vuetable>
      <vuetable-pagination ref="pagination"
        // This tells VuetablePagination component that when there is
        // a request to change the page, call `onChangePage` method.
        @vuetable-pagination:change-page="onChangePage"
      ></vuetable-pagination>
    </div>
  </template>
  ```

- Define both of the binding handler functions in the component.
  ```js
  //...
  methods: {
    //...
    // when the pagination data is available, set it to pagination component
    onPaginationData (paginationData) {
      this.$refs.pagination.setPaginationData(paginationData)
    },
    // when the user click something that causes the page to change,
    // call "changePage" method in Vuetable, so that that page will be
    // requested from the API endpoint.
    onChangePage (page) {
      this.$refs.vuetable.changePage(page)
    }
  }
  ```


## How the Pagination Component Works

The pagination component assumes that the following information are available for its calculation
- `total` -- the total number of records available
- `per_page` -- the number of records in each page (page size)
- `current_page` -- the current page number of this data chunk
- `last_page` -- the last page number of this data
- `next_page_url` -- URL of the next page
- `prev_page_url` -- URL of the previous page
- `from` -- the start record of this page, in relation to page size
- `to` -- the end record of this page, in relation to page size

These information should be passed down to it via `setPaginationData` method through its parameter object.

Vuetable expects this meta data to be returned from the API endpoint together with the data. It will emit `vuetable:pagination-data` event with the pagination data every time the data is successfully retrieved from the API endpoiint.

::: warning
You must ensure that the aboved information are available or the `VuetablePagination` component will not work as expected.
:::

Once the pagination information is available, the following computed properties can be used to build the template of the pagination component.

- `totalPage` -- the last page number
- `isOnFirstPage` -- whether the current page number is the first page
- `isOnLastPage` -- whether the current page number is the last page
- `notEnoughPages` -- whether all the pages is less than the sliding window size. (Please help suggest for a better name)
- `windowSize` -- the size of a sliding pagination window. Calculated by `on-each-side` * 2 +1.
- `windowStart` -- the first page number of this sliding pagination window.

## CSS

Like Vuetable, `VuetablePagination` and `VuetablePaginationDropdown` try to be CSS as neutral as possible, so you could use it in any CSS framework. But to make it looks nice and integrated, you should customize the following CSS classes
- `wrapperClass`
- `activeClass`
- `disabledClass`
- `pageClass`
- `linkClass`
- `paginationClass`
- `paginationInfoClass`
- `dropdownClass`
- `icons`
  - `first`
  - `prev`
  - `next`
  - `last`

Both `VuetablePagination` and `VuetablePaginationDropdown` have a few prop for customization. Please check its documentation for more detail.

## Making Your Own Pagination for Vuetable

`VuetablePaginationMixin` has already provided most of the functionality for a pagination component. You can easily use it to create a pagination component for specific CSS framework with minimum effort.

You can even create your own pagination component without using it, but would still be able to work with Vuetable if you understand how it works.

See also:
- [VuetablePaginationMixin](../api/pagination/mixin.html)
- [VuetablePagination](../api/pagination/pagination.html)
- [VuetablePaginationDropdown](../api/pagination/dropdown.html)
