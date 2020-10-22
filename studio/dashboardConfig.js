export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: After you make an edit to your Influify site you must click deploy.',
              sites: [
                {
                  buildHookId: '5f91cec5ca83f613fcfb30c3',
                  title: 'Sanity Studio',
                  name: 'influify-sanity-webapp-studio',
                  apiId: '1e92c26d-75a5-4d3c-83bd-bcb833574b5f'
                },
                {
                  buildHookId: '5f91cec5f3632814a6e6842b',
                  title: 'Blog Website',
                  name: 'influify-sanity-webapp',
                  apiId: '0fca08a6-62b0-4dea-adc5-6626cce3e1ed'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Influify/influify-sanity-webapp',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://influify-sanity-webapp.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
