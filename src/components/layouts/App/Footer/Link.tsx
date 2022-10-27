import NextLink from 'next/link'
import type { LinkProps as NextLinkProps } from 'next/link'

export type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & NextLinkProps

const Link = ({
  children,
  className = '',
  ...props
}: LinkProps) => (
  <NextLink className={[
    'font-medium text-gray-500 dark:text-gray-400',
    'hover:text-accent-500 dark:hover:text-accent-400 transition-colors',
    className,
  ].join(' ')} {...props}>
    {children}
    {props.href.startsWith('http') && (
      <span className="text-[0.8em]">
        {` `}↗
      </span>
    )}
  </NextLink>
)

export default Link
