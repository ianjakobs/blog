import { Fragment } from 'react'

import Preview from './Preview'
import type { Post } from '@/types'
import { Separator } from '@/components/ui'

export type ListProps = React.HTMLAttributes<HTMLElement> & {
    posts: Post[]
}

const List = ({
    posts,
    ...props
}: ListProps) => (
    <section {...props}>
        {posts.map((post, i) => (
            <Fragment key={post.title}>
                {i > 0 && <Separator className="my-6" />}
                <Preview post={post} />
            </Fragment>
        ))}
    </section>
)

export default List
