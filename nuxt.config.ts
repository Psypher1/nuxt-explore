// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    compatibilityDate: "2024-04-03",
    future: {
        compatibilityVersion: 4,
    },
    // css: ["~/assets/css/fonts.css"],
    srcDir: "src/",
    modules: ["@nuxtjs/tailwindcss", "@nuxt/icon", "@nuxt/image"],

    image: {
        domains: ["https://cdn.dummyjson.com/"],
    },
});
