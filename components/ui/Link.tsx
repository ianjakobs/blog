import NextLink from 'next/link'
import type { LinkProps as NextLinkProps } from 'next/link'

export type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & NextLinkProps

const Link = ({
    children,
    className = '',
    ...props
}: LinkProps) => (
    <NextLink {...props}>
        <a className={[
            'font-medium text-accent-500 dark:text-accent-400',
            'hover:opacity-70 dark:hover:opacity-80 transition-opacity',
            'underline',
            className,
        ].join(' ')} {...props}>
            {children}
            {props.href.startsWith('http') && (
                <span className="text-[0.8em]">
                    {` `}↗
                </span>
            )}
        </a>
    </NextLink>
)

export default Link
