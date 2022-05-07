import { MDXPost } from '@/utils/mdx'
import { MDXRemote } from 'next-mdx-remote'
import Image from 'next/image'

function CenteredImage(props: any) {
  return (
    <span
      style={{
        display: 'flex',
        justifyContent: 'center',
        margin: '2rem 0',
      }}
    >
      <Image
        objectFit="cover"
        objectPosition="center"
        width={800}
        height={500}
        quality={100}
        {...props}
      />
    </span>
  )
}
const componentsForMarkdownDisplay = {
  img: CenteredImage,
}

interface Props {
  post: MDXPost
}
export default function Post({ post }: Props) {
  return (
    <article className="mx-auto prose-a:no-underline prose md:prose-lg lg:prose-xl">
      <MDXRemote {...post.source} components={componentsForMarkdownDisplay} />
    </article>
  )
}
