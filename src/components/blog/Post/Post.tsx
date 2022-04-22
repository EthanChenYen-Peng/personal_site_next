import { MDXPost } from '@/utils/mdx'
import { MDXRemote } from 'next-mdx-remote'
import Image from 'next/image'
import { H1 } from './Post.styled'

function CenteredImage(src: string) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        margin: '2rem 0',
      }}
    >
      <Image
        src={src}
        objectFit="cover"
        alt="cover photo"
        width={700}
        height={500}
      />
    </div>
  )
}

const componentsForMarkdownDisplay = {
  CenteredImage,
  h1: H1,
}

interface Props {
  post: MDXPost
}
export default function Post({ post }: Props) {
  return (
    <MDXRemote {...post.source} components={componentsForMarkdownDisplay} />
  )
}
