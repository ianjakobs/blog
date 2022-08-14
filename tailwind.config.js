const colors = require('tailwindcss/colors')

module.exports = {
    content: [
        'next.config.mjs',
        'src/components/**/*.tsx',
        'src/pages/**/*.tsx',
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
