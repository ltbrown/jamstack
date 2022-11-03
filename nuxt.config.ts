// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: ["@/assets/main.css"],
  modules: [
    [
      "@storyblok/nuxt",
      {
        accessToken: "rTPC2Tkn21rFtB9VWX2Nogtt",
        apiOptions: {
          region: "us",
        },
      },
    ],
  ],
});
