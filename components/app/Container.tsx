export type ContainerProps = React.HTMLAttributes<HTMLElement> & {
    as?: React.ElementType
}

const Container = ({
    as: Component = 'div',
    className = '',
    ...props
}: ContainerProps) => (
    <Component
        className={`container mx-auto px-6 md:px-0 max-w-prose ${className}`}
        {...props}
    />
)

export default Container
