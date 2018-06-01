# VuetableColGroup

This component generates `<colgroup>` tag that wraps `<col>` specifying the width of each field
as given in the fields definition.

## Properties
### isHeader
- **type:** `Boolean`
- **default:** `false`
- **description:**

  Whether it should render the template in the table header or table data section.

## Methods
### columnClass
- **params:**
  - `field` -- field definition object
  - `fieldIndex` -- field index

- **returns:** Array of CSS classes to be applied
- **description:**

  Generates the CSS classes to be applied to the each `<col>` tag.