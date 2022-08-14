import 'tailwindcss/tailwind.css'
import * as Fathom from 'fathom-client'
import Image from 'next/image'
import { AppProps } from 'next/app'
import { MDXProvider } from '@mdx-js/react'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

import '@/styles/code.css'
import { Link, Separator } from '@/components/ui'

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
            img: ({
                alt,
                src = '',
                ...props
            }: Pick<JSX.IntrinsicElements['img'], 'alt' | 'height' | 'src' | 'width'>) => {
                const hasAppearance = src.includes('-light')
                const classNames = {
                    'keyboard-maestro-palette': 'max-w-[250px]',
                    'macos-assign-to': 'max-w-[325px] mx-auto',
                    'pomodoro-menu': 'max-w-[300px]',
                }

                const className = Object.keys(classNames).reduce((str, key) => src.includes(key)
                    ? str += classNames[key as keyof typeof classNames]
                    : str
                , '')

                return (
                    <>
                        {hasAppearance && (
                            <picture className={`hidden invisible dark:block dark:visible ${className}`}>
                                <Image alt={alt} src={src.replace('-light', '-dark')} {...props} />
                            </picture>
                        )}

                        <picture className={`block ${className} ${hasAppearance ? 'dark:hidden dark:invisible' : ''}`}>
                            <Image alt={alt} src={src} {...props} />
                        </picture>
                    </>
                )
            },
        }}>
            <Component {...pageProps} />
        </MDXProvider>
    )
}

export default App
