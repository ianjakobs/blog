declare global {
  namespace NodeJS {
    interface ProcessEnv {
      URL: string

      NEXT_PUBLIC_FATHOM_ID: string
      NEXT_PUBLIC_FATHOM_DOMAIN: string
    }
  }
}

export default ProcessEnv
