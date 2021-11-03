import Link from 'next/link'

import type { Post } from '@/types'
import { Heading, Text, Time } from '@/components/ui'

export type PreviewProps = {
    post: Post
}

const Preview = ({ post }: PreviewProps) => (
    <Link href={`/posts/${post.slug}`}>
        <a className="group">
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
        </a>
    </Link>
)

export default Preview
