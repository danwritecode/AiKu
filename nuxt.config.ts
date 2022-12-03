// https://v3.nuxtjs.org/api/configuration/nuxt.config
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
    '@nuxtjs/supabase'
  ],
  imports: {
    dir: ["stores"]
  }
})
