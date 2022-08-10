const colors = require('tailwindcss/colors')

module.exports = {
    content: [
        './components/**/*.tsx',
        './next.config.mjs',
        './pages/**/*.tsx',
    ],
    plugins: [
        require('@tailwindcss/typography'),
    ],
    theme: {
        extend: {
            colors: {
                accent: colors.rose,
                gray: colors.neutral,
            },
            typography: () => ({
                DEFAULT: {
                    css: {
                        a: false,
                    },
                },
            }),
        },
    },
}
