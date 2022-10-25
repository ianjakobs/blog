import NextLink from 'next/link'
import type { LinkProps as NextLinkProps } from 'next/link'

export type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & NextLinkProps

const Link = ({
  children,
  className = '',
  ...props
}: LinkProps) => {
  const isExternal = props.href.startsWith('http')
  const isFile = props.href.endsWith('.zip')

  return (isExternal || isFile) ? (
    <a className={`${styles} ${className}`} download={isFile} {...props}>
      {children}

      <span className="text-[0.8em]">
        {` `}{isExternal ? '↗' : '↓'}
      </span>
    </a>
  ) : (
    <NextLink {...props}>
      <a className={`${styles} ${className}`} {...props}>
        {children}
      </a>
    </NextLink>
  )
}

const styles = [
  'font-medium text-accent-500 dark:text-accent-400',
  'hover:opacity-70 dark:hover:opacity-80 transition-opacity',
  'underline',
].join(' ')

export default Link
