import Head from 'next/head'
import { useRouter } from 'next/router'

import Footer from './Footer'
import Header from './Header'
import { Container, Heading } from '@/components/ui'
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
  const [path] = router.asPath.split('?')
  const meta = {
    description: 'On my interests, being an indie hacker, and building in public.',
    type: 'website',
    url: `https://ianjakobs.com${path}`,
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

        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
        <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#171717" media="(prefers-color-scheme: dark)" />

        <meta property="og:title" content={customMeta?.title || meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:site_name" content={NAME} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:url" content={meta.url} />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@ianjakobs" />

        {meta.type === 'article' && (
          <>
            <meta property="og:image" content={`https://ianjakobs.com${path}/og.png`} />
            <meta property="og:image:type" content="image/png" />
            <meta property="og:image:height" content="630" />
            <meta property="og:image:width" content="1200" />

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
