export default defineNuxtConfig({
  app: {
    head: {
      script: [
        {src: 'https://sdk.scdn.co/spotify-player.js'}
      ]
    }
  },
  compatibilityDate: "2024-11-01",
  devtools: { enabled: false },
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  tailwindcss: {
    config: {
      content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./nuxt.config.{js,ts}"
      ]
    }
  },
  css: [
    '~/assets/css/main.scss'
  ],
  runtimeConfig: {
    spotify: {
      clientId: '',
      clientSecret: ''
    },
    public: {

    }
  }
});
