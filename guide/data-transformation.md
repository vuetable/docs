# Data Transformation

If the data you're working with is not in the format that Vuetable uses, you can setup a function that accepts response `data` as an argument, to transform it to the format that Vuetable can work with.

By creating a data transformation function, you will be able to pre-process the data you received back from the API endpoint and "transform" them before passing into Vuetable by using `transform` prop to specify the data transformation function to be used.

```javascript
new Vue({
  el: '#app',
  data: {
    //...
  },
  methods: {
    transformData (data) {
      var transformed = {}

      transformed.pagination = {
        total: data.total,
        per_page: data.per_page,
        current_page: data.current_page,
        last_page: data.last_page,
        next_page_url: data.next_page_url,
        prev_page_url: data.prev_page_url,
        from: data.from,
        to: data.to
      }

      transformed.mydata = []

      for (var i=0; i < data.length; i++) {
        transformed.mydata.push({
          id: data[i].id,
          fullname: data[i].name,
          email: data[i].email
        })
      }
      return transformed
    }
  }    
})
```

```html
<vuetable
  api-url="..."
  :fields="fields"
  :transform="transformData"
  data-path="mydata"
  pagination-path="pagination"
></vuetable>
```

See also:
- [`transform`](../api/vuetable/properties.html#transform) prop