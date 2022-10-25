export type HeadingProps = React.HTMLAttributes<HTMLHeadingElement> & {
  as: keyof typeof styling.variants
  variant?: keyof typeof styling.variants
}

const Heading = ({
  as: Component,
  className = '',
  variant,
  ...props
}: HeadingProps) => (
  <Component
    className={`${styling.variants[variant || Component]} ${className}`}
    {...props}
  />
)

const styling = {
  variants: {
    h1: 'font-bold text-4xl sm:text-5xl leading-tight tracking-tighter',
    h2: 'font-bold text-3xl sm:text-4xl leading-tight tracking-tighter',
    h3: 'font-medium text-lg sm:text-xl',
  },
}

export default Heading
