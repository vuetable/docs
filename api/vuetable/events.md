# Vuetable Events

## vuetable:initialized
- **params:**
  - tableFields: `Array` -- the normalized fields definition
- **usage:**

  This event will be fired after the fields definition have been normalized during the `created` lifecycle hook.

## vuetable:header-event
- **params:**
  - type: `String`
  - payload: `Object`
- **usage:**

  This event will be fired when a table header part of Field Component wants to send any information back to its parent Vuetable.

## vuetable:field-event
- **params:**
  - type: `String`
  - payload: `Object`
- **usage:**

  This event will be fired when a table data part of Field Component wants to send any information back to its parent Vuetable.

## vuetable:pagination-data
- **params:**
  - tablePagination: `Object` -- pagination information
- **usage:**

  This event will be fired when the data has sucessfully been retrieved from the server and there is pagination information available.

## vuetable:loading
- **params:** _none_
- **usage:**

  This event will be fired before Vuetable starts to request the data from the server. This is useful for triggering the display of loading image.

## vuetable:load-success
- **params:**
  - response: `Object` -- the response returned from the server
- **usage:**

  This event will be fired when the data was successfully loaded from the server.

## vuetable:load-error
- **params:**
  - response: `Object` -- the response returned from the server
- **usage:**

  This event will be fired when up the data cannot be retrieved from the server or the server responses with an error.

## vuetable:loaded
- **params:** _none_
- **usage:**

  This event will be fired after Vuetable got response back from the server. This event does not indicate whether the request was successful or failed. It just indicates that the request is finished and it got the response back.

  This is useful for ending/hiding the loading image.

## vuetable:row-changed
- **params:**
  - dataItem: `Object` -- the current data item
- **usage:**

  This event will be fired when Vuetable loops through the data during table row rendering. This will be useful if you want to do some processing with the data, e.g. summing up the values.

  ::: warning Important!
  Please note that you MUST NOT change the pass-in data item or try to update any instance data during this event, or it will cause "indefinite update loop". The only way to work inside this event is to use the variable define outside of Vue.js instance
  :::


## vuetable:row-clicked
- **params:**
  - dataItem: `Object` -- the current data item
  - event: `Event` -- the MouseObject event
- **usage:**

  This event will be fired when the user clicked on any column in the row. You can use the pass-in event object to target the DOM element that you want to manipulate. The pass-in data item argument is the actual data that Vuetable received from the server and it is reactived. Which means if you changed its value, the data displayed in the table will also be changed.

  > Changing the pass-in data in this event will not cause "indefinite update loop" However, the change only affects the current displaying data. It does not change anything on the server side.

## vuetable:row-dblclicked
- **params:**
  - dataItem: `Object` -- the current data item
  - event: `Event` -- the MouseObject event
- **usage:**

  This event will be fired when the user "double-clicked" on any column in the row. You can use the pass-in event object to target the DOM element that you want to manipulate. The pass-in data item argument is the actual data that Vuetable received from the server and it is reactived. Which means if you changed its value, the data displayed in the table will also be changed.

  > Changing the pass-in data in this event will not cause "indefinite update loop" However, the change only affects the current displaying data. It does not change anything on the server side.

## vuetable:cell-rightclicked
- **params:**
  - dataItem: `Object` -- the current data item
  - field: `Object` -- the field object that causes this event
  - event: `Event` -- the MouseObject event
- **usage:**

  This event will be fired when a cell in the table body has been right-clicked.

## vuetable:cell-clicked
- **params:**
  - dataItem: `Object` -- the current data item
  - field: `Object` -- the field object that causes this event
  - event: `Event` -- the MouseObject event
- **usage:**

  This event will be fired when a cell in the table body has been clicked.



## vuetable:cell-dblclicked
- **params:**
  - dataItem: `Object` -- the current data item
  - field: `Object` -- the field object that causes this event
  - event: `Event` -- the MouseObject event
- **usage:**

  This event will be fired when a cell in the table body has been double-clicked.

## vuetable:detail-row-clicked
- **params:**
  - dataItem: `Object` -- the current data item
  - event: `Event` -- the MouseObject event
- **usage:**

  This event will be fired when an area of detail row has been clicked.

## vuetable:checkbox-toggled
- **params:**
  - isChecked: `Boolean` -- the state of the checkbox
  - dataItem: `Object` -- the current data item
- **usage:**

  This event will be fired whenever the checkbox has been toggled.

## vuetable:checkbox-toggled-all
- **params:**
  - isChecked: `Boolean` -- the state of the checkbox
- **usage:**

  This event will be fired when the select-all checkbox has been toggled.

## vuetable:data-reset
- **params:** _none_
- **usage:**

  This event will be fired as a result from calling `resetData` method to clear in `tableData` and `tablePagination`.
