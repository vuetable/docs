# CSS Styling

Vuetable is trying to be CSS framework agnostic. As it generates its output as normal HTML table, you should be able to style it with any CSS framework's table classes. 

To make it easy to adapt to any CSS framework, the CSS classes that would affect Vuetable appearance are store in one file which could easily be assigned to `css` prop.

Here is the example of CSS classes for [Semantic UI](https://semantic-ui.com) that comes with Vuetable.

```js
export default {
  table: {
    tableWrapper: '',
    tableHeaderClass: 'fixed',
    tableBodyClass: 'vuetable-semantic-no-top fixed',
    tableClass: 'ui blue selectable unstackable celled table',
    loadingClass: 'loading',
    ascendingIcon: 'blue chevron up icon',
    descendingIcon: 'blue chevron down icon',
    ascendingClass: 'sorted-asc',
    descendingClass: 'sorted-desc',
    sortableIcon: 'grey sort icon',
    handleIcon: 'grey sidebar icon',
  },

  pagination: {
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
  },

  paginationInfo: {
    infoClass: 'left floated left aligned six wide column',
  }
}
```

This makes it easy to create your own if you're using other CSS framework. You can also publish it to [npmjs.com](https://www.npmjs.com) to share with the others as well.

::: warning
Please note that the above is just a normal javascript file exporting a single object which contains `table`, `pagination`, and `paginationinfo` objects inside.

When you import the file, it will contain this single object. And if you just assign this object to the `css` prop, it is not going to work. You have to assign the internal object to the `css` prop instead. In this case, the `css.table` for Vuetable and `css.pagination` for VuetablePagination.
:::

## Usage

Just import and assign it to `css` prop of Vuetable.
```vue{5,8,13,18}
<template>
  <div>
    <vuetable ref="vuetable"
      //...
      :css="css.table"
    ></vuetable>
    <vuetable-pagination ref="pagination"
      :css="css.pagination"
    ></vuetable-pagination>
  </div>
</template>
<script>
import CssForBootstrap4 from './VuetableCssBootstrap4.js'
export default {
  data () {
    return {
      //...
      css: CssForBootstrap4,
    }
  }
}
</script>
```

## Customization for Other CSS Frameworks

Normally, you will have replace the CSS class of each option with the one specified in the HTML table section of your CSS framework of choice. 

Here is an example for Bootstrap4 with FontAwesome Icon.
```js
// Bootstrap4 + FontAwesome Icon
export default {
  table: {
    tableWrapper: '',
    tableHeaderClass: 'mb-0',
    tableBodyClass: 'mb-0',
    tableClass: 'table table-bordered table-hover',
    loadingClass: 'loading',
    ascendingIcon: 'fa fa-chevron-up',
    descendingIcon: 'fa fa-chevron-down',
    ascendingClass: 'sorted-asc',
    descendingClass: 'sorted-desc',
    sortableIcon: 'fa fa-sort',
    detailRowClass: 'vuetable-detail-row',
    handleIcon: 'fa fa-bars text-secondary',
    renderIcon(classes, options) {
      return `<i class="${classes.join(' ')}"></i>`
    }
  },
  pagination: {
    wrapperClass: 'pagination float-right',
    activeClass: 'active',
    disabledClass: 'disabled',
    pageClass: 'page-item',
    linkClass: 'page-link',
    paginationClass: 'pagination',
    paginationInfoClass: 'float-left',
    dropdownClass: 'form-control',
    icons: {
      first: 'fa fa-chevron-left',
      prev: 'fa fa-chevron-left',
      next: 'fa fa-chevron-right',
      last: 'fa fa-chevron-right',
    }
  }
}
```

### Rendering Icon

Each CSS framework seems to use different way to constructed icon. Vuetable provides a way to help you on this.

Inside the object you assigned to the `css` prop, if you define a function named `renderIcon`, Vuetable will call it whenever it needs to render icon.

You should define the `renderIcon` function to accept 2 parameters
- `classes` -- contains array of CSS class string, e.g. `['class-a', 'class-b']`
- `options` -- contains other HTML attributes, e.g. `style="margin:0px"`


Here is the one for Bootstrap 4 with FontAwesome
```js{14-16}
{
  tableWrapper: "",
  tableHeaderClass: "mb-0",
  tableBodyClass: "mb-0",
  tableClass: "table table-bordered table-hover",
  loadingClass: "loading",
  ascendingIcon: "fa fa-chevron-up",
  descendingIcon: "fa fa-chevron-down",
  ascendingClass: "sorted-asc",
  descendingClass: "sorted-desc",
  sortableIcon: "",
  detailRowClass: "vuetable-detail-row",
  handleIcon: "fa-bars text-secondary",
  renderIcon(classes, options) {
    return `<i class="${classes.join(" ")}" ${options}></i>`;
  }
}
```

See the example [here](https://codesandbox.io/s/9lw23ryqko?module=%2FVuetableBootstrap4Config.js).

## Partial CSS Options

If you only want to change one or two options in the CSS and do not want to put together the whole CSS classes as in the above example, you can specify only the option(s) that you want in the `css` prop.

```vue{2}
<vuetable ref="vuetable"
  :css="{tableClass: 'my-table', loadingClass: 'Please wait...'}"
></vuetable>
```

::: tip
When you assign value to `css` prop, Vuetable will merge it to the default value. The merged copy is stored in `$_css` data property.
:::

## Vuetable's Specific CSS

There are some specific CSS classes generated by Vuetable during the rendering of HTML table. You can use your browser DevTool or Inspector to see it if you need to target various part of the table.

## Generated HTML Table

Here is the structure of the HTML Table generated by Vuetable

```html
<div class="{css.tableWrapper}">
  <div class="vuetable-head-wrapper">
    <table class="vuetable {css.tableClass} {css.tableHeaderClass}">
      // content generated by column group component VeutableColGroup
      <thead>
        // content generaged by table header component VuetableRowHeader
      </thead>
    </table>
  </div>

  <div class="vuetable-body-wrapper">
    <table class="vuetable {css.tableClass} {css.tableBodyClass}">
      // content generated by column group component VeutableColGroup
      <tfoot>
        // content generated by "tableFooter" slot
      </tfoot>
      <tbody class="vuetable-body">
        // content of <tr> and <td> generated by v-for, 
        // will probably be another component in the future
      </tbody>
    </table>
  </div>
</div>
```

Please note that in the above structure, there are actually two HTML table generated. One for the table header and another for table body and footer. This is necessary to support fixed table header and scrollable table body (by setting `table-height` prop).

However, if fixed header is not used, the first table will not be generated. And the table inside `<div class="vuetable-body-wrapper">` will contain the `thead` section as well.

The `<colgroup>` tags are also generated for both table to make sure the columns in both table have the same width. 

::: warning
If using fixed header feature, you should always set the width for each field in fields defintion, otherwise, the column width in the table header and body may not be the same.
:::
