export default defineNuxtConfig({
  runtimeConfig: {
    repApiKey: '',
    strapiToken: '',
    strapiBase: '',
    public: {
      baseUrl: ''
    }
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
  ]
})
