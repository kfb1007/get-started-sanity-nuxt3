import { defineNuxtConfig } from "nuxt";

export default defineNuxtConfig({
  modules: ["@nuxtjs/sanity"],
  sanity: {
    projectId: "qt2ynqua",
		apiVersion: '2022-05-31'
  },
  css: ["@/assets/css/styles.css"]
});