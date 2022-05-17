import { NextSeo } from 'next-seo'
import type { GetStaticProps, GetStaticPaths } from 'next'
import { getBlogImageSizes, getSlugs } from '@/api/posts'
import type { ImageSize } from '@/api/posts'
import 'highlight.js/styles/hybrid.css'
import { buildMdxSource, MDXPost } from '@/utils/mdx'
import Post from '@/components/blog/Post'
import { Container } from './Blog.styled'

interface Props {
  post: MDXPost
  imageSizes: ImageSize[]
}
export default function PostShow({ post, imageSizes }: Props) {
  return (
    <Container>
      <NextSeo title={post.meta.title} />
      <Post post={post} imageSizes={imageSizes} />
    </Container>
  )
}

type Params = {
  slug: string
}
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as Params
  const post = await buildMdxSource(slug)
  const imageSizes = getBlogImageSizes(slug)
  return { props: { post, imageSizes } }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getSlugs().map((slug) => ({ params: { slug } }))

  return {
    paths,
    fallback: false,
  }
}
