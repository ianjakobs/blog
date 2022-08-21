import fs from 'fs'

import getPost from './get-post'
import type { PostFields } from '@/types'
import { POSTS_DIRECTORY } from '@/lib/constants'

const getPosts = (fields: PostFields = []) =>
    fs.readdirSync(POSTS_DIRECTORY)
        .filter(name => name.endsWith('.mdx'))
        .map(slug => getPost(slug, fields))
        .sort((a, b) => a.created > b.created ? -1 : 1)

export default getPosts
