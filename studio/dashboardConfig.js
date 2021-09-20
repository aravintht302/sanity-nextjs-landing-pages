export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '614823eac3e2e2b6861bf7c8',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-n2r4ez2x',
                  apiId: 'ab84fb19-d705-4eeb-bca7-8f6a652c2af7'
                },
                {
                  buildHookId: '614823ea5f8f92346d92ad82',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-dnt7jyn4',
                  apiId: '2363ef17-0286-4912-89bf-c4029f4cd7f1'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/aravintht302/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-dnt7jyn4.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
