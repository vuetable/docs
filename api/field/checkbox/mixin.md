# VuetableFieldCheckboxMixin

This mixin serves as a base for checkbox component. It will keep track of selected row(s) by storing/removing
"Row Identity" key in `selectedTo` data property of `Vuetable`.

## Mixins
- [`VuetableFieldMixin`](../mixin.md)

## Properties
Inherits from `VuetableFieldMixin`

## Methods
### toggleCheckbox
- **params:**
  - `dataItem`
  - `event`

- **returns: `none`
- **usage:**

  Handles checkbox input of each row data in the table body

  Delegates to `onCheckboxToggled` method in `Vuetable`.

### toggleAllCheckbox
- **params:**
  - `event`

- **returns: `none`
- **usage:**

  Handles checkbox input in the table header.

  Delegates to `onCheckboxToggledAll` method in `Vuetable`.

### isSelected
- **params:**
  - `rowData`

- **returns:** `Boolean`
- **usage:**

  Check if this row data is already selected.

  Delegates to `isSelectedRow` method in `Vuetable`.

### isAllItemsInCurrentPageSelected
- **params:** `none`
- **returns:** `Boolean`
- **usage:**

  Check if all row data in this page is already selected.
