// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: ['@nuxtjs/eslint-module', '@nuxtjs/tailwindcss'],
    app: {
        head: {
            link: [
                { rel: 'apple-touch-icon', sizes: '180x180', href: '/img/icon/apple-touch-icon.png' },
                { rel: 'icon', sizes: '32x32', href: '/img/icon/favicon-32x32.png' },
                { rel: 'icon', sizes: '16x16', href: '/img/icon/favicon-16x16.png' },
                {
                    rel: 'preconnect',
                    href: 'https://fonts.googleapis.com',
                },
                {
                    rel: 'preconnect',
                    href: 'https://fonts.gstatic.com',
                    crossorigin: 'anonymous',
                },
                {
                    rel: 'stylesheet',
                    href: 'https://fonts.googleapis.com/css2?family=Old+Standard+TT&display=swap',
                },
            ],
        },
    },
});
