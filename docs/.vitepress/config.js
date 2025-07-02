import path from 'path';

export default {
    lang: 'en-IN',
    base: '/vuelicity/',
    title: 'Vuelicity',
    description: 'Vuelicity is a collection of UI components for Vue 3 using Tailwind CSS 4.',
    head: [
        ['link', { rel: 'icon', href: '/images/favicon.ico' }]
    ],
    themeConfig: {
        logo: '/images/logo.png',
        search: {
            provider: 'local'
        },
        repo: 'https://github.com/DIY-Baazar/vuelicity',
        sidebar: [
            {
                text: 'Introduction',
                items: [
                    { text: 'What is Vuelicity?', link: '/' },
                    { text: 'Getting Started', link: '/guide/' },
                ],
            }, {
                text: 'Components',
                items: [
                    { text: 'PubButton', link: '/components/pub-button' },
                ],
            }
        ],
    },
    vite: {
        resolve: {
            alias: {
                'vuelicity': path.resolve(__dirname, '../../src'),
            },
            dedupe: ['vue'], // avoid error when using dependencies that also use Vue
        }
    }
};