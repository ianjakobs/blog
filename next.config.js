/** @type {import('next').NextConfig} */
module.exports = {
    experimental: {
        esmExternals: true,
    },
    poweredByHeader: false,
    reactStrictMode: true,
    async headers() {
        return [
            {
                source: '/:path*',
                headers: [
                    {
                        key: 'Content-Security-Policy',
                        value: [
                            `default-src 'self';`,
                            `connect-src 'self' vitals.vercel-insights.com;`,
                            `img-src 'self' data: ${process.env.NEXT_PUBLIC_FATHOM_DOMAIN};`,
                            `style-src 'self' 'unsafe-inline';`,
                            `script-src 'self' ${process.env.NODE_ENV === 'production' ? `'unsafe-inline'` : `'unsafe-eval'`} ${process.env.NEXT_PUBLIC_FATHOM_DOMAIN};`,
                        ].join(' '),
                    },
                    {
                        key: 'Referrer-Policy',
                        value: 'strict-origin-when-cross-origin',
                    },
                    {
                        key: 'X-Content-Type-Options',
                        value: 'nosniff',
                    },
                    {
                        key: 'X-Frame-Options',
                        value: 'DENY',
                    },
                    {
                        key: 'X-XSS-Protection',
                        value: '1; mode=block',
                    },
                ],
            },
        ]
    },
}
