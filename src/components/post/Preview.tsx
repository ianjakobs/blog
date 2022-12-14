import Link from 'next/link'

import type { Post } from '@/types'
import { Heading, Text, Time } from '@/components/ui'

export type PreviewProps = {
  post: Required<Pick<Post, 'created' | 'excerpt' | 'slug' | 'title'>>
}

const Preview = ({ post }: PreviewProps) => (
  <Link className="group" href={`/posts/${post.slug}`}>
    <header className="flex items-baseline justify-between flex-col sm:flex-row mb-2">
      <Heading
        as="h3"
        className="group-hover:text-accent-500 dark:group-hover:text-accent-400 transition-colors"
      >
        {post.title}
      </Heading>

      <Text className="flex-shrink-0 sm:w-32 text-left sm:text-right" size="small" variant="tertiary">
        <Time date={post.created} />
      </Text>
    </header>

    <Text variant="secondary">
      {post.excerpt}
    </Text>
  </Link>
)

export default Preview
