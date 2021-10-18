import 'tailwindcss/tailwind.css'
import * as Fathom from 'fathom-client'
import { AppProps } from 'next/app'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

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
        <Component {...pageProps} />
    )
}

export default App
