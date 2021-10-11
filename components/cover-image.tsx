import Image from 'next/image'
import Link from 'next/link'
import cn from 'classnames'


type Props = {
    title: string
    src: string
    slug?: string
}

const CoverImage = ({ title, src, slug }: Props) => {
    const image = (
        <Image
            src={src}
            alt={`Cover Image for ${title}`}
            className={cn('shadow-small', {
                'hover:shadow-medium transition-shadow duration-200': slug,
            })}
            height="1000px"
            width="2000px"
        />
    )
    return (
        <div className="sm:mx-0">
            {slug ? (
                <Link as={`/posts/${slug}`} href="/posts/[slug]">
                    <a aria-label={title}>{image}</a>
                </Link>
            ) : (
            image
            )}
        </div>
    )
}

export default CoverImage
