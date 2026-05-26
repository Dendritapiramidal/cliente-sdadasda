import clientConfig from './client.config.js'

export default defineNuxtConfig({
  devtools: { enabled: false },

  app: {
    head: {
      title: clientConfig.seo.titulo,
      meta: [
        { name: 'description',        content: clientConfig.seo.descripcion },
        { name: 'keywords',           content: clientConfig.seo.keywords },
        { property: 'og:title',       content: clientConfig.seo.titulo },
        { property: 'og:description', content: clientConfig.seo.descripcion },
        { property: 'og:image',       content: clientConfig.seo.ogImagen },
        { name: 'twitter:card',       content: 'summary_large_image' },
      ],
      link: [
        { rel: 'icon', href: clientConfig.favicon },
        {
          rel: 'stylesheet',
          href: `https://fonts.googleapis.com/css2?family=${clientConfig.fuentes.display.replace(/ /g,'+')}:wght@300;400;600&family=${clientConfig.fuentes.body.replace(/ /g,'+')}:wght@300;400;500&display=swap`
        }
      ]
    }
  },

  // Expone el config como variable global para los componentes
  runtimeConfig: {
    public: {
      client: clientConfig
    }
  },

  // Genera sitio estático listo para Netlify/Vercel
  nitro: {
    preset: 'static'
  }
})
