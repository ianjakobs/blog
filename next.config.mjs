import MDX from '@next/mdx'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeImgSize from 'rehype-img-size'
import rehypePrism from '@mapbox/rehype-prism'
import rehypeSlug from 'rehype-slug'
import remarkTOC from 'remark-toc'

const withMDX = MDX({
    options: {
        providerImportSource: '@mdx-js/react',
        rehypePlugins: [
            rehypePrism,
            rehypeSlug,
            [rehypeImgSize, { dir: 'public' }],
            [rehypeAutolinkHeadings, {
                content: ({ tagName }) => ({
                    children: [{ type: 'text', value: '#'.repeat(Number(tagName.charAt(1))) }],
                    tagName: 'span',
                    type: 'element',
                    properties: {
                        className: [
                            'md:absolute', 'md:-translate-x-full',
                            'pr-2', 'md:pr-3', 'inline-block',
                            'text-gray-300', 'dark:text-gray-600',
                        ],
                    },
                }),
            }],
        ],
        remarkPlugins: [
            [remarkTOC, {
                maxDepth: 3,
                ordered: true,
                tight: true,
            }],
        ],
    },
})

/** @type {import('next').NextConfig} */
export default withMDX({
    experimental: {
        esmExternals: true,
    },
    pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
    poweredByHeader: false,
    reactStrictMode: true,
    webpack(config) {
        config.module.rules.push({
            test: /\.mdx$/,
            use: [
                './lib/helpers/process-mdx',
            ],
        })

        return config
    },
    async headers() {
        return [
            {
                source: '/:path*',
                headers: [
                    {
                        key: 'Content-Security-Policy',
                        value: [
                            `default-src 'self';`,
                            `connect-src 'self' ${process.env.NODE_ENV === 'development' ? 'ws://localhost:3000' : ''} vitals.vercel-insights.com;`,
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
})
