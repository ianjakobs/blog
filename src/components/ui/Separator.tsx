export type SeparatorProps = React.HTMLAttributes<HTMLHRElement> & {
    orientation?: React.AriaAttributes['aria-orientation']
    variant?: keyof typeof styles.variants
    weight?: keyof typeof styles.weights
}

const Separator = ({
    className = '',
    orientation = 'horizontal',
    variant = 'gray',
    weight = 'medium',
    ...props
}: SeparatorProps) => (
    <hr aria-orientation={orientation} className={[
        styles.orientations[orientation],
        styles.variants[variant],
        styles.weights[weight],
        className,
    ].join(' ')} {...props} />
)

const styles = {
    orientations: {
        horizontal: '',
        vertical: 'h-auto w-px border-t-0 border-r',
    },
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
