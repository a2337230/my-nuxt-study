export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  
  dev: {
    devtools: true,
  },
  head: {
    title: 'my-nuxt',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  
  // 配置中间件
  router: {
    middleware: 'auth'
  },
  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],
  // 定义系统默认loading
  // loading: {
  //   color: '#f20',
  //   height: '3px'
  // },
  loading: '~/components/loading.vue',
  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '~/plugins/router',
    {
      src: '~/plugins/axios',
      ssr: true
    },
    '~/plugins/mixins'
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/axios'
  ],

  axios: {
    proxy: true
  },
  proxy: {
    '/api/': {
      target: "http://xxxxx.com",
      changeOrigin: true,
      pathRewrite: {
        '^/api': ''
      }
    }
  },
  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
