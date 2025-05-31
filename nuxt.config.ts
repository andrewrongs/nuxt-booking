export default defineNuxtConfig({
  srcDir: 'src',  // 指定資料夾目錄
  compatibilityDate: '2025-05-01',
  devtools: { enabled: true }, // nuxtTool
  typescript: {
    strict: true,
    typeCheck: true
  },
  modules: [
    '@nuxtjs/i18n',
    '@nuxtjs/color-mode',
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
  ],
  colorMode: {
    classSuffix: '',
    fallback: 'light',
    componentName: 'ColorMode',
    storageKey: 'nuxt-color-mode'
  }, 
  image: {
    format: ['webp', 'svg', 'jpg', 'png'] 
  },
  css: [
    '@/assets/css/tailwind.css',  
    '@mdi/font/css/materialdesignicons.css'
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  pages: true,
  components: [
    {
      path: '~/components',
      pathPrefix: false,
      global: true
    },
  ],
})