import App from './App'
import type { Post } from '@/types'
import { Avatar, Container, Link, Separator, Text, Time } from '@/components/ui'
import { NAME } from '@/lib/constants'

export type LayoutProps = {
    children: React.ReactNode
    frontmatter: Post
}

const Post = ({
    children,
    frontmatter,
}: LayoutProps) => (
    <App
        className="min-w-0"
        heading={frontmatter.title}
        meta={{
            title: frontmatter.title,
            description: frontmatter.excerpt,
            type: 'article',
            published: frontmatter.created,
            modified: frontmatter.updated || frontmatter.created,
        }}
    >
        <Container as="article">
            <Text className="mt-2" size="large" variant="secondary">
                {frontmatter.excerpt}
            </Text>
            <Separator className="my-3 w-1/3" variant="accent" weight="heavy" />

            <div className="flex items-center mb-6 sm:mb-12 space-x-2">
                <Avatar size="small" />
                <Text size="small" variant="secondary">
                    {NAME} · <Time date={frontmatter.created} />
                </Text>
            </div>

            <div className="prose prose-sm sm:prose lg:prose-lg dark:prose-light dark:sm:prose-light">
                {children}
            </div>

            <footer>
                <Separator className="my-6 sm:my-12 w-1/3" variant="accent" weight="heavy" />

                <Text className="italic" variant="secondary">
                    I’m an indie hacker building in public on{` `}
                    <Link href="https://www.twitter.com/ianjakobs">Twitter</Link>.
                    <br />
                    My current project is{` `}
                    <Link href="https://felingua.com">Felingua</Link>{` `}
                    —language practice made easy.
                </Text>
            </footer>
        </Container>

        <style jsx global>{`
            .line-number::before {
                content: attr(line);
                position: sticky;
                left: -24px;
                display: inline-block;
                margin-left: -24px;
                margin-right: 8px;
                padding-right: 8px;
                width: 44px;
                background-color: #262626;
                border-right: 1px solid #404040;
                color: #737373;
                text-align: right;
            }

            @media (min-width: 1024px) {
                .line-number::before {
                    margin-right: 16px;
                    padding-right: 16px;
                    width: 52px;
                }
            }
        `}</style>
    </App>
)

export default Post
