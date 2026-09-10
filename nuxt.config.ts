import svgLoader from 'vite-svg-loader';

export default defineNuxtConfig({
  css: [
    '~/assets/css/variables.css',
    '~/assets/css/main.css',
  ],
  vite: {
    plugins: [
      svgLoader({
        defaultImport: 'component'
      })
    ]
  },
  modules: ['@pinia/nuxt'],
  devtools: { enabled: false },
  compatibilityDate: '2025-07-15',
});