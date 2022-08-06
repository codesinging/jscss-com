import {defineNuxtConfig} from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss',
    ],
    css: [
        '~/assets/css/icon-park.css',
    ],
    app: {
        head: {
            link: [
                {rel: 'icon', href: '/favicon.svg'},
            ]
        }
    },
    runtimeConfig: {
        public: {
            baseUrl: '',
        }
    },
})
