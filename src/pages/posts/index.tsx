import type { Post } from '@/types'
import { App } from '@/components/layouts'
import { Container } from '@/components/ui'
import { List } from '@/components/post'
import { getPosts } from '@/lib/helpers'

type PageProps = {
  posts: Post[]
}

const Page = ({ posts }: PageProps) => (
  <App heading="All Posts" meta={{ title: 'Posts' }}>
    <Container className="mt-4 sm:mt-6">
      <List posts={posts} />
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
