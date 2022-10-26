import { Head, Html, Main, NextScript } from 'next/document'

const Document = () => (
  <Html lang="en" className="scroll-smooth">
    <Head />

    <body className={[
      'bg-white dark:bg-gray-900',
      'text-gray-900 dark:text-gray-50',
      'selection:bg-accent-200 dark:selection:bg-accent-400 dark:selection:text-gray-900',
      'antialiased',
    ].join(' ')}>
      <Main />
      <NextScript />
    </body>
  </Html>
)

export default Document
