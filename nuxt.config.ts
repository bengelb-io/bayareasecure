// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: [
    '@nuxt/ui',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/fonts',
    '@nuxt/eslint'
  ],
  image: {
    provider: 'netlify'
  },
  runtimeConfig: {
    public: {
      companyName: "Bay Area Secure",
      linkedin: "https://www.linkedin.com/company/bayareasecure/",
      github: "https://github.com/",
    }
  }
})
