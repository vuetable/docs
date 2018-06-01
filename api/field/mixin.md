# VuetableFieldMixin

This mixin provides a convenient way to create Field Component for Vuetable.

## Properties

### rowData
- **type:** `Object`
- **default:** `null`
- **usage:**
  
  The row data passed from `Vuetable`.

### rowIndex
- **type:** `Number`
- **usage:**
  
  The row index passed from `Vuetable`.

### rowField
- **type:** `Object`
- **usage:**
  
  The normalized field definition object passed from either `Vuetable` or `VuetableRowHeader`.

### isHeader
- **type:** `Boolean`
- **default:** `false`
- **usage:**

  Whether it should render the template for table header or table body. Passed from `VuetableRowHeader`.  

### title
- **type:** `String`
- **default:** `` _(empty string)_
- **usage:**
  
  The pre-rendered title, passed from `VuetableRowHeader`.

### vuetable
- **type:** `Object`
- **default:** `null`
- **usage:**
  
  The reference to Vuetable instance itself. This would be useful if your component need to access 
  properties and functions, or refer to the Vuetable instance which is a direct parent of the Field
  Component.

  Passed from either `Vuetable` or `VuetableRowHeader`.
