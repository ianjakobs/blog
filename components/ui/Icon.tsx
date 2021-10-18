import { forwardRef } from 'react'

export type IconProps = React.SVGProps<SVGSVGElement> & {
    name: keyof typeof icons
    size?: number | string
}

const Icon = forwardRef<SVGSVGElement, IconProps>(({
    className = '',
    name,
    size = '1em',
    ...props
}, ref) => (
    <svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        shapeRendering="geometricPrecision"
        className={`stroke-current stroke-2 ${className}`}
        ref={ref}
        {...props}
    >
        {icons[name]}
    </svg>
))

const icons = {
    rss: (
        <>
            <path d="M4 11a9 9 0 019 9" />
            <path d="M4 4a16 16 0 0116 16" />
            <circle cx="5" cy="19" r="1" />
        </>
    ),
    twitter: (
        <>
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
        </>
    ),
}

Icon.displayName = 'Icon'

export default Icon
