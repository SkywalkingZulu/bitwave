const pkg = require('./package');


const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin');

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description },
    ],
    script: [
      { src: 'http://tlk.io/embed.js' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons',
      },
    ],
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#2196f3' },

  /*
  ** Global CSS
  */
  css: [
    '~/assets/style/app.styl',
    'video.js/dist/video-js.css',
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/vuetify',
    // { src: '@/plugins/video-player-plugin.js', ssr: false },
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    [ '@nuxtjs/google-analytics', { id: 'UA-133753190-2' } ],
  ],

  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    transpile: [ 'vuetify/lib' ],
    plugins: [ new VuetifyLoaderPlugin() ],
    loaders: {
      stylus: {
        import: [ '~assets/style/variables.styl' ],
      },
    },

    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {

    },
  },
};
