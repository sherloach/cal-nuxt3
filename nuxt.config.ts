// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devServer: {
    port: 8080,
  },
  devtools: { enabled: true },
  modules: ['@vee-validate/nuxt', '@nuxtjs/tailwindcss', 'shadcn-nuxt', '@nuxtjs/supabase', '@nuxt/image', '@nuxtjs/fontaine', '@nuxtjs/google-fonts'],
  tailwindcss: {
    exposeConfig: true,
  },
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui',
  },
  supabase: {
    redirect: false,
    // redirectOptions: {
    //   login: '/login',
    //   callback: '/confirm',
    //   exclude: [],
    // },
  },
  googleFonts: {
    families: {
      Inter: true,
    },
  },
  vue: {
    defineModel: true,
  },
})
