import 'tailwindcss/tailwind.css'
import * as Fathom from 'fathom-client'
import Image, { type ImageProps } from 'next/image'
import { AppProps } from 'next/app'
import { Children } from 'react'
import { MDXProvider } from '@mdx-js/react'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

import '@/styles/code.css'
import { Icon, Link, Separator } from '@/components/ui'

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter()

  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      Fathom.load(process.env.NEXT_PUBLIC_FATHOM_ID, {
        includedDomains: ['ianjakobs.com'],
        url: `https://${process.env.NEXT_PUBLIC_FATHOM_DOMAIN}/script.js`,
      })
    }

    const onRouteChangeComplete = () => Fathom.trackPageview()
    router.events.on('routeChangeComplete', onRouteChangeComplete)

    return () => {
      router.events.off('routeChangeComplete', onRouteChangeComplete)
    }
  }, [router.events])

  return (
    <MDXProvider components={{
      // @ts-expect-error Dunno
      a: Link,
      hr: Separator,
      blockquote: (props: JSX.IntrinsicElements['blockquote']) => {
        const children = Children.toArray(props.children)
        const [type, ...content] = (children[1] as React.ReactElement).props.children
        const isNote = type.props.children === 'Note'

        return isNote ? (
          <pre className={[
            '!bg-blue-50 dark:!bg-blue-900/20 !border-blue-200 dark:!border-blue-900',
            '!text-blue-900 dark:!text-blue-200 font-sans whitespace-normal',
            'prose-code:before:!content-["`"] prose-code:after:!content-["`"]',
            'prose-code:!font-semibold prose-code:!text-[color:var(--tw-prose-code)]',
          ].join(' ')}>
            <span className="flex items-center gap-2 text-blue-500 dark:text-blue-400 font-medium">
              <Icon name="info" />
              Note
            </span>
            {content}
          </pre>
        ) : <blockquote {...props} />
      },
      img: ({
        alt = '',
        height,
        src = '',
        width,
        ...props
      }: Pick<JSX.IntrinsicElements['img'], 'alt' | 'height' | 'src' | 'width'>) => {
        const hasAppearance = src.includes('-light')
        const classNames = {
          'keyboard-maestro-palette': 'max-w-[250px]',
          'macos-assign-to': 'max-w-[325px] mx-auto',
          'pomodoro-menu': 'max-w-[300px]',
        }

        const dimensions = { height, width } as Pick<ImageProps, 'height' | 'width'>
        const sizes = '(min-width: 640px) 640px, 100vw'
        const className = Object.keys(classNames).reduce((str, key) => src.includes(key)
          ? str += classNames[key as keyof typeof classNames]
          : str
        , '')

        return (
          <>
            {hasAppearance && (
              <Image
                alt={alt}
                className={`hidden dark:block ${className}`}
                sizes={sizes}
                src={src.replace('-light', '-dark')}
                {...dimensions}
                {...props}
              />
            )}

            <Image
              alt={alt}
              className={`${hasAppearance ? 'dark:hidden' : ''} ${className}`}
              sizes={sizes}
              src={src}
              {...dimensions}
              {...props}
            />
          </>
        )
      },
    }}>
      <Component {...pageProps} />
    </MDXProvider>
  )
}

export default App
