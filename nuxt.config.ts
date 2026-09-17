import svgLoader from 'vite-svg-loader';

export default defineNuxtConfig({
  css: [
    '~/assets/css/variables.css',
    '~/assets/css/main.css',
    '~/assets/css/utilities.css',
  ],
  vite: {
    plugins: [
      svgLoader({
        defaultImport: 'component',
      }),
    ],
  },
  nitro: {
    typescript: {
      tsConfig: {
        compilerOptions: {
          noUncheckedIndexedAccess: false,
        },
      },
    },
  },
  modules: [
    'vite-svg-loader',
    '@pinia/nuxt',
    'pinia-plugin-persistedstate',
  ],
  devtools: { enabled: false },
  typescript: {
    tsConfig: {
      compilerOptions: {
        noUncheckedIndexedAccess: false,
      }
    }
  },
  runtimeConfig: {
    feed: {
      limit: 4
    }
  },
  compatibilityDate: '2025-07-15',
});