import RSS from 'rss'
import env from '@next/env'
import fs from 'fs'
import matter from 'gray-matter'
import rehypeImgSize from 'rehype-img-size'
import rehypeSlug from 'rehype-slug'
import rehypeStringify from 'rehype-stringify'
import remarkRehype from 'remark-rehype'
import remarkTOC from 'remark-toc'
import { join } from 'path'
import { remark } from 'remark'

// Can't import this from the TypeScript file
const EMAIL = 'blog@ianjakobs.com'
const NAME = 'Ian Jakobs'

const { loadEnvConfig } = env
loadEnvConfig('./')

const parse = markdown => remark()
    .use(remarkTOC, {
        maxDepth: 3,
        ordered: true,
    })
    .use(remarkRehype)
    .use(rehypeImgSize, {
        dir: 'public',
    })
    .use(rehypeSlug)
    .use(rehypeStringify)
    .processSync(markdown)

const generate = async () => {
    const year = new Date().getFullYear()
    const feed = new RSS({
        copyright: `${year} ${NAME}`,
        description: 'On my interests, being an indie hacker, and building in public.',
        feed_url: `${process.env.URL}/feed.xml`,
        language: 'en',
        managingEditor: `${EMAIL} (${NAME})`,
        site_url: process.env.URL,
        title: NAME,
        webMaster: `${EMAIL} (${NAME})`,
    })

    fs.readdirSync(join(process.cwd(), 'pages/posts'))
        .filter(name => name.endsWith('.mdx'))
        .map((name) => {
            const content = fs.readFileSync(join(process.cwd(), 'pages/posts', name))
            const { content: markdown, data } = matter(content)
            const { value } = parse(
                markdown.replace(/]\(\/posts/g, `](${process.env.URL}/posts`)
            )

            feed.item({
                author: NAME,
                date: data.created,
                description: value,
                title: data.title,
                url: `${process.env.URL}/posts/${name.replace('.mdx', '')}`,
            })
        })

    fs.writeFileSync('./public/feed.xml', feed.xml({ indent: true }))
}

generate()
