import NextLink from 'next/link'
import type { LinkProps as NextLinkProps } from 'next/link'

export type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & NextLinkProps & {
  variant?: keyof typeof styles.variants
}

const Link = ({
  className = '',
  variant = 'default',
  ...props
}: LinkProps) => (
  <NextLink {...props}>
    <a className={[
      'py-3 transition',
      styles.variants[variant],
      className,
    ].join(' ')} {...props} />
  </NextLink>
)

const styles = {
  variants: {
    default: 'font-semibold text-gray-600 dark:text-gray-400 hover:text-accent-500 dark:hover:text-accent-400',
    rss: 'text-orange-600 dark:text-orange-400 hover:opacity-70 sm:hover:translate-x-px sm:hover:-translate-y-px',
    twitter: 'text-[#1d9bf0] hover:opacity-70 sm:hover:-rotate-12',
  },
}

export default Link
