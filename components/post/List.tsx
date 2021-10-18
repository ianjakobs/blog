// import { Fragment } from 'react'

// import Preview from './Preview'
import type { Post } from '@/types'
// import { Separator, Text } from '@/components/ui'
import { Text } from '@/components/ui'

export type ListProps = React.HTMLAttributes<HTMLElement> & {
    posts: Post[]
}

const List = ({
    // posts,
    ...props
}: ListProps) => (
    <section {...props}>
        <Text variant="secondary">
            <em>Content coming soon!</em>
        </Text>
        {/* {posts.map((post, i) => ( */}
        {/*     <Fragment key={post.title}> */}
        {/*         {i > 0 && <Separator className="my-6" />} */}
        {/*         <Preview post={post} /> */}
        {/*     </Fragment> */}
        {/* ))} */}
    </section>
)

export default List
