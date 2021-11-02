import fs from 'fs'
import matter from 'gray-matter'
import { join } from 'path'

import { POSTS_DIRECTORY } from '@/lib/constants'
import { PostFields } from '@/types'

const getPost = (slug: string, fields: PostFields = []) => {
    const fullPath = join(POSTS_DIRECTORY, slug)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    type Items = {
        [key: string]: string
    }

    const items: Items = {}

    fields.forEach((field) => {
        if (field === 'slug') items[field] = slug.replace('.mdx', '')
        if (field === 'content') items[field] = content
        if (typeof data[field] !== 'undefined') items[field] = data[field]
    })

    return items
}

export default getPost
