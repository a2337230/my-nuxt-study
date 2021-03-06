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
    middleware: 'auth',

    // 扩展路由
    extendRuters(routes, resolve) {
      routes.push({
        name: 'home',
        path: '/index',
        components: resolve(__dirname, 'pages/index.vue')
      })
    }
  },
  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    'assets/css/transistion.css'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '~/plugins/router'
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
