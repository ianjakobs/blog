import Link from './Link'
import { Container } from '@/components/app'
import { Icon } from '@/components/ui'
import { TWITTER } from '@/lib/constants'

const Header = () => (
    <Container as="header" className="flex pt-4 sm:pt-8 pb-12 sm:pb-24">
        <nav className="space-x-6">
            <Link href="/">Home</Link>
            {/* <Link href="/posts">Posts</Link> */}
            <Link href="/about">About</Link>
        </nav>

        <Link aria-label="Twitter" className="ml-auto" href={TWITTER} variant="twitter">
            <Icon className="inline fill-current" name="twitter" />
        </Link>

        <Link aria-label="RSS" className="ml-3" href="/feed.xml" variant="rss">
            <Icon className="inline" name="rss" />
        </Link>
    </Container>
)

export default Header
