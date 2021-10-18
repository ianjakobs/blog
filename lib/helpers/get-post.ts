import fs from 'fs'
import matter from 'gray-matter'
import { join } from 'path'

import { POSTS_DIRECTORY } from '@/lib/constants'
import { PostFields } from '@/types'

const getPost = (slug: string, fields: PostFields = []) => {
    const realSlug = slug.replace(/\.md$/, '')
    const fullPath = join(POSTS_DIRECTORY, `${realSlug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    type Items = {
        [key: string]: string
    }

    const items: Items = {}

    fields.forEach((field) => {
        if (field === 'slug') items[field] = realSlug
        if (field === 'content') items[field] = content
        if (typeof data[field] !== 'undefined') items[field] = data[field]
    })

    return items
}

export default getPost
