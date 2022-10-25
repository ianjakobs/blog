export type TextProps = React.HTMLAttributes<HTMLParagraphElement> & {
  size?: keyof typeof styles.sizes
  variant?: keyof typeof styles.variants
}

const Text = ({
  className = '',
  size = 'medium',
  variant = 'primary',
  ...props
}: TextProps) => (
  <p
    className={`${styles.sizes[size]} ${styles.variants[variant]} ${className}`}
    {...props}
  />
)

const styles = {
  sizes: {
    small: 'text-sm',
    medium: '',
    large: 'text-lg',
  },
  variants: {
    primary: '',
    secondary: 'text-gray-600 dark:text-gray-400',
    tertiary: 'text-gray-500',
  },
}

export default Text
