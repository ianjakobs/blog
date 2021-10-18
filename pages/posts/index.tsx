import { Container, Layout } from '@/components/app'
import { List } from '@/components/post'
import { Post } from '@/types'
import { getPosts } from '@/lib/helpers'

type PageProps = {
    posts: Post[]
}

const Page = ({ posts }: PageProps) => (
    <Layout heading="All Posts" meta={{ title: 'Posts' }}>
        <Container className="mt-4 sm:mt-6">
            <List posts={posts} />
        </Container>
    </Layout>
)

export const getStaticProps = async () => ({
    props: {
        posts: getPosts([
            'date',
            'excerpt',
            'slug',
            'title',
        ])
    }
})

export default Page
