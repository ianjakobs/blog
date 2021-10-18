import Image, { ImageProps } from 'next/image'

import avatar from '@/public/avatar.jpg'

export type AvatarProps = React.HTMLAttributes<HTMLElement> & {
    size?: keyof typeof sizes
}

const Avatar = ({
    className = '',
    size = 'medium',
    ...props
}: AvatarProps) => (
    <div className={`rounded-full overflow-hidden ${sizes[size].styles} ${className}`} {...props}>
        <Image
            alt="Ian Jakobs"
            src={avatar}
            {...sizes[size].props}
        />
    </div>
)

const sizes = {
    small: {
        props: { height: '24px', width: '24px' },
        styles: 'h-6 w-6',
    },
    medium: {
        props: { height: '112px', width: '112px', placeholder: 'blur' as ImageProps['placeholder'] },
        styles: 'h-16 w-16 sm:h-28 sm:w-28',
    },
}

export default Avatar
