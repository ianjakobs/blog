import { Fragment } from 'react'

import Preview, { type PreviewProps } from './Preview'
import { Separator } from '@/components/ui'

export type ListProps = React.HTMLAttributes<HTMLElement> & {
  posts: PreviewProps['post'][]
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
