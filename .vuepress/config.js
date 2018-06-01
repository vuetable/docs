module.exports = {
  locales: {
    '/': {
      lang: 'en-US',
      title: 'Vuetable-2',
      description: 'datatable simplify!'
    }
  },
  head: [
    //['link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.1/semantic.min.css' }]
  ],
  themeConfig: {
    repo: 'ratiw/vuetable-2/tree/next',
    locales: {
      '/': {
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Guide', link: '/guide/' },
          { text: 'API', link: '/api/' },
        ],
        sidebar: {
          '/guide/': genSidebarConfig('Guide'),
          '/api/': genSidebarApi('API'),
        }
      }
    }
  }
}

function genSidebarConfig(title) {
  return [
    {
      title,
      collapsable: false,
      children: [
        '',
        'getting-started',
        'api-vs-data-mode',
        'fields-definition',
        'sorting',
        'special-field',
        'creating-field-component',
        'css-styling',
        'json-data-format',
        'data-transformation',
        'detail-row',
        'pagination',
        ['multirow-header', 'Multi-Row Header']
      ]
    }
  ]
}

function genSidebarApi(title) {
  return [
    {
      title: 'Vuetable-2',
      collapsable: true,
      children: [
        ['vuetable/properties', 'Properties'],
        ['vuetable/data', 'Data'],
        ['vuetable/computed', 'Computed'],
        ['vuetable/methods', 'Methods'],
        ['vuetable/events', 'Events'],
      ]
    },
    {
      title: 'Pagination',
      collapsable: true,
      children: [
        'pagination/pagination',
        'pagination/mixin',
        'pagination/dropdown',
      ]
    },
    {
      title: 'Pagination Info',
      collapsable: true,
      children: [
        'pagination-info/info',
        'pagination-info/mixin',
      ]
    },
    {
      title: 'Fields',
      collapsable: true,
      children: [
        'field/mixin',
        'field/checkbox/mixin',
        'field/checkbox/checkbox',
        'field/handle',
        'field/sequence',
      ]
    },
    {
      title: 'Columns',
      collapsable: true,
      children: [
        'col/group',
        'col/gutter',
      ]
    },
    {
      title: 'Rows',
      collapsable: true,
      children: [
        'row/header'
      ]
    },
    {
      title: 'CSS',
      collapsable: true,
      children: [
        'css/semantic-ui'
      ]
    }
  ]
}
