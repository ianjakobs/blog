import Image from 'next/image'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypePrism from 'rehype-prism-plus'
import rehypeReact from 'rehype-react'
import rehypeSlug from 'rehype-slug'
import remarkGFM from 'remark-gfm'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import remarkTOC from 'remark-toc'
import sizeOf from 'image-size'
import { join } from 'path'
import { unified } from 'unified'

import { Link, Separator } from '@/components/ui'

const processMarkdown = (markdown: string) => {
    const result = unified()
        .use(remarkParse)
        .use(remarkGFM)
        .use(remarkTOC, {
            maxDepth: 3,
            ordered: true,
            tight: true,
        })
        .use(remarkRehype)
        .use(rehypeSlug)
        .use(rehypeAutolinkHeadings, {
            content: ({ tagName }) => ({
                children: [{ type: 'text', value: '#'.repeat(Number(tagName.charAt(1))) }],
                tagName: 'span',
                type: 'element',
                properties: {
                    className: [
                        'md:absolute', 'md:-translate-x-full',
                        'pr-2', 'md:pr-3', 'inline-block',
                        'text-gray-300', 'dark:text-gray-600',
                    ]
                },
            }),
        })
        .use(rehypePrism)
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        .use(rehypeReact, {
            createElement: React.createElement,
            components: {
                a: Link,
                hr: Separator,
                img: (props: { alt: string, children: undefined, src: string, title: string }) => {
                    const path = join(process.cwd(), 'public', props.src)
                    const { height, width } = sizeOf(path)

                    return (
                        // eslint-disable-next-line jsx-a11y/alt-text
                        <Image
                            height={height}
                            loading="eager" // With `loading="lazy" (the default) it doesn't load`
                            width={width}
                            {...props}
                        />
                    )
                },
            },
        })
        .processSync(markdown)
        .result

    return ReactDOMServer.renderToString(result)
}

export default processMarkdown
