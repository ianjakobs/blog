import { Container, Layout } from '@/components/app'
import { Avatar, Link, Separator, Text } from '@/components/ui'
import { EMAIL, NAME, TWITTER } from '@/lib/constants'

const Page = () => (
    <Layout heading="About" meta={{ title: 'About', description: 'All about me.' }}>
        <Container as="section">
            <Text className="mt-4 sm:mt-8" variant="secondary">
                Hi, I’m {NAME}. A product manager by day, I spend my free
                time working on side projects. My current focus is{` `}
                <Link href="https://felingua.com">Felingua</Link>{` `}
                to help me learn a new language.
            </Text>

            <Text className="mt-4" variant="secondary">
                I’m always open for a chat. I can be reached through{` `}
                <Link href={TWITTER}>Twitter</Link>
                {` `}or{` `}
                <Link href={`mailto:${EMAIL}`}>Email</Link>.
            </Text>

            <Separator className="w-1/3 my-6" weight="heavy" variant="accent" />

            <div className="flex items-center space-x-2">
                <Avatar size="small" />
                <Text>{NAME}</Text>
            </div>
        </Container>
    </Layout>
)

export default Page
