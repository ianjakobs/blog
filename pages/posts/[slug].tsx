import 'prism-themes/themes/prism-material-dark.css'

import { Avatar, Separator, Text, Time } from '@/components/ui'
import { Container, Layout } from '@/components/app'
import { NAME } from '@/lib/constants'
import { Post } from '@/types'
import { getPost, getPosts, processMarkdown } from '@/lib/helpers'

type PageProps = {
    post: Post
}

const Page = ({ post }: PageProps) => (
    <Layout
        heading={post.title}
        meta={{
            title: post.title,
            description: post.excerpt,
            type: 'article',
            published: post.date,
            modified: post.date,
        }}
    >
        <Container as="article">
            <Text className="mt-2" size="large" variant="secondary">
                {post.excerpt}
            </Text>
            <Separator className="my-3 w-1/3" variant="accent" weight="heavy" />

            <div className="flex items-center mb-6 sm:mb-12 space-x-2">
                <Avatar size="small" />
                <Text size="small" variant="secondary">
                    {NAME} · <Time date={post.date} />
                </Text>
            </div>

            <div
                className="prose prose-sm sm:prose lg:prose-lg dark:prose-light dark:sm:prose-light"
                dangerouslySetInnerHTML={{ __html: post.content }}
            />
        </Container>
    </Layout>
)

type Params = {
    params: {
        slug: string
    }
}

export const getStaticProps = async ({ params }: Params) => {
    const post = getPost(params.slug, [
        'content',
        'date',
        'excerpt',
        'title',
    ])

    return {
        props: {
            post: {
                ...post,
                content: processMarkdown(post.content),
            },
        },
    }
}

export const getStaticPaths = async () => ({
    fallback: false,
    paths: getPosts(['slug'])
        .map(post => ({
            params: {
                slug: post.slug,
            },
        })),
})

export default Page
