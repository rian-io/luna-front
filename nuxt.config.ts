// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/ui-pro', '@nuxt/eslint', '@pinia/nuxt'],
  css: ['~/assets/css/main.css'],
})