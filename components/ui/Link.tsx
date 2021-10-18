import NextLink from 'next/link'
import type { LinkProps as NextLinkProps } from 'next/link'

export type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & NextLinkProps

const Link = ({
    className = '',
    ...props
}: LinkProps) => (
    <NextLink {...props}>
        <a className={[
            'font-medium text-accent-500 dark:text-accent-400',
            'hover:opacity-70 dark:hover:opacity-80 transition-opacity',
            'underline',
            className,
        ].join(' ')} {...props} />
    </NextLink>
)

export default Link
