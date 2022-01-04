import Image from 'next/image'

import Link from './Link'
import { Container, Separator } from '@/components/ui'

const Footer = () => (
    <Container as="footer" className="pt-24 sm:pt-32 pb-8 sm:pb-16">
        <Separator className="mb-8" weight="heavy" />

        <nav className="grid gap-4 grid-cols-1 sm:grid-cols-3">
            <div className="flex flex-col space-y-4">
                <Link href="/">Home</Link>
                <Link href="/posts">Posts</Link>
                <Link href="/about">About</Link>
            </div>
            <div className="flex flex-col space-y-4">
                <Link href="https://twitter.com/ianjakobs">Twitter</Link>
                <Link href="https://github.com/ianjakobs">GitHub</Link>
            </div>

            <a
                className="sm:justify-self-center w-36"
                href="https://www.buymeacoffee.com/ianjakobs"
                rel="noreferrer"
                target="_blank"
            >
                <Image
                    alt="Buy Me A Coffee"
                    src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
                    height="60"
                    width="217"
                />
            </a>
        </nav>
    </Container>
)

export default Footer
