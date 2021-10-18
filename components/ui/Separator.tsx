export type SeparatorProps = React.HTMLAttributes<HTMLHRElement> & {
    variant?: keyof typeof styles.variants
    weight?: keyof typeof styles.weights
}

const Separator = ({
    className = '',
    variant = 'gray',
    weight = 'medium',
    ...props
}: SeparatorProps) => (
    <hr
        aria-orientation="horizontal"
        className={`${styles.variants[variant]} ${styles.weights[weight]} ${className}`}
        {...props}
    />
)

const styles = {
    variants: {
        accent: 'border-accent-500 dark:border-accent-400',
        gray: 'border-gray-200 dark:border-gray-800',
    },
    weights: {
        medium: '',
        heavy: 'border-t-2',
    },
}

export default Separator
