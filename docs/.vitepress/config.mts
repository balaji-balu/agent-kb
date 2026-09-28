import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'

const repo = 'https://github.com/balaji-balu/agent-kb'

export default withMermaid(
  defineConfig({
    title: 'Agent KB',
    description:
      'An open knowledge base on AI agents, harnesses, loops and graphs, orchestrators and control planes.',
    base: '/agent-kb/',
    lang: 'en',
    cleanUrls: true,
    lastUpdated: true,
    head: [
      ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
      ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
      [
        'link',
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@75..100,500..800&family=IBM+Plex+Mono:wght@400;500&family=IBM+Plex+Sans:wght@400;500;600&display=swap'
        }
      ]
    ],
    themeConfig: {
      nav: [
        { text: 'Background', link: '/articles/background' },
        { text: 'Knowledge base', link: '/kb/' },
        { text: 'spec-contracts', link: 'https://balaji-balu.github.io/spec-contracts/' }
      ],
      sidebar: [
        {
          text: 'Articles',
          items: [{ text: 'Background: the agent stack', link: '/articles/background' }]
        },
        {
          text: 'Knowledge base',
          items: [{ text: 'Overview and roadmap', link: '/kb/' }]
        }
      ],
      outline: { level: [2, 3] },
      search: { provider: 'local' },
      socialLinks: [{ icon: 'github', link: repo }],
      editLink: {
        pattern: `${repo}/edit/main/docs/:path`,
        text: 'Suggest a change to this page'
      },
      footer: {
        message: 'Content licensed CC BY 4.0. Contributions welcome.',
        copyright: 'Agent KB contributors'
      }
    },
    mermaid: {},
    // mermaid 11 pulls in CommonJS deps (e.g. fastdom) that the dev server must pre-bundle
    vite: { optimizeDeps: { include: ['mermaid'] } }
  })
)
