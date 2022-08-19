import type { Post } from '@/types'
import { App } from '@/components/layouts'
import { Avatar, Container, Heading, Separator, Text } from '@/components/ui'
import { List } from '@/components/post'
import { NAME } from '@/lib/constants'
import { getPosts } from '@/lib/helpers'

type PageProps = {
    posts: Post[]
}

const Page = ({ posts }: PageProps) => (
    <App>
        <Container className="space-y-12 sm:space-y-24">
            <section className="flex flex-col-reverse justify-between sm:flex-row">
                <div>
                    <Heading as="h1" className="!text-6xl sm:!text-8xl">{NAME}</Heading>
                    <Text variant="secondary">
                        Product Manager · Indie Hacker
                    </Text>
                </div>

                <Avatar className="mb-4 sm:mb-0" />
            </section>

            <section className="space-y-4 sm:space-y-6">
                <Heading as="h2">Current Projects</Heading>
                <div className="grid grid-cols-2">
                    <a className="group" href="https://felingua.com">
                        <Heading
                            as="h3"
                            className="group-hover:text-accent-500 dark:group-hover:text-accent-400 transition-colors"
                        >
                            Felingua <span className="text-[0.8em]">↗</span>
                        </Heading>
                        <Text variant="secondary">
                            Language practice made easy.
                        </Text>
                    </a>
                    <Separator orientation="vertical" />
                </div>
            </section>

            <section className="space-y-4 sm:space-y-6">
                <Heading as="h2">Recent Posts</Heading>
                <List posts={posts.slice(0, 3)} />
                <Separator />
                {/* <Link className="inline-block" href="/posts">See All Posts →</Link> */}
            </section>
        </Container>
    </App>
)

export const getStaticProps = async () => ({
    props: {
        posts: getPosts([
            'created',
            'excerpt',
            'slug',
            'title',
        ]),
    },
})

export default Page
