import fs from 'fs'
import matter from 'gray-matter'
import { join } from 'path'

import type { Post, PostFields } from '@/types'
import { POSTS_DIRECTORY } from '@/lib/constants'

const getPost = (slug: string, fields: PostFields = []) => {
    const fullPath = join(POSTS_DIRECTORY, slug)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    return fields.reduce((post, field) => {
        let value = data[field]

        if (field === 'slug') value = slug.replace('.mdx', '')
        if (field === 'content') value = content
        if (data[field] instanceof Date) value = data[field].toISOString()

        return {
            ...post,
            [field]: value,
        }
    }, {} as Pick<Post, typeof fields[number]>)
}

export default getPost
