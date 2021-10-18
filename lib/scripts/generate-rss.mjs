import RSS from 'rss'
import env from '@next/env'
import fs from 'fs'
// import matter from 'gray-matter'
// import rehypeStringify from 'rehype-stringify'
// import remarkGFM from 'remark-gfm'
// import remarkParse from 'remark-parse'
// import remarkRehype from 'remark-rehype'
// import { join } from 'path'
// import { unified } from 'unified'

// Can't import this from the TypeScript file
const EMAIL = 'blog@ianjakobs.com'
const NAME = 'Ian Jakobs'

const { loadEnvConfig } = env
loadEnvConfig('./')

// const processMarkdown = (markdown) => unified()
//     .use(remarkParse)
//     .use(remarkGFM)
//     .use(remarkRehype)
//     .use(rehypeStringify)
//     .processSync(markdown)

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

    // fs.readdirSync(join(process.cwd(), '_posts'))
    //     .map((name) => {
    //         const content = fs.readFileSync(join(process.cwd(), '_posts', name))
    //         const { content: markdown, data } = matter(content)
    //         const { value } = processMarkdown(markdown)

    //         feed.item({
    //             author: NAME,
    //             date: data.date,
    //             description: value,
    //             title: data.title,
    //             url: `${process.env.URL}/posts/${name.replace(/\.md?/, '')}`,
    //         })
    //     })

    fs.writeFileSync('./public/feed.xml', feed.xml({ indent: true }))
}

generate()
