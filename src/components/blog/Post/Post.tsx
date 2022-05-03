import { MDXPost } from '@/utils/mdx'
import { MDXRemote } from 'next-mdx-remote'
import Image from 'next/image'
import { Code, H3, H2, Ul, Li, PTag, ATag, H1, BlockQuote } from './Post.styled'

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
        width={700}
        height={500}
        {...props}
      />
    </span>
  )
}
const componentsForMarkdownDisplay = {
  h1: H1,
  h2: H2,
  h3: H3,
  a: ATag,
  p: PTag,
  ul: Ul,
  li: Li,
  blockquote: BlockQuote,
  img: CenteredImage,
  code: Code,
}

interface Props {
  post: MDXPost
}
export default function Post({ post }: Props) {
  return (
    <MDXRemote {...post.source} components={componentsForMarkdownDisplay} />
  )
}
