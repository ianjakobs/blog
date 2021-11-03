import { App } from '@/components/layouts'
import { Avatar, Container, Heading, Link, Separator, Text } from '@/components/ui'
import { List } from '@/components/post'
import { NAME } from '@/lib/constants'
import { Post } from '@/types'
import { getPosts } from '@/lib/helpers'

type PageProps = {
    posts: Post[]
}

const Page = ({ posts }: PageProps) => (
    <App>
        <Container>
            <section className="flex flex-col-reverse items-start justify-between sm:flex-row sm:items-center mb-12 sm:mb-24">
                <div>
                    <Heading as="h1" className="!text-6xl sm:!text-8xl">{NAME}</Heading>
                    <Text variant="secondary">
                        Indie Hacker
                        ·
                        Building <Link href="https://felingua.com">Felingua</Link> in public
                    </Text>
                </div>

                <Avatar className="mb-4 sm:mb-0" />
            </section>

            <section>
                <Heading as="h2">Recent Posts</Heading>
                <List className="mt-4 sm:mt-6" posts={posts.slice(0, 3)} />
                <Separator className="my-6" />
                {/* <Link href="/posts">See All Posts →</Link> */}
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
