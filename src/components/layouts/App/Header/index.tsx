import Link from './Link'
import { Container, Icon } from '@/components/ui'
import { TWITTER } from '@/lib/constants'

const Header = () => (
  <Container as="header" className="flex pt-1 sm:pt-3 pb-12 sm:pb-24">
    <nav className="flex space-x-8">
      <Link href="/">Home</Link>
      {/* <Link href="/posts">Posts</Link> */}
      <Link href="/about">About</Link>
    </nav>

    <Link aria-label="Twitter" className="ml-auto px-4" href={TWITTER} variant="twitter">
      <Icon className="inline fill-current" name="twitter" />
    </Link>

    <Link aria-label="RSS" className="-mr-4 px-4" href="/feed.xml" variant="rss">
      <Icon className="inline" name="rss" />
    </Link>
  </Container>
)

export default Header
