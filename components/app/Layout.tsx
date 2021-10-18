import Head from 'next/head'
import { useRouter } from 'next/router'

import Container from './Container'
import Footer from './Footer'
import Header from './Header'
import { Heading } from '@/components/ui'
import { NAME } from '@/lib/constants'

export type LayoutProps = React.HTMLAttributes<HTMLElement> & {
    heading?: string
    meta?: Partial<{
        title: string
        description: string
        type: string
        published: string
        modified: string
    }>
}

const Layout = ({
    children,
    heading,
    meta: customMeta,
    ...props
}: LayoutProps) => {
    const router = useRouter()
    const meta = {
        description: 'On my interests, being an indie hacker, and building in public.',
        type: 'website',
        url: `https://ianjakobs.com${router.asPath.split('?')[0]}`,
        ...customMeta,
        title: customMeta?.title ? `${customMeta.title} · ${NAME}` : NAME,
    }

    return (
        <div className="grid grid-rows-[auto,1fr,auto] min-h-screen">
            <Head>
                <title>{meta.title}</title>
                <link rel="canonical" href={meta.url} />
                <meta name="description" content={meta.description} />
                <link rel="alternate" type="application/rss+xml" title={NAME} href="/feed.xml" />

                <meta property="og:title" content={meta.title} />
                <meta property="og:description" content={meta.description} />
                <meta property="og:site_name" content={NAME} />
                <meta property="og:type" content={meta.type} />
                <meta property="og:url" content={meta.url} />

                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content="@ianjakobs" />

                {meta.type === 'article' && (
                    <>
                        <meta property="article:published_time" content={meta.published} />
                        <meta property="article:modified_time" content={meta.modified} />
                        <meta property="article:author" content={NAME} />
                    </>
                )}
            </Head>

            <Header />

            <main {...props}>
                {heading && (
                    <Container as="header" className="mt-4">
                        <Heading as="h1">{heading}</Heading>
                    </Container>
                )}

                {children}
            </main>

            <Footer />
        </div>
    )
}

export default Layout
