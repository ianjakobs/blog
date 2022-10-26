import Link from './Link'
import { Container, Separator } from '@/components/ui'

const Footer = () => (
  <Container as="footer" className="pt-24 sm:pt-32 pb-4 sm:pb-6">
    <Separator className="mb-4 sm:mb-6" weight="heavy" />

    <nav className="flex flex-col gap-2 text-sm sm:flex-row sm:justify-between">
      <div className="flex justify-between gap-4">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/feed.xml">RSS</Link>
      </div>
      <div className="flex justify-between gap-4">
        <Link href="https://www.buymeacoffee.com/ianjakobs" rel="noreferrer">Support</Link>
        <Link href="https://github.com/ianjakobs">GitHub</Link>
        <Link href="https://twitter.com/ianjakobs">Twitter</Link>
      </div>
    </nav>
  </Container>
)

export default Footer
