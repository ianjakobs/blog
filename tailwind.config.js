const colors = require('tailwindcss/colors')

module.exports = {
    mode: 'jit',
    plugins: [
        require('@tailwindcss/typography'),
    ],
    purge: [
        './lib/helpers/process-markdown.tsx',
        './components/**/*.tsx',
        './pages/**/*.tsx',
    ],
    darkMode: 'media',
    theme: {
        extend: {
            colors: {
                accent: colors.amber,
                gray: colors.trueGray,
                orange: colors.orange,
            },
            typography: (theme) => ({
                DEFAULT: {
                    css: {
                        a: false,
                        hr: { borderColor: false },
                    },
                },
                light: {
                    css: {
                        color: theme('colors.gray.400'),
                        strong: { color: theme('colors.white') },
                        'ol > li::before': { color: theme('colors.gray.400') },
                        'ul > li::before': { backgroundColor: theme('colors.gray.600') },
                        blockquote: {
                            color: theme('colors.gray.200'),
                            borderLeftColor: theme('colors.gray.600'),
                        },
                        h1: { color: theme('colors.white') },
                        h2: { color: theme('colors.white') },
                        h3: { color: theme('colors.white') },
                        h4: { color: theme('colors.white') },
                        code: { color: theme('colors.white') },
                        'a code': { color: theme('colors.white') },
                        'tbody tr': { borderBottomColor: theme('colors.gray.600') },
                        thead: {
                            color: theme('colors.white'),
                            borderBottomColor: theme('colors.gray.400'),
                        },
                    },
                },
            }),
        },
    },
}
