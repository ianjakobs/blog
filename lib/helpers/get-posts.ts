import fs from 'fs'

import getPost from './get-post'
import { POSTS_DIRECTORY } from '@/lib/constants'
import { PostFields } from '@/types'

const getPosts = (fields: PostFields = []) =>
    fs.readdirSync(POSTS_DIRECTORY)
        .map(slug => getPost(slug, fields))
        .sort((a, b) => a.date > b.date ? -1 : 1)

export default getPosts
