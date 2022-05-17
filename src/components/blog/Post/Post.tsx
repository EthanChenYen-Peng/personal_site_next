import type { ImageSize } from '@/api/posts'
import { MDXPost } from '@/utils/mdx'
import { MDXRemote } from 'next-mdx-remote'
import Image from 'next/image'

function Factory(imageSizes: ImageSize[]) {
  return function CenteredImage(props: any) {
    const correctImageSize: ImageSize | undefined = imageSizes.find(
      ({ image }) => image.replace('public', '') === props.src
    )

    const width = correctImageSize?.width || '600px'
    const height = correctImageSize?.height || '400px'
    return (
      <span
        style={{
          display: 'flex',
          justifyContent: 'center',
          margin: '0.5rem 0',
        }}
      >
        <Image
          objectFit="contain"
          width={width}
          height={height}
          quality={100}
          src={props.src}
          alt={props.alt}
        />
      </span>
    )
  }
}
// const componentsForMarkdownDisplay = {
//   img: ,
// }

interface Props {
  post: MDXPost
  imageSizes: ImageSize[]
}
export default function Post({ post, imageSizes }: Props) {
  const date = new Date(post.meta.createdAt)

  return (
    <article className="prose mx-auto prose-h1:text-3xl prose-p:break-words prose-a:break-words prose-a:no-underline prose-li:break-words md:prose-lg md:mt-20 lg:prose-xl">
      <div className="my-2">Published on: {date.toLocaleDateString()}</div>
      <MDXRemote {...post.source} components={{ img: Factory(imageSizes) }} />
    </article>
  )
}
