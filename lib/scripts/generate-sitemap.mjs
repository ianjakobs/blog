import env from '@next/env'
import fs from 'fs'
import { globby } from 'globby'

const { loadEnvConfig } = env
loadEnvConfig('./')

const generate = async () => {
    let sitemap = '<?xml version="1.0" encoding="UTF-8"?>'
    sitemap += '\n'
    sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'

    ;(await globby([
        'pages/**/*.(mdx|tsx)',
        '!pages/**/[*.tsx',
        '!pages/_*.tsx',
        '!pages/api',
    ])).forEach((page) => {
        const path = page
            .replace('/index', '')
            .replace('pages', '')
            .replace('.tsx', '')
            .replace('.mdx', '')

        sitemap += `
            <url>
                <loc>${`${process.env.URL}${path}`}</loc>
                <changefreq>daily</changefreq>
            </url>`.replace(/^ {8}/gm, '')
    })

    sitemap += '\n'
    sitemap += '</urlset>'

    fs.writeFileSync('./public/sitemap.xml', sitemap)
}

generate()
