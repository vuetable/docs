# API mode and Data mode

Previously, Vuetable can only work with an API endpoint that provides the 
source of the data. Later on, it was extended to also support already 
available data. 

To avoid making it confusing when refering to some feature sets in Vuetable, 
we started to name them according to the source of the data it is working with.

If it is working with an API endpoint to retrieve the data, it is called **API mode**.
If it is working with an existing data supplied manually, it is called **Data mode**. 
However, most of the features work regardless of the source of the data.

## API Mode

In **API mode**, which is the _default_ mode, Vuetable will interact with an 
API endpoint to request data from it via AJAX request. 

Usually, the API will support sorting, filtering, and pagination of the data. 
But in order to do so, the client needs to send additional query with the 
request indicating that it wants one or all of those functionalities. This
usually is done by appending additional key-value pair to the query string 
of the request.

So, all of the features specific to API mode usually relating to manupulating 
this API related payload, including sorting, filtering, and pagination.

Here are the list of properties that will only work in API mode
- [load-on-start](../api/vuetable/properties.html#load-on-start)
- [api-url](../api/vuetable/properties.html#api-url)
- [api-mode](../api/vuetable/properties.html#api-mode)
- [http-method](../api/vuetable/properties.html#http-method)
- [reactive-api-url](../api/vuetable/properties.html#reactive-api-url)
- [query-params](../api/vuetable/properties.html#query-params)
- [append-params](../api/vuetable/properties.html#append-params)
- [http-options](../api/vuetable/properties.html#http-options)
- [http-fetch](../api/vuetable/properties.html#http-fetch)
- [sort-params](../api/vuetable/properties.html#sort-params)


## Data Mode

In **Data mode**, you tell Vuetable that you don't want it to handle data request, 
but you will supply that data to it instead. It will only format and display
the data in each column as you specified in the fields defintion.

To turn on Data mode, you set `api-mode` prop to `false` and set your data via 
`data` prop or `setData` function.

```vue
<vuetable ref="vuetable"
  :api-mode="false"
  :data="localData"
></vuetable>
```

Data manipulation features like sorting, filtering, and pagination will not 
work by default as Vuetable relies on server side to provide such functionality. 
But this can be easily done on the client-side via third party library like [`lodash`](https://lodash.com/),
[`underscore`](http://underscorejs.org/), etc.

That means you have to manually manipulate the data (sorting and filtering) before you 
assign the manipulated data to Vuetable.

However, there's one problem remaining! How would you know that the user has interacted
with Vuetable and expecting something out of those interactions?

Consider this
- User clicks on the column header, and expects to get the sorted data based on the column header the user has clicked on.
- User tries to filter the data by entering a text and clicks the search or filter button.
- User clicks on a pagination link, and expects the table to show the next/previous page of the data.

### The Data Manager

In Data mode, whenever the user interact with Vuetable that will indicate a request for a new data, e.g. changing sort order, filtering the data, move to another page, etc., Vuetable will call the function defined in `data-manager` prop with two
parameters:
- `sortOrder` -- the current sort order array
- `pagination` -- an empty pagination data object

You can use these parameters to do necessary processing to the data and return it back from
the function. Vuetable will use this returned data to do its job.

You can either return it as
- an array of data, or 
- an object containing an array of data and a pagination metadata.

Basically, the data manager function will act as a API endpoint that Vuetable tries to 
request the data from. 

Please see the following example.

Vuetable-2 - Data mode with Pagination using `data-manager` prop
<iframe src="https://codesandbox.io/embed/y0z80ooxk9?autoresize=1&hidenavigation=1&module=%2FApp.vue&moduleview=1&view=editor" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

## Which One to Use?

It depends largely on your project and viewpoint on this. But let me throw in
my thought on this and you decide for yourself.

Vuetable is opinionated toward working with the API endpoints from the beginning. 
This is based solely on my experiences building applications either for desktop or
for the web.

I have a strong believe that this is the model for building app. The client side should handle most of the presentation that interacts with the user, while the server side should handle most of the logic behind the application, this also includes the database related functions.

Most of the time, we have a very powerful and well developed database server on the server side where it can do an excellent and efficient tasks it was designed to do, like searching, sorting, and filtering of data. Another great benefit of this is that your app will also scale better instead of implementing the client side code to do these tasks.

So, Vuetable is intended to be a presentation tool and never a data analytic tool where a large amount of data (think 10,000 or millions of records) is needed to be processed and tallied to get summarized information. Not that it cannot do that, but it will never be very efficient to do so. 

However, that should not limit the way you use Vuetable. And with the introduction of Vuex usage patterns, it certainly is possible to partition you app differently. And this is where the Data mode was introduced. If part of your app already takes care of the data (no matter it came from) and you just need Vuetable to present it, you can do so. I cannot say for sure that it will work perfectly in every scenario, but I'm counting on the community to suggest, recommend, and share what they have achieved using Vuetable. Because without the community suggestion, Vuetable will never come this far.
